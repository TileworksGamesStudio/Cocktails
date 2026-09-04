/* ==========================================================================
   SPECS // Masterclass Engine
   Dynamic drinks.json Loader, Tag Filtering, Glassware SVGs & Multi-Tier Quizzing
   ========================================================================== */

// Embedded fallback database in case browser blocks local fetch (file:// CORS security)
const FALLBACK_DRINKS = [
    {
        id: "old-fashioned",
        name: "Old Fashioned",
        isSignature: false,
        tags: ["classic", "whiskey", "spirit-forward", "pre-prohibition"],
        category: "Pre-Prohibition",
        era: "Circa 1880s • Louisville, KY",
        glassware: "Rocks / Lowball",
        glassType: "rocks",
        method: "Stirred over Ice",
        ingredients: ["Bourbon or Rye Whiskey", "Demerara Syrup", "Angostura Bitters", "Orange Peel"],
        decoys: ["Sweet Vermouth", "Campari", "Lemon Juice", "Club Soda", "Maraschino Liqueur"],
        canonicalRecipe: [
            { item: "Bourbon or Rye Whiskey", amount: "2.0 oz (60 ml)" },
            { item: "Demerara Syrup (2:1)", amount: "0.25 oz (7.5 ml)" },
            { item: "Angostura Bitters", amount: "2–3 Dashes" },
            { item: "Orange Peel", amount: "Expressed over Top" }
        ],
        tastingNotes: ["Spirit-Forward", "Charred Oak", "Caramelized Sugar", "Warm Spice"],
        history: "Born when 19th-century patrons grew exhausted by elaborate bar novelties and ordered their whiskey prepared the 'old-fashioned way'.",
        proTip: "Express orange peel oils firmly over the rim. Never muddle fruit into the base liquid."
    },
    {
        id: "smoke-and-mirrors",
        name: "Smoke & Mirrors",
        isSignature: true,
        tags: ["signature", "house-cocktail", "agave", "spirit-forward", "smoky"],
        category: "House Signature",
        era: "Speakeasy Signature • House Creation",
        glassware: "Nick & Nora",
        glassType: "nick-nora",
        method: "Stirred over Block Ice",
        ingredients: ["Espadín Mezcal", "Amaro Nonino", "Ancho Reyes Chile Liqueur", "Grapefruit Twist"],
        decoys: ["Tequila Blanco", "Sweet Vermouth", "Lime Juice", "Agave Nectar", "Green Chartreuse"],
        canonicalRecipe: [
            { item: "Espadín Mezcal", amount: "1.5 oz (45 ml)" },
            { item: "Amaro Nonino Quintessentia", amount: "0.75 oz (22.5 ml)" },
            { item: "Ancho Reyes Chile Liqueur", amount: "0.5 oz (15 ml)" },
            { item: "Grapefruit Twist", amount: "Flamed over Glass" }
        ],
        tastingNotes: ["Campfire Smoke", "Caramelized Orange", "Gentle Capsaicin", "Alpine Botanicals"],
        history: "Developed as an autumn house signature to bridge earthy Oaxacan agave with northern Italian alpine bitterness.",
        proTip: "Flame the grapefruit twist to slightly caramelize the cold-pressed skin oils."
    },
    {
        id: "negroni",
        name: "Negroni",
        isSignature: false,
        tags: ["classic", "gin", "aperitivo", "spirit-forward"],
        category: "Classic Aperitivo",
        era: "Est. 1919 • Caffè Casoni, Florence",
        glassware: "Rocks / Lowball",
        glassType: "rocks",
        method: "Stirred over Ice",
        ingredients: ["London Dry Gin", "Campari", "Sweet Vermouth", "Orange Peel"],
        decoys: ["Dry Vermouth", "Aperol", "Club Soda", "Tequila Blanco", "Cointreau"],
        canonicalRecipe: [
            { item: "London Dry Gin", amount: "1.0 oz (30 ml)" },
            { item: "Campari", amount: "1.0 oz (30 ml)" },
            { item: "Sweet Vermouth", amount: "1.0 oz (30 ml)" },
            { item: "Orange Peel", amount: "Expressed over Top" }
        ],
        tastingNotes: ["Bittersweet", "Pungent Juniper", "Bitter Orange", "Herbal Gentian"],
        history: "Count Camillo Negroni famously requested bartender Forsco Scarselli fortify his Americano with London Dry gin.",
        proTip: "Always refrigerate vermouth after opening; oxidized fortified wine flattens botanical nuances."
    }
];

