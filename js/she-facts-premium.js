const SHE_FACTS_CONTENT = [
  {
    id: "painful-periods",
    topic: "Menstrual Health",
    title: "Painful periods",
    meta: "Pain, cramps, heavy bleeding, disruption",
    summary: "SHE Facts explains painful periods by separating common period pain from symptoms that may need further support.",
    what: "Painful periods can range from common menstrual cramps to pain linked with conditions such as endometriosis, adenomyosis, fibroids, pelvic inflammatory disease or heavy menstrual bleeding. The key issue is impact: if pain repeatedly disrupts your work, study, sleep, relationships or daily routine, it should not be brushed off as normal.",
    know: ["Track when the pain starts, where it is felt and how long it lasts.", "Note bleeding pattern, clotting, bowel/bladder symptoms and fatigue.", "Record whether pain relief, heat or rest actually helps."],
    next: "Speak to a GP or healthcare professional if the pain is severe, worsening, new, one-sided, associated with very heavy bleeding, or stopping normal activities.",
    linkedFacts: ["Endometriosis", "Adenomyosis", "Heavy menstrual bleeding"],
    linkedFinds: ["Heat therapy", "TENS devices", "Period care", "Symptom tracking"]
  },
  {
    id: "pmos",
    topic: "Hormones",
    title: "PMOS",
    meta: "Irregular periods, skin, hair, metabolic health",
    summary: "PMOS, previously known as PCOS, is a hormone and metabolic condition that can affect cycles, skin, hair growth, weight patterns, fertility and long-term health.",
    what: "PMOS stands for Polyendocrine Metabolic Ovarian Syndrome. It reflects that the condition is not simply about ovarian cysts. It can involve hormone changes, irregular ovulation, androgen-related symptoms such as acne or excess hair growth, insulin resistance, metabolic risk, fertility concerns and emotional wellbeing.",
    know: ["Irregular or infrequent periods can be a key sign.", "Symptoms may include acne, excess facial/body hair, scalp hair thinning, weight changes or difficulty conceiving.", "Support may involve cycle management, metabolic health, skin/hair symptoms, fertility planning and long-term risk monitoring."],
    next: "Seek medical advice if periods are very irregular, symptoms are worsening, or you are trying to conceive. It can help to track cycles, skin/hair changes, weight patterns and family history before an appointment.",
    linkedFacts: ["Insulin resistance", "Irregular periods", "Acne and hormones"],
    linkedFinds: ["Cycle tracking", "Inositol guidance", "Appointment prep"]
  },
  {
    id: "endometriosis",
    topic: "Gynaecological Conditions",
    title: "Endometriosis",
    meta: "Pelvic pain, fatigue, bowel/bladder symptoms",
    summary: "SHE Facts helps users understand endometriosis symptom patterns and what to raise during an appointment.",
    what: "Endometriosis is a long-term inflammatory gynaecological condition where tissue similar to the lining of the womb grows outside the womb. It can cause pelvic pain, painful periods, pain during sex, fatigue, bowel symptoms, bladder symptoms and fertility concerns. Symptoms can vary widely and severity does not always match how much disease is present.",
    know: ["Pain that affects daily life should not be normalised.", "Symptoms may flare around periods but can also occur throughout the cycle.", "Tracking pain, bowel/bladder symptoms and fatigue can support better clinical conversations."],
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
    what: "Perimenopause is the transition leading up to menopause, when hormone levels fluctuate and periods may become irregular. It can involve hot flushes, night sweats, mood changes, anxiety, sleep disruption, brain fog, vaginal dryness, libido changes, joint aches and heavier or changing periods.",
    know: ["Symptoms can begin before periods stop completely.", "Periods may become heavier, lighter, closer together or further apart.", "Support can include lifestyle changes, medical advice, HRT discussions and workplace adjustments."],
    next: "Speak to a healthcare professional if symptoms affect quality of life or if bleeding becomes very heavy, unusual or concerning.",
    linkedFacts: ["HRT basics", "Heavy bleeding", "Sleep and hormones"],
    linkedFinds: ["Symptom trackers", "Menopause resources", "Workplace support"]
  },
  {
    id: "uti",
    topic: "Sexual & Urinary Health",
    title: "UTI symptoms",
    meta: "Burning, urgency, frequency, discomfort",
    summary: "SHE Facts helps users identify common UTI symptoms and when symptoms may need urgent attention.",
    what: "A urinary tract infection can cause burning when peeing, urgency, needing to pee more often, cloudy or strong-smelling urine and lower abdominal discomfort. Some symptoms can overlap with vaginal infections, STIs or bladder conditions, so repeated or unusual symptoms should be reviewed properly.",
    know: ["Symptoms can escalate if infection spreads.", "Recurrent UTIs may need proper review.", "Pregnancy, fever, back pain or blood in urine changes the level of urgency."],
    next: "Seek urgent advice if there is fever, back pain, blood in urine, pregnancy, or worsening symptoms.",
    linkedFacts: ["Recurrent UTIs", "Vaginal health", "STIs"],
    linkedFinds: ["Pharmacy navigation", "Hydration support", "Symptom logging"]
  }
];

function factsTemplate(item) {
  const symptoms = item.meta.split(",").map(x => x.trim());

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

      <div class="she-pattern-card">
     <span class="she-pattern-label">Your pattern</span>
        <h4>If this sounds familiar...</h4>
        <p>
          SHE would help you connect symptoms, timing, severity and impact — then guide you towards relevant education, product support and possible next steps.
        </p>
      </div>

      <div class="she-info-block">
        <h4>Symptoms</h4>
        <div class="she-symptom-pills">
          ${symptoms.map(x => `<span class="she-symptom-pill">${x}</span>`).join("")}
        </div>
      </div>

      <div class="she-info-block">
        <h4>What is this?</h4>
        <p>${item.what}</p>
      </div>

      <div class="she-info-block">
        <h4>What to know</h4>
        <ul>${item.know.map(x => `<li>${x}</li>`).join("")}</ul>
      </div>

     <div class="she-info-block she-block-next">
        <h4>What next</h4>
        <p>${item.next}</p>
      </div>

      <div class="she-info-block">
        <h4>Linked SHE Facts</h4>
        <div class="she-mini-links">
          ${item.linkedFacts.map(x => `<span class="she-mini-link">${x}</span>`).join("")}
        </div>
      </div>

      <div class="she-info-block">
        <h4>Linked SHE Finds</h4>
        <div class="she-mini-links">
          ${item.linkedFinds.map(x => `<span class="she-mini-link">${x}</span>`).join("")}
        </div>
      </div>

    </div>

    <p class="she-demo-disclaimer">
      Educational preview only. SHE is not a diagnostic or emergency medical service.
    </p>
  `;
}

function renderFacts(item) {
  document.querySelectorAll("[data-facts-item]").forEach(btn =>
    btn.classList.toggle("is-active", btn.dataset.factsItem === item.id)
  );
  document.getElementById("she-facts-output").innerHTML = factsTemplate(item);
}

function factsSearch(query) {
  const q = query.toLowerCase().trim();

  if (q.includes("pcos")) return SHE_FACTS_CONTENT.find(item => item.id === "pmos");

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

  renderFacts(SHE_FACTS_CONTENT[1]);
});
