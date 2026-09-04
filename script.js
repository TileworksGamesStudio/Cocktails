/* ==========================================================================
   SPECS // Mobile Speakeasy Card Masterclass Engine
   Embedded Database of 37 Canonical Cocktails + Clean Mobile Interaction
   ========================================================================== */

const DRINKS = [
    {
        id: "old-fashioned",
        name: "Old Fashioned",
        category: "Pre-Prohibition",
        era: "Circa 1880s • Louisville, KY",
        glassware: "Rocks / Lowball",
        method: "Stirred over Ice",
        ingredients: ["Bourbon or Rye Whiskey", "Demerara Syrup", "Angostura Bitters", "Orange Peel"],
        decoys: ["Sweet Vermouth", "Campari", "Lemon Juice", "Club Soda"],
        canonicalRecipe: [
            { item: "Bourbon or Rye Whiskey", amount: "2.0 oz (60 ml)" },
            { item: "Demerara Syrup (2:1)", amount: "0.25 oz (7.5 ml)" },
            { item: "Angostura Bitters", amount: "2–3 Dashes" },
            { item: "Orange Peel", amount: "Expressed over Top" }
        ],
        tastingNotes: ["Spirit-Forward", "Charred Oak", "Caramelized Sugar", "Warm Spice"],
        history: "Born when 19th-century patrons grew exhausted by elaborate bar novelties and ordered their whiskey prepared the 'old-fashioned way'—spirit, sugar, water, and bitters.",
        proTip: "Express orange peel oils firmly over the rim and liquid surface. Never muddle cocktail cherries into the liquid; keep the silhouette clear and dense."
    },
    {
        id: "negroni",
        name: "Negroni",
        category: "Classic Aperitivo",
        era: "Est. 1919 • Caffè Casoni, Florence",
        glassware: "Rocks / Lowball",
        method: "Stirred over Ice",
        ingredients: ["London Dry Gin", "Campari", "Sweet Vermouth", "Orange Twist"],
        decoys: ["Dry Vermouth", "Aperol", "Club Soda", "Tequila Blanco"],
        canonicalRecipe: [
            { item: "London Dry Gin", amount: "1.0 oz (30 ml)" },
            { item: "Campari", amount: "1.0 oz (30 ml)" },
            { item: "Sweet Vermouth", amount: "1.0 oz (30 ml)" },
            { item: "Orange Twist", amount: "Expressed over Top" }
        ],
        tastingNotes: ["Bittersweet", "Pungent Juniper", "Bitter Orange", "Herbal Gentian"],
        history: "Count Camillo Negroni famously requested bartender Forsco Scarselli fortify his favorite Americano by swapping club soda for pungent London Dry gin.",
        proTip: "Keep sweet vermouth refrigerated once uncorked; oxidized fortified wine flattens the herbal brightness of this legendary trio."
    },
    {
        id: "whiskey-sour",
        name: "Whiskey Sour",
        category: "Pre-Prohibition",
        era: "Est. 1860s • Waukesha, WI / New York",
        glassware: "Rocks / Lowball",
        method: "Vigorously Shaken",
        ingredients: ["Bourbon Whiskey", "Fresh Lemon Juice", "Simple Syrup", "Egg White / Aquafaba"],
        decoys: ["Rye Whiskey", "Lime Juice", "Orange Liqueur", "Sweet Vermouth"],
        canonicalRecipe: [
            { item: "Bourbon Whiskey", amount: "2.0 oz (60 ml)" },
            { item: "Fresh Lemon Juice", amount: "0.75 oz (22.5 ml)" },
            { item: "Simple Syrup (1:1)", amount: "0.75 oz (22.5 ml)" },
            { item: "Fresh Egg White (or Aquafaba)", amount: "0.5 oz (15 ml)" }
        ],
        tastingNotes: ["Creamy Texture", "Tart Lemon", "Warm Caramel", "Subtle Vanilla"],
        history: "Codified in Jerry Thomas's 1862 guide. The addition of egg white emerged in the early 20th century to create its signature velvety crown.",
        proTip: "Reverse dry shake: shake hard with ice first to chill and dilute, strain out ice, then shake without ice to whip dense, meringue-like foam."
    },
    {
        id: "dark-n-stormy",
        name: "Dark 'n Stormy",
        category: "Bermuda Heritage",
        era: "Circa 1920s • Bermuda",
        glassware: "Highball",
        method: "Built in Glass",
        ingredients: ["Gosling's Black Seal Rum", "Spicy Ginger Beer", "Fresh Lime Juice"],
        decoys: ["White Rum", "Ginger Ale", "Simple Syrup", "Cola"],
        canonicalRecipe: [
            { item: "Gosling's Black Seal Rum", amount: "2.0 oz (60 ml)" },
            { item: "Spicy Ginger Beer", amount: "4.0 oz (120 ml)" },
            { item: "Fresh Lime Juice", amount: "0.5 oz (15 ml)" }
        ],
        tastingNotes: ["Dark Molasses", "Pungent Ginger", "Tart Citrus", "Caramelized Spice"],
        history: "Trademarked by Gosling Brothers in Bermuda after British naval officers combined black molasses rum with carbonated ginger beer.",
        proTip: "Float black rum gently on top of ginger beer over ice so the dense rum resembles a dark storm cloud hovering over the sea."
    },
    {
        id: "americano",
        name: "Americano",
        category: "Italian Heritage",
        era: "Est. 1860s • Caffè Campari, Milan",
        glassware: "Highball",
        method: "Built in Glass",
        ingredients: ["Campari", "Sweet Vermouth", "Club Soda", "Orange Slice"],
        decoys: ["London Dry Gin", "Aperol", "Tonic Water", "Dry Vermouth"],
        canonicalRecipe: [
            { item: "Campari", amount: "1.5 oz (45 ml)" },
            { item: "Sweet Italian Vermouth", amount: "1.5 oz (45 ml)" },
            { item: "Chilled Club Soda", amount: "Top (~2.0 oz)" }
        ],
        tastingNotes: ["Bittersweet", "Herbal Botanical", "Effervescent", "Zesty Orange"],
        history: "Originally known as the Milano-Torino, renamed due to its tremendous popularity among American tourists visiting during Prohibition.",
        proTip: "Pour club soda down the spiral shaft of a barspoon into the ice to preserve maximum effervescence."
    },
    {
        id: "bloody-mary",
        name: "Classic Bloody Mary",
        category: "World Classic",
        era: "Est. 1921 • Harry's New York Bar, Paris",
        glassware: "Highball",
        method: "Thrown between Shakers",
        ingredients: ["Vodka", "Tomato Juice", "Fresh Lemon Juice", "Worcestershire Sauce", "Hot Sauce", "Celery Salt"],
        decoys: ["Gin", "Clamato Juice", "Lime Juice", "Soy Sauce"],
        canonicalRecipe: [
            { item: "Vodka", amount: "1.5 oz (45 ml)" },
            { item: "Tomato Juice", amount: "3.0 oz (90 ml)" },
            { item: "Fresh Lemon Juice", amount: "0.5 oz (15 ml)" },
            { item: "Worcestershire Sauce", amount: "2 Dashes" },
            { item: "Tabasco & Celery Salt", amount: "To Taste" }
        ],
        tastingNotes: ["Savory Umami", "Spicy Heat", "Zesty Tomato", "Bracing Citrus"],
        history: "Created by Fernand Petiot in Paris, later elevated at the St. Regis King Cole Bar in NYC under the title 'Red Snapper'.",
        proTip: "Never shake a Bloody Mary. Violent shaking breaks tomato pectin cells into watery foam. Throwing chills without destroying body."
    },
    {
        id: "tom-collins",
        name: "Tom Collins",
        category: "Pre-Prohibition",
        era: "Est. 1876 • Jerry Thomas, New York",
        glassware: "Collins",
        method: "Shaken & Topped",
        ingredients: ["Old Tom Gin (or London Dry)", "Fresh Lemon Juice", "Simple Syrup", "Club Soda"],
        decoys: ["Lime Juice", "Vodka", "Tonic Water", "Ginger Ale"],
        canonicalRecipe: [
            { item: "Old Tom Gin (or London Dry)", amount: "2.0 oz (60 ml)" },
            { item: "Fresh Lemon Juice", amount: "1.0 oz (30 ml)" },
            { item: "Simple Syrup (1:1)", amount: "0.5 oz (15 ml)" },
            { item: "Chilled Club Soda", amount: "Top (~2.5 oz)" }
        ],
        tastingNotes: ["Sparkling Citrus", "Botanical Pine", "Balanced Sweet", "Quenching"],
        history: "Linked to the Great Tom Collins Hoax of 1874, where pranksters sent victims racing through New York bars seeking a non-existent slanderer.",
        proTip: "Add chilled club soda to the glass before straining the shaken gin and lemon mix to incorporate bubbles uniformly."
    },
    {
        id: "mojito",
        name: "Cuban Mojito",
        category: "Cuban Heritage",
        era: "Circa 1930s • Havana, Cuba",
        glassware: "Collins",
        method: "Muddled & Built",
        ingredients: ["White Rum", "Fresh Lime Juice", "Fresh Spearmint", "Demerara Sugar", "Club Soda"],
        decoys: ["Dark Rum", "Lemon Juice", "Tonic Water", "Triple Sec"],
        canonicalRecipe: [
            { item: "White Cuban Rum", amount: "2.0 oz (60 ml)" },
            { item: "Fresh Lime Juice", amount: "0.75 oz (22.5 ml)" },
            { item: "Fine Sugar / Syrup", amount: "0.5 oz (15 ml)" },
            { item: "Fresh Spearmint Leaves", amount: "8–10 Leaves" },
            { item: "Club Soda", amount: "Top (~1.5 oz)" }
        ],
        tastingNotes: ["Crisp Mint", "Zesty Lime", "Cane Sugar", "Effervescent"],
        history: "Beloved by Ernest Hemingway at La Bodeguita del Medio in Havana, evolving from 16th-century medicinal aguardiente tonics.",
        proTip: "Never aggressively grind mint with the muddler; tearing leaf veins releases bitter chlorophyll tannins. Press gently."
    },
    {
        id: "daiquiri",
        name: "Authentic Daiquiri",
        category: "Cuban Heritage",
        era: "Est. 1898 • Daiquirí, Cuba",
        glassware: "Cocktail Coupe",
        method: "Vigorously Shaken",
        ingredients: ["White Rum", "Fresh Lime Juice", "Demerara Simple Syrup"],
        decoys: ["Dark Rum", "Triple Sec", "Lemon Juice", "Maraschino Liqueur"],
        canonicalRecipe: [
            { item: "Light Cuban Rum", amount: "2.0 oz (60 ml)" },
            { item: "Fresh Lime Juice", amount: "0.75 oz (22.5 ml)" },
            { item: "Rich Demerara Syrup (2:1)", amount: "0.75 oz (22.5 ml)" }
        ],
        tastingNotes: ["Electric Citrus", "Cane Grass", "Mineral Crispness", "Silky Balance"],
        history: "Originated when American mining engineer Jennings Cox ran out of gin at a Cuban gathering and blended local cane rum with plucked limes.",
        proTip: "The classic Daiquiri is the ultimate bartender litmus test. There is nowhere to hide poor ice dilution or stale citrus."
    },
    {
        id: "dry-martini",
        name: "Classic Dry Martini",
        category: "Classic",
        era: "Circa 1900s • New York / San Francisco",
        glassware: "Martini Glass",
        method: "Stirred over Ice",
        ingredients: ["London Dry Gin", "Dry Vermouth", "Orange Bitters", "Lemon Peel or Olive"],
        decoys: ["Sweet Vermouth", "Vodka", "Maraschino Liqueur", "Simple Syrup"],
        canonicalRecipe: [
            { item: "London Dry Gin", amount: "2.5 oz (75 ml)" },
            { item: "Dry French Vermouth", amount: "0.5 oz (15 ml)" },
            { item: "Orange Bitters", amount: "1 Dash" },
            { item: "Lemon Peel or Castelvetrano Olive", amount: "1 Garnish" }
        ],
        tastingNotes: ["Bone Dry", "Pine Juniper", "Delicate Floral", "Silken"],
        history: "The apex of cocktail minimalism, evolving from the sweeter Martinez into a bone-dry beacon of 20th-century sophistication.",
        proTip: "Chill your glassware in the freezer below 0°F. A Martini should be served brutally cold; warm temperatures expose harsh alcohol burn."
    },
    {
        id: "manhattan",
        name: "Manhattan",
        category: "Pre-Prohibition",
        era: "Est. 1870s • Manhattan Club, NYC",
        glassware: "Nick & Nora",
        method: "Stirred over Ice",
        ingredients: ["Straight Rye Whiskey", "Sweet Vermouth", "Angostura Bitters", "Brandied Cherry"],
        decoys: ["Bourbon Whiskey", "Dry Vermouth", "Orange Bitters", "Campari"],
        canonicalRecipe: [
            { item: "Straight Rye Whiskey (100 Proof)", amount: "2.0 oz (60 ml)" },
            { item: "Sweet Italian Vermouth", amount: "1.0 oz (30 ml)" },
            { item: "Angostura Bitters", amount: "2 Dashes" },
            { item: "Luxardo Brandied Cherry", amount: "1 Garnish" }
        ],
        tastingNotes: ["Dark Cherry", "Spicy Rye Grain", "Warming Botanical", "Vanilla Oak"],
        history: "A timeless masterpiece created in New York City. The peppery rye grain cuts cleanly across lush fortified wine sweetness.",
        proTip: "Always reach for spicy 100-proof Straight Rye rather than Bourbon to prevent a flabby, overly sugary flavor profile."
    },
    {
        id: "espresso-martini",
        name: "Espresso Martini",
        category: "Modern Craft",
        era: "Est. 1983 • Soho Brasserie, London",
        glassware: "Martini Glass",
        method: "Vigorously Shaken",
        ingredients: ["Vodka", "Coffee Liqueur", "Fresh Hot Espresso", "Simple Syrup"],
        decoys: ["Irish Cream", "Cold Brew", "Dark Rum", "Cacao Liqueur"],
        canonicalRecipe: [
            { item: "Vodka", amount: "1.5 oz (45 ml)" },
            { item: "Coffee Liqueur (Kahlúa)", amount: "0.75 oz (22.5 ml)" },
            { item: "Fresh Pulled Hot Espresso", amount: "1.0 oz (30 ml)" },
            { item: "Rich Simple Syrup (2:1)", amount: "0.25 oz (7.5 ml)" }
        ],
        tastingNotes: ["Velveteen Crema", "Roasted Cocoa", "Dark Toffee", "Clean Finish"],
        history: "Invented by London icon Dick Bradsell when a supermodel walked up to his bar asking for a drink that would 'wake me up and mess me up.'",
        proTip: "Pull the espresso shot immediately before shaking. Natural crema oils emulsify under hard aeration to create a dense foam head."
    },
    {
        id: "margarita",
        name: "Classic Margarita",
        category: "Agave Classic",
        era: "Est. 1938 • Baja California, Mexico",
        glassware: "Margarita Glass",
        method: "Vigorously Shaken",
        ingredients: ["Blanco Tequila", "Cointreau / Triple Sec", "Fresh Lime Juice", "Agave Nectar"],
        decoys: ["Mezcal", "Simple Syrup", "Lemon Juice", "Orange Bitters"],
        canonicalRecipe: [
            { item: "Blanco Tequila (100% Blue Agave)", amount: "2.0 oz (60 ml)" },
            { item: "Cointreau / Triple Sec", amount: "0.75 oz (22.5 ml)" },
            { item: "Fresh Lime Juice", amount: "0.75 oz (22.5 ml)" },
            { item: "Agave Nectar", amount: "1 Barspoon" }
        ],
        tastingNotes: ["Crisp Citrus", "Earthy Agave", "Bright Saline", "Candied Orange"],
        history: "A descendant of the 1930s Daisy family of cocktails (spirit + citrus + orange liqueur), adapted for Mexican blue agave tequila.",
        proTip: "Salt only half of the glass perimeter so guests can choose between saline bursts and unadorned citrus sips."
    },
    {
        id: "french-75",
        name: "French 75",
        category: "Prohibition Classic",
        era: "Est. 1915 • Harry's New York Bar, Paris",
        glassware: "Champagne Flute",
        method: "Shaken & Topped",
        ingredients: ["London Dry Gin", "Fresh Lemon Juice", "Simple Syrup", "Brut Champagne"],
        decoys: ["Vodka", "Club Soda", "Lime Juice", "Orange Liqueur"],
        canonicalRecipe: [
            { item: "London Dry Gin", amount: "1.0 oz (30 ml)" },
            { item: "Fresh Lemon Juice", amount: "0.5 oz (15 ml)" },
            { item: "Simple Syrup (1:1)", amount: "0.5 oz (15 ml)" },
            { item: "Brut Champagne", amount: "Top (~2.5 oz)" }
        ],
        tastingNotes: ["Effervescent", "Crisp Botanical", "Tart Lemon", "Dry Brioche"],
        history: "Named for the devastating French 75mm artillery gun, famous for kicking with identical velocity.",
        proTip: "Use bone-dry Brut Champagne; excess sweetness from cheap prosecco destroys the brisk, razor-sharp lemon acidity."
    },
    {
        id: "moscow-mule",
        name: "Moscow Mule",
        category: "Mid-Century Classic",
        era: "Est. 1941 • Cock 'n Bull, Hollywood, CA",
        glassware: "Copper Mug",
        method: "Built in Glass",
        ingredients: ["Vodka", "Fresh Lime Juice", "Spicy Ginger Beer", "Lime Wheel"],
        decoys: ["Gin", "Ginger Ale", "Simple Syrup", "Lemon Juice"],
        canonicalRecipe: [
            { item: "Vodka", amount: "2.0 oz (60 ml)" },
            { item: "Fresh Lime Juice", amount: "0.75 oz (22.5 ml)" },
            { item: "Spicy Ginger Beer", amount: "Top (~4.0 oz)" },
            { item: "Fresh Lime Wheel & Mint", amount: "1 Garnish" }
        ],
        tastingNotes: ["Fiery Ginger", "Tart Lime", "Crisp Clean", "Chilled Frost"],
        history: "Created when John Martin of Smirnoff, Jack Morgan of the Cock 'n Bull, and a businesswoman with excess copper mugs joined forces.",
        proTip: "Use fermented, fiery ginger beer rather than sweet ginger ale. Neutral vodka requires sharp ginger heat for backbone."
    },
    {
        id: "mint-julep",
        name: "Kentucky Mint Julep",
        category: "American Heritage",
        era: "Circa 1800 • Louisville, KY",
        glassware: "Julep Cup",
        method: "Muddled & Built",
        ingredients: ["Straight Bourbon Whiskey", "Fresh Spearmint", "Demerara Syrup", "Crushed Ice"],
        decoys: ["Rye Whiskey", "Club Soda", "Lemon Juice", "Bitters"],
        canonicalRecipe: [
            { item: "Kentucky Straight Bourbon", amount: "2.5 oz (75 ml)" },
            { item: "Demerara Syrup (1:1)", amount: "0.5 oz (15 ml)" },
            { item: "Fresh Spearmint Leaves", amount: "8–10 Leaves" },
            { item: "Crushed Ice", amount: "Packed to Dome" }
        ],
        tastingNotes: ["Cooling Mint", "Warm Vanilla", "Charred Oak", "Caramel"],
        history: "Synonymous with Churchill Downs and the Kentucky Derby since 1938, originally consumed as morning medicine in Virginia.",
        proTip: "Hold the silver cup strictly by the top rim or bottom base so hand heat doesn't melt the exterior frost coating."
    },
    {
        id: "mai-tai",
        name: "1944 Trader Vic Mai Tai",
        category: "Tiki Heritage",
        era: "Est. 1944 • Hinky Dinks, Oakland, CA",
        glassware: "Tiki Mug / Double Rocks",
        method: "Vigorously Shaken",
        ingredients: ["Aged Jamaican Rum", "Rhum Agricole", "Orange Curaçao", "Orgeat (Almond Syrup)", "Fresh Lime Juice"],
        decoys: ["Pineapple Juice", "Grenadine", "Spiced Rum", "Club Soda"],
        canonicalRecipe: [
            { item: "Aged Jamaican Rum", amount: "1.0 oz (30 ml)" },
            { item: "Martinique Rhum Agricole", amount: "1.0 oz (30 ml)" },
            { item: "Dry Orange Curaçao", amount: "0.5 oz (15 ml)" },
            { item: "Orgeat (Almond Milk Syrup)", amount: "0.5 oz (15 ml)" },
            { item: "Fresh Lime Juice", amount: "1.0 oz (30 ml)" }
        ],
        tastingNotes: ["Nutty Almond", "Funky Molasses", "Tart Lime", "Candied Orange"],
        history: "Trader Vic Bergeron shook this for Tahitian friends who exclaimed 'Maita'i roa a'e!' ('Out of this world!'). True Tiki has no grenadine.",
        proTip: "Slap fresh mint against your wrist to burst essential oils before placing it alongside a spent lime half to evoke an island palm tree."
    },
    {
        id: "aperol-spritz",
        name: "Aperol Spritz",
        category: "Italian Aperitivo",
        era: "Est. 1950s • Venice / Padua, Italy",
        glassware: "Stemmed Wine Glass",
        method: "Built in Glass",
        ingredients: ["Dry Prosecco (DOC)", "Aperol", "Club Soda", "Orange Slice"],
        decoys: ["Campari", "Sweet Vermouth", "Gin", "Lemon Juice"],
        canonicalRecipe: [
            { item: "Dry Prosecco (DOC)", amount: "3.0 oz (90 ml)" },
            { item: "Aperol", amount: "2.0 oz (60 ml)" },
            { item: "Chilled Club Soda", amount: "1.0 oz (30 ml)" }
        ],
        tastingNotes: ["Bittersweet Orange", "Crisp Effervescence", "Rhubarb & Gentian", "Floral Peach"],
        history: "Derived from 19th-century Austrian soldiers spritzing heavy Venetian wine with soda water to make it refreshing.",
        proTip: "Follow the 3-2-1 rule: 3 parts Prosecco, 2 parts Aperol, 1 splash soda. Pour wine first to prevent Aperol from sinking to the bottom."
    },
    {
        id: "last-word",
        name: "The Last Word",
        category: "Prohibition Classic",
        era: "Est. 1916 • Detroit Athletic Club",
        glassware: "Cocktail Coupe",
        method: "Vigorously Shaken",
        ingredients: ["London Dry Gin", "Green Chartreuse", "Maraschino Liqueur", "Fresh Lime Juice"],
        decoys: ["Yellow Chartreuse", "Cointreau", "Lemon Juice", "Vodka"],
        canonicalRecipe: [
            { item: "London Dry Gin", amount: "0.75 oz (22.5 ml)" },
            { item: "Green Chartreuse", amount: "0.75 oz (22.5 ml)" },
            { item: "Maraschino Liqueur", amount: "0.75 oz (22.5 ml)" },
            { item: "Fresh Lime Juice", amount: "0.75 oz (22.5 ml)" }
        ],
        tastingNotes: ["Intense Herbal", "Sharp Lime", "Cherry Pit", "Complex Pine"],
        history: "Rescued from obscurity in 2004 by Seattle bartender Murray Stenson, sparking the 21st-century Chartreuse cocktail renaissance.",
        proTip: "Equal parts (1:1:1:1) is gospel. The ferocious 110-proof Green Chartreuse flawlessly balances Maraschino's rich sweetness."
    },
    {
        id: "aviation",
        name: "Aviation",
        category: "Pre-Prohibition",
        era: "Est. 1916 • Hotel Wallick, NYC",
        glassware: "Cocktail Coupe",
        method: "Vigorously Shaken",
        ingredients: ["London Dry Gin", "Maraschino Liqueur", "Crème de Violette", "Fresh Lemon Juice"],
        decoys: ["Vodka", "Triple Sec", "Blue Curaçao", "Sweet Vermouth"],
        canonicalRecipe: [
            { item: "London Dry Gin", amount: "2.0 oz (60 ml)" },
            { item: "Maraschino Liqueur", amount: "0.5 oz (15 ml)" },
            { item: "Crème de Violette", amount: "0.25 oz (7.5 ml)" },
            { item: "Fresh Lemon Juice", amount: "0.75 oz (22.5 ml)" }
        ],
        tastingNotes: ["Floral Violet", "Sour Cherry Stone", "Crisp Pine", "Powdered Blossom"],
        history: "Published by Hugo Ensslin on the eve of Prohibition, named for its pale sky-blue hue reminiscent of early aviation.",
        proTip: "Treat violette like liquid perfume. A heavy pour quickly turns this drink into lavender soap."
    }
];

