// Popup Script for Scrollinger - Robust Null-Safe Multi-Language & Controls Manager


const I18N = {
  en: {
    global: "Enabled (Globally)",
    domain: "Enabled (This Domain)",
    subframes: "Include/Exclude sub-frames",
    insiteWidget: "Show In-Site Floating Widget",
    naturally: "Naturally",
    intervalMode: "Every {sec} seconds",
    howMuch: "How much to scroll",
    scrollInterval: "Scroll Interval (sec / speed)",
    down: "Down",
    up: "Up",
    autoReverse: "Auto-Reverse",
    scrollDown: "Scroll Down",
    scrollUp: "Scroll Up",
    pause: "Pause Scrolling",
    stop: "Stop",
    stopOnInteraction: "Stop scrolling on user interaction"
  },
  hi: {
    global: "ग्लोबली सक्षम",
    domain: "इस डोमेन पर सक्षम",
    subframes: "सब-फ्रेम शामिल करें",
    insiteWidget: "फ्लोटिंग बटन दिखाएं",
    naturally: "प्राकृतिक स्क्रॉल",
    intervalMode: "हर {sec} सेकंड में",
    howMuch: "स्क्रॉल दूरी",
    scrollInterval: "स्क्रॉल अंतराल (सेकंड / गति)",
    down: "नीचे",
    up: "ऊपर",
    autoReverse: "ऑटो रिवर्स",
    scrollDown: "नीचे स्क्रॉल करें",
    scrollUp: "ऊपर स्क्रॉल करें",
    pause: "रोकें (पॉज़)",
    stop: "स्टॉप",
    stopOnInteraction: "उपयोगकर्ता इंटरैक्शन पर रोकें"
  },
  bn: {
    global: "গ্লোবালি সক্ষম",
    domain: "এই ডোমেনে সক্ষম",
    subframes: "সাব-ফ্রেম অন্তর্ভুক্ত করুন",
    insiteWidget: "ফ্লোটিং বোতাম দেখান",
    naturally: "প্রাকৃতিক স্ক্রোল",
    intervalMode: "প্রতি {sec} সেকেন্ডে",
    howMuch: "স্ক্রোল দূরত্ব",
    scrollInterval: "স্ক্রোল ব্যবধান (সেকেন্ড / গতি)",
    down: "নিচে",
    up: "উপরে",
    autoReverse: "অটো রিভার্স",
    scrollDown: "নিচে স্ক্রোল করুন",
    scrollUp: "উপরে স্ক্রোল করুন",
    pause: "পজ করুন",
    stop: "স্টপ",
    stopOnInteraction: "ব্যবহারকারীর ইন্টারঅ্যাকশনে থামুন"
  },
  te: {
    global: "గ్లోబల్‌గా ప్రారంభించబడింది",
    domain: "ఈ డొమైన్‌లో ప్రారంభించబడింది",
    subframes: "సబ్‌ఫ్రేమ్‌లను చేర్చండి",
    insiteWidget: "ఫ్లోటింగ్ బటన్ చూపు",
    naturally: "సహజమైన స్క్రోల్",
    intervalMode: "ప్రతి {sec} సెకన్లకు",
    howMuch: "స్క్రోల్ దూరం",
    scrollInterval: "స్క్రోల్ విరామం (సెకన్లు / వేగం)",
    down: "కిందికి",
    up: "పైకి",
    autoReverse: "ఆటో రివర్స్",
    scrollDown: "కిందికి స్క్రోల్ చేయండి",
    scrollUp: "పైకి స్క్రోల్ చేయండి",
    pause: "పాజ్ చేయండి",
    stop: "ఆపు",
    stopOnInteraction: "యూజర్ సంప్రదింపులో ఆపు"
  },
  mr: {
    global: "ग्लोबली सक्षम",
    domain: "या डोमेनवर सक्षम",
    subframes: "सब-फ्रेम समाविष्ट करा",
    insiteWidget: "फ्लोटिंग बटण दाखवा",
    naturally: "नैसर्गिक स्क्रोल",
    intervalMode: "प्रत्येक {sec} सेकंदांनी",
    howMuch: "स्क्रोल अंतर",
    scrollInterval: "स्क्रोल अंतर (सेकंद / वेग)",
    down: "खाली",
    up: "वर",
    autoReverse: "ऑटो रिव्हर्स",
    scrollDown: "खाली स्क्रोल करा",
    scrollUp: "वर स्क्रोल करा",
    pause: "पॉज करा",
    stop: "थांबा",
    stopOnInteraction: "वापरकर्ता परस्परसंवादावर थांबा"
  },
  ta: {
    global: "உலகளவில் இயக்கப்பட்டது",
    domain: "இந்த தளத்தில் இயக்கப்பட்டது",
    subframes: "துணை சட்டங்களை சேர்க்கவும்",
    insiteWidget: "மிதக்கும் பொத்தானைக் காட்டு",
    naturally: "இயற்கையான சுருள்",
    intervalMode: "ஒவ்வொரு {sec} விநாடிகளுக்கும்",
    howMuch: "சுருள் தூரம்",
    scrollInterval: "சுருள் இடைவெளி (விநாடி / வேகம்)",
    down: "கீழே",
    up: "மேலே",
    autoReverse: "தானியங்கி மாற்றம்",
    scrollDown: "கீழே சுருட்டு",
    scrollUp: "மேலே சுருட்டு",
    pause: "இடைநிறுத்து",
    stop: "நிறுத்து",
    stopOnInteraction: "பயனர் தொடர்பில் நிறுத்து"
  },
  gu: {
    global: "ગ્લોબલ સક્ષમ",
    domain: "આ ડોમેન પર સક્ષમ",
    subframes: "સબ-ફ્રેમ ઉમેરો",
    insiteWidget: "ફ્લોટિંગ બટન બતાવો",
    naturally: "કુદરતી સ્ક્રોલ",
    intervalMode: "દર {sec} સેકન્ડે",
    howMuch: "સ્ક્રોલ અંતર",
    scrollInterval: "સ્ક્રોલ અંતરાલ (સેકન્ડ / સ્પીડ)",
    down: "નીચે",
    up: "ઉપર",
    autoReverse: "ઓટો રિવર્સ",
    scrollDown: "નીચે સ્ક્રોલ કરો",
    scrollUp: "ઉપર સ્ક્રોલ કરો",
    pause: "અટકાવો",
    stop: "બંધ કરો",
    stopOnInteraction: "વપરાશકર્તા હસ્તક્ષેપ પર અટકો"
  },
  kn: {
    global: "ಜಾಗತಿಕವಾಗಿ ಸಕ್ರಿಯಗೊಳಿಸಲಾಗಿದೆ",
    domain: "ಈ ಡೊಮೇನ್‌ನಲ್ಲಿ ಸಕ್ರಿಯಗೊಳಿಸಲಾಗಿದೆ",
    subframes: "ಸಬ್-ಫ್ರೇಮ್‌ಗಳನ್ನು ಸೇರಿಸಿ",
    insiteWidget: "ಫ್ಲೋಟಿಂಗ್ ಬಟನ್ ತೋರಿಸಿ",
    naturally: "ಸಹಜ ಸ್ಕ್ರಾಲ್",
    intervalMode: "ಪ್ರತಿ {sec} ಸೆಕೆಂಡುಗಳಿಗೆ",
    howMuch: "ಸ್ಕ್ರಾಲ್ ದೂರ",
    scrollInterval: "ಸ್ಕ್ರಾಲ್ ಮಧ್ಯಂತರ (ಸೆಕೆಂಡು / ವೇಗ)",
    down: "ಕೆಳಗೆ",
    up: "ಮೇಲೆ",
    autoReverse: "ಆಟೋ ರಿವರ್ಸ್",
    scrollDown: "ಕೆಳಗೆ ಸ್ಕ್ರಾಲ್ ಮಾಡಿ",
    scrollUp: "ಮೇಲೆ ಸ್ಕ್ರಾಲ್ ಮಾಡಿ",
    pause: "ವಿರಾಮಗೊಳಿಸಿ",
    stop: "ನಿಲ್ಲಿಸಿ",
    stopOnInteraction: "ಬಳಕೆದಾರರ ಸಂವಹನದಲ್ಲಿ ನಿಲ್ಲಿಸಿ"
  },
  ml: {
    global: "ആഗോളതലത്തിൽ പ്രാപ്തമാക്കി",
    domain: "ഈ ഡൊമെയ്നിൽ പ്രാപ്തമാക്കി",
    subframes: "സബ്-ഫ്രെയിമുകൾ ഉൾപ്പെടുത്തുക",
    insiteWidget: "ഫ്ലോട്ടിംഗ് ബട്ടൺ കാണിക്കുക",
    naturally: "നാച്ചുറൽ സ്ക്രോൾ",
    intervalMode: "ഓരോ {sec} സെക്കൻഡിലും",
    howMuch: "സ്ക്രോൾ ദൂരം",
    scrollInterval: "സ്ക്രോൾ ഇടവേള (സെക്കൻഡ് / വേഗത)",
    down: "താഴേക്ക്",
    up: "മുകളിലേക്ക്",
    autoReverse: "ഓട്ടോ റിവേഴ്സ്",
    scrollDown: "താഴേക്ക് സ്ക്രോൾ ചെയ്യുക",
    scrollUp: "മുകളിലേക്ക് സ്ക്രോൾ ചെയ്യുക",
    pause: "പോസ് ചെയ്യുക",
    stop: "നിർത്തുക",
    stopOnInteraction: "ഉപയോക്തൃ ഇടപഴകലിൽ നിർത്തുക"
  },
  pa: {
    global: "ਗਲੋਬਲੀ ਸਮਰੱਥ",
    domain: "ਇਸ ਡੋਮੇਨ 'ਤੇ ਸਮਰੱਥ",
    subframes: "ਸਬ-ਫ੍ਰੇਮ ਸ਼ਾਮਲ ਕਰੋ",
    insiteWidget: "ਫਲੋਟਿੰਗ ਬਟਨ ਦਿਖਾਓ",
    naturally: "ਕੁਦਰਤੀ ਸਕ੍ਰੋਲ",
    intervalMode: "ਹਰ {sec} ਸੈਕਿੰਡ ਬਾਅਦ",
    howMuch: "ਸਕ੍ਰੋਲ ਦੂਰੀ",
    scrollInterval: "ਸਕ੍ਰੋਲ ਅੰਤਰਾਲ (ਸੈਕਿੰਡ / ਸਪੀਡ)",
    down: "ਹੇਠਾਂ",
    up: "ਉੱਪਰ",
    autoReverse: "ਆਟੋ ਰਿਵਰਸ",
    scrollDown: "ਹੇਠਾਂ ਸਕ੍ਰੋਲ ਕਰੋ",
    scrollUp: "ਉੱਪਰ ਸਕ੍ਰੋਲ ਕਰੋ",
    pause: "ਰੋਕੋ",
    stop: "ਬੰਦ ਕਰੋ",
    stopOnInteraction: "ਯੂਜ਼ਰ ਇੰਟਰਐਕਸ਼ਨ 'ਤੇ ਰੋਕੋ"
  },
  or: {
    global: "ଗ୍ଲୋବାଲି ସକ୍ଷମ",
    domain: "ଏହି ଡୋମେନରେ ସକ୍ଷମ",
    subframes: "ସବ-ଫ୍ରେମ୍ ଅନ୍ତର୍ଭୁକ୍ତ କରନ୍ତୁ",
    insiteWidget: "ଫ୍ଲୋଟିଂ ବଟନ୍ ଦେଖାନ୍ତୁ",
    naturally: "ପ୍ରାକୃତିକ ସ୍କ୍ରୋଲ୍",
    intervalMode: "ପ୍ରତ୍ୟେକ {sec} ସେକେଣ୍ଡରେ",
    howMuch: "ସ୍କ୍ରୋଲ୍ ଦୂରତା",
    scrollInterval: "ସ୍କ୍ରୋଲ୍ ଅନ୍ତରାଳ (ସେକେଣ୍ଡ / ସ୍ପିଡ୍)",
    down: "ତଳକୁ",
    up: "ଉପରକୁ",
    autoReverse: "ଅଟୋ ରିଭର୍ସ",
    scrollDown: "ତଳକୁ ସ୍କ୍ରୋଲ୍ କରନ୍ତୁ",
    scrollUp: "ଉପରକୁ ସ୍କ୍ରୋଲ୍ କରନ୍ତୁ",
    pause: "ପଜ୍ କରନ୍ତୁ",
    stop: "ଅଟକାନ୍ତୁ",
    stopOnInteraction: "ବ୍ୟବହାରକାରୀଙ୍କ ହସ୍ତକ୍ଷେପରେ ଅଟକନ୍ତୁ"
  },
  es: {
    global: "Habilitado (Globalmente)",
    domain: "Habilitado (Este Dominio)",
    subframes: "Incluir sub-marcos",
    insiteWidget: "Mostrar Botón en Sitio",
    naturally: "Naturalmente",
    intervalMode: "Cada {sec} segundos",
    howMuch: "Cuánto desplazar",
    scrollInterval: "Intervalo (seg / velocidad)",
    down: "Abajo",
    up: "Arriba",
    autoReverse: "Auto-Revertir",
    scrollDown: "Desplazar Abajo",
    scrollUp: "Desplazar Arriba",
    pause: "Pausar",
    stop: "Detener",
    stopOnInteraction: "Detener al interactuar"
  },
  fr: {
    global: "Activé (Globalement)",
    domain: "Activé (Ce domaine)",
    subframes: "Inclure les sous-frames",
    insiteWidget: "Afficher le widget sur le site",
    naturally: "Naturellement",
    intervalMode: "Toutes les {sec} s",
    howMuch: "Distance de défilement",
    scrollInterval: "Intervalle (sec / vitesse)",
    down: "Bas",
    up: "Haut",
    autoReverse: "Auto-Inverse",
    scrollDown: "Défiler vers le bas",
    scrollUp: "Défiler vers le haut",
    pause: "Pause",
    stop: "Arrêter",
    stopOnInteraction: "Arrêter lors de l'interaction"
  },
  de: {
    global: "Aktiviert (Global)",
    domain: "Aktiviert (Diese Domain)",
    subframes: "Unterframes einbeziehen",
    insiteWidget: "In-Site-Widget anzeigen",
    naturally: "Natürlich",
    intervalMode: "Alle {sec} Sekunden",
    howMuch: "Scroll-Menge",
    scrollInterval: "Scroll-Intervall (Sek / Tempo)",
    down: "Runter",
    up: "Hoch",
    autoReverse: "Auto-Umkehr",
    scrollDown: "Nach unten scrollen",
    scrollUp: "Nach oben scrollen",
    pause: "Pause",
    stop: "Stopp",
    stopOnInteraction: "Stopp bei Benutzer-Interaktion"
  },
  ja: {
    global: "有効 (全体)",
    domain: "有効 (このドメイン)",
    subframes: "サブフレームを含める",
    insiteWidget: "オンサイトボタンを表示",
    naturally: "自然にスクロール",
    intervalMode: "{sec} 秒ごと",
    howMuch: "スクロール量",
    scrollInterval: "スクロール間隔 (秒/速度)",
    down: "下へ",
    up: "上へ",
    autoReverse: "自動反転",
    scrollDown: "下にスクロール",
    scrollUp: "上にスク롤",
    pause: "一時停止",
    stop: "停止",
    stopOnInteraction: "ユーザー操作時に停止"
  },
  zh: {
    global: "全局启用",
    domain: "此域名启用",
    subframes: "包含子框架",
    insiteWidget: "显示网页悬浮按钮",
    naturally: "自然平滑",
    intervalMode: "每 {sec} 秒",
    howMuch: "滚动距离",
    scrollInterval: "滚动间隔 (秒 / 速度)",
    down: "向下",
    up: "向上",
    autoReverse: "自动反转",
    scrollDown: "向下滚动",
    scrollUp: "向上滚动",
    pause: "暂停",
    stop: "停止",
    stopOnInteraction: "用户操作时停止"
  },
  ru: {
    global: "Включено (Глобально)",
    domain: "Включено (Этот домен)",
    subframes: "Включать подфреймы",
    insiteWidget: "Показывать виджет на сайте",
    naturally: "Плавно",
    intervalMode: "Каждые {sec} сек.",
    howMuch: "Дистанция прокрутки",
    scrollInterval: "Интервал (сек / скорость)",
    down: "Вниз",
    up: "Вверх",
    autoReverse: "Авто-реверс",
    scrollDown: "Прокрутить вниз",
    scrollUp: "Прокрутить вверх",
    pause: "Пауза",
    stop: "Стоп",
    stopOnInteraction: "Остановить при действии"
  },
  ar: {
    global: "مفعل (عالمياً)",
    domain: "مفعل (هذا النطاق)",
    subframes: "تضمين الإطارات الفرعية",
    insiteWidget: "إظهار الأداة العائمة",
    naturally: "تمرير طبيعي",
    intervalMode: "كل {sec} ثوانٍ",
    howMuch: "مسافة التمرير",
    scrollInterval: "فاصل التمرير (ثانية / سرعة)",
    down: "أسفل",
    up: "أعلى",
    autoReverse: "عكس تلقائي",
    scrollDown: "تمرير لأسفل",
    scrollUp: "تمرير لأعلى",
    pause: "إيقاف مؤقت",
    stop: "إيقاف",
    stopOnInteraction: "إيقاف عند تفاعل المستخدم"
  },
  pt: {
    global: "Ativado (Globalmente)",
    domain: "Ativado (Neste Domínio)",
    subframes: "Incluir sub-frames",
    insiteWidget: "Mostrar Widget no Site",
    naturally: "Naturalmente",
    intervalMode: "A cada {sec} segundos",
    howMuch: "Distância de rolagem",
    scrollInterval: "Intervalo (seg / velocidade)",
    down: "Para baixo",
    up: "Para cima",
    autoReverse: "Inversão Automática",
    scrollDown: "Rolar Para Baixo",
    scrollUp: "Rolar Para Cima",
    pause: "Pausar",
    stop: "Parar",
    stopOnInteraction: "Parar ao interagir"
  },
  it: {
    global: "Abilitato (Globale)",
    domain: "Abilitato (Questo Dominio)",
    subframes: "Includi sub-frame",
    insiteWidget: "Mostra Widget nel Sito",
    naturally: "Naturale",
    intervalMode: "Ogni {sec} secondi",
    howMuch: "Distanza di scorrimento",
    scrollInterval: "Intervallo (sec / velocità)",
    down: "Giù",
    up: "Su",
    autoReverse: "Inversione Automatica",
    scrollDown: "Scorri Giù",
    scrollUp: "Scorri Su",
    pause: "Pausa",
    stop: "Stop",
    stopOnInteraction: "Interrompi all'interazione"
  },
  ko: {
    global: "전체 활성화",
    domain: "이 도메인 활성화",
    subframes: "하위 프레임 포함",
    insiteWidget: "화면 플로팅 버튼 표시",
    naturally: "자연스럽게",
    intervalMode: "{sec}초마다",
    howMuch: "스크롤 거리",
    scrollInterval: "스크롤 간격 (초 / 속도)",
    down: "아래로",
    up: "위로",
    autoReverse: "자동 반전",
    scrollDown: "아래로 스크롤",
    scrollUp: "위로 스크롤",
    pause: "일시 정지",
    stop: "정지",
    stopOnInteraction: "사용자 조작 시 정지"
  }
};

