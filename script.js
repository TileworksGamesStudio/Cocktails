/* ==========================================================================
   SPECS // Mobile Speakeasy Masterclass Engine
   Optimized for High-Precision Touch & Responsive Mobile Bartender Flow
   ========================================================================== */

let cocktailsDB = [];
let filteredCocktails = [];
let currentDrinkIndex = 0;

// Bench Selection State
let selectedGlass = null;
let selectedMethod = null;
let selectedIce = null;
let activeBuild = [];

// Speed Rail Settings
let selectedMeasure = { oz: 1.0, ml: 30 };
let currentUnit = "oz";
let audioEnabled = true;

// Session Tracking
let streakCount = 0;
let totalServes = 0;
let correctServes = 0;

/* --- DOM Reference Cache --- */
const elements = {
    // Navigation / Header
    drinkTrackerVal: document.getElementById("drink-tracker-val"),
    statAccuracy: document.getElementById("stat-accuracy"),
    statStreak: document.getElementById("stat-streak"),
    prevDrinkBtn: document.getElementById("prev-drink-btn"),
    nextDrinkBtn: document.getElementById("next-drink-btn"),
    unitToggleBtn: document.getElementById("unit-toggle-btn"),
    unitOz: document.getElementById("unit-oz"),
    unitMl: document.getElementById("unit-ml"),
    soundBtn: document.getElementById("sound-btn"),
    soundOnIcon: document.getElementById("sound-icon-on"),
    soundOffIcon: document.getElementById("sound-icon-off"),
    catPills: document.getElementById("category-pills"),

    // Tab Navigation
    tabBtns: document.querySelectorAll(".mobile-view-tabs .tab-btn"),
    panels: document.querySelectorAll(".panel-view"),

    // Panel 1: Workbench
    badgeCategory: document.getElementById("badge-drink-category"),
    badgeOrigin: document.getElementById("badge-drink-origin"),
    labelDrinkName: document.getElementById("label-drink-name"),
    glassSelectorGroup: document.getElementById("glass-selector-group"),
    methodSelectorGroup: document.getElementById("method-selector-group"),
    iceSelectorGroup: document.getElementById("ice-selector-group"),
    jiggerTray: document.getElementById("jigger-tray"),
    clearTrayBtn: document.getElementById("clear-tray-btn"),
    submitSpecBtn: document.getElementById("submit-spec-btn"),
    evaluationBanner: document.getElementById("evaluation-banner"),

    // Panel 2: Visual Model / Real Photo
    showSvgBtn: document.getElementById("show-svg-btn"),
    showPhotoBtn: document.getElementById("show-photo-btn"),
    svgStage: document.getElementById("svg-stage"),
    photoStage: document.getElementById("photo-stage"),
    drinkRealPhoto: document.getElementById("drink-real-photo"),
    photoCaptionTitle: document.getElementById("photo-caption-title"),
    liquidFill: document.getElementById("liquid-fill"),
    gradStopBottom: document.getElementById("grad-stop-bottom"),
    gradStopTop: document.getElementById("grad-stop-top"),
    glassInteriorShape: document.getElementById("glass-interior-shape"),
    glassContour: document.getElementById("glass-contour"),
    glassStem: document.getElementById("glass-stem"),
    glassBase: document.getElementById("glass-base"),
    liquidBubbles: document.getElementById("liquid-bubbles"),
    iceRock: document.getElementById("ice-rock"),
    iceCubes: document.getElementById("ice-cubes"),
    foamHead: document.getElementById("foam-head"),
    garnishGroup: document.getElementById("garnish-group"),
    garnishOrange: document.getElementById("garnish-orange"),
    garnishLime: document.getElementById("garnish-lime"),
    garnishBeans: document.getElementById("garnish-beans"),
    volumeIndicator: document.getElementById("volume-indicator"),
    washlineIndicator: document.getElementById("washline-indicator"),
    captionGlassware: document.getElementById("caption-glassware"),

    // Panel 3: Lore & Specifications
    loreTitle: document.getElementById("lore-title"),
    loreOrigin: document.getElementById("lore-origin"),
    canonicalSpecsDeck: document.getElementById("canonical-specs-deck"),
    loreHistory: document.getElementById("lore-history"),
    flavorTagsGroup: document.getElementById("flavor-tags-group"),
    loreScience: document.getElementById("lore-science"),
    loreProtip: document.getElementById("lore-protip"),

    // Speed Rail
    measureSelector: document.getElementById("measure-selector"),
    speedRailIngredients: document.getElementById("speed-rail-ingredients"),
    touchContainer: document.getElementById("touch-container")
};