/* ==========================================================================
   App State
   ========================================================================== */
let currentIndex = 0;
let streak = 0;
let soundOn = true;
let mode = "quiz"; // "quiz" | "study"
let targetMissingIngredient = "";
let isSolved = false;

/* ==========================================================================
   Lightweight Synthesizer Audio (No external files)
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
            osc.frequency.setValueAtTime(550, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.04);
            gain.gain.setValueAtTime(0.08, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.04);
        } catch(e) {}
    },
    success() {
        if (!soundOn) return;
        try {
            const ctx = getCtx();
            [523.25, 659.25, 783.99, 1046.5].forEach((freq, idx) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = "triangle";
                osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.05);
                gain.gain.setValueAtTime(0.08, ctx.currentTime + idx * 0.05);
                gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.05 + 0.25);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start(ctx.currentTime + idx * 0.05);
                osc.stop(ctx.currentTime + idx * 0.05 + 0.25);
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
            osc.frequency.setValueAtTime(140, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.15);
            gain.gain.setValueAtTime(0.1, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.15);
        } catch(e) {}
    }
};

/* ==========================================================================
   DOM Elements
   ========================================================================== */
const el = {
    flipper: document.getElementById("card-flipper"),
    cardFront: document.getElementById("card-front"),
    cardBack: document.getElementById("card-back"),
    cardIndex: document.getElementById("card-index-indicator"),
    category: document.getElementById("card-category"),
    era: document.getElementById("card-era"),
    title: document.getElementById("card-title"),
    glass: document.getElementById("card-glass"),
    method: document.getElementById("card-method"),
    recipeList: document.getElementById("recipe-list"),

    // Back card
    backTitle: document.getElementById("back-title"),
    backTasting: document.getElementById("back-tasting"),
    backCanonical: document.getElementById("back-canonical"),
    backProtip: document.getElementById("back-protip"),
    backHistory: document.getElementById("back-history"),

    // Controls
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
    streakVal: document.getElementById("streak-val"),

    // Modal
    searchModal: document.getElementById("search-modal"),
    btnSearchModal: document.getElementById("btn-search-modal"),
    btnCloseModal: document.getElementById("btn-close-modal"),
    modalDrinksList: document.getElementById("modal-drinks-list")
};