const LANG_NAMES = {
  en: "English",
  hi: "हिन्दी (Hindi)",
  bn: "বাংলা (Bengali)",
  te: "తెలుగు (Telugu)",
  mr: "मराठी (Marathi)",
  ta: "தமிழ் (Tamil)",
  gu: "ગુજરાતી (Gujarati)",
  kn: "ಕನ್ನಡ (Kannada)",
  ml: "മലയാളം (Malayalam)",
  pa: "ਪੰਜਾਬੀ (Punjabi)",
  or: "ଓଡ଼ିଆ (Odia)",
  es: "Español (Spanish)",
  fr: "Français (French)",
  de: "Deutsch (German)",
  ja: "日本語 (Japanese)",
  zh: "中文 (Chinese)",
  ru: "Русский (Russian)",
  ar: "العربية (Arabic)",
  pt: "Português (Portuguese)",
  it: "Italiano (Italian)",
  ko: "한국어 (Korean)"
};

let currentDomain = '';
let currentLanguage = 'en';

document.addEventListener('DOMContentLoaded', async () => {
  currentDomain = await getActiveTabDomain();
  const domainBadge = document.getElementById('currentDomainBadge');
  if (domainBadge) domainBadge.textContent = currentDomain || 'Global';

  chrome.storage.local.get(null, (settings) => {
    initUI(settings);
  });

  chrome.storage.onChanged.addListener((changes, area) => {
    if (area === 'local') {
      chrome.storage.local.get(null, (newSettings) => {
        updateUIState(newSettings);
      });
    }
  });

  setupCustomDropdown();
  bindEvents();
});

