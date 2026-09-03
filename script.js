/* ==========================================================================
   SPECS // Cocktail Masterclass Engine
   Architecture Designed for Effortless Menu Expansion & Bartender Training
   ========================================================================== */

/**
 * MASTER COCKTAIL DATABASE
 * Bar Managers: To add or edit your seasonal or house drinks, simply insert 
 * or modify an object adhering to this schema.
 */
const COCKTAIL_DATABASE = [
    {
        id: "old-fashioned",
        name: "Old Fashioned",
        category: "classic",
        origin: "Est. 1880s • Louisville, KY",
        glassware: "rocks",        // 'rocks' | 'coupe' | 'highball' | 'nick-nora'
        method: "stir",            // 'stir' | 'shake' | 'build' | 'blend'
        ice: "large-rock",         // 'large-rock' | 'cubed' | 'crushed' | 'neat'
        garnish: "orange-peel",    // 'orange-peel' | 'lime-wheel' | 'cherry' | 'coffee-beans'
        liquidColorBottom: "#78350f",
        liquidColorTop: "#d97706",
        hasFoam: false,
        isCarbonated: false,
        totalTargetVolumeOz: 2.25,
        ingredients: [
            { name: "Bourbon / Rye Whiskey", measureOz: 2.0, measureMl: 60, type: "Spirit" },
            { name: "Demerara / Simple Syrup", measureOz: 0.25, measureMl: 7.5, type: "Sweetener" },
            { name: "Angostura Bitters", measureOz: "dash", measureMl: "dash", type: "Bitters" }
        ],
        // Decoys tested against the bartender on the speed rail:
        decoys: [
            { name: "Sweet Vermouth", type: "Fortified Wine" },
            { name: "Campari", type: "Liqueur" },
            { name: "Fresh Lemon Juice", type: "Citrus" }
        ],
        lore: {
            history: "The Old Fashioned is the original cocktail definition recorded in 1806: spirits, sugar, water, and bitters. In the 1880s at the Pendennis Club in Louisville, patrons pushed back against modern liqueurs and demanded their drinks made the 'old-fashioned' way.",
            science: "Because it contains exclusively spirits and syrup, it must be stirred with dense, non-aerated clear ice for 30 seconds to reach optimal temperature (28°F) and 20-25% dilution without haze.",
            proTip: "Express orange peel oils across the surface and rim for aromatics, but do not muddle fruit salad into the drink.",
            flavorTags: ["Spirit-Forward", "Oak & Caramel", "Aromatic Spice"]
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
        liquidColorBottom: "#991b1b",
        liquidColorTop: "#dc2626",
        hasFoam: false,
        isCarbonated: false,
        totalTargetVolumeOz: 3.0,
        ingredients: [
            { name: "London Dry Gin", measureOz: 1.0, measureMl: 30, type: "Spirit" },
            { name: "Campari", measureOz: 1.0, measureMl: 30, type: "Bitter Liqueur" },
            { name: "Sweet Vermouth", measureOz: 1.0, measureMl: 30, type: "Fortified Wine" }
        ],
        decoys: [
            { name: "Dry Vermouth", type: "Fortified Wine" },
            { name: "Aperol", type: "Bitter Liqueur" },
            { name: "Fresh Orange Juice", type: "Citrus" }
        ],
        lore: {
            history: "Count Camillo Negroni in Florence asked bartender Forsco Scarselli at Caffè Casoni to strengthen his favorite Americano by replacing the soda water with gin. The garnish was swapped from lemon to orange to signal the difference.",
            science: "The perfect 1:1:1 ratio relies on balance between gin's botanical juniper spine, sweet vermouth's herbal sugars, and Campari's bitter gentian bark.",
            proTip: "Keep vermouth refrigerated at all times to prevent oxidation from destroying your Negroni.",
            flavorTags: ["Bitter-Sweet", "Botanical", "Aperitivo"]
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
        liquidColorBottom: "#84cc16",
        liquidColorTop: "#bef264",
        hasFoam: false,
        isCarbonated: false,
        totalTargetVolumeOz: 3.0,
        ingredients: [
            { name: "Blanco Tequila", measureOz: 2.0, measureMl: 60, type: "Agave Spirit" },
            { name: "Cointreau / Triple Sec", measureOz: 0.75, measureMl: 22.5, type: "Orange Liqueur" },
            { name: "Fresh Lime Juice", measureOz: 0.75, measureMl: 22.5, type: "Fresh Citrus" },
            { name: "Agave Nectar", measureOz: 0.25, measureMl: 7.5, type: "Sweetener" }
        ],
        decoys: [
            { name: "Mezcal", type: "Agave Spirit" },
            { name: "Simple Syrup", type: "Sweetener" },
            { name: "Lemon Juice", type: "Fresh Citrus" }
        ],
        lore: {
            history: "The Margarita translates directly to 'Daisy' in Spanish—a Victorian family of cocktails made with spirit, citrus, and cordial. Tequila subbed for brandy, and Cointreau provided the sweet anchor.",
            science: "Citrus requires violent shaking with sharp ice to create micro-aeration, emulsion, and rapid chill.",
            proTip: "Salt only half the rim of the glass. Never force salt upon every sip if the guest prefers discretion.",
            flavorTags: ["Crisp Citrus", "Earthy Agave", "Saline Balance"]
        }
    },
    {
        id: "espresso-martini",
        name: "Espresso Martini",
        category: "signature",
        origin: "Est. 1983 • Dick Bradsell, London",
        glassware: "coupe",
        method: "shake",
        ice: "neat",
        garnish: "coffee-beans",
        liquidColorBottom: "#1c1917",
        liquidColorTop: "#44403c",
        hasFoam: true,
        isCarbonated: false,
        totalTargetVolumeOz: 3.25,
        ingredients: [
            { name: "Vodka", measureOz: 1.5, measureMl: 45, type: "Spirit" },
            { name: "Coffee Liqueur", measureOz: 0.75, measureMl: 22.5, type: "Liqueur" },
            { name: "Fresh Espresso", measureOz: 1.0, measureMl: 30, type: "Coffee" },
            { name: "Demerara / Simple Syrup", measureOz: 0.25, measureMl: 7.5, type: "Sweetener" }
        ],
        decoys: [
            { name: "Baileys Irish Cream", type: "Cream Liqueur" },
            { name: "Vanilla Vodka", type: "Spirit" },
            { name: "Angostura Bitters", type: "Bitters" }
        ],
        lore: {
            history: "Legendary bartender Dick Bradsell created this at Soho Brasserie when a future top model walked to the bar and asked for a drink that would 'wake me up, and then mess me up.'",
            science: "Freshly pulled, hot or warm espresso yields superior crema foam when shaken hard compared to cold brew due to emulsified CO2 and coffee oils.",
            proTip: "Garnish with exactly 3 espresso beans in a triangular petal, representing Health, Wealth, and Happiness.",
            flavorTags: ["Velvety Crema", "Roasted Cacao", "Energizing"]
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
        liquidColorBottom: "#78350f",
        liquidColorTop: "#d97706",
        hasFoam: false,
        isCarbonated: false,
        totalTargetVolumeOz: 2.5,
        ingredients: [
            { name: "Reposado Tequila", measureOz: 1.5, measureMl: 45, type: "Agave Spirit" },
            { name: "Mezcal", measureOz: 0.5, measureMl: 15, type: "Agave Spirit" },
            { name: "Agave Nectar", measureOz: 0.25, measureMl: 7.5, type: "Sweetener" },
            { name: "Angostura Bitters", measureOz: "dash", measureMl: "dash", type: "Bitters" }
        ],
        decoys: [
            { name: "Bourbon / Rye Whiskey", type: "Spirit" },
            { name: "Lime Juice", type: "Citrus" },
            { name: "Mole Bitters", type: "Bitters" }
        ],
        lore: {
            history: "Pioneered by Phil Ward at Death & Co, this cocktail demonstrated that split-base agave drinks could match the elegance of American whiskey classics.",
            science: "Splitting the base 3:1 allows the buttery vanilla of Reposado to soften the intense wood-fired smoke of artisanal Mezcal.",
            proTip: "Flame the orange peel over the top to caramelize the expressed citrus oils with the mezcal smoke.",
            flavorTags: ["Earthy Smoke", "Velvety Agave", "Wood Vanilla"]
        }
    },
    {
        id: "midnight-fizz",
        name: "Midnight Violette Fizz",
        category: "signature",
        origin: "House Signature Special",
        glassware: "highball",
        method: "shake",
        ice: "cubed",
        garnish: "cherry",
        liquidColorBottom: "#4c1d95",
        liquidColorTop: "#8b5cf6",
        hasFoam: false,
        isCarbonated: true,
        totalTargetVolumeOz: 4.5,
        ingredients: [
            { name: "Empress / Botanical Gin", measureOz: 1.5, measureMl: 45, type: "Spirit" },
            { name: "Crème de Violette", measureOz: 0.5, measureMl: 15, type: "Floral Liqueur" },
            { name: "Fresh Lemon Juice", measureOz: 0.75, measureMl: 22.5, type: "Fresh Citrus" },
            { name: "Demerara / Simple Syrup", measureOz: 0.5, measureMl: 15, type: "Sweetener" },
            { name: "Club Soda", measureOz: 2.0, measureMl: 60, type: "Carbonated" }
        ],
        decoys: [
            { name: "Tonic Water", type: "Carbonated" },
            { name: "Blue Curaçao", type: "Liqueur" },
            { name: "Egg White", type: "Modifier" }
        ],
        lore: {
            history: "A modern house twist combining the botanical hue of butterfly pea flower gin and Aviation-style floral Crème de Violette, lengthened with soda.",
            science: "Club soda must be poured cold down a spiral barspoon into the already-strained cocktail to protect carbonation integrity.",
            proTip: "Top with soda after straining, not in the shaker tin, to prevent pressure explosive blowout.",
            flavorTags: ["Effervescent", "Floral Violet", "Zesty Citrus"]
        }
    },
    {
        id: "penicillin",
        name: "Penicillin",
        category: "classic",
        origin: "Est. 2005 • Sam Ross, Milk & Honey, NYC",
        glassware: "rocks",
        method: "shake",
        ice: "large-rock",
        garnish: "orange-peel",
        liquidColorBottom: "#b45309",
        liquidColorTop: "#fcd34d",
        hasFoam: false,
        isCarbonated: false,
        totalTargetVolumeOz: 3.0,
        ingredients: [
            { name: "Blended Scotch", measureOz: 2.0, measureMl: 60, type: "Whisky" },
            { name: "Fresh Lemon Juice", measureOz: 0.75, measureMl: 22.5, type: "Citrus" },
            { name: "Honey-Ginger Syrup", measureOz: 0.75, measureMl: 22.5, type: "Sweetener" },
            { name: "Islay Peated Scotch Float", measureOz: 0.25, measureMl: 7.5, type: "Whisky Float" }
        ],
        decoys: [
            { name: "Bourbon / Rye Whiskey", type: "Spirit" },
            { name: "Simple Syrup", type: "Sweetener" },
            { name: "Ginger Beer", type: "Carbonated" }
        ],
        lore: {
            history: "Created by Sam Ross at the legendary Milk & Honey speakeasy, this modern classic revolutionized Scotch cocktails by floating heavily peated Laphroaig atop spicy honey and ginger.",
            science: "The Islay scotch float creates an aromatic sensory illusion: your nose smells intense peat smoke while your palate tastes silky ginger, honey, and lemon.",
            proTip: "Gently pour the Islay float over the back of a barspoon so it stays stratified on top of the large ice rock.",
            flavorTags: ["Medicinal Smoke", "Fiery Ginger", "Soothing Honey"]
        }
    }
];

/* ==========================================================================
   Application State
   ========================================================================== */
let activeCategory = "all";
let filteredDeck = [...COCKTAIL_DATABASE];
let currentDrinkIndex = 0;

// Current User Selections on Bench
let selectedGlassware = null;
let selectedMethod = null;
let selectedIce = null;
let activeBuild = []; // Array of { name, measureOz, measureMl, type }

// Speed Rail State
let selectedMeasure = { oz: 1.0, ml: 30 };
let currentUnit = "oz"; // 'oz' | 'ml'
let soundEnabled = true;

// Shift Stats
let streak = 0;
let totalAttempts = 0;
let correctAttempts = 0;

/* ==========================================================================
   DOM Element Selectors
   ========================================================================== */
const cocktailCard = document.getElementById("cocktail-card");
const flipToBackBtn = document.getElementById("flip-to-back-btn");
const flipToFrontBtn = document.getElementById("flip-to-front-btn");

// Header trackers
const currentDrinkTracker = document.getElementById("current-drink-tracker");
const scoreAccuracy = document.getElementById("score-accuracy");
const streakCounter = document.getElementById("streak-counter");
const prevDrinkBtn = document.getElementById("prev-drink-btn");
const nextDrinkBtn = document.getElementById("next-drink-btn");

// Unit & Sound
const unitToggleBtn = document.getElementById("unit-toggle-btn");
const unitOz = document.getElementById("unit-oz");
const unitMl = document.getElementById("unit-ml");
const soundBtn = document.getElementById("sound-btn");
const soundOnIcon = document.getElementById("sound-on-icon");
const soundOffIcon = document.getElementById("sound-off-icon");

// Front Face Elements
const drinkCategoryBadge = document.getElementById("drink-category-badge");
const drinkOriginBadge = document.getElementById("drink-origin-badge");
const drinkTitle = document.getElementById("drink-title");
const drinkPrompt = document.getElementById("drink-prompt");
const glassSelectorGroup = document.getElementById("glass-selector-group");
const methodSelectorGroup = document.getElementById("method-selector-group");
const iceSelectorGroup = document.getElementById("ice-selector-group");
const activeIngredientsTray = document.getElementById("active-ingredients-tray");
const clearBuildBtn = document.getElementById("clear-build-btn");
const serveDrinkBtn = document.getElementById("serve-drink-btn");
const specFeedback = document.getElementById("spec-feedback");

// Graphic Model SVG Elements
const liquidFill = document.getElementById("liquid-fill");
const gradStopBottom = document.getElementById("grad-stop-bottom");
const gradStopTop = document.getElementById("grad-stop-top");
const glassInteriorShape = document.getElementById("glass-interior-shape");
const glassContour = document.getElementById("glass-contour");
const glassStem = document.getElementById("glass-stem");
const glassBase = document.getElementById("glass-base");
const iceLargeRock = document.getElementById("ice-large-rock");
const iceCubesGroup = document.getElementById("ice-cubes-group");
const foamHead = document.getElementById("foam-head");
const liquidBubbles = document.getElementById("liquid-bubbles");
const garnishLayer = document.getElementById("garnish-layer");
const garnishOrangePeel = document.getElementById("garnish-orange-peel");
const garnishLimeWheel = document.getElementById("garnish-lime-wheel");
const garnishCherry = document.getElementById("garnish-cherry");
const garnishCoffeeBeans = document.getElementById("garnish-coffee-beans");
const fillVolumeText = document.getElementById("fill-volume-text");
const washlineStatus = document.getElementById("washline-status");
const glassCaptionDisplay = document.getElementById("glass-caption-display");

// Back Face Elements
const loreDrinkName = document.getElementById("lore-drink-name");
const loreMetaBar = document.getElementById("lore-meta-bar");
const loreHistoryText = document.getElementById("lore-history-text");
const loreCanonicalSpecs = document.getElementById("lore-canonical-specs");
const loreFlavorTags = document.getElementById("lore-flavor-tags");
const loreScienceText = document.getElementById("lore-science-text");
const loreProTipText = document.getElementById("lore-pro-tip-text");

// Speed Rail Elements
const measureSelector = document.getElementById("measure-selector");
const ingredientDeck = document.getElementById("ingredient-deck");
const catPills = document.querySelectorAll(".cat-pill");

/* ==========================================================================
   Synthesized Audio Engine (Web Audio API - Lounge Bar FX)
   ========================================================================== */
let audioCtx = null;
function getAudioCtx() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === "suspended") audioCtx.resume();
    return audioCtx;
}

const AudioFX = {
    clink() {
        if (!soundEnabled) return;
        try {
            const ctx = getAudioCtx();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = "sine";
            osc.frequency.setValueAtTime(1400, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.08);
            gain.gain.setValueAtTime(0.12, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.1);
        } catch (e) {}
    },

    pour() {
        if (!soundEnabled) return;
        try {
            const ctx = getAudioCtx();
            // Filtered white noise for liquid stream
            const bufferSize = ctx.sampleRate * 0.18;
            const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
            const data = buffer.getChannelData(0);
            for (let i = 0; i < bufferSize; i++) {
                data[i] = Math.random() * 2 - 1;
            }
            const noise = ctx.createBufferSource();
            noise.buffer = buffer;
            const filter = ctx.createBiquadFilter();
            filter.type = "bandpass";
            filter.frequency.setValueAtTime(900, ctx.currentTime);
            filter.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.18);
            const gain = ctx.createGain();
            gain.gain.setValueAtTime(0.15, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.18);
            noise.connect(filter);
            filter.connect(gain);
            gain.connect(ctx.destination);
            noise.start();
        } catch (e) {}
    },

    chime() {
        if (!soundEnabled) return;
        try {
            const ctx = getAudioCtx();
            [523.25, 659.25, 783.99, 1046.50].forEach((freq, idx) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = "sine";
                osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.07);
                gain.gain.setValueAtTime(0.01, ctx.currentTime + idx * 0.07);
                gain.gain.linearRampToValueAtTime(0.18, ctx.currentTime + idx * 0.07 + 0.03);
                gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.07 + 0.4);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(ctx.currentTime + idx * 0.07);
                osc.stop(ctx.currentTime + idx * 0.07 + 0.4);
            });
        } catch (e) {}
    },

    buzz() {
        if (!soundEnabled) return;
        try {
            const ctx = getAudioCtx();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = "sawtooth";
            osc.frequency.setValueAtTime(140, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(90, ctx.currentTime + 0.25);
            gain.gain.setValueAtTime(0.15, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.25);
        } catch (e) {}
    }
};

