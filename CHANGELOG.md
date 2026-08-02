# Changelog

All notable changes to **Scrollinger** are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.3] - 2026-08-02

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
