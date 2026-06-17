// Chapters configuration
const chapters = [
    { id: "01", title: "Der Zylinder", file: "chapter_01_zylinder.md" },
    { id: "02", title: "Der Vergaser", file: "chapter_02_vergaser.md" },
    { id: "03", title: "Der Auspuff", file: "chapter_03_auspuff.md" },
    { id: "04", title: "Die Kurbelwelle", file: "chapter_04_kurbelwelle.md" },
    { id: "05", title: "Die Kupplung", file: "chapter_05_kupplung.md" },
    { id: "06", title: "Die Zündung", file: "chapter_06_zuendung.md" },
    { id: "07", title: "Die Kühlung", file: "chapter_07_kuehlung.md" },
    { id: "08", title: "Die Bremsen", file: "chapter_08_bremsen.md" },
    { id: "09", title: "Die Lunge", file: "chapter_09_luftfilter.md" },
    { id: "10", title: "Das Gericht", file: "chapter_10_legalitaet.md" }
];

// Product mapping for Javascript calculator recommendations
const productDatabase = {
    zylinder: {
        name: "Schmitt Sportfreund Zylinderkit 60ccm",
        image: "https://www.racing-planet.de/images/mittel/265/STT49609_1.jpg",
        link: "https://www.racing-planet.de/zylinderkit-schmitt-sportfreund-vertex-edition-60ccm-41mm-fuer-simson-s51-kr51-2-sr50-p-568944-1.html"
    },
    vergaser: {
        name: "Schmitt BVF Tuning-Vergaser 19mm",
        image: "https://www.racing-planet.de/images/mittel/265/KITmitNK.200.29_1.jpg",
        link: "https://www.racing-planet.de/tuning-vergaser-kit-19mm-fuer-simson-s50-s51-s53-s70-s83-sr50-sr80-p-394411-1.html"
    },
    kurbelwelle: {
        name: "Kurbelwelle Schmitt Sportfreund 44mm Hub",
        image: "https://www.racing-planet.de/images/mittel/265/STT44242_1.jpg",
        link: "https://www.racing-planet.de/kurbelwelle-schmitt-sportfreund-44mm-hub-85mm-pleuel-fuer-simson-s51-s53-s70-s83-sr50-sr80-kr51-2-p-496655-1.html"
    },
    kupplung: {
        name: "Schmitt 5-Lamellen Kupplungskit",
        image: "https://www.racing-planet.de/images/mittel/265/54875_2.jpg",
        link: "https://www.racing-planet.de/kupplung-paket-komplett-5-scheiben-10mm-aluminium-version-16mm-feder-fuer-simson-s51-s70-s53-s83-enduro-p-586040-1.html"
    },
    zuendung: {
        name: "Schmitt Zündungsanlage für Simson",
        image: "https://www.racing-planet.de/images/mittel/265/STT55403_10.jpg",
        link: "https://www.racing-planet.de/zuendung-schmitt-fuer-simson-s50-s51-schwalbe-kr51-sr-4-roller-sr50-p-590261-1.html"
    },
    kopf: {
        name: "Schmitt RD Style Zylinderkopf 50ccm",
        image: "https://www.racing-planet.de/images/mittel/265/STT49468_4.jpg",
        link: "https://www.racing-planet.de/zylinderkopf-schmitt-rd-style-50ccm-fuer-simson-s51-s53-sr50-kr51-2-p-507696-1.html"
    },
    bremse: {
        name: "Schmitt CNC Handanker Hebelset schwarz-blau",
        image: "https://www.racing-planet.de/images/mittel/265/STT56522_1.jpg", // using premium cable as a visual
        link: "https://www.racing-planet.de/bremshebel-kupplungshebel-set-schmitt-handanker-cnc-aluminium-schwarz-blau-fuer-simson-s50-s51-s53-kr51-2-sr50-sr80-p-590595-1.html"
    },
    luftfilter: {
        name: "BVF Düsenset Schmitt (10 Stück)",
        image: "https://www.racing-planet.de/images/mittel/265/STT49007_2.jpg",
        link: "https://www.racing-planet.de/vergaser-leerlaufduesen-set-schmitt-fuer-bvf-vergaser-25-34-10-stueck-p-506597-1.html"
    },
    auspuff: {
        name: "Schmitt Edelstahl Auspuffhalterung",
        image: "https://www.racing-planet.de/images/mittel/265/54871_1.jpg",
        link: "https://www.racing-planet.de/halter-auspuff-hinten-edelstahl-fuer-simson-s50-s51-p-586036-1.html"
    },
    tuev: {
        name: "Schmitt CNC Scheibenbremse-Radnabe vorn schwarz",
        image: "https://www.racing-planet.de/images/mittel/265/54891_1.jpg",
        link: "https://www.racing-planet.de/radnabe-fuer-scheibenbremse-vorn-schwarz-fuer-simson-s50-s51-s70-s53-s83-enduro-p-586056-1.html"
    }
};