/* ==========================================================================
   SVG Glassware Vector Geometry Configs
   ========================================================================== */
const GLASSWARE_GEOMETRY = {
    "rocks": {
        caption: "Old Fashioned / Double Rocks",
        interior: "M80 110 L85 270 Q150 280 215 270 L220 110 Z",
        contour: "M78 105 L84 274 Q150 286 216 274 L222 105 Z",
        stem: "",
        base: "",
        emptyY: 275,
        fullY: 130
    },
    "coupe": {
        caption: "Stemmed Cocktail Coupe (5.5 oz)",
        interior: "M70 110 Q150 240 230 110 Q150 140 70 110 Z",
        contour: "M66 108 Q150 245 234 108 Q150 136 66 108 Z",
        stem: "M150 220 L150 310",
        base: "M110 310 Q150 305 190 310 Z",
        emptyY: 225,
        fullY: 120
    },
    "highball": {
        caption: "Collins / Highball (12 oz)",
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
   Core View Rendering & Drink Loading
   ========================================================================== */
function loadDrink(index) {
    if (filteredDeck.length === 0) return;
    currentDrinkIndex = index;
    const drink = filteredDeck[currentDrinkIndex];

    // Reset Card Flip
    cocktailCard.classList.remove("flipped");

    // Populate Headers & Meta
    drinkCategoryBadge.textContent = drink.category.toUpperCase();
    drinkOriginBadge.textContent = drink.origin;
    drinkTitle.textContent = drink.name;
    currentDrinkTracker.textContent = `${currentDrinkIndex + 1} of ${filteredDeck.length}`;

    // Reset Selections & Tray
    selectedGlassware = null;
    selectedMethod = null;
    selectedIce = null;
    activeBuild = [];

    document.querySelectorAll(".choice-pill").forEach(p => p.classList.remove("selected"));
    specFeedback.className = "feedback-banner hidden";
    specFeedback.textContent = "";

    // Set Default Glass to Rocks view
    updateGlasswareGraphic("rocks");
    updateIceGraphic();
    renderBuildTray();

    // Populate Speed Rail Ingredients (Correct + Decoys, Shuffled)
    renderSpeedRail(drink);

    // Populate Educational Lore Backface
    renderLoreSection(drink);
}

function renderSpeedRail(drink) {
    ingredientDeck.innerHTML = "";

    const allIngs = [
        ...drink.ingredients.map(i => ({ ...i, isTarget: true })),
        ...drink.decoys.map(d => ({ ...d, measureOz: 1.0, measureMl: 30, isTarget: false }))
    ].sort(() => Math.random() - 0.5);

    allIngs.forEach(item => {
        const card = document.createElement("button");
        card.classList.add("ing-card");
        card.innerHTML = `
            <span class="ing-type-tag">${item.type || 'Ingredient'}</span>
            <strong>${item.name}</strong>
        `;
        card.addEventListener("click", () => {
            addIngredientToBuild(item);
        });
        ingredientDeck.appendChild(card);
    });
}

function renderLoreSection(drink) {
    loreDrinkName.textContent = drink.name;
    loreMetaBar.textContent = drink.origin;
    loreHistoryText.textContent = drink.lore.history;
    loreScienceText.innerHTML = `<strong>Balance & Dilution:</strong> ${drink.lore.science}`;
    loreProTipText.textContent = drink.lore.proTip;

    // Canonical Specs List
    loreCanonicalSpecs.innerHTML = "";
    drink.ingredients.forEach(spec => {
        const row = document.createElement("div");
        row.classList.add("canonical-spec-item");
        const measureDisplay = spec.measureOz === "dash" ? "2 Dashes" : (currentUnit === "oz" ? `${spec.measureOz} oz` : `${spec.measureMl} ml`);
        row.innerHTML = `
            <span>${spec.name}</span>
            <strong>${measureDisplay}</strong>
        `;
        loreCanonicalSpecs.appendChild(row);
    });

    // Flavor tags
    loreFlavorTags.innerHTML = "";
    drink.lore.flavorTags.forEach(tag => {
        const pill = document.createElement("span");
        pill.classList.add("flavor-pill");
        pill.textContent = tag;
        loreFlavorTags.appendChild(pill);
    });
}

/* ==========================================================================
   Graphic Model Dynamic Updates (SVG Liquid Physics)
   ========================================================================== */
function updateGlasswareGraphic(glassType) {
    const geo = GLASSWARE_GEOMETRY[glassType] || GLASSWARE_GEOMETRY["rocks"];
    
    glassInteriorShape.setAttribute("d", geo.interior);
    glassContour.setAttribute("d", geo.contour);

    if (geo.stem) {
        glassStem.classList.remove("hidden");
        glassStem.setAttribute("d", geo.stem);
        glassBase.classList.remove("hidden");
        glassBase.setAttribute("d", geo.base);
    } else {
        glassStem.classList.add("hidden");
        glassBase.classList.add("hidden");
    }

    glassCaptionDisplay.textContent = geo.caption;
    updateLiquidLevel();
}

function updateLiquidLevel() {
    const drink = filteredDeck[currentDrinkIndex];
    const geo = GLASSWARE_GEOMETRY[selectedGlassware || "rocks"];

    // Calculate total ounces currently in active build
    let totalOz = 0;
    activeBuild.forEach(item => {
        if (typeof item.measureOz === "number") totalOz += item.measureOz;
        else totalOz += 0.1; // small dash
    });

    const targetMax = drink.totalTargetVolumeOz || 3.0;
    const fillRatio = Math.min(totalOz / targetMax, 1.05);

    const emptyY = geo.emptyY;
    const fullY = geo.fullY;
    const currentY = emptyY - (emptyY - fullY) * fillRatio;

    // Smooth SVG animation
    liquidFill.setAttribute("y", currentY);
    liquidFill.setAttribute("height", 360 - currentY);

    // Liquid gradient colors
    gradStopBottom.setAttribute("stop-color", drink.liquidColorBottom);
    gradStopTop.setAttribute("stop-color", drink.liquidColorTop);

    // Carbonation / Foam
    liquidBubbles.style.display = drink.isCarbonated && fillRatio > 0.4 ? "block" : "none";
    foamHead.style.opacity = drink.hasFoam && fillRatio > 0.7 ? "0.85" : "0";

    // Text Badges
    const displayVolume = currentUnit === "oz" 
        ? `${totalOz.toFixed(2)} oz` 
        : `${(totalOz * 29.57).toFixed(0)} ml`;
    
    fillVolumeText.textContent = totalOz === 0 ? "0.0 oz" : displayVolume;

    if (fillRatio === 0) {
        washlineStatus.textContent = "Empty Glass";
    } else if (fillRatio < 0.6) {
        washlineStatus.textContent = "Underfilled";
    } else if (fillRatio <= 1.0) {
        washlineStatus.textContent = "Perfect Washline";
    } else {
        washlineStatus.textContent = "Overfilled";
    }
}

function updateIceGraphic() {
    iceLargeRock.classList.add("hidden");
    iceCubesGroup.classList.add("hidden");

    if (selectedIce === "large-rock") {
        iceLargeRock.classList.remove("hidden");
    } else if (selectedIce === "cubed" || selectedIce === "crushed") {
        iceCubesGroup.classList.remove("hidden");
    }
}

function updateGarnishGraphic(showGarnish = false) {
    if (!showGarnish) {
        garnishLayer.setAttribute("opacity", "0");
        return;
    }

    const drink = filteredDeck[currentDrinkIndex];
    garnishOrangePeel.classList.add("hidden");
    garnishLimeWheel.classList.add("hidden");
    garnishCherry.classList.add("hidden");
    garnishCoffeeBeans.classList.add("hidden");

    if (drink.garnish === "orange-peel") garnishOrangePeel.classList.remove("hidden");
    else if (drink.garnish === "lime-wheel") garnishLimeWheel.classList.remove("hidden");
    else if (drink.garnish === "cherry") garnishCherry.classList.remove("hidden");
    else if (drink.garnish === "coffee-beans") garnishCoffeeBeans.classList.remove("hidden");

    garnishLayer.setAttribute("opacity", "1");
}

/* ==========================================================================
   User Interaction: Pouring & Selecting Specs
   ========================================================================== */
function addIngredientToBuild(item) {
    AudioFX.pour();
    const measure = { ...selectedMeasure };

    activeBuild.push({
        name: item.name,
        measureOz: measure.oz,
        measureMl: measure.ml,
        type: item.type
    });

    renderBuildTray();
    updateLiquidLevel();
}

function removeIngredientFromBuild(index) {
    AudioFX.clink();
    activeBuild.splice(index, 1);
    renderBuildTray();
    updateLiquidLevel();
}

function renderBuildTray() {
    activeIngredientsTray.innerHTML = "";

    if (activeBuild.length === 0) {
        activeIngredientsTray.innerHTML = `<div class="empty-tray-notice">Select ingredients from the speed rail below...</div>`;
        return;
    }

    activeBuild.forEach((item, index) => {
        const pill = document.createElement("div");
        pill.classList.add("poured-pill");
        const measureDisplay = item.measureOz === "dash" ? "2 Dashes" : (currentUnit === "oz" ? `${item.measureOz} oz` : `${item.measureMl} ml`);
        pill.innerHTML = `
            <span class="poured-measure">${measureDisplay}</span>
            <span>${item.name}</span>
            <span class="poured-remove" title="Remove ingredient">✕</span>
        `;
        pill.addEventListener("click", () => removeIngredientFromBuild(index));
        activeIngredientsTray.appendChild(pill);
    });
}

// Choice Pill Listeners (Glassware, Method, Ice)
glassSelectorGroup.addEventListener("click", (e) => {
    const btn = e.target.closest(".choice-pill");
    if (!btn) return;
    AudioFX.clink();
    glassSelectorGroup.querySelectorAll(".choice-pill").forEach(p => p.classList.remove("selected"));
    btn.classList.add("selected");
    selectedGlassware = btn.dataset.choice;
    updateGlasswareGraphic(selectedGlassware);
});

methodSelectorGroup.addEventListener("click", (e) => {
    const btn = e.target.closest(".choice-pill");
    if (!btn) return;
    AudioFX.clink();
    methodSelectorGroup.querySelectorAll(".choice-pill").forEach(p => p.classList.remove("selected"));
    btn.classList.add("selected");
    selectedMethod = btn.dataset.choice;
});

iceSelectorGroup.addEventListener("click", (e) => {
    const btn = e.target.closest(".choice-pill");
    if (!btn) return;
    AudioFX.clink();
    iceSelectorGroup.querySelectorAll(".choice-pill").forEach(p => p.classList.remove("selected"));
    btn.classList.add("selected");
    selectedIce = btn.dataset.choice;
    updateIceGraphic();
});

clearBuildBtn.addEventListener("click", () => {
    AudioFX.clink();
    activeBuild = [];
    renderBuildTray();
    updateLiquidLevel();
    updateGarnishGraphic(false);
});

/* ==========================================================================
   Spec Verification Engine (Detailed Pedagogical Bartender Feedback)
   ========================================================================== */
function verifySpec() {
    const drink = filteredDeck[currentDrinkIndex];
    totalAttempts++;

    const errors = [];

    // 1. Validate Glassware
    if (!selectedGlassware) {
        errors.push("Missing Glassware selection.");
    } else if (selectedGlassware !== drink.glassware) {
        errors.push(`Incorrect Glass: ${drink.name} belongs in a ${drink.glassware.toUpperCase()}.`);
    }

    // 2. Validate Method
    if (!selectedMethod) {
        errors.push("Missing preparation Method.");
    } else if (selectedMethod !== drink.method) {
        const reason = drink.method === "stir" 
            ? "Stir drinks containing only spirits/sugars for clarity." 
            : "Shake drinks with citrus or cream to emulsify and aerate.";
        errors.push(`Incorrect Method: Should be ${drink.method.toUpperCase()} (${reason})`);
    }

    // 3. Validate Ice
    if (!selectedIce) {
        errors.push("Missing Ice spec selection.");
    } else if (selectedIce !== drink.ice) {
        errors.push(`Incorrect Ice: This cocktail requires ${drink.ice.replace("-", " ").toUpperCase()}.`);
    }

    // 4. Validate Ingredients & Proportions
    if (activeBuild.length === 0) {
        errors.push("The glass is empty! Add ingredients from the speed rail.");
    } else {
        // Check for missing ingredients
        drink.ingredients.forEach(target => {
            const found = activeBuild.find(b => b.name === target.name);
            if (!found) {
                errors.push(`Missing: ${target.name}`);
            } else if (target.measureOz !== "dash" && Math.abs(found.measureOz - target.measureOz) > 0.05) {
                errors.push(`Measurement off on ${target.name}: Target is ${target.measureOz} oz (poured ${found.measureOz} oz).`);
            }
        });

        // Check for extraneous/decoy ingredients
        activeBuild.forEach(poured => {
            const isExpected = drink.ingredients.some(i => i.name === poured.name);
            if (!isExpected) {
                errors.push(`Extraneous Ingredient: ${poured.name} does not belong in this spec.`);
            }
        });
    }

    // Process Evaluation
    specFeedback.classList.remove("hidden", "success", "error");

    if (errors.length === 0) {
        // Perfect Pour
        correctAttempts++;
        streak++;
        AudioFX.chime();
        updateGarnishGraphic(true);
        specFeedback.classList.add("success");
        specFeedback.innerHTML = `
            <strong>✦ FLAWLESS SPEC!</strong> You nailed the exact glassware, technique, and balanced pour.
        `;
    } else {
        // Critique Feedback
        streak = 0;
        AudioFX.buzz();
        updateGarnishGraphic(false);
        specFeedback.classList.add("error");
        specFeedback.innerHTML = `
            <strong>✕ ADJUST YOUR SPEC:</strong>
            <ul style="margin-left: 1.2rem; margin-top: 0.35rem;">
                ${errors.map(err => `<li>${err}</li>`).join("")}
            </ul>
        `;
    }

    // Update Stats
    streakCounter.textContent = `${streak} 🔥`;
    const accuracy = totalAttempts > 0 ? Math.round((correctAttempts / totalAttempts) * 100) : 100;
    scoreAccuracy.textContent = `${accuracy}%`;
}

serveDrinkBtn.addEventListener("click", verifySpec);

/* ==========================================================================
   Navigation & Category Filtering
   ========================================================================== */
catPills.forEach(pill => {
    pill.addEventListener("click", () => {
        catPills.forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        activeCategory = pill.dataset.category;

        if (activeCategory === "all") {
            filteredDeck = [...COCKTAIL_DATABASE];
        } else {
            filteredDeck = COCKTAIL_DATABASE.filter(d => d.category === activeCategory);
        }

        currentDrinkIndex = 0;
        loadDrink(currentDrinkIndex);
    });
});

prevDrinkBtn.addEventListener("click", () => {
    AudioFX.clink();
    const newIdx = (currentDrinkIndex - 1 + filteredDeck.length) % filteredDeck.length;
    loadDrink(newIdx);
});

nextDrinkBtn.addEventListener("click", () => {
    AudioFX.clink();
    const newIdx = (currentDrinkIndex + 1) % filteredDeck.length;
    loadDrink(newIdx);
});

/* ==========================================================================
   Speed Rail Measure Controls & Unit Toggling
   ========================================================================== */
measureSelector.addEventListener("click", (e) => {
    const chip = e.target.closest(".measure-chip");
    if (!chip) return;
    AudioFX.clink();
    measureSelector.querySelectorAll(".measure-chip").forEach(c => c.classList.remove("active"));
    chip.classList.add("active");

    const oz = chip.dataset.oz;
    const ml = chip.dataset.ml;
    selectedMeasure = {
        oz: oz === "dash" ? "dash" : parseFloat(oz),
        ml: ml === "dash" ? "dash" : parseFloat(ml)
    };
});

unitToggleBtn.addEventListener("click", () => {
    AudioFX.clink();
    currentUnit = currentUnit === "oz" ? "ml" : "oz";
    if (currentUnit === "oz") {
        unitOz.classList.add("active");
        unitMl.classList.remove("active");
    } else {
        unitMl.classList.add("active");
        unitOz.classList.remove("active");
    }
    renderBuildTray();
    updateLiquidLevel();
    renderLoreSection(filteredDeck[currentDrinkIndex]);
});

// Sound Toggle
soundBtn.addEventListener("click", () => {
    soundEnabled = !soundEnabled;
    if (soundEnabled) {
        soundOnIcon.classList.remove("hidden");
        soundOffIcon.classList.add("hidden");
        AudioFX.clink();
    } else {
        soundOnIcon.classList.add("hidden");
        soundOffIcon.classList.remove("hidden");
    }
});

// 3D Card Flip Triggers
flipToBackBtn.addEventListener("click", () => {
    AudioFX.clink();
    cocktailCard.classList.add("flipped");
});

flipToFrontBtn.addEventListener("click", () => {
    AudioFX.clink();
    cocktailCard.classList.remove("flipped");
});

// Keyboard Accessibility & Shortcuts
window.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        verifySpec();
    } else if (e.key === "ArrowRight") {
        nextDrinkBtn.click();
    } else if (e.key === "ArrowLeft") {
        prevDrinkBtn.click();
    } else if (e.key === "m" || e.key === "M") {
        soundBtn.click();
    } else if (e.key === "f" || e.key === "F") {
        cocktailCard.classList.toggle("flipped");
    }
});

/* ==========================================================================
   App Boot
   ========================================================================== */
loadDrink(0);