let currentUrlKey = '';

function getActiveTabDomain() {
  return new Promise((resolve) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs && tabs[0] && tabs[0].url) {
        try {
          const url = new URL(tabs[0].url);
          currentDomain = url.hostname;
          currentUrlKey = url.hostname + url.pathname;
          resolve(url.hostname);
        } catch (e) {
          resolve('');
        }
      } else {
        resolve('');
      }
    });
  });
}


function initUI(s) {
  currentLanguage = s.language || 'en';
  updateDropdownSelectedUI(currentLanguage);

  const chkGlobal = document.getElementById('chkGlobal');
  if (chkGlobal) chkGlobal.checked = s.enabledGlobal !== false;

  const chkDomain = document.getElementById('chkDomain');
  if (chkDomain) {
    const enabledDomains = s.enabledDomains || {};
    const domainEnabled = (currentDomain && enabledDomains[currentDomain] !== undefined)
      ? enabledDomains[currentDomain]
      : (s.enabledGlobal !== false);
    chkDomain.checked = !!domainEnabled;
  }


  const chkSub = document.getElementById('chkSubFrames');
  if (chkSub) {
    const subFramePages = s.subFramePages || {};
    const subFrameDomains = s.subFrameDomains || {};
    const pageSubFrameAllowed = (currentUrlKey && subFramePages[currentUrlKey] !== undefined)
      ? subFramePages[currentUrlKey]
      : ((currentDomain && subFrameDomains[currentDomain] !== undefined) ? subFrameDomains[currentDomain] : true);
    chkSub.checked = !!pageSubFrameAllowed;
    updateSubFramesLabel();
  }




  const chkInsite = document.getElementById('chkInsiteWidget');
  if (chkInsite) chkInsite.checked = s.showInsiteButton !== false;

  const chkAuto = document.getElementById('chkAutoReverse');
  if (chkAuto) chkAuto.checked = s.autoReverse !== false;

  const chkStop = document.getElementById('chkStopOnInteraction');
  if (chkStop) chkStop.checked = s.stopOnInteraction !== false;

  setScrollModeUI(s.scrollMode || 'natural', s.scrollInterval || 15);

  const amount = s.scrollAmount || 350;
  const interval = s.scrollInterval || 15;

  const rngAmt = document.getElementById('rngAmount');
  const numAmt = document.getElementById('numAmount');
  const rngInt = document.getElementById('rngInterval');
  const numInt = document.getElementById('numInterval');

  if (rngAmt) rngAmt.value = amount;
  if (numAmt) numAmt.value = amount;
  if (rngInt) rngInt.value = interval;
  if (numInt) numInt.value = interval;

  setDirectionUI(s.direction || 'down');
  applyTranslations();
  updateActionButtons(s.isScrolling, s.direction || 'down');
}