/* ==========================================================================
   Deck Rendering Logic
   ========================================================================== */
function renderDrink(index) {
    currentIndex = index;
    const drink = DRINKS[currentIndex];
    isSolved = false;

    // Reset 3D flip
    el.flipper.classList.remove("flipped");

    // Header counter
    el.cardIndex.textContent = `${String(currentIndex + 1).padStart(2, "0")} / ${String(DRINKS.length).padStart(2, "0")}`;
    el.streakVal.textContent = streak;

    // Front Meta
    el.category.textContent = drink.category.toUpperCase();
    el.era.textContent = drink.era;
    el.title.textContent = drink.name;
    el.glass.textContent = drink.glassware;
    el.method.textContent = drink.method;

    // Back Dossier
    el.backTitle.textContent = drink.name;
    el.backHistory.textContent = drink.history;
    el.backProtip.textContent = drink.proTip;

    el.backTasting.innerHTML = drink.tastingNotes.map(t => `<span class="taste-chip">${t}</span>`).join("");
    el.backCanonical.innerHTML = drink.canonicalRecipe.map(item => `
        <div class="canon-row">
            <span>${item.item}</span>
            <strong>${item.amount}</strong>
        </div>
    `).join("");

    // Setup Recipe view based on mode
    if (mode === "quiz") {
        setupQuiz(drink);
    } else {
        setupStudy(drink);
    }
}