/* ==========================================================================
   Web Audio API Synthesis
   ========================================================================== */
let audioCtx = null;
function getAudioCtx() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === "suspended") audioCtx.resume();
    return audioCtx;
}

const AudioFX = {
    clink() {
        if (!audioEnabled) return;
        try {
            const ctx = getAudioCtx();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.frequency.setValueAtTime(1200, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(700, ctx.currentTime + 0.08);
            gain.gain.setValueAtTime(0.1, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.08);
        } catch (e) {}
    },
    pour() {
        if (!audioEnabled) return;
        try {
            const ctx = getAudioCtx();
            const bufferSize = ctx.sampleRate * 0.15;
            const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
            const data = buffer.getChannelData(0);
            for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
            const noise = ctx.createBufferSource();
            noise.buffer = buffer;
            const filter = ctx.createBiquadFilter();
            filter.type = "bandpass";
            filter.frequency.setValueAtTime(800, ctx.currentTime);
            filter.frequency.exponentialRampToValueAtTime(1100, ctx.currentTime + 0.15);
            const gain = ctx.createGain();
            gain.gain.setValueAtTime(0.12, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
            noise.connect(filter);
            filter.connect(gain);
            gain.connect(ctx.destination);
            noise.start();
        } catch (e) {}
    },
    success() {
        if (!audioEnabled) return;
        try {
            const ctx = getAudioCtx();
            [523.25, 659.25, 783.99, 1046.50].forEach((freq, idx) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = "sine";
                osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.07);
                gain.gain.setValueAtTime(0.01, ctx.currentTime + idx * 0.07);
                gain.gain.linearRampToValueAtTime(0.15, ctx.currentTime + idx * 0.07 + 0.03);
                gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.07 + 0.35);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(ctx.currentTime + idx * 0.07);
                osc.stop(ctx.currentTime + idx * 0.07 + 0.35);
            });
        } catch (e) {}
    },
    error() {
        if (!audioEnabled) return;
        try {
            const ctx = getAudioCtx();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = "sawtooth";
            osc.frequency.setValueAtTime(150, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(85, ctx.currentTime + 0.22);
            gain.gain.setValueAtTime(0.12, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.22);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.22);
        } catch (e) {}
    }
};

/* ==========================================================================
   SVG Glassware Vector Geometry Table
   ========================================================================== */
const GLASS_GEOMETRY = {
    "rocks": {
        caption: "Double Rocks Glass (10 oz)",
        interior: "M80 110 L85 270 Q150 280 215 270 L220 110 Z",
        contour: "M78 105 L84 274 Q150 286 216 274 L222 105 Z",
        stem: "",
        base: "",
        emptyY: 275,
        fullY: 130
    },
    "coupe": {
        caption: "Cocktail Coupe (5.5 oz)",
        interior: "M70 110 Q150 240 230 110 Q150 140 70 110 Z",
        contour: "M66 108 Q150 245 234 108 Q150 136 66 108 Z",
        stem: "M150 220 L150 310",
        base: "M110 310 Q150 305 190 310 Z",
        emptyY: 225,
        fullY: 120
    },
    "highball": {
        caption: "Collins / Highball Glass (12 oz)",
        interior: "M100 80 L102 290 Q150 295 198 290 L200 80 Z",
        contour: "M97 78 L99 294 Q150 300 201 294 L203 78 Z",
        stem: "",
        base: "",
        emptyY: 290,
        fullY: 95
    },
    "nick-nora": {
        caption: "Nick & Nora Glass (5 oz)",
        interior: "M90 120 C90 230, 210 230, 210 120 Z",
        contour: "M87 118 C87 235, 213 235, 213 118 Z",
        stem: "M150 200 L150 310",
        base: "M115 310 Q150 306 185 310 Z",
        emptyY: 215,
        fullY: 135
    }
};

/* ==========================================================================
   Data Fetching & Boot Initialization
   ========================================================================== */
async function initializeApp() {
    try {
        const response = await fetch("cocktails.json");
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        cocktailsDB = await response.json();
        filteredCocktails = [...cocktailsDB];
        loadCocktail(0);
        setupEventListeners();
    } catch (err) {
        console.error("Failed loading cocktails.json:", err);
        elements.evaluationBanner.classList.remove("hidden");
        elements.evaluationBanner.classList.add("error");
        elements.evaluationBanner.textContent = "Unable to load cocktail data archive. Please ensure cocktails.json is served via local HTTP server.";
    }
}

