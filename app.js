// Pregnancy Care Guide - Complete Application Logic
// Customized for Hyderabad, India

// ============================================
// DATA: Complete Week-by-Week Pregnancy Guide
// ============================================

const pregnancyData = {
    // Week-specific focus nutrients and warnings
    weeklyFocus: {
        // First Trimester (Weeks 1-13)
        4: {
            title: "Implantation Week",
            nutrients: { folicAcid: "600μg", iron: "27mg", b12: "2.6μg", calcium: "1000mg" },
            focus: "Neural tube development begins. Folic acid is CRITICAL this week.",
            warnings: ["Avoid raw papaya completely", "No unpasteurized dairy", "Limit caffeine to 1 small cup"],
            symptoms: ["Mild cramping (normal)", "Breast tenderness", "Fatigue beginning", "Possible light spotting"]
        },
        5: {
            title: "Heart Development Begins",
            nutrients: { folicAcid: "600μg", iron: "27mg", b12: "2.6μg", omega3: "200mg DHA" },
            focus: "Baby's heart starts beating. Continue high folate intake.",
            warnings: ["Avoid all alcohol", "No smoking or passive smoking", "Avoid excess vitamin A"],
            symptoms: ["Morning sickness may start", "Increased urination", "Fatigue", "Food aversions"]
        },
        6: {
            title: "Facial Features Forming",
            nutrients: { folicAcid: "600μg", iron: "27mg", zinc: "11mg", vitaminC: "85mg" },
            focus: "Eyes, nose, mouth developing. Zinc supports cell division.",
            warnings: ["Avoid hot tubs/saunas", "No raw fish/sushi", "Limit fish to 2 servings/week"],
            symptoms: ["Nausea peaks", "Heightened smell", "Mood swings", "Bloating"]
        },
        7: {
            title: "Brain Development Accelerates",
            nutrients: { folicAcid: "600μg", choline: "450mg", iron: "27mg", iodine: "220μg" },
            focus: "Brain growing rapidly. Choline critical for brain development.",
            warnings: ["Avoid high mercury fish", "No undercooked meat", "Limit processed foods"],
            symptoms: ["Continued nausea", "Constipation may start", "Acne", "Excess saliva"]
        },
        8: {
            title: "All Organs Forming",
            nutrients: { folicAcid: "600μg", protein: "71g", iron: "27mg", vitaminD: "600IU" },
            focus: "All major organs developing. Protein intake important.",
            warnings: ["No soft cheeses", "Avoid deli meats unless heated", "No raw sprouts"],
            symptoms: ["Nausea may worsen", "Exhaustion", "Vivid dreams", "Constipation"]
        },
        9: {
            title: "Embryo to Fetus Transition",
            nutrients: { protein: "71g", calcium: "1000mg", iron: "27mg", magnesium: "350mg" },
            focus: "Baby is now called a fetus. Bones starting to form.",
            warnings: ["Avoid lifting heavy weights", "No contact sports", "Stay hydrated"],
            symptoms: ["Waistline thickening", "Continued nausea", "Mood changes", "Heartburn starting"]
        },
        10: {
            title: "Vital Organs Complete",
            nutrients: { protein: "71g", calcium: "1000mg", vitaminC: "85mg", fiber: "28g" },
            focus: "Organs formed, now growing. Fiber helps with constipation.",
            warnings: ["Avoid lying flat on back for long", "No excessive exercise", "Stay cool"],
            symptoms: ["Nausea may ease slightly", "Visible veins", "Growing belly", "Round ligament pain"]
        },
        11: {
            title: "Rapid Growth Phase",
            nutrients: { protein: "71g", iron: "27mg", zinc: "11mg", b6: "1.9mg" },
            focus: "Baby growing rapidly. B6 helps with nausea.",
            warnings: ["Avoid pesticide exposure", "No harsh chemicals", "Gentle exercise only"],
            symptoms: ["Less nausea for some", "More energy returning", "Skin changes", "Hair thickening"]
        },
        12: {
            title: "Reflexes Developing",
            nutrients: { protein: "71g", calcium: "1000mg", iron: "27mg", vitaminD: "600IU" },
            focus: "Baby can move! Calcium for bone development.",
            warnings: ["Prepare for NT scan", "Continue prenatal vitamins", "Stay active gently"],
            symptoms: ["Nausea improving", "More energy", "Visible bump", "Less frequent urination"]
        },
        13: {
            title: "End of First Trimester",
            nutrients: { protein: "71g", iron: "27mg", omega3: "200mg DHA", calcium: "1000mg" },
            focus: "First trimester complete! Risk of miscarriage drops significantly.",
            warnings: ["Schedule second trimester tests", "Review diet with doctor", "Plan maternity wear"],
            symptoms: ["Energy returning", "Nausea fading", "Baby bump showing", "Libido changes"]
        },
        // Second Trimester (Weeks 14-27)
        14: {
            title: "Second Trimester Begins",
            nutrients: { protein: "71g", iron: "27mg", calcium: "1000mg", vitaminD: "600IU" },
            focus: "Energy returns! Baby's facial features more defined.",
            warnings: ["Watch for round ligament pain", "Stay hydrated", "Moisturize stretching skin"],
            symptoms: ["Increased energy", "Reduced nausea", "Growing appetite", "Nasal congestion"]
        },
        15: {
            title: "Baby Can Sense Light",
            nutrients: { protein: "71g", omega3: "300mg DHA", iron: "27mg", vitaminA: "770μg" },
            focus: "Eyes sensitive to light. Omega-3 for brain development.",
            warnings: ["Start sleeping on side", "Avoid lying flat", "Stay cool in summer"],
            symptoms: ["Round ligament pain", "Nose bleeds", "Skin darkening", "Memory fog"]
        },
        16: {
            title: "Baby Can Hear",
            nutrients: { protein: "71g", calcium: "1000mg", iodine: "220μg", choline: "450mg" },
            focus: "Baby's ears developed! Talk and sing to baby.",
            warnings: ["Quad screen test due", "Monitor weight gain", "Wear supportive shoes"],
            symptoms: ["Feeling flutters", "Backache starting", "Leg cramps", "Bigger breasts"]
        },
        17: {
            title: "Fat Stores Developing",
            nutrients: { protein: "71g", healthyFats: "Essential", iron: "27mg", fiber: "28g" },
            focus: "Baby developing fat for warmth. Healthy fats important.",
            warnings: ["Avoid sleeping on back", "Watch for swelling", "Stay active"],
            symptoms: ["Clear fetal movement", "Stretch marks may start", "Increased discharge", "Vivid dreams"]
        },
        18: {
            title: "Baby Very Active",
            nutrients: { protein: "71g", calcium: "1200mg", iron: "27mg", magnesium: "360mg" },
            focus: "Baby very active! Calcium needs increase.",
            warnings: ["Anatomy scan week", "Note movement patterns", "Avoid stress"],
            symptoms: ["Strong kicks", "Better sleep", "Hip pain", "Braxton Hicks possible"]
        },
        19: {
            title: "Senses Developing",
            nutrients: { protein: "71g", omega3: "300mg DHA", zinc: "11mg", vitaminC: "85mg" },
            focus: "All five senses developing. Brain growth rapid.",
            warnings: ["Watch posture", "Avoid heavy lifting", "Stay hydrated"],
            symptoms: ["Dizziness when standing", "Skin changes", "Stronger kicks", "Leg cramps"]
        },
        20: {
            title: "Halfway Point!",
            nutrients: { protein: "71g", iron: "27mg", calcium: "1200mg", vitaminD: "600IU" },
            focus: "Congratulations! Halfway through pregnancy!",
            warnings: ["Anatomy scan if not done", "Monitor fetal movement", "Review birth plan"],
            symptoms: ["Strong movement", "Shortness of breath", "Swollen ankles", "Heartburn"]
        },
        21: {
            title: "Rapid Weight Gain Phase",
            nutrients: { protein: "71g", iron: "27mg", fiber: "30g", calcium: "1200mg" },
            focus: "Baby gaining weight rapidly. Extra calories needed (300/day).",
            warnings: ["Watch sodium intake", "Elevate feet when resting", "Stay active"],
            symptoms: ["Varicose veins", "Stretch marks", "Back pain", "Braxton Hicks"]
        },
        22: {
            title: "Hearing Acute",
            nutrients: { protein: "71g", omega3: "300mg DHA", choline: "450mg", iron: "27mg" },
            focus: "Baby can hear your voice clearly. Keep talking!",
            warnings: ["Avoid loud noises", "Practice relaxation", "Monitor blood pressure"],
            symptoms: ["Increased appetite", "Swollen hands", "Hemorrhoids possible", "Insomnia"]
        },
        23: {
            title: "Lung Development",
            nutrients: { protein: "75g", omega3: "300mg DHA", iron: "27mg", vitaminE: "15mg" },
            focus: "Lungs developing surfactant. Vitamin E supports this.",
            warnings: ["Watch for preterm labor signs", "Stay hydrated", "Rest when tired"],
            symptoms: ["Swollen feet", "Backache", "Skin itching", "Mood swings"]
        },
        24: {
            title: "Viability Milestone",
            nutrients: { protein: "75g", calcium: "1200mg", iron: "27mg", vitaminD: "600IU" },
            focus: "Baby is viable outside womb with medical support!",
            warnings: ["Glucose test due", "Watch for swelling", "Count kicks daily"],
            symptoms: ["Linea nigra darkening", "Carpal tunnel", "Leg cramps", "Hot flashes"]
        },
        25: {
            title: "Fat Accumulation",
            nutrients: { protein: "75g", healthyFats: "Essential", calcium: "1200mg", iron: "27mg" },
            focus: "Baby's skin less wrinkled. Fat smoothing features.",
            warnings: ["Monitor weight gain", "Practice birthing positions", "Stay active"],
            symptoms: ["Frequent urination returns", "Heartburn worse", "Hemorrhoids", "Difficulty sleeping"]
        },
        26: {
            title: "Eyes Open",
            nutrients: { protein: "75g", vitaminA: "770μg", omega3: "300mg DHA", iron: "27mg" },
            focus: "Baby's eyes can open! Vitamin A for vision.",
            warnings: ["Watch blood pressure", "Avoid prolonged standing", "Rest on left side"],
            symptoms: ["Swollen everything", "Breathlessness", "Pelvic pressure", "Insomnia"]
        },
        27: {
            title: "End of Second Trimester",
            nutrients: { protein: "75g", iron: "30mg", calcium: "1200mg", vitaminD: "600IU" },
            focus: "Second trimester ends! Baby's brain very active.",
            warnings: ["Third trimester prep", "Review birth plan", "Pack hospital bag start"],
            symptoms: ["Frequent movement", "Shortness of breath", "Leg cramps", "Pelvic pain"]
        },
        // Third Trimester (Weeks 28-40)
        28: {
            title: "Third Trimester Begins",
            nutrients: { protein: "75g", iron: "30mg", calcium: "1200mg", omega3: "300mg DHA" },
            focus: "Final stretch! Baby's brain developing rapidly.",
            warnings: ["Kick counts essential", "Watch for preeclampsia", "Rest with feet up"],
            symptoms: ["Braxton Hicks regular", "Back pain", "Shortness of breath", "Frequent urination"]
        },
        29: {
            title: "Bones Hardening",
            nutrients: { protein: "75g", calcium: "1200mg", phosphorus: "700mg", vitaminD: "600IU" },
            focus: "Baby's bones hardening. Calcium intake critical.",
            warnings: ["Avoid lying flat", "Watch for swelling", "Stay cool"],
            symptoms: ["Heartburn severe", "Constipation", "Hemorrhoids", "Insomnia"]
        },
        30: {
            title: "Brain Growth Surge",
            nutrients: { protein: "80g", omega3: "300mg DHA", choline: "450mg", iron: "30mg" },
            focus: "Brain growing fastest now. DHA essential.",
            warnings: ["Monitor fetal movement", "Practice breathing", "Prepare hospital bag"],
            symptoms: ["Fatigue returns", "Mood swings", "Pelvic pressure", "Braxton Hicks"]
        },
        31: {
            title: "Processing Information",
            nutrients: { protein: "80g", omega3: "300mg DHA", iron: "30mg", calcium: "1200mg" },
            focus: "Baby processing light, sound, touch. Brain connections forming.",
            warnings: ["Start birth class if not done", "Review pain management options", "Rest"],
            symptoms: ["Leaking colostrum", "Back pain", "Frequent urination", "Breathless"]
        },
        32: {
            title: "Toenails Complete",
            nutrients: { protein: "80g", iron: "30mg", vitaminC: "85mg", calcium: "1200mg" },
            focus: "Baby fully formed, just needs to grow. Iron stores building.",
            warnings: ["Biophysical profile may be ordered", "Watch for preterm labor", "Rest"],
            symptoms: ["Heartburn peak", "Difficulty sleeping", "Swollen feet", "Braxton Hicks"]
        },
        33: {
            title: "Rapid Weight Gain",
            nutrients: { protein: "80g", iron: "30mg", fiber: "30g", calcium: "1200mg" },
            focus: "Baby gaining about half pound/week. Stay nourished.",
            warnings: ["Watch position (head down?)", "Avoid long trips", "Rest on left side"],
            symptoms: ["Pelvic pressure intense", "Waddling walk", "Hot and uncomfortable", "Nesting urge"]
        },
        34: {
            title: "Lungs Nearly Mature",
            nutrients: { protein: "80g", omega3: "300mg DHA", vitaminE: "15mg", iron: "30mg" },
            focus: "Lungs almost ready for breathing. Keep up nutrition.",
            warnings: ["Hospital pre-registration", "Pediatrician selection", "Install car seat"],
            symptoms: ["Extreme fatigue", "Frequent urination", "Pelvic pain", "Difficulty breathing"]
        },
        35: {
            title: "Kidneys Fully Developed",
            nutrients: { protein: "80g", iron: "30mg", potassium: "2900mg", calcium: "1200mg" },
            focus: "Baby's kidneys complete. Stay hydrated.",
            warnings: ["Group B strep test due", "Review birth plan with doctor", "Pack hospital bag"],
            symptoms: ["Baby dropping soon", "Pelvic pressure", "Frequent bathroom trips", "Insomnia"]
        },
        36: {
            title: "Baby Dropping",
            nutrients: { protein: "80g", iron: "30mg", calcium: "1200mg", vitaminD: "600IU" },
            focus: "Baby may drop into pelvis. Full term soon!",
            warnings: ["Weekly checkups start", "Know labor signs", "Rest but stay active"],
            symptoms: ["Easier breathing", "More pelvic pressure", "Increased discharge", "Nesting strong"]
        },
        37: {
            title: "Early Term",
            nutrients: { protein: "80g", iron: "30mg", calcium: "1200mg", omega3: "300mg DHA" },
            focus: "Early term! Baby considered mature enough for birth.",
            warnings: ["Know when to go to hospital", "Bag packed and ready", "Keep phone charged"],
            symptoms: ["Bloody show possible", "Mucus plug may pass", "Irregular contractions", "Nesting"]
        },
        38: {
            title: "Full Term",
            nutrients: { protein: "80g", iron: "30mg", calcium: "1200mg", fiber: "30g" },
            focus: "Full term! Baby ready anytime now.",
            warnings: ["Call doctor if water breaks", "Time contractions", "Rest and wait"],
            symptoms: ["Diarrhea possible", "Lower back pain", "Stronger Braxton Hicks", "Mucus discharge"]
        },
        39: {
            title: "Due Date Approaching",
            nutrients: { protein: "80g", iron: "30mg", calcium: "1200mg", vitaminD: "600IU" },
            focus: "Due date near! Baby fully developed.",
            warnings: ["Note contraction patterns", "Hospital route planned", "Support person ready"],
            symptoms: ["Increased pressure", "Frequent contractions", "Nesting urge strong", "Difficulty sleeping"]
        },
        40: {
            title: "Due Date Week",
            nutrients: { protein: "80g", iron: "30mg", calcium: "1200mg", omega3: "300mg DHA" },
            focus: "Due date! Baby will come when ready. Stay calm.",
            warnings: ["Doctor may discuss induction", "Stay close to hospital", "Keep hydrated"],
            symptoms: ["Any day now!", "Strong contractions", "Water may break", "Ready to meet baby!"]
        }
    },

    // Meal templates by diet type
    mealTemplates: {
        veg: {
            earlyMorning: [
                { name: "Warm Lemon Water with Ginger", portion: "1 glass", icon: "🍋", nutrients: ["Vitamin C", "Digestion"], recipe: "Warm water + half lemon + grated ginger. Helps morning sickness." },
                { name: "Soaked Almonds & Dates", portion: "5 almonds + 2 dates", icon: "🥜", nutrients: ["Folate", "Iron", "Energy"], recipe: "Soak almonds overnight. Eat with dates for sustained energy." },
                { name: "Jeera Water", portion: "1 glass", icon: "💧", nutrients: ["Digestion", "Anti-nausea"], recipe: "Boil 1 tsp jeera in water, strain, drink warm. Reduces bloating." },
                { name: "Ragi Malt (Ambali)", portion: "1 glass", icon: "🥛", nutrients: ["Calcium", "Iron", "B-vitamins"], recipe: "Traditional Telangana drink. Mix ragi flour in buttermilk or milk." },
                { name: "Coconut Water", portion: "1 tender coconut", icon: "🥥", nutrients: ["Electrolytes", "Potassium"], recipe: "Fresh tender coconut water. Best in morning for hydration." },
                { name: "Tulsi-Ginger Tea", portion: "1 cup", icon: "🍵", nutrients: ["Immunity", "Anti-nausea"], recipe: "Boil tulsi leaves with ginger. No caffeine, safe for pregnancy." },
                { name: "Ajwain Water", portion: "1 glass", icon: "💧", nutrients: ["Digestion", "Gas relief"], recipe: "Soak ajwain overnight, strain and drink. Helps with bloating." }
            ],
            breakfast: [
                { name: "Pesarattu with Ginger Chutney", portion: "2 pesarattu + chutney", icon: "🥞", nutrients: ["Protein", "Folate", "Iron"], recipe: "Green gram dosa - Andhra specialty. High in folate. Serve with ginger chutney for nausea." },
                { name: "Idli with Sambar & Podi", portion: "3-4 idlis + sambar", icon: "🍚", nutrients: ["Carbs", "Protein", "Iron"], recipe: "Fermented rice-urad idli. Easy to digest. Dal sambar adds protein." },
                { name: "Upma with Vegetables", portion: "1 bowl", icon: "🍲", nutrients: ["Carbs", "Fiber", "B-vitamins"], recipe: "Rava upma with carrots, peas, beans. Light and nutritious." },
                { name: "Dosa with Potato Curry", portion: "2 dosas + curry", icon: "🥞", nutrients: ["Carbs", "Potassium", "B-vitamins"], recipe: "Classic dosa with aloo masala. Add onions, curry leaves." },
                { name: "Poha with Peanuts", portion: "1 bowl", icon: "🍚", nutrients: ["Iron", "Protein", "Carbs"], recipe: "Flattened rice with peanuts, curry leaves, turmeric. Light breakfast." },
                { name: "Ragi Dosa with Peanut Chutney", portion: "2 dosas + chutney", icon: "🥞", nutrients: ["Calcium", "Iron", "Protein"], recipe: "Finger millet dosa. Higher calcium than regular dosa." },
                { name: "Oats Upma", portion: "1 bowl", icon: "🥣", nutrients: ["Fiber", "Iron", "B-vitamins"], recipe: "Oats cooked upma style with vegetables. High fiber helps constipation." }
            ],
            midMorningSnack: [
                { name: "Fresh Fruit Bowl", portion: "1 bowl mixed fruits", icon: "🍎", nutrients: ["Vitamins", "Fiber", "Antioxidants"], recipe: "Apple, pomegranate, banana, chikoo. Avoid papaya and pineapple!" },
                { name: "Buttermilk (Chaas/Majjiga)", portion: "1 glass", icon: "🥛", nutrients: ["Calcium", "Probiotics", "Cooling"], recipe: "Curd + water + jeera powder + curry leaves. Aids digestion." },
                { name: "Roasted Makhana", portion: "1 cup", icon: "🌰", nutrients: ["Calcium", "Protein", "Low-cal"], recipe: "Dry roast fox nuts with minimal salt. Great pregnancy snack." },
                { name: "Dry Fruit Ladoo", portion: "2 small ladoos", icon: "🍬", nutrients: ["Iron", "Calcium", "Energy"], recipe: "Dates + almonds + cashews + ghee. Natural energy boost." },
                { name: "Sprouts Chaat", portion: "1 small bowl", icon: "🥗", nutrients: ["Protein", "Folate", "Fiber"], recipe: "Cooked moong sprouts with tomato, onion, lemon. MUST be well cooked." },
                { name: "Banana with Honey", portion: "1 banana + 1 tsp honey", icon: "🍌", nutrients: ["Potassium", "Energy", "Fiber"], recipe: "Ripe banana drizzled with honey. Quick energy boost." },
                { name: "Paneer Cubes with Chaat Masala", portion: "50g paneer", icon: "🧀", nutrients: ["Protein", "Calcium"], recipe: "Fresh paneer cubes with chaat masala and lemon." }
            ],
            lunch: [
                { name: "Rice + Dal + Palak Curry + Curd", portion: "Full meal", icon: "🍛", nutrients: ["Complete protein", "Iron", "Calcium", "Folate"], recipe: "White rice + toor dal + spinach curry + fresh curd. Complete Telugu meal." },
                { name: "Sambar Rice + Beetroot Poriyal", portion: "Full meal", icon: "🍚", nutrients: ["Protein", "Iron", "Folate"], recipe: "Sambar mixed rice with beetroot stir-fry. Iron-rich meal." },
                { name: "Vegetable Biryani (Light)", portion: "1 plate + raita", icon: "🍚", nutrients: ["Carbs", "Vegetables", "Spices"], recipe: "Mild veg biryani with carrots, beans, paneer. Not too spicy." },
                { name: "Chapati + Paneer Curry + Dal", portion: "3 chapati + curry", icon: "🫓", nutrients: ["Protein", "Calcium", "Fiber"], recipe: "Whole wheat roti with paneer and dal for protein." },
                { name: "Rice + Pappu (Dal) + Gongura", portion: "Full meal", icon: "🍛", nutrients: ["Protein", "Iron", "Vitamin C"], recipe: "Andhra special - rice, dal, tangy gongura pacchadi." },
                { name: "Pulihora + Curd + Palya", portion: "Full meal", icon: "🍚", nutrients: ["Carbs", "Probiotics", "Fiber"], recipe: "Tamarind rice with curd and vegetable stir-fry." },
                { name: "Jowar Roti + Mixed Veg Curry + Dal", portion: "3 rotis + curry", icon: "🫓", nutrients: ["Fiber", "Iron", "Protein"], recipe: "Millet roti with vegetables and dal. High in iron." }
            ],
            eveningSnack: [
                { name: "Peanut Chikki", portion: "1-2 small pieces", icon: "🥜", nutrients: ["Protein", "Iron", "Folate"], recipe: "Groundnut jaggery bars. Traditional and nutritious." },
                { name: "Vegetable Soup", portion: "1 bowl", icon: "🍲", nutrients: ["Vitamins", "Hydration", "Fiber"], recipe: "Mixed vegetable soup with tomato, carrot, beans, corn." },
                { name: "Idli Dipped in Sambar", portion: "2 mini idlis", icon: "🍚", nutrients: ["Carbs", "Protein"], recipe: "Small idlis dipped in warm sambar. Light and filling." },
                { name: "Fruit Custard", portion: "1 small bowl", icon: "🍮", nutrients: ["Calcium", "Vitamins", "Protein"], recipe: "Custard with apple, banana, pomegranate. Use pasteurized milk." },
                { name: "Dhokla", portion: "3-4 pieces", icon: "🧁", nutrients: ["Protein", "B-vitamins", "Probiotics"], recipe: "Steamed gram flour snack. Light and fermented." },
                { name: "Cucumber-Carrot Sticks + Hummus", portion: "1 bowl", icon: "🥕", nutrients: ["Fiber", "Protein", "Vitamins"], recipe: "Fresh vegetable sticks with chickpea hummus." },
                { name: "Masala Chai (Limited) + Marie Biscuit", portion: "Half cup + 2 biscuits", icon: "☕", nutrients: ["Warmth", "Comfort"], recipe: "LIMIT caffeine. Half cup chai only. Not daily." }
            ],
            dinner: [
                { name: "Chapati + Kadhi + Vegetable", portion: "2-3 chapati + kadhi", icon: "🫓", nutrients: ["Protein", "Calcium", "Probiotics"], recipe: "Whole wheat roti with yogurt-based kadhi and sabzi." },
                { name: "Khichdi with Ghee", portion: "1 bowl", icon: "🍚", nutrients: ["Complete protein", "Easy digest", "B-vitamins"], recipe: "Dal-rice khichdi with ghee. Perfect for nausea days." },
                { name: "Rice + Rasam + Vegetable Curry", portion: "Full meal", icon: "🍛", nutrients: ["Vitamins", "Digestive", "Hydration"], recipe: "Light rice meal with pepper rasam. Aids digestion." },
                { name: "Roti + Palak Paneer", portion: "2 roti + curry", icon: "🫓", nutrients: ["Iron", "Calcium", "Protein"], recipe: "Spinach-paneer curry with whole wheat roti." },
                { name: "Vegetable Pulao + Raita", portion: "1 plate + raita", icon: "🍚", nutrients: ["Carbs", "Probiotics", "Vitamins"], recipe: "Light vegetable rice with cucumber raita." },
                { name: "Dalia (Broken Wheat) Khichdi", portion: "1 bowl", icon: "🥣", nutrients: ["Fiber", "Protein", "B-vitamins"], recipe: "Broken wheat with moong dal and vegetables." },
                { name: "Soft Roti + Mixed Dal", portion: "2 roti + dal", icon: "🫓", nutrients: ["Protein", "Fiber", "Iron"], recipe: "Whole wheat roti with panchamel dal (5 lentils)." }
            ],
            postDinner: [
                { name: "Warm Milk with Turmeric", portion: "1 glass", icon: "🥛", nutrients: ["Calcium", "Sleep aid", "Anti-inflammatory"], recipe: "Haldi doodh - warm milk with pinch of turmeric. Helps sleep." },
                { name: "Soaked Walnuts", portion: "2-3 walnuts", icon: "🥜", nutrients: ["Omega-3", "Brain health"], recipe: "Pre-soaked walnuts. Good for baby's brain development." },
                { name: "Warm Milk with Saffron", portion: "1 glass", icon: "🥛", nutrients: ["Calcium", "Mood", "Sleep"], recipe: "Kesar milk - 2-3 strands saffron in warm milk." },
                { name: "Raisins (Kishmish)", portion: "1 small handful", icon: "🍇", nutrients: ["Iron", "Fiber", "Energy"], recipe: "Soaked or dry raisins. Natural iron supplement." },
                { name: "Badam Milk", portion: "1 glass", icon: "🥛", nutrients: ["Protein", "Calcium", "Good fats"], recipe: "Almond paste in warm milk. Very nourishing." },
                { name: "Anjeer (Figs)", portion: "2-3 figs", icon: "🫐", nutrients: ["Calcium", "Fiber", "Iron"], recipe: "Dried figs soaked in water. Helps constipation." },
                { name: "Dates with Milk", portion: "2 dates + milk", icon: "🥛", nutrients: ["Iron", "Calcium", "Energy"], recipe: "Eat dates with warm milk. Traditional pregnancy food." }
            ]
        },
        nonveg: {
            earlyMorning: [
                { name: "Warm Lemon Water with Ginger", portion: "1 glass", icon: "🍋", nutrients: ["Vitamin C", "Digestion"], recipe: "Warm water + half lemon + grated ginger. Helps morning sickness." },
                { name: "Soaked Almonds & Dates", portion: "5 almonds + 2 dates", icon: "🥜", nutrients: ["Folate", "Iron", "Energy"], recipe: "Soak almonds overnight. Eat with dates for sustained energy." },
                { name: "Bone Broth (Optional)", portion: "1 small cup", icon: "🥣", nutrients: ["Collagen", "Minerals", "Protein"], recipe: "Homemade mutton/chicken bone broth. Very nourishing." },
                { name: "Ragi Malt (Ambali)", portion: "1 glass", icon: "🥛", nutrients: ["Calcium", "Iron", "B-vitamins"], recipe: "Traditional Telangana drink. Mix ragi flour in buttermilk or milk." },
                { name: "Coconut Water", portion: "1 tender coconut", icon: "🥥", nutrients: ["Electrolytes", "Potassium"], recipe: "Fresh tender coconut water. Best in morning for hydration." },
                { name: "Ajwain Water", portion: "1 glass", icon: "💧", nutrients: ["Digestion", "Gas relief"], recipe: "Soak ajwain overnight, strain and drink. Helps with bloating." },
                { name: "Jeera Water", portion: "1 glass", icon: "💧", nutrients: ["Digestion", "Anti-nausea"], recipe: "Boil 1 tsp jeera in water, strain, drink warm. Reduces bloating." }
            ],
            breakfast: [
                { name: "Egg Dosa with Chutney", portion: "2 dosas", icon: "🍳", nutrients: ["Protein", "Choline", "B12"], recipe: "Dosa with egg spread on top. High quality protein." },
                { name: "Boiled Eggs + Toast", portion: "2 eggs + 2 toast", icon: "🥚", nutrients: ["Protein", "Choline", "Iron"], recipe: "Well-cooked eggs (hard boiled). Never runny yolks in pregnancy!" },
                { name: "Pesarattu with Egg", portion: "2 pesarattu + 1 egg", icon: "🥞", nutrients: ["Protein", "Folate", "Iron"], recipe: "Green gram dosa with scrambled egg on side." },
                { name: "Chicken Sandwich", portion: "1 sandwich", icon: "🥪", nutrients: ["Protein", "B-vitamins", "Iron"], recipe: "Well-cooked shredded chicken with vegetables in wheat bread." },
                { name: "Idli with Egg Curry", portion: "3 idlis + egg curry", icon: "🍚", nutrients: ["Carbs", "Protein", "B12"], recipe: "Soft idlis with boiled egg curry. Complete meal." },
                { name: "Omelette with Vegetables", portion: "2 egg omelette + toast", icon: "🍳", nutrients: ["Protein", "Choline", "Vitamins"], recipe: "Well-done omelette with onion, tomato, capsicum." },
                { name: "Upma with Egg Bhurji", portion: "1 bowl each", icon: "🍲", nutrients: ["Carbs", "Protein", "Iron"], recipe: "Rava upma with well-scrambled eggs on side." }
            ],
            midMorningSnack: [
                { name: "Boiled Egg", portion: "1 whole egg", icon: "🥚", nutrients: ["Protein", "Choline", "B12"], recipe: "Hard boiled egg with black salt and pepper." },
                { name: "Chicken Soup", portion: "1 cup", icon: "🍲", nutrients: ["Protein", "Hydration", "Minerals"], recipe: "Clear chicken soup with vegetables. Very nourishing." },
                { name: "Fresh Fruit Bowl", portion: "1 bowl mixed fruits", icon: "🍎", nutrients: ["Vitamins", "Fiber", "Antioxidants"], recipe: "Apple, pomegranate, banana, grapes. Avoid papaya!" },
                { name: "Buttermilk (Chaas)", portion: "1 glass", icon: "🥛", nutrients: ["Calcium", "Probiotics", "Cooling"], recipe: "Curd + water + jeera powder + curry leaves." },
                { name: "Dry Fruit Ladoo", portion: "2 small ladoos", icon: "🍬", nutrients: ["Iron", "Calcium", "Energy"], recipe: "Dates + almonds + cashews + ghee." },
                { name: "Egg Bhurji Wrap", portion: "1 small wrap", icon: "🌯", nutrients: ["Protein", "Carbs", "B12"], recipe: "Scrambled egg in small wheat roti. Quick protein." },
                { name: "Paneer Cubes", portion: "50g paneer", icon: "🧀", nutrients: ["Protein", "Calcium"], recipe: "Fresh paneer cubes with chaat masala." }
            ],
            lunch: [
                { name: "Rice + Chicken Curry + Dal + Curd", portion: "Full meal", icon: "🍛", nutrients: ["Complete protein", "Iron", "B12", "Calcium"], recipe: "Rice with well-cooked chicken curry, dal, fresh curd." },
                { name: "Chicken Biryani (Mild)", portion: "1 plate + raita", icon: "🍚", nutrients: ["Protein", "Carbs", "Spices"], recipe: "Hyderabadi biryani - ensure chicken well cooked. Mild spice." },
                { name: "Fish Curry + Rice + Vegetable", portion: "Full meal", icon: "🐟", nutrients: ["Omega-3", "Protein", "Iodine"], recipe: "Safe fish (rohu, katla) curry with rice. 2x/week max." },
                { name: "Rice + Mutton Curry + Dal", portion: "Full meal", icon: "🍛", nutrients: ["Iron", "Protein", "B12"], recipe: "Well-cooked mutton (lean pieces) with rice and dal." },
                { name: "Chapati + Egg Curry + Vegetable", portion: "3 chapati + curry", icon: "🫓", nutrients: ["Protein", "Fiber", "Choline"], recipe: "Wheat roti with boiled egg curry and sabzi." },
                { name: "Chicken Pulao + Raita", portion: "1 plate + raita", icon: "🍚", nutrients: ["Protein", "Carbs", "Probiotics"], recipe: "Light chicken pulao with cucumber raita." },
                { name: "Rice + Prawns Curry + Sambar", portion: "Full meal", icon: "🦐", nutrients: ["Protein", "Iodine", "Omega-3"], recipe: "Safe prawns (well-cooked) with rice. 1x/week max." }
            ],
            eveningSnack: [
                { name: "Chicken Clear Soup", portion: "1 bowl", icon: "🍲", nutrients: ["Protein", "Hydration", "Minerals"], recipe: "Light chicken soup with vegetables. Warming and nourishing." },
                { name: "Egg Sandwich", portion: "Half sandwich", icon: "🥪", nutrients: ["Protein", "Carbs", "Choline"], recipe: "Boiled egg mashed with little mayo in wheat bread." },
                { name: "Vegetable Soup with Chicken Bits", portion: "1 bowl", icon: "🍲", nutrients: ["Protein", "Vitamins", "Fiber"], recipe: "Mixed veg soup with shredded chicken pieces." },
                { name: "Fish Cutlet", portion: "1-2 small cutlets", icon: "🐟", nutrients: ["Protein", "Omega-3"], recipe: "Homemade fish cutlet with safe fish. Well cooked." },
                { name: "Peanut Chikki", portion: "1-2 pieces", icon: "🥜", nutrients: ["Protein", "Iron", "Folate"], recipe: "Groundnut jaggery bars. Traditional and nutritious." },
                { name: "Fruit Custard", portion: "1 small bowl", icon: "🍮", nutrients: ["Calcium", "Vitamins", "Protein"], recipe: "Custard with seasonal fruits. Use pasteurized milk." },
                { name: "Masala Chai (Limited) + Biscuit", portion: "Half cup + 2 biscuits", icon: "☕", nutrients: ["Warmth", "Comfort"], recipe: "LIMIT caffeine. Half cup only. Not daily." }
            ],
            dinner: [
                { name: "Chapati + Chicken Curry + Dal", portion: "2-3 chapati + curry", icon: "🫓", nutrients: ["Protein", "Iron", "B12"], recipe: "Wheat roti with well-cooked chicken and dal." },
                { name: "Rice + Fish Curry + Vegetable", portion: "Light meal", icon: "🍛", nutrients: ["Omega-3", "Protein", "Vitamins"], recipe: "Safe fish curry with rice and vegetable. Light dinner." },
                { name: "Egg Fried Rice (Less Oil)", portion: "1 plate", icon: "🍚", nutrients: ["Protein", "Carbs", "B12"], recipe: "Rice with well-scrambled egg and vegetables. Light." },
                { name: "Khichdi with Egg", portion: "1 bowl + 1 egg", icon: "🍚", nutrients: ["Protein", "Easy digest"], recipe: "Dal-rice khichdi with boiled egg. Easy on stomach." },
                { name: "Roti + Keema (Minced Meat)", portion: "2 roti + keema", icon: "🫓", nutrients: ["Protein", "Iron", "B12"], recipe: "Wheat roti with well-cooked mutton keema. High iron." },
                { name: "Chicken Soup + Bread", portion: "1 bowl + bread", icon: "🍲", nutrients: ["Protein", "Hydration"], recipe: "Light chicken soup with wheat bread. Easy dinner." },
                { name: "Rice + Egg Curry + Rasam", portion: "Full meal", icon: "🍛", nutrients: ["Protein", "Digestive"], recipe: "Rice with egg curry and pepper rasam. Light." }
            ],
            postDinner: [
                { name: "Warm Milk with Turmeric", portion: "1 glass", icon: "🥛", nutrients: ["Calcium", "Sleep aid", "Anti-inflammatory"], recipe: "Haldi doodh - warm milk with pinch of turmeric." },
                { name: "Soaked Walnuts", portion: "2-3 walnuts", icon: "🥜", nutrients: ["Omega-3", "Brain health"], recipe: "Pre-soaked walnuts for baby's brain development." },
                { name: "Warm Milk with Saffron", portion: "1 glass", icon: "🥛", nutrients: ["Calcium", "Mood", "Sleep"], recipe: "Kesar milk - 2-3 strands saffron in warm milk." },
                { name: "Dates with Milk", portion: "2 dates + milk", icon: "🥛", nutrients: ["Iron", "Calcium", "Energy"], recipe: "Eat dates with warm milk. Traditional." },
                { name: "Badam Milk", portion: "1 glass", icon: "🥛", nutrients: ["Protein", "Calcium", "Good fats"], recipe: "Almond paste in warm milk. Very nourishing." },
                { name: "Anjeer (Figs)", portion: "2-3 figs", icon: "🫐", nutrients: ["Calcium", "Fiber", "Iron"], recipe: "Dried figs. Helps constipation." },
                { name: "Raisins (Kishmish)", portion: "1 small handful", icon: "🍇", nutrients: ["Iron", "Fiber", "Energy"], recipe: "Soaked or dry raisins. Natural iron." }
            ]
        }
    },

    // COMPREHENSIVE WEEK-BY-WEEK EXERCISE TEMPLATES
    // Based on 30+ years clinical experience - exercises progress safely through pregnancy
    weeklyExercises: {
        // ============ FIRST TRIMESTER (Weeks 4-13) ============
        // Focus: Gentle foundation, combat fatigue/nausea, establish routine

        4: {
            weekFocus: "Implantation week - VERY GENTLE movements only. Your body is adjusting.",
            caution: "Avoid overheating, no high-impact. Stop if any spotting occurs.",
            days: {
                1: {
                    low: [
                        { name: "Diaphragmatic Breathing", duration: "5 mins", description: "Lie on back, hand on belly. Breathe deeply - belly rises on inhale. Calms nervous system, reduces nausea.", reps: "10 slow breaths x 3 sets" },
                        { name: "Ankle Circles", duration: "3 mins", description: "Sitting or lying, rotate ankles slowly. Prevents blood clots, reduces fatigue.", reps: "10 each direction, each foot" }
                    ],
                    normal: [
                        { name: "Gentle Morning Walk", duration: "10-15 mins", description: "Slow pace in fresh air. Best before 9 AM in Hyderabad heat. Stay shaded.", reps: "Continuous" },
                        { name: "Cat-Cow Stretch", duration: "5 mins", description: "On hands & knees, arch back (cat) then drop belly (cow). Relieves back tension.", reps: "8-10 slow cycles" },
                        { name: "Kegel Foundation", duration: "3 mins", description: "Squeeze pelvic floor as if stopping urine. Hold 3 sec, release. ESSENTIAL from week 1!", reps: "10 reps x 2 sets" }
                    ],
                    high: [
                        { name: "Brisk Walk", duration: "20 mins", description: "Moderate pace, flat surface. Can talk while walking = right intensity.", reps: "Continuous" },
                        { name: "Prenatal Yoga - Sun Salutation (Modified)", duration: "10 mins", description: "Gentle flow without inversions. Skip if nauseous.", reps: "3-4 rounds slowly" },
                        { name: "Arm Circles with Light Weights", duration: "5 mins", description: "0.5-1 kg weights or water bottles. Circles forward & backward.", reps: "15 each direction" }
                    ]
                },
                2: {
                    low: [
                        { name: "Neck Rolls", duration: "3 mins", description: "Slow, gentle neck circles. Release tension from sleeping positions.", reps: "5 each direction" },
                        { name: "Shoulder Shrugs", duration: "3 mins", description: "Lift shoulders to ears, hold 3 sec, release. Releases upper body tension.", reps: "10 reps" },
                        { name: "Seated Breathing", duration: "5 mins", description: "Sit comfortably, focus on slow exhales. Reduces anxiety.", reps: "10 breaths" }
                    ],
                    normal: [
                        { name: "Evening Walk", duration: "15 mins", description: "After 6 PM when cooler. Walk in KBR Park, Durgam Cheruvu, or local park.", reps: "Continuous" },
                        { name: "Butterfly Pose (Baddha Konasana)", duration: "5 mins", description: "Sit, soles together, gently press knees down. Opens hips for delivery.", reps: "Hold 30 sec x 5" },
                        { name: "Kegels", duration: "3 mins", description: "Continue building pelvic floor strength.", reps: "10 reps x 3 sets" }
                    ],
                    high: [
                        { name: "Swimming", duration: "20 mins", description: "If pool available - Novotel, Westin pools. Zero impact, full body.", reps: "Continuous gentle laps" },
                        { name: "Stationary Cycling", duration: "15 mins", description: "Low resistance, upright position. Good for leg circulation.", reps: "Continuous" },
                        { name: "Upper Body Stretches", duration: "10 mins", description: "Arm stretches, side bends. Keep chest open.", reps: "Hold each 20 sec" }
                    ]
                },
                3: {
                    low: [
                        { name: "Bed Rest Day", duration: "Throughout day", description: "If feeling exhausted or nauseous. Rest is important too!", reps: "As needed" },
                        { name: "Gentle Leg Raises", duration: "5 mins", description: "Lying on side, lift top leg slowly. Maintains muscle tone.", reps: "10 each leg" },
                        { name: "Wrist Circles", duration: "2 mins", description: "Prevents carpal tunnel. Rotate wrists both directions.", reps: "10 each direction" }
                    ],
                    normal: [
                        { name: "Morning Walk", duration: "15 mins", description: "Try a different route for mental freshness.", reps: "Continuous" },
                        { name: "Wall Push-Ups", duration: "5 mins", description: "Stand arm's length from wall, push-up motion. Safe upper body strength.", reps: "10 reps x 2 sets" },
                        { name: "Pelvic Tilts", duration: "5 mins", description: "Standing or on all fours, tilt pelvis forward/back. Strengthens core.", reps: "15 reps" }
                    ],
                    high: [
                        { name: "Prenatal Aerobics Video", duration: "25 mins", description: "Follow YouTube prenatal workout. Low impact only.", reps: "Full session" },
                        { name: "Walking Lunges (Gentle)", duration: "5 mins", description: "Shallow lunges while walking. Hold wall if needed.", reps: "10 each leg" },
                        { name: "Stretching Routine", duration: "10 mins", description: "Full body gentle stretches. Focus on areas that feel tight.", reps: "Hold each 20 sec" }
                    ]
                },
                4: {
                    low: [
                        { name: "Relaxation & Visualization", duration: "10 mins", description: "Lie comfortably, visualize healthy baby. Reduces stress hormones.", reps: "Continuous" },
                        { name: "Toe Scrunches", duration: "3 mins", description: "Scrunch toes tight, release. Improves foot circulation.", reps: "15 reps" },
                        { name: "Deep Breathing", duration: "5 mins", description: "4-count inhale, 4-count exhale. Calms mind.", reps: "10 cycles" }
                    ],
                    normal: [
                        { name: "Walking", duration: "20 mins", description: "Slightly longer walk today if energy permits.", reps: "Continuous" },
                        { name: "Standing Calf Raises", duration: "5 mins", description: "Rise on toes, lower slowly. Prevents leg cramps.", reps: "15 reps x 2 sets" },
                        { name: "Kegels - Increased Hold", duration: "5 mins", description: "Now hold for 5 seconds instead of 3.", reps: "10 reps x 3 sets" }
                    ],
                    high: [
                        { name: "Brisk Walking", duration: "30 mins", description: "Split into 2 x 15 mins if needed.", reps: "Continuous" },
                        { name: "Prenatal Yoga Class", duration: "30 mins", description: "Join online class or Cult.fit prenatal session.", reps: "Full session" },
                        { name: "Light Resistance Band", duration: "10 mins", description: "Arm exercises with resistance band.", reps: "12 reps each exercise" }
                    ]
                },
                5: {
                    low: [
                        { name: "Seated Cat-Cow", duration: "5 mins", description: "Sit on chair, round and arch back. Office-friendly.", reps: "10 cycles" },
                        { name: "Hand Exercises", duration: "3 mins", description: "Open/close fists, finger spreads. Prevents numbness.", reps: "15 reps each" },
                        { name: "Breathing with Counting", duration: "5 mins", description: "Inhale 4, hold 4, exhale 6. Calms anxiety.", reps: "8 cycles" }
                    ],
                    normal: [
                        { name: "Morning Walk + Stretching", duration: "20 mins", description: "15 min walk + 5 min stretch after.", reps: "Combined" },
                        { name: "Side Leg Lifts", duration: "5 mins", description: "Lying on side, lift leg to hip height.", reps: "12 each side" },
                        { name: "Shoulder Blade Squeezes", duration: "3 mins", description: "Squeeze shoulder blades together. Improves posture.", reps: "15 reps" }
                    ],
                    high: [
                        { name: "Swimming or Aqua Aerobics", duration: "25 mins", description: "Best exercise for pregnancy. Very gentle on joints.", reps: "Continuous" },
                        { name: "Prenatal Pilates", duration: "20 mins", description: "Core strengthening without crunches.", reps: "Follow video" },
                        { name: "Walking with Arm Movements", duration: "15 mins", description: "Add arm swings while walking for cardio boost.", reps: "Continuous" }
                    ]
                },
                6: {
                    low: [
                        { name: "Gentle Full Body Stretch", duration: "10 mins", description: "In bed or on mat. Reach arms overhead, point toes.", reps: "Hold each 15 sec" },
                        { name: "Ankle Pumps", duration: "5 mins", description: "Point and flex feet. Essential for circulation.", reps: "20 reps each foot" }
                    ],
                    normal: [
                        { name: "Evening Walk", duration: "20 mins", description: "Walk after dinner aids digestion.", reps: "Continuous" },
                        { name: "Butterfly + Hip Circles", duration: "8 mins", description: "Butterfly pose, then circle hips while seated.", reps: "5 mins butterfly, 3 mins circles" },
                        { name: "Kegels with Holds", duration: "5 mins", description: "Hold for 8 seconds now, building endurance.", reps: "10 reps x 3 sets" }
                    ],
                    high: [
                        { name: "Outdoor Walk - Longer Route", duration: "35 mins", description: "Try Necklace Road early morning.", reps: "Continuous moderate pace" },
                        { name: "Prenatal Strength (Light)", duration: "15 mins", description: "Squats, lunges, arm work with no weights.", reps: "10 reps each" },
                        { name: "Cool Down Yoga", duration: "10 mins", description: "Child's pose, gentle twists, relaxation.", reps: "Hold each 30 sec" }
                    ]
                },
                7: {
                    low: [
                        { name: "Rest & Restore", duration: "15 mins", description: "Legs up the wall pose. Reduces swelling, very relaxing.", reps: "Hold 10-15 mins" },
                        { name: "Gentle Neck Stretches", duration: "5 mins", description: "Ear to shoulder, hold. Both sides.", reps: "3 each side, hold 20 sec" }
                    ],
                    normal: [
                        { name: "Morning Walk", duration: "15 mins", description: "Gentle start to the week's end.", reps: "Continuous" },
                        { name: "Full Prenatal Yoga Session", duration: "25 mins", description: "Complete yoga flow for pregnancy.", reps: "Full session" },
                        { name: "Meditation", duration: "10 mins", description: "Guided pregnancy meditation. YouTube has many options.", reps: "Continuous" }
                    ],
                    high: [
                        { name: "Active Rest Day", duration: "20 mins", description: "Light walk + stretching. Don't push too hard before new week.", reps: "Combined" },
                        { name: "Swimming (Leisure)", duration: "20 mins", description: "Gentle swimming, floating, relaxing in water.", reps: "Continuous" },
                        { name: "Partner Stretching", duration: "15 mins", description: "Have partner help with gentle stretches.", reps: "Hold each 30 sec" }
                    ]
                }
            }
        },

        5: {
            weekFocus: "Baby's heart starts beating! Continue gentle exercise. Combat morning sickness with movement.",
            caution: "Nausea may be strong. Exercise can help but don't force it. Stay hydrated.",
            days: {
                1: {
                    low: [
                        { name: "Anti-Nausea Breathing", duration: "5 mins", description: "Slow breathing while smelling ginger or lemon. Sit upright.", reps: "10 slow breaths" },
                        { name: "Gentle Wrist & Ankle Circles", duration: "5 mins", description: "Improves circulation when feeling unwell.", reps: "10 each direction" }
                    ],
                    normal: [
                        { name: "Short Walk After Eating", duration: "10 mins", description: "Walk 30 mins after breakfast. Helps digestion and nausea.", reps: "Continuous" },
                        { name: "Standing Pelvic Tilts", duration: "5 mins", description: "Stand against wall, tilt pelvis. Strengthens lower back.", reps: "15 reps" },
                        { name: "Kegels", duration: "5 mins", description: "Continue daily practice.", reps: "10 reps x 3 sets, hold 5 sec" }
                    ],
                    high: [
                        { name: "Morning Walk", duration: "25 mins", description: "Before nausea peaks. Early morning best.", reps: "Continuous" },
                        { name: "Prenatal Yoga - Standing Poses", duration: "15 mins", description: "Warrior I, II, Tree pose. Build strength.", reps: "Hold each 30 sec" },
                        { name: "Arm Toning", duration: "10 mins", description: "Light weights or resistance band. Bicep curls, tricep extensions.", reps: "12 reps each" }
                    ]
                },
                2: {
                    low: [
                        { name: "Bed Stretches", duration: "10 mins", description: "Before getting up. Stretch arms, legs, twist gently.", reps: "Hold each 15 sec" },
                        { name: "Seated Marching", duration: "5 mins", description: "Sit and lift knees alternately. Gets blood moving.", reps: "20 reps each leg" }
                    ],
                    normal: [
                        { name: "Evening Walk", duration: "20 mins", description: "Often feel better in evening. Use this time.", reps: "Continuous" },
                        { name: "Wall Squats", duration: "5 mins", description: "Back against wall, slide down to sitting position. Hold.", reps: "5 holds x 20 sec" },
                        { name: "Upper Back Stretches", duration: "5 mins", description: "Clasp hands behind, open chest. Improves posture.", reps: "5 holds x 15 sec" }
                    ],
                    high: [
                        { name: "Swimming", duration: "25 mins", description: "Water exercise helps with nausea for many women.", reps: "Continuous" },
                        { name: "Prenatal Pilates", duration: "20 mins", description: "Focus on core stability, not ab crunches.", reps: "Full session" },
                        { name: "Walking Stairs (Slowly)", duration: "5 mins", description: "If feeling strong. Use handrail. Good for legs.", reps: "2-3 floors up and down" }
                    ]
                },
                3: {
                    low: [
                        { name: "Restorative Rest", duration: "15 mins", description: "Supported child's pose with pillows. Very relaxing.", reps: "Hold entire time" },
                        { name: "Eye Relaxation", duration: "5 mins", description: "Cup palms over closed eyes. Reduces headache.", reps: "2-3 mins" }
                    ],
                    normal: [
                        { name: "Walk in Mall/AC Area", duration: "20 mins", description: "GVK One, Inorbit - AC walking if too hot outside.", reps: "Continuous" },
                        { name: "Cat-Cow", duration: "5 mins", description: "Relieves back pain that may start.", reps: "10 slow cycles" },
                        { name: "Side Stretches", duration: "5 mins", description: "Stand, reach arm overhead, lean to side.", reps: "5 each side, hold 15 sec" }
                    ],
                    high: [
                        { name: "Outdoor Morning Exercise", duration: "30 mins", description: "Walk + light yoga in park. Sanjeevaiah Park is nice.", reps: "Combined" },
                        { name: "Resistance Band Full Body", duration: "15 mins", description: "Rows, chest press, squats with band.", reps: "12 reps each" },
                        { name: "Stretching Cool Down", duration: "10 mins", description: "Full body stretch after workout.", reps: "Hold each 20 sec" }
                    ]
                },
                4: {
                    low: [
                        { name: "Gentle Yoga on Bed", duration: "10 mins", description: "Simple stretches without getting up if nauseous.", reps: "Hold each 20 sec" },
                        { name: "Diaphragmatic Breathing", duration: "5 mins", description: "Deep belly breaths. Calms nausea.", reps: "10 breaths" }
                    ],
                    normal: [
                        { name: "Walk + Kegels", duration: "20 mins", description: "Practice Kegels while walking - no one will know!", reps: "Walk continuous, Kegels every few mins" },
                        { name: "Prenatal Yoga - Floor Work", duration: "15 mins", description: "Butterfly, seated twists, hip openers.", reps: "Full sequence" },
                        { name: "Calf Stretches", duration: "5 mins", description: "Against wall, one leg back. Prevents leg cramps.", reps: "3 each leg, hold 30 sec" }
                    ],
                    high: [
                        { name: "Longer Walk", duration: "35 mins", description: "Durgam Cheruvu walkway is beautiful.", reps: "Moderate pace" },
                        { name: "Light Cardio", duration: "15 mins", description: "Marching, step touches, side steps.", reps: "Continuous low impact" },
                        { name: "Strength + Stretch", duration: "15 mins", description: "Squats, lunges, then full stretch.", reps: "10 reps strength, hold stretches 20 sec" }
                    ]
                },
                5: {
                    low: [
                        { name: "Legs Up Wall", duration: "10 mins", description: "Lie with legs up wall. Very restorative.", reps: "Hold entire time" },
                        { name: "Shoulder Rolls", duration: "3 mins", description: "Gentle shoulder circles. Release tension.", reps: "10 each direction" }
                    ],
                    normal: [
                        { name: "Walking", duration: "20 mins", description: "Your daily walk. Mix up the route.", reps: "Continuous" },
                        { name: "Hip Circles", duration: "5 mins", description: "Stand, hands on hips, circle hips. Loosens pelvis.", reps: "10 each direction" },
                        { name: "Kegels with Quick Flicks", duration: "5 mins", description: "Regular holds + quick squeeze-release.", reps: "10 holds + 20 quick flicks" }
                    ],
                    high: [
                        { name: "Swimming or Water Walking", duration: "25 mins", description: "Pool exercise day.", reps: "Continuous" },
                        { name: "Prenatal Dance", duration: "15 mins", description: "Gentle dancing to favorite music. Mood booster!", reps: "Continuous" },
                        { name: "Balance Work", duration: "10 mins", description: "Stand on one leg (hold wall), tree pose.", reps: "30 sec each leg x 3" }
                    ]
                },
                6: {
                    low: [
                        { name: "Full Rest Day", duration: "As needed", description: "Listen to your body. Rest is productive too.", reps: "Rest" },
                        { name: "Gentle Stretching Only", duration: "10 mins", description: "If you want some movement.", reps: "Light stretches" }
                    ],
                    normal: [
                        { name: "Morning Walk", duration: "20 mins", description: "Weekend walk, maybe with partner.", reps: "Leisurely pace" },
                        { name: "Partner Yoga/Stretching", duration: "15 mins", description: "Gentle stretches with support.", reps: "Hold each 30 sec" },
                        { name: "Relaxation Breathing", duration: "10 mins", description: "Practice for labor. Deep, slow breaths.", reps: "10 cycles" }
                    ],
                    high: [
                        { name: "Outdoor Activity", duration: "40 mins", description: "Nature walk at KBR Park. Full trail if feeling good.", reps: "Moderate pace" },
                        { name: "Yoga Flow", duration: "20 mins", description: "Complete prenatal yoga session.", reps: "Full flow" },
                        { name: "Cool Down & Meditation", duration: "10 mins", description: "End with relaxation.", reps: "Continuous" }
                    ]
                },
                7: {
                    low: [
                        { name: "Restorative Yoga", duration: "15 mins", description: "Supported poses with bolsters/pillows.", reps: "3-4 poses, hold 3-5 mins each" },
                        { name: "Body Scan Relaxation", duration: "10 mins", description: "Lie down, mentally relax each body part.", reps: "Full scan" }
                    ],
                    normal: [
                        { name: "Light Walk", duration: "15 mins", description: "Easy day before new week.", reps: "Gentle pace" },
                        { name: "Prenatal Yoga - Relaxation Focus", duration: "20 mins", description: "Gentle poses, lots of rest.", reps: "Slow session" },
                        { name: "Kegel Review", duration: "5 mins", description: "Check form, squeeze correctly.", reps: "10 slow, focused reps" }
                    ],
                    high: [
                        { name: "Active Recovery", duration: "25 mins", description: "Light walk + stretching. Don't push hard.", reps: "Combined" },
                        { name: "Foam Rolling (Gentle)", duration: "10 mins", description: "Roll out tight spots. Avoid belly!", reps: "Each area 1 min" },
                        { name: "Meditation", duration: "15 mins", description: "Pregnancy visualization meditation.", reps: "Guided" }
                    ]
                }
            }
        },

        6: {
            weekFocus: "Facial features forming. Nausea often peaks this week. Exercise when you can, rest when you must.",
            caution: "Stay hydrated. If vomiting, focus on rest and hydration over exercise.",
            days: {
                1: {
                    low: [
                        { name: "Anti-Nausea Position", duration: "10 mins", description: "Sit upright, supported. Deep slow breaths.", reps: "10 breaths" },
                        { name: "Wrist Pressure Points", duration: "5 mins", description: "Press wrist acupressure point for nausea (P6 point).", reps: "2 mins each wrist" }
                    ],
                    normal: [
                        { name: "Short Walks Multiple Times", duration: "3 x 10 mins", description: "Short walks better than one long one when nauseous.", reps: "3 separate walks" },
                        { name: "Standing Hip Circles", duration: "5 mins", description: "Gentle circles, hands on hips.", reps: "10 each direction" },
                        { name: "Kegels", duration: "5 mins", description: "Continue daily.", reps: "10 x 3 sets, hold 5 sec" }
                    ],
                    high: [
                        { name: "Morning Exercise Session", duration: "30 mins", description: "Walk + light strength before nausea hits.", reps: "Combined" },
                        { name: "Swimming", duration: "20 mins", description: "Water often helps nausea.", reps: "Continuous" },
                        { name: "Stretching", duration: "10 mins", description: "Full body stretch.", reps: "Hold each 20 sec" }
                    ]
                },
                2: {
                    low: [
                        { name: "Bed Yoga", duration: "10 mins", description: "Gentle stretches in bed if can't get up.", reps: "Hold each 15 sec" },
                        { name: "Ankle Pumps", duration: "5 mins", description: "Lying down, pump ankles up and down.", reps: "20 each foot" }
                    ],
                    normal: [
                        { name: "Walking", duration: "20 mins", description: "Evening walk when feeling better.", reps: "Continuous" },
                        { name: "Cat-Cow + Child's Pose", duration: "10 mins", description: "Gentle spine movement, then rest.", reps: "8 cat-cow, hold child's pose 2 mins" },
                        { name: "Arm Stretches", duration: "5 mins", description: "Overhead, cross-body, tricep stretches.", reps: "Hold each 20 sec" }
                    ],
                    high: [
                        { name: "Prenatal Aerobics", duration: "25 mins", description: "Low impact cardio class/video.", reps: "Full session" },
                        { name: "Resistance Training", duration: "15 mins", description: "Squats, wall push-ups, rows with band.", reps: "12 reps each" },
                        { name: "Cool Down", duration: "10 mins", description: "Stretching and breathing.", reps: "Full cool down" }
                    ]
                },
                3: {
                    low: [
                        { name: "Rest Day", duration: "Full day", description: "Complete rest if needed.", reps: "Rest" },
                        { name: "Deep Breathing Only", duration: "5 mins", description: "Minimal movement day.", reps: "10 slow breaths" }
                    ],
                    normal: [
                        { name: "Walk", duration: "20 mins", description: "Usual walking routine.", reps: "Continuous" },
                        { name: "Prenatal Yoga - Seated", duration: "15 mins", description: "All seated poses to avoid dizziness.", reps: "Full sequence" },
                        { name: "Kegel Progression", duration: "5 mins", description: "Increase hold to 8 seconds.", reps: "10 x 3 sets" }
                    ],
                    high: [
                        { name: "Swimming", duration: "30 mins", description: "Longer swim session.", reps: "Continuous" },
                        { name: "Prenatal Pilates", duration: "20 mins", description: "Core focus.", reps: "Full session" },
                        { name: "Walking", duration: "15 mins", description: "Post-swim walk.", reps: "Light pace" }
                    ]
                },
                4: {
                    low: [
                        { name: "Supported Relaxation", duration: "15 mins", description: "Lie with pillows under knees, blanket.", reps: "Full rest" },
                        { name: "Hand/Foot Massage", duration: "10 mins", description: "Self-massage or partner help.", reps: "5 mins each" }
                    ],
                    normal: [
                        { name: "Morning Walk", duration: "20 mins", description: "Fresh air helps nausea.", reps: "Continuous" },
                        { name: "Standing Leg Work", duration: "10 mins", description: "Leg lifts to side, back. Hold wall.", reps: "10 each direction, each leg" },
                        { name: "Upper Body Stretch", duration: "5 mins", description: "Chest opener, shoulder stretches.", reps: "Hold each 20 sec" }
                    ],
                    high: [
                        { name: "Full Workout", duration: "40 mins", description: "Walk 20 + strength 15 + stretch 5.", reps: "Combined" },
                        { name: "Dance/Aerobics", duration: "15 mins", description: "Fun movement if energy is high.", reps: "Continuous" },
                        { name: "Meditation", duration: "10 mins", description: "End with calm.", reps: "Guided" }
                    ]
                },
                5: {
                    low: [
                        { name: "Gentle Movement", duration: "10 mins", description: "Whatever feels okay today.", reps: "As tolerated" },
                        { name: "Breathing Practice", duration: "5 mins", description: "Labor breathing practice.", reps: "10 cycles" }
                    ],
                    normal: [
                        { name: "Walking + Stairs", duration: "20 mins", description: "Include a few flights of stairs.", reps: "Continuous with stairs" },
                        { name: "Hip Opening Yoga", duration: "15 mins", description: "Butterfly, frog, pigeon (modified).", reps: "Hold each 1 min" },
                        { name: "Kegels", duration: "5 mins", description: "Daily practice.", reps: "10 x 3 sets" }
                    ],
                    high: [
                        { name: "Outdoor Exercise", duration: "35 mins", description: "Walk/jog intervals if pre-pregnancy jogger.", reps: "Walk 3 min, light jog 1 min" },
                        { name: "Full Body Strength", duration: "20 mins", description: "All major muscle groups.", reps: "10-12 reps each" },
                        { name: "Stretching", duration: "10 mins", description: "Full stretch routine.", reps: "Hold each 20 sec" }
                    ]
                },
                6: {
                    low: [
                        { name: "Restorative Only", duration: "15 mins", description: "Bolster under knees, eye mask, rest.", reps: "Full relaxation" },
                        { name: "Light Walking", duration: "10 mins", description: "If feeling up to it.", reps: "Very gentle" }
                    ],
                    normal: [
                        { name: "Walk", duration: "25 mins", description: "Weekend longer walk.", reps: "Continuous" },
                        { name: "Partner Yoga", duration: "20 mins", description: "Gentle stretches with partner support.", reps: "Full session" },
                        { name: "Relaxation", duration: "10 mins", description: "End with rest.", reps: "Guided relaxation" }
                    ],
                    high: [
                        { name: "Active Day", duration: "45 mins", description: "Walk + yoga + light activity.", reps: "Combined" },
                        { name: "Swimming or Water Aerobics", duration: "25 mins", description: "Pool exercise.", reps: "Continuous" },
                        { name: "Evening Stretch", duration: "10 mins", description: "Before bed stretching.", reps: "Hold each 30 sec" }
                    ]
                },
                7: {
                    low: [
                        { name: "Complete Rest", duration: "Full day", description: "Week 6 often toughest for nausea. Rest!", reps: "Rest" },
                        { name: "Gentle Movement if Able", duration: "5-10 mins", description: "Only if feeling okay.", reps: "As tolerated" }
                    ],
                    normal: [
                        { name: "Light Walk", duration: "15 mins", description: "Easy end to the week.", reps: "Gentle pace" },
                        { name: "Yoga - Relaxation Focus", duration: "20 mins", description: "Restorative poses.", reps: "Long holds" },
                        { name: "Breathing & Meditation", duration: "10 mins", description: "Calm preparation for new week.", reps: "Guided" }
                    ],
                    high: [
                        { name: "Recovery Day", duration: "30 mins", description: "Light activity only.", reps: "Gentle" },
                        { name: "Stretching", duration: "15 mins", description: "Full body.", reps: "Hold each 30 sec" },
                        { name: "Meditation", duration: "10 mins", description: "Week-end relaxation.", reps: "Guided" }
                    ]
                }
            }
        },

        // Weeks 7-13 follow similar pattern with progressive changes
        7: { weekFocus: "Brain development accelerating. Exercise helps oxygen flow to baby.", caution: "Constipation may start. Keep moving to help digestion." },
        8: { weekFocus: "All organs forming. Maintain gentle activity.", caution: "Exhaustion common. Rest between exercises." },
        9: { weekFocus: "Baby is now a fetus! Celebrate with gentle movement.", caution: "Heartburn may begin. Don't exercise right after eating." },
        10: { weekFocus: "Vital organs complete. Energy may start returning.", caution: "Round ligament pain may start with movement." },
        11: { weekFocus: "Rapid growth phase. B6 from exercise helps nausea.", caution: "Nausea may be easing. Gradually increase activity." },
        12: { weekFocus: "Baby can move! Match baby's activity.", caution: "Visible bump - adjust exercises for comfort." },
        13: { weekFocus: "End of first trimester! Energy returning for most.", caution: "Prepare for more active second trimester." },

        // Second Trimester (Weeks 14-27) - Golden period for exercise
        14: { weekFocus: "Second trimester begins - the 'honeymoon phase'! Energy returns.", caution: "Avoid lying flat on back for extended periods now." },
        15: { weekFocus: "Baby can sense light. Exercise outdoors in gentle sun.", caution: "Center of gravity shifting. Watch balance." },
        16: { weekFocus: "Baby can hear! Play music during exercise.", caution: "May feel first flutters. Don't worry if not yet." },
        17: { weekFocus: "Fat stores developing. Healthy exercise burns right calories.", caution: "Increased blood volume - may feel warm. Stay cool." },
        18: { weekFocus: "Baby very active! Best time for regular exercise routine.", caution: "Anatomy scan week - exciting milestone!" },
        19: { weekFocus: "All five senses developing. Engage in varied activities.", caution: "Watch for dizziness when standing up quickly." },
        20: { weekFocus: "HALFWAY! Celebrate with your favorite safe exercise.", caution: "Belly growing - modify exercises as needed." },
        21: { weekFocus: "Baby gaining weight. You need extra 300 calories if active.", caution: "Watch for swelling after exercise." },
        22: { weekFocus: "Baby can hear your voice. Talk during exercise.", caution: "Back pain increasing. Strengthen core safely." },
        23: { weekFocus: "Lung development - good oxygenation from exercise helps.", caution: "May feel breathless. This is normal." },
        24: { weekFocus: "Viability milestone! Baby could survive if born now.", caution: "Glucose test due - watch sugar intake." },
        25: { weekFocus: "Baby's skin smoothing. Keep skin supple with movement.", caution: "Increased pressure on bladder. Stay near bathroom!" },
        26: { weekFocus: "Baby's eyes can open! Exercise improves circulation to baby.", caution: "Watch blood pressure if feeling lightheaded." },
        27: { weekFocus: "End of second trimester! Prepare for final phase.", caution: "Third trimester will require exercise modifications." },

        // Third Trimester (Weeks 28-40) - Prepare for delivery
        28: { weekFocus: "Third trimester! Focus on birthing preparation exercises.", caution: "Kick counts important - exercise doesn't affect them." },
        29: { weekFocus: "Bones hardening. Weight-bearing safe exercise helps.", caution: "May feel very full after eating - exercise before meals." },
        30: { weekFocus: "Brain growth surge! Walking helps baby brain development.", caution: "Fatigue returning - shorter, more frequent exercise." },
        31: { weekFocus: "Baby processing information. Mental exercises matter too.", caution: "Birthing ball exercises excellent now." },
        32: { weekFocus: "Baby fully formed, just growing. Stay active for stamina.", caution: "Sleep difficult - gentle evening exercise helps." },
        33: { weekFocus: "Rapid weight gain for baby. Keep moving for your comfort.", caution: "Pelvic pressure intense - swimming great relief." },
        34: { weekFocus: "Lungs nearly mature. Your breathing exercises help too.", caution: "Hospital bag time! Include exercise clothes for after birth." },
        35: { weekFocus: "Kidneys fully developed. Stay hydrated during exercise.", caution: "Watch for signs of early labor during activity." },
        36: { weekFocus: "Baby may drop. Walking helps baby descend properly.", caution: "Easier breathing, more pelvic pressure." },
        37: { weekFocus: "Early term! Walking can help labor start naturally.", caution: "Know labor signs vs. exercise effects." },
        38: { weekFocus: "Full term! Stay active but close to home.", caution: "Pack hospital bag, have phone charged." },
        39: { weekFocus: "Due date approaching! Walking, squatting help labor.", caution: "Bouncing on birthing ball excellent now." },
        40: { weekFocus: "Due date week! Gentle movement, labor preparation.", caution: "Baby will come when ready. Stay calm and active." }
    },

    // Default exercise templates for weeks without specific day plans
    // These are used when specific day plans aren't defined
    defaultExercisesByTrimester: {
        first: {
            low: [
                { name: "Deep Breathing", duration: "5 mins", description: "Calms nausea and anxiety.", reps: "10 slow breaths" },
                { name: "Gentle Stretching", duration: "10 mins", description: "Full body light stretches.", reps: "Hold each 15 sec" },
                { name: "Ankle & Wrist Circles", duration: "5 mins", description: "Improves circulation.", reps: "10 each" }
            ],
            normal: [
                { name: "Walking", duration: "15-20 mins", description: "Daily walk in comfortable temperature.", reps: "Continuous" },
                { name: "Prenatal Yoga", duration: "15 mins", description: "Basic pregnancy-safe poses.", reps: "Full session" },
                { name: "Kegels", duration: "5 mins", description: "Essential pelvic floor work.", reps: "10 x 3 sets" },
                { name: "Cat-Cow Stretch", duration: "5 mins", description: "Spine flexibility.", reps: "10 cycles" }
            ],
            high: [
                { name: "Brisk Walking", duration: "25-30 mins", description: "Moderate pace cardio.", reps: "Continuous" },
                { name: "Swimming", duration: "20 mins", description: "Zero-impact full body.", reps: "Continuous" },
                { name: "Prenatal Strength", duration: "15 mins", description: "Light weights or bodyweight.", reps: "12 each exercise" },
                { name: "Stretching", duration: "10 mins", description: "Full body cool down.", reps: "Hold each 20 sec" }
            ]
        },
        second: {
            low: [
                { name: "Gentle Yoga", duration: "15 mins", description: "Restorative poses with props.", reps: "Long holds" },
                { name: "Seated Exercises", duration: "10 mins", description: "Arm work, stretches while sitting.", reps: "10 each" },
                { name: "Breathing Practice", duration: "10 mins", description: "Labor breathing preparation.", reps: "Various patterns" }
            ],
            normal: [
                { name: "Walking", duration: "20-25 mins", description: "Daily essential.", reps: "Continuous" },
                { name: "Prenatal Yoga", duration: "25 mins", description: "Full session with modifications.", reps: "Full flow" },
                { name: "Squats & Lunges", duration: "10 mins", description: "Legs and delivery prep.", reps: "10 each" },
                { name: "Kegels", duration: "5 mins", description: "Continue daily.", reps: "15 x 3 sets" },
                { name: "Upper Body", duration: "10 mins", description: "Arms, shoulders, upper back.", reps: "12 each" }
            ],
            high: [
                { name: "Walking/Light Jogging", duration: "30-35 mins", description: "Cardio (jog only if pre-pregnancy runner).", reps: "Continuous" },
                { name: "Swimming/Aqua Aerobics", duration: "30 mins", description: "Pool workout.", reps: "Full session" },
                { name: "Prenatal Strength Training", duration: "20 mins", description: "Full body with light weights.", reps: "12-15 each" },
                { name: "Prenatal Dance", duration: "20 mins", description: "Fun cardio movement.", reps: "Continuous" },
                { name: "Yoga & Stretching", duration: "15 mins", description: "Flexibility and relaxation.", reps: "Full session" }
            ]
        },
        third: {
            low: [
                { name: "Restorative Yoga", duration: "15 mins", description: "Supported poses, lots of props.", reps: "3-4 poses, long holds" },
                { name: "Breathing & Relaxation", duration: "15 mins", description: "Labor preparation essential.", reps: "Various techniques" },
                { name: "Pelvic Floor Exercises", duration: "5 mins", description: "Continue Kegels.", reps: "10 x 3 sets" },
                { name: "Ankle Exercises", duration: "5 mins", description: "Reduce swelling.", reps: "20 each" }
            ],
            normal: [
                { name: "Walking", duration: "15-20 mins", description: "Shorter walks, more frequent.", reps: "2-3 times daily" },
                { name: "Birthing Ball Exercises", duration: "15 mins", description: "Hip circles, bouncing, positioning.", reps: "Various" },
                { name: "Prenatal Yoga", duration: "20 mins", description: "Modified for big belly.", reps: "Gentle flow" },
                { name: "Squats (Supported)", duration: "5 mins", description: "Delivery preparation.", reps: "10 reps with support" },
                { name: "Kegels", duration: "5 mins", description: "More important than ever.", reps: "15 x 3 sets" }
            ],
            high: [
                { name: "Walking", duration: "25-30 mins", description: "Moderate pace, stay close to home.", reps: "Continuous" },
                { name: "Swimming", duration: "25 mins", description: "Best third trimester exercise.", reps: "Continuous" },
                { name: "Birthing Ball Workout", duration: "20 mins", description: "Comprehensive ball session.", reps: "Full routine" },
                { name: "Prenatal Yoga", duration: "25 mins", description: "Hip opening focus.", reps: "Full session" },
                { name: "Light Strength", duration: "15 mins", description: "Maintain muscle tone.", reps: "10 each" }
            ]
        }
    },

    // Symptom tips by week range
    symptomTips: {
        "4-6": [
            { emoji: "🤢", tip: "Nausea starting? Eat small, frequent meals. Ginger tea, lemon water, jeera water help." },
            { emoji: "😴", tip: "Extreme fatigue is normal. Rest when possible. Your body is working hard!" },
            { emoji: "🫨", tip: "Bloating? Eat slowly, avoid gas-forming foods. Ajwain water helps." },
            { emoji: "🔴", tip: "Light spotting can be normal (implantation). Heavy bleeding - call doctor immediately." }
        ],
        "7-10": [
            { emoji: "🤢", tip: "Morning sickness peaks. Keep crackers by bed. Eat before getting up." },
            { emoji: "🍋", tip: "Food aversions strong? Don't force foods. Find alternatives." },
            { emoji: "💧", tip: "Stay hydrated despite nausea. Small sips throughout day." },
            { emoji: "🫁", tip: "Shortness of breath? Blood volume increasing. Slow down activities." }
        ],
        "11-13": [
            { emoji: "😊", tip: "Nausea may ease. Energy returning for many women!" },
            { emoji: "🔥", tip: "Heartburn starting? Eat smaller meals. Avoid lying down after eating." },
            { emoji: "💤", tip: "Better sleep? Enjoy this! Third trimester brings new challenges." },
            { emoji: "🩺", tip: "NT scan due. Important screening test. Don't skip!" }
        ],
        "14-20": [
            { emoji: "⚡", tip: "Second trimester energy boost! Best time for moderate exercise." },
            { emoji: "🦵", tip: "Round ligament pain? Normal stretching. Rest when it happens." },
            { emoji: "😤", tip: "Congestion common. Use saline spray. Avoid decongestants." },
            { emoji: "🦷", tip: "Gum bleeding? Pregnancy hormones. See dentist for cleaning." }
        ],
        "21-27": [
            { emoji: "🤰", tip: "Belly growing! Watch posture. Support lower back." },
            { emoji: "🦶", tip: "Swollen feet? Elevate when resting. Reduce salt intake." },
            { emoji: "🍕", tip: "Cravings are normal. Indulge occasionally but maintain nutrition." },
            { emoji: "💧", tip: "Drink 8-10 glasses water daily. Dehydration causes contractions." }
        ],
        "28-32": [
            { emoji: "🏃", tip: "Baby very active! Count kicks daily - 10 kicks in 2 hours is normal." },
            { emoji: "😴", tip: "Sleep on left side. Use pillows for comfort." },
            { emoji: "🔥", tip: "Heartburn worse? Sleep propped up. Small, frequent meals." },
            { emoji: "🦵", tip: "Leg cramps? Stretch before bed. Stay hydrated. Check calcium." }
        ],
        "33-37": [
            { emoji: "🎒", tip: "Pack hospital bag! Include documents, clothes, essentials." },
            { emoji: "💨", tip: "Braxton Hicks increasing? Practice breathing. Stay calm." },
            { emoji: "🚽", tip: "Frequent bathroom trips? Baby pressing bladder. Normal!" },
            { emoji: "🏥", tip: "Know labor signs: regular contractions, water breaking, bloody show." }
        ],
        "38-40": [
            { emoji: "⏰", tip: "Any day now! Rest as much as possible." },
            { emoji: "📱", tip: "Keep phone charged. Have hospital route planned." },
            { emoji: "🏃", tip: "Walking may help labor start naturally. Don't overdo it." },
            { emoji: "❤️", tip: "Stay calm and positive. You're ready for this!" }
        ]
    },

    // Danger signs (constant across pregnancy)
    dangerSigns: [
        "Vaginal bleeding or fluid leakage",
        "Severe abdominal or pelvic pain",
        "Persistent severe headache",
        "Vision changes (blurry, spots)",
        "Sudden severe swelling (face/hands)",
        "Fever above 100.4°F (38°C)",
        "Decreased fetal movement (after week 20)",
        "Regular painful contractions before 37 weeks",
        "Dizziness or fainting"
    ]
};

