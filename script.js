/* ==========================================================================
   SPECS // Mobile Speakeasy Masterclass Engine
   Single-Screen Native Deck & Responsive Pour Simulator
   ========================================================================== */

// Embedded Archival Fallback (Guarantees instant offline loading with zero CORS blocks)
const COCKTAILS_MASTER_DB = [
    {
        id: "old-fashioned",
        name: "Old Fashioned",
        category: "classic",
        origin: "Est. 1880s • Louisville, KY",
        glassware: "rocks",
        method: "stir",
        ice: "large-rock",
        garnish: "orange-peel",
        hasFoam: false,
        isCarbonated: false,
        totalTargetVolumeOz: 2.25,
        ingredients: [
            { name: "Bourbon / Rye Whiskey", measureOz: 2.0, measureMl: 60, type: "Spirit", color: "#b45309" },
            { name: "Demerara Syrup", measureOz: 0.25, measureMl: 7.5, type: "Sweetener", color: "#451a03" },
            { name: "Angostura Bitters", measureOz: "dash", measureMl: "dash", type: "Bitters", color: "#7f1d1d" }
        ],
        decoys: [
            { name: "Sweet Vermouth", type: "Fortified Wine", color: "#831843" },
            { name: "Campari", type: "Bitter Liqueur", color: "#dc2626" },
            { name: "Fresh Lemon Juice", type: "Citrus", color: "#fef08a" }
        ],
        lore: {
            history: "Created when 19th-century patrons rebelled against elaborate cocktail concoctions, demanding their whiskey served the 'old-fashioned way': spirit, sugar, water, and bitters.",
            science: "Gentle stirring over high-density ice chills the spirit to 28°F while adding 20–25% dilution without aerating cloudiness.",
            proTip: "Express orange peel oils across the rim and washline. Never muddle cocktail cherries into the liquid.",
            targetFlavorTags: ["Spirit-Forward", "Charred Oak", "Caramel & Spice"],
            decoyFlavorTags: ["Crisp Botanical", "Tropical Tart", "Roasted Espresso", "Peat Smoke"]
        }
    },
    {
        id: "negroni",
        name: "Negroni",
        category: "classic",
        origin: "Est. 1919 • Florence, Italy",
        glassware: "rocks",
        method: "stir",
        ice: "large-rock",
        garnish: "orange-peel",
        hasFoam: false,
        isCarbonated: false,
        totalTargetVolumeOz: 3.0,
        ingredients: [
            { name: "London Dry Gin", measureOz: 1.0, measureMl: 30, type: "Spirit", color: "rgba(255,255,255,0.7)" },
            { name: "Campari", measureOz: 1.0, measureMl: 30, type: "Bitter Liqueur", color: "#dc2626" },
            { name: "Sweet Vermouth", measureOz: 1.0, measureMl: 30, type: "Fortified Wine", color: "#781d22" }
        ],
        decoys: [
            { name: "Dry Vermouth", type: "Fortified Wine", color: "#fef9c3" },
            { name: "Aperol", type: "Aperitif", color: "#f97316" },
            { name: "Club Soda", type: "Effervescent", color: "rgba(255,255,255,0.9)" }
        ],
        lore: {
            history: "Count Camillo Negroni famously ordered bartender Forsco Scarselli at Caffè Casoni to fortify his Americano by replacing soda water with London Dry gin.",
            science: "The symmetrical 1:1:1 ratio pits gin's bracing juniper against sweet vermouth's herbal sugars and Campari's bitter gentian root.",
            proTip: "Refrigerate vermouth after opening; oxidation will flatten this drink's complex botanical nuances.",
            targetFlavorTags: ["Bittersweet", "Herbaceous", "Botanical"],
            decoyFlavorTags: ["Rich Crema", "Peat Smoke", "Saline Agave", "Toasted Oak"]
        }
    },
    {
        id: "margarita",
        name: "Classic Margarita",
        category: "classic",
        origin: "Est. 1938 • Baja California",
        glassware: "coupe",
        method: "shake",
        ice: "neat",
        garnish: "lime-wheel",
        hasFoam: false,
        isCarbonated: false,
        totalTargetVolumeOz: 3.0,
        ingredients: [
            { name: "Blanco Tequila", measureOz: 2.0, measureMl: 60, type: "Agave Spirit", color: "rgba(250,250,250,0.6)" },
            { name: "Cointreau / Triple Sec", measureOz: 0.75, measureMl: 22.5, type: "Orange Liqueur", color: "rgba(254,249,195,0.7)" },
            { name: "Fresh Lime Juice", measureOz: 0.75, measureMl: 22.5, type: "Citrus", color: "#bef264" },
            { name: "Agave Nectar", measureOz: 0.25, measureMl: 7.5, type: "Sweetener", color: "#d97706" }
        ],
        decoys: [
            { name: "Mezcal", type: "Agave Spirit", color: "#ca8a04" },
            { name: "Simple Syrup", type: "Sweetener", color: "rgba(255,255,255,0.5)" },
            { name: "Lemon Juice", type: "Citrus", color: "#fde047" }
        ],
        lore: {
            history: "An evolution of the 1930s Daisy family (spirit, citrus, and orange liqueur), reformulated to celebrate Mexican agave spirits.",
            science: "Shaking with hard ice chills the liquid sub-zero while emulsifying fresh lime pectin for an opaque, velvety mouthfeel.",
            proTip: "Salt only half of the glass perimeter so guests can choose between saline and fresh sips.",
            targetFlavorTags: ["Bright Citrus", "Earthy Agave", "Saline Edge"],
            decoyFlavorTags: ["Charred Oak", "Roasted Cocoa", "Herbaceous", "Candied Ginger"]
        }
    },
    {
        id: "espresso-martini",
        name: "Espresso Martini",
        category: "signature",
        origin: "Est. 1983 • Soho Brasserie, London",
        glassware: "coupe",
        method: "shake",
        ice: "neat",
        garnish: "coffee-beans",
        hasFoam: true,
        isCarbonated: false,
        totalTargetVolumeOz: 3.5,
        ingredients: [
            { name: "Vodka", measureOz: 1.5, measureMl: 45, type: "Spirit", color: "rgba(255,255,255,0.7)" },
            { name: "Coffee Liqueur", measureOz: 0.75, measureMl: 22.5, type: "Liqueur", color: "#271810" },
            { name: "Fresh Espresso", measureOz: 1.0, measureMl: 30, type: "Coffee", color: "#1c140e" },
            { name: "Demerara Syrup", measureOz: 0.25, measureMl: 7.5, type: "Sweetener", color: "#451a03" }
        ],
        decoys: [
            { name: "Irish Cream", type: "Cream Liqueur", color: "#f5d0a9" },
            { name: "Cold Brew Concentrate", type: "Coffee", color: "#271810" },
            { name: "Vanilla Vodka", type: "Spirit", color: "rgba(255,255,255,0.7)" }
        ],
        lore: {
            history: "Legendary London mixologist Dick Bradsell concocted this drink when a future supermodel requested a cocktail to 'wake me up, and then mess me up.'",
            science: "Hot, freshly pulled espresso emulsifies with coffee lipids under vigorous shaking, yielding thick, durable microfoam.",
            proTip: "Float three espresso beans in a tight triangular triad representing health, wealth, and happiness.",
            targetFlavorTags: ["Velvet Crema", "Roasted Cocoa", "Energetic"],
            decoyFlavorTags: ["Bright Citrus", "Bittersweet", "Peat Smoke", "Earthy Agave"]
        }
    },
    {
        id: "smoky-oaxaca",
        name: "Oaxaca Old Fashioned",
        category: "signature",
        origin: "Est. 2007 • Death & Co, NYC",
        glassware: "rocks",
        method: "stir",
        ice: "large-rock",
        garnish: "orange-peel",
        hasFoam: false,
        isCarbonated: false,
        totalTargetVolumeOz: 2.5,
        ingredients: [
            { name: "Reposado Tequila", measureOz: 1.5, measureMl: 45, type: "Agave Spirit", color: "#d97706" },
            { name: "Mezcal", measureOz: 0.5, measureMl: 15, type: "Agave Spirit", color: "#ca8a04" },
            { name: "Agave Nectar", measureOz: 0.25, measureMl: 7.5, type: "Sweetener", color: "#b45309" },
            { name: "Angostura Bitters", measureOz: "dash", measureMl: "dash", type: "Bitters", color: "#7f1d1d" }
        ],
        decoys: [
            { name: "Bourbon / Rye Whiskey", type: "Spirit", color: "#b45309" },
            { name: "Fresh Lime Juice", type: "Citrus", color: "#bef264" },
            { name: "Peychaud's Bitters", type: "Bitters", color: "#dc2626" }
        ],
        lore: {
            history: "Phil Ward's pioneering modern classic proved that split-base agave profiles could stand as equals beside venerable whiskey classics.",
            science: "The 3:1 ratio provides Reposado's subtle vanilla oak up front, allowing artisanal agave smoke to blossom through the finish.",
            proTip: "Flame the orange peel across a match to caramelize surface oils directly into the mezcal smoke layer.",
            targetFlavorTags: ["Artisanal Smoke", "Honey Agave", "Warm Oak"],
            decoyFlavorTags: ["Velvet Crema", "Botanical", "Crisp Citrus", "Tropical Tart"]
        }
    },
    {
        id: "penicillin",
        name: "Penicillin",
        category: "classic",
        origin: "Est. 2005 • Milk & Honey, NYC",
        glassware: "rocks",
        method: "shake",
        ice: "large-rock",
        garnish: "orange-peel",
        hasFoam: false,
        isCarbonated: false,
        totalTargetVolumeOz: 3.75,
        ingredients: [
            { name: "Blended Scotch", measureOz: 2.0, measureMl: 60, type: "Whisky", color: "#d97706" },
            { name: "Fresh Lemon Juice", measureOz: 0.75, measureMl: 22.5, type: "Citrus", color: "#fef08a" },
            { name: "Honey-Ginger Syrup", measureOz: 0.75, measureMl: 22.5, type: "Sweetener", color: "#b45309" },
            { name: "Islay Peated Scotch Float", measureOz: 0.25, measureMl: 7.5, type: "Whisky Float", color: "#78350f" }
        ],
        decoys: [
            { name: "Bourbon / Rye Whiskey", type: "Spirit", color: "#b45309" },
            { name: "Simple Syrup", type: "Sweetener", color: "rgba(255,255,255,0.5)" },
            { name: "Ginger Beer", type: "Effervescent", color: "#fed7aa" }
        ],
        lore: {
            history: "Conceived by Australian legend Sam Ross during a shift at Milk & Honey, instantly becoming the 21st century's most iconic modern classic.",
            science: "Floating peated single malt captures the olfactory senses: intense campfire smoke greets the nose before soothing ginger and lemon honey comfort the palate.",
            proTip: "Float the Islay Scotch gently across the back of an inverted bar spoon to preserve distinct aromatic stratification.",
            targetFlavorTags: ["Peat Smoke", "Candied Ginger", "Raw Honey"],
            decoyFlavorTags: ["Roasted Cocoa", "Herbaceous", "Earthy Agave", "Velvet Crema"]
        }
    }
];

