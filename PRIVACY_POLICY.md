# Privacy Policy for Scrollinger

**Last Updated**: August 2, 2026

**Scrollinger** ("the Extension") is committed to protecting your privacy. This Privacy Policy outlines our data handling practices and confirms that **Scrollinger collects zero personal data**.

---

## 1. Zero Data Collection
Scrollinger does **not** collect, store, transmit, or sell any personal data, browsing history, user activity, or analytics.

- **No Remote Servers**: Scrollinger operates entirely locally within your web browser.
- **No Tracking**: We do not use third-party analytics tools, tracking pixels, or telemetry services.
- **No External Network Requests**: Scrollinger makes **zero** outbound HTTP/HTTPS requests to any external server or API.

---

## 2. Browser Storage & Local Data
Scrollinger uses your browser's local storage API (`chrome.storage.local`) exclusively to save your user preferences locally on your device:
- **Scroll Preferences**: Selected scroll mode (Naturally or Interval), scroll amount, interval delay, auto-reverse state, and direction.
- **Scope Preferences**: Global enable/disable toggle, per-domain enable/disable rules, and sub-frame preferences.
- **Interface Preferences**: Language selection, floating widget position, and widget collapse state.

All stored preferences remain on your device and are never uploaded, shared, or accessible by the developer or any third party.

---

## 3. Permissions Usage
Scrollinger requests only the minimum necessary permissions required for core functionality:
- `storage`: Required to save your scroll settings locally.
- `activeTab` & `scripting`: Required to inject the scrolling engine and floating widget into active web pages upon user request.
- `http://*/*` & `https://*/*`: Required to allow the user to enable auto-scrolling on web pages they visit.

---

## 4. Changes to This Policy
If we update this Privacy Policy in future versions, the updated version will be posted in this repository.

---

## 5. Contact & Support
If you have any questions about this Privacy Policy, please open an issue on GitHub:
- **GitHub Repository**: [https://github.com/devranbir/scrollinger](https://github.com/devranbir/scrollinger)
- **Developer**: [devranbir](https://github.com/devranbir)
