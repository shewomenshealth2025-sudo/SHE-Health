
const SHE_FACTS_CONTENT = [
  {
    id: "painful-periods",
    topic: "Menstrual Health",
    title: "Painful periods",
    meta: "Pain, cramps, heavy bleeding, disruption",
    summary: "SHE Facts explains painful periods in a way that separates common symptoms from signs that may need further support.",
    meaning: "Period pain is common, but pain that repeatedly disrupts work, study, sleep or daily life should not be dismissed as simply normal.",
    know: ["Track pain timing, severity and bleeding pattern.", "Note whether pain responds to usual pain relief or heat.", "Look for patterns such as bowel, bladder or pelvic symptoms."],
    next: "Consider speaking to a GP or healthcare professional if pain is severe, worsening, new, one-sided or stopping normal activities.",
    linkedFacts: ["Endometriosis", "Adenomyosis", "Heavy menstrual bleeding"],
    linkedFinds: ["Heat therapy", "TENS devices", "Period care", "Symptom tracking"]
  },
  {
    id: "pcos",
    topic: "Hormones",
    title: "PCOS",
    meta: "Irregular periods, skin, hair, metabolic health",
    summary: "SHE Facts turns PCOS information into clear education across symptoms, hormones, fertility and long-term health.",
    meaning: "PCOS can affect cycles, skin, hair growth, weight patterns, fertility and metabolic health, but presentation varies between women.",
    know: ["Irregular periods can be a key sign.", "Symptoms can include acne, excess hair growth or scalp hair thinning.", "Long-term support may include lifestyle, medical review and symptom-specific care."],
    next: "Seek medical advice if periods are very irregular, symptoms are worsening, or you are trying to conceive.",
    linkedFacts: ["Insulin resistance", "Irregular periods", "Acne and hormones"],
    linkedFinds: ["Cycle tracking", "Inositol guidance", "Appointment prep"]
  },
  {
    id: "endometriosis",
    topic: "Gynaecological Conditions",
    title: "Endometriosis",
    meta: "Pelvic pain, fatigue, bowel/bladder symptoms",
    summary: "SHE Facts helps users understand possible symptom patterns and what to raise during an appointment.",
    meaning: "Endometriosis can involve pelvic pain, painful periods, pain during sex, fatigue and bowel or bladder symptoms.",
    know: ["Pain that affects daily life should not be normalised.", "Symptoms may not always match disease severity.", "Documenting patterns can support better conversations with clinicians."],
    next: "Speak to a GP if pelvic pain is persistent, severe, worsening, or affecting your daily life.",
    linkedFacts: ["Painful periods", "Pelvic pain", "Fertility"],
    linkedFinds: ["Heat patches", "TENS", "Pain diary", "Appointment checklist"]
  },
  {
    id: "perimenopause",
    topic: "Menopause",
    title: "Perimenopause",
    meta: "Cycle changes, mood, sleep, hot flushes",
    summary: "SHE Facts explains perimenopause beyond hot flushes, including mood, sleep, cognition, periods and workplace impact.",
    meaning: "Perimenopause can begin before periods stop and may involve cycle changes, hot flushes, mood shifts, sleep disruption and brain fog.",
    know: ["Symptoms vary widely.", "Periods may become heavier, lighter, closer together or further apart.", "Support can involve lifestyle, medical advice and workplace adjustments."],
    next: "Speak to a healthcare professional if symptoms are affecting quality of life or bleeding patterns are concerning.",
    linkedFacts: ["HRT basics", "Heavy bleeding", "Sleep and hormones"],
    linkedFinds: ["Symptom trackers", "Menopause resources", "Workplace support"]
  },
  {
    id: "uti",
    topic: "Sexual & Urinary Health",
    title: "UTI symptoms",
    meta: "Burning, urgency, frequency, discomfort",
    summary: "SHE Facts helps users identify common UTI symptoms and when symptoms may need urgent attention.",
    meaning: "UTIs can cause burning when peeing, urgency, frequency and lower abdominal discomfort.",
    know: ["Symptoms can escalate.", "Recurrent UTIs may need proper review.", "Pregnancy, fever or back pain changes the level of urgency."],
    next: "Seek urgent advice if there is fever, back pain, blood in urine, pregnancy, or worsening symptoms.",
    linkedFacts: ["Recurrent UTIs", "Vaginal health", "STIs"],
    linkedFinds: ["Pharmacy navigation", "Hydration support", "Symptom logging"]
  }
];

function factsTemplate(item) {
  return `
    <div class="she-content-top">
      <div>
        <div class="she-content-label">${item.topic}</div>
        <h3 class="she-content-title">${item.title}</h3>
        <p class="she-content-summary">${item.summary}</p>
      </div>
      <button class="she-action-button" type="button">Explore full fact</button>
    </div>

    <div class="she-content-grid">
      <div class="she-info-block">
        <h4>What it could mean</h4>
        <p>${item.meaning}</p>
      </div>
      <div class="she-info-block">
        <h4>What to know</h4>
        <ul>${item.know.map(x => `<li>${x}</li>`).join("")}</ul>
      </div>
      <div class="she-info-block is-wide">
        <h4>What next</h4>
        <p>${item.next}</p>
      </div>
      <div class="she-info-block">
        <h4>Linked SHE Facts</h4>
        <div class="she-mini-links">${item.linkedFacts.map(x => `<span class="she-mini-link">${x}</span>`).join("")}</div>
      </div>
      <div class="she-info-block">
        <h4>Linked SHE Finds</h4>
        <div class="she-mini-links">${item.linkedFinds.map(x => `<span class="she-mini-link">${x}</span>`).join("")}</div>
      </div>
    </div>

    <p class="she-demo-disclaimer">Educational preview only. SHE is not a diagnostic or emergency medical service.</p>
  `;
}

function renderFacts(item) {
  document.querySelectorAll("[data-facts-item]").forEach(btn => btn.classList.toggle("is-active", btn.dataset.factsItem === item.id));
  document.getElementById("she-facts-output").innerHTML = factsTemplate(item);
}

function factsSearch(query) {
  const q = query.toLowerCase().trim();
  return SHE_FACTS_CONTENT.find(item =>
    item.title.toLowerCase().includes(q) ||
    item.topic.toLowerCase().includes(q) ||
    item.meta.toLowerCase().includes(q) ||
    item.linkedFacts.join(" ").toLowerCase().includes(q)
  ) || SHE_FACTS_CONTENT[0];
}

document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("she-facts-list");
  list.innerHTML = SHE_FACTS_CONTENT.map(item => `
    <button class="she-topic-btn" type="button" data-facts-item="${item.id}">
      <span class="she-topic-name">${item.title}</span>
      <span class="she-topic-meta">${item.topic} · ${item.meta}</span>
    </button>
  `).join("");

  list.querySelectorAll("[data-facts-item]").forEach(btn => {
    btn.addEventListener("click", () => {
      renderFacts(SHE_FACTS_CONTENT.find(item => item.id === btn.dataset.factsItem));
    });
  });

  const input = document.getElementById("she-facts-search");
  input.addEventListener("input", () => renderFacts(factsSearch(input.value)));
  renderFacts(SHE_FACTS_CONTENT[0]);
});