/* ==========================================================================
   Application State
   ========================================================================== */
let cocktailsDB = [...COCKTAILS_MASTER_DB];
let currentDrinkIndex = 0;
let difficultyMode = "medium"; // 'easy' | 'medium' | 'hard'
let currentUnit = "oz";
let audioEnabled = true;

// Build State
let activeBuild = [];
let selectedGlass = "rocks";
let selectedMethod = "stir";
let selectedIce = "large-rock";
let selectedHardFlavorTags = new Set();
let selectedMeasure = { oz: 1.0, ml: 30 };

// Session Stats
let streak = 0;

/* ==========================================================================
   DOM Reference Cache
   ========================================================================== */
const dom = {
    // Header & Controls
    diffGroup: document.getElementById("difficulty-group"),
    unitBtn: document.getElementById("unit-btn"),
    unitLabel: document.getElementById("unit-label"),
    soundBtn: document.getElementById("sound-btn"),
    soundIconOn: document.getElementById("sound-icon-on"),
    soundIconOff: document.getElementById("sound-icon-off"),
    prevCardBtn: document.getElementById("prev-card-btn"),
    nextCardBtn: document.getElementById("next-card-btn"),
    drinkIndexPill: document.getElementById("drink-index-pill"),
    streakPill: document.getElementById("streak-pill"),

    // 3D Card Deck
    cocktailCard: document.getElementById("cocktail-card"),
    flipToBackBtn: document.getElementById("flip-to-back-btn"),
    flipToFrontBtn: document.getElementById("flip-to-front-btn"),
    cardCategory: document.getElementById("card-category"),
    cardOrigin: document.getElementById("card-origin"),
    cardDrinkName: document.getElementById("card-drink-name"),
    backDrinkName: document.getElementById("back-drink-name"),
    backCanonicalSpecs: document.getElementById("back-canonical-specs"),
    flavorChipPicker: document.getElementById("flavor-chip-picker"),
    backLoreHistory: document.getElementById("back-lore-history"),
    backLoreProtip: document.getElementById("back-lore-protip"),
    metricVolumeVal: document.getElementById("metric-volume-val"),
    metricWashVal: document.getElementById("metric-wash-val"),
    metricGlassVal: document.getElementById("metric-glass-val"),

    // SVG Model Elements
    glassClipPath: document.getElementById("glass-clip-path"),
    liquidLayersGroup: document.getElementById("liquid-layers-group"),
    svgBubbles: document.getElementById("svg-bubbles"),
    iceRock: document.getElementById("ice-rock"),
    iceCubes: document.getElementById("ice-cubes"),
    foamLayer: document.getElementById("foam-layer"),
    washlineMarker: document.getElementById("washline-marker"),
    glassContour: document.getElementById("glass-contour"),
    glassStem: document.getElementById("glass-stem"),
    glassFoot: document.getElementById("glass-foot"),
    garnishGroup: document.getElementById("garnish-group"),
    garnishOrange: document.getElementById("garnish-orange"),
    garnishLime: document.getElementById("garnish-lime"),
    garnishBeans: document.getElementById("garnish-beans"),

    // Bottom Workbench Dock
    wbTabs: document.querySelectorAll(".wb-tab"),
    dockPour: document.getElementById("dock-pour"),
    dockSetup: document.getElementById("dock-setup"),
    jiggerShelf: document.getElementById("jigger-shelf"),
    jiggerPills: document.getElementById("jigger-pills"),
    speedRailCarousel: document.getElementById("speed-rail-carousel"),
    tinPillsScroll: document.getElementById("tin-pills-scroll"),
    dumpTrayBtn: document.getElementById("dump-tray-btn"),
    hwGlassGroup: document.getElementById("hw-glass-group"),
    hwMethodGroup: document.getElementById("hw-method-group"),
    hwIceGroup: document.getElementById("hw-ice-group"),
    serveSpecBtn: document.getElementById("serve-spec-btn"),

    // Modal Evaluation
    evalModal: document.getElementById("eval-modal"),
    evalSheet: document.querySelector(".eval-sheet"),
    evalStatusIcon: document.getElementById("eval-status-icon"),
    evalHeadline: document.getElementById("eval-headline"),
    evalSubtext: document.getElementById("eval-subtext"),
    evalDiagnostics: document.getElementById("eval-diagnostics"),
    closeEvalBtn: document.getElementById("close-eval-btn")
};

