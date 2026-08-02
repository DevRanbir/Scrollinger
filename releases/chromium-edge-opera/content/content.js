// Scrollinger Content Script - Smooth Uniform 0.8s Countdown Timer (No Jumps)


(function () {
  if (window.__AUTO_SCROLLER_INJECTED__) return;
  window.__AUTO_SCROLLER_INJECTED__ = true;

  let currentDomain = window.location.hostname;
  let currentPath = window.location.href;
  let currentUrlKey = window.location.hostname + window.location.pathname;
  const isSubFrame = window.self !== window.top;

  let state = {
    enabledGlobal: true,
    enabledDomains: {},
    autoScrollDomains: {},
    pageEnabled: {},
    subFrameDomains: {},
    subFramePages: {},
    includeSubFrames: true,


    scrollMode: 'natural',

    scrollAmount: 350,
    scrollInterval: 15,
    runLimitMinutes: 0,
    direction: 'down',
    autoReverse: true,
    isScrolling: false,
    instantAutoScroll: false,
    showInsiteButton: true,
    showInsiteButtonManual: false,
    widgetPosition: null,
    isWidgetCollapsed: false,
    stopOnInteraction: true
  };

  let scrollRafId = null;
  let scrollTimerId = null;
  let pendingBoundaryCheckId = null;
  let scrollRunId = 0;
  let bottomReachedTime = null;
  let lastHeightChangeTime = performance.now();
  let lastDocHeight = 0;
  let navigationToken = 0;
  let pageRunStartedAt = null;
  let pageLimitReached = false;
  const LAZY_WAIT_TIMEOUT_MS = 800; // Uniform 0.8s countdown timer
  const CONTENT_SETTLE_MS = 1000;

  // Shadow DOM elements
  let hostEl = null;
  let shadowRoot = null;
  let widgetContainer = null;
  let btnPlayPause = null;
  let btnDir = null;
  let btnAutoStart = null;
  let btnTempHideOpen = null;
  let btnTempHideClosed = null;
  let btnIgnorePageOpen = null;
  let btnIgnorePageClosed = null;
  let speedSlider = null;
  let speedBadge = null;
  let btnCollapse = null;
  let btnExpand = null;
  let btnCollapsedPlay = null;
  let btnCollapsedDir = null;
  let timerBadgeOpen = null;
  let timerBadgeClosed = null;
  let isWidgetTemporarilyHidden = false;

  const SVG_NS = "http://www.w3.org/2000/svg";

  function isContextValid() {
    try {
      return typeof chrome !== 'undefined' && chrome.runtime && !!chrome.runtime.id;
    } catch (e) {
      return false;
    }
  }

  function safeStorageGet(keys, callback) {
    if (!isContextValid()) return;
    try {
      chrome.storage.local.get(keys, (res) => {
        if (!isContextValid() || (chrome.runtime && chrome.runtime.lastError)) return;
        callback(res || {});
      });
    } catch (e) {}
  }

  function safeStorageSet(data, callback) {
    if (!isContextValid()) return;
    try {
      chrome.storage.local.set(data, () => {
        if (!isContextValid() || (chrome.runtime && chrome.runtime.lastError)) return;
        if (callback) callback();
      });
    } catch (e) {}
  }

  function safeGetURL(path) {
    if (!isContextValid()) return '';
    try {
      return chrome.runtime.getURL(path);
    } catch (e) {
      return '';
    }
  }

  function createSvgElement(tag, attrs = {}) {
    const el = document.createElementNS(SVG_NS, tag);
    for (const [k, v] of Object.entries(attrs)) {
      el.setAttribute(k, v);
    }
    return el;
  }

  function createGripSvg() {
    const dragSvg = createSvgElement('svg', { width: '10', height: '10', viewBox: '0 0 24 24', fill: 'currentColor' });
    [
      { cx: '8', cy: '4' }, { cx: '16', cy: '4' },
      { cx: '8', cy: '12' }, { cx: '16', cy: '12' },
      { cx: '8', cy: '20' }, { cx: '16', cy: '20' }
    ].forEach(c => {
      dragSvg.appendChild(createSvgElement('circle', { cx: c.cx, cy: c.cy, r: '2.5' }));
    });
    return dragSvg;
  }

  function createLightningSvg() {
    const svg = createSvgElement('svg', { width: '11', height: '11', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' });
    svg.appendChild(createSvgElement('path', { d: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z' }));
    return svg;
  }

  function createHideSvg() {
    const svg = createSvgElement('svg', { width: '12', height: '12', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' });
    svg.appendChild(createSvgElement('path', { d: 'M3 3l18 18' }));
    svg.appendChild(createSvgElement('path', { d: 'M10.6 10.7a2 2 0 0 0 2.7 2.7' }));
    svg.appendChild(createSvgElement('path', { d: 'M9.9 4.2A10.8 10.8 0 0 1 12 4c5 0 8.7 4 10 8a11.8 11.8 0 0 1-3.1 4.9' }));
    svg.appendChild(createSvgElement('path', { d: 'M6.6 6.6C4.8 7.8 3.5 9.8 2 12c1.3 4 5 8 10 8 1.1 0 2.1-.2 3-.5' }));
    return svg;
  }

  function createIgnoreSvg() {
    const svg = createSvgElement('svg', { width: '12', height: '12', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' });
    svg.appendChild(createSvgElement('circle', { cx: '12', cy: '12', r: '8.5' }));
    svg.appendChild(createSvgElement('path', { d: 'M5.8 5.8l12.4 12.4' }));
    return svg;
  }

  function createDirSvg() {
    const dirSvg = createSvgElement('svg', { class: 'as-icon-dir', width: '12', height: '12', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '2.5' });
    dirSvg.appendChild(createSvgElement('path', { d: 'M12 5v14M19 12l-7 7-7-7' }));
    return dirSvg;
  }

  if (!isSubFrame) {
    init();
  } else {
    safeStorageGet(['includeSubFrames'], (saved) => {
      if (saved.includeSubFrames !== false) init();
    });
  }

  function init() {
    loadAndApplySettings();

    try {
      if (isContextValid() && chrome.storage && chrome.storage.onChanged) {
        chrome.storage.onChanged.addListener((changes, area) => {
          if (!isContextValid()) return;
          if (area === 'local') {
            safeStorageGet(null, (saved) => {
              const wasScrolling = state.isScrolling;
              const prevMode = state.scrollMode;
              const prevAmount = state.scrollAmount;
              const prevInterval = state.scrollInterval;
              const prevDir = state.direction;

              state = { ...state, ...saved };

              if (pageLimitReached) state.isScrolling = false;
              if (!isDomainAutoScrollEnabled()) state.isScrolling = false;

              if (!checkScopeEnabled()) {
                removeWidget();
                stopScrolling();
                return;
              }

              setupWidget();
              syncStateUI();

              if (state.isScrolling && !wasScrolling) {
                pageRunStartedAt = null;
                pageLimitReached = false;
                startScrolling();
              } else if (!state.isScrolling && wasScrolling) {
                stopScrolling();
              } else if (state.isScrolling && (state.scrollMode !== prevMode || state.scrollAmount !== prevAmount || state.scrollInterval !== prevInterval || state.direction !== prevDir)) {
                restartScrolling();
              }
            });
          }
        });

      }
    } catch (e) {}

    try {
      if (isContextValid() && chrome.runtime && chrome.runtime.onMessage) {
        chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
          if (!isContextValid()) return;
          if (req.type === 'PAGE_LOADED_AUTO_SCROLL') {
            loadAndApplySettings(true);
          } else if (req.type === 'STORAGE_UPDATED') {
            safeStorageGet(null, (saved) => {
              state = { ...state, ...saved };
              syncStateUI();
            });
          }
        });
      }
    } catch (e) {}

    setupSPANavigationListeners();
    setupMutationAndImageObserver();
    setupUserInteractionListeners();
    setupScrollEngineWatchdog();

    if (document.readyState === 'complete') {
      onPageReady();
    } else {
      window.addEventListener('load', onPageReady);
      document.addEventListener('DOMContentLoaded', onPageReady);
    }
  }

  function loadAndApplySettings() {
    currentDomain = window.location.hostname;
    currentPath = window.location.href;

    safeStorageGet(null, (saved) => {
      state = { ...state, ...saved };

      if (!checkScopeEnabled()) {
        removeWidget();
        stopScrolling();
        return;
      }

      setupWidget();

      // If instantAutoScroll (Auto-Start mode) is enabled or isScrolling is active, auto-start on load
      if (isDomainAutoScrollEnabled() && (state.instantAutoScroll || state.isScrolling)) {
        state.isScrolling = true;
        syncStateUI();
        startScrolling();
      } else {
        state.isScrolling = false;
        syncStateUI();
        stopScrolling();
      }
    });
  }


  function onPageReady() {
    if (!checkScopeEnabled()) {
      removeWidget();
      stopScrolling();
    }
  }


  function setupSPANavigationListeners() {
    window.addEventListener('popstate', handleURLChange);
    window.addEventListener('hashchange', handleURLChange);

    const rawPushState = history.pushState;
    if (rawPushState) {
      history.pushState = function () {
        rawPushState.apply(this, arguments);
        handleURLChange();
      };
    }

    const rawReplaceState = history.replaceState;
    if (rawReplaceState) {
      history.replaceState = function () {
        rawReplaceState.apply(this, arguments);
        handleURLChange();
      };
    }

    setInterval(() => {
      if (window.location.href !== currentPath) {
        handleURLChange();
      }
    }, 1000);
  }

  function handleURLChange() {
    const navigationId = ++navigationToken;
    const wasScrolling = state.isScrolling || scrollRafId !== null || scrollTimerId !== null || pendingBoundaryCheckId !== null;
    const shouldResume = wasScrolling || state.instantAutoScroll;

    // Stop the old page loop before the SPA replaces its content. The new
    // page gets one clean engine instance after its layout has settled.
    stopScrolling();
    currentPath = window.location.href;
    currentDomain = window.location.hostname;
    currentUrlKey = window.location.hostname + window.location.pathname;
    isWidgetTemporarilyHidden = false;
    bottomReachedTime = null;

    lastHeightChangeTime = performance.now();

    setTimeout(() => {
      safeStorageGet(null, (saved) => {
        if (navigationId !== navigationToken) return;
        state = { ...state, ...saved };
        pageRunStartedAt = null;
        pageLimitReached = false;
        if (!checkScopeEnabled()) {
          removeWidget();
          stopScrolling();
          return;
        }
        setupWidget();
        syncStateUI();
        if (shouldResume || state.isScrolling || state.instantAutoScroll) {
          state.isScrolling = true;
          startScrolling();
        }
      });
    }, 300);
  }

  function setupUserInteractionListeners() {
    const handleUserInteraction = (e) => {
      if (hostEl) {
        if (hostEl.contains(e.target) || (e.composedPath && e.composedPath().includes(hostEl))) {
          return;
        }
      }

      if (state.isScrolling || bottomReachedTime !== null || pendingBoundaryCheckId) {
        if (bottomReachedTime !== null) {
          // User interrupted during the wait/timer countdown — skip the wait immediately
          // and execute the pending action (auto-reverse or stop) right now.
          state.isScrolling = false;
          stopScrolling();
          syncStateUI();
        } else {
          // User interrupted during active scrolling — stop locally on this tab only.
          // Do NOT call safeStorageSet so other open tabs continue scrolling.
          state.isScrolling = false;
          stopScrolling();
          syncStateUI();
        }
      }

    };

    // Listen to genuine user scroll gestures (wheel, touchmove swipe, scroll keys)
    // Clicks/mousedown on links and text should NOT interrupt auto-scrolling.
    window.addEventListener('wheel', handleUserInteraction, { passive: true });
    window.addEventListener('touchmove', handleUserInteraction, { passive: true });
    window.addEventListener('keydown', (e) => {
      if (['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Space', ' ', 'Home', 'End'].includes(e.key)) {
        handleUserInteraction(e);
      }
    }, { passive: true });
  }

  // Immediately resolves the pending timer action without waiting for the countdown.
  // If autoReverse is on, flips direction and continues scrolling;
  // otherwise stops scrolling cleanly.
  function skipTimer() {
    bottomReachedTime = null;
    if (pendingBoundaryCheckId) {
      clearTimeout(pendingBoundaryCheckId);
      pendingBoundaryCheckId = null;
    }
    updateTimerBadges(0);

    if (state.autoReverse) {
      // Flip direction and keep scrolling — the RAF/interval loop will pick it up
      const newDir = state.direction === 'down' ? 'up' : 'down';
      state.direction = newDir;
      safeStorageSet({ direction: newDir });
    } else {
      // Stop cleanly
      state.isScrolling = false;
      safeStorageSet({ isScrolling: false });
      stopScrolling();
      syncStateUI();
    }
  }


  function hasPendingImages() {
    try {
      const imgs = Array.from(document.querySelectorAll('img'));
      return imgs.some(img => !img.complete && img.src && img.src !== '');
    } catch (e) {
      return false;
    }
  }

  function setupMutationAndImageObserver() {
    let activityMeasureTimer = null;
    const onActivity = () => {
      // DOM mutations are often unrelated to page height (analytics, ads,
      // the widget itself). Only reset the boundary wait when the scrollable
      // area actually grows, otherwise the countdown flickers indefinitely.
      const currentHeight = getMaxScroll(window);
      if (currentHeight <= lastDocHeight + 1) return;

      lastDocHeight = currentHeight;
      lastHeightChangeTime = performance.now();
      bottomReachedTime = null;
      updateTimerBadges(0);
    };

    const observer = new MutationObserver(() => {
      // Coalesce mutation bursts before measuring page height.
      if (activityMeasureTimer) clearTimeout(activityMeasureTimer);
      activityMeasureTimer = setTimeout(() => {
        activityMeasureTimer = null;
        onActivity();
      }, 50);
    });

    if (document.body) {
      observer.observe(document.body, { childList: true, subtree: true, attributes: true, characterData: true });
    }

    if (typeof ResizeObserver !== 'undefined' && document.body) {
      const resizeObs = new ResizeObserver(() => {
        onActivity();
      });
      resizeObs.observe(document.body);
    }

    document.addEventListener('load', (e) => {
      if (e.target && e.target.tagName === 'IMG') {
        onActivity();
      }
    }, true);
  }

  function checkScopeEnabled() {
    // Tier 1: Page Level (Highest Specificity Priority)
    const pageEnabled = state.pageEnabled || state.subFramePages || {};
    if (currentUrlKey && pageEnabled[currentUrlKey] !== undefined) {
      return !isDisabledScopeValue(pageEnabled[currentUrlKey]);
    }

    // Tier 2: Domain Level (Medium Specificity Priority)
    if (state.enabledDomains && currentDomain && state.enabledDomains[currentDomain] !== undefined) {
      return !isDisabledScopeValue(state.enabledDomains[currentDomain]);
    }

    // Tier 3: Global Level (Base Priority Default)
    return (state.enabledGlobal !== false);
  }

  function isDisabledScopeValue(value) {
    return value === false || value === 'false' || value === 0;
  }

  function isDomainAutoScrollEnabled() {
    const autoScrollDomains = state.autoScrollDomains || {};
    return !!(currentDomain && autoScrollDomains[currentDomain] === true);
  }







  function setupWidget() {
    if (isWidgetTemporarilyHidden) {
      removeWidget();
      return;
    }

    if (!state.showInsiteButton) {
      removeWidget();
      return;
    }

    if (hostEl) {
      if (widgetContainer) {
        widgetContainer.classList.remove('as-hidden');
        if (state.isWidgetCollapsed) {
          widgetContainer.classList.add('as-collapsed');
        } else {
          widgetContainer.classList.remove('as-collapsed');
        }
      }
      applySavedWidgetPosition();
      return;
    }

    hostEl = document.createElement('div');
    hostEl.id = 'auto-scroller-widget-host';
    shadowRoot = hostEl.attachShadow({ mode: 'open' });

    const cssUrl = safeGetURL('content/content.css');
    if (cssUrl) {
      const cssLink = document.createElement('link');
      cssLink.rel = 'stylesheet';
      cssLink.href = cssUrl;
      shadowRoot.appendChild(cssLink);

      fetch(cssUrl)
        .then(r => r.text())
        .then(cssText => {
          const styleEl = document.createElement('style');
          styleEl.textContent = cssText;
          shadowRoot.insertBefore(styleEl, shadowRoot.firstChild);
        })
        .catch(() => {});
    }


    widgetContainer = document.createElement('div');
    widgetContainer.className = 'as-widget-container as-thin-strip as-expand-up';

    if (state.isWidgetCollapsed) {
      widgetContainer.classList.add('as-collapsed');
    }

    // 1. Closed Mode View
    const collapsedView = document.createElement('div');
    collapsedView.className = 'as-collapsed-view';

    btnExpand = document.createElement('button');
    btnExpand.type = 'button';
    btnExpand.className = 'as-btn as-strip-btn';
    btnExpand.id = 'asBtnExpand';
    btnExpand.title = 'Expand Controls';

    const expandSvg = createSvgElement('svg', { class: 'as-chevron-icon', width: '10', height: '10', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '3' });
    expandSvg.appendChild(createSvgElement('polyline', { points: '18 15 12 9 6 15' }));
    btnExpand.appendChild(expandSvg);

    btnCollapsedPlay = document.createElement('button');
    btnCollapsedPlay.type = 'button';
    btnCollapsedPlay.className = 'as-btn as-strip-btn';
    btnCollapsedPlay.id = 'asBtnCollapsedPlay';
    btnCollapsedPlay.title = 'Play / Pause Scroll';

    const collapsedPlaySvg = createSvgElement('svg', { class: 'as-play-svg', width: '12', height: '12', viewBox: '0 0 24 24', fill: 'currentColor' });
    collapsedPlaySvg.appendChild(createSvgElement('polygon', { points: '5 3 19 12 5 21 5 3' }));
    btnCollapsedPlay.appendChild(collapsedPlaySvg);

    btnCollapsedDir = document.createElement('button');
    btnCollapsedDir.type = 'button';
    btnCollapsedDir.className = 'as-btn as-strip-btn';
    btnCollapsedDir.id = 'asBtnCollapsedDir';
    btnCollapsedDir.title = 'Toggle Direction';
    btnCollapsedDir.appendChild(createDirSvg());

    timerBadgeClosed = document.createElement('span');
    timerBadgeClosed.className = 'as-timer-badge as-hidden';
    timerBadgeClosed.id = 'asTimerClosed';
    timerBadgeClosed.style.display = 'none';

    const dragHandleClosed = document.createElement('div');
    dragHandleClosed.className = 'as-drag-handle as-drag-bottom';
    dragHandleClosed.title = 'Drag';
    dragHandleClosed.appendChild(createGripSvg());

    collapsedView.appendChild(btnExpand);
    collapsedView.appendChild(btnCollapsedPlay);
    collapsedView.appendChild(btnCollapsedDir);
    collapsedView.appendChild(timerBadgeClosed);

    btnTempHideClosed = document.createElement('button');
    btnTempHideClosed.type = 'button';
    btnTempHideClosed.className = 'as-btn as-strip-btn as-temp-hide-btn';
    btnTempHideClosed.title = 'Temporarily Hide Widget';
    btnTempHideClosed.appendChild(createHideSvg());
    collapsedView.appendChild(btnTempHideClosed);

    btnIgnorePageClosed = document.createElement('button');
    btnIgnorePageClosed.type = 'button';
    btnIgnorePageClosed.className = 'as-btn as-strip-btn as-ignore-page-btn';
    btnIgnorePageClosed.title = 'Ignore This Page';
    btnIgnorePageClosed.appendChild(createIgnoreSvg());
    collapsedView.appendChild(btnIgnorePageClosed);
    collapsedView.appendChild(dragHandleClosed);

    // 2. Open Mode View
    const expandedView = document.createElement('div');
    expandedView.className = 'as-expanded-view';

    btnCollapse = document.createElement('button');
    btnCollapse.type = 'button';
    btnCollapse.className = 'as-btn as-strip-btn';
    btnCollapse.id = 'asBtnCollapse';
    btnCollapse.title = 'Minimize';

    const collapseSvg = createSvgElement('svg', { class: 'as-chevron-icon', width: '10', height: '10', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': '3' });
    collapseSvg.appendChild(createSvgElement('polyline', { points: '6 9 12 15 18 9' }));
    btnCollapse.appendChild(collapseSvg);

    btnPlayPause = document.createElement('button');
    btnPlayPause.type = 'button';
    btnPlayPause.className = 'as-btn as-strip-btn';
    btnPlayPause.id = 'asBtnPlayPause';
    btnPlayPause.title = 'Play / Pause Scroll';

    const playSvg = createSvgElement('svg', { class: 'as-play-svg', width: '12', height: '12', viewBox: '0 0 24 24', fill: 'currentColor' });
    playSvg.appendChild(createSvgElement('polygon', { points: '5 3 19 12 5 21 5 3' }));
    btnPlayPause.appendChild(playSvg);

    btnDir = document.createElement('button');
    btnDir.type = 'button';
    btnDir.className = 'as-btn as-strip-btn';
    btnDir.id = 'asBtnDir';
    btnDir.title = 'Toggle Direction';
    btnDir.appendChild(createDirSvg());

    const sliderContainer = document.createElement('div');
    sliderContainer.className = 'as-slider-vert-container';

    speedSlider = document.createElement('input');
    speedSlider.type = 'range';
    speedSlider.className = 'as-widget-slider-vert';
    speedSlider.id = 'asSpeedSlider';
    speedSlider.min = '50';
    speedSlider.max = '5000';
    speedSlider.step = '50';
    speedSlider.value = '350';
    speedSlider.setAttribute('orient', 'vertical');
    speedSlider.title = 'Scroll Speed';
    sliderContainer.appendChild(speedSlider);

    speedBadge = document.createElement('span');
    speedBadge.className = 'as-speed-val';
    speedBadge.id = 'asSpeedBadge';
    speedBadge.textContent = '350';

    timerBadgeOpen = document.createElement('span');
    timerBadgeOpen.className = 'as-timer-badge as-hidden';
    timerBadgeOpen.id = 'asTimerOpen';
    timerBadgeOpen.style.display = 'none';

    btnAutoStart = document.createElement('button');
    btnAutoStart.type = 'button';
    btnAutoStart.className = 'as-btn as-strip-btn';
    btnAutoStart.id = 'asBtnAutoStart';
    btnAutoStart.title = 'Auto-Scroll on Page Load';
    btnAutoStart.appendChild(createLightningSvg());

    btnTempHideOpen = document.createElement('button');
    btnTempHideOpen.type = 'button';
    btnTempHideOpen.className = 'as-btn as-strip-btn as-temp-hide-btn';
    btnTempHideOpen.title = 'Temporarily Hide Widget';
    btnTempHideOpen.appendChild(createHideSvg());

    btnIgnorePageOpen = document.createElement('button');
    btnIgnorePageOpen.type = 'button';
    btnIgnorePageOpen.className = 'as-btn as-strip-btn as-ignore-page-btn';
    btnIgnorePageOpen.title = 'Ignore This Page';
    btnIgnorePageOpen.appendChild(createIgnoreSvg());

    const dragHandleOpen = document.createElement('div');
    dragHandleOpen.className = 'as-drag-handle as-drag-bottom';
    dragHandleOpen.title = 'Drag';
    dragHandleOpen.appendChild(createGripSvg());

    expandedView.appendChild(btnCollapse);
    expandedView.appendChild(btnPlayPause);
    expandedView.appendChild(btnDir);
    expandedView.appendChild(sliderContainer);
    expandedView.appendChild(speedBadge);
    expandedView.appendChild(timerBadgeOpen);
    expandedView.appendChild(btnAutoStart);
    expandedView.appendChild(btnTempHideOpen);
    expandedView.appendChild(btnIgnorePageOpen);
    expandedView.appendChild(dragHandleOpen);

    widgetContainer.appendChild(collapsedView);
    widgetContainer.appendChild(expandedView);
    shadowRoot.appendChild(widgetContainer);

    if (document.body) {
      document.body.appendChild(hostEl);
    } else {
      document.documentElement.appendChild(hostEl);
    }

    applySavedWidgetPosition();
    bindWidgetEvents();
    makeWidgetDraggable(widgetContainer, [dragHandleOpen, dragHandleClosed]);
  }

  function applySavedWidgetPosition() {
    if (!widgetContainer) return;
    if (state.widgetPosition) {
      const { right, top, bottom, alignMode } = state.widgetPosition;

      if (right) widgetContainer.style.right = right;
      if (alignMode === 'top' && top) {
        widgetContainer.style.top = top;
        widgetContainer.style.bottom = 'auto';
        widgetContainer.classList.add('as-expand-down');
        widgetContainer.classList.remove('as-expand-up');
        updateChevronDirections(true);
      } else if (bottom) {
        widgetContainer.style.bottom = bottom;
        widgetContainer.style.top = 'auto';
        widgetContainer.classList.add('as-expand-up');
        widgetContainer.classList.remove('as-expand-down');
        updateChevronDirections(false);
      }
    } else {
      widgetContainer.style.right = '20px';
      widgetContainer.style.bottom = '20px';
      widgetContainer.style.top = 'auto';
      widgetContainer.classList.add('as-expand-up');
      widgetContainer.classList.remove('as-expand-down');
    }
  }


  function removeWidget() {
    if (hostEl && hostEl.parentNode) {
      hostEl.parentNode.removeChild(hostEl);
      hostEl = null;
      shadowRoot = null;
      widgetContainer = null;
    }
  }

  function bindWidgetEvents() {
    const ignoreCurrentPage = (e) => {
      e.stopPropagation();
      if (!currentUrlKey) return;

      state.isScrolling = false;
      stopScrolling();
      state.pageEnabled = { ...(state.pageEnabled || {}), [currentUrlKey]: false };
      removeWidget();

      safeStorageGet(['pageEnabled', 'subFramePages'], (saved) => {
        const pageEnabled = {
          ...(saved.pageEnabled || saved.subFramePages || {}),
          [currentUrlKey]: false
        };
        safeStorageSet({ pageEnabled, subFramePages: pageEnabled });
      });
    };

    if (btnIgnorePageOpen) btnIgnorePageOpen.addEventListener('click', ignoreCurrentPage);
    if (btnIgnorePageClosed) btnIgnorePageClosed.addEventListener('click', ignoreCurrentPage);

    const temporarilyHideWidget = (e) => {
      e.stopPropagation();
      isWidgetTemporarilyHidden = true;
      removeWidget();
    };

    if (btnTempHideOpen) btnTempHideOpen.addEventListener('click', temporarilyHideWidget);
    if (btnTempHideClosed) btnTempHideClosed.addEventListener('click', temporarilyHideWidget);

    if (btnPlayPause) {
      btnPlayPause.addEventListener('click', (e) => {
        e.stopPropagation();
        safeStorageSet({ isScrolling: !state.isScrolling });
      });
    }

    if (btnCollapsedPlay) {
      btnCollapsedPlay.addEventListener('click', (e) => {
        e.stopPropagation();
        safeStorageSet({ isScrolling: !state.isScrolling });
      });
    }

    if (btnDir) {
      btnDir.addEventListener('click', (e) => {
        e.stopPropagation();
        const newDir = state.direction === 'down' ? 'up' : 'down';
        safeStorageSet({ direction: newDir });
      });
    }

    if (btnCollapsedDir) {
      btnCollapsedDir.addEventListener('click', (e) => {
        e.stopPropagation();
        const newDir = state.direction === 'down' ? 'up' : 'down';
        safeStorageSet({ direction: newDir });
      });
    }

    if (btnAutoStart) {
      btnAutoStart.addEventListener('click', (e) => {
        e.stopPropagation();
        const nextInstant = !state.instantAutoScroll;
        safeStorageSet({ 
          instantAutoScroll: nextInstant,
          isScrolling: nextInstant ? true : state.isScrolling 
        });
      });
    }

    if (speedSlider) {
      speedSlider.addEventListener('input', (e) => {
        e.stopPropagation();
        const newSpeed = parseInt(e.target.value, 10);
        if (speedBadge) speedBadge.textContent = `${newSpeed}`;
        safeStorageSet({ scrollAmount: newSpeed });
      });
    }

    if (btnCollapse) {
      btnCollapse.addEventListener('click', (e) => {
        e.stopPropagation();
        state.isWidgetCollapsed = true;
        if (widgetContainer) widgetContainer.classList.add('as-collapsed');
        safeStorageSet({ isWidgetCollapsed: true });
      });
    }

    if (btnExpand) {
      btnExpand.addEventListener('click', (e) => {
        e.stopPropagation();
        state.isWidgetCollapsed = false;
        if (widgetContainer) widgetContainer.classList.remove('as-collapsed');
        safeStorageSet({ isWidgetCollapsed: false });
      });
    }
  }

  function makeWidgetDraggable(container, handles) {
    if (!container || !handles) return;
    const handleArray = Array.isArray(handles) ? handles : [handles];

    let isDragging = false;
    let startX, startY, startRight, startBottom, startTop;

    handleArray.forEach((h) => {
      if (!h) return;
      h.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        const rect = container.getBoundingClientRect();
        startRight = window.innerWidth - rect.right;
        startBottom = window.innerHeight - rect.bottom;
        startTop = rect.top;

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
        e.preventDefault();
      });
    });

    function onMouseMove(e) {
      if (!isDragging) return;
      const dx = startX - e.clientX;
      const dy = e.clientY - startY;

      const newRight = Math.max(10, Math.min(window.innerWidth - 60, startRight + dx));

      const currentY = e.clientY;
      if (currentY < window.innerHeight / 2) {
        const newTop = Math.max(10, Math.min(window.innerHeight - 100, startTop + dy));
        container.style.top = `${newTop}px`;
        container.style.bottom = 'auto';
        container.classList.add('as-expand-down');
        container.classList.remove('as-expand-up');
        updateChevronDirections(true);
      } else {
        const newBottom = Math.max(10, Math.min(window.innerHeight - 100, startBottom - dy));
        container.style.bottom = `${newBottom}px`;
        container.style.top = 'auto';
        container.classList.add('as-expand-up');
        container.classList.remove('as-expand-down');
        updateChevronDirections(false);
      }

      container.style.right = `${newRight}px`;
    }

    function onMouseUp() {
      if (!isDragging) return;
      isDragging = false;
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      const isTop = container.classList.contains('as-expand-down');
      const posData = {
        right: container.style.right,
        top: isTop ? container.style.top : 'auto',
        bottom: !isTop ? container.style.bottom : 'auto',
        alignMode: isTop ? 'top' : 'bottom'
      };
      safeStorageSet({ widgetPosition: posData });
    }
  }

  function updateChevronDirections(isExpandDown) {
    if (!shadowRoot) return;
    const expandIcon = btnExpand ? btnExpand.querySelector('.as-chevron-icon') : null;
    const collapseIcon = btnCollapse ? btnCollapse.querySelector('.as-chevron-icon') : null;

    if (isExpandDown) {
      if (expandIcon) {
        while (expandIcon.firstChild) expandIcon.removeChild(expandIcon.firstChild);
        expandIcon.appendChild(createSvgElement('polyline', { points: '6 9 12 15 18 9' }));
      }
      if (collapseIcon) {
        while (collapseIcon.firstChild) collapseIcon.removeChild(collapseIcon.firstChild);
        collapseIcon.appendChild(createSvgElement('polyline', { points: '18 15 12 9 6 15' }));
      }
    } else {
      if (expandIcon) {
        while (expandIcon.firstChild) expandIcon.removeChild(expandIcon.firstChild);
        expandIcon.appendChild(createSvgElement('polyline', { points: '18 15 12 9 6 15' }));
      }
      if (collapseIcon) {
        while (collapseIcon.firstChild) collapseIcon.removeChild(collapseIcon.firstChild);
        collapseIcon.appendChild(createSvgElement('polyline', { points: '18 15 12 9 6 15' }));
      }
    }
  }

  function syncStateUI() {
    if (!widgetContainer || !shadowRoot) return;

    applySavedWidgetPosition();

    if (state.isWidgetCollapsed) {
      widgetContainer.classList.add('as-collapsed');
    } else {
      widgetContainer.classList.remove('as-collapsed');
    }

    const playSvg = btnPlayPause ? btnPlayPause.querySelector('.as-play-svg') : null;
    const collapsedPlaySvg = btnCollapsedPlay ? btnCollapsedPlay.querySelector('.as-play-svg') : null;

    if (state.isScrolling) {
      if (btnPlayPause) btnPlayPause.classList.add('as-active');
      if (btnCollapsedPlay) btnCollapsedPlay.classList.add('as-active');

      updatePlaySvgIcon(playSvg, true);
      updatePlaySvgIcon(collapsedPlaySvg, true);
    } else {
      if (btnPlayPause) btnPlayPause.classList.remove('as-active');
      if (btnCollapsedPlay) btnCollapsedPlay.classList.remove('as-active');

      updatePlaySvgIcon(playSvg, false);
      updatePlaySvgIcon(collapsedPlaySvg, false);
    }

    const iconDirs = shadowRoot.querySelectorAll('.as-icon-dir');
    iconDirs.forEach((iconDir) => {
      while (iconDir.firstChild) iconDir.removeChild(iconDir.firstChild);
      if (state.direction === 'up') {
        iconDir.appendChild(createSvgElement('path', { d: 'M12 19V5M5 12l7-7 7 7' }));
      } else {
        iconDir.appendChild(createSvgElement('path', { d: 'M12 5v14M19 12l-7 7-7-7' }));
      }
    });

    if (btnAutoStart) {
      if (state.instantAutoScroll) {
        btnAutoStart.classList.add('as-auto-active');
      } else {
        btnAutoStart.classList.remove('as-auto-active');
      }
    }

    const currentSpeed = state.scrollAmount || 350;
    if (speedSlider) speedSlider.value = Math.min(5000, currentSpeed);
    if (speedBadge) speedBadge.textContent = `${currentSpeed}`;
  }

  function updatePlaySvgIcon(svgElement, isPausedState) {
    if (!svgElement) return;
    while (svgElement.firstChild) {
      svgElement.removeChild(svgElement.firstChild);
    }

    if (isPausedState) {
      svgElement.appendChild(createSvgElement('rect', { x: '6', y: '4', width: '4', height: '16' }));
      svgElement.appendChild(createSvgElement('rect', { x: '14', y: '4', width: '4', height: '16' }));
    } else {
      svgElement.appendChild(createSvgElement('polygon', { points: '5 3 19 12 5 21 5 3' }));
    }
  }

  function updateTimerBadges(secondsLeft) {
    if (!timerBadgeOpen && shadowRoot) {
      timerBadgeOpen = shadowRoot.querySelector('#asTimerOpen');
      timerBadgeClosed = shadowRoot.querySelector('#asTimerClosed');
    }

    if (state.isScrolling && secondsLeft > 0) {
      const text = `${secondsLeft.toFixed(1)}s`;
      if (timerBadgeOpen) {
        timerBadgeOpen.textContent = text;
        timerBadgeOpen.classList.remove('as-hidden');
        timerBadgeOpen.style.display = 'block';
      }
      if (timerBadgeClosed) {
        timerBadgeClosed.textContent = text;
        timerBadgeClosed.classList.remove('as-hidden');
        timerBadgeClosed.style.display = 'block';
      }
    } else {
      if (timerBadgeOpen) {
        timerBadgeOpen.textContent = '';
        timerBadgeOpen.classList.add('as-hidden');
        timerBadgeOpen.style.display = 'none';
      }
      if (timerBadgeClosed) {
        timerBadgeClosed.textContent = '';
        timerBadgeClosed.classList.add('as-hidden');
        timerBadgeClosed.style.display = 'none';
      }
    }
  }

  function startScrolling() {
    if (!isDomainAutoScrollEnabled()) {
      state.isScrolling = false;
      stopScrolling();
      return;
    }

    if (pageLimitReached) {
      stopScrolling();
      return;
    }

    if (!checkScopeEnabled()) {
      stopScrolling();
      return;
    }

    stopScrolling();
    if (pageRunStartedAt === null) pageRunStartedAt = performance.now();
    lastDocHeight = getMaxScroll(window);
    bottomReachedTime = null;
    lastHeightChangeTime = performance.now();
    updateTimerBadges(0);

    if (state.scrollMode === 'natural') {
      runNaturalScroll();
    } else {
      runIntervalScroll();
    }
  }


  function restartScrolling() {
    if (state.isScrolling) {
      startScrolling();
    }
  }

  function stopScrolling() {
    scrollRunId += 1;
    cancelNativeScrollAnimation();
    if (scrollRafId) {
      cancelAnimationFrame(scrollRafId);
      scrollRafId = null;
    }
    if (scrollTimerId) {
      clearInterval(scrollTimerId);
      scrollTimerId = null;
    }
    if (pendingBoundaryCheckId) {
      clearTimeout(pendingBoundaryCheckId);
      pendingBoundaryCheckId = null;
    }
    bottomReachedTime = null;
    updateTimerBadges(0);
  }

  function getRunLimitMs() {
    const minutes = Number(state.runLimitMinutes);
    return Number.isFinite(minutes) && minutes > 0 ? minutes * 60 * 1000 : 0;
  }

  function hasPageRunLimitExpired(now = performance.now()) {
    const limitMs = getRunLimitMs();
    return limitMs > 0 && pageRunStartedAt !== null && now - pageRunStartedAt >= limitMs;
  }

  function stopForPageRunLimit() {
    pageLimitReached = true;
    state.isScrolling = false;
    stopScrolling();
    syncStateUI();
  }

  function setupScrollEngineWatchdog() {
    window.setInterval(() => {
      if (pageLimitReached) {
        if (state.isScrolling || scrollRafId !== null || scrollTimerId !== null) {
          state.isScrolling = false;
          stopScrolling();
        }
        return;
      }

      if (!state.isScrolling) return;
      if (!isDomainAutoScrollEnabled()) {
        state.isScrolling = false;
        stopScrolling();
        return;
      }
      if (hasPageRunLimitExpired()) {
        stopForPageRunLimit();
        return;
      }
      if (!checkScopeEnabled()) {
        state.isScrolling = false;
        stopScrolling();
        return;
      }

      const naturalEngineAlive = state.scrollMode === 'natural' && scrollRafId !== null;
      const intervalEngineAlive = state.scrollMode !== 'natural' && scrollTimerId !== null;
      if (!naturalEngineAlive && !intervalEngineAlive) {
        startScrolling();
      }
    }, 1000);
  }

  function cancelNativeScrollAnimation() {
    try {
      const currentPos = getScrollPos(window);
      window.scrollTo({
        top: currentPos,
        left: window.scrollX || 0,
        behavior: 'auto'
      });
    } catch (e) {
      try {
        window.scrollTo(window.scrollX || 0, getScrollPos(window));
      } catch (ignored) {}
    }
  }

  function runNaturalScroll() {
    let lastTime = performance.now();
    const runId = scrollRunId;

    function step(now) {
      if (runId !== scrollRunId || !state.isScrolling || !checkScopeEnabled()) {
        stopScrolling();
        return;
      }
      if (hasPageRunLimitExpired(now)) {
        stopForPageRunLimit();
        return;
      }


      const delta = (now - lastTime) / 1000;
      lastTime = now;

      const speedPxPerSec = Math.max(20, (state.scrollAmount * 2.5) / Math.max(1, state.scrollInterval));
      const moveDistance = speedPxPerSec * delta;

      const scrollTarget = getScrollTarget();
      const currentPos = getScrollPos(scrollTarget);
      const maxScroll = getMaxScroll(scrollTarget);

      const directionMultiplier = state.direction === 'down' ? 1 : -1;
      const nextPos = currentPos + moveDistance * directionMultiplier;

      doScroll(scrollTarget, nextPos);

      // Smooth Uniform 0.8s Countdown Timer (Strictly Gated, No Jumps)
      if (state.direction === 'down' && nextPos >= maxScroll - 5) {
        const updatedMax = getMaxScroll(scrollTarget);

        if (updatedMax > maxScroll + 10) {
          bottomReachedTime = null;
          lastHeightChangeTime = now;
          updateTimerBadges(0);
        }
        else if (hasPendingImages() || (now - lastHeightChangeTime < 1000)) {
          bottomReachedTime = null;
          updateTimerBadges(0);
        }
        else {
          if (!bottomReachedTime) {
            bottomReachedTime = now;
          }

          const elapsedMs = now - bottomReachedTime;
          const remainingSec = Math.max(0, (LAZY_WAIT_TIMEOUT_MS - elapsedMs) / 1000);
          updateTimerBadges(remainingSec);

          if (elapsedMs >= LAZY_WAIT_TIMEOUT_MS) {
            // Re-check after the wait. Lazy content can arrive between the
            // frame that started the countdown and the frame that ends it.
            const finalMax = getMaxScroll(scrollTarget);
            if (finalMax > maxScroll + 10 || hasPendingImages()) {
              lastDocHeight = finalMax;
              lastHeightChangeTime = now;
              bottomReachedTime = null;
              updateTimerBadges(0);
              scrollRafId = requestAnimationFrame(step);
              return;
            }
            updateTimerBadges(0);
            if (state.autoReverse) {
              state.direction = 'up';
              bottomReachedTime = null;
              safeStorageSet({ direction: 'up' });
            } else {
              safeStorageSet({ isScrolling: false });
              stopScrolling();
              return;
            }
          }
        }
      } else if (state.direction === 'up' && nextPos <= 5) {
        if (!bottomReachedTime) {
          bottomReachedTime = now;
        }

        const elapsedMs = now - bottomReachedTime;
        const remainingSec = Math.max(0, (LAZY_WAIT_TIMEOUT_MS - elapsedMs) / 1000);
        updateTimerBadges(remainingSec);

        if (elapsedMs >= LAZY_WAIT_TIMEOUT_MS) {
          updateTimerBadges(0);
          if (state.autoReverse) {
            state.direction = 'down';
            bottomReachedTime = null;
            safeStorageSet({ direction: 'down' });
          } else {
            safeStorageSet({ isScrolling: false });
            stopScrolling();
            return;
          }
        }
      } else {
        bottomReachedTime = null;
        updateTimerBadges(0);
      }

      scrollRafId = requestAnimationFrame(step);
    }

    scrollRafId = requestAnimationFrame(step);
  }

  function runIntervalScroll() {
    const intervalMs = Math.max(1, state.scrollInterval) * 1000;
    const runId = scrollRunId;

    scrollTimerId = setInterval(() => {
      if (runId !== scrollRunId || !state.isScrolling || !checkScopeEnabled()) {
        stopScrolling();
        return;
      }
      if (hasPageRunLimitExpired()) {
        stopForPageRunLimit();
        return;
      }

      // Let the previous smooth movement finish before scheduling another
      // measurement. This prevents interval ticks from racing the boundary
      // timer when the interval is shorter than the smooth-scroll settle time.
      if (pendingBoundaryCheckId) return;


      const scrollTarget = getScrollTarget();
      const currentPos = getScrollPos(scrollTarget);
      const maxScroll = getMaxScroll(scrollTarget);

      const distance = state.scrollAmount;
      const directionMultiplier = state.direction === 'down' ? 1 : -1;
      const targetPos = currentPos + distance * directionMultiplier;

      scrollTarget.scrollTo({
        top: targetPos,
        behavior: 'smooth'
      });

      pendingBoundaryCheckId = setTimeout(() => {
        pendingBoundaryCheckId = null;
        if (runId !== scrollRunId || !state.isScrolling) return;

        const newPos = getScrollPos(scrollTarget);
        const updatedMax = getMaxScroll(scrollTarget);

        if (state.direction === 'down' && newPos >= updatedMax - 10) {
          if (updatedMax > maxScroll + 10 || hasPendingImages() || (performance.now() - lastHeightChangeTime < CONTENT_SETTLE_MS)) {
            bottomReachedTime = null;
            updateTimerBadges(0);
            return;
          }

          if (!bottomReachedTime) bottomReachedTime = performance.now();
          const remainingSec = Math.max(0, (LAZY_WAIT_TIMEOUT_MS - (performance.now() - bottomReachedTime)) / 1000);
          updateTimerBadges(remainingSec);
          if (remainingSec > 0) return;

          const finalMax = getMaxScroll(scrollTarget);
          if (finalMax > maxScroll + 10 || hasPendingImages()) {
            bottomReachedTime = null;
            updateTimerBadges(0);
            return;
          }

          if (state.autoReverse) {
            state.direction = 'up';
            bottomReachedTime = null;
            updateTimerBadges(0);
            safeStorageSet({ direction: 'up' });
          } else {
            safeStorageSet({ isScrolling: false });
            stopScrolling();
          }
        } else if (state.direction === 'up' && newPos <= 5) {
          if (!bottomReachedTime) bottomReachedTime = performance.now();
          const remainingSec = Math.max(0, (LAZY_WAIT_TIMEOUT_MS - (performance.now() - bottomReachedTime)) / 1000);
          updateTimerBadges(remainingSec);
          if (remainingSec > 0) return;

          if (state.autoReverse) {
            state.direction = 'down';
            bottomReachedTime = null;
            updateTimerBadges(0);
            safeStorageSet({ direction: 'down' });
          } else {
            safeStorageSet({ isScrolling: false });
            stopScrolling();
          }
        } else {
          bottomReachedTime = null;
          updateTimerBadges(0);
        }
      }, 800);

    }, intervalMs);
  }

  function getScrollTarget() {
    return window;
  }

  function getScrollPos(target) {
    return target.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  }

  function getMaxScroll(target) {
    const docHeight = Math.max(
      document.body ? document.body.scrollHeight : 0,
      document.documentElement ? document.documentElement.scrollHeight : 0,
      document.body ? document.body.offsetHeight : 0,
      document.documentElement ? document.documentElement.offsetHeight : 0
    );
    return Math.max(0, docHeight - window.innerHeight);
  }

  function doScroll(target, pos) {
    target.scrollTo(0, pos);
  }
})();