/* ==========================================================================
   GLASSWARE VECTOR SVG ARTIFACTS
   ========================================================================== */
const GLASS_SVGS = {
    "rocks": `
        <svg class="glass-svg" viewBox="0 0 48 48">
            <path d="M10 10 L14 40 L34 40 L38 10 Z" />
            <line x1="8" y1="10" x2="40" y2="10" />
            <path d="M15 36 L33 36" stroke-dasharray="2 2" />
        </svg>`,
    "coupe": `
        <svg class="glass-svg" viewBox="0 0 48 48">
            <path d="M8 12 Q24 28 40 12 Z" />
            <line x1="24" y1="23" x2="24" y2="39" />
            <line x1="16" y1="39" x2="32" y2="39" />
        </svg>`,
    "nick-nora": `
        <svg class="glass-svg" viewBox="0 0 48 48">
            <path d="M12 12 C12 24, 36 24, 36 12 Z" />
            <line x1="24" y1="21" x2="24" y2="39" />
            <line x1="17" y1="39" x2="31" y2="39" />
        </svg>`,
    "martini": `
        <svg class="glass-svg" viewBox="0 0 48 48">
            <path d="M9 12 L24 27 L39 12 Z" />
            <line x1="24" y1="27" x2="24" y2="40" />
            <line x1="16" y1="40" x2="32" y2="40" />
        </svg>`,
    "highball": `
        <svg class="glass-svg" viewBox="0 0 48 48">
            <path d="M14 8 L16 41 L32 41 L34 8 Z" />
            <line x1="12" y1="8" x2="36" y2="8" />
        </svg>`,
    "copper-mug": `
        <svg class="glass-svg" viewBox="0 0 48 48">
            <rect x="12" y="14" width="22" height="26" rx="3" />
            <path d="M34 18 C40 18, 40 32, 34 32" />
        </svg>`,
    "julep": `
        <svg class="glass-svg" viewBox="0 0 48 48">
            <path d="M12 12 L15 40 L33 40 L36 12 Z" />
            <line x1="10" y1="12" x2="38" y2="12" stroke-width="2.5" />
            <line x1="13" y1="40" x2="35" y2="40" stroke-width="2.5" />
        </svg>`,
    "flute": `
        <svg class="glass-svg" viewBox="0 0 48 48">
            <path d="M18 6 L18 26 Q24 31 30 26 L30 6 Z" />
            <line x1="24" y1="29" x2="24" y2="41" />
            <line x1="18" y1="41" x2="30" y2="41" />
        </svg>`,
    "tiki": `
        <svg class="glass-svg" viewBox="0 0 48 48">
            <rect x="14" y="9" width="20" height="31" rx="2" />
            <circle cx="20" cy="18" r="2" />
            <circle cx="28" cy="18" r="2" />
            <path d="M19 28 Q24 33 29 28" />
        </svg>`,
    "wine": `
        <svg class="glass-svg" viewBox="0 0 48 48">
            <path d="M14 10 C14 26, 34 26, 34 10 Z" />
            <line x1="24" y1="22" x2="24" y2="40" />
            <line x1="16" y1="40" x2="32" y2="40" />
        </svg>`
};

/* ==========================================================================
   APP STATE
   ========================================================================== */
let allMasterDrinks = [];
let filteredDrinks = [];
let activeFilter = "all";
let difficulty = "easy"; // "easy" | "medium" | "hard"
let currentIndex = 0;
let streak = 0;
let soundOn = true;
let mode = "quiz"; // "quiz" | "study"

// Quiz Round State
let missingIngredientsList = [];
let solvedIngredientsList = [];

/* ==========================================================================
   SYNTHESIZER AUDIO FX
   ========================================================================== */
let audioCtx = null;
function getCtx() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === "suspended") audioCtx.resume();
    return audioCtx;
}