/* ==========================================================================
   Web Audio API Synthesis Engine
   ========================================================================== */
let audioCtx = null;
function getAudioContext() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === "suspended") audioCtx.resume();
    return audioCtx;
}

const AudioFX = {
    tap() {
        if (!audioEnabled) return;
        try {
            const ctx = getAudioContext();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.frequency.setValueAtTime(800, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.04);
            gain.gain.setValueAtTime(0.08, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.04);
        } catch (e) {}
    },
    pour() {
        if (!audioEnabled) return;
        try {
            const ctx = getAudioContext();
            const bufferSize = ctx.sampleRate * 0.12;
            const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
            const data = buffer.getChannelData(0);
            for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
            const noise = ctx.createBufferSource();
            noise.buffer = buffer;
            const filter = ctx.createBiquadFilter();
            filter.type = "bandpass";
            filter.frequency.setValueAtTime(700, ctx.currentTime);
            filter.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.12);
            const gain = ctx.createGain();
            gain.gain.setValueAtTime(0.1, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
            noise.connect(filter);
            filter.connect(gain);
            gain.connect(ctx.destination);
            noise.start();
        } catch (e) {}
    },
    flip() {
        if (!audioEnabled) return;
        try {
            const ctx = getAudioContext();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = "triangle";
            osc.frequency.setValueAtTime(240, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(540, ctx.currentTime + 0.08);
            gain.gain.setValueAtTime(0.09, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.08);
        } catch (e) {}
    },
    success() {
        if (!audioEnabled) return;
        try {
            const ctx = getAudioContext();
            [523.25, 659.25, 783.99, 1046.50].forEach((f, i) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = "sine";
                osc.frequency.setValueAtTime(f, ctx.currentTime + i * 0.06);
                gain.gain.setValueAtTime(0.01, ctx.currentTime + i * 0.06);
                gain.gain.linearRampToValueAtTime(0.12, ctx.currentTime + i * 0.06 + 0.02);
                gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.06 + 0.28);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(ctx.currentTime + i * 0.06);
                osc.stop(ctx.currentTime + i * 0.06 + 0.28);
            });
        } catch (e) {}
    },
    error() {
        if (!audioEnabled) return;
        try {
            const ctx = getAudioContext();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = "sawtooth";
            osc.frequency.setValueAtTime(140, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(70, ctx.currentTime + 0.2);
            gain.gain.setValueAtTime(0.12, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.2);
        } catch (e) {}
    }
};

