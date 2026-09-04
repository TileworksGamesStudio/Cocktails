/* ==========================================================================
   SPECS // Mobile Speakeasy Card Masterclass Engine
   Single-Screen Native Deck & Card Study Game
   ========================================================================== */

// Embedded database fallback ensures instant loading with zero CORS blocks
const COCKTAILS_MASTER_DB = [
    {
        id: "old-fashioned",
        name: "Old Fashioned",
        category: "Pre-Prohibition",
        era: "Circa 1880s • Louisville, KY",
        glassware: "rocks",
        glasswareName: "Double Rocks",
        method: "stir",
        methodName: "Stirred over Ice",
        ingredients: ["Bourbon / Rye Whiskey", "Demerara Syrup", "Angostura Bitters", "Orange Peel"],
        decoys: ["Sweet Vermouth", "Campari", "Lemon Juice", "Club Soda"],
        canonicalRecipe: [
            { item: "Bourbon or Rye Whiskey", amount: "2.0 oz (60 ml)" },
            { item: "Demerara Syrup", amount: "0.25 oz (7.5 ml)" },
            { item: "Angostura Bitters", amount: "2–3 Dashes" },
            { item: "Orange Peel", amount: "Expressed & Inserted" }
        ],
        tastingNotes: ["Spirit-Forward", "Charred Oak", "Caramelized Sugar", "Warm Spice"],
        history: "Born when 19th-century patrons grew exhausted by elaborate bar novelties, ordering their whiskey prepared the 'old-fashioned way'—spirit, sugar, water, and aromatic bitters.",
        proTip: "Express orange peel oils firmly over the rim and liquid surface. Never muddle cocktail cherries into the liquid; keep the silhouette clear and dense.",
        techniqueLore: "Stir gently over a single clear ice block for 30–40 seconds until chilled to 28°F. This provides ~22% dilution without cloudy aeration bubbles."
    },
    {
        id: "negroni",
        name: "Negroni",
        category: "Classic Aperitivo",
        era: "Est. 1919 • Caffè Casoni, Florence",
        glassware: "rocks",
        glasswareName: "Double Rocks",
        method: "stir",
        methodName: "Stirred over Ice",
        ingredients: ["London Dry Gin", "Campari", "Sweet Vermouth", "Orange Peel"],
        decoys: ["Dry Vermouth", "Aperol", "Club Soda", "Tequila Blanco"],
        canonicalRecipe: [
            { item: "London Dry Gin", amount: "1.0 oz (30 ml)" },
            { item: "Campari", amount: "1.0 oz (30 ml)" },
            { item: "Sweet Vermouth", amount: "1.0 oz (30 ml)" },
            { item: "Orange Twist", amount: "Expressed Over Top" }
        ],
        tastingNotes: ["Bittersweet", "Pungent Juniper", "Bitter Orange", "Herbal Gentian"],
        history: "Count Camillo Negroni famously requested bartender Forsco Scarselli fortify his favorite Americano by swapping effervescent club soda for pungent London Dry gin.",
        proTip: "Keep your sweet vermouth refrigerated once uncorked; oxidized fortified wine flattens the herbal brightness of this legendary trio.",
        techniqueLore: "The mathematical symmetry (1:1:1) requires precise chilling so the bitter gentian root integrates with vermouth botanicals without watery over-dilution."
    },
    {
        id: "margarita",
        name: "Classic Margarita",
        category: "Agave Classic",
        era: "Est. 1938 • Baja California",
        glassware: "coupe",
        glasswareName: "Cocktail Coupe",
        method: "shake",
        methodName: "Vigorously Shaken",
        ingredients: ["Blanco Tequila", "Cointreau", "Fresh Lime Juice", "Agave Nectar"],
        decoys: ["Mezcal", "Simple Syrup", "Lemon Juice", "Orange Bitters"],
        canonicalRecipe: [
            { item: "Blanco Tequila (100% Agave)", amount: "2.0 oz (60 ml)" },
            { item: "Cointreau / Triple Sec", amount: "0.75 oz (22.5 ml)" },
            { item: "Fresh Lime Juice", amount: "0.75 oz (22.5 ml)" },
            { item: "Agave Nectar", amount: "1 Barspoon" }
        ],
        tastingNotes: ["Crisp Citrus", "Earthy Agave", "Bright Saline", "Candied Orange"],
        history: "A descendant of the 1930s Daisy family of cocktails (spirit + citrus + orange liqueur), reimagined to spotlight authentic Mexican blue agave spirits.",
        proTip: "Rim only half of the glass perimeter with flake sea salt. This allows the guest to choose when they want saline contrast and when they want pure citrus.",
        techniqueLore: "Vigorous shaking with large, dense cubes shatters microscopic ice shards through the citrus pectin, producing an opaque, frosty velvet texture."
    },
    {
        id: "espresso-martini",
        name: "Espresso Martini",
        category: "Modern Craft",
        era: "Est. 1983 • Soho Brasserie, London",
        glassware: "coupe",
        glasswareName: "Cocktail Coupe",
        method: "shake",
        methodName: "Vigorously Shaken",
        ingredients: ["Vodka", "Coffee Liqueur", "Fresh Espresso", "Simple Syrup"],
        decoys: ["Irish Cream", "Cold Brew", "Dark Rum", "Cacao Liqueur"],
        canonicalRecipe: [
            { item: "Vodka", amount: "1.5 oz (45 ml)" },
            { item: "Coffee Liqueur (e.g. Kahlúa)", amount: "0.75 oz (22.5 ml)" },
            { item: "Fresh Pulled Espresso", amount: "1.0 oz (30 ml)" },
            { item: "Rich Simple Syrup (2:1)", amount: "0.25 oz (7.5 ml)" }
        ],
        tastingNotes: ["Velveteen Crema", "Roasted Cocoa", "Dark Toffee", "Clean Finish"],
        history: "Invented by London icon Dick Bradsell when a supermodel notoriously pulled up to his bar asking for a drink that would 'wake me up and then mess me up.'",
        proTip: "Pull the espresso shot right before shaking; natural crema oils emulsify under hard aeration to create a dense, mousse-like foam head.",
        techniqueLore: "Float three espresso beans centered on the foam head in a tight triad, traditionally symbolizing health, wealth, and happiness."
    },
    {
        id: "daiquiri",
        name: "Authentic Daiquiri",
        category: "Cuban Heritage",
        era: "Est. 1898 • Daiquirí, Cuba",
        glassware: "coupe",
        glasswareName: "Cocktail Coupe",
        method: "shake",
        methodName: "Vigorously Shaken",
        ingredients: ["White Rum", "Fresh Lime Juice", "Demerara Simple Syrup"],
        decoys: ["Dark Rum", "Triple Sec", "Lemon Juice", "Maraschino Liqueur"],
        canonicalRecipe: [
            { item: "Light Cuban/Puerto Rican Rum", amount: "2.0 oz (60 ml)" },
            { item: "Fresh Lime Juice", amount: "0.75 oz (22.5 ml)" },
            { item: "Rich Demerara Syrup (2:1)", amount: "0.75 oz (22.5 ml)" }
        ],
        tastingNotes: ["Electric Citrus", "Cane Grass", "Mineral Crispness", "Silky Balance"],
        history: "Originated when American mining engineer Jennings Cox ran out of gin at a gathering in Cuba and mixed local sugar cane rum with freshly plucked limes.",
        proTip: "The classic Daiquiri is the ultimate bartender test. There is nowhere to hide poor ice technique or synthetic lime juice.",
        techniqueLore: "Double-strain through a fine mesh conical strainer to catch tiny ice shards so the mouthfeel remains silken from first sip to last."
    },
    {
        id: "manhattan",
        name: "Manhattan",
        category: "Pre-Prohibition",
        era: "Est. 1870s • Manhattan Club, NYC",
        glassware: "nick-nora",
        glasswareName: "Nick & Nora",
        method: "stir",
        methodName: "Stirred over Ice",
        ingredients: ["Rye Whiskey", "Sweet Vermouth", "Angostura Bitters", "Brandied Cherry"],
        decoys: ["Bourbon Whiskey", "Dry Vermouth", "Orange Bitters", "Campari"],
        canonicalRecipe: [
            { item: "Straight Rye Whiskey", amount: "2.0 oz (60 ml)" },
            { item: "Sweet Italian Vermouth", amount: "1.0 oz (30 ml)" },
            { item: "Angostura Bitters", amount: "2 Dashes" },
            { item: "Luxardo Brandied Cherry", amount: "1 Garnish" }
        ],
        tastingNotes: ["Dark Cherry", "Spicy Rye Grain", "Warming Botanical", "Vanilla Oak"],
        history: "A timeless masterpiece created in New York City. The peppery rye grain cuts cleanly across the lush, fortified wine herbal sweetness.",
        proTip: "Always reach for spicy 100-proof Straight Rye rather than sweeter Bourbon to avoid a flabby, overly saccharine profile.",
        techniqueLore: "Serve chilled in a stemmed Nick & Nora glass to prevent the drinker's hand warmth from raising the serving temperature."
    },
    {
        id: "penicillin",
        name: "Penicillin",
        category: "Modern Classic",
        era: "Est. 2005 • Milk & Honey, NYC",
        glassware: "rocks",
        glasswareName: "Double Rocks",
        method: "shake",
        methodName: "Vigorously Shaken",
        ingredients: ["Blended Scotch", "Fresh Lemon Juice", "Honey-Ginger Syrup", "Peated Islay Scotch"],
        decoys: ["Bourbon Whiskey", "Simple Syrup", "Ginger Beer", "Orange Bitters"],
        canonicalRecipe: [
            { item: "Blended Scotch Whisky", amount: "2.0 oz (60 ml)" },
            { item: "Fresh Lemon Juice", amount: "0.75 oz (22.5 ml)" },
            { item: "Honey-Ginger Syrup", amount: "0.75 oz (22.5 ml)" },
            { item: "Peated Islay Scotch", amount: "0.25 oz (Float)" }
        ],
        tastingNotes: ["Campfire Peat Smoke", "Candied Ginger", "Soothing Wild Honey", "Bright Lemon"],
        history: "Devised by Australian pioneer Sam Ross in NYC. It quickly became hailed as the first undisputed worldwide modern classic of the 21st century.",
        proTip: "Pour the smoky Islay Scotch gently over an inverted barspoon directly on top of the poured drink so it floats aromatically.",
        techniqueLore: "The olfactory contrast is key: the nose encounters intense Islay peat smoke, while the palate receives warming ginger, honey, and bright citrus."
    },
    {
        id: "sazerac",
        name: "New Orleans Sazerac",
        category: "Pre-Prohibition",
        era: "Est. 1850s • New Orleans, LA",
        glassware: "rocks",
        glasswareName: "Double Rocks",
        method: "stir",
        methodName: "Stirred over Ice",
        ingredients: ["Rye Whiskey", "Peychaud's Bitters", "Demerara Sugar", "Absinthe Rinse"],
        decoys: ["Bourbon Whiskey", "Angostura Bitters", "Sweet Vermouth", "Lemon Juice"],
        canonicalRecipe: [
            { item: "Rye Whiskey", amount: "2.0 oz (60 ml)" },
            { item: "Peychaud's Bitters", amount: "3 Dashes" },
            { item: "Angostura Bitters", amount: "1 Dash" },
            { item: "Demerara Sugar Cube / Syrup", amount: "1 Cube / 0.25 oz" },
            { item: "Absinthe", amount: "Rinse Glass" }
        ],
        tastingNotes: ["Anise & Fennel", "Peppery Spice", "Bright Floral Bitters", "Zesty Lemon"],
        history: "America's earliest known branded cocktail, evolving from French cognac to Maryland rye whiskey, forever bound to New Orleans culture.",
        proTip: "Swirl a few drops of absinthe in a chilled glass and dump the excess before straining the cocktail. The aroma should haunt, not overwhelm.",
        techniqueLore: "Serve without ice (neat) in a chilled rocks glass. Express a lemon twist over the surface, then discard the peel before serving."
    },
    {
        id: "french-75",
        name: "French 75",
        category: "Prohibition Classic",
        era: "Est. 1915 • Harry's New York Bar, Paris",
        glassware: "highball",
        glasswareName: "Highball / Flute",
        method: "shake",
        methodName: "Shaken & Topped",
        ingredients: ["London Dry Gin", "Fresh Lemon Juice", "Simple Syrup", "Brut Champagne"],
        decoys: ["Vodka", "Club Soda", "Lime Juice", "Orange Liqueur"],
        canonicalRecipe: [
            { item: "London Dry Gin", amount: "1.0 oz (30 ml)" },
            { item: "Fresh Lemon Juice", amount: "0.5 oz (15 ml)" },
            { item: "Simple Syrup", amount: "0.5 oz (15 ml)" },
            { item: "Brut Champagne", amount: "Top (~2.5 oz)" }
        ],
        tastingNotes: ["Effervescent", "Crisp Botanical", "Tart Lemon", "Dry Toast"],
        history: "Named for the devastating French 75mm artillery cannon, said to kick with identical force. Popularized in Paris and immortalized in the Savoy Cocktail Book.",
        proTip: "Use bone-dry Brut Champagne; sweetness from cheap sparkling wine destroys the brisk, razor-sharp lemon acidity.",
        techniqueLore: "Shake the gin, lemon, and syrup hard with ice, strain into your chilled glass, and gently float cold Champagne on top to preserve carbonation."
    },
    {
        id: "aviation",
        name: "Aviation",
        category: "Pre-Prohibition",
        era: "Est. 1916 • Hotel Wallick, NYC",
        glassware: "coupe",
        glasswareName: "Cocktail Coupe",
        method: "shake",
        methodName: "Vigorously Shaken",
        ingredients: ["London Dry Gin", "Maraschino Liqueur", "Crème de Violette", "Fresh Lemon Juice"],
        decoys: ["Vodka", "Triple Sec", "Blue Curaçao", "Sweet Vermouth"],
        canonicalRecipe: [
            { item: "London Dry Gin", amount: "2.0 oz (60 ml)" },
            { item: "Maraschino Liqueur (Luxardo)", amount: "0.5 oz (15 ml)" },
            { item: "Crème de Violette", amount: "0.25 oz (7.5 ml)" },
            { item: "Fresh Lemon Juice", amount: "0.75 oz (22.5 ml)" }
        ],
        tastingNotes: ["Floral Violet", "Sour Cherry Stone", "Crisp Pine", "Powdered Blossom"],
        history: "Published by Hugo Ensslin on the eve of Prohibition, named for its atmospheric, sky-blue hue reminiscent of early 20th-century aviation dawn.",
        proTip: "A heavy hand with Crème de Violette turns the drink into lavender hand-soap. Treat violette with the caution of liquid perfume.",
        techniqueLore: "Hard shaking with cold ice yields a cloudy, pale sky-blue wash with a delicate crystalline sheen."
    }
];