function updateUIState(s) {
  if (s.language && s.language !== currentLanguage) {
    currentLanguage = s.language;
    updateDropdownSelectedUI(currentLanguage);
    applyTranslations();
  }

  const chkGlobal = document.getElementById('chkGlobal');
  if (chkGlobal && s.enabledGlobal !== undefined) chkGlobal.checked = s.enabledGlobal;

  const chkDomain = document.getElementById('chkDomain');
  if (chkDomain && currentDomain) {
    const enabledDomains = s.enabledDomains || {};
    chkDomain.checked = enabledDomains[currentDomain] !== false;
  }



  const chkSub = document.getElementById('chkSubFrames');
  if (chkSub) {
    const subFramePages = s.subFramePages || {};
    const subFrameDomains = s.subFrameDomains || {};
    const pageSubFrameAllowed = (currentUrlKey && subFramePages[currentUrlKey] !== undefined)
      ? subFramePages[currentUrlKey]
      : ((currentDomain && subFrameDomains[currentDomain] !== undefined) ? subFrameDomains[currentDomain] : true);
    chkSub.checked = !!pageSubFrameAllowed;
    updateSubFramesLabel();
  }




  const chkInsite = document.getElementById('chkInsiteWidget');
  if (chkInsite && s.showInsiteButton !== undefined) chkInsite.checked = s.showInsiteButton;

  const chkStop = document.getElementById('chkStopOnInteraction');
  if (chkStop && s.stopOnInteraction !== undefined) chkStop.checked = s.stopOnInteraction;

  const chkAuto = document.getElementById('chkAutoReverse');
  if (chkAuto && s.autoReverse !== undefined) chkAuto.checked = s.autoReverse;

  if (s.scrollMode !== undefined || s.scrollInterval !== undefined) {
    chrome.storage.local.get(['scrollMode', 'scrollInterval'], (res) => {
      setScrollModeUI(res.scrollMode || 'natural', res.scrollInterval || 15);
    });
  }

  const rngAmt = document.getElementById('rngAmount');
  const numAmt = document.getElementById('numAmount');
  if (s.scrollAmount !== undefined) {
    if (rngAmt) rngAmt.value = s.scrollAmount;
    if (numAmt) numAmt.value = s.scrollAmount;
  }

  const rngInt = document.getElementById('rngInterval');
  const numInt = document.getElementById('numInterval');
  if (s.scrollInterval !== undefined) {
    if (rngInt) rngInt.value = s.scrollInterval;
    if (numInt) numInt.value = s.scrollInterval;
  }

  if (s.direction !== undefined) {
    setDirectionUI(s.direction);
  }

  chrome.storage.local.get(['isScrolling', 'direction'], (res) => {
    updateActionButtons(res.isScrolling, res.direction || 'down');
  });
}