/* ==========================================================================
   SVG Glassware Vector Geometry
   ========================================================================== */
const GLASS_PROFILES = {
    rocks: {
        caption: "Rocks Glass",
        clip: "M80 80 L85 240 Q150 250 215 240 L220 80 Z",
        contour: "M78 78 L84 242 Q150 252 216 242 L222 78 Z",
        stem: "",
        foot: "",
        emptyY: 242,
        fullY: 95,
        targetY: 110
    },
    coupe: {
        caption: "Cocktail Coupe",
        clip: "M70 85 Q150 200 230 85 Q150 110 70 85 Z",
        contour: "M66 83 Q150 204 234 83 Q150 108 66 83 Z",
        stem: "M150 180 L150 260",
        foot: "M110 260 Q150 255 190 260",
        emptyY: 185,
        fullY: 90,
        targetY: 100
    },
    highball: {
        caption: "Highball Glass",
        clip: "M100 65 L102 250 Q150 255 198 250 L200 65 Z",
        contour: "M97 63 L99 253 Q150 258 201 253 L203 63 Z",
        stem: "",
        foot: "",
        emptyY: 250,
        fullY: 75,
        targetY: 88
    },
    "nick-nora": {
        caption: "Nick & Nora",
        clip: "M90 90 C90 195, 210 195, 210 90 Z",
        contour: "M87 88 C87 199, 213 199, 213 88 Z",
        stem: "M150 170 L150 260",
        foot: "M115 260 Q150 256 185 260",
        emptyY: 175,
        fullY: 95,
        targetY: 108
    }
};