const AudioSFX = {
    tap() {
        if (!soundOn) return;
        try {
            const ctx = getCtx();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.frequency.setValueAtTime(600, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(250, ctx.currentTime + 0.035);
            gain.gain.setValueAtTime(0.06, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.035);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.035);
        } catch(e) {}
    },
    successSlot() {
        if (!soundOn) return;
        try {
            const ctx = getCtx();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = "sine";
            osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
            osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.12); // A5
            gain.gain.setValueAtTime(0.08, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.12);
        } catch(e) {}
    },
    masterComplete() {
        if (!soundOn) return;
        try {
            const ctx = getCtx();
            [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = "triangle";
                osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.06);
                gain.gain.setValueAtTime(0.07, ctx.currentTime + i * 0.06);
                gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.06 + 0.35);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(ctx.currentTime + i * 0.06);
                osc.stop(ctx.currentTime + i * 0.06 + 0.35);
            });
        } catch(e) {}
    },
    error() {
        if (!soundOn) return;
        try {
            const ctx = getCtx();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = "sawtooth";
            osc.frequency.setValueAtTime(160, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(70, ctx.currentTime + 0.2);
            gain.gain.setValueAtTime(0.09, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.2);
        } catch(e) {}
    }
};

/* ==========================================================================
   DOM ELEMENTS
   ========================================================================== */
const el = {
    flipper: document.getElementById("card-flipper"),
    cardFront: document.getElementById("card-front"),
    cardBack: document.getElementById("card-back"),
    cardIndexIndicator: document.getElementById("card-index-indicator"),
    streakVal: document.getElementById("streak-val"),
    currentFilterDisplay: document.getElementById("current-filter-display"),
    diffToolbar: document.getElementById("diff-toolbar"),
    btnHint: document.getElementById("btn-hint"),

    // Front Card Details
    cardCategory: document.getElementById("card-category"),
    cardSigBadge: document.getElementById("card-sig-badge"),
    cardEra: document.getElementById("card-era"),
    cardTitle: document.getElementById("card-title"),
    cardGlass: document.getElementById("card-glass"),
    cardMethod: document.getElementById("card-method"),
    glassGraphicContainer: document.getElementById("glass-graphic-container"),
    recipeList: document.getElementById("recipe-list"),
    slotProgressText: document.getElementById("slot-progress-text"),

    // Back Card Details
    backTitle: document.getElementById("back-title"),
    backTasting: document.getElementById("back-tasting"),
    backCanonical: document.getElementById("back-canonical"),
    backProtip: document.getElementById("back-protip"),
    backHistory: document.getElementById("back-history"),

    // Quiz & Controls
    quizTray: document.getElementById("quiz-tray"),
    quizPrompt: document.getElementById("quiz-prompt"),
    choicesGrid: document.getElementById("choices-grid"),
    btnPrev: document.getElementById("btn-prev"),
    btnNext: document.getElementById("btn-next"),
    btnFlipFront: document.getElementById("btn-flip-front"),
    btnFlipBack: document.getElementById("btn-flip-back"),
    btnSound: document.getElementById("btn-sound"),
    soundIcon: document.getElementById("sound-icon"),
    btnModeQuiz: document.getElementById("btn-mode-quiz"),
    btnModeStudy: document.getElementById("btn-mode-study"),

    // Modals
    btnFilterToggle: document.getElementById("btn-filter-toggle"),
    filterModal: document.getElementById("filter-modal"),
    btnCloseFilter: document.getElementById("btn-close-filter"),
    btnApplyFilters: document.getElementById("btn-apply-filters"),
    btnSearchModal: document.getElementById("btn-search-modal"),
    searchModal: document.getElementById("search-modal"),
    btnCloseModal: document.getElementById("btn-close-modal"),
    modalDrinksList: document.getElementById("modal-drinks-list"),
    modalTotalCount: document.getElementById("modal-total-count")
};

/* ==========================================================================
   INITIALIZATION & DRINKS.JSON FETCH
   ========================================================================== */
async function loadDrinksDatabase() {
    try {
        const response = await fetch("drinks.json");
        if (!response.ok) throw new Error("Could not load drinks.json");
        allMasterDrinks = await response.json();
    } catch (err) {
        console.warn("Using embedded drinks fallback:", err);
        allMasterDrinks = FALLBACK_DRINKS;
    }
    applyFilter(activeFilter);
}

/* ==========================================================================
   TAG FILTERING ENGINE
   ========================================================================== */