/* ==========================================================================
   Cocktail Presentation & Render Engine
   ========================================================================== */
function loadCocktail(index) {
    if (filteredCocktails.length === 0) return;
    currentDrinkIndex = index;
    const drink = filteredCocktails[currentDrinkIndex];

    // Update Status Counters
    elements.drinkTrackerVal.textContent = `${currentDrinkIndex + 1} / ${filteredCocktails.length}`;

    // Update Headings
    elements.badgeCategory.textContent = drink.category.toUpperCase();
    elements.badgeOrigin.textContent = drink.origin;
    elements.labelDrinkName.textContent = drink.name;

    // Reset Workbench Selections
    selectedGlass = null;
    selectedMethod = null;
    selectedIce = null;
    activeBuild = [];

    document.querySelectorAll(".touch-pill").forEach(p => p.classList.remove("selected"));
    elements.evaluationBanner.className = "eval-banner hidden";
    elements.evaluationBanner.textContent = "";

    // Sync Photo and Real Image (Asset pipeline)
    elements.drinkRealPhoto.src = drink.image;
    elements.drinkRealPhoto.onerror = () => {
        // High-contrast fallback placeholder if local image asset is missing
        elements.drinkRealPhoto.src = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22400%22%20height%3D%22500%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%231a1410%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20fill%3D%22%23ea580c%22%20font-family%3D%22sans-serif%22%20font-size%3D%2216%22%20text-anchor%3D%22middle%22%3EPhoto%20Pending%20In%20Assets%3C%2Ftext%3E%3C%2Fsvg%3E";
    };
    elements.photoCaptionTitle.textContent = drink.name;

    // Update Visuals & Lore
    updateGlassGraphic("rocks");
    updateLiquidPhysics();
    renderJiggerTray();
    renderSpeedRailDeck(drink);
    renderLoreSection(drink);
}

function renderSpeedRailDeck(drink) {
    elements.speedRailIngredients.innerHTML = "";
    
    // Combine authentic specs with random decoys
    const railItems = [
        ...drink.ingredients.map(i => ({ ...i, isTarget: true })),
        ...drink.decoys.map(d => ({ ...d, measureOz: 1.0, measureMl: 30, isTarget: false }))
    ].sort(() => Math.random() - 0.5);

    railItems.forEach(item => {
        const card = document.createElement("button");
        card.className = "rail-card";
        card.innerHTML = `
            <span class="rail-card-type">${item.type || "Ingredient"}</span>
            <span class="rail-card-name">${item.name}</span>
        `;
        card.addEventListener("click", () => pourIngredient(item));
        elements.speedRailIngredients.appendChild(card);
    });
}

function renderLoreSection(drink) {
    elements.loreTitle.textContent = drink.name;
    elements.loreOrigin.textContent = drink.origin;
    elements.loreHistory.textContent = drink.lore.history;
    elements.loreScience.textContent = drink.lore.science;
    elements.loreProtip.textContent = drink.lore.proTip;

    // Render Canonical Specs List
    elements.canonicalSpecsDeck.innerHTML = "";
    drink.ingredients.forEach(spec => {
        const row = document.createElement("div");
        row.className = "canonical-spec-row";
        const measure = spec.measureOz === "dash" ? "2 Dashes" : (currentUnit === "oz" ? `${spec.measureOz} oz` : `${spec.measureMl} ml`);
        row.innerHTML = `
            <span>${spec.name}</span>
            <strong>${measure}</strong>
        `;
        elements.canonicalSpecsDeck.appendChild(row);
    });

    // Render Flavor Tags
    elements.flavorTagsGroup.innerHTML = "";
    drink.lore.flavorTags.forEach(tag => {
        const chip = document.createElement("span");
        chip.className = "flavor-chip";
        chip.textContent = tag;
        elements.flavorTagsGroup.appendChild(chip);
    });
}

/* ==========================================================================
   Graphic Model & Liquid Calculations
   ========================================================================== */