/* ==========================================================================
   Luxury Vector Glassware & Hardware Registry
   ========================================================================== */
const HARDWARE_LIBRARY = {
    glassware: [
        {
            id: "rocks",
            name: "Double Rocks",
            svg: `<svg viewBox="0 0 24 24" class="hw-icon-svg"><path d="M5 4 L7 20 Q12 21 17 20 L19 4 Z" /><line x1="4.5" y1="4" x2="19.5" y2="4" stroke-width="1.5"/><path d="M7 17 Q12 18 17 17" opacity="0.5"/></svg>`
        },
        {
            id: "coupe",
            name: "Cocktail Coupe",
            svg: `<svg viewBox="0 0 24 24" class="hw-icon-svg"><path d="M4 6 Q12 15 20 6 Z" /><line x1="12" y1="13" x2="12" y2="20" stroke-width="1.8"/><path d="M8 20 Q12 19 16 20" stroke-width="1.8"/></svg>`
        },
        {
            id: "highball",
            name: "Highball",
            svg: `<svg viewBox="0 0 24 24" class="hw-icon-svg"><path d="M7 3 L8 21 Q12 21.5 16 21 L17 3 Z" /><line x1="6.5" y1="3" x2="17.5" y2="3" stroke-width="1.5"/></svg>`
        },
        {
            id: "nick-nora",
            name: "Nick & Nora",
            svg: `<svg viewBox="0 0 24 24" class="hw-icon-svg"><path d="M6 5 C6 14 18 14 18 5 Z" /><line x1="12" y1="12.5" x2="12" y2="20" stroke-width="1.8"/><path d="M8 20 Q12 19 16 20" stroke-width="1.8"/></svg>`
        }
    ],
    methods: [
        {
            id: "stir",
            name: "Stirred (Ice)",
            svg: `<svg viewBox="0 0 24 24" class="hw-icon-svg"><circle cx="12" cy="12" r="8" stroke-dasharray="3,3"/><path d="M12 4 L12 20" /><path d="M12 20 C10 20 10 22 12 22 C14 22 14 20 12 20" /></svg>`
        },
        {
            id: "shake",
            name: "Vigorous Shake",
            svg: `<svg viewBox="0 0 24 24" class="hw-icon-svg"><path d="M7 8 L17 8 L15 20 L9 20 Z" /><path d="M8 8 L9 4 L15 4 L16 8 Z" /><line x1="6" y1="12" x2="18" y2="12" stroke-width="1.2"/></svg>`
        }
    ]
};

