
// v0.1: Static placeholders + UI wiring.
// Next milestone: replace placeholders with live feed calls via a Cloudflare Worker.

const state = {
  advisories: [],
  compliance: [],
  news: [],
  filter: ""
};

const lists = {
  advisories: document.getElementById("advisoriesList"),
  compliance: document.getElementById("complianceList"),
  news: document.getElementById("newsList")
};

// Placeholder seed data so the UI isn't empty
seed();

function seed() {
  state.advisories = [
    { title: "CISA Advisory: OpenSSH regreSSHion (CVE-2024-6387)", source: "CISA", date: "2024-07-01", url: "#" },
    { title: "KEV Update: Additions to Known Exploited Vulnerabilities Catalog", source: "CISA", date: "2024-08-05", url: "#" }
  ];
  state.compliance = [
    { title: "PCI SSC: Guidance update for PCI DSS 4.0 SAQs", source: "PCI SSC", date: "2024-11-12", url: "#" },
    { title: "ISO 27001/27017: New guidance note on cloud controls", source: "ISO", date: "2025-01-30", url: "#" }
  ];
  state.news = [
    { title: "Ransomware targets managed file transfer platforms", source: "SecurityWeek", date: "2025-02-18", url: "#" },
    { title: "FedRAMP PMO: Clarifies significant change expectations", source: "FedRAMP PMO", date: "2025-05-10", url: "#" }
  ];
  render();
}

function render() {
  const q = state.filter.toLowerCase().trim();
  renderList(lists.advisories, state.advisories, q);
  renderList(lists.compliance, state.compliance, q);
  renderList(lists.news, state.news, q);
}

function renderList(ul, items, q) {
  ul.innerHTML = "";
  items
    .filter(i => !q || i.title.toLowerCase().includes(q) || i.source.toLowerCase().includes(q))
    .forEach(i => {
      const li = document.createElement("li");
      li.className = "item";
      li.innerHTML = `
        <a href="${i.url}" target="_blank" rel="noopener noreferrer">${i.title}</a>
        <div class="meta">${i.source} • ${formatDate(i.date)}</div>
      `;
      ul.appendChild(li);
    });
}

function formatDate(d) {
  try {
    return new Date(d).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: '2-digit' });
  } catch {
    return d;
  }
}

// Search
document.getElementById("searchInput").addEventListener("input", (e) => {
  state.filter = e.target.value;
  render();
});

// Refresh (currently just re-renders)
document.getElementById("refreshBtn").addEventListener("click", () => {
  render();
});

// Dark mode toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  document.documentElement.classList.toggle("light");
});

// Optional: in the next phase we’ll poll a Worker endpoint
// setInterval(fetchFeeds, 5 * 60 * 1000);

// Example of how we'll fetch via a Worker later:
// async function fetchFeeds() {
//   const res = await fetch("https://your-worker.example.workers.dev/feeds");
//   const data = await res.json();
//   state.advisories = data.advisories;
//   state.compliance = data.compliance;
//   state.news = data.news;
//   render();
// }