function applyFilter(filterTag) {
    activeFilter = filterTag;

    if (activeFilter === "all") {
        filteredDrinks = [...allMasterDrinks];
        el.currentFilterDisplay.textContent = "ALL SPECIMENS";
    } else if (activeFilter === "classic") {
        // Excludes signature cocktails strictly
        filteredDrinks = allMasterDrinks.filter(d => !d.isSignature);
        el.currentFilterDisplay.textContent = "CLASSIC CANON";
    } else if (activeFilter === "signature") {
        filteredDrinks = allMasterDrinks.filter(d => d.isSignature);
        el.currentFilterDisplay.textContent = "HOUSE SIGNATURES";
    } else {
        // Filter by spirit or attribute tag
        filteredDrinks = allMasterDrinks.filter(d => d.tags && d.tags.includes(activeFilter));
        el.currentFilterDisplay.textContent = activeFilter.toUpperCase();
    }

    if (filteredDrinks.length === 0) {
        // Safety: reset to all if filter returns nothing
        filteredDrinks = [...allMasterDrinks];
        activeFilter = "all";
        el.currentFilterDisplay.textContent = "ALL SPECIMENS";
    }

    currentIndex = 0;
    renderCurrentDrink();
}

/* ==========================================================================
   CARD RENDERING
   ========================================================================== */
function renderCurrentDrink() {
    const drink = filteredDrinks[currentIndex];
    if (!drink) return;

    // Reset 3D Rotation
    el.flipper.classList.remove("flipped");

    // Header Indicators
    el.cardIndexIndicator.textContent = `${String(currentIndex + 1).padStart(2, "0")}/${String(filteredDrinks.length).padStart(2, "0")}`;
    el.streakVal.textContent = streak;

    // Signature Tagging vs Classic Tagging
    if (drink.isSignature) {
        el.cardCategory.textContent = "SIGNATURE";
        el.cardSigBadge.classList.remove("hidden");
    } else {
        el.cardCategory.textContent = drink.category.toUpperCase();
        el.cardSigBadge.classList.add("hidden");
    }

    el.cardEra.textContent = drink.era;
    el.cardTitle.textContent = drink.name;
    el.cardGlass.textContent = drink.glassware;
    el.cardMethod.textContent = drink.method;

    // Inject Vector Glassware Graphic
    const glassType = drink.glassType || "rocks";
    el.glassGraphicContainer.innerHTML = GLASS_SVGS[glassType] || GLASS_SVGS["rocks"];

    // Populate Dossier (Back)
    el.backTitle.textContent = drink.name;
    el.backHistory.textContent = drink.history;
    el.backProtip.textContent = drink.proTip;
    el.backTasting.innerHTML = drink.tastingNotes.map(t => `<span class="taste-chip">${t}</span>`).join("");
    el.backCanonical.innerHTML = drink.canonicalRecipe.map(row => `
        <div class="canon-row">
            <span>${row.item}</span>
            <strong>${row.amount}</strong>
        </div>
    `).join("");

    // Setup Mode
    if (mode === "study") {
        setupStudyMode(drink);
    } else {
        setupQuizRound(drink);
    }
}

/* ==========================================================================
   STUDY MODE
   ========================================================================== */
function setupStudyMode(drink) {
    el.quizTray.classList.add("hidden");
    el.diffToolbar.classList.add("hidden");
    el.slotProgressText.textContent = "STUDY SPECIFICATION";

    el.recipeList.innerHTML = drink.ingredients.map(ing => `
        <li class="recipe-item">
            <span>${ing}</span>
            <span style="color: var(--gold-primary); font-family: var(--font-mono);">CANONICAL</span>
        </li>
    `).join("");
}

/* ==========================================================================
   DYNAMIC QUIZ ENGINE (EASY, MEDIUM, HARD)
   ========================================================================== */