// ============================================
// APPLICATION STATE
// ============================================

let state = {
    currentWeek: 4,
    currentDay: 1,
    currentTrimester: 1,
    dietType: 'veg',
    energyLevel: 'normal',
    currentView: 'home',
    trackingData: {}
};

// Load state from localStorage
function loadState() {
    const saved = localStorage.getItem('pregnancyGuideState');
    if (saved) {
        const parsed = JSON.parse(saved);
        state = { ...state, ...parsed };
    }

    const tracking = localStorage.getItem('pregnancyGuideTracking');
    if (tracking) {
        state.trackingData = JSON.parse(tracking);
    }
}

// Save state to localStorage
function saveState() {
    localStorage.setItem('pregnancyGuideState', JSON.stringify({
        currentWeek: state.currentWeek,
        currentDay: state.currentDay,
        currentTrimester: state.currentTrimester,
        dietType: state.dietType,
        energyLevel: state.energyLevel
    }));
}

function saveTracking() {
    localStorage.setItem('pregnancyGuideTracking', JSON.stringify(state.trackingData));
}

// ============================================
// UI RENDERING FUNCTIONS
// ============================================

function renderWeekGrid() {
    const grid = document.getElementById('weekGrid');
    let weeks;

    if (state.currentTrimester === 1) {
        weeks = Array.from({ length: 13 }, (_, i) => i + 1);
    } else if (state.currentTrimester === 2) {
        weeks = Array.from({ length: 14 }, (_, i) => i + 14);
    } else {
        weeks = Array.from({ length: 13 }, (_, i) => i + 28);
    }

    grid.innerHTML = weeks.map(week => {
        const trackingKey = `week${week}`;
        const weekTracking = state.trackingData[trackingKey] || {};
        const daysTracked = Object.keys(weekTracking).filter(k => k.startsWith('day')).length;

        let progressClass = 'empty';
        if (daysTracked >= 7) progressClass = 'complete';
        else if (daysTracked > 0) progressClass = 'partial';

        const isCurrentWeek = week === state.currentWeek;
        const isFutureWeek = week > 40;

        return `
            <div class="week-card ${isCurrentWeek ? 'selected' : ''} ${isFutureWeek ? 'disabled' : ''}"
                 data-week="${week}"
                 style="position: relative; ${week < 4 ? 'opacity: 0.5;' : ''}">
                ${isCurrentWeek ? '<span class="current-week-badge">NOW</span>' : ''}
                <div class="week-num">${week}</div>
                <div class="week-label">Week</div>
                <div class="progress-dot ${progressClass}"></div>
            </div>
        `;
    }).join('');

    // Add click handlers
    grid.querySelectorAll('.week-card').forEach(card => {
        card.addEventListener('click', () => {
            const week = parseInt(card.dataset.week);
            if (week >= 4 && week <= 40) {
                state.currentWeek = week;
                state.currentDay = 1;
                saveState();
                showView('day');
            }
        });
    });
}

