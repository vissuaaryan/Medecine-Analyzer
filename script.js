// ========= BASIC SETUP ==========

// Elements
const input = document.getElementById("medicineInput");
const btn = document.getElementById("searchBtn");
const resultBox = document.getElementById("result");
const yearEl = document.getElementById("year");
const devBtn = document.getElementById("devInfoBtn");
const devPanel = document.getElementById("devInfoPanel");

// Footer year set
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

// Developer info toggle
if (devBtn && devPanel) {
    devBtn.addEventListener("click", () => {
        devPanel.classList.toggle("hidden");
    });
}

// Safe check
if (!btn || !resultBox || !input) {
    console.log("Some main elements not found");
} else {
    btn.addEventListener("click", handleSearch);
    input.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            handleSearch();
        }
    });
}

// ========= MAIN SEARCH FUNCTION =========

function handleSearch() {
    const query = input.value.trim().toLowerCase();

    if (!query) {
        showMessage("ध्यान दें 📝", "कृपया पहले दवाई का नाम लिखिए।");
        return;
    }

    // Demo: Paracetamol family
    if (
        query === "paracetamol" ||
        query === "pcm" ||
        query === "calpol" ||
        query === "crocin"
    ) {
        showParacetamol();
    } else {
        showMessage(
            "डाटा नहीं मिला 😕",
            'अभी हमारे डाटा में "<strong>' +
                query +
                '</strong>" की detail नहीं है।<br/>Demo version में अभी <strong>Paracetamol / PCM / Calpol / Crocin</strong> की जानकारी जोड़ी गई है।'
        );
    }
}

// ========= UI HELPERS =========

function showMessage(title, textHtml) {
    resultBox.classList.remove("empty");
    resultBox.innerHTML = `
        <div class="result-empty">
            <h2>${title}</h2>
            <p>${textHtml}</p>
        </div>
    `;
}

function showParacetamol() {
    resultBox.classList.remove("empty");
    resultBox.innerHTML = `
        <div>
            <h2 class="result-title">पैरासिटामोल – Paracetamol (PCM)</h2>
            <p class="result-subtitle">
                Category: Pain killer / Fever कम करने वाली दवा (Analgesic & Antipyretic)
            </p>

            <div class="tag-row">
                <span class="tag">Composition: Paracetamol 500 mg / 650 mg (exact dose डॉक्टर तय करते हैं)</span>
                <span class="tag">Educational reference only</span>
                <span class="tag">Doctor की सलाह ज़रूरी</span>
            </div>

            <div class="section">
                <h3 class="section-title">दवाई body में कैसे काम करती है?</h3>
                <p class="section-text">
                    Paracetamol body में उन chemicals (Prostaglandins) को कम करती है जो दर्द और बुखार बढ़ाते हैं।
                    इससे बुखार कम होता है और दर्द में आराम मिलता है। यह आमतौर पर हल्के से मध्यम दर्द और सामान्य बुखार में इस्तेमाल की जाती है।
                </p>
            </div>

            <div class="section">
                <h3 class="section-title">किस-किस तकलीफ़ में doctor इसे लिख सकते हैं?</h3>
                <ul class="section-list">
                    <li>हल्का से मध्यम सिरदर्द, body pain, muscle pain</li>
                    <li>सामान्य viral fever / flu में बुखार कम करने के लिए</li>
                    <li>दांत का हल्का दर्द, हल्की चोट के बाद होने वाला दर्द</li>
                </ul>
            </div>

            <div class="section">
                <h3 class="section-title">किस तरह के मरीजों में सावधानी / मना हो सकता है?</h3>
                <ul class="section-list">
                    <li>जिन्हें पहले Paracetamol लेने पर allergy / rash / सूजन / साँस फूलने जैसी समस्या हुई हो</li>
                    <li>जिन्हें पहले से severe liver disease है (जैसे cirrhosis, hepatitis आदि)</li>
                    <li>जो बहुत ज़्यादा alcohol लेते हैं – ऐसे लोगों को बिना doctor की सलाह के नहीं लेना चाहिए</li>
                </ul>
            </div>

            <div class="section">
                <h3 class="section-title">कब और कैसे लेना चाहिए? (General जानकारी)</h3>
                <p class="section-text">
                    आम तौर पर doctor सलाह देते हैं कि Paracetamol <strong>खाने के बाद या हल्का कुछ खाकर</strong> लिया जाए,
                    ताकि पेट पर कम असर पड़े। Exact dose (500 mg या 650 mg) और दिन में कितनी बार लेनी है – ये केवल आपका doctor सही से बता सकता है।
                </p>
                <p class="section-text">
                    <strong>Repeat / gap:</strong> कई guidelines में 4–6 घंटे का gap बताया जाता है, लेकिन आपके लिए सही gap और total tablets
                    सिर्फ आपका doctor ही तय कर सकता है। खुद से हर 2–3 घंटे में बार-बार tablet लेना खतरनाक हो सकता है।
                </p>
            </div>

            <div class="section">
                <h3 class="section-title section-title-danger">Serious / dangerous side effects (तुरंत doctor से मिलें)</h3>
                <ul class="section-list">
                    <li>बहुत ज़्यादा dose लेने पर liver damage का risk (jaundice – आँख व त्वचा पीली होना, पेशाब गहरा पीला होना)</li>
                    <li>बहुत थकान, कमजोरी, पेट के दाहिने हिस्से में दर्द</li>
                    <li>गंभीर allergy: चेहरे / होंठ / जीभ में सूजन, साँस लेने में दिक्कत – ये emergency है</li>
                </ul>
            </div>

            <div class="section">
                <h3 class="section-title section-title-food">खाने-पीने से जुड़ी सावधानियाँ</h3>
                <ul class="section-list">
                    <li>खाली पेट बार-बार लेना avoid करें, हल्का कुछ खाकर लेना बेहतर रहता है।</li>
                    <li>Alcohol के साथ बिल्कुल avoid करें – liver पर बहुत ज़्यादा load पड़ सकता है।</li>
                </ul>
            </div>

            <div class="section">
                <h3 class="section-title section-title-extra">extra ज़रूरी सावधानियाँ / patient के लिए message</h3>
                <ul class="section-list">
                    <li>अगर 2–3 दिन से ज़्यादा बुखार चल रहा है तो सिर्फ Paracetamol लेते रहने की बजाय तुरंत doctor से मिलें।</li>
                    <li>कई cold &amp; flu syrups/tablets में पहले से Paracetamol होता है – दो अलग-अलग दवाइयों से double dose न हो जाए, ध्यान रखें।</li>
                    <li>Pregnancy या breastfeeding में हमेशा doctor से पूछकर ही लें।</li>
                </ul>
                <p class="section-text" style="margin-top:4px;">
                    👉 ऊपर दी गई जानकारी general education के लिए है। आपके लिए सही दवाई, सही dose और सही duration
                    <strong>सिर्फ आपका doctor</strong> ही decide कर सकता है। खुद से इलाज शुरू या बंद न करें।
                </p>
            </div>
        </div>
    `;
}