function setupQuizRound(drink) {
    el.quizTray.classList.remove("hidden");
    el.diffToolbar.classList.remove("hidden");
    solvedIngredientsList = [];

    const totalIngs = drink.ingredients.length;
    let missingCount = 1;

    if (difficulty === "easy") {
        missingCount = 1;
        el.quizPrompt.textContent = "Select the single missing ingredient:";
    } else if (difficulty === "medium") {
        missingCount = Math.min(3, Math.max(2, totalIngs - 1));
        el.quizPrompt.textContent = `Reconstruct recipe: tap missing elements:`;
    } else if (difficulty === "hard") {
        missingCount = totalIngs; // 100% blind recipe test!
        el.quizPrompt.textContent = `BLIND CHALLENGE: Build full recipe from backbar:`;
    }

    // Pick random indices to obscure
    const shuffledIndices = drink.ingredients.map((_, i) => i).sort(() => Math.random() - 0.5);
    const chosenHiddenIndices = new Set(shuffledIndices.slice(0, missingCount));

    missingIngredientsList = [];
    drink.ingredients.forEach((item, idx) => {
        if (chosenHiddenIndices.has(idx)) {
            missingIngredientsList.push(item);
        }
    });

    updateRecipeSlots();
    generateDynamicChoiceTray(drink);
}

function updateRecipeSlots() {
    const drink = filteredDrinks[currentIndex];
    el.slotProgressText.textContent = `${solvedIngredientsList.length} / ${missingIngredientsList.length + solvedIngredientsList.length} FOUND`;

    el.recipeList.innerHTML = drink.ingredients.map((item) => {
        const isCurrentlyMissing = missingIngredientsList.includes(item);
        const isSolved = solvedIngredientsList.includes(item);

        if (isCurrentlyMissing) {
            return `<li class="recipe-item target-hidden" data-ingredient="${item}">? [ HIDDEN INGREDIENT ]</li>`;
        } else if (isSolved) {
            return `<li class="recipe-item revealed"><span>✓ ${item}</span><span style="color: var(--green-correct);">SOLVED</span></li>`;
        } else {
            return `<li class="recipe-item"><span>${item}</span></li>`;
        }
    }).join("");
}

function generateDynamicChoiceTray(drink) {
    // Generate decoy count based on difficulty
    let decoyCount = 3;
    if (difficulty === "medium") decoyCount = 3;
    if (difficulty === "hard") decoyCount = 4;

    const availableDecoys = [...drink.decoys].sort(() => Math.random() - 0.5).slice(0, decoyCount);
    
    // Combine all missing items with decoys and randomize
    const pool = [...missingIngredientsList, ...availableDecoys].sort(() => Math.random() - 0.5);

    el.choicesGrid.innerHTML = "";
    pool.forEach(optionText => {
        const btn = document.createElement("button");
        btn.className = "choice-btn";
        btn.textContent = optionText;
        btn.addEventListener("click", () => handleOptionTap(optionText, btn));
        el.choicesGrid.appendChild(btn);
    });
}

function handleOptionTap(selectedText, buttonEl) {
    if (missingIngredientsList.includes(selectedText)) {
        // CORRECT GUESS
        AudioSFX.successSlot();
        buttonEl.classList.add("correct-used");

        // Move item from missing to solved
        missingIngredientsList = missingIngredientsList.filter(item => item !== selectedText);
        solvedIngredientsList.push(selectedText);

        updateRecipeSlots();

        // Check if round complete
        if (missingIngredientsList.length === 0) {
            streak++;
            el.streakVal.textContent = streak;
            AudioSFX.masterComplete();

            // Short delight delay before flipping to back
            setTimeout(() => {
                el.flipper.classList.add("flipped");
            }, 700);
        }
    } else {
        // INCORRECT GUESS
        streak = 0;
        el.streakVal.textContent = "0";
        AudioSFX.error();

        buttonEl.classList.add("wrong-pulse");
        setTimeout(() => buttonEl.classList.remove("wrong-pulse"), 450);
    }
}

/* ==========================================================================
   EVENT HANDLERS & NAVIGATION
   ========================================================================== */