function setupCustomDropdown() {
  const container = document.getElementById('customLangContainer');
  const trigger = document.getElementById('langSelectTrigger');
  const optionsMenu = document.getElementById('langSelectOptions');
  const searchInput = document.getElementById('langSearchInput');
  if (!container || !trigger || !optionsMenu) return;

  const optionEls = optionsMenu.querySelectorAll('.custom-option');

  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    const isHidden = optionsMenu.classList.contains('as-hidden');
    if (isHidden) {
      optionsMenu.classList.remove('as-hidden');
      container.classList.add('open');
      if (searchInput) {
        searchInput.value = '';
        optionEls.forEach(opt => opt.style.display = 'block');
        setTimeout(() => searchInput.focus(), 50);
      }
    } else {
      optionsMenu.classList.add('as-hidden');
      container.classList.remove('open');
    }
  });

  if (searchInput) {
    searchInput.addEventListener('click', (e) => e.stopPropagation());
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      optionEls.forEach((opt) => {
        const text = opt.textContent.toLowerCase();
        if (text.includes(q)) {
          opt.style.display = 'block';
        } else {
          opt.style.display = 'none';
        }
      });
    });
  }

  document.addEventListener('click', () => {
    optionsMenu.classList.add('as-hidden');
    container.classList.remove('open');
  });

  optionEls.forEach((opt) => {
    opt.addEventListener('click', (e) => {
      e.stopPropagation();
      const val = opt.getAttribute('data-value');
      currentLanguage = val;

      updateDropdownSelectedUI(val);
      optionsMenu.classList.add('as-hidden');
      container.classList.remove('open');

      chrome.storage.local.set({ language: val });
      applyTranslations();
    });
  });
}