function renderDaySelector() {
    const selector = document.getElementById('daySelector');
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    selector.innerHTML = days.map((day, index) => {
        const dayNum = index + 1;
        return `
            <button class="day-btn ${dayNum === state.currentDay ? 'active' : ''}" data-day="${dayNum}">
                <span class="day-name">${day}</span>
                <span class="day-num">${dayNum}</span>
            </button>
        `;
    }).join('');

    selector.querySelectorAll('.day-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            state.currentDay = parseInt(btn.dataset.day);
            saveState();
            renderDayView();
        });
    });
}

function renderNutrientFocus() {
    const focus = document.getElementById('nutrientFocus');
    const weekData = pregnancyData.weeklyFocus[state.currentWeek] || pregnancyData.weeklyFocus[4];

    focus.innerHTML = `
        <h4>🎯 Week ${state.currentWeek}: ${weekData.title}</h4>
        <p style="font-size: 0.85rem; margin-bottom: 10px;">${weekData.focus}</p>
        <div class="nutrient-grid">
            ${Object.entries(weekData.nutrients).map(([key, value]) => `
                <div class="nutrient-item">
                    <div class="value">${value}</div>
                    <div class="name">${key.replace(/([A-Z])/g, ' $1').trim()}</div>
                </div>
            `).join('')}
        </div>
    `;
}