function updateGlassGraphic(glassKey) {
    const geo = GLASS_GEOMETRY[glassKey] || GLASS_GEOMETRY["rocks"];
    elements.glassInteriorShape.setAttribute("d", geo.interior);
    elements.glassContour.setAttribute("d", geo.contour);

    if (geo.stem) {
        elements.glassStem.classList.remove("hidden");
        elements.glassStem.setAttribute("d", geo.stem);
        elements.glassBase.classList.remove("hidden");
        elements.glassBase.setAttribute("d", geo.base);
    } else {
        elements.glassStem.classList.add("hidden");
        elements.glassBase.classList.add("hidden");
    }

    elements.captionGlassware.textContent = geo.caption;
    updateLiquidPhysics();
}

function updateLiquidPhysics() {
    const drink = filteredCocktails[currentDrinkIndex];
    const geo = GLASS_GEOMETRY[selectedGlass || "rocks"];

    let totalVolumeOz = 0;
    activeBuild.forEach(p => {
        totalVolumeOz += (typeof p.measureOz === "number") ? p.measureOz : 0.1;
    });

    const targetMax = drink.totalTargetVolumeOz || 3.0;
    const ratio = Math.min(totalVolumeOz / targetMax, 1.05);

    const emptyY = geo.emptyY;
    const fullY = geo.fullY;
    const targetY = emptyY - (emptyY - fullY) * ratio;

    elements.liquidFill.setAttribute("y", targetY);
    elements.liquidFill.setAttribute("height", 360 - targetY);

    elements.gradStopBottom.setAttribute("stop-color", drink.liquidColorBottom);
    elements.gradStopTop.setAttribute("stop-color", drink.liquidColorTop);

    elements.liquidBubbles.style.opacity = (drink.isCarbonated && ratio > 0.3) ? "0.6" : "0";
    elements.foamHead.style.opacity = (drink.hasFoam && ratio > 0.6) ? "0.85" : "0";

    const displayVol = currentUnit === "oz"
        ? `${totalVolumeOz.toFixed(2)} oz`
        : `${(totalVolumeOz * 29.57).toFixed(0)} ml`;

    elements.volumeIndicator.textContent = totalVolumeOz === 0 ? "0.0 oz" : displayVol;

    if (ratio === 0) elements.washlineIndicator.textContent = "Empty Glass";
    else if (ratio < 0.65) elements.washlineIndicator.textContent = "Underfilled";
    else if (ratio <= 1.0) elements.washlineIndicator.textContent = "Ideal Washline";
    else elements.washlineIndicator.textContent = "Overfilled";
}

function updateIceGraphic() {
    elements.iceRock.classList.add("hidden");
    elements.iceCubes.classList.add("hidden");

    if (selectedIce === "large-rock") {
        elements.iceRock.classList.remove("hidden");
    } else if (selectedIce === "cubed" || selectedIce === "crushed") {
        elements.iceCubes.classList.remove("hidden");
    }
}

function updateGarnishVisual(show = false) {
    if (!show) {
        elements.garnishGroup.setAttribute("opacity", "0");
        return;
    }
    const drink = filteredCocktails[currentDrinkIndex];
    elements.garnishOrange.classList.add("hidden");
    elements.garnishLime.classList.add("hidden");
    elements.garnishBeans.classList.add("hidden");

    if (drink.garnish === "orange-peel") elements.garnishOrange.classList.remove("hidden");
    else if (drink.garnish === "lime-wheel") elements.garnishLime.classList.remove("hidden");
    else if (drink.garnish === "coffee-beans") elements.garnishBeans.classList.remove("hidden");

    elements.garnishGroup.setAttribute("opacity", "1");
}

/* ==========================================================================
   Pouring Logic & Jigger Tray
   ========================================================================== */
function pourIngredient(item) {
    AudioFX.pour();
    activeBuild.push({
        name: item.name,
        measureOz: selectedMeasure.oz,
        measureMl: selectedMeasure.ml,
        type: item.type
    });
    renderJiggerTray();
    updateLiquidPhysics();
}

function removePouredItem(index) {
    AudioFX.clink();
    activeBuild.splice(index, 1);
    renderJiggerTray();
    updateLiquidPhysics();
}