// Initialize app when DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    initMermaid();
    renderSidebarChapters();
    updateProgress();
    loadPortal(); // load README.md initially
    
    // Toggle sidebar on mobile
    const toggleBtn = document.getElementById("menu-toggle");
    const sidebar = document.getElementById("sidebar");
    if (toggleBtn && sidebar) {
        toggleBtn.addEventListener("click", () => {
            sidebar.classList.toggle("open");
        });
    }
});

function initMermaid() {
    if (window.mermaid) {
        mermaid.initialize({
            startOnLoad: false,
            theme: 'dark',
            securityLevel: 'loose',
            themeVariables: {
                background: '#121212',
                primaryColor: '#cc0000',
                primaryTextColor: '#fff',
                lineColor: '#ffb703'
            }
        });
    }
}

// Render the sidebar list dynamically
function renderSidebarChapters() {
    const list = document.getElementById("chapters-list");
    if (!list) return;
    
    list.innerHTML = "";
    chapters.forEach(ch => {
        const isRead = localStorage.getItem(`chapter_${ch.id}_read`) === "true";
        
        const item = document.createElement("a");
        item.href = "#";
        item.className = "nav-item nav-chapter-item";
        item.setAttribute("data-chapter", ch.id);
        item.onclick = (e) => {
            e.preventDefault();
            loadChapter(ch.id);
        };
        
        item.innerHTML = `
            <i class="fa-solid fa-file-lines"></i>
            <span>Ch ${ch.id}: ${ch.title}</span>
            <span class="chapter-check ${isRead ? 'checked' : ''}" onclick="toggleChapterRead('${ch.id}', event)">
                <i class="fa-solid ${isRead ? 'fa-square-check' : 'fa-square'}"></i>
            </span>
        `;
        list.appendChild(item);
    });
}

// Toggle chapter checkbox read status in sidebar
function toggleChapterRead(chId, event) {
    if (event) {
        event.stopPropagation();
        event.preventDefault();
    }
    const key = `chapter_${chId}_read`;
    const isRead = localStorage.getItem(key) === "true";
    localStorage.setItem(key, !isRead);
    
    renderSidebarChapters();
    updateProgress();
}

// Update local progress indicators
function updateProgress() {
    const total = chapters.length;
    let readCount = 0;
    chapters.forEach(ch => {
        if (localStorage.getItem(`chapter_${ch.id}_read`) === "true") {
            readCount++;
        }
    });
    
    const percent = total > 0 ? Math.round((readCount / total) * 100) : 0;
    
    const fill = document.getElementById("progress-fill");
    const txt = document.getElementById("progress-percent");
    if (fill) fill.style.width = `${percent}%`;
    if (txt) txt.textContent = `${percent}%`;
}

// Fetch and render portal manifest (README.md)
function loadPortal() {
    setActiveNavItem("manifest");
    fetchAndRenderMarkdown("README.md", true);
}

// Fetch and render single chapter file
function loadChapter(chId) {
    setActiveNavItem(chId, true);
    const ch = chapters.find(c => c.id === chId);
    if (ch) {
        fetchAndRenderMarkdown(`chapters/${ch.file}`, false);
    }
}

// Update visual navigation active indicator
function setActiveNavItem(targetId, isChapter = false) {
    // Close sidebar on mobile
    const sidebar = document.getElementById("sidebar");
    if (sidebar) sidebar.classList.remove("open");

    // Clear active styling
    document.querySelectorAll(".nav-item").forEach(item => {
        item.classList.remove("active");
    });
    
    if (isChapter) {
        const item = document.querySelector(`.nav-chapter-item[data-chapter="${targetId}"]`);
        if (item) item.classList.add("active");
    } else {
        const item = document.querySelector(`.nav-item[data-target="${targetId}"]`);
        if (item) item.classList.add("active");
    }
    
    // Hide tools tab, show reading target panel
    document.getElementById("tools-tab").style.display = "none";
    document.getElementById("page-render").style.display = "block";
}

