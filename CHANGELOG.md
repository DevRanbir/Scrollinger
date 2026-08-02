# Changelog

All notable changes to **Scrollinger** are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.3] - 2026-08-03

### Added
- **Ignore This Page Control**: Added an in-site control that permanently adds the current page to the excluded-pages list, stops scrolling immediately, and removes the widget for that page.
- **Temporary Widget Hide Control**: Added a non-persistent hide control for the in-site widget. The widget returns after a reload or page/navigation change.
- **Fixed-Height Excluded Sites Overlay**: Kept popup height constant while showing excluded domains and pages in a separate floating layer with categorized trees.

### Fixed
- **Immediate User Interruption Stop**: Wheel, touch, and scroll-key input now cancels active scrolling, countdowns, delayed boundary checks, and native smooth-scroll animations immediately.
- **Timer and Boundary Stability**: Prevented stale callbacks and unrelated DOM mutations from resetting or completing boundary timers incorrectly.
- **Late Content Continuation**: Rechecks page height and pending images before reversing or stopping so lazy-loaded and late-appended content can continue scrolling.
- **Scroll Engine Recovery**: Added a page-local watchdog that restarts a missing natural or interval scroll loop when auto-scroll remains enabled.
- **Navigation Retention**: Preserved page/domain-scoped auto-scroll through same-domain SPA navigation while resetting temporary widget visibility on navigation.
- **Popup Overlay Cleanup**: Removed the obsolete dropdown arrow, prevented content bleed-through, centered the close control, reduced the heavy border, and removed emoji labels from the excluded-sites UI.
- **Stable Timer Layout**: Rendered the countdown as a non-layout overlay badge inside the widget so it can appear and disappear without leaving a blank gap, extending outside the widget, or changing widget height and control spacing.
- **SPA Scroll Continuation**: Added navigation tokens, clean old-loop cancellation, and delayed restart after layout settlement so active page/domain scrolling continues reliably across same-page navigation.
- **Minimized Widget Cleanup**: Kept temporary hide and ignore-page controls available in expanded mode only; minimized mode now shows only its core controls.
- **Timer Placement**: Positioned the countdown inside the widget directly above the drag handle.
- **Per-Page Run Limit**: Added a popup limiter in minutes (`0` disables the limit). When reached, the current page stops scrolling and suppresses further countdowns until reload or navigation.
- **Excluded Domain Consistency**: Normalized legacy/string disabled values so excluded domains appear in the popup tree and enforce the same disabled state in the page engine.
- **Effective Domain Visibility**: When global scrolling is disabled, the active domain is now shown in the excluded-domain tree even without a separate stored domain override.
- **Auto-Scrolling Popup Control**: Added a dedicated Enable Auto-Scrolling checkbox that controls the active page’s scrolling state.
- **Scope-Aware Widget Control**: The in-site widget option is disabled and unchecked for excluded pages/domains, then automatically follows scope changes until the user manually overrides it.
- **Compact Scope Options**: Placed Auto-Scrolling and Show In-Site Floating Widget in one compact row to reduce popup height and avoid visually separating related controls.
- **Dedicated Options Section**: Moved Auto-Scrolling and In-Site Floating Widget controls into their own compact card below the scope settings and renamed the widget label.
- **Complete New-Control Localization**: Added translations for Auto-Scrolling, In-Site Floating Widget, and Run Limit across all 21 supported languages, with English fallback protection.
- **Domain Auto-Scroll Opt-In**: Auto-scrolling is now disabled by default for every domain until the user enables it for that domain through the popup.
- **Release Hardening**: Enforced the subframe preference before injecting the engine, coalesced mutation measurements, removed redundant all-tab storage broadcasts, and exposed only the stylesheet required by the widget.
- **AMO Archive Compatibility**: Rebuilt the Chromium/Edge/Opera and Firefox ZIP packages with forward-slash paths so Firefox Add-ons validation accepts nested files.
- **Firefox Background Compatibility**: Added Firefox's required `background.scripts` fallback to the Firefox release manifest while keeping the Chromium service-worker manifest unchanged.
- **Firefox Minimum Versions**: Set Firefox and Firefox for Android minimum versions to 140 and 142 so the AMO data-collection manifest key is supported without compatibility warnings.

### Added & Improved
- **Sub-Frames Default Checked & Per-Domain Controls**: *"Include/Exclude sub-frames"* is now **checked by default** (`true`). Unchecking sub-frames on a specific page/domain permanently excludes sub-frames on that domain until checked again.
- **Tab-Local User Interrupt Isolation**: Pausing scrolling via user interaction (`wheel`, `touchmove`, scroll keys) now pauses **locally on that active tab only**, without touching shared storage. Other open tabs continue scrolling uninterrupted.
- **Same-Domain & SPA Navigation Auto-Scroll Retention**: Fixed auto-scrolling automatically stopping when navigating between pages on the same domain or clicking article links.
- **User Scroll Interrupt Precision**: Replaced `mousedown`/`touchstart` with `wheel`, `touchmove` swipe gestures, and scroll navigation keys (`Space`, `ArrowUp`, `ArrowDown`, `PageUp`, `PageDown`). Clicking links, buttons, or page text no longer cancels auto-scrolling.
- **In-Site Widget Opera & Chromium Positioning**: Added explicit default `right: 20px; bottom: 20px;` fixed coordinates in `applySavedWidgetPosition()` and `content.css` to fix floating widget rendering when `widgetPosition` is uninitialized.
- **Shadow DOM Style Injection**: Synchronously attached stylesheet element inside Shadow DOM root to ensure 0ms style rendering latency across all browser engines.

---

## [1.0.1] - 2026-08-02

### Added
- **Multi-Store Manifest V3 Compliance**: Configured `manifest.json` for universal cross-browser store approval across Chrome Web Store, Edge Add-ons, Firefox AMO, and Opera Add-ons.
- **Privacy Policy**: Created `PRIVACY_POLICY.md` establishing zero data collection, local storage isolation, and zero external network requests.
- **Extension Fingerprinting Protection**: Enabled `use_dynamic_url: true` on web accessible resources.
- **Firefox Gecko Compatibility**: Added `browser_specific_settings.gecko` configuration (`scrollinger@devranbir.github.io`) and `data_collection_permissions` declaration.

### Fixed
- **Firefox AMO ZIP Path Formatting**: Enforced POSIX forward slashes (`/`) across all ZIP entry headers, resolving Linux validation path errors (`Invalid file name in archive`).
- **Global Storage Scope Fix**: Prevented `isScrolling: false` from writing to shared storage on initial page load, preserving active scrolling across open browser tabs.

---

## [1.0.0] - 2026-08-02

### Added
- **Dual Scroll Modes**: Smooth continuous human-like Natural Mode and timed Interval Mode.
- **Instant User Interrupt Detection**: Automatically pauses scrolling upon mouse wheel, touch, or keypress activity.
- **Dynamic Content & Lazy Load Handling**: Handles infinite scrolling feeds and lazy-loaded images without layout jumps.
- **21-Language Searchable UI**: Native UI translation dictionary with real-time search filter input.
- **Interactive In-Site Floating Widget**: Quick-access on-screen widget injected inside an isolated Shadow DOM with draggable position persistence.
- **Neo-Brutalist Design System**: Custom dark charcoal (`#262624`) and terracotta (`#d97757`) UI styling.
- **Zero Data Collection**: Operates 100% locally on your device with complete privacy.
