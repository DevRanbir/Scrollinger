// Popup Script for Scrollinger - Robust Null-Safe Multi-Language & Controls Manager


const I18N = {
  en: {
    global: "Enabled (Globally)",
    domain: "Enabled (This Domain)",
    page: "Enabled (This Page)",

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

// Labels added after the original language dictionaries. Keeping these in a
// separate map makes new controls impossible to silently miss in a locale.
const NEW_UI_I18N = {
  en: { autoScroll: 'Enable Auto-Scrolling', insiteWidget: 'In-Site Floating Widget', runLimit: 'Run Limit (minutes, 0 = unlimited)' },
  hi: { autoScroll: 'ऑटो-स्क्रॉल', insiteWidget: 'इन-साइट फ्लोटिंग विजेट', runLimit: 'रन सीमा (मिनट, 0 = असीमित)' },
  bn: { autoScroll: 'অটো-স্ক্রল', insiteWidget: 'ইন-সাইট ফ্লোটিং উইজেট', runLimit: 'চলার সীমা (মিনিট, ০ = সীমাহীন)' },
  te: { autoScroll: 'ఆటో-స్క్రోల్', insiteWidget: 'ఇన్-సైట్ ఫ్లోటింగ్ విడ్జెట్', runLimit: 'రన్ పరిమితి (నిమిషాలు, 0 = అపరిమితం)' },
  mr: { autoScroll: 'ऑटो-स्क्रोल', insiteWidget: 'इन-साइट फ्लोटिंग विजेट', runLimit: 'रन मर्यादा (मिनिटे, 0 = अमर्यादित)' },
  ta: { autoScroll: 'தானியங்கி உருள்', insiteWidget: 'தளத்திலுள்ள மிதக்கும் விட்ஜெட்', runLimit: 'இயக்க வரம்பு (நிமிடங்கள், 0 = வரம்பில்லை)' },
  gu: { autoScroll: 'ઑટો-સ્ક્રોલ', insiteWidget: 'સાઇટ-ઇન ફ્લોટિંગ વિજેટ', runLimit: 'રન મર્યાદા (મિનિટ, 0 = અમર્યાદિત)' },
  kn: { autoScroll: 'ಸ್ವಯಂ ಸ್ಕ್ರೋಲ್', insiteWidget: 'ಸೈಟ್‌ನಲ್ಲಿನ ಫ್ಲೋಟಿಂಗ್ ವಿಜೆಟ್', runLimit: 'ರನ್ ಮಿತಿ (ನಿಮಿಷಗಳು, 0 = ಮಿತಿ ಇಲ್ಲ)' },
  ml: { autoScroll: 'ഓട്ടോ-സ്ക്രോൾ', insiteWidget: 'ഇൻ-സൈറ്റ് ഫ്ലോട്ടിംഗ് വിഡ്ജറ്റ്', runLimit: 'റൺ പരിധി (മിനിറ്റ്, 0 = പരിധിയില്ല)' },
  pa: { autoScroll: 'ਆਟੋ-ਸਕ੍ਰੌਲ', insiteWidget: 'ਸਾਈਟ-ਅੰਦਰ ਫਲੋਟਿੰਗ ਵਿਜੇਟ', runLimit: 'ਰਨ ਸੀਮਾ (ਮਿੰਟ, 0 = ਅਸੀਮਿਤ)' },
  or: { autoScroll: 'ଅଟୋ-ସ୍କ୍ରୋଲ୍', insiteWidget: 'ସାଇଟ୍ ଫ୍ଲୋଟିଂ ୱିଜେଟ୍', runLimit: 'ଚାଲିବା ସୀମା (ମିନିଟ୍, 0 = ଅସୀମିତ)' },
  es: { autoScroll: 'Desplazamiento automático', insiteWidget: 'Widget flotante en el sitio', runLimit: 'Límite de ejecución (minutos, 0 = ilimitado)' },
  fr: { autoScroll: 'Défilement automatique', insiteWidget: 'Widget flottant intégré', runLimit: 'Limite d’exécution (minutes, 0 = illimité)' },
  de: { autoScroll: 'Automatisches Scrollen', insiteWidget: 'In-Site-Floating-Widget', runLimit: 'Laufzeitlimit (Minuten, 0 = unbegrenzt)' },
  ja: { autoScroll: '自動スクロール', insiteWidget: 'サイト内フローティングウィジェット', runLimit: '実行時間制限（分、0 = 無制限）' },
  zh: { autoScroll: '自动滚动', insiteWidget: '站内浮动控件', runLimit: '运行限制（分钟，0 = 不限）' },
  ru: { autoScroll: 'Автопрокрутка', insiteWidget: 'Плавающий виджет на сайте', runLimit: 'Лимит работы (минуты, 0 = без ограничений)' },
  ar: { autoScroll: 'التمرير التلقائي', insiteWidget: 'أداة عائمة داخل الموقع', runLimit: 'حد التشغيل (بالدقائق، 0 = بلا حدود)' },
  pt: { autoScroll: 'Rolagem automática', insiteWidget: 'Widget flutuante no site', runLimit: 'Limite de execução (minutos, 0 = ilimitado)' },
  it: { autoScroll: 'Scorrimento automatico', insiteWidget: 'Widget fluttuante nel sito', runLimit: 'Limite di esecuzione (minuti, 0 = illimitato)' },
  ko: { autoScroll: '자동 스크롤', insiteWidget: '사이트 내 플로팅 위젯', runLimit: '실행 제한 (분, 0 = 제한 없음)' }
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
  setupExcludedToggle();
  bindEvents();
});


let currentUrlKey = '';

function isDisabledSetting(value) {
  return value === false || value === 'false' || value === 0;
}

function isCurrentScopeEnabled(settings) {
  const pageEnabled = settings.pageEnabled || settings.subFramePages || {};
  const enabledDomains = settings.enabledDomains || {};
  if (currentUrlKey && pageEnabled[currentUrlKey] !== undefined) {
    return !isDisabledSetting(pageEnabled[currentUrlKey]);
  }
  if (currentDomain && enabledDomains[currentDomain] !== undefined) {
    return !isDisabledSetting(enabledDomains[currentDomain]);
  }
  return settings.enabledGlobal !== false;
}

function isDomainAutoScrollEnabled(settings) {
  const autoScrollDomains = settings.autoScrollDomains || {};
  return !!(currentDomain && autoScrollDomains[currentDomain] === true);
}

function syncScopeDependentControls(settings) {
  const scopeEnabled = isCurrentScopeEnabled(settings);
  const autoScroll = document.getElementById('chkAutoScroll');
  const insite = document.getElementById('chkInsiteWidget');

  if (autoScroll) {
    autoScroll.disabled = !scopeEnabled;
    autoScroll.checked = scopeEnabled && isDomainAutoScrollEnabled(settings);
  }
  if (insite) {
    insite.disabled = !scopeEnabled;
    insite.checked = scopeEnabled && settings.showInsiteButton !== false;
  }
}

function saveScopeChange(patch) {
  chrome.storage.local.get(null, (settings) => {
    const next = { ...settings, ...patch };
    const updates = { ...patch };
    if (settings.showInsiteButtonManual !== true) {
      updates.showInsiteButton = isCurrentScopeEnabled(next);
    }
    chrome.storage.local.set(updates);
  });
}

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
      ? !isDisabledSetting(enabledDomains[currentDomain])
      : (s.enabledGlobal !== false);
    chkDomain.checked = !!domainEnabled;
  }


  const chkPage = document.getElementById('chkPage');
  if (chkPage) {
    const pageEnabled = s.pageEnabled || s.subFramePages || {};
    const enabledDomains = s.enabledDomains || {};
    const pageVal = (currentUrlKey && pageEnabled[currentUrlKey] !== undefined)
      ? !isDisabledSetting(pageEnabled[currentUrlKey])
      : ((currentDomain && enabledDomains[currentDomain] !== undefined) ? !isDisabledSetting(enabledDomains[currentDomain]) : (s.enabledGlobal !== false));
    chkPage.checked = !!pageVal;
  }






  const chkInsite = document.getElementById('chkInsiteWidget');
  if (chkInsite) chkInsite.checked = s.showInsiteButton !== false;

  const chkAuto = document.getElementById('chkAutoReverse');
  if (chkAuto) chkAuto.checked = s.autoReverse !== false;

  const chkStop = document.getElementById('chkStopOnInteraction');
  if (chkStop) chkStop.checked = s.stopOnInteraction !== false;

  syncScopeDependentControls(s);

  setScrollModeUI(s.scrollMode || 'natural', s.scrollInterval || 15);

  const amount = s.scrollAmount || 350;
  const interval = s.scrollInterval || 15;
  const runLimit = Number.isFinite(Number(s.runLimitMinutes)) ? Math.max(0, Number(s.runLimitMinutes)) : 0;

  const rngAmt = document.getElementById('rngAmount');
  const numAmt = document.getElementById('numAmount');
  const rngInt = document.getElementById('rngInterval');
  const numInt = document.getElementById('numInterval');
  const numRunLimit = document.getElementById('numRunLimit');

  if (rngAmt) rngAmt.value = amount;
  if (numAmt) numAmt.value = amount;
  if (rngInt) rngInt.value = interval;
  if (numInt) numInt.value = interval;
  if (numRunLimit) numRunLimit.value = runLimit;

  setDirectionUI(s.direction || 'down');
  applyTranslations();
  renderExcludedItems(s);
  updateActionButtons(isDomainAutoScrollEnabled(s), s.direction || 'down');
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
    chkDomain.checked = !isDisabledSetting(enabledDomains[currentDomain]);
  }



  const chkPage = document.getElementById('chkPage');
  if (chkPage && currentUrlKey) {
    const pageEnabled = s.pageEnabled || s.subFramePages || {};
    const enabledDomains = s.enabledDomains || {};
    const pageVal = (pageEnabled[currentUrlKey] !== undefined)
      ? !isDisabledSetting(pageEnabled[currentUrlKey])
      : ((currentDomain && enabledDomains[currentDomain] !== undefined) ? !isDisabledSetting(enabledDomains[currentDomain]) : (s.enabledGlobal !== false));
    chkPage.checked = !!pageVal;
  }






  const chkInsite = document.getElementById('chkInsiteWidget');
  if (chkInsite && s.showInsiteButton !== undefined) chkInsite.checked = s.showInsiteButton;

  const chkStop = document.getElementById('chkStopOnInteraction');
  if (chkStop && s.stopOnInteraction !== undefined) chkStop.checked = s.stopOnInteraction;

  const chkAuto = document.getElementById('chkAutoReverse');
  if (chkAuto && s.autoReverse !== undefined) chkAuto.checked = s.autoReverse;

  syncScopeDependentControls(s);

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

  if (s.runLimitMinutes !== undefined) {
    const numRunLimit = document.getElementById('numRunLimit');
    if (numRunLimit) numRunLimit.value = Math.max(0, Math.min(1440, Number(s.runLimitMinutes) || 0));
  }

  if (s.isScrolling !== undefined || s.direction !== undefined) {
    chrome.storage.local.get(['isScrolling', 'direction'], (res) => {
      updateActionButtons(isDomainAutoScrollEnabled({ ...s, ...res }), res.direction || 'down');
    });
  }

  renderExcludedItems(s);
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
      saveScopeChange({ enabledGlobal: e.target.checked });
    });
  }

  const chkDomain = document.getElementById('chkDomain');
  if (chkDomain) {
    chkDomain.addEventListener('change', (e) => {
      if (!currentDomain) return;
      chrome.storage.local.get(null, (res) => {
        const domains = res.enabledDomains || {};
        domains[currentDomain] = e.target.checked;
        saveScopeChange({ enabledDomains: domains });
      });
    });
  }

  const chkPage = document.getElementById('chkPage');
  if (chkPage) {
    chkPage.addEventListener('change', (e) => {
      const isChecked = e.target.checked;
      chrome.storage.local.get(null, (res) => {
        const pageEnabled = res.pageEnabled || res.subFramePages || {};
        if (currentUrlKey) {
          pageEnabled[currentUrlKey] = isChecked;
        }
        saveScopeChange({
          pageEnabled,
          subFramePages: pageEnabled
        });
      });
    });
  }




  const chkInsite = document.getElementById('chkInsiteWidget');
  if (chkInsite) {
    chkInsite.addEventListener('change', (e) => {
      chrome.storage.local.set({
        showInsiteButton: e.target.checked,
        showInsiteButtonManual: true
      });
    });
  }

  const chkAutoScroll = document.getElementById('chkAutoScroll');
  if (chkAutoScroll) {
    chkAutoScroll.addEventListener('change', (e) => {
      if (!currentDomain) return;
      chrome.storage.local.get(['autoScrollDomains'], (res) => {
        const autoScrollDomains = res.autoScrollDomains || {};
        autoScrollDomains[currentDomain] = e.target.checked;
        const updates = { autoScrollDomains };
        if (e.target.checked) updates.isScrolling = true;
        chrome.storage.local.set(updates);
      });
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

  const numRunLimit = document.getElementById('numRunLimit');
  const syncRunLimit = (rawVal) => {
    let val = parseInt(rawVal, 10);
    if (isNaN(val)) val = 0;
    val = Math.max(0, Math.min(1440, val));
    if (numRunLimit) numRunLimit.value = val;
    chrome.storage.local.set({ runLimitMinutes: val });
  };

  if (numRunLimit) {
    numRunLimit.addEventListener('input', (e) => syncRunLimit(e.target.value));
    numRunLimit.addEventListener('change', (e) => syncRunLimit(e.target.value));
  }

  const btnRunLimitUp = document.getElementById('btnRunLimitUp');
  const btnRunLimitDown = document.getElementById('btnRunLimitDown');
  if (btnRunLimitUp) {
    btnRunLimitUp.addEventListener('click', () => syncRunLimit((parseInt(numRunLimit?.value, 10) || 0) + 1));
  }
  if (btnRunLimitDown) {
    btnRunLimitDown.addEventListener('click', () => syncRunLimit((parseInt(numRunLimit?.value, 10) || 0) - 1));
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
      chrome.storage.local.get(['autoScrollDomains'], (res) => {
        if (!currentDomain) return;
        const autoScrollDomains = res.autoScrollDomains || {};
        const nextState = autoScrollDomains[currentDomain] !== true;
        autoScrollDomains[currentDomain] = nextState;
        const updates = { autoScrollDomains };
        if (nextState) updates.isScrolling = true;
        chrome.storage.local.set(updates);
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


function applyTranslations() {
  const dict = I18N[currentLanguage] || I18N.en;
  const newLabels = NEW_UI_I18N[currentLanguage] || NEW_UI_I18N.en;

  const setTxt = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  };

  setTxt('lblGlobal', dict.global);
  setTxt('lblDomain', dict.domain);
  setTxt('lblPage', dict.page || "Enabled (This Page)");
  setTxt('lblAutoScroll', newLabels.autoScroll);
  setTxt('lblInsiteWidget', newLabels.insiteWidget);
  setTxt('lblRunLimit', newLabels.runLimit);

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

function setupExcludedToggle() {
  const btnToggle = document.getElementById('btnToggleExcluded');
  const btnClose = document.getElementById('btnCloseExcludedOverlay');
  const container = document.getElementById('containerExcluded');
  if (!container) return;

  if (btnToggle) {
    btnToggle.addEventListener('click', () => {
      const isHidden = container.classList.contains('as-hidden');
      if (isHidden) {
        container.classList.remove('as-hidden');
        btnToggle.classList.add('open');
      } else {
        container.classList.add('as-hidden');
        btnToggle.classList.remove('open');
      }
    });
  }

  if (btnClose) {
    btnClose.addEventListener('click', () => {
      container.classList.add('as-hidden');
      if (btnToggle) btnToggle.classList.remove('open');
    });
  }
}

function renderExcludedItems(s) {
  const container = document.getElementById('listExcluded');
  const countEl = document.getElementById('cntExcluded');
  const countOverlayEl = document.getElementById('cntExcludedOverlay');
  if (!container) return;

  const enabledDomains = (s && s.enabledDomains) || {};
  const pageEnabled = (s && s.pageEnabled) || (s && s.subFramePages) || {};

  const excludedDomains = [];
  const excludedPages = [];
  const isDisabled = (value) => value === false || value === 'false' || value === 0;

  // 1. Excluded domains
  Object.keys(enabledDomains).forEach(domain => {
    if (isDisabled(enabledDomains[domain])) {
      excludedDomains.push(domain);
    }
  });

  // Global disablement also excludes the active domain even when no
  // domain-specific override has been stored. Surface that effective
  // exclusion so the current popup does not appear inconsistent.
  if (currentDomain && s && s.enabledGlobal === false && enabledDomains[currentDomain] === undefined) {
    excludedDomains.push(currentDomain);
  }

  // 2. Excluded pages
  Object.keys(pageEnabled).forEach(pageKey => {
    if (isDisabled(pageEnabled[pageKey])) {
      excludedPages.push(pageKey);
    }
  });

  const totalCount = excludedDomains.length + excludedPages.length;
  if (countEl) countEl.textContent = totalCount;
  if (countOverlayEl) countOverlayEl.textContent = totalCount;

  container.innerHTML = '';

  if (totalCount === 0) {
    const emptyDiv = document.createElement('div');
    emptyDiv.className = 'excluded-empty';
    emptyDiv.textContent = 'No excluded pages or domains';
    container.appendChild(emptyDiv);
    return;
  }

  // Tree Section 1: Excluded Domains
  if (excludedDomains.length > 0) {
    const domainTreeSec = document.createElement('div');
    domainTreeSec.className = 'tree-section';

    const domainHeader = document.createElement('div');
    domainHeader.className = 'tree-header';
    domainHeader.textContent = `EXCLUDED DOMAINS (${excludedDomains.length})`;
    domainTreeSec.appendChild(domainHeader);


    const domainUl = document.createElement('ul');
    domainUl.className = 'tree-list';

    excludedDomains.forEach(domain => {
      const li = document.createElement('li');
      li.className = 'tree-item';

      const nameSpan = document.createElement('span');
      nameSpan.className = 'tree-item-name';
      nameSpan.textContent = domain;
      nameSpan.title = domain;

      const removeBtn = document.createElement('button');
      removeBtn.type = 'button';
      removeBtn.className = 'btn-enable-item';
      removeBtn.textContent = 'Enable';
      removeBtn.title = 'Re-enable auto-scrolling for this domain';

      removeBtn.addEventListener('click', () => {
        if (enabledDomains[domain] === undefined && currentDomain === domain && s.enabledGlobal === false) {
          // Override a globally disabled state for this domain.
          enabledDomains[domain] = true;
        } else {
          delete enabledDomains[domain];
        }
        chrome.storage.local.set({ enabledDomains }, () => {
          chrome.storage.local.get(null, (updated) => {
            initUI(updated);
          });
        });
      });

      li.appendChild(nameSpan);
      li.appendChild(removeBtn);
      domainUl.appendChild(li);
    });

    domainTreeSec.appendChild(domainUl);
    container.appendChild(domainTreeSec);
  }

  // Tree Section 2: Excluded Pages
  if (excludedPages.length > 0) {
    const pageTreeSec = document.createElement('div');
    pageTreeSec.className = 'tree-section';

    const pageHeader = document.createElement('div');
    pageHeader.className = 'tree-header';
    pageHeader.textContent = `EXCLUDED PAGES (${excludedPages.length})`;
    pageTreeSec.appendChild(pageHeader);


    const pageUl = document.createElement('ul');
    pageUl.className = 'tree-list';

    excludedPages.forEach(pageKey => {
      const li = document.createElement('li');
      li.className = 'tree-item';

      const nameSpan = document.createElement('span');
      nameSpan.className = 'tree-item-name';
      nameSpan.textContent = pageKey;
      nameSpan.title = pageKey;

      const removeBtn = document.createElement('button');
      removeBtn.type = 'button';
      removeBtn.className = 'btn-enable-item';
      removeBtn.textContent = 'Enable';
      removeBtn.title = 'Re-enable auto-scrolling for this page';

      removeBtn.addEventListener('click', () => {
        delete pageEnabled[pageKey];
        chrome.storage.local.set({ pageEnabled, subFramePages: pageEnabled }, () => {
          chrome.storage.local.get(null, (updated) => {
            initUI(updated);
          });
        });
      });

      li.appendChild(nameSpan);
      li.appendChild(removeBtn);
      pageUl.appendChild(li);
    });

    pageTreeSec.appendChild(pageUl);
    container.appendChild(pageTreeSec);
  }
}