/* ==========================================================================
   State Architecture
   ========================================================================== */
let cocktailsDB = [...COCKTAILS_MASTER_DB];
let currentDrinkIndex = 0;
let difficultyMode = "medium"; // 'easy' | 'medium' | 'hard'
let streak = 0;
let audioEnabled = true;

// Active Card Puzzle State
let puzzleState = {
    glassTarget: "",
    userGlass: null,
    glassRevealed: false,

    methodTarget: "",
    userMethod: null,
    methodRevealed: false,

    // Ingredients array: { name, isRevealed, userSelection }
    ingredients: [],
    decoysPool: []
};

/* ==========================================================================
   DOM Elements Cache
   ========================================================================== */
const dom = {
    // Top Bar
    diffControl: document.getElementById("diff-control"),
    soundBtn: document.getElementById("sound-btn"),
    soundIconOn: document.getElementById("sound-icon-on"),
    soundIconOff: document.getElementById("sound-icon-off"),
    prevCardBtn: document.getElementById("prev-card-btn"),
    nextCardBtn: document.getElementById("next-card-btn"),
    cardCounter: document.getElementById("card-counter"),
    streakCounter: document.getElementById("streak-counter"),

    // Card Core
    activeCard: document.getElementById("active-card"),
    frontCategory: document.getElementById("front-category"),
    frontEra: document.getElementById("front-era"),
    frontDrinkName: document.getElementById("front-drink-name"),
    slotGlass: document.getElementById("slot-glass"),
    displayGlass: document.getElementById("display-glass"),
    slotMethod: document.getElementById("slot-method"),
    displayMethod: document.getElementById("display-method"),
    missingCountHint: document.getElementById("missing-count-hint"),
    ingredientSlotsContainer: document.getElementById("ingredient-slots-container"),
    cardStatusBar: document.getElementById("card-status-bar"),
    statusHintText: document.getElementById("status-hint-text"),

    // Back Card Dossier
    backDrinkName: document.getElementById("back-drink-name"),
    flipBackBtn: document.getElementById("flip-back-btn"),
    backCanonicalRecipe: document.getElementById("back-canonical-recipe"),
    backTastingTags: document.getElementById("back-tasting-tags"),
    backHistoryText: document.getElementById("back-history-text"),
    backProtipText: document.getElementById("back-protip-text"),
    backTechniqueText: document.getElementById("back-technique-text"),
    advanceNextBtn: document.getElementById("advance-next-btn"),

    // Bottom Selection Dock
    rackTabs: document.getElementById("rack-tabs"),
    tabIngCount: document.getElementById("tab-ing-count"),
    paneIngredients: document.getElementById("pane-ingredients"),
    paneHardware: document.getElementById("pane-hardware"),
    ingredientsTray: document.getElementById("ingredients-tray"),
    glassTray: document.getElementById("glass-tray"),
    methodTray: document.getElementById("method-tray"),

    // Sparkle Canvas
    sparkleCanvas: document.getElementById("sparkle-canvas")
};