function updateDropdownSelectedUI(langKey) {
  const selectedTextEl = document.getElementById('selectedLangText');
  const optionsMenu = document.getElementById('langSelectOptions');
  if (!selectedTextEl || !optionsMenu) return;

  selectedTextEl.textContent = LANG_NAMES[langKey] || LANG_NAMES.en;

  const optionEls = optionsMenu.querySelectorAll('.custom-option');
  optionEls.forEach((opt) => {
    if (opt.getAttribute('data-value') === langKey) {
      opt.classList.add('active');
    } else {
      opt.classList.remove('active');
    }
  });
}

function bindEvents() {
  const chkGlobal = document.getElementById('chkGlobal');
  if (chkGlobal) {
    chkGlobal.addEventListener('change', (e) => {
      chrome.storage.local.set({ enabledGlobal: e.target.checked });
    });
  }

  const chkDomain = document.getElementById('chkDomain');
  if (chkDomain) {
    chkDomain.addEventListener('change', (e) => {
      if (!currentDomain) return;
      chrome.storage.local.get(['enabledDomains'], (res) => {
        const domains = res.enabledDomains || {};
        domains[currentDomain] = e.target.checked;
        chrome.storage.local.set({ enabledDomains: domains });
      });
    });
  }

  const chkSub = document.getElementById('chkSubFrames');
  if (chkSub) {
    chkSub.addEventListener('change', (e) => {
      const isChecked = e.target.checked;
      updateSubFramesLabel();
      chrome.storage.local.get(['subFramePages', 'subFrameDomains'], (res) => {
        const subFramePages = res.subFramePages || {};
        const subFrameDomains = res.subFrameDomains || {};
        if (currentUrlKey) {
          subFramePages[currentUrlKey] = isChecked;
        }
        if (currentDomain) {
          subFrameDomains[currentDomain] = isChecked;
        }
        chrome.storage.local.set({
          subFramePages,
          subFrameDomains,
          includeSubFrames: isChecked
        });
      });
    });
  }



  const chkInsite = document.getElementById('chkInsiteWidget');
  if (chkInsite) {
    chkInsite.addEventListener('change', (e) => {
      chrome.storage.local.set({ showInsiteButton: e.target.checked });
    });
  }

  const chkStop = document.getElementById('chkStopOnInteraction');
  if (chkStop) {
    chkStop.addEventListener('change', (e) => {
      chrome.storage.local.set({ stopOnInteraction: e.target.checked });
    });
  }

  const chkAuto = document.getElementById('chkAutoReverse');
  if (chkAuto) {
    chkAuto.addEventListener('change', (e) => {
      chrome.storage.local.set({ autoReverse: e.target.checked });
    });
  }

  const btnNat = document.getElementById('btnModeNatural');
  if (btnNat) {
    btnNat.addEventListener('click', () => {
      setScrollModeUI('natural');
      chrome.storage.local.set({ scrollMode: 'natural' });
    });
  }

  const btnInt = document.getElementById('btnModeInterval');
  if (btnInt) {
    btnInt.addEventListener('click', () => {
      const rngInt = document.getElementById('rngInterval');
      const sec = rngInt ? (parseInt(rngInt.value, 10) || 15) : 15;
      setScrollModeUI('interval', sec);
      chrome.storage.local.set({ scrollMode: 'interval' });
    });
  }

  const rngAmount = document.getElementById('rngAmount');
  const numAmount = document.getElementById('numAmount');

  function syncScrollAmount(rawVal) {
    let val = parseInt(rawVal, 10);
    if (isNaN(val)) val = 350;
    val = Math.max(50, Math.min(5000, val));
    if (rngAmount) rngAmount.value = val;
    if (numAmount) numAmount.value = val;
    chrome.storage.local.set({ scrollAmount: val });
  }

  if (rngAmount) {
    rngAmount.addEventListener('input', (e) => syncScrollAmount(e.target.value));
    rngAmount.addEventListener('change', (e) => syncScrollAmount(e.target.value));
  }
  if (numAmount) {
    numAmount.addEventListener('input', (e) => syncScrollAmount(e.target.value));
    numAmount.addEventListener('change', (e) => syncScrollAmount(e.target.value));
  }

  const btnNumAmountUp = document.getElementById('btnNumAmountUp');
  const btnNumAmountDown = document.getElementById('btnNumAmountDown');
  if (btnNumAmountUp) {
    btnNumAmountUp.addEventListener('click', () => {
      const cur = numAmount ? (parseInt(numAmount.value, 10) || 350) : 350;
      syncScrollAmount(cur + 50);
    });
  }
  if (btnNumAmountDown) {
    btnNumAmountDown.addEventListener('click', () => {
      const cur = numAmount ? (parseInt(numAmount.value, 10) || 350) : 350;
      syncScrollAmount(cur - 50);
    });
  }

  const rngInterval = document.getElementById('rngInterval');
  const numInterval = document.getElementById('numInterval');

  function syncScrollInterval(rawVal) {
    let val = parseInt(rawVal, 10);
    if (isNaN(val)) val = 15;
    val = Math.max(1, Math.min(60, val));
    if (rngInterval) rngInterval.value = val;
    if (numInterval) numInterval.value = val;
    chrome.storage.local.set({ scrollInterval: val });
    chrome.storage.local.get(['scrollMode'], (res) => {
      if (res.scrollMode === 'interval') {
        setScrollModeUI('interval', val);
      }
    });
  }

  if (rngInterval) {
    rngInterval.addEventListener('input', (e) => syncScrollInterval(e.target.value));
    rngInterval.addEventListener('change', (e) => syncScrollInterval(e.target.value));
  }
  if (numInterval) {
    numInterval.addEventListener('input', (e) => syncScrollInterval(e.target.value));
    numInterval.addEventListener('change', (e) => syncScrollInterval(e.target.value));
  }

  const btnNumIntervalUp = document.getElementById('btnNumIntervalUp');
  const btnNumIntervalDown = document.getElementById('btnNumIntervalDown');
  if (btnNumIntervalUp) {
    btnNumIntervalUp.addEventListener('click', () => {
      const cur = numInterval ? (parseInt(numInterval.value, 10) || 15) : 15;
      syncScrollInterval(cur + 1);
    });
  }
  if (btnNumIntervalDown) {
    btnNumIntervalDown.addEventListener('click', () => {
      const cur = numInterval ? (parseInt(numInterval.value, 10) || 15) : 15;
      syncScrollInterval(cur - 1);
    });
  }

  const btnDown = document.getElementById('btnDirDown');
  if (btnDown) {
    btnDown.addEventListener('click', () => {
      setDirectionUI('down');
      chrome.storage.local.set({ direction: 'down' });
    });
  }

  const btnUp = document.getElementById('btnDirUp');
  if (btnUp) {
    btnUp.addEventListener('click', () => {
      setDirectionUI('up');
      chrome.storage.local.set({ direction: 'up' });
    });
  }

  const btnStart = document.getElementById('btnScrollStart');
  if (btnStart) {
    btnStart.addEventListener('click', () => {
      chrome.storage.local.get(['isScrolling'], (res) => {
        const nextState = !res.isScrolling;
        chrome.storage.local.set({ isScrolling: nextState });
        chrome.storage.local.get(['direction'], (dirRes) => {
          updateActionButtons(nextState, dirRes.direction || 'down');
        });
      });
    });
  }

  const lnkGithub = document.getElementById('lnkGithub');
  if (lnkGithub) {
    lnkGithub.addEventListener('click', (e) => {
      e.preventDefault();
      chrome.tabs.create({ url: 'https://github.com/devranbir' });
    });
  }
}