function setupStudy(drink) {
    el.quizTray.classList.add("hidden");
    el.recipeList.innerHTML = drink.ingredients.map(ing => `
        <li class="recipe-item">
            <span>${ing}</span>
            <span style="color: var(--gold-primary);">✓</span>
        </li>
    `).join("");
}

function setupQuiz(drink) {
    el.quizTray.classList.remove("hidden");
    el.quizPrompt.textContent = "Identify the missing ingredient:";

    // Pick 1 ingredient to hide
    const hiddenIndex = Math.floor(Math.random() * drink.ingredients.length);
    targetMissingIngredient = drink.ingredients[hiddenIndex];

    // Render list with hidden item
    el.recipeList.innerHTML = drink.ingredients.map((ing, idx) => {
        if (idx === hiddenIndex) {
            return `<li class="recipe-item target-hidden" id="masked-slot">? [ TAP BELOW TO COMPLETE ]</li>`;
        }
        return `<li class="recipe-item"><span>${ing}</span></li>`;
    }).join("");

    // Generate 4 options (1 correct + 3 random decoys)
    const decoys = [...drink.decoys].sort(() => Math.random() - 0.5).slice(0, 3);
    const options = [targetMissingIngredient, ...decoys].sort(() => Math.random() - 0.5);

    el.choicesGrid.innerHTML = "";
    options.forEach(opt => {
        const btn = document.createElement("button");
        btn.className = "choice-btn";
        btn.textContent = opt;
        btn.addEventListener("click", () => handleGuess(opt, btn));
        el.choicesGrid.appendChild(btn);
    });
}