// Show tools Tab
function showToolsTab() {
    setActiveNavItem("tools");
    document.getElementById("page-render").style.display = "none";
    document.getElementById("tools-tab").style.display = "block";
}

// Custom Markdown to HTML engine with LaTeX and HTML rewrite support
function fetchAndRenderMarkdown(filename, isPortal = false) {
    const renderDiv = document.getElementById("page-render");
    const loading = document.getElementById("loading-screen");
    
    if (loading) loading.style.display = "flex";
    if (renderDiv) renderDiv.style.opacity = "0.3";
    
    fetch(filename)
        .then(res => {
            if (!res.ok) throw new Error("Akte konnte nicht geöffnet werden.");
            return res.text();
        })
        .then(markdown => {
            // 0. GitHub Alerts preprocessor — runs BEFORE marked.parse()
            // Converts > [!TIP/NOTE/IMPORTANT/WARNING/CAUTION] blocks into styled HTML.
            // marked.js has no native support for these; we handle them here.
            const alertConfig = {
                'NOTE':      { icon: 'fa-solid fa-circle-info',        label: 'Hinweis',   color: '#4a9eff', bg: 'rgba(74,158,255,0.06)',  border: 'rgba(74,158,255,0.35)' },
                'TIP':       { icon: 'fa-solid fa-lightbulb',           label: 'Tipp',      color: '#00e676', bg: 'rgba(0,230,118,0.06)',   border: 'rgba(0,230,118,0.35)' },
                'IMPORTANT': { icon: 'fa-solid fa-star',                label: 'Wichtig',   color: '#ffb703', bg: 'rgba(255,183,3,0.06)',   border: 'rgba(255,183,3,0.35)' },
                'WARNING':   { icon: 'fa-solid fa-triangle-exclamation', label: 'Warnung',   color: '#ff6b35', bg: 'rgba(255,107,53,0.06)',  border: 'rgba(255,107,53,0.35)' },
                'CAUTION':   { icon: 'fa-solid fa-skull-crossbones',    label: 'Achtung!',  color: '#cc0000', bg: 'rgba(204,0,0,0.08)',     border: 'rgba(204,0,0,0.4)' }
            };

            const alertBodies = [];

            // Match full blockquote blocks starting with > [!TYPE]
            // Each line of the block starts with "> " or is just ">"
            markdown = markdown.replace(
                /^> \[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\n((?:>.*\n?)*)/gm,
                (match, type, body) => {
                    const cfg = alertConfig[type];
                    // Strip leading "> " from each body line
                    const innerMd = body
                        .split('\n')
                        .map(line => line.replace(/^> ?/, ''))
                        .join('\n')
                        .trim();
                    // Store body markdown for post-parse injection
                    const idx = alertBodies.length;
                    alertBodies.push({ innerMd, cfg, type });
                    return `<div class="gh-alert gh-alert-${type.toLowerCase()}" style="--alert-color:${cfg.color};--alert-bg:${cfg.bg};--alert-border:${cfg.border}">` +
                           `<div class="gh-alert-label"><i class="${cfg.icon}"></i> ${cfg.label}</div>` +
                           `<div class="gh-alert-body">ALERTBODY${idx}ENDALERTBODY</div>` +
                           `</div>\n\n`;
                }
            );

            // 1. Math preprocessing: protect LaTeX formulas from marked.js parsing
            const mathBlocks = [];
            const mathInlines = [];
            
            // Extract Block Math $$...$$ first (must be done before inline to avoid conflict)
            let processed = markdown.replace(/\$\$([\s\S]+?)\$\$/g, (match, formula) => {
                mathBlocks.push(formula.trim());
                return `MATHBLOCK${mathBlocks.length - 1}ENDMATHBLOCK`;
            });
            
            // Extract Inline Math $...$ 
            // Regex: $ followed by non-whitespace start, non-$ content, non-whitespace end, $
            // Does NOT match $$ (already handled above), does NOT span newlines
            processed = processed.replace(/\$([^\$\r\n]+?)\$/g, (match, formula) => {
                // Skip if formula is empty or just whitespace
                if (!formula.trim()) return match;
                mathInlines.push(formula.trim());
                return `MATHINLINE${mathInlines.length - 1}ENDMATHINLINE`;
            });
            
            // 2. Parse Markdown to HTML
            if (!window.marked) {
                renderDiv.innerHTML = `<pre>${processed}</pre>`;
                return;
            }
            
            let html = marked.parse(processed);
            
            // 3a. Inject alert bodies (parsed as inline markdown so links/bold work)
            if (alertBodies.length > 0) {
                alertBodies.forEach(({ innerMd }, idx) => {
                    const placeholder = `ALERTBODY${idx}ENDALERTBODY`;
                    // Use marked.parse() on body so multi-line content (links, bold) renders fully
                    const renderedBody = marked.parse(innerMd).replace(/^<p>|<\/p>\n?$/g, '');
                    html = html.replaceAll(placeholder, renderedBody);
                });
            }

            // 3b. Postprocess: decode any HTML entities that marked.js may have introduced
            // into our placeholder strings (e.g. inside <code> blocks)
            html = html
                .replace(/MATHBLOCK(\d+)ENDMATHBLOCK/g, 'MATHBLOCK$1ENDMATHBLOCK') // identity — kept for clarity
                .replace(/&amp;/g, '&'); // broad entity fix before re-injection (safe here since we control output)
            
            // Re-inject rendered KaTeX math
            if (window.katex) {
                mathBlocks.forEach((formula, idx) => {
                    const placeholder = `MATHBLOCK${idx}ENDMATHBLOCK`;
                    try {
                        const rendered = katex.renderToString(formula, { displayMode: true, throwOnError: false });
                        // replaceAll to catch duplicated placeholders
                        html = html.replaceAll(placeholder, rendered);
                    } catch (err) {
                        html = html.replaceAll(placeholder, `<code class="math-error">${formula}</code>`);
                    }
                });
                
                mathInlines.forEach((formula, idx) => {
                    const placeholder = `MATHINLINE${idx}ENDMATHINLINE`;
                    try {
                        const rendered = katex.renderToString(formula, { displayMode: false, throwOnError: false });
                        html = html.replaceAll(placeholder, rendered);
                    } catch (err) {
                        html = html.replaceAll(placeholder, `<code class="math-error">${formula}</code>`);
                    }
                });
            } else {
                // KaTeX not available: strip placeholders and show raw LaTeX
                mathBlocks.forEach((formula, idx) => {
                    html = html.replaceAll(`MATHBLOCK${idx}ENDMATHBLOCK`, `<pre class="math-raw">$$${formula}$$</pre>`);
                });
                mathInlines.forEach((formula, idx) => {
                    html = html.replaceAll(`MATHINLINE${idx}ENDMATHINLINE`, `<code class="math-raw">$${formula}$</code>`);
                });
            }
            
            // 4. Intercept relative Markdown links in files to keep it SPA
            // Replace e.g., href="chapters/chapter_01_zylinder.md" with JS loads
            // Also handles relative links like chapters/chapter_02_vergaser.md inside chapter files
            html = html.replace(/href="([^"]+\.md)"/g, (match, link) => {
                // Find chapter mapping
                const basename = link.split('/').pop();
                const ch = chapters.find(c => c.file === basename);
                if (ch) {
                    return `href="#" onclick="loadChapter('${ch.id}'); return false;"`;
                }
                if (basename === "README.md") {
                    return `href="#" onclick="loadPortal(); return false;"`;
                }
                return match;
            });
            
            // Translate absolute search links or links we don't catch inside tables
            html = html.replace(/href="\.\.\/README\.md"/g, `href="#" onclick="loadPortal(); return false;"`);
            html = html.replace(/href="chapter_(\d+)[^"]*"/g, (match, id) => {
                return `href="#" onclick="loadChapter('${id}'); return false;"`;
            });

            // Format markdown code block container for mermaid
            html = html.replace(/<pre><code class="language-mermaid">([\s\S]+?)<\/code><\/pre>/g, (match, code) => {
                // Decode HTML entities in code block
                const decodedCode = code.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
                return `<pre class="mermaid">${decodedCode}</pre>`;
            });
            
            // Render to container
            renderDiv.classList.remove('loaded');
            renderDiv.innerHTML = html;
            // Trigger reflow so animation re-runs on every load
            void renderDiv.offsetWidth;
            renderDiv.classList.add('loaded');
            
            // 5. Initialize/render Mermaid flowcharts
            if (window.mermaid) {
                try {
                    mermaid.run({
                        nodes: document.querySelectorAll('.mermaid')
                    });
                } catch(e) {
                    console.error("Mermaid rendering failed:", e);
                }
            }
            
            // Scroll to top of main view
            document.getElementById("main-content").scrollTop = 0;
        })
        .catch(err => {
            renderDiv.innerHTML = `<div class="error-panel Outfit">
                <i class="fa-solid fa-circle-exclamation crimson-text"></i>
                <h2>Fehler beim Laden der Akte</h2>
                <p>${err.message}</p>
            </div>`;
        })
        .finally(() => {
            if (loading) loading.style.display = "none";
            if (renderDiv) renderDiv.style.opacity = "1";
        });
}