function renderWarningCard() {
    const card = document.getElementById('warningCard');
    const weekData = pregnancyData.weeklyFocus[state.currentWeek] || pregnancyData.weeklyFocus[4];

    card.innerHTML = `
        <h4>⚠️ This Week's Precautions</h4>
        <ul>
            ${weekData.warnings.map(w => `<li>${w}</li>`).join('')}
        </ul>
    `;
}

function renderSymptomTips() {
    const tips = document.getElementById('symptomTips');
    let weekRange;

    if (state.currentWeek <= 6) weekRange = "4-6";
    else if (state.currentWeek <= 10) weekRange = "7-10";
    else if (state.currentWeek <= 13) weekRange = "11-13";
    else if (state.currentWeek <= 20) weekRange = "14-20";
    else if (state.currentWeek <= 27) weekRange = "21-27";
    else if (state.currentWeek <= 32) weekRange = "28-32";
    else if (state.currentWeek <= 37) weekRange = "33-37";
    else weekRange = "38-40";

    const currentTips = pregnancyData.symptomTips[weekRange];

    tips.innerHTML = `
        <h4>💡 Symptom Tips for This Period</h4>
        ${currentTips.map(t => `
            <div class="tip-item">
                <span>${t.emoji}</span>
                <span>${t.tip}</span>
            </div>
        `).join('')}
    `;
}