/* ==========================================================================
   Web Audio API Sound Engine (Zero external assets)
   ========================================================================== */
let audioCtx = null;
function getAudioContext() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === "suspended") audioCtx.resume();
    return audioCtx;
}

const AudioFX = {
    pop() {
        if (!audioEnabled) return;
        try {
            const ctx = getAudioContext();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.frequency.setValueAtTime(450, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(160, ctx.currentTime + 0.05);
            gain.gain.setValueAtTime(0.12, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.05);
        } catch(e) {}
    },
    remove() {
        if (!audioEnabled) return;
        try {
            const ctx = getAudioContext();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.frequency.setValueAtTime(220, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(130, ctx.currentTime + 0.06);
            gain.gain.setValueAtTime(0.1, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.06);
        } catch(e) {}
    },
    tab() {
        if (!audioEnabled) return;
        try {
            const ctx = getAudioContext();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = "sine";
            osc.frequency.setValueAtTime(600, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(900, ctx.currentTime + 0.03);
            gain.gain.setValueAtTime(0.05, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.03);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.03);
        } catch(e) {}
    },
    error() {
        if (!audioEnabled) return;
        try {
            const ctx = getAudioContext();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = "sawtooth";
            osc.frequency.setValueAtTime(140, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(90, ctx.currentTime + 0.18);
            gain.gain.setValueAtTime(0.12, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.18);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.18);
        } catch(e) {}
    },
    sparkleChord() {
        if (!audioEnabled) return;
        try {
            const ctx = getAudioContext();
            // Speakeasy warm major 9th progression: C5 - E5 - G5 - B5 - D6
            const chord = [523.25, 659.25, 783.99, 987.77, 1174.66];
            chord.forEach((freq, idx) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = "triangle";
                osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.07);
                gain.gain.setValueAtTime(0.001, ctx.currentTime + idx * 0.07);
                gain.gain.linearRampToValueAtTime(0.08, ctx.currentTime + idx * 0.07 + 0.02);
                gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + idx * 0.07 + 0.5);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(ctx.currentTime + idx * 0.07);
                osc.stop(ctx.currentTime + idx * 0.07 + 0.5);
            });
        } catch(e) {}
    },
    flip() {
        if (!audioEnabled) return;
        try {
            const ctx = getAudioContext();
            const bufferSize = ctx.sampleRate * 0.08;
            const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
            const data = buffer.getChannelData(0);
            for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
            const noise = ctx.createBufferSource();
            noise.buffer = buffer;
            const filter = ctx.createBiquadFilter();
            filter.type = "bandpass";
            filter.frequency.setValueAtTime(800, ctx.currentTime);
            filter.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.08);
            const gain = ctx.createGain();
            gain.gain.setValueAtTime(0.09, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
            noise.connect(filter);
            filter.connect(gain);
            gain.connect(ctx.destination);
            noise.start();
        } catch(e) {}
    }
};

