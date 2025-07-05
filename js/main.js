// js/main.js

function getQueryParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

function loadLanguageData(lang) {
  const script = document.createElement("script");
  script.src = `js/languages/${lang}.js`;
  script.onload = () => {
    renderSidebar(languageData);
    renderContent(languageData);
  };
  script.onerror = () => {
    document.getElementById("topicContent").innerHTML = `<h2>Language not found</h2>`;
  };
  document.body.appendChild(script);
}

function renderSidebar(data) {
  const sidebar = document.getElementById("sidebar");
  sidebar.innerHTML = "";

  // 🔍 Sidebar Search Box
  const searchBox = document.createElement("input");
  searchBox.type = "text";
  searchBox.placeholder = "Search topics...";
  searchBox.className = "sidebar-search";
  sidebar.appendChild(searchBox);

  const topics = Object.keys(data).filter(
    key => typeof data[key] === "object" && key !== "references"
  );

  const topicLinks = topics.map(topic => {
    const link = document.createElement("a");
    link.href = "#";
    link.textContent = topic.replace(/([A-Z])/g, " $1").replace(/^\w/, c => c.toUpperCase());
    link.onclick = () => renderTopic(topic, data[topic]);
    sidebar.appendChild(link);
    return link;
  });

  searchBox.addEventListener("input", () => {
    const searchTerm = searchBox.value.toLowerCase();
    topicLinks.forEach(link => {
      link.style.display = link.textContent.toLowerCase().includes(searchTerm) ? "block" : "none";
    });
  });
}

function renderContent(data) {
  document.getElementById("topicContent").innerHTML = `
    <h2>${data.name} Programming</h2>
    <p>${data.definition}</p>
    <h3>Key Features</h3>
    <ul>${data.features.map(f => `<li>${f}</li>`).join('')}</ul>
    <h3>History</h3>
    <p>${data.history}</p>
  `;
}

function renderTopic(topic, content) {
  let html = `<h2>${topic.replace(/([A-Z])/g, " $1").replace(/^\w/, c => c.toUpperCase())}</h2>`;

  if (typeof content === "string") {
    html += `<p>${content}</p>`;
  } else if (Array.isArray(content)) {
    html += `<ul>${content.map(item => `<li>${item}</li>`).join('')}</ul>`;
  } else {
    for (const key in content) {
      const title = key.replace(/([A-Z])/g, " $1").replace(/^\w/, c => c.toUpperCase());
      const value = content[key];
      html += `<h3>${title}</h3>`;
      html += `<pre><code>${value}</code><button class="copy-btn">Copy</button></pre>`;
    }
  }

  document.getElementById("topicContent").innerHTML = html;

  // 🧾 Copy Code Button Logic
  document.querySelectorAll(".copy-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const code = btn.previousElementSibling.textContent;
      navigator.clipboard.writeText(code);
      btn.textContent = "Copied!";
      setTimeout(() => (btn.textContent = "Copy"), 1500);
    });
  });
}

// 🌙☀ Theme Toggle with Emoji
const themeToggleContainer = document.createElement("div");
themeToggleContainer.id = "themeToggleContainer";
themeToggleContainer.innerHTML = `
  <label class="theme-label" id="themeLabel" title="Toggle Theme">☀</label>
  <input type="checkbox" id="themeToggle" />
`;
document.body.appendChild(themeToggleContainer);

// Check saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  document.getElementById("themeToggle").checked = true;
  document.getElementById("themeLabel").textContent = "🌙";
}

document.getElementById("themeToggle").addEventListener("change", function () {
  if (this.checked) {
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
    document.getElementById("themeLabel").textContent = "🌙";
  } else {
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "light");
    document.getElementById("themeLabel").textContent = "☀";
  }
});

// ⬆️ Back to Top Button
const backToTop = document.createElement("button");
backToTop.id = "backToTop";
backToTop.textContent = "↑ Top";
document.body.appendChild(backToTop);

backToTop.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});

// Load selected language
const selectedLang = getQueryParam("lang");
if (selectedLang) {
  loadLanguageData(selectedLang);
}