/* ==========================================================================
   Drink Presentation Engine
   ========================================================================== */
function loadDrink(index) {
    currentDrinkIndex = index;
    const drink = cocktailsDB[currentDrinkIndex];

    // Status tracker
    dom.drinkIndexPill.textContent = `DRINK ${currentDrinkIndex + 1} / ${cocktailsDB.length}`;
    dom.cardCategory.textContent = drink.category.toUpperCase();
    dom.cardOrigin.textContent = drink.origin;
    dom.cardDrinkName.textContent = drink.name;
    dom.backDrinkName.textContent = drink.name;

    // Reset build workspace
    activeBuild = [];
    selectedHardFlavorTags.clear();
    dom.cocktailCard.classList.remove("is-flipped");

    // Reset hardware defaults to match current selection
    updateGlasswareVisual(selectedGlass);
    updateIceVisual();
    updateLiquidStrata();
    updateGarnishVisual(false);
    renderTinPills();
    renderSpeedRail(drink);
    renderCanonicalBackCard(drink);
}

function updateGlasswareVisual(glassKey) {
    selectedGlass = glassKey;
    const profile = GLASS_PROFILES[glassKey] || GLASS_PROFILES.rocks;
    
    dom.glassClipPath.setAttribute("d", profile.clip);
    dom.glassContour.setAttribute("d", profile.contour);

    if (profile.stem) {
        dom.glassStem.classList.remove("hidden");
        dom.glassStem.setAttribute("d", profile.stem);
        dom.glassFoot.classList.remove("hidden");
        dom.glassFoot.setAttribute("d", profile.foot);
    } else {
        dom.glassStem.classList.add("hidden");
        dom.glassFoot.classList.add("hidden");
    }

    // Set washline target indicator
    dom.washlineMarker.setAttribute("y1", profile.targetY);
    dom.washlineMarker.setAttribute("y2", profile.targetY);
    dom.metricGlassVal.textContent = profile.caption;

    updateLiquidStrata();
}

function updateIceVisual() {
    dom.iceRock.classList.add("hidden");
    dom.iceCubes.classList.add("hidden");

    if (selectedIce === "large-rock" && selectedGlass === "rocks") {
        dom.iceRock.classList.remove("hidden");
    } else if (selectedIce === "cubed") {
        dom.iceCubes.classList.remove("hidden");
    }
}

function updateGarnishVisual(show = false) {
    if (!show) {
        dom.garnishGroup.setAttribute("opacity", "0");
        return;
    }
    const drink = cocktailsDB[currentDrinkIndex];
    dom.garnishOrange.classList.add("hidden");
    dom.garnishLime.classList.add("hidden");
    dom.garnishBeans.classList.add("hidden");

    if (drink.garnish === "orange-peel") dom.garnishOrange.classList.remove("hidden");
    else if (drink.garnish === "lime-wheel") dom.garnishLime.classList.remove("hidden");
    else if (drink.garnish === "coffee-beans") dom.garnishBeans.classList.remove("hidden");

    dom.garnishGroup.setAttribute("opacity", "1");
}

/* ==========================================================================
   Dynamic Liquid Chemistry Strata
   ========================================================================== */
function updateLiquidStrata() {
    const drink = cocktailsDB[currentDrinkIndex];
    const profile = GLASS_PROFILES[selectedGlass] || GLASS_PROFILES.rocks;
    dom.liquidLayersGroup.innerHTML = "";

    let totalOz = 0;
    activeBuild.forEach(item => {
        totalOz += (typeof item.measureOz === "number") ? item.measureOz : 0.1;
    });

    const targetMaxOz = drink.totalTargetVolumeOz || 3.0;
    const totalLiquidHeight = profile.emptyY - profile.fullY;
    const currentRatio = Math.min(totalOz / targetMaxOz, 1.15);

    // Build stratified layers upwards from empty base
    let currentBaseY = profile.emptyY;

    activeBuild.forEach(item => {
        const itemOz = (typeof item.measureOz === "number") ? item.measureOz : 0.1;
        const layerRatio = itemOz / targetMaxOz;
        const layerHeight = totalLiquidHeight * layerRatio;
        const layerTopY = currentBaseY - layerHeight;

        const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttribute("x", "0");
        rect.setAttribute("y", layerTopY);
        rect.setAttribute("width", "300");
        rect.setAttribute("height", layerHeight + 0.5);
        rect.setAttribute("fill", item.color || "#c2410c");
        rect.setAttribute("opacity", "0.85");
        dom.liquidLayersGroup.appendChild(rect);

        currentBaseY = layerTopY;
    });

    // Effervescence & Foam logic
    dom.svgBubbles.style.opacity = (drink.isCarbonated && currentRatio > 0.3) ? "0.8" : "0";
    if (drink.hasFoam && currentRatio > 0.4) {
        dom.foamLayer.style.opacity = "0.9";
        dom.foamLayer.setAttribute("y", Math.max(currentBaseY - 14, profile.fullY - 5));
    } else {
        dom.foamLayer.style.opacity = "0";
    }

    // Update Volume & Washline Readouts
    const displayVol = currentUnit === "oz"
        ? `${totalOz.toFixed(2)} oz`
        : `${(totalOz * 29.57).toFixed(0)} ml`;

    dom.metricVolumeVal.textContent = totalOz === 0 ? "0.0 oz" : displayVol;

    if (currentRatio === 0) {
        dom.metricWashVal.textContent = "Empty Glass";
        dom.metricWashVal.className = "metric-value status-empty";
    } else if (currentRatio < 0.7) {
        dom.metricWashVal.textContent = "Underfilled";
        dom.metricWashVal.className = "metric-value status-warn";
    } else if (currentRatio <= 1.05) {
        dom.metricWashVal.textContent = "Ideal Washline";
        dom.metricWashVal.className = "metric-value status-good";
    } else {
        dom.metricWashVal.textContent = "Overfilled";
        dom.metricWashVal.className = "metric-value status-warn";
    }
}