/* ==========================================================================
   Sparkle Particle Canvas Celebration FX
   ========================================================================== */
let particles = [];
let animFrameId = null;

function resizeCanvas() {
    dom.sparkleCanvas.width = window.innerWidth;
    dom.sparkleCanvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

function triggerSparkleBurst() {
    const cardRect = dom.activeCard.getBoundingClientRect();
    const originX = cardRect.left + cardRect.width / 2;
    const originY = cardRect.top + cardRect.height / 2;

    const colors = ["#fbbf24", "#ea580c", "#d97706", "#fef3c7", "#ffffff"];
    particles = [];

    for (let i = 0; i < 65; i++) {
        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 8 + 3;
        particles.push({
            x: originX,
            y: originY,
            vx: Math.cos(angle) * velocity,
            vy: Math.sin(angle) * velocity - 1.5,
            size: Math.random() * 3.5 + 1.5,
            color: colors[Math.floor(Math.random() * colors.length)],
            alpha: 1,
            decay: Math.random() * 0.02 + 0.015,
            rotation: Math.random() * Math.PI,
            rotSpeed: (Math.random() - 0.5) * 0.1
        });
    }

    if (!animFrameId) renderParticles();
}

function renderParticles() {
    const ctx = dom.sparkleCanvas.getContext("2d");
    ctx.clearRect(0, 0, dom.sparkleCanvas.width, dom.sparkleCanvas.height);

    particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.15; // gravity
        p.alpha -= p.decay;
        p.rotation += p.rotSpeed;

        if (p.alpha <= 0) {
            particles.splice(idx, 1);
            return;
        }

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.fillStyle = p.color;

        // Sparkle diamond shape
        ctx.beginPath();
        ctx.moveTo(0, -p.size * 2);
        ctx.lineTo(p.size, 0);
        ctx.lineTo(0, p.size * 2);
        ctx.lineTo(-p.size, 0);
        ctx.closePath();
        ctx.fill();

        ctx.restore();
    });

    if (particles.length > 0) {
        animFrameId = requestAnimationFrame(renderParticles);
    } else {
        animFrameId = null;
        ctx.clearRect(0, 0, dom.sparkleCanvas.width, dom.sparkleCanvas.height);
    }
}

/* ==========================================================================
   Deck & Card Puzzle Initializer
   ========================================================================== */