function renderMealCards() {
    const container = document.getElementById('mealCards');
    const meals = pregnancyData.mealTemplates[state.dietType];

    // Use day to select different options (rotating through available options)
    const dayIndex = (state.currentDay - 1) % 7;

    const mealTypes = [
        { key: 'earlyMorning', title: 'Early Morning', time: '6:00 - 6:30 AM', class: 'early-morning' },
        { key: 'breakfast', title: 'Breakfast', time: '8:00 - 9:00 AM', class: 'breakfast' },
        { key: 'midMorningSnack', title: 'Mid-Morning Snack', time: '11:00 AM', class: 'morning-snack' },
        { key: 'lunch', title: 'Lunch', time: '1:00 - 2:00 PM', class: 'lunch' },
        { key: 'eveningSnack', title: 'Evening Snack', time: '4:30 - 5:00 PM', class: 'evening-snack' },
        { key: 'dinner', title: 'Dinner', time: '7:30 - 8:00 PM', class: 'dinner' },
        { key: 'postDinner', title: 'Post Dinner', time: '9:30 PM', class: 'post-dinner' }
    ];

    container.innerHTML = mealTypes.map(mealType => {
        const mealOptions = meals[mealType.key];
        const meal = mealOptions[dayIndex % mealOptions.length];

        return `
            <div class="meal-card">
                <div class="meal-header ${mealType.class}">
                    <div>
                        <div class="meal-title">${mealType.title}</div>
                        <div class="meal-time">${mealType.time}</div>
                    </div>
                    <span style="font-size: 1.5rem;">${meal.icon}</span>
                </div>
                <div class="meal-content">
                    <div class="meal-item">
                        <span class="meal-icon">${meal.icon}</span>
                        <div class="meal-details">
                            <h4>${meal.name}</h4>
                            <p><strong>Portion:</strong> ${meal.portion}</p>
                            <p><strong>How to prepare:</strong> ${meal.recipe}</p>
                            <div class="nutrition-tags">
                                ${meal.nutrients.map(n => `<span class="nutrition-tag">${n}</span>`).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function renderExerciseCard() {
    const card = document.getElementById('exerciseCard');
    const weekData = pregnancyData.weeklyExercises[state.currentWeek];
    let exercises;
    let weekFocus = "";
    let caution = "";

    // Try to get week-specific, day-specific exercises
    if (weekData && weekData.days && weekData.days[state.currentDay]) {
        exercises = weekData.days[state.currentDay][state.energyLevel];
        weekFocus = weekData.weekFocus || "";
        caution = weekData.caution || "";
    } else if (weekData && weekData.weekFocus) {
        // Week exists but no day-specific data - use defaults with week info
        weekFocus = weekData.weekFocus;
        caution = weekData.caution || "";

        // Get trimester defaults
        let trimesterKey;
        if (state.currentWeek <= 13) trimesterKey = 'first';
        else if (state.currentWeek <= 27) trimesterKey = 'second';
        else trimesterKey = 'third';

        exercises = pregnancyData.defaultExercisesByTrimester[trimesterKey][state.energyLevel];
    } else {
        // Fallback to trimester defaults
        let trimesterKey;
        if (state.currentWeek <= 13) trimesterKey = 'first';
        else if (state.currentWeek <= 27) trimesterKey = 'second';
        else trimesterKey = 'third';

        exercises = pregnancyData.defaultExercisesByTrimester[trimesterKey][state.energyLevel];
    }

    const energyEmoji = state.energyLevel === 'low' ? '😴' : state.energyLevel === 'high' ? '💪' : '😊';
    const energyLabel = state.energyLevel.charAt(0).toUpperCase() + state.energyLevel.slice(1);

    card.innerHTML = `
        <h3>🏃‍♀️ Week ${state.currentWeek}, Day ${state.currentDay} - Exercise Plan</h3>
        <div style="background: #e8f5e9; padding: 10px; border-radius: 8px; margin-bottom: 15px;">
            <p style="font-size: 0.85rem; color: #2e7d32; margin: 0;">
                <strong>${energyEmoji} ${energyLabel} Energy Day:</strong>
                ${state.energyLevel === 'low' ? 'Gentle movement only. Rest is productive!' :
                  state.energyLevel === 'high' ? 'Great energy! Make the most of it safely.' :
                  'Normal activity level. Balanced workout.'}
            </p>
        </div>
        ${weekFocus ? `
        <div style="background: #fff3e0; padding: 10px; border-radius: 8px; margin-bottom: 15px;">
            <p style="font-size: 0.85rem; color: #e65100; margin: 0;">
                <strong>🎯 This Week's Focus:</strong> ${weekFocus}
            </p>
        </div>
        ` : ''}
        ${exercises.map(ex => `
            <div class="exercise-item">
                <h4>${ex.name}</h4>
                <p><strong>Duration:</strong> ${ex.duration}</p>
                <p>${ex.description}</p>
                ${ex.reps ? `<p><strong>Target:</strong> ${ex.reps}</p>` : ''}
            </div>
        `).join('')}
        ${caution ? `
        <div style="background: #ffebee; padding: 10px; border-radius: 8px; margin-top: 15px;">
            <p style="font-size: 0.8rem; color: #c62828; margin: 0;">
                <strong>⚠️ Caution:</strong> ${caution}
            </p>
        </div>
        ` : ''}
        <p style="font-size: 0.8rem; color: #666; margin-top: 10px; padding: 10px; background: #f5f5f5; border-radius: 8px;">
            🚨 <strong>STOP IMMEDIATELY</strong> if you feel dizzy, have pain, bleeding, or fluid leakage.
            Listen to your body - if something feels wrong, rest!
        </p>
    `;
}

function renderDangerSigns() {
    const card = document.getElementById('dangerSigns');

    card.innerHTML = `
        <h4>🚨 STOP & Call Doctor IF:</h4>
        <ul>
            ${pregnancyData.dangerSigns.map(sign => `<li>${sign}</li>`).join('')}
        </ul>
    `;
}

function renderDayView() {
    document.getElementById('selectedWeekTitle').textContent = `Week ${state.currentWeek} - Day ${state.currentDay}`;

    renderDaySelector();
    renderNutrientFocus();
    renderWarningCard();
    renderSymptomTips();
    renderMealCards();
    renderExerciseCard();
    renderDangerSigns();

    // Update diet toggle active state
    document.querySelectorAll('.diet-toggle button').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.diet === state.dietType);
    });

    // Update energy selector active state
    document.querySelectorAll('.energy-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.energy === state.energyLevel);
    });
}

function renderTrackingView() {
    document.getElementById('trackingDate').textContent = `Week ${state.currentWeek}, Day ${state.currentDay}`;

    const section = document.getElementById('trackingSection');
    const trackingKey = `week${state.currentWeek}`;
    const dayKey = `day${state.currentDay}`;
    const dayData = state.trackingData[trackingKey]?.[dayKey] || {};

    const trackingItems = [
        { id: 'earlyMorning', label: 'Early Morning Routine', icon: '🌅' },
        { id: 'breakfast', label: 'Breakfast', icon: '🍳' },
        { id: 'morningSnack', label: 'Mid-Morning Snack', icon: '🍎' },
        { id: 'lunch', label: 'Lunch', icon: '🍛' },
        { id: 'eveningSnack', label: 'Evening Snack', icon: '🍪' },
        { id: 'dinner', label: 'Dinner', icon: '🍽️' },
        { id: 'postDinner', label: 'Post-Dinner', icon: '🥛' },
        { id: 'exercise', label: 'Exercise/Activity', icon: '🏃‍♀️' },
        { id: 'water', label: 'Water Intake (8+ glasses)', icon: '💧' },
        { id: 'prenatalVitamin', label: 'Prenatal Vitamin', icon: '💊' }
    ];

    section.innerHTML = trackingItems.map(item => {
        const status = dayData[item.id] || 'pending';
        return `
            <div class="tracking-item">
                <div class="tracking-label">
                    <span style="font-size: 1.3rem;">${item.icon}</span>
                    <span>${item.label}</span>
                </div>
                <div class="track-btns">
                    <button class="track-btn done ${status === 'done' ? 'active' : ''}"
                            data-item="${item.id}" data-status="done">Done</button>
                    <button class="track-btn missed ${status === 'missed' ? 'active' : ''}"
                            data-item="${item.id}" data-status="missed">Missed</button>
                </div>
            </div>
        `;
    }).join('');

    // Add remarks
    document.getElementById('remarksInput').value = dayData.remarks || '';

    // Add tracking button handlers
    section.querySelectorAll('.track-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.dataset.item;
            const status = btn.dataset.status;

            if (!state.trackingData[trackingKey]) {
                state.trackingData[trackingKey] = {};
            }
            if (!state.trackingData[trackingKey][dayKey]) {
                state.trackingData[trackingKey][dayKey] = {};
            }

            // Toggle status
            if (state.trackingData[trackingKey][dayKey][item] === status) {
                state.trackingData[trackingKey][dayKey][item] = 'pending';
            } else {
                state.trackingData[trackingKey][dayKey][item] = status;
            }

            saveTracking();
            renderTrackingView();
        });
    });
}

function renderProgressView() {
    // Journey progress
    const journeyProgress = Math.round(((state.currentWeek - 4) / 36) * 100);
    document.getElementById('journeyProgress').style.width = `${journeyProgress}%`;

    // Weekly stats
    const weeklyStats = document.getElementById('weeklyStats');
    const trackingKey = `week${state.currentWeek}`;
    const weekData = state.trackingData[trackingKey] || {};

    let totalItems = 0;
    let doneItems = 0;
    let missedItems = 0;

    for (let day = 1; day <= 7; day++) {
        const dayData = weekData[`day${day}`] || {};
        Object.entries(dayData).forEach(([key, value]) => {
            if (key !== 'remarks') {
                totalItems++;
                if (value === 'done') doneItems++;
                if (value === 'missed') missedItems++;
            }
        });
    }

    const adherenceRate = totalItems > 0 ? Math.round((doneItems / totalItems) * 100) : 0;

    weeklyStats.innerHTML = `
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; text-align: center;">
            <div>
                <div style="font-size: 1.5rem; font-weight: bold; color: #4caf50;">${doneItems}</div>
                <div style="font-size: 0.75rem; color: #666;">Completed</div>
            </div>
            <div>
                <div style="font-size: 1.5rem; font-weight: bold; color: #f44336;">${missedItems}</div>
                <div style="font-size: 0.75rem; color: #666;">Missed</div>
            </div>
            <div>
                <div style="font-size: 1.5rem; font-weight: bold; color: #2196f3;">${adherenceRate}%</div>
                <div style="font-size: 0.75rem; color: #666;">Adherence</div>
            </div>
        </div>
    `;

    // Tracking history
    const historyContainer = document.getElementById('trackingHistory');
    const recentDays = [];

    for (let w = state.currentWeek; w >= Math.max(4, state.currentWeek - 2); w--) {
        const wData = state.trackingData[`week${w}`] || {};
        for (let d = 7; d >= 1; d--) {
            const dData = wData[`day${d}`] || {};
            if (Object.keys(dData).length > 0) {
                const done = Object.values(dData).filter(v => v === 'done').length;
                const total = Object.keys(dData).filter(k => k !== 'remarks').length;
                recentDays.push({
                    week: w,
                    day: d,
                    done,
                    total,
                    remarks: dData.remarks || ''
                });
            }
            if (recentDays.length >= 7) break;
        }
        if (recentDays.length >= 7) break;
    }

    historyContainer.innerHTML = recentDays.length > 0 ? recentDays.map(entry => `
        <div style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="font-weight: 600;">Week ${entry.week}, Day ${entry.day}</span>
                <span style="color: ${entry.done === entry.total ? '#4caf50' : '#ff9800'};">
                    ${entry.done}/${entry.total} completed
                </span>
            </div>
            ${entry.remarks ? `<p style="font-size: 0.8rem; color: #666; margin-top: 5px;">${entry.remarks}</p>` : ''}
        </div>
    `).join('') : '<p style="color: #666; font-size: 0.85rem;">No tracking data yet. Start tracking today!</p>';
}

function updateQuickStats() {
    document.getElementById('currentWeek').textContent = state.currentWeek;
    document.getElementById('daysLeft').textContent = (40 - state.currentWeek) * 7;

    // Calculate completion percentage
    const trackingKey = `week${state.currentWeek}`;
    const weekData = state.trackingData[trackingKey] || {};
    let totalPossible = 70; // 7 days x 10 items
    let completed = 0;

    for (let day = 1; day <= 7; day++) {
        const dayData = weekData[`day${day}`] || {};
        completed += Object.values(dayData).filter(v => v === 'done').length;
    }

    document.getElementById('completion').textContent = `${Math.round((completed / totalPossible) * 100)}%`;
}

function showView(viewName) {
    state.currentView = viewName;

    // Hide all views
    document.querySelectorAll('[id$="View"]').forEach(view => {
        view.classList.add('view-hidden');
    });

    // Show selected view
    const viewId = viewName === 'home' ? 'homeView' :
                   viewName === 'day' ? 'dayView' :
                   viewName === 'tracking' ? 'trackingView' :
                   viewName === 'progress' ? 'progressView' :
                   'infoView';

    document.getElementById(viewId).classList.remove('view-hidden');

    // Update nav
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.toggle('active', item.dataset.view === viewName);
    });

    // Render view-specific content
    if (viewName === 'home') {
        renderWeekGrid();
    } else if (viewName === 'day') {
        renderDayView();
    } else if (viewName === 'tracking') {
        renderTrackingView();
    } else if (viewName === 'progress') {
        renderProgressView();
    }

    updateQuickStats();
}

// ============================================
// SHARE FUNCTIONALITY
// ============================================

function generateShareText() {
    const weekData = pregnancyData.weeklyFocus[state.currentWeek] || pregnancyData.weeklyFocus[4];
    const meals = pregnancyData.mealTemplates[state.dietType];
    const dayIndex = (state.currentDay - 1) % 7;

    let text = `🤰 PREGNANCY CARE GUIDE\n`;
    text += `Week ${state.currentWeek}, Day ${state.currentDay}\n`;
    text += `${weekData.title}\n\n`;

    text += `📌 FOCUS: ${weekData.focus}\n\n`;

    text += `🍽️ TODAY'S DIET (${state.dietType === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}):\n\n`;

    const mealTypes = ['earlyMorning', 'breakfast', 'midMorningSnack', 'lunch', 'eveningSnack', 'dinner', 'postDinner'];
    const mealLabels = ['Early Morning', 'Breakfast', 'Mid-Morning', 'Lunch', 'Evening Snack', 'Dinner', 'Post-Dinner'];

    mealTypes.forEach((type, i) => {
        const meal = meals[type][dayIndex % meals[type].length];
        text += `${mealLabels[i]}: ${meal.name} (${meal.portion})\n`;
    });

    text += `\n⚠️ AVOID: ${weekData.warnings.join(', ')}\n`;
    text += `\n🏃‍♀️ EXERCISE: Based on your energy level\n`;
    text += `\n📱 Generated by Pregnancy Care Guide - Hyderabad`;

    return text;
}

function shareViaWhatsApp() {
    const text = encodeURIComponent(generateShareText());
    window.open(`https://wa.me/?text=${text}`, '_blank');
}

function copyToClipboard() {
    const text = generateShareText();
    navigator.clipboard.writeText(text).then(() => {
        alert('Plan copied to clipboard!');
    });
}

function downloadAsText() {
    const text = generateShareText();
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `pregnancy-plan-week${state.currentWeek}-day${state.currentDay}.txt`;
    a.click();
    URL.revokeObjectURL(url);
}

// ============================================
// EVENT LISTENERS
// ============================================

function initializeEventListeners() {
    // Trimester tabs
    document.querySelectorAll('.trimester-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.trimester-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            state.currentTrimester = parseInt(tab.dataset.trimester);
            renderWeekGrid();
        });
    });

    // Diet toggle
    document.querySelectorAll('.diet-toggle button').forEach(btn => {
        btn.addEventListener('click', () => {
            state.dietType = btn.dataset.diet;
            saveState();
            renderDayView();
        });
    });

    // Energy selector
    document.querySelectorAll('.energy-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.energy-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.energyLevel = btn.dataset.energy;
            saveState();
            renderExerciseCard();
        });
    });

    // Bottom navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            showView(item.dataset.view);
        });
    });

    // Save tracking button
    document.getElementById('saveTracking').addEventListener('click', () => {
        const trackingKey = `week${state.currentWeek}`;
        const dayKey = `day${state.currentDay}`;

        if (!state.trackingData[trackingKey]) {
            state.trackingData[trackingKey] = {};
        }
        if (!state.trackingData[trackingKey][dayKey]) {
            state.trackingData[trackingKey][dayKey] = {};
        }

        state.trackingData[trackingKey][dayKey].remarks = document.getElementById('remarksInput').value;
        saveTracking();
        alert('Tracking data saved!');
    });

    // Share functionality
    document.getElementById('shareBtn').addEventListener('click', () => {
        document.getElementById('shareModal').classList.add('active');
    });

    document.getElementById('closeShareModal').addEventListener('click', () => {
        document.getElementById('shareModal').classList.remove('active');
    });

    document.getElementById('shareWhatsApp').addEventListener('click', () => {
        shareViaWhatsApp();
        document.getElementById('shareModal').classList.remove('active');
    });

    document.getElementById('copyPlan').addEventListener('click', () => {
        copyToClipboard();
        document.getElementById('shareModal').classList.remove('active');
    });

    document.getElementById('downloadPDF').addEventListener('click', () => {
        downloadAsText();
        document.getElementById('shareModal').classList.remove('active');
    });

    // Close modal on outside click
    document.getElementById('shareModal').addEventListener('click', (e) => {
        if (e.target.id === 'shareModal') {
            document.getElementById('shareModal').classList.remove('active');
        }
    });
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    loadState();
    initializeEventListeners();
    showView('home');
});

// Service Worker Registration for PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').catch(() => {
            // Service worker registration failed, but app still works
        });
    });
}
