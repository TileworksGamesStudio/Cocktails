/* ==========================================================================
   SPECS // Mobile Speakeasy Card Masterclass Engine
   Single-Screen Native Deck & Card Study Game
   ========================================================================== */

// Embedded fallback database ensures immediate offline play with zero CORS blocks
const COCKTAILS_MASTER_DB = [
    {
        id: "old-fashioned",
        name: "Old Fashioned",
        category: "Pre-Prohibition",
        era: "Circa 1880s • Louisville, KY",
        glassware: "rocks",
        glasswareName: "Rocks / Lowball",
        method: "stir",
        methodName: "Stirred over Ice",
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
        proTip: "Express orange peel oils firmly over the rim and liquid surface. Never muddle cocktail cherries into the liquid; keep the silhouette clear and dense.",
        techniqueLore: "Stir gently over a single hand-carved ice block for 30–40 seconds until chilled to 28°F. This provides ~22% dilution without cloudy aeration bubbles."
    },
    {
        id: "negroni",
        name: "Negroni",
        category: "Classic Aperitivo",
        era: "Est. 1919 • Caffè Casoni, Florence",
        glassware: "rocks",
        glasswareName: "Rocks / Lowball",
        method: "stir",
        methodName: "Stirred over Ice",
        ingredients: ["London Dry Gin", "Campari", "Sweet Vermouth", "Orange Peel"],
        decoys: ["Dry Vermouth", "Aperol", "Club Soda", "Tequila Blanco"],
        canonicalRecipe: [
            { item: "London Dry Gin", amount: "1.0 oz (30 ml)" },
            { item: "Campari", amount: "1.0 oz (30 ml)" },
            { item: "Sweet Vermouth", amount: "1.0 oz (30 ml)" },
            { item: "Orange Twist", amount: "Expressed over Top" }
        ],
        tastingNotes: ["Bittersweet", "Pungent Juniper", "Bitter Orange", "Herbal Gentian"],
        history: "Count Camillo Negroni famously requested bartender Forsco Scarselli fortify his favorite Americano by swapping effervescent club soda for pungent London Dry gin.",
        proTip: "Keep sweet vermouth refrigerated once uncorked; oxidized fortified wine flattens the herbal brightness of this legendary trio.",
        techniqueLore: "The 1:1:1 ratio requires precise chilling so bitter gentian root integrates with vermouth botanicals without watery over-dilution."
    },
    {
        id: "bloody-mary",
        name: "Classic Bloody Mary",
        category: "World Classic",
        era: "Est. 1921 • Harry's New York Bar, Paris",
        glassware: "highball",
        glasswareName: "Highball",
        method: "throw",
        methodName: "Thrown between Shakers",
        ingredients: ["Vodka", "Tomato Juice", "Fresh Lemon Juice", "Worcestershire Sauce", "Hot Pepper Sauce", "Celery Salt"],
        decoys: ["Gin", "Clamato Juice", "Lime Juice", "Soy Sauce"],
        canonicalRecipe: [
            { item: "Vodka", amount: "1.5 oz (45 ml)" },
            { item: "Tomato Juice", amount: "3.0 oz (90 ml)" },
            { item: "Fresh Lemon Juice", amount: "0.5 oz (15 ml)" },
            { item: "Worcestershire Sauce", amount: "2 Dashes" },
            { item: "Tabasco & Celery Salt", amount: "To Taste" }
        ],
        tastingNotes: ["Savory Umami", "Spicy Heat", "Zesty Tomato", "Bracing Citrus"],
        history: "Created by Fernand Petiot at Harry's New York Bar in Paris, later elevated at the St. Regis King Cole Bar in NYC as the 'Red Snapper'.",
        proTip: "Never shake a Bloody Mary. Shaking breaks tomato pectin cells into a watery foam. Rolling (throwing) chills and integrates without destroying viscosity.",
        techniqueLore: "Throwing between ice-filled tins allows heavy tomato solids and savory spices to aerate and chill with zero dilution surge."
    },
    {
        id: "tom-collins",
        name: "Tom Collins",
        category: "Pre-Prohibition",
        era: "Est. 1876 • Jerry Thomas, New York",
        glassware: "collins",
        glasswareName: "Collins",
        method: "shake",
        methodName: "Shaken & Topped",
        ingredients: ["Old Tom Gin / London Dry", "Fresh Lemon Juice", "Simple Syrup", "Club Soda"],
        decoys: ["Lime Juice", "Vodka", "Tonic Water", "Ginger Ale"],
        canonicalRecipe: [
            { item: "Old Tom Gin (or London Dry)", amount: "2.0 oz (60 ml)" },
            { item: "Fresh Lemon Juice", amount: "1.0 oz (30 ml)" },
            { item: "Simple Syrup (1:1)", amount: "0.5 oz (15 ml)" },
            { item: "Chilled Club Soda", amount: "Top (~2.5 oz)" }
        ],
        tastingNotes: ["Sparkling Citrus", "Botanical Pine", "Balanced Sweet", "Quenching"],
        history: "Linked to the Great Tom Collins Hoax of 1874, where pranksters sent victims racing through New York bars seeking a slanderous fellow named Tom Collins.",
        proTip: "Add chilled club soda to the glass before straining the shaken gin and lemon mix; this incorporates bubbles uniformly without flat spots.",
        techniqueLore: "A tall, slender Collins glass preserves carbonation bubbles longer by reducing the surface area exposed to ambient air."
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
            { item: "Light Cuban Rum", amount: "2.0 oz (60 ml)" },
            { item: "Fresh Lime Juice", amount: "0.75 oz (22.5 ml)" },
            { item: "Rich Demerara Syrup (2:1)", amount: "0.75 oz (22.5 ml)" }
        ],
        tastingNotes: ["Electric Citrus", "Cane Grass", "Mineral Crispness", "Silky Balance"],
        history: "Originated when American mining engineer Jennings Cox ran out of gin at a gathering in Cuba and mixed local cane rum with freshly plucked limes.",
        proTip: "The classic Daiquiri is the ultimate bartender litmus test. There is nowhere to hide poor ice technique or pasteurized citrus juice.",
        techniqueLore: "Double-strain through a fine-mesh conical strainer to catch tiny ice shards so the mouthfeel remains mirror-smooth from first sip to last."
    },
    {
        id: "dry-martini",
        name: "Classic Dry Martini",
        category: "Classic",
        era: "Circa 1900s • New York / San Francisco",
        glassware: "martini",
        glasswareName: "Martini",
        method: "stir",
        methodName: "Stirred over Ice",
        ingredients: ["London Dry Gin", "Dry Vermouth", "Orange Bitters", "Lemon Peel or Olive"],
        decoys: ["Sweet Vermouth", "Vodka", "Maraschino Liqueur", "Simple Syrup"],
        canonicalRecipe: [
            { item: "London Dry Gin", amount: "2.5 oz (75 ml)" },
            { item: "Dry French Vermouth", amount: "0.5 oz (15 ml)" },
            { item: "Orange Bitters", amount: "1 Dash (Classic Spec)" },
            { item: "Lemon Peel or Castelvetrano Olive", amount: "1 Garnish" }
        ],
        tastingNotes: ["Bone Dry", "Pine Juniper", "Delicate Floral", "Silken"],
        history: "The apex of cocktail minimalism. Evolving from the sweeter Martinez into a bone-dry beacon of early 20th-century cafe society.",
        proTip: "Chill your glassware in a freezer below 0°F. A Martini should be served brutally cold; warm temperatures expose unrefined alcohol burn.",
        techniqueLore: "Stir with high-density ice cubes for 45 revolutions. Stirring maintains velvety density and a mirror-like clarity unattainable by shaking."
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
            { item: "Straight Rye Whiskey (100 Proof)", amount: "2.0 oz (60 ml)" },
            { item: "Sweet Italian Vermouth", amount: "1.0 oz (30 ml)" },
            { item: "Angostura Bitters", amount: "2 Dashes" },
            { item: "Luxardo Brandied Cherry", amount: "1 Garnish" }
        ],
        tastingNotes: ["Dark Cherry", "Spicy Rye Grain", "Warming Botanical", "Vanilla Oak"],
        history: "A timeless masterpiece created in New York City. The peppery rye grain cuts cleanly across the lush, fortified wine herbal sweetness.",
        proTip: "Always reach for spicy 100-proof Straight Rye rather than softer Bourbon to avoid a flabby, overly sweet flavor profile.",
        techniqueLore: "Serve chilled in a stemmed Nick & Nora glass to prevent the drinker's hand warmth from raising the cocktail's temperature."
    },
    {
        id: "hurricane",
        name: "New Orleans Hurricane",
        category: "Tiki Classic",
        era: "Est. 1940s • Pat O'Brien's, New Orleans",
        glassware: "hurricane",
        glasswareName: "Hurricane",
        method: "shake",
        methodName: "Vigorously Shaken",
        ingredients: ["Dark Jamaican Rum", "White Rum", "Passion Fruit Purée / Syrup", "Fresh Lemon Juice", "Real Grenadine"],
        decoys: ["Bourbon", "Orange Juice", "Pineapple Juice", "Blue Curaçao"],
        canonicalRecipe: [
            { item: "Dark Jamaican Overproof Rum", amount: "2.0 oz (60 ml)" },
            { item: "Light Rum", amount: "2.0 oz (60 ml)" },
            { item: "Passion Fruit Syrup", amount: "1.5 oz (45 ml)" },
            { item: "Fresh Lemon Juice", amount: "1.0 oz (30 ml)" },
            { item: "Pomegranate Grenadine", amount: "0.5 oz (15 ml)" }
        ],
        tastingNotes: ["Tart Passion Fruit", "Funky Molasses", "Sweet Pomegranate", "Island Punch"],
        history: "Created by Pat O'Brien during WWII when whiskey was rationed and bar owners were forced to buy up to 50 cases of rum to secure a single case of scotch.",
        proTip: "Avoid commercial neon red Hurricane mixes; authentic tart passion fruit syrup and fresh lemon juice transform this drink into a world-class punch.",
        techniqueLore: "The curved glass shape was modeled after hurricane kerosene lamp glass chimneys ubiquitous across New Orleans."
    },
    {
        id: "margarita",
        name: "Classic Margarita",
        category: "Agave Classic",
        era: "Est. 1938 • Baja California, Mexico",
        glassware: "margarita-glass",
        glasswareName: "Margarita",
        method: "shake",
        methodName: "Vigorously Shaken",
        ingredients: ["Blanco Tequila", "Cointreau", "Fresh Lime Juice", "Agave Nectar"],
        decoys: ["Mezcal", "Simple Syrup", "Lemon Juice", "Orange Bitters"],
        canonicalRecipe: [
            { item: "Blanco Tequila (100% Blue Agave)", amount: "2.0 oz (60 ml)" },
            { item: "Cointreau / Triple Sec", amount: "0.75 oz (22.5 ml)" },
            { item: "Fresh Lime Juice", amount: "0.75 oz (22.5 ml)" },
            { item: "Agave Nectar", amount: "1 Barspoon" }
        ],
        tastingNotes: ["Crisp Citrus", "Earthy Agave", "Bright Saline", "Candied Orange"],
        history: "A descendant of the 1930s Daisy family of cocktails (spirit + citrus + orange liqueur), reformulated to celebrate Mexican blue agave spirits.",
        proTip: "Salt only half of the glass perimeter. This allows the guest to choose between crisp saline bursts and pure citrus agave sips.",
        techniqueLore": "Vigorous shaking with large, dense cubes shatters microscopic ice shards through citrus pectin, producing an opaque, frosty velvet texture."
    },
    {
        id: "b-52",
        name: "B-52 Pousse-Café",
        category: "Disco Era Layered Shot",
        era: "Est. 1977 • Banff Springs Hotel, Alberta",
        glassware: "shot",
        glasswareName: "Shot Glass",
        method: "build",
        methodName: "Layered over Spoon",
        ingredients: ["Coffee Liqueur (Kahlúa)", "Irish Cream (Baileys)", "Grand Marnier (Orange Cognac)"],
        decoys: ["Vodka", "Dark Rum", "Amaretto", "Sambuca"],
        canonicalRecipe: [
            { item: "Coffee Liqueur (e.g. Kahlúa)", amount: "0.5 oz (15 ml) [Bottom]" },
            { item: "Irish Cream (e.g. Baileys)", amount: "0.5 oz (15 ml) [Middle]" },
            { item: "Grand Marnier (Triple Sec)", amount: "0.5 oz (15 ml) [Top]" }
        ],
        tastingNotes: ["Rich Espresso", "Creamy Vanilla", "Candied Orange", "Velvet Cocoa"],
        history: "Invented by Peter Fich at the Banff Springs Hotel, named after the Boeing B-52 Stratofortress bomber and the band The B-52's.",
        proTip: "Pour layers slowly over the back of a barspoon touching the glass wall. The liqueurs must be warm or room temperature; cold liquids blend easily.",
        techniqueLore": "Specific gravity differences (Kahlúa: 1.18 g/ml, Baileys: 1.05 g/ml, Grand Marnier: 1.03 g/ml) allow the distinct layers to float."
    },
    {
        id: "mint-julep",
        name: "Kentucky Mint Julep",
        category: "American Heritage",
        era: "Circa 1800 • American South / Louisville, KY",
        glassware: "julep-cup",
        glasswareName: "Julep Cup",
        method: "build",
        methodName: "Muddled & Built",
        ingredients: ["Kentucky Straight Bourbon", "Fresh Spearmint", "Demerara Syrup", "Crushed Ice"],
        decoys: ["Rye Whiskey", "Club Soda", "Lemon Juice", "Bitters"],
        canonicalRecipe: [
            { item: "Kentucky Straight Bourbon (High Proof)", amount: "2.5 oz (75 ml)" },
            { item: "Demerara Syrup (1:1)", amount: "0.5 oz (15 ml)" },
            { item: "Fresh Mint Leaves", amount: "8–10 Leaves" },
            { item: "Pellet / Pebble Crushed Ice", amount: "Packed to Dome" }
        ],
        tastingNotes: ["Cooling Mint", "Warm Vanilla", "Charred Oak", "Caramel"],
        history: "Synonymous with Churchill Downs and the Kentucky Derby since 1938, originating as an early morning medicine in Virginia and Kentucky.",
        proTip: "Hold the pewter julep cup strictly by the top rim or bottom base so your hand heat doesn't melt the exterior frost coating.",
        techniqueLore": "Stirring high-proof bourbon with crushed ice produces frost on silver or pewter, insulating the spirit at ice-cold temperatures."
    },
    {
        id: "moscow-mule",
        name: "Moscow Mule",
        category: "Mid-Century Classic",
        era: "Est. 1941 • Cock 'n Bull, Hollywood, CA",
        glassware: "copper-mug",
        glasswareName: "Copper Mug",
        method: "build",
        methodName: "Built in Glass",
        ingredients: ["Vodka", "Fresh Lime Juice", "Spicy Ginger Beer", "Lime Wheel"],
        decoys: ["Gin", "Ginger Ale", "Simple Syrup", "Lemon Juice"],
        canonicalRecipe: [
            { item: "Vodka", amount: "2.0 oz (60 ml)" },
            { item: "Fresh Lime Juice", amount: "0.75 oz (22.5 ml)" },
            { item: "Spicy Ginger Beer", amount: "Top (~4.0 oz)" },
            { item: "Fresh Lime Wheel & Mint", amount: "1 Garnish" }
        ],
        tastingNotes: ["Fiery Ginger", "Tart Lime", "Crisp Clean", "Chilled Frost"],
        history: "Created when John Martin of Smirnoff, Jack Morgan of the Cock 'n Bull restaurant, and a businesswoman with excess copper mugs joined forces to market vodka in America.",
        proTip: "Use fermented, fiery ginger beer (like Fever-Tree or Bundaberg), not sweet ginger ale. Vodka requires sharp ginger heat for backbone.",
        techniqueLore": "Copper conducts cold rapidly, creating an exterior frost layer that keeps the drink sub-zero and numbs the lips during sips."
    },
    {
        id: "b-and-b",
        name: "B&B (Brandy & Bénédictine)",
        category: "Interwar Digestif",
        era: "Circa 1930s • 21 Club, NYC",
        glassware: "snifter",
        glasswareName: "Snifter",
        method: "build",
        methodName: "Layered / Built",
        ingredients: ["Cognac / Fine Brandy", "Bénédictine D.O.M."],
        decoys: ["Rye Whiskey", "Grand Marnier", "Drambuie", "Sweet Vermouth"],
        canonicalRecipe: [
            { item: "Cognac (VSOP)", amount: "1.0 oz (30 ml)" },
            { item: "Bénédictine D.O.M.", amount: "1.0 oz (30 ml)" }
        ],
        tastingNotes: ["Herbal Honey", "Dried Apricot", "Warm Cognac", "Saffron Spice"],
        history: "Originated at New York's 21 Club during the 1930s, pairing the herbal richness of Normandy monks' Bénédictine with dry French Cognac.",
        proTip: "Serve neat at room temperature. Swirl gently in the snifter and cradle the bowl in your palm to warm the aromatic botanical vapors.",
        techniqueLore": "The snifter's wide bowl and narrow inward rim trap volatile ester compounds, focusing herbal honey notes directly toward the olfactory system."
    },
    {
        id: "french-75",
        name: "French 75",
        category: "Prohibition Classic",
        era: "Est. 1915 • Harry's New York Bar, Paris",
        glassware: "champagne-flute",
        glasswareName: "Champagne Flute",
        method: "shake",
        methodName: "Shaken & Topped",
        ingredients: ["London Dry Gin", "Fresh Lemon Juice", "Simple Syrup", "Brut Champagne"],
        decoys: ["Vodka", "Club Soda", "Lime Juice", "Orange Liqueur"],
        canonicalRecipe: [
            { item: "London Dry Gin", amount: "1.0 oz (30 ml)" },
            { item: "Fresh Lemon Juice", amount: "0.5 oz (15 ml)" },
            { item: "Simple Syrup (1:1)", amount: "0.5 oz (15 ml)" },
            { item: "Brut Champagne", amount: "Top (~2.5 oz)" }
        ],
        tastingNotes: ["Effervescent", "Crisp Botanical", "Tart Lemon", "Dry Toast"],
        history: "Named for the devastating French 75mm artillery gun, said to kick with identical force. Popularized in Paris and immortalized in the Savoy Cocktail Book.",
        proTip: "Use bone-dry Brut Champagne; sweetness from cheap sparkling wine destroys the brisk, razor-sharp lemon acidity.",
        techniqueLore": "Shake the gin, lemon, and syrup hard with ice, strain into your chilled glass, and gently float cold Champagne on top to preserve carbonation."
    },
    {
        id: "aperol-spritz",
        name: "Aperol Spritz",
        category: "Italian Aperitivo",
        era: "Est. 1950s • Venice / Padua, Italy",
        glassware: "wine-glass",
        glasswareName: "Wine Glass",
        method: "build",
        methodName: "Built in Glass",
        ingredients: ["Prosecco", "Aperol", "Club Soda", "Fresh Orange Slice"],
        decoys: ["Campari", "Sweet Vermouth", "Gin", "Lemon Juice"],
        canonicalRecipe: [
            { item: "Dry Prosecco (DOC)", amount: "3.0 oz (90 ml)" },
            { item: "Aperol", amount: "2.0 oz (60 ml)" },
            { item: "Chilled Club Soda", amount: "1.0 oz (30 ml)" },
            { item: "Castelvetrano Olive & Orange Slice", amount: "1 Garnish each" }
        ],
        tastingNotes: ["Bittersweet Orange", "Crisp Effervescence", "Rhubarb & Gentian", "Floral Peach"],
        history: "Derived from the 19th-century Austrian Habsburg soldiers' practice of 'spritzing' heavy Venetian wine with water to make it lighter.",
        proTip: "Follow the Venetian 3-2-1 rule: 3 parts Prosecco, 2 parts Aperol, 1 splash soda. Pour Prosecco first to prevent Aperol from sinking.",
        techniqueLore": "Serving in a large stemmed wine glass filled with ice keeps the drink cold on warm terraces without over-dilution."
    },
    {
        id: "michelada",
        name: "Mexican Michelada",
        category: "Mexican Heritage",
        era: "Circa 1960s • San Luis Potosí, Mexico",
        glassware: "pilsner",
        glasswareName: "Pilsner",
        method: "build",
        methodName: "Built in Glass",
        ingredients: ["Mexican Crisp Lager", "Fresh Lime Juice", "Worcestershire Sauce", "Hot Sauce (Valentina/Cholula)", "Tajín / Salt Rim"],
        decoys: ["Tequila", "Tomato Puree", "Orange Juice", "Mezcal"],
        canonicalRecipe: [
            { item: "Cold Mexican Lager (e.g. Modelo)", amount: "Top Full Bottle" },
            { item: "Fresh Lime Juice", amount: "1.0 oz (30 ml)" },
            { item: "Worcestershire Sauce (Salsa Inglesa)", amount: "3 Dashes" },
            { item: "Maggi Seasoning & Hot Sauce", amount: "2 Dashes each" },
            { item: "Chili-Lime Salt (Tajín)", amount: "Full Rim on Glass" }
        ],
        tastingNotes: ["Zesty Saline", "Savory Umami", "Crisp Malt", "Fiery Chili"],
        history: "Named as a contraction of 'Mi Chela Helada' ('My Ice-Cold Beer') or credited to Michel Ésper at the Club Deportivo Potosino in Mexico.",
        proTip: "Use a crisp, clean adjunct lager. Heavy, hoppy IPAs or rich stouts clash with the tart lime acidity and savory sauces.",
        techniqueLore": "The tall, flared pilsner glass showcases carbonation rising through savory seasonings while supporting a chili-lime rim."
    },
    {
        id: "mai-tai",
        name: "1944 Trader Vic Mai Tai",
        category: "Tiki Heritage",
        era: "Est. 1944 • Hinky Dinks, Oakland, CA",
        glassware: "tiki-mug",
        glasswareName: "Tiki Mug",
        method: "shake",
        methodName: "Vigorously Shaken",
        ingredients: ["Aged Jamaican Rum", "Rhum Agricole", "Orange Curaçao", "Orgeat (Almond Syrup)", "Fresh Lime Juice"],
        decoys: ["Pineapple Juice", "Grenadine", "Spiced Rum", "Club Soda"],
        canonicalRecipe: [
            { item: "Aged Jamaican Pot Still Rum", amount: "1.0 oz (30 ml)" },
            { item: "Martinique Rhum Agricole", amount: "1.0 oz (30 ml)" },
            { item: "Pierre Ferrand Dry Curaçao", amount: "0.5 oz (15 ml)" },
            { item: "Orgeat (Almond Milk Syrup)", amount: "0.5 oz (15 ml)" },
            { item: "Fresh Lime Juice", amount: "1.0 oz (30 ml)" }
        ],
        tastingNotes: ["Nutty Almond", "Funky Molasses", "Tart Lime", "Candied Orange"],
        history: "Trader Vic Bergeron shook this for Tahitian friends who exclaimed 'Maita'i roa a'e!' ('Out of this world!'). True Tiki contains no neon mixers or grenadine.",
        proTip": "Slap a fresh mint bouquet against the back of your hand before resting it alongside a spent lime wheel hull to evoke an island palm tree.",
        techniqueLore": "Shake with crushed ice for only 6 seconds, then pour unstrained into your mug to immediately chill and dilute funky pot-still rums."
    }
];