/* ==========================================================================
   Speed Rail & Jigger Interaction
   ========================================================================== */
function renderSpeedRail(drink) {
    dom.speedRailCarousel.innerHTML = "";

    // Combine authentic target bottles with decoy bottles
    const railDeck = [
        ...drink.ingredients.map(i => ({ ...i, isTarget: true })),
        ...drink.decoys.map(d => ({ ...d, measureOz: 1.0, measureMl: 30, isTarget: false }))
    ].sort(() => Math.random() - 0.5);

    railDeck.forEach(bottle => {
        const card = document.createElement("button");
        card.className = "rail-bottle-card";
        card.innerHTML = `
            <span class="bottle-type">${bottle.type || "Modifier"}</span>
            <span class="bottle-name">${bottle.name}</span>
        `;
        card.addEventListener("click", () => pourBottle(bottle));
        dom.speedRailCarousel.appendChild(card);
    });
}

function pourBottle(bottle) {
    AudioFX.pour();
    
    // In Easy Mode: auto-assign exact canonical measure to lower cognitive load
    let oz = selectedMeasure.oz;
    let ml = selectedMeasure.ml;

    if (difficultyMode === "easy") {
        const canonical = cocktailsDB[currentDrinkIndex].ingredients.find(i => i.name === bottle.name);
        if (canonical) {
            oz = canonical.measureOz;
            ml = canonical.measureMl;
        } else {
            oz = 1.0;
            ml = 30;
        }
    }

    activeBuild.push({
        name: bottle.name,
        measureOz: oz,
        measureMl: ml,
        color: bottle.color
    });

    renderTinPills();
    updateLiquidStrata();
}

function removePouredItem(index) {
    AudioFX.tap();
    activeBuild.splice(index, 1);
    renderTinPills();
    updateLiquidStrata();
}

function renderTinPills() {
    dom.tinPillsScroll.innerHTML = "";
    if (activeBuild.length === 0) {
        dom.tinPillsScroll.innerHTML = `<span class="empty-tin-msg">Speed rail empty. Tap bottles above...</span>`;
        return;
    }

    activeBuild.forEach((item, idx) => {
        const pill = document.createElement("div");
        pill.className = "tin-item-pill";
        const amtText = item.measureOz === "dash" ? "2 Dashes" : (currentUnit === "oz" ? `${item.measureOz} oz` : `${item.measureMl} ml`);
        pill.innerHTML = `
            <span class="amt">${amtText}</span>
            <span>${item.name}</span>
            <span class="x-del">✕</span>
        `;
        pill.addEventListener("click", () => removePouredItem(idx));
        dom.tinPillsScroll.appendChild(pill);
    });
}

/* ==========================================================================
   Canonical Card Back & Hard-Mode Sensory Matrix
   ========================================================================== */
function renderCanonicalBackCard(drink) {
    // Canonical Specs
    dom.backCanonicalSpecs.innerHTML = "";
    drink.ingredients.forEach(spec => {
        const row = document.createElement("div");
        row.className = "canon-row";
        const measure = spec.measureOz === "dash" ? "2 Dashes" : (currentUnit === "oz" ? `${spec.measureOz} oz` : `${spec.measureMl} ml`);
        row.innerHTML = `
            <span>${spec.name}</span>
            <strong>${measure}</strong>
        `;
        dom.backCanonicalSpecs.appendChild(row);
    });

    // Sensory Pad (Hard Mode)
    dom.flavorChipPicker.innerHTML = "";
    const allTags = [
        ...drink.lore.targetFlavorTags,
        ...drink.lore.decoyFlavorTags
    ].sort(() => Math.random() - 0.5);

    allTags.forEach(tag => {
        const chip = document.createElement("button");
        chip.className = "flavor-chip";
        chip.textContent = tag;
        chip.addEventListener("click", () => {
            AudioFX.tap();
            if (selectedHardFlavorTags.has(tag)) {
                selectedHardFlavorTags.delete(tag);
                chip.classList.remove("selected");
            } else {
                selectedHardFlavorTags.add(tag);
                chip.classList.add("selected");
            }
        });
        dom.flavorChipPicker.appendChild(chip);
    });

    // History & Pro Tip
    dom.backLoreHistory.textContent = drink.lore.history;
    dom.backLoreProtip.textContent = drink.lore.proTip;
}