function handleGuess(selectedText, buttonEl) {
    if (isSolved) return;

    if (selectedText === targetMissingIngredient) {
        // CORRECT
        isSolved = true;
        streak++;
        el.streakVal.textContent = streak;
        AudioSFX.success();

        buttonEl.classList.add("correct");

        const slot = document.getElementById("masked-slot");
        if (slot) {
            slot.className = "recipe-item revealed";
            slot.textContent = `✓ ${targetMissingIngredient}`;
        }

        // Auto flip to back after short delight delay
        setTimeout(() => {
            el.flipper.classList.add("flipped");
        }, 650);

    } else {
        // WRONG
        streak = 0;
        el.streakVal.textContent = "0";
        AudioSFX.error();

        buttonEl.classList.add("wrong");
        setTimeout(() => buttonEl.classList.remove("wrong"), 600);
    }
}

/* ==========================================================================
   Event Listeners & Gestures
   ========================================================================== */
function bindEvents() {
    // Navigation
    el.btnNext.addEventListener("click", () => {
        AudioSFX.tap();
        const next = (currentIndex + 1) % DRINKS.length;
        renderDrink(next);
    });

    el.btnPrev.addEventListener("click", () => {
        AudioSFX.tap();
        const prev = (currentIndex - 1 + DRINKS.length) % DRINKS.length;
        renderDrink(prev);
    });

    // Flip Controls
    el.btnFlipFront.addEventListener("click", () => {
        AudioSFX.tap();
        el.flipper.classList.toggle("flipped");
    });

    el.btnFlipBack.addEventListener("click", () => {
        AudioSFX.tap();
        el.flipper.classList.remove("flipped");
    });

    // Sound Toggle
    el.btnSound.addEventListener("click", () => {
        soundOn = !soundOn;
        el.soundIcon.textContent = soundOn ? "🔊" : "🔇";
        if (soundOn) AudioSFX.tap();
    });

    // Mode Toggle
    el.btnModeQuiz.addEventListener("click", () => {
        if (mode === "quiz") return;
        mode = "quiz";
        el.btnModeQuiz.classList.add("active");
        el.btnModeStudy.classList.remove("active");
        AudioSFX.tap();
        renderDrink(currentIndex);
    });

    el.btnModeStudy.addEventListener("click", () => {
        if (mode === "study") return;
        mode = "study";
        el.btnModeStudy.classList.add("active");
        el.btnModeQuiz.classList.remove("active");
        AudioSFX.tap();
        renderDrink(currentIndex);
    });

    // Quick Jump Modal
    el.btnSearchModal.addEventListener("click", () => {
        AudioSFX.tap();
        renderModalList();
        el.searchModal.classList.add("open");
    });

    el.btnCloseModal.addEventListener("click", () => {
        el.searchModal.classList.remove("open");
    });

    // Swipe Navigation for touch screens
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

function renderModalList() {
    el.modalDrinksList.innerHTML = DRINKS.map((d, i) => `
        <button class="modal-item-btn ${i === currentIndex ? "current" : ""}" data-index="${i}">
            <span>${d.name}</span>
            <span style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--gold-primary);">${d.category}</span>
        </button>
    `).join("");

    el.modalDrinksList.querySelectorAll(".modal-item-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const idx = parseInt(btn.dataset.index, 10);
            renderDrink(idx);
            el.searchModal.classList.remove("open");
        });
    });
}

// Initial launch
document.addEventListener("DOMContentLoaded", () => {
    bindEvents();
    renderDrink(0);
});