/* ==========================================================================
   Complete Vector Glassware (16) & Hardware Registry (4)
   ========================================================================== */
const HARDWARE_LIBRARY = {
    glassware: [
        {
            id: "rocks",
            name: "Rocks / Lowball",
            svg: `<svg viewBox="0 0 24 24" class="hw-icon-svg"><path d="M5 5 L7 20 Q12 21 17 20 L19 5 Z" /><line x1="4.5" y1="5" x2="19.5" y2="5" stroke-width="1.5"/><path d="M7 17 Q12 18 17 17" opacity="0.4"/></svg>`
        },
        {
            id: "highball",
            name: "Highball",
            svg: `<svg viewBox="0 0 24 24" class="hw-icon-svg"><path d="M7 3 L8 21 Q12 21.5 16 21 L17 3 Z" /><line x1="6.5" y1="3" x2="17.5" y2="3" stroke-width="1.5"/></svg>`
        },
        {
            id: "collins",
            name: "Collins",
            svg: `<svg viewBox="0 0 24 24" class="hw-icon-svg"><path d="M8 2 L8.5 22 Q12 22.5 15.5 22 L16 2 Z" /><line x1="7.5" y1="2" x2="16.5" y2="2" stroke-width="1.5"/><line x1="8.3" y1="18" x2="15.7" y2="18" opacity="0.3"/></svg>`
        },
        {
            id: "coupe",
            name: "Cocktail Coupe",
            svg: `<svg viewBox="0 0 24 24" class="hw-icon-svg"><path d="M4 6 Q12 15 20 6 Z" /><line x1="12" y1="13" x2="12" y2="20" stroke-width="1.8"/><path d="M8 20 Q12 19 16 20" stroke-width="1.8"/></svg>`
        },
        {
            id: "martini",
            name: "Martini",
            svg: `<svg viewBox="0 0 24 24" class="hw-icon-svg"><path d="M4 4 L12 13 L20 4 Z" /><line x1="12" y1="13" x2="12" y2="20" stroke-width="1.8"/><path d="M8 20 Q12 19.5 16 20" stroke-width="1.8"/></svg>`
        },
        {
            id: "nick-nora",
            name: "Nick & Nora",
            svg: `<svg viewBox="0 0 24 24" class="hw-icon-svg"><path d="M6 5 C6 14 18 14 18 5 Z" /><line x1="12" y1="12.5" x2="12" y2="20" stroke-width="1.8"/><path d="M8 20 Q12 19 16 20" stroke-width="1.8"/></svg>`
        },
        {
            id: "hurricane",
            name: "Hurricane",
            svg: `<svg viewBox="0 0 24 24" class="hw-icon-svg"><path d="M7 3 Q6 10 9 12 Q5 17 8 20 L16 20 Q19 17 15 12 Q18 10 17 3 Z" /><path d="M8 20 L16 20 L16 22 L8 22 Z"/></svg>`
        },
        {
            id: "margarita-glass",
            name: "Margarita",
            svg: `<svg viewBox="0 0 24 24" class="hw-icon-svg"><path d="M4 4 Q12 7 20 4 L17 9 Q14 10 14 13 L14 19 L10 19 L10 13 Q10 10 7 9 Z" /><path d="M7 21 L17 21" stroke-width="1.8"/></svg>`
        },
        {
            id: "shot",
            name: "Shot Glass",
            svg: `<svg viewBox="0 0 24 24" class="hw-icon-svg"><path d="M6 7 L8 21 Q12 21.5 16 21 L18 7 Z" /><line x1="5.5" y1="7" x2="18.5" y2="7" stroke-width="1.5"/><rect x="8" y="18" width="8" height="3" opacity="0.4"/></svg>`
        },
        {
            id: "julep-cup",
            name: "Julep Cup",
            svg: `<svg viewBox="0 0 24 24" class="hw-icon-svg"><path d="M6 5 L7.5 20 L16.5 20 L18 5 Z" /><path d="M5 5 L19 5" stroke-width="2"/><path d="M6.5 20 L17.5 20" stroke-width="2"/></svg>`
        },
        {
            id: "copper-mug",
            name: "Copper Mug",
            svg: `<svg viewBox="0 0 24 24" class="hw-icon-svg"><rect x="5" y="6" width="12" height="14" rx="2"/><path d="M17 9 C20 9 20 17 17 17" stroke-width="1.8" fill="none"/></svg>`
        },
        {
            id: "snifter",
            name: "Snifter",
            svg: `<svg viewBox="0 0 24 24" class="hw-icon-svg"><path d="M8 5 C3 11 6 16 12 16 C18 16 21 11 16 5 Z" /><line x1="12" y1="16" x2="12" y2="20" stroke-width="1.8"/><path d="M8 20 L16 20" stroke-width="1.8"/></svg>`
        },
        {
            id: "champagne-flute",
            name: "Champagne Flute",
            svg: `<svg viewBox="0 0 24 24" class="hw-icon-svg"><path d="M9 2 L10 14 Q12 16 14 14 L15 2 Z" /><line x1="12" y1="15" x2="12" y2="21" stroke-width="1.8"/><path d="M8 21 L16 21" stroke-width="1.8"/></svg>`
        },
        {
            id: "wine-glass",
            name: "Wine Glass",
            svg: `<svg viewBox="0 0 24 24" class="hw-icon-svg"><path d="M6 4 C6 13 18 13 18 4 Z" /><line x1="12" y1="13" x2="12" y2="20" stroke-width="1.8"/><path d="M8 20 Q12 19.5 16 20" stroke-width="1.8"/></svg>`
        },
        {
            id: "pilsner",
            name: "Pilsner",
            svg: `<svg viewBox="0 0 24 24" class="hw-icon-svg"><path d="M7 2 Q10 13 8 20 L16 20 Q14 13 17 2 Z" /><path d="M7.5 20 L16.5 20" stroke-width="2"/></svg>`
        },
        {
            id: "tiki-mug",
            name: "Tiki Mug",
            svg: `<svg viewBox="0 0 24 24" class="hw-icon-svg"><rect x="6" y="3" width="12" height="18" rx="2"/><circle cx="9" cy="8" r="1.5"/><circle cx="15" cy="8" r="1.5"/><path d="M9 16 Q12 13 15 16" stroke-width="1.5" fill="none"/></svg>`
        }
    ],
    methods: [
        {
            id: "build",
            name: "Build in Glass",
            svg: `<svg viewBox="0 0 24 24" class="hw-icon-svg"><path d="M8 3 L8 19 Q12 21 16 19 L16 3 Z"/><line x1="6" y1="11" x2="18" y2="11" stroke-dasharray="2,2"/></svg>`
        },
        {
            id: "stir",
            name: "Stir (Ice)",
            svg: `<svg viewBox="0 0 24 24" class="hw-icon-svg"><circle cx="12" cy="12" r="8" stroke-dasharray="3,3"/><path d="M12 4 L12 20"/><path d="M12 20 C10 20 10 22 12 22 C14 22 14 20 12 20"/></svg>`
        },
        {
            id: "shake",
            name: "Vigorous Shake",
            svg: `<svg viewBox="0 0 24 24" class="hw-icon-svg"><path d="M7 8 L17 8 L15 20 L9 20 Z"/><path d="M8 8 L9 4 L15 4 L16 8 Z"/><line x1="6" y1="12" x2="18" y2="12" stroke-width="1.2"/></svg>`
        },
        {
            id: "throw",
            name: "Throw / Roll",
            svg: `<svg viewBox="0 0 24 24" class="hw-icon-svg"><path d="M4 6 L10 6 L9 13 L5 13 Z"/><path d="M15 11 L21 11 L20 18 L16 18 Z"/><path d="M8 9 C11 5 13 15 17 12" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>`
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

    // Ingredients array: { targetName, isRevealed, userSelection }
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

    // Helper: Safely resolve glassware object with graceful fallback
    const resolveGlass = (id) => HARDWARE_LIBRARY.glassware.find(g => g.id === id) || HARDWARE_LIBRARY.glassware[0];
    // Helper: Safely resolve method object with graceful fallback
    const resolveMethod = (id) => HARDWARE_LIBRARY.methods.find(m => m.id === id) || HARDWARE_LIBRARY.methods[0];

    // 1. Render Glassware Slot
    if (puzzleState.glassRevealed) {
        const glassObj = resolveGlass(drink.glassware);
        dom.displayGlass.className = "hw-placeholder filled";
        dom.displayGlass.innerHTML = `${glassObj.svg} <span>${glassObj.name}</span>`;
    } else if (puzzleState.userGlass) {
        const glassObj = resolveGlass(puzzleState.userGlass);
        dom.displayGlass.className = "hw-placeholder filled";
        dom.displayGlass.innerHTML = `${glassObj.svg} <span>${glassObj.name}</span>`;
    } else {
        dom.displayGlass.className = "hw-placeholder";
        dom.displayGlass.innerHTML = `<span class="plus-icon">+</span> Select Glass`;
    }

    // 2. Render Method Slot
    if (puzzleState.methodRevealed) {
        const methodObj = resolveMethod(drink.method);
        dom.displayMethod.className = "hw-placeholder filled";
        dom.displayMethod.innerHTML = `${methodObj.svg} <span>${methodObj.name}</span>`;
    } else if (puzzleState.userMethod) {
        const methodObj = resolveMethod(puzzleState.userMethod);
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

    // B. Render Glassware Choices (All 16 glasses)
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

    // C. Render Method Choices (All 4 methods)
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
   External JSON Hydration with embedded fallback
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
        console.info("Using embedded master drinks library.");
    }
    loadDrink(0);
}

// Boot application
document.addEventListener("DOMContentLoaded", () => {
    setupEvents();
    hydrateDrinksFromJSON();
});