/* ==========================================================================
   WIDGETS LOGIC (JAVASCRIPT IMPLEMENTATION OF FORMER PYTHON TOOLS)
   ========================================================================== */

// 1. Kurbeltriebschmerzen-Rechner (Drama Calculator)
function runDramaCalculator(event) {
    event.preventDefault();
    
    const pain = document.getElementById("drama-pain").value;
    const model = document.getElementById("drama-model").value;
    const level = document.getElementById("drama-level").value;
    
    const resultDiv = document.getElementById("drama-result");
    resultDiv.style.display = "block";
    
    let diagnosis = "";
    let productKey = "";
    
    // Determine the drama and recommendation based on inputs
    if (pain === "rasseln") {
        diagnosis = `„Hörst du es nicht? Das Rasseln der Ringe... Wie Knochen im eisigen Herbstwind rütteln sie an den Wänden deines ${model.toUpperCase()}. Es ist die Tragödie des Standard-Graugusses! Ein stummes Aufbäumen vor dem unaufhaltsamen Zylindertod. Weiche nicht zurück! Die Erlösung liegt im Aluminium-Zylinder von Schmitt. Leicht, frei, wärmeableitend – getauft in der Glut der Performance.“`;
        productKey = "zylinder";
    } else if (pain === "rutschen") {
        diagnosis = `„Deine Hand zieht den Hebel, doch die Leistung... sie verpufft im Nichts der rutschenden Lamellen. Die Tränen des Standard-Kupplungskits versickern im Getriebeöl deines ${model.toUpperCase()}. Das Drehmoment flieht wie ein Dieb in der Nacht. Schließe den eisernen Pakt mit dem Asphalt! Das Schmitt 5-Lamellen Kupplungskit packt zu, starr und unbeugsam, bis ans Ende aller Tage.“`;
        productKey = "kupplung";
    } else if (pain === "gasannahme") {
        diagnosis = `„Ein plötzliches Reißen am Gasgriff – und Stille. Ein tiefes Loch im Drehmomentband, ein qualvolles Verschlucken, wo ein Schrei der Freiheit sein sollte. Dein Vergaser keucht. Schenke ihm die Flut der Perfektion. Der Schmitt 19mm Tuning-Vergaser vernebelt den Kraftstoff zu einem Orkan der Verbrennung.“`;
        productKey = "vergaser";
    } else if (pain === "falschluft") {
        diagnosis = `„Die Angst kriecht in deinen Verstand... Falschluft! Das heimtückische Gift, das deinen Zylinder unbemerkt in den Hitzetod treibt. Der unruhige Leerlauf, das zögerliche Abtouren. Dichte das Leck ab, bevor es zu spät ist! Montiere das Schmitt Ansauggummi und feste Stehbolzen – eiserne Barrieren gegen den Verfall.“`;
        productKey = "vergaser";
    } else if (pain === "licht") {
        diagnosis = `„Die Dämmerung bricht herein, doch dein Scheinwerfer... ein mattes Glimmen, schwächer als ein Sterbefünkchen. Du fährst im Schatten des Todes. Weiche der Finsternis aus! Das Schmitt Zündungsanlage bringt dir 100 Watt pure Lichtgewalt. Sie erleuchtet deinen Pfad und zündet das Gemisch mit dem Funken des Schöpfers.“`;
        productKey = "zuendung";
    } else if (pain === "hitze") {
        diagnosis = `„Unter der sengenden Sommersonne kündigt sich das Grauen an: Hitzeklingeln! Die unerträgliche Hitze zwingt dein Setup in die Knie. Der Standard-Zylinderkopf speichert die Pein wie eine alte Schuld. Kühle das Triebwerk! Der Schmitt Performance Kopf leitet den Fieberwahn ab und bannt die Überhitzung.“`;
        productKey = "kopf";
    } else if (pain === "bremse") {
        diagnosis = `„Der Abgrund nähert sich, du greifst nach dem Anker – doch das Moped rollt weiter, ungebremst und haltlos. Die Trommelbremse wimmert nur. Nimm das Schicksal selbst in die Hand! Rüste um auf das Schmitt CNC Scheibenbremse-Set oder den geschlitzten Bremszug für eine eiserne Verzögerung.“`;
        productKey = "bremse";
    } else if (pain === "luft") {
        diagnosis = `„Dein Motor keucht wie ein Gefangener im Kerker... verstopfte Poren, mangelnder Sauerstoff im Ansaugstrom. Erflehe Beatmung! Das Schmitt Düsen- und Luftfilter-Zubehör entfesselt den Orkan im Ansaugweg und lässt den Zylinder frei durchatmen.“`;
        productKey = "luft";
    } else if (pain === "tuev") {
        diagnosis = `„Das ferne Blaulicht am Straßenrand lässt deinen Puls jagen... Die Angst vor dem Verlust der Fahrerlaubnis und der Willkür des Gerichts. Doch du kannst dem Schmerz entgehen! Bereite dich mit Schmitt CNC-Verstärkungsteilen wie der Scheibenbremsen-Radnabe auf eine ordentliche Einzelabnahme vor, damit das Gesetz auf deiner Seite steht.“`;
        productKey = "tuev";
    }
    
    const product = productDatabase[productKey];
    resultDiv.innerHTML = `
        <div class="result-heading"><i class="fa-solid fa-scroll"></i> Das Theatralische Urteil</div>
        <div class="result-text">${diagnosis}</div>
        <div class="result-product">
            <img src="${product.image}" alt="${product.name}">
            <div class="result-product-info">
                <h4>${product.name}</h4>
                <a href="${product.link}" target="_blank">Erlösung im Shop sichern 🛒</a>
            </div>
        </div>
    `;
}