function loadDrink(index) {
    currentDrinkIndex = index;
    const drink = cocktailsDB[currentDrinkIndex];

    // Reset 3D Flip
    dom.activeCard.classList.remove("is-flipped");

    // Header updates
    dom.cardCounter.textContent = `CARD ${currentDrinkIndex + 1} / ${cocktailsDB.length}`;
    dom.streakCounter.textContent = `STREAK: ${streak} 🔥`;

    // Populate Front Static Texts
    dom.frontCategory.textContent = drink.category.toUpperCase();
    dom.frontEra.textContent = drink.era;
    dom.frontDrinkName.textContent = drink.name;

    // Populate Back Bio & Historical Texts
    dom.backDrinkName.textContent = drink.name;
    dom.backHistoryText.textContent = drink.history;
    dom.backProtipText.textContent = drink.proTip;
    dom.backTechniqueText.textContent = drink.techniqueLore;

    // Populate Back Canonical Ingredients
    dom.backCanonicalRecipe.innerHTML = drink.canonicalRecipe.map(item => `
        <div class="canon-item">
            <span>${item.item}</span>
            <strong>${item.amount}</strong>
        </div>
    `).join("");

    // Populate Back Tasting Tags
    dom.backTastingTags.innerHTML = drink.tastingNotes.map(tag => `
        <span class="taste-pill">${tag}</span>
    `).join("");

    // Build Puzzle Layout based on Difficulty
    setupPuzzleState(drink);
    renderPuzzleUI();
    renderSelectionTrays();
}

function setupPuzzleState(drink) {
    const totalIngCount = drink.ingredients.length;
    let missingCount = 1;

    if (difficultyMode === "easy") {
        missingCount = 1; // Easy: exactly 1 ingredient missing
        puzzleState.glassRevealed = true;
        puzzleState.methodRevealed = true;
    } else if (difficultyMode === "medium") {
        // Medium: between 40% and 60% missing
        missingCount = Math.max(1, Math.round(totalIngCount * 0.5));
        puzzleState.glassRevealed = false;
        puzzleState.methodRevealed = true;
    } else {
        // Hard: 100% missing (Glass, Method, and All ingredients)
        missingCount = totalIngCount;
        puzzleState.glassRevealed = false;
        puzzleState.methodRevealed = false;
    }

    // Determine which ingredients are hidden/revealed
    const indices = Array.from({ length: totalIngCount }, (_, i) => i);
    // Shuffle indices
    for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
    }

    const hiddenSet = new Set(indices.slice(0, missingCount));

    puzzleState.glassTarget = drink.glassware;
    puzzleState.userGlass = puzzleState.glassRevealed ? drink.glassware : null;

    puzzleState.methodTarget = drink.method;
    puzzleState.userMethod = puzzleState.methodRevealed ? drink.method : null;

    puzzleState.ingredients = drink.ingredients.map((name, idx) => ({
        targetName: name,
        isRevealed: !hiddenSet.has(idx),
        userSelection: !hiddenSet.has(idx) ? name : null
    }));

    puzzleState.decoysPool = [...drink.decoys];
}

/* ==========================================================================
   UI Rendering Functions
   ========================================================================== */
function renderPuzzleUI() {
    const drink = cocktailsDB[currentDrinkIndex];

    // 1. Render Glassware Slot
    if (puzzleState.glassRevealed) {
        const glassObj = HARDWARE_LIBRARY.glassware.find(g => g.id === drink.glassware);
        dom.displayGlass.className = "hw-placeholder filled";
        dom.displayGlass.innerHTML = `${glassObj.svg} <span>${glassObj.name}</span>`;
    } else if (puzzleState.userGlass) {
        const glassObj = HARDWARE_LIBRARY.glassware.find(g => g.id === puzzleState.userGlass);
        dom.displayGlass.className = "hw-placeholder filled";
        dom.displayGlass.innerHTML = `${glassObj.svg} <span>${glassObj.name}</span>`;
    } else {
        dom.displayGlass.className = "hw-placeholder";
        dom.displayGlass.innerHTML = `<span class="plus-icon">+</span> Select Glass`;
    }

    // 2. Render Method Slot
    if (puzzleState.methodRevealed) {
        const methodObj = HARDWARE_LIBRARY.methods.find(m => m.id === drink.method);
        dom.displayMethod.className = "hw-placeholder filled";
        dom.displayMethod.innerHTML = `${methodObj.svg} <span>${methodObj.name}</span>`;
    } else if (puzzleState.userMethod) {
        const methodObj = HARDWARE_LIBRARY.methods.find(m => m.id === puzzleState.userMethod);
        dom.displayMethod.className = "hw-placeholder filled";
        dom.displayMethod.innerHTML = `${methodObj.svg} <span>${methodObj.name}</span>`;
    } else {
        dom.displayMethod.className = "hw-placeholder";
        dom.displayMethod.innerHTML = `<span class="plus-icon">+</span> Select Method`;
    }

    // 3. Render Ingredient Slots
    dom.ingredientSlotsContainer.innerHTML = "";
    let missingCount = 0;

    puzzleState.ingredients.forEach((slot, index) => {
        const slotEl = document.createElement("div");

        if (slot.isRevealed) {
            slotEl.className = "ing-slot pre-filled";
            slotEl.innerHTML = `
                <span>${slot.targetName}</span>
                <span class="icon-check">✓ Given</span>
            `;
        } else if (slot.userSelection) {
            slotEl.className = "ing-slot user-filled";
            slotEl.innerHTML = `
                <span>${slot.userSelection}</span>
                <span class="remove-cross" title="Tap to remove">✕</span>
            `;
            slotEl.addEventListener("click", () => {
                removeIngredientSelection(index);
            });
        } else {
            missingCount++;
            slotEl.className = "ing-slot empty";
            slotEl.innerHTML = `
                <span>[ Tap ingredient below ]</span>
                <span class="plus-icon">+</span>
            `;
            slotEl.addEventListener("click", () => {
                switchRackTab("ingredients");
            });
        }

        dom.ingredientSlotsContainer.appendChild(slotEl);
    });

    // Update Counter Hint
    dom.missingCountHint.textContent = missingCount === 0 ? "Slots Full" : `Missing ${missingCount}`;
    dom.tabIngCount.textContent = missingCount;

    // Check completion
    checkPuzzleCompletion();
}