function bindEvents() {
    // Deck Navigation
    el.btnNext.addEventListener("click", () => {
        AudioSFX.tap();
        currentIndex = (currentIndex + 1) % filteredDrinks.length;
        renderCurrentDrink();
    });

    el.btnPrev.addEventListener("click", () => {
        AudioSFX.tap();
        currentIndex = (currentIndex - 1 + filteredDrinks.length) % filteredDrinks.length;
        renderCurrentDrink();
    });

    // 3D Flip
    el.btnFlipFront.addEventListener("click", () => {
        AudioSFX.tap();
        el.flipper.classList.toggle("flipped");
    });
    el.btnFlipBack.addEventListener("click", () => {
        AudioSFX.tap();
        el.flipper.classList.remove("flipped");
    });

    // Sound
    el.btnSound.addEventListener("click", () => {
        soundOn = !soundOn;
        el.soundIcon.textContent = soundOn ? "🔊" : "🔇";
        if (soundOn) AudioSFX.tap();
    });

    // Mode Toggle (Quiz / Study)
    el.btnModeQuiz.addEventListener("click", () => {
        if (mode === "quiz") return;
        mode = "quiz";
        el.btnModeQuiz.classList.add("active");
        el.btnModeStudy.classList.remove("active");
        AudioSFX.tap();
        renderCurrentDrink();
    });

    el.btnModeStudy.addEventListener("click", () => {
        if (mode === "study") return;
        mode = "study";
        el.btnModeStudy.classList.add("active");
        el.btnModeQuiz.classList.remove("active");
        AudioSFX.tap();
        renderCurrentDrink();
    });

    // Difficulty Selector
    document.querySelectorAll(".diff-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".diff-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            difficulty = btn.dataset.diff;
            AudioSFX.tap();
            renderCurrentDrink();
        });
    });

    // Pedagogical Hint Button
    el.btnHint.addEventListener("click", () => {
        if (missingIngredientsList.length === 0) return;
        AudioSFX.tap();
        const hintTarget = missingIngredientsList[0];
        const firstLetter = hintTarget.charAt(0);
        el.quizPrompt.textContent = `💡 HINT: Starts with "${firstLetter}..." (${hintTarget.length} letters)`;
    });

    // Filter Modal Open & Close
    el.btnFilterToggle.addEventListener("click", () => {
        AudioSFX.tap();
        el.filterModal.classList.add("open");
    });

    el.btnCloseFilter.addEventListener("click", () => {
        el.filterModal.classList.remove("open");
    });

    el.btnApplyFilters.addEventListener("click", () => {
        AudioSFX.tap();
        el.filterModal.classList.remove("open");
    });

    // Filter Chip Taps
    document.querySelectorAll(".tag-chip").forEach(chip => {
        chip.addEventListener("click", () => {
            document.querySelectorAll(".tag-chip").forEach(c => c.classList.remove("active"));
            chip.classList.add("active");
            AudioSFX.tap();
            applyFilter(chip.dataset.filter);
        });
    });

    // All Specimens Quick Jump Modal
    el.btnSearchModal.addEventListener("click", () => {
        AudioSFX.tap();
        renderSpecimensList();
        el.searchModal.classList.add("open");
    });

    el.btnCloseModal.addEventListener("click", () => {
        el.searchModal.classList.remove("open");
    });

    // Touch Swipe Gestures
    let startX = 0;
    let startY = 0;
    el.flipper.addEventListener("touchstart", (e) => {
        startX = e.changedTouches[0].clientX;
        startY = e.changedTouches[0].clientY;
    }, { passive: true });

    el.flipper.addEventListener("touchend", (e) => {
        const diffX = e.changedTouches[0].clientX - startX;
        const diffY = e.changedTouches[0].clientY - startY;
        if (Math.abs(diffX) > 60 && Math.abs(diffY) < 45) {
            if (diffX < 0) el.btnNext.click();
            else el.btnPrev.click();
        }
    }, { passive: true });
}

function renderSpecimensList() {
    el.modalTotalCount.textContent = filteredDrinks.length;
    el.modalDrinksList.innerHTML = filteredDrinks.map((d, idx) => `
        <button class="modal-item-btn ${idx === currentIndex ? 'current' : ''}" data-index="${idx}">
            <div>
                <strong>${d.name}</strong>
                ${d.isSignature ? '<span style="color:#ef4444; font-size:0.7rem; margin-left:4px;">✦ HOUSE</span>' : ''}
            </div>
            <span style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--gold-primary);">
                ${d.glassware}
            </span>
        </button>
    `).join("");

    el.modalDrinksList.querySelectorAll(".modal-item-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            currentIndex = parseInt(btn.dataset.index, 10);
            renderCurrentDrink();
            el.searchModal.classList.remove("open");
        });
    });
}

/* ==========================================================================
   LAUNCH APPLICATION
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
    bindEvents();
    loadDrinksDatabase();
});