function setScrollModeUI(mode, intervalSec = 15) {
  const btnNat = document.getElementById('btnModeNatural');
  const btnInt = document.getElementById('btnModeInterval');
  const lblIntervalMode = document.getElementById('lblIntervalMode');
  const dict = I18N[currentLanguage] || I18N.en;

  if (btnInt && btnNat) {
    if (mode === 'interval') {
      btnInt.classList.add('active');
      btnNat.classList.remove('active');
    } else {
      btnNat.classList.add('active');
      btnInt.classList.remove('active');
    }
  }

  if (lblIntervalMode) {
    const intervalText = (dict.intervalMode || I18N.en.intervalMode).replace('{sec}', intervalSec);
    lblIntervalMode.textContent = intervalText;
  }
}

function setDirectionUI(dir) {
  const btnDown = document.getElementById('btnDirDown');
  const btnUp = document.getElementById('btnDirUp');

  if (btnUp && btnDown) {
    if (dir === 'up') {
      btnUp.classList.add('active');
      btnDown.classList.remove('active');
    } else {
      btnDown.classList.add('active');
      btnUp.classList.remove('active');
    }
  }
}

function updateActionButtons(isScrolling, direction) {
  const btnStart = document.getElementById('btnScrollStart');
  const lblAction = document.getElementById('lblScrollAction');
  const svgIcon = document.getElementById('svgActionIcon');
  const dict = I18N[currentLanguage] || I18N.en;

  if (btnStart && lblAction) {
    if (isScrolling) {
      btnStart.classList.add('is-active');
      lblAction.textContent = dict.pause || I18N.en.pause;
      if (svgIcon) {
        while (svgIcon.firstChild) svgIcon.removeChild(svgIcon.firstChild);
        const bar1 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        bar1.setAttribute("x", "6"); bar1.setAttribute("y", "4"); bar1.setAttribute("width", "4"); bar1.setAttribute("height", "16");
        const bar2 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        bar2.setAttribute("x", "14"); bar2.setAttribute("y", "4"); bar2.setAttribute("width", "4"); bar2.setAttribute("height", "16");
        svgIcon.appendChild(bar1);
        svgIcon.appendChild(bar2);
      }
    } else {
      btnStart.classList.remove('is-active');
      lblAction.textContent = direction === 'up' ? (dict.scrollUp || I18N.en.scrollUp) : (dict.scrollDown || I18N.en.scrollDown);
      if (svgIcon) {
        while (svgIcon.firstChild) svgIcon.removeChild(svgIcon.firstChild);
        const poly = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        poly.setAttribute("points", "5 3 19 12 5 21 5 3");
        svgIcon.appendChild(poly);
      }
    }
  }
}