function renderSelectionTrays() {
    const drink = cocktailsDB[currentDrinkIndex];

    // A. Render Ingredients Tray: All target hidden items + decoys
    dom.ingredientsTray.innerHTML = "";
    const activeSelectedNames = new Set(
        puzzleState.ingredients.filter(i => i.userSelection).map(i => i.userSelection)
    );

    // Target missing ingredients
    const needed = drink.ingredients.filter((name, idx) => !puzzleState.ingredients[idx].isRevealed);
    const pool = Array.from(new Set([...needed, ...puzzleState.decoysPool])).sort(() => Math.random() - 0.5);

    pool.forEach(ingName => {
        const chip = document.createElement("button");
        chip.className = "shelf-chip";
        chip.textContent = ingName;

        if (activeSelectedNames.has(ingName)) {
            chip.classList.add("disabled");
        }

        chip.addEventListener("click", () => {
            selectIngredient(ingName);
        });
        dom.ingredientsTray.appendChild(chip);
    });

    // B. Render Glassware Choices
    dom.glassTray.innerHTML = "";
    HARDWARE_LIBRARY.glassware.forEach(glass => {
        const btn = document.createElement("button");
        btn.className = `hw-choice-btn ${puzzleState.userGlass === glass.id ? "selected" : ""}`;
        if (puzzleState.glassRevealed) btn.classList.add("disabled");
        btn.innerHTML = `${glass.svg} <span>${glass.name}</span>`;
        btn.addEventListener("click", () => {
            if (puzzleState.glassRevealed) return;
            AudioFX.pop();
            puzzleState.userGlass = glass.id;
            renderPuzzleUI();
            renderSelectionTrays();
        });
        dom.glassTray.appendChild(btn);
    });

    // C. Render Method Choices
    dom.methodTray.innerHTML = "";
    HARDWARE_LIBRARY.methods.forEach(method => {
        const btn = document.createElement("button");
        btn.className = `hw-choice-btn ${puzzleState.userMethod === method.id ? "selected" : ""}`;
        if (puzzleState.methodRevealed) btn.classList.add("disabled");
        btn.innerHTML = `${method.svg} <span>${method.name}</span>`;
        btn.addEventListener("click", () => {
            if (puzzleState.methodRevealed) return;
            AudioFX.pop();
            puzzleState.userMethod = method.id;
            renderPuzzleUI();
            renderSelectionTrays();
        });
        dom.methodTray.appendChild(btn);
    });
}

/* ==========================================================================
   User Interaction Handlers
   ========================================================================== */
function selectIngredient(ingName) {
    // Find first empty user slot
    const targetSlot = puzzleState.ingredients.find(slot => !slot.isRevealed && !slot.userSelection);
    if (!targetSlot) {
        AudioFX.error();
        dom.cardStatusBar.className = "card-status-bar warning";
        dom.statusHintText.textContent = "All ingredient slots are full. Remove one to swap.";
        return;
    }

    AudioFX.pop();
    targetSlot.userSelection = ingName;
    renderPuzzleUI();
    renderSelectionTrays();
}

function removeIngredientSelection(slotIndex) {
    AudioFX.remove();
    puzzleState.ingredients[slotIndex].userSelection = null;
    dom.cardStatusBar.className = "card-status-bar";
    dom.statusHintText.textContent = "Select missing items from the rack below";
    renderPuzzleUI();
    renderSelectionTrays();
}

function switchRackTab(tabName) {
    AudioFX.tab();
    document.querySelectorAll(".dock-tab").forEach(tab => {
        tab.classList.toggle("active", tab.dataset.tab === tabName);
    });
    dom.paneIngredients.classList.toggle("active", tabName === "ingredients");
    dom.paneHardware.classList.toggle("active", tabName === "hardware");
}

/* ==========================================================================
   Card Evaluation & Auto-Flip System
   ========================================================================== */