/* ==========================================================================
   Spec Evaluation Engine
   ========================================================================== */
function evaluateSpec() {
    const drink = cocktailsDB[currentDrinkIndex];
    const errors = [];

    // Hardware checks (Easy, Medium, Hard)
    if (selectedGlass !== drink.glassware) {
        errors.push(`Glassware Mismatch: Spec calls for a ${drink.glassware.toUpperCase()}.`);
    }
    if (selectedMethod !== drink.method) {
        errors.push(`Method Incorrect: Requires ${drink.method.toUpperCase()}.`);
    }
    if (selectedIce !== drink.ice) {
        errors.push(`Ice Incorrect: Requires ${drink.ice.replace("-", " ").toUpperCase()}.`);
    }

    // Build presence checks
    if (activeBuild.length === 0) {
        errors.push("Your glass is empty! Pour ingredients from the Speed Rail.");
    } else {
        // Missing Target Ingredients
        drink.ingredients.forEach(target => {
            const poured = activeBuild.find(b => b.name === target.name);
            if (!poured) {
                errors.push(`Missing: ${target.name}`);
            } else if (difficultyMode !== "easy" && target.measureOz !== "dash") {
                // Precise measure check in Medium and Hard
                if (Math.abs(poured.measureOz - target.measureOz) > 0.05) {
                    errors.push(`Proportion off on ${target.name} (Poured ${poured.measureOz} oz vs target ${target.measureOz} oz).`);
                }
            }
        });

        // Decoys / Unwanted items
        activeBuild.forEach(poured => {
            const isExpected = drink.ingredients.some(t => t.name === poured.name);
            if (!isExpected) {
                errors.push(`Decoy Detected: ${poured.name} does not belong in this build.`);
            }
        });
    }

    // Hard Mode: Palate Sensory Profile Check
    if (difficultyMode === "hard") {
        if (selectedHardFlavorTags.size === 0) {
            errors.push("Hard Mode: Palate Profile unselected! Flip the card and pick tasting notes.");
        } else {
            drink.lore.targetFlavorTags.forEach(targetTag => {
                if (!selectedHardFlavorTags.has(targetTag)) {
                    errors.push(`Palate Diagnosis: Failed to identify tasting note '${targetTag}'.`);
                }
            });
            selectedHardFlavorTags.forEach(picked => {
                if (!drink.lore.targetFlavorTags.includes(picked)) {
                    errors.push(`Palate Error: '${picked}' is an inaccurate flavor descriptor.`);
                }
            });
        }
    }

    showEvaluationSheet(errors);
}

function showEvaluationSheet(errors) {
    dom.evalModal.classList.remove("hidden");

    if (errors.length === 0) {
        streak++;
        AudioFX.success();
        updateGarnishVisual(true);
        dom.evalSheet.className = "eval-sheet is-success";
        dom.evalStatusIcon.textContent = "✦";
        dom.evalHeadline.textContent = "SPECIFICATION FLAWLESS";
        dom.evalSubtext.textContent = `Accredited ${difficultyMode.toUpperCase()} bar service executed perfectly.`;
        dom.evalDiagnostics.className = "eval-diagnostics-list is-clean";
        dom.evalDiagnostics.innerHTML = "✓ All proportions, glassware, dilution, and nuances match canonical specs.";
    } else {
        streak = 0;
        AudioFX.error();
        updateGarnishVisual(false);
        dom.evalSheet.className = "eval-sheet is-error";
        dom.evalStatusIcon.textContent = "✕";
        dom.evalHeadline.textContent = "SERVICE REVISE REQUIRED";
        dom.evalSubtext.textContent = "Review Head Bartender diagnostic notes below to correct this build:";
        dom.evalDiagnostics.className = "eval-diagnostics-list";
        dom.evalDiagnostics.innerHTML = errors.map(e => `<li>${e}</li>`).join("");
    }

    dom.streakPill.textContent = `STREAK: ${streak} 🔥`;
}

/* ==========================================================================
   Event Wiring & Gestures
   ========================================================================== */
