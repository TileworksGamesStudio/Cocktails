javascript
/* ==========================================================================
   SPECS // Cocktail Masterclass Engine
   Architecture Designed for Effortless Menu Expansion & Bartender Training
   ========================================================================== */

/**
 * MASTER COCKTAIL DATABASE
 * Contains 50 canonical classic cocktails and 5 custom house craft signatures.
 */
const COCKTAIL_DATABASE = [
    /* ======================================================================
       50 CANONICAL CLASSIC COCKTAILS
       ====================================================================== */
    {
        id: "old-fashioned",
        name: "Old Fashioned",
        category: "classic",
        origin: "Est. 1880s • Louisville, KY",
        glassware: "rocks",
        method: "stir",
        ice: "large-rock",
        garnish: "orange-peel",
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
        decoys: [
            { name: "Sweet Vermouth", type: "Fortified Wine" },
            { name: "Campari", type: "Liqueur" },
            { name: "Fresh Lemon Juice", type: "Citrus" }
        ],
        lore: {
            history: "The primordial cocktail: spirits, sugar, water, and bitters. In the 1880s at the Pendennis Club in Louisville, purists demanded their drinks made the 'old-fashioned' way.",
            science: "Pure spirit and sugar cocktails must be stirred with dense, clear ice for 30 seconds to reach 28°F and 20-25% dilution without air bubbles.",
            proTip: "Express orange peel oils across the surface and rim, but never muddle fruit salad into the drink.",
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
            history: "Count Camillo Negroni in Florence asked bartender Forsco Scarselli to strengthen his Americano by swapping soda with gin.",
            science: "The 1:1:1 ratio relies on the balance between juniper spine, herbal wine sweetness, and gentian bitterness.",
            proTip: "Keep sweet vermouth refrigerated at all times to prevent oxidation from spoiling the botanical notes.",
            flavorTags: ["Bitter-Sweet", "Botanical", "Aperitivo"]
        }
    },
    {
        id: "manhattan",
        name: "Manhattan",
        category: "classic",
        origin: "Est. 1870s • The Manhattan Club, NYC",
        glassware: "coupe",
        method: "stir",
        ice: "neat",
        garnish: "cherry",
        liquidColorBottom: "#7c2d12",
        liquidColorTop: "#b45309",
        hasFoam: false,
        isCarbonated: false,
        totalTargetVolumeOz: 3.0,
        ingredients: [
            { name: "Rye Whiskey", measureOz: 2.0, measureMl: 60, type: "Spirit" },
            { name: "Sweet Vermouth", measureOz: 1.0, measureMl: 30, type: "Fortified Wine" },
            { name: "Angostura Bitters", measureOz: "dash", measureMl: "dash", type: "Bitters" }
        ],
        decoys: [
            { name: "Dry Vermouth", type: "Fortified Wine" },
            { name: "Bourbon / Rye Whiskey", type: "Spirit" },
            { name: "Simple Syrup", type: "Sweetener" }
        ],
        lore: {
            history: "Invented in New York City during the 1870s, it cemented the timeless pairing of American whiskey and Italian vermouth.",
            science: "Spicy rye cuts through the rich herbal sugars of Italian vermouth much better than sweeter bourbon.",
            proTip: "Never shake a Manhattan; shaking creates unsightly cloudiness and air pockets that ruin its silky mouthfeel.",
            flavorTags: ["Spicy Rye", "Dark Cherry", "Herbal Vermouth"]
        }
    },
    {
        id: "daiquiri",
        name: "Classic Daiquiri",
        category: "classic",
        origin: "Est. 1898 • Daiquirí, Cuba",
        glassware: "coupe",
        method: "shake",
        ice: "neat",
        garnish: "lime-wheel",
        liquidColorBottom: "#d9f99d",
        liquidColorTop: "#ecfccb",
        hasFoam: false,
        isCarbonated: false,
        totalTargetVolumeOz: 3.5,
        ingredients: [
            { name: "White Rum", measureOz: 2.0, measureMl: 60, type: "Rum" },
            { name: "Fresh Lime Juice", measureOz: 0.75, measureMl: 22.5, type: "Citrus" },
            { name: "Demerara / Simple Syrup", measureOz: 0.75, measureMl: 22.5, type: "Sweetener" }
        ],
        decoys: [
            { name: "Aged Jamaican Rum", type: "Rum" },
            { name: "Maraschino Liqueur", type: "Liqueur" },
            { name: "Grapefruit Juice", type: "Citrus" }
        ],
        lore: {
            history: "Invented by American mining engineer Jennings Cox in Cuba, it is the quintessential standard for testing a bartender's balance.",
            science: "The clean acidity of lime must exactly counterbalance the sugar proof of rum through cold, aggressive aeration.",
            proTip: "Shake hard for only 10-12 seconds with sharp ice cubes, and fine strain out all ice shards for a pristine wash line.",
            flavorTags: ["Crisp Citrus", "Sugar Cane", "Bright & Refreshing"]
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
        totalTargetVolumeOz: 3.75,
        ingredients: [
            { name: "Blanco Tequila", measureOz: 2.0, measureMl: 60, type: "Agave Spirit" },
            { name: "Cointreau / Triple Sec", measureOz: 0.75, measureMl: 22.5, type: "Orange Liqueur" },
            { name: "Fresh Lime Juice", measureOz: 0.75, measureMl: 22.5, type: "Fresh Citrus" },
            { name: "Agave Nectar", measureOz: 0.25, measureMl: 7.5, type: "Sweetener" }
        ],
        decoys: [
            { name: "Mezcal", type: "Agave Spirit" },
            { name: "Simple Syrup", type: "Sweetener" },
            { name: "Fresh Lemon Juice", type: "Fresh Citrus" }
        ],
        lore: {
            history: "A variation on the Daisy family (Margarita is Spanish for Daisy) combining agave spirits with citrus and orange liqueur.",
            science: "Agave nectar contains fructose, which registers sweet at colder temperatures than sucrose simple syrup.",
            proTip: "Salt only half the rim so the patron can choose whether to drink with or without salt.",
            flavorTags: ["Crisp Citrus", "Earthy Agave", "Saline Balance"]
        }
    },
    {
        id: "whiskey-sour",
        name: "Whiskey Sour",
        category: "classic",
        origin: "Est. 1862 • Jerry Thomas Guide",
        glassware: "coupe",
        method: "shake",
        ice: "neat",
        garnish: "cherry",
        liquidColorBottom: "#b45309",
        liquidColorTop: "#fef08a",
        hasFoam: true,
        isCarbonated: false,
        totalTargetVolumeOz: 3.5,
        ingredients: [
            { name: "Bourbon / Rye Whiskey", measureOz: 2.0, measureMl: 60, type: "Spirit" },
            { name: "Fresh Lemon Juice", measureOz: 0.75, measureMl: 22.5, type: "Citrus" },
            { name: "Demerara / Simple Syrup", measureOz: 0.75, measureMl: 22.5, type: "Sweetener" },
            { name: "Egg White / Aquafaba", measureOz: 0.5, measureMl: 15, type: "Emulsifier" }
        ],
        decoys: [
            { name: "Fresh Lime Juice", type: "Citrus" },
            { name: "Club Soda", type: "Carbonated" },
            { name: "Sweet Vermouth", type: "Fortified Wine" }
        ],
        lore: {
            history: "First recorded by Jerry Thomas in 1862, the sour family balanced harsh frontier liquor with citrus acid and sugar.",
            science: "Egg albumin requires a dry shake (no ice) to unwind protein chains before shaking with ice to chill and create a velvety foam head.",
            proTip: "Drop three dots of aromatic bitters onto the foam head to mask raw egg aroma.",
            flavorTags: ["Velvety Texture", "Zesty Lemon", "Vanilla Oak"]
        }
    },
    {
        id: "dry-martini",
        name: "Dry Martini",
        category: "classic",
        origin: "Est. 1900s • Knickerbocker Hotel, NYC",
        glassware: "nick-nora",
        method: "stir",
        ice: "neat",
        garnish: "orange-peel",
        liquidColorBottom: "#f8fafc",
        liquidColorTop: "#ffffff",
        hasFoam: false,
        isCarbonated: false,
        totalTargetVolumeOz: 3.0,
        ingredients: [
            { name: "London Dry Gin", measureOz: 2.5, measureMl: 75, type: "Spirit" },
            { name: "Dry Vermouth", measureOz: 0.5, measureMl: 15, type: "Fortified Wine" },
            { name: "Orange Bitters", measureOz: "dash", measureMl: "dash", type: "Bitters" }
        ],
        decoys: [
            { name: "Vodka", type: "Spirit" },
            { name: "Sweet Vermouth", type: "Fortified Wine" },
            { name: "Angostura Bitters", type: "Bitters" }
        ],
        lore: {
            history: "Evolved from the sweeter Martinez into a bone-dry benchmark of modern cocktail culture.",
            science: "A proper 5:1 ratio stirred for 40 rotations cools the gin to -2°C, creating a dense, crystalline texture.",
            proTip: "Keep the serving glass in the freezer. A lukewarm glass destroys a Martini instantly.",
            flavorTags: ["Bone Dry", "Pine Juniper", "Crisp Vermouth"]
        }
    },
    {
        id: "aviation",
        name: "Aviation",
        category: "classic",
        origin: "Est. 1916 • Hugo Ensslin, NYC",
        glassware: "coupe",
        method: "shake",
        ice: "neat",
        garnish: "cherry",
        liquidColorBottom: "#4338ca",
        liquidColorTop: "#a5b4fc",
        hasFoam: false,
        isCarbonated: false,
        totalTargetVolumeOz: 3.5,
        ingredients: [
            { name: "London Dry Gin", measureOz: 2.0, measureMl: 60, type: "Spirit" },
            { name: "Maraschino Liqueur", measureOz: 0.5, measureMl: 15, type: "Cherry Liqueur" },
            { name: "Crème de Violette", measureOz: 0.25, measureMl: 7.5, type: "Floral Liqueur" },
            { name: "Fresh Lemon Juice", measureOz: 0.75, measureMl: 22.5, type: "Citrus" }
        ],
        decoys: [
            { name: "Blue Curaçao", type: "Liqueur" },
            { name: "Demerara / Simple Syrup", type: "Sweetener" },
            { name: "Sweet Vermouth", type: "Fortified Wine" }
        ],
        lore: {
            history: "Named for the dawn of aviation, its pale sky-blue tint mirrors flight across the morning sky.",
            science: "Violette is pungent; adding even 0.1 oz too much turns the cocktail into liquid soap.",
            proTip: "A single barspoon of Crème de Violette is often plenty to achieve the iconic sky-blue hue.",
            flavorTags: ["Floral Violet", "Tart Cherry", "Crisp Botanical"]
        }
    },
    {
        id: "sidecar",
        name: "Sidecar",
        category: "classic",
        origin: "Est. 1920s • Harry's New York Bar, Paris",
        glassware: "coupe",
        method: "shake",
        ice: "neat",
        garnish: "orange-peel",
        liquidColorBottom: "#c2410c",
        liquidColorTop: "#fdba74",
        hasFoam: false,
        isCarbonated: false,
        totalTargetVolumeOz: 3.5,
        ingredients: [
            { name: "Cognac", measureOz: 2.0, measureMl: 60, type: "Brandy" },
            { name: "Cointreau / Triple Sec", measureOz: 0.75, measureMl: 22.5, type: "Orange Liqueur" },
            { name: "Fresh Lemon Juice", measureOz: 0.75, measureMl: 22.5, type: "Citrus" }
        ],
        decoys: [
            { name: "Bourbon / Rye Whiskey", type: "Spirit" },
            { name: "Demerara / Simple Syrup", type: "Sweetener" },
            { name: "Fresh Lime Juice", type: "Citrus" }
        ],
        lore: {
            history: "Named for an American army captain who drove up to Harry's New York Bar in Paris in a motorcycle sidecar.",
            science: "Cognac's grape base bonds with orange peel oils inside Cointreau, producing warm dried fruit notes.",
            proTip: "Sugar the rim delicately; the sugar rim balances the tartness of unadulterated lemon juice.",
            flavorTags: ["Rich Cognac", "Candied Orange", "Zesty Lemon"]
        }
    },
    {
        id: "mai-tai",
        name: "1944 Mai Tai",
        category: "classic",
        origin: "Est. 1944 • Trader Vic, Oakland, CA",
        glassware: "rocks",
        method: "shake",
        ice: "crushed",
        garnish: "lime-wheel",
        liquidColorBottom: "#78350f",
        liquidColorTop: "#fbbf24",
        hasFoam: false,
        isCarbonated: false,
        totalTargetVolumeOz: 3.75,
        ingredients: [
            { name: "Aged Jamaican Rum", measureOz: 2.0, measureMl: 60, type: "Rum" },
            { name: "Orange Curaçao", measureOz: 0.5, measureMl: 15, type: "Orange Liqueur" },
            { name: "Orgeat", measureOz: 0.5, measureMl: 15, type: "Almond Syrup" },
            { name: "Fresh Lime Juice", measureOz: 0.75, measureMl: 22.5, type: "Citrus" }
        ],
        decoys: [
            { name: "Pineapple Juice", type: "Juice" },
            { name: "Grenadine", type: "Syrup" },
            { name: "White Rum", type: "Rum" }
        ],
        lore: {
            history: "Trader Vic Bergeron served it to Tahitian friends who exclaimed 'Mai Tai-Roa Aé!' ('Out of this world!').",
            science: "Real orgeat contains almond oils that emulsify with lime juice, adding viscosity and richness.",
            proTip: "Never add pineapple or orange juice to an authentic 1944 Trader Vic Mai Tai.",
            flavorTags: ["Funky Rum", "Toasted Almond", "Tart Citrus"]
        }
    },
    {
        id: "french-75",
        name: "French 75",
        category: "classic",
        origin: "Est. 1915 • Harry MacElhone, Paris",
        glassware: "coupe",
        method: "shake",
        ice: "neat",
        garnish: "orange-peel",
        liquidColorBottom: "#ca8a04",
        liquidColorTop: "#fef08a",
        hasFoam: false,
        isCarbonated: true,
        totalTargetVolumeOz: 4.0,
        ingredients: [
            { name: "London Dry Gin", measureOz: 1.0, measureMl: 30, type: "Spirit" },
            { name: "Fresh Lemon Juice", measureOz: 0.5, measureMl: 15, type: "Citrus" },
            { name: "Demerara / Simple Syrup", measureOz: 0.5, measureMl: 15, type: "Sweetener" },
            { name: "Champagne / Sparkling Wine", measureOz: 2.0, measureMl: 60, type: "Sparkling Wine" }
        ],
        decoys: [
            { name: "Cognac", type: "Brandy" },
            { name: "Club Soda", type: "Carbonated" },
            { name: "Cointreau / Triple Sec", type: "Orange Liqueur" }
        ],
        lore: {
            history: "Named for the French 75mm field gun because it hits with rapid, deceptive firepower.",
            science: "The dissolved CO2 in Champagne carries volatile gin aromatics up into the olfactory senses.",
            proTip: "Shake only the gin, lemon, and syrup, then top with cold Champagne in the glass.",
            flavorTags: ["Effervescent", "Crisp Lemon", "Dry Brioche"]
        }
    },
    {
        id: "sazerac",
        name: "Sazerac",
        category: "classic",
        origin: "Est. 1850s • New Orleans, LA",
        glassware: "rocks",
        method: "stir",
        ice: "neat",
        garnish: "orange-peel",
        liquidColorBottom: "#991b1b",
        liquidColorTop: "#ea580c",
        hasFoam: false,
        isCarbonated: false,
        totalTargetVolumeOz: 2.5,
        ingredients: [
            { name: "Rye Whiskey", measureOz: 2.0, measureMl: 60, type: "Spirit" },
            { name: "Demerara / Simple Syrup", measureOz: 0.25, measureMl: 7.5, type: "Sweetener" },
            { name: "Peychaud's Bitters", measureOz: "dash", measureMl: "dash", type: "Bitters" },
            { name: "Absinthe", measureOz: "dash", measureMl: "dash", type: "Herbal Spirit" }
        ],
        decoys: [
            { name: "Cognac", type: "Brandy" },
            { name: "Angostura Bitters", type: "Bitters" },
            { name: "Sweet Vermouth", type: "Fortified Wine" }
        ],
        lore: {
            history: "New Orleans' official cocktail, originally made with Sazerac de Forge Cognac before the phylloxera blight pushed it to rye.",
            science: "Absinthe should coat the inside surface of the chilled glass; discarding the excess leaves aromatics without overwhelming the palate.",
            proTip: "Serve neat in a chilled rocks glass with no ice, and discard the lemon peel after expressing oils.",
            flavorTags: ["Anise & Fennel", "Peppery Rye", "Cherry Bitters"]
        }
    },
    {
        id: "boulevardier",
        name: "Boulevardier",
        category: "classic",
        origin: "Est. 1927 • Erskine Gwynne, Paris",
        glassware: "rocks",
        method: "stir",
        ice: "large-rock",
        garnish: "orange-peel",
        liquidColorBottom: "#831843",
        liquidColorTop: "#dc2626",
        hasFoam: false,
        isCarbonated: false,
        totalTargetVolumeOz: 3.25,
        ingredients: [
            { name: "Bourbon / Rye Whiskey", measureOz: 1.5, measureMl: 45, type: "Spirit" },
            { name: "Campari", measureOz: 1.0, measureMl: 30, type: "Bitter Liqueur" },
            { name: "Sweet Vermouth", measureOz: 1.0, measureMl: 30, type: "Fortified Wine" }
        ],
        decoys: [
            { name: "London Dry Gin", type: "Spirit" },
            { name: "Aperol", type: "Bitter Liqueur" },
            { name: "Dry Vermouth", type: "Fortified Wine" }
        ],
        lore: {
            history: "Created for American socialite Erskine Gwynne, publisher of 'The Boulevardier' magazine in 1920s Paris.",
            science: "Bourbon's oak tannins and caramel depth stand up to Campari's assertive gentian bite better than neutral spirits.",
            proTip: "Use 100-proof bonded bourbon or rye to prevent the drink from becoming overly sweet.",
            flavorTags: ["Wood Vanilla", "Bittersweet Herb", "Rich Caramel"]
        }
    },
    {
        id: "corpse-reviver-2",
        name: "Corpse Reviver #2",
        category: "classic",
        origin: "Est. 1930 • Harry Craddock, Savoy London",
        glassware: "coupe",
        method: "shake",
        ice: "neat",
        garnish: "orange-peel",
        liquidColorBottom: "#a3e635",
        liquidColorTop: "#fef08a",
        hasFoam: false,
        isCarbonated: false,
        totalTargetVolumeOz: 3.0,
        ingredients: [
            { name: "London Dry Gin", measureOz: 0.75, measureMl: 22.5, type: "Spirit" },
            { name: "Cointreau / Triple Sec", measureOz: 0.75, measureMl: 22.5, type: "Orange Liqueur" },
            { name: "Lillet Blanc", measureOz: 0.75, measureMl: 22.5, type: "Aperitif Wine" },
            { name: "Fresh Lemon Juice", measureOz: 0.75, measureMl: 22.5, type: "Citrus" },
            { name: "Absinthe", measureOz: "dash", measureMl: "dash", type: "Herbal Spirit" }
        ],
        decoys: [
            { name: "Green Chartreuse", type: "Herbal Liqueur" },
            { name: "Sweet Vermouth", type: "Fortified Wine" },
            { name: "Maraschino Liqueur", type: "Liqueur" }
        ],
        lore: {
            history: "Harry Craddock noted: 'Four of these taken in swift succession will unrevive the corpse again.'",
            science: "Equal parts architecture balanced by a microscopic absinthe rinse that bridges citrus to piney gin.",
            proTip: "Spritz the absinthe rinse from an atomizer to ensure a light, uniform coating.",
            flavorTags: ["Complex Citrus", "Botanical Anise", "Gentle Honey"]
        }
    },
    {
        id: "last-word",
        name: "The Last Word",
        category: "classic",
        origin: "Est. 1916 • Detroit Athletic Club",
        glassware: "coupe",
        method: "shake",
        ice: "neat",
        garnish: "cherry",
        liquidColorBottom: "#15803d",
        liquidColorTop: "#86efac",
        hasFoam: false,
        isCarbonated: false,
        totalTargetVolumeOz: 3.0,
        ingredients: [
            { name: "London Dry Gin", measureOz: 0.75, measureMl: 22.5, type: "Spirit" },
            { name: "Green Chartreuse", measureOz: 0.75, measureMl: 22.5, type: "Herbal Liqueur" },
            { name: "Maraschino Liqueur", measureOz: 0.75, measureMl: 22.5, type: "Cherry Liqueur" },
            { name: "Fresh Lime Juice", measureOz: 0.75, measureMl: 22.5, type: "Citrus" }
        ],
        decoys: [
            { name: "Fresh Lemon Juice", type: "Citrus" },
            { name: "Absinthe", type: "Herbal Spirit" },
            { name: "Demerara / Simple Syrup", type: "Sweetener" }
        ],
        lore: {
            history: "Forgotten during Prohibition until Murray Stenson unearthed it at Seattle's Zig Zag Café in 2004.",
            science: "Chartreuse contains 130 alpine herbs; its intensity is balanced by the sharp acid of lime and nutty marasca cherries.",
            proTip: "Requires exact equal 0.75 oz parts; even slight measuring discrepancies will derail the balance.",
            flavorTags: ["Alpine Herbal", "Pungent Lime", "Funky Cherry"]
        }
    },
    {
        id: "penicillin",
        name: "Penicillin",
        category: "classic",
        origin: "Est. 2005 • Sam Ross, NYC",
        glassware: "rocks",
        method: "shake",
        ice: "large-rock",
        garnish: "orange-peel",
        liquidColorBottom: "#b45309",
        liquidColorTop: "#fcd34d",
        hasFoam: false,
        isCarbonated: false,
        totalTargetVolumeOz: 3.75,
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
            history: "Created by Sam Ross at Milk & Honey, it is the most influential Scotch modern classic of the 21st century.",
            science: "The Islay float delivers smoky aromatics to the nose while the palate experiences soothing ginger, honey, and lemon.",
            proTip: "Float the peated Scotch gently over the back of a barspoon directly on top of the large cube.",
            flavorTags: ["Peat Smoke", "Fiery Ginger", "Soothing Honey"]
        }
    },
    {
        id: "moscow-mule",
        name: "Moscow Mule",
        category: "classic",
        origin: "Est. 1941 • Chatham Hotel, NYC",
        glassware: "highball",
        method: "build",
        ice: "cubed",
        garnish: "lime-wheel",
        liquidColorBottom: "#fef08a",
        liquidColorTop: "#ffffff",
        hasFoam: false,
        isCarbonated: true,
        totalTargetVolumeOz: 5.75,
        ingredients: [
            { name: "Vodka", measureOz: 2.0, measureMl: 60, type: "Spirit" },
            { name: "Fresh Lime Juice", measureOz: 0.75, measureMl: 22.5, type: "Citrus" },
            { name: "Ginger Beer", measureOz: 3.0, measureMl: 90, type: "Carbonated" }
        ],
        decoys: [
            { name: "London Dry Gin", type: "Spirit" },
            { name: "Club Soda", type: "Carbonated" },
            { name: "Demerara / Simple Syrup", type: "Sweetener" }
        ],
        lore: {
            history: "Devised by John Martin and Jack Morgan to sell surplus Smirnoff vodka and Cock 'n Bull ginger beer.",
            science: "Ginger beer contains pungent gingerol compounds that benefit from dilution against high-proof vodka.",
            proTip: "Build directly in glass over ice; do not shake ginger beer.",
            flavorTags: ["Spicy Ginger", "Tart Lime", "Effervescent"]
        }
    },
    {
        id: "gimlet",
        name: "Classic Gimlet",
        category: "classic",
        origin: "Est. 1870s • British Royal Navy",
        glassware: "coupe",
        method: "shake",
        ice: "neat",
        garnish: "lime-wheel",
        liquidColorBottom: "#bef264",
        liquidColorTop: "#ecfccb",
        hasFoam: false,
        isCarbonated: false,
        totalTargetVolumeOz: 3.5,
        ingredients: [
            { name: "London Dry Gin", measureOz: 2.0, measureMl: 60, type: "Spirit" },
            { name: "Fresh Lime Juice", measureOz: 0.75, measureMl: 22.5, type: "Citrus" },
            { name: "Demerara / Simple Syrup", measureOz: 0.75, measureMl: 22.5, type: "Sweetener" }
        ],
        decoys: [
            { name: "Vodka", type: "Spirit" },
            { name: "Fresh Lemon Juice", type: "Citrus" },
            { name: "Cointreau / Triple Sec", type: "Orange Liqueur" }
        ],
        lore: {
            history: "Named after Surgeon Rear-Admiral Sir Thomas Gimlette, who prescribed lime juice with gin to ward off scurvy.",
            science: "Fresh lime juice combined with simple syrup creates a much cleaner, crisper profile than pasteurized bottled cordials.",
            proTip: "Shake hard with cold cubes to create fine micro-shards across the surface of the drink.",
            flavorTags: ["Zesty Lime", "Clean Juniper", "Crisp Balance"]
        }
    },
    {
        id: "mint-julep",
        name: "Mint Julep",
        category: "classic",
        origin: "Est. 1800s • American South",
        glassware: "rocks",
        method: "build",
        ice: "crushed",
        garnish: "orange-peel",
        liquidColorBottom: "#854d0e",
        liquidColorTop: "#ca8a04",
        hasFoam: false,
        isCarbonated: false,
        totalTargetVolumeOz: 2.5,
        ingredients: [
            { name: "Bourbon / Rye Whiskey", measureOz: 2.0, measureMl: 60, type: "Spirit" },
            { name: "Demerara / Simple Syrup", measureOz: 0.5, measureMl: 15, type: "Sweetener" },
            { name: "Fresh Mint Sprigs", measureOz: "dash", measureMl: "dash", type: "Herb" }
        ],
        decoys: [
            { name: "Fresh Lemon Juice", type: "Citrus" },
            { name: "Club Soda", type: "Carbonated" },
            { name: "Angostura Bitters", type: "Bitters" }
        ],
        lore: {
            history: "The legendary toast of the Kentucky Derby, traditionally served in frosted pewter or silver cups.",
            science: "Crushed ice provides rapid melt and dilution, chilling high-proof bourbon down to freezing point.",
            proTip: "Gently press the mint leaves; bruising or shredding them releases bitter, swampy chlorophyll.",
            flavorTags: ["Aromatic Mint", "Rich Bourbon", "Frosted Chill"]
        }
    },
    {
        id: "tom-collins",
        name: "Tom Collins",
        category: "classic",
        origin: "Est. 1876 • Jerry Thomas, NYC",
        glassware: "highball",
        method: "shake",
        ice: "cubed",
        garnish: "cherry",
        liquidColorBottom: "#ca8a04",
        liquidColorTop: "#fef08a",
        hasFoam: false,
        isCarbonated: true,
        totalTargetVolumeOz: 5.25,
        ingredients: [
            { name: "Old Tom Gin", measureOz: 2.0, measureMl: 60, type: "Spirit" },
            { name: "Fresh Lemon Juice", measureOz: 0.75, measureMl: 22.5, type: "Citrus" },
            { name: "Demerara / Simple Syrup", measureOz: 0.5, measureMl: 15, type: "Sweetener" },
            { name: "Club Soda", measureOz: 2.0, measureMl: 60, type: "Carbonated" }
        ],
        decoys: [
            { name: "Vodka", type: "Spirit" },
            { name: "Fresh Lime Juice", type: "Citrus" },
            { name: "Ginger Beer", type: "Carbonated" }
        ],
        lore: {
            history: "Born from the Great Tom Collins Hoax of 1874, where pranksters sent people searching for an imaginary slanderous man.",
            science: "Old Tom Gin has subtle residual sweetness that rounds out lemon acidity when lengthened with soda.",
            proTip: "Shake gin, lemon, and syrup, strain over fresh cubes, and top gently with cold club soda.",
            flavorTags: ["Crisp Lemonade", "Earthy Juniper", "Effervescent"]
        }
    },
    {
        id: "clover-club",
        name: "Clover Club",
        category: "classic",
        origin: "Est. 1890s • Bellevue-Stratford Hotel, Philly",
        glassware: "coupe",
        method: "shake",
        ice: "neat",
        garnish: "cherry",
        liquidColorBottom: "#be185d",
        liquidColorTop: "#f472b6",
        hasFoam: true,
        isCarbonated: false,
        totalTargetVolumeOz: 3.75,
        ingredients: [
            { name: "London Dry Gin", measureOz: 1.5, measureMl: 45, type: "Spirit" },
            { name: "Dry Vermouth", measureOz: 0.5, measureMl: 15, type: "Fortified Wine" },
            { name: "Fresh Lemon Juice", measureOz: 0.5, measureMl: 15, type: "Citrus" },
            { name: "Raspberry Syrup", measureOz: 0.75, measureMl: 22.5, type: "Fruit Syrup" },
            { name: "Egg White / Aquafaba", measureOz: 0.5, measureMl: 15, type: "Emulsifier" }
        ],
        decoys: [
            { name: "Grenadine", type: "Syrup" },
            { name: "Sweet Vermouth", type: "Fortified Wine" },
            { name: "Cointreau / Triple Sec", type: "Orange Liqueur" }
        ],
        lore: {
            history: "Named for the distinguished gentlemen's club meeting at Philadelphia's Bellevue-Stratford Hotel.",
            science: "Dry vermouth provides herbal dry structure so raspberry and egg white don't become cloying.",
            proTip: "Dry shake thoroughly before adding ice to build a thick, meringue-like foam.",
            flavorTags: ["Silky Raspberry", "Botanical Herb", "Velvety Foam"]
        }
    },
    {
        id: "martinez",
        name: "Martinez",
        category: "classic",
        origin: "Est. 1884 • O.H. Byron Guide",
        glassware: "nick-nora",
        method: "stir",
        ice: "neat",
        garnish: "orange-peel",
        liquidColorBottom: "#7c2d12",
        liquidColorTop: "#b45309",
        hasFoam: false,
        isCarbonated: false,
        totalTargetVolumeOz: 3.25,
        ingredients: [
            { name: "Old Tom Gin", measureOz: 1.5, measureMl: 45, type: "Spirit" },
            { name: "Sweet Vermouth", measureOz: 1.5, measureMl: 45, type: "Fortified Wine" },
            { name: "Maraschino Liqueur", measureOz: 0.25, measureMl: 7.5, type: "Cherry Liqueur" },
            { name: "Angostura Bitters", measureOz: "dash", measureMl: "dash", type: "Bitters" }
        ],
        decoys: [
            { name: "London Dry Gin", type: "Spirit" },
            { name: "Dry Vermouth", type: "Fortified Wine" },
            { name: "Fresh Lemon Juice", type: "Citrus" }
        ],
        lore: {
            history: "The direct evolutionary ancestor of the modern Martini, linking gin with vermouth and bitters.",
            science: "Equal-parts vermouth and Old Tom gin yield a complex, botanical-sweet profile requiring careful dilution.",
            proTip: "Use orange bitters alongside Angostura for extra aromatic lift.",
            flavorTags: ["Rich Vermouth", "Sweet Juniper", "Nutty Marasca"]
        }
    },
    {
        id: "paloma",
        name: "Paloma",
        category: "classic",
        origin: "Est. 1950s • Don Javier Delgado Corona, Tequila",
        glassware: "highball",
        method: "build",
        ice: "cubed",
        garnish: "lime-wheel",
        liquidColorBottom: "#fb7185",
        liquidColorTop: "#fecdd3",
        hasFoam: false,
        isCarbonated: true,
        totalTargetVolumeOz: 5.75,
        ingredients: [
            { name: "Blanco Tequila", measureOz: 2.0, measureMl: 60, type: "Agave Spirit" },
            { name: "Fresh Lime Juice", measureOz: 0.5, measureMl: 15, type: "Citrus" },
            { name: "Grapefruit Soda", measureOz: 3.0, measureMl: 90, type: "Carbonated" },
            { name: "Sea Salt", measureOz: "dash", measureMl: "dash", type: "Saline" }
        ],
        decoys: [
            { name: "Mezcal", type: "Agave Spirit" },
            { name: "Cointreau / Triple Sec", type: "Orange Liqueur" },
            { name: "Simple Syrup", type: "Sweetener" }
        ],
        lore: {
            history: "Mexico's most beloved everyday highball, reportedly concocted at the historic La Capilla bar in Tequila.",
            science: "Saline suppresses bitterness in grapefruit soda, enhancing the sweet agave finish.",
            proTip: "Add a pinch of salt directly into the shaker or glass before adding soda.",
            flavorTags: ["Grapefruit Zest", "Earthy Agave", "Saline Sparkle"]
        }
    },
    {
        id: "jungle-bird",
        name: "Jungle Bird",
        category: "classic",
        origin: "Est. 1973 • Aviary Bar, KL Hilton",
        glassware: "rocks",
        method: "shake",
        ice: "cubed",
        garnish: "lime-wheel",
        liquidColorBottom: "#991b1b",
        liquidColorTop: "#f97316",
        hasFoam: true,
        isCarbonated: false,
        totalTargetVolumeOz: 4.75,
        ingredients: [
            { name: "Aged Jamaican Rum", measureOz: 1.5, measureMl: 45, type: "Rum" },
            { name: "Campari", measureOz: 0.75, measureMl: 22.5, type: "Bitter Liqueur" },
            { name: "Pineapple Juice", measureOz: 1.5, measureMl: 45, type: "Juice" },
            { name: "Fresh Lime Juice", measureOz: 0.5, measureMl: 15, type: "Citrus" },
            { name: "Demerara / Simple Syrup", measureOz: 0.5, measureMl: 15, type: "Sweetener" }
        ],
        decoys: [
            { name: "Aperol", type: "Bitter Liqueur" },
            { name: "White Rum", type: "Rum" },
            { name: "Orgeat", type: "Syrup" }
        ],
        lore: {
            history: "Created as a welcome drink for guests checking into the Kuala Lumpur Hilton in Malaysia.",
            science: "Pineapple juice contains enzymes that froth into a creamy head when shaken, softening Campari's bite.",
            proTip: "Use rich blackstrap or dark Jamaican rum for molasses depth.",
            flavorTags: ["Tropical Bittersweet", "Rich Pineapple", "Heavy Molasses"]
        }
    },
    {
        id: "dark-n-stormy",
        name: "Dark 'n Stormy",
        category: "classic",
        origin: "Est. 1920s • Goslings, Bermuda",
        glassware: "highball",
        method: "build",
        ice: "cubed",
        garnish: "lime-wheel",
        liquidColorBottom: "#451a03",
        liquidColorTop: "#fef08a",
        hasFoam: false,
        isCarbonated: true,
        totalTargetVolumeOz: 5.5,
        ingredients: [
            { name: "Goslings Black Seal Rum", measureOz: 2.0, measureMl: 60, type: "Dark Rum" },
            { name: "Fresh Lime Juice", measureOz: 0.5, measureMl: 15, type: "Citrus" },
            { name: "Ginger Beer", measureOz: 3.0, measureMl: 90, type: "Carbonated" }
        ],
        decoys: [
            { name: "Vodka", type: "Spirit" },
            { name: "White Rum", type: "Rum" },
            { name: "Club Soda", type: "Carbonated" }
        ],
        lore: {
            history: "Trademarked by Goslings Brothers Ltd in Bermuda, sailors noted it resembles 'the color of a cloud only a fool would sail under.'",
            science: "Density stratification lets dark rum float over ginger beer when poured carefully over ice.",
            proTip: "Pour ginger beer first, add ice, then gently float the black rum across the top.",
            flavorTags: ["Spicy Ginger", "Caramelized Molasses", "Zesty Lime"]
        }
    },
    {
        id: "vesper",
        name: "Vesper",
        category: "classic",
        origin: "Est. 1953 • Casino Royale, Ian Fleming",
        glassware: "coupe",
        method: "shake",
        ice: "neat",
        garnish: "orange-peel",
        liquidColorBottom: "#f8fafc",
        liquidColorTop: "#ffffff",
        hasFoam: false,
        isCarbonated: false,
        totalTargetVolumeOz: 4.25,
        ingredients: [
            { name: "London Dry Gin", measureOz: 3.0, measureMl: 90, type: "Spirit" },
            { name: "Vodka", measureOz: 1.0, measureMl: 30, type: "Spirit" },
            { name: "Lillet Blanc", measureOz: 0.5, measureMl: 15, type: "Aperitif Wine" }
        ],
        decoys: [
            { name: "Dry Vermouth", type: "Fortified Wine" },
            { name: "Sweet Vermouth", type: "Fortified Wine" },
            { name: "Orange Bitters", type: "Bitters" }
        ],
        lore: {
            history: "Invented on page 45 of Ian Fleming's Casino Royale by James Bond, named after Vesper Lynd.",
            science: "Vodka cuts the botanical intensity of gin, yielding an exceptionally clean high-proof martini.",
            proTip: "Modern bartenders use Cocchi Americano to restore the original cinchona bitterness lost when Kina Lillet was reformulated.",
            flavorTags: ["High Proof", "Crisp Cinchona", "Ultra Clean"]
        }
    },
    {
        id: "bramble",
        name: "Bramble",
        category: "classic",
        origin: "Est. 1984 • Dick Bradsell, London",
        glassware: "rocks",
        method: "shake",
        ice: "crushed",
        garnish: "cherry",
        liquidColorBottom: "#581c87",
        liquidColorTop: "#fef08a",
        hasFoam: false,
        isCarbonated: false,
        totalTargetVolumeOz: 3.75,
        ingredients: [
            { name: "London Dry Gin", measureOz: 2.0, measureMl: 60, type: "Spirit" },
            { name: "Fresh Lemon Juice", measureOz: 0.75, measureMl: 22.5, type: "Citrus" },
            { name: "Demerara / Simple Syrup", measureOz: 0.5, measureMl: 15, type: "Sweetener" },
            { name: "Crème de Mûre", measureOz: 0.5, measureMl: 15, type: "Blackberry Liqueur" }
        ],
        decoys: [
            { name: "Crème de Cassis", type: "Liqueur" },
            { name: "Maraschino Liqueur", type: "Liqueur" },
            { name: "Fresh Lime Juice", type: "Citrus" }
        ],
        lore: {
            history: "Dick Bradsell created this at Fred's Club in Soho, drawing inspiration from childhood memories of picking wild blackberries.",
            science: "Drizzled over crushed ice, the dense liqueur trickles downward, creating an ombre bleed effect.",
            proTip: "Do not shake the Crème de Mûre with the gin and citrus; drizzle it over the mounded crushed ice as a crown.",
            flavorTags: ["Tart Blackberry", "Bright Lemon", "Clean Juniper"]
        }
    },
    {
        id: "blood-and-sand",
        name: "Blood & Sand",
        category: "classic",
        origin: "Est. 1922 • Savoy Cocktail Book",
        glassware: "coupe",
        method: "shake",
        ice: "neat",
        garnish: "orange-peel",
        liquidColorBottom: "#7c2d12",
        liquidColorTop: "#ea580c",
        hasFoam: false,
        isCarbonated: false,
        totalTargetVolumeOz: 3.0,
        ingredients: [
            { name: "Blended Scotch", measureOz: 0.75, measureMl: 22.5, type: "Whisky" },
            { name: "Cherry Heering", measureOz: 0.75, measureMl: 22.5, type: "Cherry Liqueur" },
            { name: "Sweet Vermouth", measureOz: 0.75, measureMl: 22.5, type: "Fortified Wine" },
            { name: "Fresh Orange Juice", measureOz: 0.75, measureMl: 22.5, type: "Citrus" }
        ],
        decoys: [
            { name: "Bourbon / Rye Whiskey", type: "Spirit" },
            { name: "Fresh Lemon Juice", type: "Citrus" },
            { name: "Angostura Bitters", type: "Bitters" }
        ],
        lore: {
            history: "Named for Rudolph Valentino's 1922 silent bullfighter film; the orange juice represents sand, Cherry Heering the blood.",
            science: "Four equal parts balance smoky scotch peat against sweet cherry stone and gentle orange acidity.",
            proTip: "Use freshly squeezed orange juice strained through a fine sieve; pasteurized juice makes it taste cloying.",
            flavorTags: ["Smoky Peat", "Cherry Stone", "Herbal Citrus"]
        }
    },
    {
        id: "pisco-sour",
        name: "Pisco Sour",
        category: "classic",
        origin: "Est. 1920s • Morris' Bar, Lima, Peru",
        glassware: "coupe",
        method: "shake",
        ice: "neat",
        garnish: "lime-wheel",
        liquidColorBottom: "#ecfccb",
        liquidColorTop: "#f8fafc",
        hasFoam: true,
        isCarbonated: false,
        totalTargetVolumeOz: 3.75,
        ingredients: [
            { name: "Pisco", measureOz: 2.0, measureMl: 60, type: "Grape Brandy" },
            { name: "Fresh Lime Juice", measureOz: 0.75, measureMl: 22.5, type: "Citrus" },
            { name: "Demerara / Simple Syrup", measureOz: 0.75, measureMl: 22.5, type: "Sweetener" },
            { name: "Egg White / Aquafaba", measureOz: 0.5, measureMl: 15, type: "Emulsifier" }
        ],
        decoys: [
            { name: "White Rum", type: "Rum" },
            { name: "Fresh Lemon Juice", type: "Citrus" },
            { name: "Orange Bitters", type: "Bitters" }
        ],
        lore: {
            history: "Created by American expat Victor Morris in Lima, Peru, and later refined by Peruvian bartenders with egg white.",
            science: "Pisco's floral Muscat esters integrate with whipped albumin for a smooth, dessert-like foam.",
            proTip: "Drop three precise dots of Angostura bitters directly onto the foam head for aromatic complexity.",
            flavorTags: ["Floral Grape", "Zesty Lime", "Silky Meringue"]
        }
    },
    {
        id: "paper-plane",
        name: "Paper Plane",
        category: "classic",
        origin: "Est. 2007 • Sam Ross, Violet Hour Chicago",
        glassware: "coupe",
        method: "shake",
        ice: "neat",
        garnish: "orange-peel",
        liquidColorBottom: "#c2410c",
        liquidColorTop: "#fb923c",
        hasFoam: false,
        isCarbonated: false,
        totalTargetVolumeOz: 3.0,
        ingredients: [
            { name: "Bourbon / Rye Whiskey", measureOz: 0.75, measureMl: 22.5, type: "Spirit" },
            { name: "Aperol", measureOz: 0.75, measureMl: 22.5, type: "Aperitivo" },
            { name: "Amaro Nonino", measureOz: 0.75, measureMl: 22.5, type: "Amaro" },
            { name: "Fresh Lemon Juice", measureOz: 0.75, measureMl: 22.5, type: "Citrus" }
        ],
        decoys: [
            { name: "Campari", type: "Bitter Liqueur" },
            { name: "Sweet Vermouth", type: "Fortified Wine" },
            { name: "Fresh Lime Juice", type: "Citrus" }
        ],
        lore: {
            history: "Inspired by M.I.A.'s track 'Paper Planes', Sam Ross created this modern classic at Chicago's Violet Hour.",
            science: "Amaro Nonino's grape-based botanical structure bridges the sweet orange bitterness of Aperol with bourbon's oak.",
            proTip: "Amaro Nonino cannot be substituted; other amari lack its alpine gentian-grape balance.",
            flavorTags: ["Bittersweet Orange", "Alpine Herb", "Warm Bourbon"]
        }
    },
    {
        id: "naked-and-famous",
        name: "Naked & Famous",
        category: "classic",
        origin: "Est. 2011 • Joaquín Simó, Death & Co NYC",
        glassware: "coupe",
        method: "shake",
        ice: "neat",
        garnish: "lime-wheel",
        liquidColorBottom: "#ea580c",
        liquidColorTop: "#facc15",
        hasFoam: false,
        isCarbonated: false,
        totalTargetVolumeOz: 3.0,
        ingredients: [
            { name: "Mezcal", measureOz: 0.75, measureMl: 22.5, type: "Agave Spirit" },
            { name: "Yellow Chartreuse", measureOz: 0.75, measureMl: 22.5, type: "Herbal Liqueur" },
            { name: "Aperol", measureOz: 0.75, measureMl: 22.5, type: "Aperitivo" },
            { name: "Fresh Lime Juice", measureOz: 0.75, measureMl: 22.5, type: "Citrus" }
        ],
        decoys: [
            { name: "Blanco Tequila", type: "Agave Spirit" },
            { name: "Green Chartreuse", type: "Herbal Liqueur" },
            { name: "Fresh Lemon Juice", type: "Citrus" }
        ],
        lore: {
            history: "Described by creator Joaquín Simó as the love child of The Last Word and the Paper Plane.",
            science: "Yellow Chartreuse brings softer honey and saffron notes that complement mezcal smoke better than Green Chartreuse.",
            proTip: "Use an artisanal espadín mezcal with clean smoke to avoid overpowering the delicate herbs.",
            flavorTags: ["Earthy Smoke", "Honey Saffron", "Zesty Citrus"]
        }
    },
    {
        id: "hanky-panky",
        name: "Hanky Panky",
        category: "classic",
        origin: "Est. 1903 • Ada Coleman, Savoy London",
        glassware: "nick-nora",
        method: "stir",
        ice: "neat",
        garnish: "orange-peel",
        liquidColorBottom: "#450a0a",
        liquidColorTop: "#991b1b",
        hasFoam: false,
        isCarbonated: false,
        totalTargetVolumeOz: 3.25,
        ingredients: [
            { name: "London Dry Gin", measureOz: 1.5, measureMl: 45, type: "Spirit" },
            { name: "Sweet Vermouth", measureOz: 1.5, measureMl: 45, type: "Fortified Wine" },
            { name: "Fernet-Branca", measureOz: 0.25, measureMl: 7.5, type: "Amaro" }
        ],
        decoys: [
            { name: "Campari", type: "Bitter Liqueur" },
            { name: "Dry Vermouth", type: "Fortified Wine" },
            { name: "Angostura Bitters", type: "Bitters" }
        ],
        lore: {
            history: "Ada Coleman, legendary Savoy head bartender, invented this for actor Charles Hawtrey, who exclaimed 'By Jove! That is the real hanky-panky!'",
            science: "Fernet's intense menthol-rhubarb-myrrh profile requires only two dashes to completely transform the gin-vermouth base.",
            proTip: "Stir thoroughly for extra dilution; under-diluted Fernet will overpower the subtle gin.",
            flavorTags: ["Herbal Menthol", "Rich Vermouth", "Medicinal Spice"]
        }
    },
    {
        id: "americano",
        name: "Americano",
        category: "classic",
        origin: "Est. 1860s • Gaspare Campari, Milan",
        glassware: "highball",
        method: "build",
        ice: "cubed",
        garnish: "orange-peel",
        liquidColorBottom: "#991b1b",
        liquidColorTop: "#f87171",
        hasFoam: false,
        isCarbonated: true,
        totalTargetVolumeOz: 5.0,
        ingredients: [
            { name: "Campari", measureOz: 1.5, measureMl: 45, type: "Bitter Liqueur" },
            { name: "Sweet Vermouth", measureOz: 1.5, measureMl: 45, type: "Fortified Wine" },
            { name: "Club Soda", measureOz: 2.0, measureMl: 60, type: "Carbonated" }
        ],
        decoys: [
            { name: "London Dry Gin", type: "Spirit" },
            { name: "Dry Vermouth", type: "Fortified Wine" },
            { name: "Aperol", type: "Aperitivo" }
        ],
        lore: {
            history: "Originally called the Milano-Torino; renamed Americano due to its popularity among American tourists during Prohibition.",
            science: "Carbonation lowers the perception of bitterness while expanding aromatic botanicals from both spirits.",
            proTip: "Build directly over dense ice in a highball glass, stirring once gently to preserve fizz.",
            flavorTags: ["Bittersweet Herbal", "Sparkling Effervescence", "Citrus Pith"]
        }
    },
    {
        id: "ramos-gin-fizz",
        name: "Ramos Gin Fizz",
        category: "classic",
        origin: "Est. 1888 • Henry C. Ramos, New Orleans",
        glassware: "highball",
        method: "shake",
        ice: "neat",
        garnish: "orange-peel",
        liquidColorBottom: "#f8fafc",
        liquidColorTop: "#ffffff",
        hasFoam: true,
        isCarbonated: true,
        totalTargetVolumeOz: 5.5,
        ingredients: [
            { name: "London Dry Gin", measureOz: 2.0, measureMl: 60, type: "Spirit" },
            { name: "Fresh Lemon Juice", measureOz: 0.5, measureMl: 15, type: "Citrus" },
            { name: "Fresh Lime Juice", measureOz: 0.5, measureMl: 15, type: "Citrus" },
            { name: "Demerara / Simple Syrup", measureOz: 0.75, measureMl: 22.5, type: "Sweetener" },
            { name: "Heavy Cream", measureOz: 1.0, measureMl: 30, type: "Dairy" },
            { name: "Club Soda", measureOz: 1.0, measureMl: 30, type: "Carbonated" }
        ],
        decoys: [
            { name: "Egg White / Aquafaba", type: "Emulsifier" },
            { name: "Orgeat", type: "Syrup" },
            { name: "Orange Curaçao", type: "Liqueur" }
        ],
        lore: {
            history: "Henry Ramos employed a line of 'shaker boys' at the Imperial Cabinet Saloon to shake each cocktail for 12 straight minutes.",
            science: "The combination of heavy dairy cream and citrus acid creates an emulsion that rises above the rim like a soufflé when topped with soda.",
            proTip: "Rest the poured cocktail in the freezer for 60 seconds before slowly adding soda into the center to lift the foam pillar.",
            flavorTags: ["Orange Blossom Creamsicle", "Silky Cloud", "Citrus Velvet"]
        }
    },
    {
        id: "southside",
        name: "Southside",
        category: "classic",
        origin: "Est. 1910s • Southside Club, Long Island",
        glassware: "coupe",
        method: "shake",
        ice: "neat",
        garnish: "lime-wheel",
        liquidColorBottom: "#84cc16",
        liquidColorTop: "#d9f99d",
        hasFoam: false,
        isCarbonated: false,
        totalTargetVolumeOz: 3.5,
        ingredients: [
            { name: "London Dry Gin", measureOz: 2.0, measureMl: 60, type: "Spirit" },
            { name: "Fresh Lime Juice", measureOz: 0.75, measureMl: 22.5, type: "Citrus" },
            { name: "Demerara / Simple Syrup", measureOz: 0.75, measureMl: 22.5, type: "Sweetener" },
            { name: "Fresh Mint Sprigs", measureOz: "dash", measureMl: "dash", type: "Herb" }
        ],
        decoys: [
            { name: "Vodka", type: "Spirit" },
            { name: "Club Soda", type: "Carbonated" },
            { name: "Fresh Lemon Juice", type: "Citrus" }
        ],
        lore: {
            history: "Associated with both Long Island high society and Al Capone's South Side mob in Chicago.",
            science: "Shaking mint with ice extracts aromatic menthol oils without crushing bitter leaf chlorophyll.",
            proTip: "Slap a fresh mint leaf on your hand to release aromatics before floating it atop the coupe.",
            flavorTags: ["Crisp Mint", "Zesty Lime", "Clean Juniper"]
        }
    },
    {
        id: "bees-knees",
        name: "Bee's Knees",
        category: "classic",
        origin: "Est. 1920s • Prohibition Era",
        glassware: "coupe",
        method: "shake",
        ice: "neat",
        garnish: "orange-peel",
        liquidColorBottom: "#d97706",
        liquidColorTop: "#fef08a",
        hasFoam: false,
        isCarbonated: false,
        totalTargetVolumeOz: 3.5,
        ingredients: [
            { name: "London Dry Gin", measureOz: 2.0, measureMl: 60, type: "Spirit" },
            { name: "Fresh Lemon Juice", measureOz: 0.75, measureMl: 22.5, type: "Citrus" },
            { name: "Honey-Ginger Syrup", measureOz: 0.75, measureMl: 22.5, type: "Sweetener" }
        ],
        decoys: [
            { name: "Simple Syrup", type: "Sweetener" },
            { name: "Bourbon / Rye Whiskey", type: "Spirit" },
            { name: "Fresh Lime Juice", type: "Citrus" }
        ],
        lore: {
            history: "Prohibition-era speakeasies used rich honey and lemon to mask the rough taste of homemade bathtub gin.",
            science: "Honey contains floral nectar notes and thick viscosity that pairs with botanical juniper.",
            proTip: "Dilute honey 3:1 with warm water into honey syrup so it does not freeze into a hard clump upon contact with shaker ice.",
            flavorTags: ["Floral Honey", "Tart Lemon", "Botanical Pine"]
        }
    },
    {
        id: "vieux-carre",
        name: "Vieux Carré",
        category: "classic",
        origin: "Est. 1937 • Walter Bergeron, Hotel Monteleone",
        glassware: "rocks",
        method: "stir",
        ice: "large-rock",
        garnish: "cherry",
        liquidColorBottom: "#78350f",
        liquidColorTop: "#b45309",
        hasFoam: false,
        isCarbonated: false,
        totalTargetVolumeOz: 3.25,
        ingredients: [
            { name: "Rye Whiskey", measureOz: 1.0, measureMl: 30, type: "Spirit" },
            { name: "Cognac", measureOz: 1.0, measureMl: 30, type: "Brandy" },
            { name: "Sweet Vermouth", measureOz: 1.0, measureMl: 30, type: "Fortified Wine" },
            { name: "Bénédictine", measureOz: 0.25, measureMl: 7.5, type: "Herbal Liqueur" },
            { name: "Peychaud's Bitters", measureOz: "dash", measureMl: "dash", type: "Bitters" }
        ],
        decoys: [
            { name: "Campari", type: "Bitter Liqueur" },
            { name: "Dry Vermouth", type: "Fortified Wine" },
            { name: "Angostura Bitters", type: "Bitters" }
        ],
        lore: {
            history: "Created by head bartender Walter Bergeron at New Orleans' Carousel Bar; named after the French Quarter ('Old Square').",
            science: "Splitting the base between spicy grain rye and fruit-derived grape cognac produces an intricate flavor harmony.",
            proTip: "Bénédictine is dense; measure carefully so its honeyed herbal note supports rather than dominates.",
            flavorTags: ["Spicy Rye", "Velvet Cognac", "Herbal Honey"]
        }
    },
    {
        id: "white-lady",
        name: "White Lady",
        category: "classic",
        origin: "Est. 1929 • Harry Craddock, Savoy London",
        glassware: "coupe",
        method: "shake",
        ice: "neat",
        garnish: "orange-peel",
        liquidColorBottom: "#d9f99d",
        liquidColorTop: "#ffffff",
        hasFoam: false,
        isCarbonated: false,
        totalTargetVolumeOz: 3.5,
        ingredients: [
            { name: "London Dry Gin", measureOz: 2.0, measureMl: 60, type: "Spirit" },
            { name: "Cointreau / Triple Sec", measureOz: 0.75, measureMl: 22.5, type: "Orange Liqueur" },
            { name: "Fresh Lemon Juice", measureOz: 0.75, measureMl: 22.5, type: "Citrus" }
        ],
        decoys: [
            { name: "Vodka", type: "Spirit" },
            { name: "Demerara / Simple Syrup", type: "Sweetener" },
            { name: "Fresh Lime Juice", type: "Citrus" }
        ],
        lore: {
            history: "Harry Craddock's definitive gin sour variation on the Sidecar, recorded in the 1930 Savoy Cocktail Book.",
            science: "Gin botanicals bond with sweet-bitter orange peel oils inside triple sec.",
            proTip: "Ensure your triple sec is 40% ABV Cointreau or Combier to maintain necessary structure.",
            flavorTags: ["Bright Orange", "Tart Lemon", "Clean Juniper"]
        }
    },
    {
        id: "singapore-sling",
        name: "Singapore Sling",
        category: "classic",
        origin: "Est. 1915 • Ngiam Tong Boon, Raffles Hotel",
        glassware: "highball",
        method: "shake",
        ice: "cubed",
        garnish: "cherry",
        liquidColorBottom: "#be123c",
        liquidColorTop: "#fb7185",
        hasFoam: true,
        isCarbonated: true,
        totalTargetVolumeOz: 5.75,
        ingredients: [
            { name: "London Dry Gin", measureOz: 1.5, measureMl: 45, type: "Spirit" },
            { name: "Cherry Heering", measureOz: 0.5, measureMl: 15, type: "Cherry Liqueur" },
            { name: "Cointreau / Triple Sec", measureOz: 0.25, measureMl: 7.5, type: "Orange Liqueur" },
            { name: "Bénédictine", measureOz: 0.25, measureMl: 7.5, type: "Herbal Liqueur" },
            { name: "Pineapple Juice", measureOz: 2.0, measureMl: 60, type: "Juice" },
            { name: "Fresh Lime Juice", measureOz: 0.5, measureMl: 15, type: "Citrus" }
        ],
        decoys: [
            { name: "Grenadine", type: "Syrup" },
            { name: "Dark Rum", type: "Rum" },
            { name: "Sweet Vermouth", type: "Fortified Wine" }
        ],
        lore: {
            history: "Created by Ngiam Tong Boon at the Long Bar in Raffles Hotel, Singapore, so women could drink alcohol disguised as punch.",
            science: "Hard-shaken pineapple juice creates a silky, persistent tropical foam head.",
            proTip: "Do not use commercial sour mix; fresh pineapple and lime provide authentic acidity.",
            flavorTags: ["Tropical Cherry", "Herbaceous Spice", "Silky Foam"]
        }
    },
    {
        id: "aperol-spritz",
        name: "Aperol Spritz",
        category: "classic",
        origin: "Est. 1950s • Veneto, Italy",
        glassware: "rocks",
        method: "build",
        ice: "cubed",
        garnish: "orange-peel",
        liquidColorBottom: "#ea580c",
        liquidColorTop: "#fb923c",
        hasFoam: false,
        isCarbonated: true,
        totalTargetVolumeOz: 6.0,
        ingredients: [
            { name: "Champagne / Sparkling Wine", measureOz: 3.0, measureMl: 90, type: "Prosecco" },
            { name: "Aperol", measureOz: 2.0, measureMl: 60, type: "Aperitivo" },
            { name: "Club Soda", measureOz: 1.0, measureMl: 30, type: "Carbonated" }
        ],
        decoys: [
            { name: "Campari", type: "Bitter Liqueur" },
            { name: "London Dry Gin", type: "Spirit" },
            { name: "Fresh Orange Juice", type: "Citrus" }
        ],
        lore: {
            history: "Evolved from 19th-century Austro-Hungarian soldiers spraying Italian wine with water ('spritzen').",
            science: "The standard 3-2-1 formula balances dry Prosecco effervescence against sweet orange gentian notes.",
            proTip: "Add Prosecco first, then Aperol, then soda to naturally blend the drink without stirring down carbonation.",
            flavorTags: ["Bittersweet Orange", "Crisp Bubbles", "Rhubarb Herbal"]
        }
    },
    {
        id: "caipirinha",
        name: "Caipirinha",
        category: "classic",
        origin: "Est. 1918 • São Paulo, Brazil",
        glassware: "rocks",
        method: "build",
        ice: "crushed",
        garnish: "lime-wheel",
        liquidColorBottom: "#65a30d",
        liquidColorTop: "#d9f99d",
        hasFoam: false,
        isCarbonated: false,
        totalTargetVolumeOz: 3.25,
        ingredients: [
            { name: "Cachaça", measureOz: 2.0, measureMl: 60, type: "Sugarcane Spirit" },
            { name: "Fresh Lime Juice", measureOz: 0.75, measureMl: 22.5, type: "Citrus" },
            { name: "Demerara / Simple Syrup", measureOz: 0.5, measureMl: 15, type: "Sweetener" }
        ],
        decoys: [
            { name: "White Rum", type: "Rum" },
            { name: "Agave Nectar", type: "Sweetener" },
            { name: "Club Soda", type: "Carbonated" }
        ],
        lore: {
            history: "Brazil's national cocktail, originating in rural São Paulo as a folk remedy during the Spanish flu outbreak.",
            science: "Cachaça is fermented from fresh sugarcane juice rather than molasses, lending vegetal, grassy notes.",
            proTip: "Muddle whole fresh lime wedges directly with granulated sugar in the glass for authentic lime oil extraction.",
            flavorTags: ["Grassy Sugarcane", "Pungent Lime Oil", "Rustic Sweetness"]
        }
    },
    {
        id: "pina-colada",
        name: "Piña Colada",
        category: "classic",
        origin: "Est. 1954 • Caribe Hilton, Puerto Rico",
        glassware: "highball",
        method: "shake",
        ice: "crushed",
        garnish: "cherry",
        liquidColorBottom: "#fef08a",
        liquidColorTop: "#ffffff",
        hasFoam: true,
        isCarbonated: false,
        totalTargetVolumeOz: 5.5,
        ingredients: [
            { name: "White Rum", measureOz: 2.0, measureMl: 60, type: "Rum" },
            { name: "Pineapple Juice", measureOz: 1.5, measureMl: 45, type: "Juice" },
            { name: "Heavy Cream", measureOz: 1.5, measureMl: 45, type: "Coconut Cream" },
            { name: "Fresh Lime Juice", measureOz: 0.5, measureMl: 15, type: "Citrus" }
        ],
        decoys: [
            { name: "Dark Rum", type: "Rum" },
            { name: "Orgeat", type: "Syrup" },
            { name: "Orange Curaçao", type: "Liqueur" }
        ],
        lore: {
            history: "Created by Ramón 'Monchito' Marrero at the Caribe Hilton, Puerto Rico, to capture the island's flavors.",
            science: "Coconut fat requires vigorous shaking with pebble ice to emulsify with pineapple acid without curdling.",
            proTip: "Add a squeeze of fresh lime juice to cut through the heavy coconut fat.",
            flavorTags: ["Creamy Coconut", "Tart Pineapple", "Sugarcane Rum"]
        }
    },
    {
        id: "grasshopper",
        name: "Grasshopper",
        category: "classic",
        origin: "Est. 1918 • Tujague's, New Orleans",
        glassware: "coupe",
        method: "shake",
        ice: "neat",
        garnish: "cherry",
        liquidColorBottom: "#15803d",
        liquidColorTop: "#86efac",
        hasFoam: true,
        isCarbonated: false,
        totalTargetVolumeOz: 3.0,
        ingredients: [
            { name: "Crème de Menthe", measureOz: 1.0, measureMl: 30, type: "Mint Liqueur" },
            { name: "Crème de Cacao", measureOz: 1.0, measureMl: 30, type: "Chocolate Liqueur" },
            { name: "Heavy Cream", measureOz: 1.0, measureMl: 30, type: "Dairy" }
        ],
        decoys: [
            { name: "Vodka", type: "Spirit" },
            { name: "Coffee Liqueur", type: "Liqueur" },
            { name: "Demerara / Simple Syrup", type: "Sweetener" }
        ],
        lore: {
            history: "Created by Philip Guichet at Tujague's in New Orleans, winning second place at a cocktail competition in NYC.",
            science: "Three equal parts shaken vigorously turn heavy cream and mint liqueur into a chilled dessert mousse.",
            proTip: "Grate dark nutmeg or dark chocolate shavings across the mint foam for contrast.",
            flavorTags: ["Mint Chocolate", "Silky Cream", "Dessert Decadence"]
        }
    },
    {
        id: "brandy-alexander",
        name: "Brandy Alexander",
        category: "classic",
        origin: "Est. 1920s • London & New York",
        glassware: "coupe",
        method: "shake",
        ice: "neat",
        garnish: "cherry",
        liquidColorBottom: "#78350f",
        liquidColorTop: "#e2e8f0",
        hasFoam: true,
        isCarbonated: false,
        totalTargetVolumeOz: 3.5,
        ingredients: [
            { name: "Cognac", measureOz: 1.5, measureMl: 45, type: "Brandy" },
            { name: "Crème de Cacao", measureOz: 1.0, measureMl: 30, type: "Chocolate Liqueur" },
            { name: "Heavy Cream", measureOz: 1.0, measureMl: 30, type: "Dairy" }
        ],
        decoys: [
            { name: "Bourbon / Rye Whiskey", type: "Spirit" },
            { name: "Coffee Liqueur", type: "Liqueur" },
            { name: "Crème de Menthe", type: "Mint Liqueur" }
        ],
        lore: {
            history: "A variation on the earlier gin-based Alexander, reputedly mixed for the wedding of Princess Mary in 1922.",
            science: "Cognac's grape esters and wood aging balance the dark chocolate sugars of crème de cacao.",
            proTip: "Always grate whole fresh nutmeg over the foam; pre-ground jarred nutmeg smells dusty.",
            flavorTags: ["Cocoa Truffle", "Rich Cognac", "Velvety Cream"]
        }
    },
    {
        id: "rusty-nail",
        name: "Rusty Nail",
        category: "classic",
        origin: "Est. 1937 • 21 Club, NYC",
        glassware: "rocks",
        method: "stir",
        ice: "large-rock",
        garnish: "orange-peel",
        liquidColorBottom: "#b45309",
        liquidColorTop: "#d97706",
        hasFoam: false,
        isCarbonated: false,
        totalTargetVolumeOz: 2.25,
        ingredients: [
            { name: "Blended Scotch", measureOz: 1.5, measureMl: 45, type: "Whisky" },
            { name: "Drambuie", measureOz: 0.75, measureMl: 22.5, type: "Honey-Scotch Liqueur" }
        ],
        decoys: [
            { name: "Bourbon / Rye Whiskey", type: "Spirit" },
            { name: "Bénédictine", type: "Herbal Liqueur" },
            { name: "Angostura Bitters", type: "Bitters" }
        ],
        lore: {
            history: "Adopted by the Rat Pack at the 21 Club in Manhattan, becoming a symbol of mid-century cool.",
            science: "Drambuie is scotch infused with heather honey and herbs, creating a rich Scotch-on-Scotch synergy.",
            proTip: "Serve over a single crystal-clear ice rock; warm dilution ruins its silken texture.",
            flavorTags: ["Heather Honey", "Smoky Scotch", "Herbal Spice"]
        }
    },
    {
        id: "toronto",
        name: "Toronto",
        category: "classic",
        origin: "Est. 1922 • Robert Vermeire",
        glassware: "nick-nora",
        method: "stir",
        ice: "neat",
        garnish: "orange-peel",
        liquidColorBottom: "#451a03",
        liquidColorTop: "#78350f",
        hasFoam: false,
        isCarbonated: false,
        totalTargetVolumeOz: 2.5,
        ingredients: [
            { name: "Rye Whiskey", measureOz: 2.0, measureMl: 60, type: "Spirit" },
            { name: "Fernet-Branca", measureOz: 0.25, measureMl: 7.5, type: "Amaro" },
            { name: "Demerara / Simple Syrup", measureOz: 0.25, measureMl: 7.5, type: "Sweetener" },
            { name: "Angostura Bitters", measureOz: "dash", measureMl: "dash", type: "Bitters" }
        ],
        decoys: [
            { name: "Sweet Vermouth", type: "Fortified Wine" },
            { name: "Campari", type: "Bitter Liqueur" },
            { name: "Bourbon / Rye Whiskey", type: "Spirit" }
        ],
        lore: {
            history: "First recorded by Robert Vermeire as the 'Fernet Cocktail', later dedicated to the Canadian metropolis.",
            science: "Fernet's bitter myrrh notes act like concentrated bitters, balanced by rich Demerara molasses.",
            proTip: "Express the orange oils firmly over the top to lift the medicinal aromatics.",
            flavorTags: ["Peppery Rye", "Menthol Bitterness", "Molasses Sweet"]
        }
    },
    {
        id: "ti-punch",
        name: "Ti' Punch",
        category: "classic",
        origin: "Est. 1800s • Martinique & Guadeloupe",
        glassware: "rocks",
        method: "build",
        ice: "neat",
        garnish: "lime-wheel",
        liquidColorBottom: "#65a30d",
        liquidColorTop: "#ecfccb",
        hasFoam: false,
        isCarbonated: false,
        totalTargetVolumeOz: 2.5,
        ingredients: [
            { name: "Rhum Agricole Blanc", measureOz: 2.0, measureMl: 60, type: "Cane Rum" },
            { name: "Cane Syrup", measureOz: 0.5, measureMl: 15, type: "Sweetener" },
            { name: "Lime Disc Swath", measureOz: "dash", measureMl: "dash", type: "Citrus Oil" }
        ],
        decoys: [
            { name: "White Rum", type: "Rum" },
            { name: "Agave Nectar", type: "Sweetener" },
            { name: "Club Soda", type: "Carbonated" }
        ],
        lore: {
            history: "The national ritual of the French Caribbean. 'Chacun prépare sa propre mort' ('Each prepares their own death').",
            science: "No ice is traditionally used; room temperature allows grassy terroir esters to express fully.",
            proTip: "Cut a disc of lime peel with a sliver of pulp and crush it gently with a swizzle stick in the cane syrup.",
            flavorTags: ["Grassy Terroir", "Pungent Lime Oil", "Raw Sugarcane"]
        }
    },
    {
        id: "godfather",
        name: "Godfather",
        category: "classic",
        origin: "Est. 1970s • Mid-Century Modern",
        glassware: "rocks",
        method: "stir",
        ice: "large-rock",
        garnish: "orange-peel",
        liquidColorBottom: "#78350f",
        liquidColorTop: "#d97706",
        hasFoam: false,
        isCarbonated: false,
        totalTargetVolumeOz: 2.25,
        ingredients: [
            { name: "Blended Scotch", measureOz: 1.5, measureMl: 45, type: "Whisky" },
            { name: "Amaretto", measureOz: 0.75, measureMl: 22.5, type: "Almond Liqueur" }
        ],
        decoys: [
            { name: "Bourbon / Rye Whiskey", type: "Spirit" },
            { name: "Coffee Liqueur", type: "Liqueur" },
            { name: "Sweet Vermouth", type: "Fortified Wine" }
        ],
        lore: {
            history: "Named in tribute to Francis Ford Coppola's masterpiece, reportedly Marlon Brando's favorite drink.",
            science: "Benzaldehyde from bitter almond apricot stones softens Scotch malt peat.",
            proTip: "Use a smoky blended Scotch to prevent amaretto sweetness from overwhelming the drink.",
            flavorTags: ["Toasted Marzipan", "Smoky Malt", "Stone Fruit"]
        }
    },
    {
        id: "gin-fizz",
        name: "Gin Fizz",
        category: "classic",
        origin: "Est. 1880s • Jerry Thomas Guide",
        glassware: "highball",
        method: "shake",
        ice: "cubed",
        garnish: "lime-wheel",
        liquidColorBottom: "#fef08a",
        liquidColorTop: "#ffffff",
        hasFoam: false,
        isCarbonated: true,
        totalTargetVolumeOz: 5.5,
        ingredients: [
            { name: "London Dry Gin", measureOz: 2.0, measureMl: 60, type: "Spirit" },
            { name: "Fresh Lemon Juice", measureOz: 0.75, measureMl: 22.5, type: "Citrus" },
            { name: "Demerara / Simple Syrup", measureOz: 0.75, measureMl: 22.5, type: "Sweetener" },
            { name: "Club Soda", measureOz: 2.0, measureMl: 60, type: "Carbonated" }
        ],
        decoys: [
            { name: "Heavy Cream", type: "Dairy" },
            { name: "Vodka", type: "Spirit" },
            { name: "Orange Bitters", type: "Bitters" }
        ],
        lore: {
            history: "America's morning wake-up tonic in the late 19th century, simpler than the Ramos variant.",
            science: "Violent shaking with dense ice aerates the lemon syrup before soda adds carbonation lift.",
            proTip: "Pour cold soda into the glass first, then strain shaken cocktail over top for a dense head.",
            flavorTags: ["Brisk Lemon", "Effervescent", "Crisp Juniper"]
        }
    },
    {
        id: "black-russian",
        name: "Black Russian",
        category: "classic",
        origin: "Est. 1949 • Gustave Tops, Hotel Metropole",
        glassware: "rocks",
        method: "stir",
        ice: "cubed",
        garnish: "cherry",
        liquidColorBottom: "#1c1917",
        liquidColorTop: "#44403c",
        hasFoam: false,
        isCarbonated: false,
        totalTargetVolumeOz: 2.25,
        ingredients: [
            { name: "Vodka", measureOz: 1.5, measureMl: 45, type: "Spirit" },
            { name: "Coffee Liqueur", measureOz: 0.75, measureMl: 22.5, type: "Coffee Liqueur" }
        ],
        decoys: [
            { name: "Heavy Cream", type: "Dairy" },
            { name: "Bourbon / Rye Whiskey", type: "Spirit" },
            { name: "Dark Rum", type: "Rum" }
        ],
        lore: {
            history: "Created in Brussels for Pearl Mesta, the US Ambassador to Luxembourg, during the dawn of the Cold War.",
            science: "Neutral grain spirit cuts coffee liqueur viscosity, enhancing roasted bean aromatics.",
            proTip: "Stir with clean cubes and serve over fresh ice; do not shake.",
            flavorTags: ["Roasted Coffee", "Dark Cacao", "Clean Spirit"]
        }
    },

    /* ======================================================================
       5 HOUSE ORIGINAL SIGNATURE COCKTAILS
       ====================================================================== */
    {
        id: "nocturne-botanica",
        name: "Nocturne Botanica",
        category: "signature",
        origin: "House Signature • Alpine Lounge",
        glassware: "coupe",
        method: "shake",
        ice: "neat",
        garnish: "lime-wheel",
        liquidColorBottom: "#164e63",
        liquidColorTop: "#67e8f9",
        hasFoam: false,
        isCarbonated: false,
        totalTargetVolumeOz: 3.5,
        ingredients: [
            { name: "London Dry Gin", measureOz: 1.5, measureMl: 45, type: "Spirit" },
            { name: "Braùlio Alpine Amaro", measureOz: 0.75, measureMl: 22.5, type: "Alpine Amaro" },
            { name: "Fresh Lemon Juice", measureOz: 0.75, measureMl: 22.5, type: "Citrus" },
            { name: "Rosemary Honey Syrup", measureOz: 0.5, measureMl: 15, type: "Herb Syrup" }
        ],
        decoys: [
            { name: "Sweet Vermouth", type: "Fortified Wine" },
            { name: "Campari", type: "Bitter Liqueur" },
            { name: "Club Soda", type: "Carbonated" }
        ],
        lore: {
            history: "Designed as an alpine evening libation bridging Mediterranean rosemary with high-altitude Italian amaro.",
            science: "Braùlio's spearmint and wormwood botanicals bond with gin's pinene, producing woodsy resin notes.",
            proTip: "Torch a fresh rosemary sprig and trap the smoke inside the serving coupe before straining.",
            flavorTags: ["Resinous Pine", "Alpine Mint", "Smoky Honey"]
        }
    },
    {
        id: "oaxacan-sunburst",
        name: "Oaxacan Sunburst",
        category: "signature",
        origin: "House Signature • Speakeasy Lounge",
        glassware: "coupe",
        method: "shake",
        ice: "neat",
        garnish: "lime-wheel",
        liquidColorBottom: "#b45309",
        liquidColorTop: "#f59e0b",
        hasFoam: false,
        isCarbonated: false,
        totalTargetVolumeOz: 3.75,
        ingredients: [
            { name: "Mezcal", measureOz: 1.5, measureMl: 45, type: "Agave Spirit" },
            { name: "Ancho Reyes Chile Liqueur", measureOz: 0.5, measureMl: 15, type: "Spiced Liqueur" },
            { name: "Passion Fruit Purée", measureOz: 0.75, measureMl: 22.5, type: "Tropical Purée" },
            { name: "Fresh Lime Juice", measureOz: 0.75, measureMl: 22.5, type: "Citrus" },
            { name: "Agave Nectar", measureOz: 0.25, measureMl: 7.5, type: "Sweetener" }
        ],
        decoys: [
            { name: "Blanco Tequila", type: "Agave Spirit" },
            { name: "Cointreau / Triple Sec", type: "Orange Liqueur" },
            { name: "Demerara / Simple Syrup", type: "Sweetener" }
        ],
        lore: {
            history: "Created to marry the earthy pit-smoke of artisanal Espadín mezcal with fiery dried Poblano chiles and tropical passion fruit.",
            science: "Capsaicin heat activates oral thermal receptors while passion fruit malic acid cuts agave smoke.",
            proTip: "Rim one-third of the glass with Tajín and black volcanic salt for crunch and spice.",
            flavorTags: ["Woodsmoke", "Vibrant Passion Fruit", "Chili Pepper Heat"]
        }
    },
    {
        id: "black-walnut-boulevard",
        name: "Black Walnut Boulevard",
        category: "signature",
        origin: "House Signature • Cellar Bar",
        glassware: "rocks",
        method: "stir",
        ice: "large-rock",
        garnish: "orange-peel",
        liquidColorBottom: "#292524",
        liquidColorTop: "#78350f",
        hasFoam: false,
        isCarbonated: false,
        totalTargetVolumeOz: 3.25,
        ingredients: [
            { name: "Bourbon / Rye Whiskey", measureOz: 1.5, measureMl: 45, type: "Spirit" },
            { name: "Cynar 70", measureOz: 0.75, measureMl: 22.5, type: "Artichoke Amaro" },
            { name: "Nocino Walnut Liqueur", measureOz: 0.5, measureMl: 15, type: "Nut Liqueur" },
            { name: "Sweet Vermouth", measureOz: 0.5, measureMl: 15, type: "Fortified Wine" }
        ],
        decoys: [
            { name: "Campari", type: "Bitter Liqueur" },
            { name: "Dry Vermouth", type: "Fortified Wine" },
            { name: "Angostura Bitters", type: "Bitters" }
        ],
        lore: {
            history: "A dark autumn nightcap replacing Campari with earthy Cynar and unripe green walnut liqueur (Nocino).",
            science: "Juglone tannins in green walnuts create rich mouthfeel that tempers 100-proof bourbon heat.",
            proTip: "Stir for 45 rotations; this dense spirit combination needs thorough dilution to reveal nutty undertones.",
            flavorTags: ["Toasted Black Walnut", "Earthy Cynar", "Charred Oak"]
        }
    },
    {
        id: "silk-and-smoke",
        name: "Silk & Smoke",
        category: "signature",
        origin: "House Signature • Modern Lounge",
        glassware: "highball",
        method: "shake",
        ice: "cubed",
        garnish: "orange-peel",
        liquidColorBottom: "#78350f",
        liquidColorTop: "#fcd34d",
        hasFoam: false,
        isCarbonated: true,
        totalTargetVolumeOz: 5.5,
        ingredients: [
            { name: "Blended Scotch", measureOz: 1.5, measureMl: 45, type: "Whisky" },
            { name: "Islay Peated Scotch Float", measureOz: 0.5, measureMl: 15, type: "Whisky Float" },
            { name: "Fig & Earl Grey Syrup", measureOz: 0.75, measureMl: 22.5, type: "Syrup" },
            { name: "Fresh Lemon Juice", measureOz: 0.75, measureMl: 22.5, type: "Citrus" },
            { name: "Club Soda", measureOz: 2.0, measureMl: 60, type: "Carbonated" }
        ],
        decoys: [
            { name: "Bourbon / Rye Whiskey", type: "Spirit" },
            { name: "Ginger Beer", type: "Carbonated" },
            { name: "Demerara / Simple Syrup", type: "Sweetener" }
        ],
        lore: {
            history: "A highball designed around bergamot-infused black tea, dried Adriatic figs, and peat smoke.",
            science: "Tannins in steeped Earl Grey tea bind with lemon juice, leaving a soft mouthfeel lengthened by cold soda.",
            proTip: "Float the Islay Scotch across the top cube so the aroma hits the guest before the effervescent tea body.",
            flavorTags: ["Peat Smoke", "Bergamot Tea", "Malty Dried Fig"]
        }
    },
    {
        id: "midnight-velvet",
        name: "Midnight Velvet",
        category: "signature",
        origin: "House Signature • Late Night Reserve",
        glassware: "coupe",
        method: "shake",
        ice: "neat",
        garnish: "coffee-beans",
        liquidColorBottom: "#1c1917",
        liquidColorTop: "#44403c",
        hasFoam: true,
        isCarbonated: false,
        totalTargetVolumeOz: 3.75,
        ingredients: [
            { name: "Goslings Black Seal Rum", measureOz: 1.5, measureMl: 45, type: "Dark Rum" },
            { name: "Coffee Liqueur", measureOz: 0.75, measureMl: 22.5, type: "Coffee Liqueur" },
            { name: "Fresh Espresso", measureOz: 1.0, measureMl: 30, type: "Coffee" },
            { name: "Cherry Heering", measureOz: 0.5, measureMl: 15, type: "Cherry Liqueur" }
        ],
        decoys: [
            { name: "Vodka", type: "Spirit" },
            { name: "Demerara / Simple Syrup", type: "Sweetener" },
            { name: "Heavy Cream", type: "Dairy" }
        ],
        lore: {
            history: "A richer rum-based spin on the Espresso Martini, marrying dark molasses with Danish cherry liqueur.",
            science: "Dark rum esters combine with hot espresso oils, creating a dense hazelnut-tinted foam head.",
            proTip: "Pull the espresso shot fresh; cold-brew will not form the tight micro-crema this spec requires.",
            flavorTags: ["Espresso Crema", "Dark Black Cherry", "Caramelized Molasses"]
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
let activeBuild = [];

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

    // Populate Speed Rail Ingredients
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

    let totalOz = 0;
    activeBuild.forEach(item => {
        if (typeof item.measureOz === "number") totalOz += item.measureOz;
        else totalOz += 0.1;
    });

    const targetMax = drink.totalTargetVolumeOz || 3.0;
    const fillRatio = Math.min(totalOz / targetMax, 1.05);

    const emptyY = geo.emptyY;
    const fullY = geo.fullY;
    const currentY = emptyY - (emptyY - fullY) * fillRatio;

    liquidFill.setAttribute("y", currentY);
    liquidFill.setAttribute("height", 360 - currentY);

    gradStopBottom.setAttribute("stop-color", drink.liquidColorBottom);
    gradStopTop.setAttribute("stop-color", drink.liquidColorTop);

    liquidBubbles.style.display = drink.isCarbonated && fillRatio > 0.4 ? "block" : "none";
    foamHead.style.opacity = drink.hasFoam && fillRatio > 0.7 ? "0.85" : "0";

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
   Spec Verification Engine
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
            : (drink.method === "build" ? "Build carbonated or layered drinks directly in the glass." : "Shake drinks with citrus, cream, or juices to emulsify.");
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
        drink.ingredients.forEach(target => {
            const found = activeBuild.find(b => b.name === target.name);
            if (!found) {
                errors.push(`Missing: ${target.name}`);
            } else if (target.measureOz !== "dash" && Math.abs(found.measureOz - target.measureOz) > 0.05) {
                errors.push(`Measurement off on ${target.name}: Target is ${target.measureOz} oz (poured ${found.measureOz} oz).`);
            }
        });

        activeBuild.forEach(poured => {
            const isExpected = drink.ingredients.some(i => i.name === poured.name);
            if (!isExpected) {
                errors.push(`Extraneous Ingredient: ${poured.name} does not belong in this spec.`);
            }
        });
    }

    specFeedback.classList.remove("hidden", "success", "error");

    if (errors.length === 0) {
        correctAttempts++;
        streak++;
        AudioFX.chime();
        updateGarnishGraphic(true);
        specFeedback.classList.add("success");
        specFeedback.innerHTML = `
            <strong>✦ FLAWLESS SPEC!</strong> You nailed the exact glassware, technique, and balanced pour.
        `;
    } else {
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

flipToBackBtn.addEventListener("click", () => {
    AudioFX.clink();
    cocktailCard.classList.add("flipped");
});

flipToFrontBtn.addEventListener("click", () => {
    AudioFX.clink();
    cocktailCard.classList.remove("flipped");
});

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