// 2. Vergaser-Düsen-Orakel (Jetting Oracle)
function runJettingOracle(event) {
    event.preventDefault();
    
    const carb = parseFloat(document.getElementById("jetting-carb").value);
    const ccm = parseFloat(document.getElementById("jetting-ccm").value);
    const filter = document.getElementById("jetting-filter").value;
    
    const resultDiv = document.getElementById("jetting-result");
    resultDiv.style.display = "block";
    
    // Core calculation logic
    let baseJet = carb * 5.0; // standard BVF approximation: Size = dia * 5
    
    // Adjustments
    if (filter === "sport") {
        baseJet += 5;
    } else if (filter === "open") {
        baseJet += 12;
    } else {
        baseJet -= 2;
    }
    
    // Displacement scaling factor (approximate)
    const dispFactor = (ccm - 50) * 0.15;
    baseJet += dispFactor;
    
    // Round to nearest integer or half size (in Simson tuning, main jets are usually rounded)
    const recommendedJet = Math.round(baseJet);
    
    let adviceText = "";
    if (recommendedJet < 75) {
        adviceText = "Ein zahmes Glimmen. Der Rumpfmotor atmet ruhig, doch achte auf Falschluft am Vergaserflansch.";
    } else if (recommendedJet >= 75 && recommendedJet <= 95) {
        adviceText = "Der ideale Kraftstoffstrom! Das Gemisch brennt stolz und rein. Perfekt für das Schmitt Sportfreund 60ccm Setup.";
    } else {
        adviceText = "⚠️ ACHTUNG: Ein Orkan des Kraftstoffs! Dein Motor verlangt nach enormen Luftmassen. Nur fahrbar mit optimiertem Schmitt Sportluftfilter, sonst droht das Ertrinken des Kolbens im Gemisch-Fieberwahn!";
    }
    
    const product = productDatabase["luftfilter"]; // recommend nozzle kit
    
    resultDiv.innerHTML = `
        <div class="result-heading"><i class="fa-solid fa-calculator"></i> Berechnungsergebnis</div>
        <h3 class="Outfit" style="font-size: 20px; color:#ffffff; margin-bottom: 8px;">
            Empfohlene Hauptdüse: <span class="crimson-text" style="font-size: 26px;">Gr. ${recommendedJet}</span> (M5 Gewinde)
        </h3>
        <div class="result-text">${adviceText}</div>
        <div class="result-product">
            <img src="${product.image}" alt="${product.name}">
            <div class="result-product-info">
                <h4>${product.name}</h4>
                <a href="${product.link}" target="_blank">Düsenset bei Racing Planet kaufen 🛒</a>
            </div>
        </div>
    `;
}
