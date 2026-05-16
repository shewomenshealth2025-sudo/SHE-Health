
const SHE_FINDS_CONTENT = [
  {
    id: "heavy-period-care",
    category: "Period Care",
    title: "Heavy period care",
    meta: "Pads, cups, period pants, overnight protection",
    summary: "SHE Finds compares options by use case, not hype — helping women choose what fits their body, routine and budget.",
    best: "Best for users who need higher absorbency, backup protection, overnight support or practical options for long days.",
    consider: ["Absorbency and leak protection", "Comfort and skin sensitivity", "Cost over time", "Ease of changing outside the home"],
    scores: { Effectiveness: 5, Comfort: 4, Practicality: 4, Accessibility: 4 },
    linkedFacts: ["Heavy menstrual bleeding", "Painful periods"],
    next: "Compare product types by flow, lifestyle and access needs."
  },
  {
    id: "heat-therapy",
    category: "Pain Support",
    title: "Period pain heat therapy",
    meta: "Heat patches, hot water bottles, wearable heat",
    summary: "SHE Finds helps users compare heat options for home, work, university and travel.",
    best: "Best for cramps where warmth helps, especially when users need something portable or discreet.",
    consider: ["Heat duration", "Skin sensitivity", "Reusable vs disposable cost", "Discreetness under clothing"],
    scores: { Effectiveness: 4, Comfort: 5, Practicality: 4, Accessibility: 4 },
    linkedFacts: ["Painful periods", "Endometriosis"],
    next: "Match heat options to where symptoms happen most: home, work, university or on the move."
  },
  {
    id: "pcos-supplements",
    category: "Hormone Support",
    title: "PCOS supplement guidance",
    meta: "Inositol, vitamin D, omega-3, evidence checks",
    summary: "SHE Finds makes supplement conversations less confusing by separating evidence, claims, cost and suitability.",
    best: "Best for users who want to understand commonly discussed PCOS supplements without being sold to.",
    consider: ["Evidence quality", "Medication interactions", "Dose and consistency", "Cost and safety"],
    scores: { Evidence: 3, Practicality: 3, Accessibility: 3, Safety: 4 },
    linkedFacts: ["PCOS", "Insulin resistance"],
    next: "Use as a conversation starter with a healthcare professional, especially if taking medication or trying to conceive."
  },
  {
    id: "symptom-tracking",
    category: "Navigation Tools",
    title: "Symptom tracking tools",
    meta: "Cycle logs, pain diaries, appointment preparation",
    summary: "SHE Finds highlights tools that help women turn patterns into useful information for appointments.",
    best: "Best for users trying to understand recurring symptoms or prepare for a GP, clinic or specialist appointment.",
    consider: ["Ease of daily use", "Export/share options", "Privacy", "Whether it captures the right symptom pattern"],
    scores: { Practicality: 5, Ease: 4, Accessibility: 5, Privacy: 4 },
    linkedFacts: ["Painful periods", "Perimenopause", "UTIs"],
    next: "Track patterns for 2–3 cycles where relevant, or sooner if symptoms are severe."
  }
];

function scoreMarkup(scores) {
  return Object.entries(scores).map(([name, value]) => `
    <div class="she-score-line">
      <strong>${name}</strong>
      <div class="she-score-track"><div class="she-score-fill" style="width:${value * 20}%"></div></div>
      <span>${value}/5</span>
    </div>
  `).join("");
}

function findsTemplate(item) {
  return `
    <div class="she-content-top">
      <div>
        <div class="she-content-label">${item.category}</div>
        <h3 class="she-content-title">${item.title}</h3>
        <p class="she-content-summary">${item.summary}</p>
      </div>
      <button class="she-action-button" type="button">Compare options</button>
    </div>

    <div class="she-content-grid">
      <div class="she-info-block">
        <h4>Best for</h4>
        <p>${item.best}</p>
      </div>
      <div class="she-info-block">
        <h4>What SHE would consider</h4>
        <ul>${item.consider.map(x => `<li>${x}</li>`).join("")}</ul>
      </div>
      <div class="she-info-block is-wide">
        <h4>SHE score preview</h4>
        <div class="she-score-list">${scoreMarkup(item.scores)}</div>
      </div>
      <div class="she-info-block">
        <h4>Linked SHE Facts</h4>
        <div class="she-mini-links">${item.linkedFacts.map(x => `<span class="she-mini-link">${x}</span>`).join("")}</div>
      </div>
      <div class="she-info-block">
        <h4>Suggested next step</h4>
        <p>${item.next}</p>
      </div>
    </div>

    <p class="she-demo-disclaimer">Preview only. SHE Finds is structured guidance, not product endorsement or medical advice.</p>
  `;
}

function renderFinds(item) {
  document.querySelectorAll("[data-finds-item]").forEach(btn => btn.classList.toggle("is-active", btn.dataset.findsItem === item.id));
  document.getElementById("she-finds-output").innerHTML = findsTemplate(item);
}

function findsSearch(query) {
  const q = query.toLowerCase().trim();
  return SHE_FINDS_CONTENT.find(item =>
    item.title.toLowerCase().includes(q) ||
    item.category.toLowerCase().includes(q) ||
    item.meta.toLowerCase().includes(q) ||
    item.linkedFacts.join(" ").toLowerCase().includes(q)
  ) || SHE_FINDS_CONTENT[0];
}

document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("she-finds-list");
  list.innerHTML = SHE_FINDS_CONTENT.map(item => `
    <button class="she-topic-btn" type="button" data-finds-item="${item.id}">
      <span class="she-topic-name">${item.title}</span>
      <span class="she-topic-meta">${item.category} · ${item.meta}</span>
    </button>
  `).join("");

  list.querySelectorAll("[data-finds-item]").forEach(btn => {
    btn.addEventListener("click", () => {
      renderFinds(SHE_FINDS_CONTENT.find(item => item.id === btn.dataset.findsItem));
    });
  });

  const input = document.getElementById("she-finds-search");
  input.addEventListener("input", () => renderFinds(findsSearch(input.value)));
  renderFinds(SHE_FINDS_CONTENT[0]);
});