function checkPuzzleCompletion() {
    const drink = cocktailsDB[currentDrinkIndex];

    // Check if Glassware is selected
    if (!puzzleState.userGlass) return;

    // Check if Method is selected
    if (!puzzleState.userMethod) return;

    // Check if all ingredient slots have an entry
    const unfilledSlot = puzzleState.ingredients.find(s => !s.userSelection);
    if (unfilledSlot) return;

    // Everything is full: evaluate correctness!
    const isGlassCorrect = puzzleState.userGlass === drink.glassware;
    const isMethodCorrect = puzzleState.userMethod === drink.method;

    // Check ingredients
    const selectedIngredients = puzzleState.ingredients.map(s => s.userSelection);
    const targetIngredients = drink.ingredients;
    const areIngredientsCorrect = targetIngredients.every(t => selectedIngredients.includes(t));

    if (isGlassCorrect && isMethodCorrect && areIngredientsCorrect) {
        // SUCCESS: Golden Sparkles + Chime + 3D Flip
        streak++;
        dom.streakCounter.textContent = `STREAK: ${streak} 🔥`;
        dom.cardStatusBar.className = "card-status-bar success";
        dom.statusHintText.textContent = "✦ SPECIFICATION FLAWLESS ✦";

        AudioFX.sparkleChord();
        triggerSparkleBurst();

        setTimeout(() => {
            AudioFX.flip();
            dom.activeCard.classList.add("is-flipped");
        }, 550);

    } else {
        // MISTAKE DETECTED: Gentle shake + hint
        streak = 0;
        dom.streakCounter.textContent = `STREAK: 0 🔥`;
        AudioFX.error();

        dom.activeCard.classList.add("shake-error");
        setTimeout(() => dom.activeCard.classList.remove("shake-error"), 400);

        dom.cardStatusBar.className = "card-status-bar warning";
        if (!isGlassCorrect) {
            dom.statusHintText.textContent = "Reconsider the glassware spec.";
        } else if (!isMethodCorrect) {
            dom.statusHintText.textContent = "Verify the preparation method.";
        } else {
            dom.statusHintText.textContent = "An ingredient is incorrect. Tap a slot to remove.";
        }
    }
}

/* ==========================================================================
   Event Wiring & Gestures
   ========================================================================== */
function setupEvents() {
    // Return Flip from Back to Front
    dom.flipBackBtn.addEventListener("click", () => {
        AudioFX.flip();
        dom.activeCard.classList.remove("is-flipped");
    });

    // Advance to Next Specimen from back
    dom.advanceNextBtn.addEventListener("click", () => {
        AudioFX.pop();
        const nextIdx = (currentDrinkIndex + 1) % cocktailsDB.length;
        loadDrink(nextIdx);
    });

    // Deck Prev / Next Nav
    dom.prevCardBtn.addEventListener("click", () => {
        AudioFX.pop();
        const prevIdx = (currentDrinkIndex - 1 + cocktailsDB.length) % cocktailsDB.length;
        loadDrink(prevIdx);
    });

    dom.nextCardBtn.addEventListener("click", () => {
        AudioFX.pop();
        const nextIdx = (currentDrinkIndex + 1) % cocktailsDB.length;
        loadDrink(nextIdx);
    });

    // Difficulty Selector Buttons
    dom.diffControl.addEventListener("click", (e) => {
        const btn = e.target.closest(".diff-btn");
        if (!btn || btn.classList.contains("active")) return;
        AudioFX.pop();

        document.querySelectorAll(".diff-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        difficultyMode = btn.dataset.mode;

        // Reload current drink with new difficulty constraints
        loadDrink(currentDrinkIndex);
    });

    // Sound Mute Toggle
    dom.soundBtn.addEventListener("click", () => {
        audioEnabled = !audioEnabled;
        dom.soundIconOn.classList.toggle("hidden", !audioEnabled);
        dom.soundIconOff.classList.toggle("hidden", audioEnabled);
        if (audioEnabled) AudioFX.pop();
    });

    // Bottom Navigation Tabs
    dom.rackTabs.addEventListener("click", (e) => {
        const tab = e.target.closest(".dock-tab");
        if (!tab) return;
        switchRackTab(tab.dataset.tab);
    });

    // Tapping empty Glass or Method on card switches to hardware tab
    dom.slotGlass.addEventListener("click", () => {
        if (!puzzleState.glassRevealed) switchRackTab("hardware");
    });
    dom.slotMethod.addEventListener("click", () => {
        if (!puzzleState.methodRevealed) switchRackTab("hardware");
    });

    // Mobile Horizontal Swipe Gesture to navigate cards
    let touchStartX = 0;
    let touchStartY = 0;
    dom.activeCard.addEventListener("touchstart", (e) => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    dom.activeCard.addEventListener("touchend", (e) => {
        const deltaX = e.changedTouches[0].screenX - touchStartX;
        const deltaY = e.changedTouches[0].screenY - touchStartY;
        // Check for dominant horizontal swipe
        if (Math.abs(deltaX) > 65 && Math.abs(deltaY) < 45) {
            if (deltaX > 0) dom.prevCardBtn.click();
            else dom.nextCardBtn.click();
        }
    }, { passive: true });
}

/* ==========================================================================
   Optional External JSON Hydration with embedded fallback
   ========================================================================== */
async function hydrateDrinksFromJSON() {
    try {
        const response = await fetch("drinks.json");
        if (response.ok) {
            const data = await response.json();
            if (Array.isArray(data) && data.length > 0) {
                cocktailsDB = data;
            }
        }
    } catch (err) {
        // Seamless fallback to embedded DB (e.g. file:// protocol or offline mode)
        console.info("Using embedded drinks library.");
    }
    loadDrink(0);
}

// Boot application
document.addEventListener("DOMContentLoaded", () => {
    setupEvents();
    hydrateDrinksFromJSON();
});