function updateSubFramesLabel() {
  const chkSub = document.getElementById('chkSubFrames');
  const lblSub = document.getElementById('lblSubFrames');
  if (!chkSub || !lblSub) return;
  const dict = I18N[currentLanguage] || I18N.en;
  if (chkSub.checked) {
    lblSub.textContent = dict.subframesInclude || "Include sub-frames";
  } else {
    lblSub.textContent = dict.subframesExclude || "Exclude sub-frames";
  }
}

function applyTranslations() {
  const dict = I18N[currentLanguage] || I18N.en;

  const setTxt = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  };

  setTxt('lblGlobal', dict.global);
  setTxt('lblDomain', dict.domain);
  updateSubFramesLabel();
  setTxt('lblInsiteWidget', dict.insiteWidget);
  setTxt('lblNaturally', dict.naturally);
  setTxt('lblHowMuch', dict.howMuch);
  setTxt('lblScrollInterval', dict.scrollInterval);
  setTxt('lblDown', dict.down);
  setTxt('lblUp', dict.up);
  setTxt('lblAutoReverse', dict.autoReverse);
  setTxt('lblStop', dict.stop);
  setTxt('lblStopOnInteraction', dict.stopOnInteraction || I18N.en.stopOnInteraction);

  chrome.storage.local.get(['scrollMode', 'scrollInterval', 'isScrolling', 'direction'], (res) => {
    setScrollModeUI(res.scrollMode || 'natural', res.scrollInterval || 15);
    updateActionButtons(res.isScrolling, res.direction || 'down');
  });
}

