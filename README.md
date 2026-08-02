# Scrollinger 🚀

**Scrollinger** is a modern, high-performance Chrome Extension (Manifest V3) designed for smooth, effortless, hands-free web page scrolling. Built with a sleek Neo-Brutalist Charcoal & Terracotta UI, Scrollinger provides granular scrolling controls, dynamic content detection, multi-language internationalization, and an interactive in-site floating widget.

---

## ✨ Key Features

### ⚡ Dual Scrolling Modes
- **Naturally Mode**: Smooth, continuous human-like scrolling ideal for long articles, news sites, and reading feeds.
- **Interval Mode**: Smart timed interval scrolling (e.g. scroll every 15 seconds) perfect for presentations, dashboards, and automated monitoring.

### 🎯 Intelligent Interaction & Lazy Load Detection
- **Instant Interrupt Stop**: Automatically pauses scrolling the moment you interact with the page (mouse wheel, touch, drag, key press).
- **Dynamic Content Detection**: Automatically detects lazy-loaded images, dynamic feed items, and infinite scrolling content.
- **Snappy 0.8s Countdown Timer**: Displays a smooth uniform countdown badge during interval pauses without annoying layout jumps.

### 🌐 21-Language Internationalization with Search
Includes complete native dictionary support for **21 languages**:
- **Indian Languages**: Hindi (हिन्दी), Bengali (বাংলা), Telugu (తెలుగు), Marathi (मराठी), Tamil (தமிழ்), Gujarati (ગુજરાતી), Kannada (ಕನ್ನಡ), Malayalam (മലയാളം), Punjabi (ਪੰਜਾਬੀ), Odia (ଓଡ଼ିଆ).
- **Global Languages**: English, Spanish (Español), French (Français), German (Deutsch), Japanese (日本語), Chinese (中文), Russian (Русский), Arabic (العربية), Portuguese (Português), Italian (Italiano), Korean (한국어).
- **Searchable Dropdown**: Built-in real-time filter search bar to quickly find and switch languages.

### 🎨 Neo-Brutalist Terracotta Theme & Custom Controls
- **Unified Color Palette**: Deep charcoal (#262624) and warm terracotta (#d97757).
- **Bidirectional Range-Slider Sync**: Range sliders and custom number input boxes update in real-time on drag, typing, or custom up/down spinner clicks.
- **In-Site Floating Widget**: Quick-access floating widget injected directly into web pages with collapse/expand modes, direction toggle, and timer countdown.
- **Domain-Level Granularity**: Enable/disable scrolling globally or per-domain (`learn.microsoft.com`, etc.).

---

## 🛠️ Installation Guide

### Option 1: Developer Mode (Local Installation)

1. **Clone or Download** this repository to your computer:
   ```bash
   git clone https://github.com/devranbir/scrollinger.git
   ```
2. Open your Chromium browser (Google Chrome, Brave, Microsoft Edge, Opera).
3. Navigate to the extensions manager page:
   - **Chrome / Brave**: `chrome://extensions`
   - **Edge**: `edge://extensions`
4. Enable **Developer mode** using the toggle switch in the top right corner.
5. Click **Load unpacked** and select the root directory of this extension repository.
6. **Scrollinger** is now installed! Pin it to your browser toolbar for instant access.

---

## 💻 Usage & Controls

| Control | Description |
| :--- | :--- |
| **Global / Domain Toggle** | Enable or disable scrolling globally across all tabs or specifically for the current domain. |
| **Scroll Mode** | Switch between smooth **Naturally** scrolling or timed **Interval** mode. |
| **Scroll Amount** | Adjust scroll distance (50px to 5000px) via slider or linked number input. |
| **Scroll Interval** | Adjust delay timer (1 to 60 seconds) for interval mode. |
| **Direction** | Toggle scrolling direction (**Down** ↓ or **Up** ↑). |
| **Auto-Reverse** | Automatically reverses scrolling direction when reaching the top or bottom of a page. |
| **User Interaction Stop** | Automatically stops scrolling the instant user wheel, touch, or key input is detected. |
| **In-Site Widget** | Toggle the on-screen floating control widget on web pages. |

---

## 📁 Project Structure

```
Scrollinger/
├── manifest.json         # Manifest V3 Extension Configuration
├── popup/
│   ├── popup.html        # Main Popup Control Panel UI
│   ├── popup.css         # Neo-Brutalist Styling System
│   └── popup.js          # Popup Logic & 21-Language Dictionaries
├── content/
│   ├── content.js        # Page In-Site Floating Widget & Scrolling Engine
│   └── content.css       # Shadow DOM Widget Styles
├── background/
│   └── background.js     # Background Service Worker & Storage Manager
├── icons/                # Extension Toolbar & Action Icons
├── PRIVACY_POLICY.md    # Multi-Store Compliant Privacy Policy
└── README.md             # Documentation
```

---

## 🌐 Multi-Store Publishing & Compliance

Scrollinger is 100% compliant with Manifest V3 policies and optimized for publishing across all major web extension platforms:

1. **Chrome Web Store** ([developer.chrome.com/docs/webstore](https://developer.chrome.com/docs/webstore/))
2. **Microsoft Edge Add-ons** ([learn.microsoft.com/en-us/microsoft-edge/extensions-chromium/](https://learn.microsoft.com/en-us/microsoft-edge/extensions-chromium/))
3. **Firefox Add-ons (AMO)** ([extensionworkshop.com](https://extensionworkshop.com/))
4. **Opera Add-ons** ([dev.opera.com/extensions/](https://dev.opera.com/extensions/))

### Submission Checklist & Privacy Policy
- **Zero Remote Code / Zero Remote Fonts**: Self-contained UI without third-party CDN dependencies.
- **Dynamic Resource Protection**: `use_dynamic_url: true` enabled in `manifest.json` to prevent fingerprinting.
- **Firefox Gecko Compatibility**: Includes `browser_specific_settings.gecko` ID (`scrollinger@devranbir.github.io`).
- **Privacy Policy**: Use [PRIVACY_POLICY.md](file:///c:/Users/Ranbi/Documents/antigravity/friendly-hopper/PRIVACY_POLICY.md) as your store listing Privacy Policy URL.

---

## 👤 Author & Credits

Designed and developed with ❤️ by **[devranbir](https://github.com/devranbir)**.

- GitHub: [@devranbir](https://github.com/devranbir)
- Repository: [Scrollinger](https://github.com/devranbir)

---

## 📄 License

This project is licensed under the MIT License - see the `LICENSE` file for details.