function setupEvents() {
    // 3D Card Flip
    dom.flipToBackBtn.addEventListener("click", () => {
        AudioFX.flip();
        dom.cocktailCard.classList.add("is-flipped");
    });
    dom.flipToFrontBtn.addEventListener("click", () => {
        AudioFX.flip();
        dom.cocktailCard.classList.remove("is-flipped");
    });

    // Deck Navigation
    dom.prevCardBtn.addEventListener("click", () => {
        AudioFX.tap();
        const prevIdx = (currentDrinkIndex - 1 + cocktailsDB.length) % cocktailsDB.length;
        loadDrink(prevIdx);
    });
    dom.nextCardBtn.addEventListener("click", () => {
        AudioFX.tap();
        const nextIdx = (currentDrinkIndex + 1) % cocktailsDB.length;
        loadDrink(nextIdx);
    });

    // Difficulty Modes
    dom.diffGroup.addEventListener("click", e => {
        const chip = e.target.closest(".diff-chip");
        if (!chip) return;
        AudioFX.tap();
        dom.diffGroup.querySelectorAll(".diff-chip").forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        difficultyMode = chip.dataset.mode;

        // Auto-configure jigger shelf UI based on mode
        dom.jiggerShelf.classList.toggle("disabled-in-easy", difficultyMode === "easy");
    });

    // Unit toggle (OZ / ML)
    dom.unitBtn.addEventListener("click", () => {
        AudioFX.tap();
        currentUnit = currentUnit === "oz" ? "ml" : "oz";
        dom.unitLabel.textContent = currentUnit.toUpperCase();
        renderTinPills();
        updateLiquidStrata();
        renderCanonicalBackCard(cocktailsDB[currentDrinkIndex]);
    });

    // Audio Toggle
    dom.soundBtn.addEventListener("click", () => {
        audioEnabled = !audioEnabled;
        dom.soundIconOn.classList.toggle("hidden", !audioEnabled);
        dom.soundIconOff.classList.toggle("hidden", audioEnabled);
        if (audioEnabled) AudioFX.tap();
    });

    // Workbench Tabs: Speed Rail vs Hardware Setup
    dom.wbTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            AudioFX.tap();
            dom.wbTabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            const dock = tab.dataset.dock;
            dom.dockPour.classList.toggle("active", dock === "pour");
            dom.dockSetup.classList.toggle("active", dock === "setup");
        });
    });

    // Jigger Poured Amount Selection
    dom.jiggerPills.addEventListener("click", e => {
        const pill = e.target.closest(".jig-pill");
        if (!pill) return;
        AudioFX.tap();
        dom.jiggerPills.querySelectorAll(".jig-pill").forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        const oz = pill.dataset.oz;
        const ml = pill.dataset.ml;
        selectedMeasure = {
            oz: oz === "dash" ? "dash" : parseFloat(oz),
            ml: ml === "dash" ? "dash" : parseFloat(ml)
        };
    });

    // Hardware Group: Glass Selection
    dom.hwGlassGroup.addEventListener("click", e => {
        const btn = e.target.closest(".hw-btn");
        if (!btn) return;
        AudioFX.tap();
        dom.hwGlassGroup.querySelectorAll(".hw-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        updateGlasswareVisual(btn.dataset.choice);
        updateIceVisual();
    });

    // Hardware Group: Method Selection
    dom.hwMethodGroup.addEventListener("click", e => {
        const btn = e.target.closest(".hw-btn");
        if (!btn) return;
        AudioFX.tap();
        dom.hwMethodGroup.querySelectorAll(".hw-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        selectedMethod = btn.dataset.choice;
    });

    // Hardware Group: Ice Selection
    dom.hwIceGroup.addEventListener("click", e => {
        const btn = e.target.closest(".hw-btn");
        if (!btn) return;
        AudioFX.tap();
        dom.hwIceGroup.querySelectorAll(".hw-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        selectedIce = btn.dataset.choice;
        updateIceVisual();
    });

    // Dump Shaker Tray
    dom.dumpTrayBtn.addEventListener("click", () => {
        AudioFX.tap();
        activeBuild = [];
        renderTinPills();
        updateLiquidStrata();
        updateGarnishVisual(false);
    });

    // Serve & Evaluate Spec
    dom.serveSpecBtn.addEventListener("click", evaluateSpec);
    dom.closeEvalBtn.addEventListener("click", () => {
        AudioFX.tap();
        dom.evalModal.classList.add("hidden");
    });

    // Horizontal Swipe Gesture on 3D Card
    let touchStartX = 0;
    let touchStartY = 0;
    dom.cocktailCard.addEventListener("touchstart", e => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    dom.cocktailCard.addEventListener("touchend", e => {
        const deltaX = e.changedTouches[0].screenX - touchStartX;
        const deltaY = e.changedTouches[0].screenY - touchStartY;
        // Check for dominant horizontal flick
        if (Math.abs(deltaX) > 60 && Math.abs(deltaY) < 40) {
            if (deltaX > 0) dom.prevCardBtn.click();
            else dom.nextCardBtn.click();
        }
    }, { passive: true });
}

// Boot application
document.addEventListener("DOMContentLoaded", () => {
    setupEvents();
    loadDrink(0);
});