function renderJiggerTray() {
    elements.jiggerTray.innerHTML = "";
    if (activeBuild.length === 0) {
        elements.jiggerTray.innerHTML = `<div class="empty-jigger-state">Tap ingredients on the Speed Rail below...</div>`;
        return;
    }

    activeBuild.forEach((item, idx) => {
        const pill = document.createElement("div");
        pill.className = "jigger-pill";
        const volText = item.measureOz === "dash" ? "2 Dashes" : (currentUnit === "oz" ? `${item.measureOz} oz` : `${item.measureMl} ml`);
        pill.innerHTML = `
            <span class="vol-tag">${volText}</span>
            <span>${item.name}</span>
            <span class="del-btn" aria-label="Remove">✕</span>
        `;
        pill.addEventListener("click", () => removePouredItem(idx));
        elements.jiggerTray.appendChild(pill);
    });
}

/* ==========================================================================
   Spec Verification Engine
   ========================================================================== */
function evaluateCocktailSpec() {
    const drink = filteredCocktails[currentDrinkIndex];
    totalServes++;
    const errors = [];

    // Glassware Check
    if (!selectedGlass) errors.push("Select appropriate Glassware.");
    else if (selectedGlass !== drink.glassware) errors.push(`Incorrect Glass: This requires a ${drink.glassware.toUpperCase()}.`);

    // Method Check
    if (!selectedMethod) errors.push("Specify preparation Method.");
    else if (selectedMethod !== drink.method) errors.push(`Incorrect Method: Recipe requires ${drink.method.toUpperCase()}.`);

    // Ice Check
    if (!selectedIce) errors.push("Choose an Ice spec.");
    else if (selectedIce !== drink.ice) errors.push(`Incorrect Ice: Spec requires ${drink.ice.replace("-", " ").toUpperCase()}.`);

    // Proportions Check
    if (activeBuild.length === 0) {
        errors.push("Glass is empty! Add spirits from the speed rail.");
    } else {
        drink.ingredients.forEach(target => {
            const found = activeBuild.find(b => b.name === target.name);
            if (!found) {
                errors.push(`Missing: ${target.name}`);
            } else if (target.measureOz !== "dash" && Math.abs(found.measureOz - target.measureOz) > 0.05) {
                errors.push(`Measurement off on ${target.name} (Target: ${target.measureOz} oz).`);
            }
        });

        activeBuild.forEach(p => {
            const isExpected = drink.ingredients.some(t => t.name === p.name);
            if (!isExpected) errors.push(`Decoy/Extraneous: ${p.name} does not belong in this build.`);
        });
    }

    elements.evaluationBanner.classList.remove("hidden", "success", "error");

    if (errors.length === 0) {
        correctServes++;
        streakCount++;
        AudioFX.success();
        updateGarnishVisual(true);
        elements.evaluationBanner.classList.add("success");
        elements.evaluationBanner.innerHTML = "<strong>✦ FLAWLESS SPECIFICATION!</strong> Glassware, dilution method, and proportions are spot-on.";
    } else {
        streakCount = 0;
        AudioFX.error();
        updateGarnishVisual(false);
        elements.evaluationBanner.classList.add("error");
        elements.evaluationBanner.innerHTML = `
            <strong>✕ ADJUST SERVICE:</strong>
            <ul>${errors.map(err => `<li>${err}</li>`).join("")}</ul>
        `;
    }

    // Refresh Live Statistics
    elements.statStreak.textContent = `${streakCount} 🔥`;
    const rate = Math.round((correctServes / totalServes) * 100);
    elements.statAccuracy.textContent = `${rate}%`;
}

/* ==========================================================================
   Touch Gesture & Event Listeners
   ========================================================================== */
function setupEventListeners() {
    // Glass Choice
    elements.glassSelectorGroup.addEventListener("click", e => {
        const btn = e.target.closest(".touch-pill");
        if (!btn) return;
        AudioFX.clink();
        elements.glassSelectorGroup.querySelectorAll(".touch-pill").forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
        selectedGlass = btn.dataset.choice;
        updateGlassGraphic(selectedGlass);
    });

    // Method Choice
    elements.methodSelectorGroup.addEventListener("click", e => {
        const btn = e.target.closest(".touch-pill");
        if (!btn) return;
        AudioFX.clink();
        elements.methodSelectorGroup.querySelectorAll(".touch-pill").forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
        selectedMethod = btn.dataset.choice;
    });

    // Ice Choice
    elements.iceSelectorGroup.addEventListener("click", e => {
        const btn = e.target.closest(".touch-pill");
        if (!btn) return;
        AudioFX.clink();
        elements.iceSelectorGroup.querySelectorAll(".touch-pill").forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
        selectedIce = btn.dataset.choice;
        updateIceGraphic();
    });

    // Clear Tray
    elements.clearTrayBtn.addEventListener("click", () => {
        AudioFX.clink();
        activeBuild = [];
        renderJiggerTray();
        updateLiquidPhysics();
        updateGarnishVisual(false);
    });

    // Submit Spec
    elements.submitSpecBtn.addEventListener("click", evaluateCocktailSpec);

    // Measure Jigger Slider
    elements.measureSelector.addEventListener("click", e => {
        const pill = e.target.closest(".measure-pill");
        if (!pill) return;
        AudioFX.clink();
        elements.measureSelector.querySelectorAll(".measure-pill").forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        const oz = pill.dataset.oz;
        const ml = pill.dataset.ml;
        selectedMeasure = {
            oz: oz === "dash" ? "dash" : parseFloat(oz),
            ml: ml === "dash" ? "dash" : parseFloat(ml)
        };
    });

    // Tab Bar Switching
    elements.tabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            AudioFX.clink();
            elements.tabBtns.forEach(b => b.classList.remove("active"));
            elements.panels.forEach(p => p.classList.remove("active"));
            btn.classList.add("active");
            document.getElementById(btn.dataset.target).classList.add("active");
        });
    });

    // Sub-view Toggle: SVG Physics vs House Photo
    elements.showSvgBtn.addEventListener("click", () => {
        elements.showSvgBtn.classList.add("active");
        elements.showPhotoBtn.classList.remove("active");
        elements.svgStage.classList.remove("hidden");
        elements.photoStage.classList.add("hidden");
    });
    elements.showPhotoBtn.addEventListener("click", () => {
        elements.showPhotoBtn.classList.add("active");
        elements.showSvgBtn.classList.remove("active");
        elements.photoStage.classList.remove("hidden");
        elements.svgStage.classList.add("hidden");
    });

    // Category Filtering
    elements.catPills.addEventListener("click", e => {
        const chip = e.target.closest(".cat-chip");
        if (!chip) return;
        AudioFX.clink();
        elements.catPills.querySelectorAll(".cat-chip").forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        const category = chip.dataset.category;
        filteredCocktails = (category === "all") ? [...cocktailsDB] : cocktailsDB.filter(c => c.category === category);
        currentDrinkIndex = 0;
        loadCocktail(currentDrinkIndex);
    });

    // Navigation Controls
    elements.prevDrinkBtn.addEventListener("click", () => {
        AudioFX.clink();
        const nextIdx = (currentDrinkIndex - 1 + filteredCocktails.length) % filteredCocktails.length;
        loadCocktail(nextIdx);
    });
    elements.nextDrinkBtn.addEventListener("click", () => {
        AudioFX.clink();
        const nextIdx = (currentDrinkIndex + 1) % filteredCocktails.length;
        loadCocktail(nextIdx);
    });

    // Unit Converter Toggle (Oz / Ml)
    elements.unitToggleBtn.addEventListener("click", () => {
        AudioFX.clink();
        currentUnit = currentUnit === "oz" ? "ml" : "oz";
        elements.unitOz.classList.toggle("active", currentUnit === "oz");
        elements.unitMl.classList.toggle("active", currentUnit === "ml");
        renderJiggerTray();
        updateLiquidPhysics();
        renderLoreSection(filteredCocktails[currentDrinkIndex]);
    });

    // Sound FX Toggle
    elements.soundBtn.addEventListener("click", () => {
        audioEnabled = !audioEnabled;
        elements.soundOnIcon.classList.toggle("hidden", !audioEnabled);
        elements.soundOffIcon.classList.toggle("hidden", audioEnabled);
        if (audioEnabled) AudioFX.clink();
    });

    // Mobile Touch Gesture Support (Horizontal Swipe between Drinks)
    let touchStartX = 0;
    let touchStartY = 0;
    elements.touchContainer.addEventListener("touchstart", e => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    elements.touchContainer.addEventListener("touchend", e => {
        const deltaX = e.changedTouches[0].screenX - touchStartX;
        const deltaY = e.changedTouches[0].screenY - touchStartY;
        // Check horizontal swipe intent over vertical scrolling
        if (Math.abs(deltaX) > 65 && Math.abs(deltaY) < 45) {
            if (deltaX > 0) elements.prevDrinkBtn.click();
            else elements.nextDrinkBtn.click();
        }
    }, { passive: true });
}

// Boot application when DOM is ready
document.addEventListener("DOMContentLoaded", initializeApp);