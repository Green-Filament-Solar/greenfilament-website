/* ============================================================
   BLOG DATA — Single source of truth
   Add new posts here. Page and post routes auto-generate.
   ============================================================ */

export type FAQ = {
  q: string;
  a: string;
};

export type Section =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "highlight"; text: string }
  | { type: "project"; label: string; title: string; desc: string }
  | { type: "formula"; formula: string; where: string[] }
  | { type: "calculation"; step: string; formula: string; result: string; explanation: string }
  | { type: "deficitbox"; items: { label: string; value: string; color: string }[]; message: string };

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
  readTime: string;
  keywords: string[];
  sections: Section[];
  faqs: FAQ[];
};

export const blogPosts: BlogPost[] = [

  /* ============================================================
     POST 1 — Solar Street Lights Rural India
     ============================================================ */
  {
    slug: "solar-street-lights-rural-india",
    title: "How Solar Street Lights Are Changing Rural Communities Across Odisha",
    date: "2026-01-10",
    category: "Street Lighting",
    excerpt: "Unsafe dark roads, zero electricity reach, and no funds for grid infrastructure — solar street lights are solving all three problems for villages across Odisha.",
    image: "/images/projects/hill-temple.jpg",
    readTime: "6 min read",
    keywords: ["solar street lights Odisha", "rural solar lighting", "solar street light installation", "off-grid street lighting"],
    sections: [
      {
        type: "p",
        text: "Every evening, as the sun sets over thousands of villages in Odisha, roads go dark. Paths that families walk every day — to fetch water, to reach the market, to attend temples — become unsafe after dusk. For decades, this was accepted as a fact of rural life. Today, solar street lights are changing that reality, one village at a time.",
      },
      {
        type: "h2",
        text: "The Problem: Dark Roads Are Dangerous Roads",
      },
      {
        type: "p",
        text: "In rural Odisha, grid electricity either does not reach remote areas or is too unreliable to power street lighting infrastructure. Gram Panchayats with limited budgets cannot afford the cost of grid extension and monthly electricity bills. The result is thousands of kilometres of roads, pathways, and public spaces that remain in complete darkness every night.",
      },
      {
        type: "ul",
        items: [
          "Road accidents increase significantly after dark on unlit village roads",
          "Women and children face safety risks walking after sunset",
          "Temple pathways and hilltop routes become inaccessible at night",
          "Community gatherings and events are limited to daylight hours",
          "Emergency situations become harder to manage without light",
        ],
      },
      {
        type: "h2",
        text: "Why Solar Street Lights Are the Perfect Solution",
      },
      {
        type: "p",
        text: "Solar street lights require no grid connection, no monthly electricity bills, and very little maintenance. They work on a simple principle — solar panels charge the battery during the day, and the LED light automatically switches on at dusk and off at dawn. For remote villages and off-grid locations, this is transformative.",
      },
      {
        type: "ul",
        items: [
          "Zero electricity bill — powered entirely by sunlight",
          "No grid connection required — works in the most remote locations",
          "Automatic dusk-to-dawn operation — no manual switching",
          "Long battery backup — lights stay on through overcast days",
          "Low maintenance — LED lights last over 50,000 hours",
          "Weather resistant — built for Indian climate conditions",
        ],
      },
      {
        type: "h2",
        text: "Real Impact: Lighting the Path to the Divine",
      },
      {
        type: "project",
        label: "Green Filament Project",
        title: "Hill Temple Pathway — 1000 Steps Lit",
        desc: "One of our most challenging installations — a hilltop temple in Odisha where 1000 steep rocky steps had no lighting after sunset. Elderly devotees and families visiting the temple after work faced serious safety risks climbing in complete darkness. Our team manually carried equipment up the rocky hillside with zero road access and installed solar street lights at strategic points along the entire pathway. Today, thousands of devotees safely climb every evening. The temple community pays zero electricity bills.",
      },
      {
        type: "h2",
        text: "Solar Street Lights for Gram Panchayats",
      },
      {
        type: "p",
        text: "Gram Panchayats across Odisha are increasingly adopting solar street lights under government schemes like OREDA's Solar Street Light Programme. With ₹10 crore allocated in the 2024-25 budget specifically for rural solar street lighting, GPs can now access subsidised or fully funded installations.",
      },
      {
        type: "ul",
        items: [
          "OREDA scheme covers rural roads, village commons, and public spaces",
          "Priority given to areas with no existing street lighting",
          "GP passes a resolution — rest is handled by empanelled vendors like Green Filament",
          "Handover and maintenance support provided post-installation",
          "Lights operational from day one with no recurring cost",
        ],
      },
      {
        type: "h2",
        text: "Non-Integrated vs Semi-Integrated — Which Is Right for Your Village?",
      },
      {
        type: "p",
        text: "Green Filament manufactures two types of solar street lights. For villages and rural areas, our non-integrated solar street light is the recommended choice — with over 10,000 units installed across Odisha and a zero-complaint record. The separate panel, battery, and light fixture design makes it easier to maintain and replace individual components if needed.",
      },
      {
        type: "highlight",
        text: "10,000+ solar street lights installed across Odisha by Green Filament. Zero complaints on non-integrated units. Guaranteed performance.",
      },
      {
        type: "h2",
        text: "The Bigger Picture: Safe Villages, Empowered Communities",
      },
      {
        type: "p",
        text: "Solar street lighting does more than just illuminate roads. It extends the productive hours of a community. Children can study outside after dark. Women can move safely. Local businesses can stay open longer. Events and gatherings can happen at any time. The ripple effect of a well-lit village is profound — and it starts with a single solar street light.",
      },
    ],
    faqs: [
      {
        q: "How long do solar street lights work at night?",
        a: "Our solar street lights are designed for dusk-to-dawn operation — typically 10 to 12 hours per night. Even on cloudy days, the battery backup ensures consistent lighting.",
      },
      {
        q: "Do solar street lights work during monsoon and cloudy weather?",
        a: "Yes. Solar street lights are designed with sufficient battery backup to handle 2-3 consecutive cloudy days. The SMF and LiFePO4 batteries we use are tested for Indian weather conditions.",
      },
      {
        q: "What is the maintenance requirement for solar street lights?",
        a: "Solar street lights require minimal maintenance. Periodic cleaning of the solar panel and an annual check of the battery are typically sufficient. Our non-integrated design makes component replacement simple and cost-effective.",
      },
      {
        q: "Can Gram Panchayats get solar street lights for free under government schemes?",
        a: "Yes. Under OREDA's Solar Street Light Scheme and other state programmes, Gram Panchayats can get solar street lights fully or partially funded. Green Filament helps GPs navigate the application process end-to-end.",
      },
      {
        q: "What wattage solar street light is suitable for a village road?",
        a: "For standard village roads, 30W to 45W is sufficient. For wider roads or intersections, 60W to 90W is recommended. Green Filament also offers custom wattage solutions based on your specific site requirement.",
      },
    ],
  },

  /* ============================================================
     POST 2 — Rooftop Solar vs Electricity Bills
     ============================================================ */
  {
    slug: "rooftop-solar-vs-electricity-bills-2026",
    title: "Can Rooftop Solar Really Cut Your Electricity Bill? Here's the Reality",
    date: "2026-01-20",
    category: "Rooftop Solar",
    excerpt: "Electricity bills are rising every year. Rooftop solar is being pitched as the solution. But does it actually work? We break down the real numbers for homes and businesses in Odisha.",
    image: "/images/projects/toyota-showroom.jpg",
    readTime: "7 min read",
    keywords: ["rooftop solar Odisha", "solar for business", "reduce electricity bill", "commercial solar installation"],
    sections: [
      {
        type: "p",
        text: "In 2026, electricity tariffs in Odisha have increased by over 40% compared to five years ago. For homes, this means bills of ₹3,000 to ₹8,000 per month. For commercial establishments and businesses, the numbers are far higher. Rooftop solar is increasingly being seen as the most practical long-term solution — but how much does it actually save? And is it worth the investment?",
      },
      {
        type: "h2",
        text: "The Real Cost of Grid Electricity",
      },
      {
        type: "p",
        text: "Most homeowners and business owners underestimate how much they spend on electricity over time. Consider this — a household paying ₹4,000 per month spends ₹48,000 per year on electricity. Over 10 years, that is ₹4.8 lakh — and that assumes tariffs stay flat, which they never do. With annual tariff increases of 5-8%, the actual 10-year spend is closer to ₹6-7 lakh.",
      },
      {
        type: "highlight",
        text: "A family paying ₹4,000/month on electricity spends over ₹6 lakh in 10 years — and that number grows with every tariff hike.",
      },
      {
        type: "h2",
        text: "How Rooftop Solar Works",
      },
      {
        type: "p",
        text: "A rooftop solar system installs solar panels on your roof that generate electricity directly from sunlight. This electricity powers your home or business during the day. Any surplus electricity is fed back into the grid through net metering — and credited to your electricity bill. At night or during low sunlight, you draw from the grid as usual — but your overall consumption, and therefore your bill, drops dramatically.",
      },
      {
        type: "ul",
        items: [
          "Solar panels on your roof generate free electricity during the day",
          "Excess electricity exported to grid earns you bill credits",
          "Monthly electricity bill reduced by 70-90% for most installations",
          "System pays for itself in 4-6 years — then generates free power for 20+ years",
          "Panels come with 25-year performance warranty",
        ],
      },
      {
        type: "h2",
        text: "Real Numbers: What Does a 3kW System Actually Save?",
      },
      {
        type: "p",
        text: "A 3kW rooftop solar system in Odisha generates approximately 12-14 units of electricity per day on average. At current tariff rates, this translates to savings of approximately ₹2,500 to ₹3,500 per month. The system cost after PM Surya Ghar and Odisha state subsidies (combined up to ₹1,38,000) works out to roughly ₹80,000 to ₹1,20,000 net. The payback period — the time to recover your investment through savings — is typically 3 to 5 years.",
      },
      {
        type: "h2",
        text: "Real Impact: A Toyota Showroom Cuts Commercial Electricity Costs",
      },
      {
        type: "project",
        label: "Green Filament Project",
        title: "25kW Rooftop Solar — Toyota Showroom, Near Cuttack",
        desc: "A premium Toyota showroom near Cuttack was spending heavily on electricity every month — running showroom lighting, multiple AC systems, and display operations throughout the day. Green Filament designed and installed a 25kW grid-tied rooftop solar power plant engineered for the commercial setting. The result was a significant reduction in monthly electricity bills, with clean energy now powering one of Odisha's most prominent automobile showrooms.",
      },
      {
        type: "h2",
        text: "Net Metering — Getting Paid for the Solar Power You Don't Use",
      },
      {
        type: "p",
        text: "One of the most underutilised benefits of rooftop solar is net metering. When your solar panels produce more electricity than you consume — which happens on sunny days when you are out — the excess flows into the grid and is credited to your account. At the end of the month, you only pay for the net difference between what you consumed and what you exported. In many cases, bills drop to near zero.",
      },
      {
        type: "h2",
        text: "Government Subsidies Make It Even More Compelling",
      },
      {
        type: "p",
        text: "In Odisha, homeowners can access up to ₹1,38,000 in combined subsidies for a 3kW system — ₹78,000 from PM Surya Ghar Muft Bijli Yojana and ₹60,000 from the Odisha state government. This dramatically reduces the upfront cost and shortens the payback period. Green Filament handles all subsidy applications on your behalf at no additional charge.",
      },
      {
        type: "highlight",
        text: "Combined subsidies of up to ₹1,38,000 available for 3kW rooftop solar in Odisha. Green Filament handles all applications for free.",
      },
      {
        type: "h2",
        text: "Is Rooftop Solar Worth It in 2026?",
      },
      {
        type: "p",
        text: "With rising tariffs, generous government subsidies, and 25-year panel warranties — the answer is an unambiguous yes. For both homes and businesses in Odisha, rooftop solar is one of the best financial decisions available today. The question is not whether to go solar — it is when to start.",
      },
    ],
    faqs: [
      {
        q: "How much does a rooftop solar system cost in Odisha after subsidies?",
        a: "After PM Surya Ghar and Odisha state subsidies, a 3kW system typically costs ₹80,000 to ₹1,20,000 net. The exact amount depends on the system size and equipment brand.",
      },
      {
        q: "How many years does it take to recover the investment?",
        a: "For most residential installations in Odisha, the payback period is 3 to 5 years. After that, the system generates essentially free electricity for 20+ years.",
      },
      {
        q: "What happens to excess solar power my system generates?",
        a: "Through net metering, excess electricity is exported to the grid and credited to your electricity bill. Your DISCOM installs a bidirectional meter to track this.",
      },
      {
        q: "Do rooftop solar panels work during power cuts?",
        a: "Standard grid-tied systems shut down during power cuts for safety. If you want backup during outages, a hybrid system with battery storage is recommended.",
      },
      {
        q: "How long do solar panels last?",
        a: "Quality solar panels come with a 25-year performance warranty. In practice, they continue generating power well beyond 25 years with minor degradation.",
      },
    ],
  },

  /* ============================================================
     POST 3 — Solar Water Systems
     ============================================================ */
  {
    slug: "solar-water-systems-rural-villages",
    title: "How Solar Water Systems Are Bringing Clean Water to Remote Villages",
    date: "2026-02-05",
    category: "Solar Water",
    excerpt: "In remote villages without grid electricity or piped water, solar-powered water systems are delivering clean drinking water to communities that had none — at zero operating cost.",
    image: "/images/projects/drinking-water.jpg",
    readTime: "6 min read",
    keywords: ["solar water pumping", "solar drinking water system", "rural solar solutions", "solar pump Odisha"],
    sections: [
      {
        type: "p",
        text: "In hundreds of villages across Odisha, women wake before sunrise to walk kilometres to the nearest water source. The water they carry back is often not clean. Their children miss school because they are needed to help. This daily struggle for clean water is one of rural India's most persistent challenges — and solar-powered water systems are quietly solving it.",
      },
      {
        type: "h2",
        text: "The Water Problem in Rural Odisha",
      },
      {
        type: "p",
        text: "Access to clean drinking water in remote Odisha is limited by two interconnected problems — distance and energy. Groundwater is often available, but pumping it to the surface requires electricity. In villages without reliable grid power, diesel pumps are expensive to run and maintain. Piped water supply from the government does not reach the most remote hamlets. The result is that millions of people in Odisha still lack access to safe, reliable drinking water.",
      },
      {
        type: "ul",
        items: [
          "Women and girls spend 2-4 hours daily fetching water",
          "Waterborne diseases remain a significant health risk in remote areas",
          "Diesel pump operating costs are unaffordable for most village communities",
          "Grid electricity is unavailable or unreliable in remote locations",
          "Children miss school to help with water collection",
        ],
      },
      {
        type: "h2",
        text: "How Solar Water Systems Work",
      },
      {
        type: "p",
        text: "A solar-powered drinking water system uses solar panels to run a submersible pump that draws groundwater from a borewell or open well. The water is pumped into an overhead storage tank. From there, it flows by gravity to distribution points in the village. The entire system operates automatically — no manual intervention, no fuel cost, no electricity bill.",
      },
      {
        type: "ul",
        items: [
          "Solar panels power the submersible pump directly from sunlight",
          "Water pumped into overhead storage tank during daylight hours",
          "Automatic floater device stops the pump when tank is full",
          "Gravity distribution to village taps and collection points",
          "Zero operating cost — runs entirely on solar energy",
          "No grid electricity required",
        ],
      },
      {
        type: "h2",
        text: "Real Impact: Clean Water for a Dhenkanal Village",
      },
      {
        type: "project",
        label: "Green Filament Project",
        title: "Solar Drinking Water System — Dhenkanal, Odisha",
        desc: "A remote village in Dhenkanal had no piped water supply. Villagers walked long distances daily to fetch drinking water. No grid electricity meant conventional pumps were not an option. Green Filament installed a complete solar-powered drinking water system with a 5000-litre storage tank, three 330W solar panels, and a 1HP 80V submersible pump with an automatic floater device for zero manual intervention. Clean, reliable drinking water now flows freely to the entire village every day — powered entirely by the sun. Women no longer walk miles for water.",
      },
      {
        type: "h2",
        text: "Solar Pumps for Agricultural Irrigation",
      },
      {
        type: "p",
        text: "Beyond drinking water, solar pumps are transforming agricultural irrigation in Odisha. Under the PM KUSUM scheme, farmers can get solar pumps with up to 90% subsidy — paying only 10% of the cost. A solar pump eliminates diesel expenses completely and allows farmers to irrigate their fields consistently, improving yields and reducing dependence on unpredictable monsoon patterns.",
      },
      {
        type: "highlight",
        text: "Under PM KUSUM, Odisha farmers can get solar irrigation pumps with up to 90% government subsidy — paying only 10% of the total cost.",
      },
      {
        type: "h2",
        text: "The Soura Jalanidhi Scheme — Free Solar Pumps for Odisha Farmers",
      },
      {
        type: "p",
        text: "The Odisha state government's Soura Jalanidhi Yojana provides 90% subsidy on solar agricultural pumps for small and marginal farmers. With a minimum of 0.5 acres of agricultural land, eligible farmers can access solar pumps for their irrigation needs at minimal cost. Green Filament is an empanelled vendor for these schemes and handles the entire application and installation process.",
      },
      {
        type: "h2",
        text: "Why Solar Water Systems Are a Long-Term Solution",
      },
      {
        type: "p",
        text: "Unlike diesel pumps that require constant fuel supply and regular maintenance, solar water systems have very low ongoing costs. Solar panels come with 25-year performance warranties. Submersible pumps, when properly installed and maintained, last 10-15 years. For a village community, this means a one-time investment delivers clean water for decades.",
      },
    ],
    faqs: [
      {
        q: "How much water can a solar water system pump per day?",
        a: "A 1HP solar pump can typically pump 40,000 to 60,000 litres per day depending on sunlight hours and water table depth. This is more than sufficient for a village of 100-200 households.",
      },
      {
        q: "What happens on cloudy days — does the pump stop working?",
        a: "On cloudy days, the pump works at reduced capacity. However, since water is stored in an overhead tank, the system continues to supply water even when the pump is not running.",
      },
      {
        q: "Can a solar water system work without a borewell?",
        a: "Yes. Solar pumps can draw water from open wells, borewells, ponds, and rivers depending on the pump type. Green Filament designs the system based on your water source.",
      },
      {
        q: "What government schemes are available for solar water systems in Odisha?",
        a: "PM KUSUM scheme provides up to 90% subsidy on solar pumps for farmers. Soura Jalanidhi Yojana is the Odisha state scheme with similar benefits. For village drinking water, OREDA schemes are available.",
      },
      {
        q: "How long does it take to install a solar water system?",
        a: "A standard solar drinking water system can be installed in 2-3 days. Larger community systems may take up to a week depending on site conditions.",
      },
    ],
  },

  /* ============================================================
     POST 4 — Future of Solar Cooking
     ============================================================ */
  {
    slug: "future-of-solar-cooking-battery-free",
    title: "The Future of Cooking Could Be Solar — And Battery-Free",
    date: "2026-02-18",
    category: "Solar Cooking",
    excerpt: "LPG prices keep rising. Firewood causes respiratory illness. Induction needs grid electricity. Green Filament's patent-granted solar cooking system offers a battery-free alternative — powered entirely by sunlight.",
    image: "/images/products/solar-cooking.jpg",
    readTime: "7 min read",
    keywords: ["solar cooking system India", "battery free solar cooking", "renewable cooking technology", "solar powered cooking"],
    sections: [
      {
        type: "p",
        text: "Cooking is one of humanity's most fundamental activities. Yet in 2026, hundreds of millions of Indian families still cook on LPG that costs ₹900 to ₹1,200 per cylinder, or on firewood that fills their lungs with toxic smoke. The clean cooking challenge is one of the most important — and most overlooked — energy problems of our time. Solar cooking may be the most practical answer yet.",
      },
      {
        type: "h2",
        text: "The Problem with How India Cooks Today",
      },
      {
        type: "p",
        text: "India's cooking energy mix is a combination of LPG, firewood, crop residue, and coal — each with its own significant problems. LPG is expensive and dependent on supply chains. Firewood and biomass cause indoor air pollution responsible for over 4 million deaths globally every year. Even induction cooking, while clean, requires reliable grid electricity that is unavailable in large parts of rural India.",
      },
      {
        type: "ul",
        items: [
          "LPG costs families ₹800 to ₹1,200 per month — 10 to 15% of household income",
          "Firewood smoke causes respiratory illness, especially in women and children",
          "4 million deaths per year linked to indoor air pollution from cooking",
          "Induction cooking requires stable grid electricity — unavailable in remote areas",
          "No single clean cooking solution has been affordable and accessible at scale",
        ],
      },
      {
        type: "h2",
        text: "Why Solar Cooking Has Struggled — Until Now",
      },
      {
        type: "p",
        text: "Traditional solar cookers — parabolic dish concentrators and box cookers — have been around for decades. They work, but they have serious practical limitations. They require direct sunlight and constant adjustment, cannot cook inside, and are impractical for everyday use. The result is that solar cooking has remained a niche technology despite enormous potential. What was missing was a practical, direct-current solar cooking system that works like a conventional stove.",
      },
      {
        type: "h2",
        text: "Green Filament's Patent-Granted Solar Cooking System",
      },
      {
        type: "p",
        text: "Green Filament has developed and received a patent grant for a solar-powered cooking system that works fundamentally differently from traditional solar cookers. Instead of concentrating sunlight directly, it uses solar panels to generate DC electricity which powers a high-efficiency coil heater — similar to an induction stove, but running on direct solar power without any battery storage.",
      },
      {
        type: "highlight",
        text: "No battery. No LPG. No grid electricity. Just sunlight powering a coil heater that cooks your food — patent-granted technology by Green Filament.",
      },
      {
        type: "h2",
        text: "Battery-Free — Why It Matters",
      },
      {
        type: "p",
        text: "Most solar appliances rely on batteries to store energy for use when the sun is not shining. Batteries add cost, require maintenance, and eventually need replacement. Green Filament's solar cooking system eliminates the battery entirely by designing the system to cook during daylight hours — which aligns naturally with when most cooking happens. Breakfast in the morning, lunch at midday, early dinner preparation — all during peak solar hours. The result is a dramatically simpler, more affordable, and longer-lasting system.",
      },
      {
        type: "ul",
        items: [
          "No battery means lower cost and zero battery replacement expense",
          "Simpler system with fewer components — less to maintain or repair",
          "3kW system with 6 × 500Wp panels powers a 1500W coil heater",
          "Compatible with standard cooking pots — no special cookware needed",
          "Portable and easy to install — no complex infrastructure required",
          "Designed for up to 15 people — suitable for homes, schools, anganwadis",
        ],
      },
      {
        type: "h2",
        text: "Where Solar Cooking Makes the Biggest Impact",
      },
      {
        type: "p",
        text: "The communities that benefit most from solar cooking are those currently spending the highest proportion of their income on cooking fuel — rural households, tribal communities, anganwadi centres, and mid-day meal kitchens in schools. In these settings, the economics of solar cooking are compelling. The system pays for itself in fuel savings within a few years and then generates free cooking energy for decades.",
      },
      {
        type: "ul",
        items: [
          "Rural households spending ₹800-1,200/month on LPG",
          "Anganwadi centres cooking daily meals for 20-50 children",
          "Schools running mid-day meal programmes",
          "Tribal communities in areas with no LPG supply chain access",
          "Community kitchens in ashrams and institutions",
        ],
      },
      {
        type: "h2",
        text: "The Sustainability Argument",
      },
      {
        type: "p",
        text: "Every solar cooking system installed eliminates several cylinders of LPG per month — reducing fossil fuel consumption and carbon emissions. For families using firewood, the impact is even more direct — less deforestation, less smoke, better health outcomes. As India works toward its renewable energy and climate commitments, clean cooking at scale is an essential piece of the puzzle that has been largely ignored.",
      },
      {
        type: "h2",
        text: "The Future Is Already Here",
      },
      {
        type: "p",
        text: "With over 200 installations across India and a granted patent, Green Filament's solar cooking system is not a concept — it is a proven, field-tested technology. The future of clean cooking in rural India does not require waiting for better batteries or cheaper induction stoves. It is here today, powered by the most abundant and free energy source available — the sun.",
      },
    ],
    faqs: [
      {
        q: "Does the solar cooking system work on cloudy days?",
        a: "The system works best on clear sunny days. On partly cloudy days, cooking is possible but at reduced power. Since it is battery-free, cooking is designed for daylight hours when solar generation is highest.",
      },
      {
        q: "Can I use my existing cooking pots with the solar cooking system?",
        a: "Yes. The coil heater is compatible with standard aluminum and steel cooking pots. No special cookware is required.",
      },
      {
        q: "How many people can the system cook for?",
        a: "The standard 3kW system is designed to cook for up to 15 people. For larger requirements such as community kitchens or schools, the system can be scaled up.",
      },
      {
        q: "Is the solar cooking system available under any government scheme?",
        a: "Currently, solar cooking systems are not covered under PM Surya Ghar or KUSUM schemes. However, state government clean cooking programmes and CSR funding have supported installations. Contact Green Filament for details on funding options.",
      },
      {
        q: "What is the warranty on the solar cooking system?",
        a: "Solar panels come with a 25-year performance warranty. The coil heater and charge controller are covered by a product warranty. Green Filament provides after-sales support for all installations.",
      },
    ],
  },

  /* ============================================================
     POST 5 — Solar Street Light 2am Problem
     ============================================================ */
  {
    slug: "why-solar-street-light-stops-working-at-night",
    title: "Why Does Your Solar Street Light Switch Off at 2am?",
    date: "2026-07-18",
    category: "Street Lighting",
    excerpt: "Your solar street light was working at 7pm, still on at 10pm, but completely off by 2am. No damage. No broken wire. So what happened? Let us explain with real numbers and simple formulas.",
    image: "/images/projects/hill-temple.jpg",
    readTime: "8 min read",
    keywords: [
      "solar street light not working at night",
      "solar street light stops working",
      "solar street light battery problem",
      "solar street light maintenance Odisha",
      "solar street light problem solution",
      "why solar light turns off at night",
    ],
    sections: [
      {
        type: "p",
        text: "Let me ask you something first. Have you ever had a situation where your solar street light was working fine at 7pm, still on at 10pm, but completely off by 2am? And in the morning someone calls and says light kaam nahi kar raha. You go and check. The light is physically fine. No damage. No broken wire. Everything looks okay. But it switched off at night. What happened? Let me explain this in the simplest way possible.",
      },
      {
        type: "h2",
        text: "The Water Tank Story",
      },
      {
        type: "p",
        text: "You have seen a water tank on a rooftop. Every morning water fills in. Every night your family uses that water. If your family uses more water than what filled in during the day, the tank becomes empty before morning. Simple right? Your solar street light works exactly like that water tank. The solar panel fills water during the day. The battery is your tank. The LED light uses that water at night. And the controller is like a sensor that watches the tank level. The moment the tank reaches a minimum level, it shuts the tap automatically. Not to trouble you. But to protect the tank from permanent damage.",
      },
      {
        type: "h2",
        text: "The Two Formulas You Need",
      },
      {
        type: "p",
        text: "Do not worry. If you studied Class 9 science, you already know everything you need. There are only two formulas in this entire explanation.",
      },
      {
        type: "formula",
        formula: "P = V × I",
        where: [
          "P = Power (measured in Watts)",
          "V = Voltage (measured in Volts)",
          "I = Current (measured in Amperes)",
        ],
      },
      {
        type: "formula",
        formula: "E = P × T",
        where: [
          "E = Energy (measured in Watt-hours)",
          "P = Power (measured in Watts)",
          "T = Time (measured in Hours)",
        ],
      },
      {
        type: "p",
        text: "Energy is simply Power used over time. That is it. Two formulas. That is all we need for this entire calculation. Now let us apply this to a real street light.",
      },
      {
        type: "h2",
        text: "The System We Are Talking About",
      },
      {
        type: "p",
        text: "This is a standard 24W semi-integrated solar street light. The kind commonly used in government projects and gram panchayat roads across Odisha. Solar Panel is 60 Watts. Battery is 24Ah LiFePO4 at 12 Volts. LED is 24 Watts. This is what is written on paper. Now let us see what actually happens in the field.",
      },
      {
        type: "h2",
        text: "Step 1. How Much Energy Does the Panel Generate in One Day?",
      },
      {
        type: "calculation",
        step: "Step 1 — Panel energy per day",
        formula: "E = P × T = 60 × 5",
        result: "E = 300 Watt-hours",
        explanation: "300 glasses of water being poured into your battery tank every sunny day. Odisha gets about 5 hours of good usable sunlight per day on average.",
      },
      {
        type: "h2",
        text: "Step 2. How Much Energy Does the Battery Actually Hold?",
      },
      {
        type: "calculation",
        step: "Step 2 — Total battery capacity",
        formula: "E = V × Ah = 12 × 24",
        result: "E = 288 Watt-hours (total)",
        explanation: "Your battery tank can hold 288 glasses of water when it is 100% full. But here is something important that nobody tells you when they sell you the light.",
      },
      {
        type: "p",
        text: "A LiFePO4 battery should never be discharged below 20% of its capacity. If it goes below that level, the battery gets permanently damaged. So the controller is programmed to cut the power to the LED when the battery reaches 20% remaining. This is called Low Voltage Disconnect or LVD in short.",
      },
      {
        type: "calculation",
        step: "Step 2b — Usable battery capacity after LVD protection",
        formula: "Usable = 288 × 80%",
        result: "Usable = 230 Watt-hours only",
        explanation: "Your tank holds 288 glasses total. But you can only use 230 of them. The remaining 58 glasses are locked at the bottom to protect the tank from permanent damage.",
      },
      {
        type: "h2",
        text: "Step 3. How Much Energy Does the LED Use in One Night?",
      },
      {
        type: "calculation",
        step: "Step 3 — LED consumption per night",
        formula: "E = P × T = 24 × 10",
        result: "E = 240 Watt-hours",
        explanation: "Every night your light drinks 240 glasses of water from the tank. The LED runs from 7pm to 5am which is 10 hours.",
      },
      {
        type: "h2",
        text: "Step 4. Does the System Balance?",
      },
      {
        type: "deficitbox",
        items: [
          { label: "FILLED IN PER DAY", value: "300 Wh", color: "#2d6a2d" },
          { label: "USABLE TANK", value: "230 Wh", color: "#1a4a8a" },
          { label: "NEEDED PER NIGHT", value: "240 Wh", color: "#E24B4A" },
        ],
        message: "230 available. 240 needed. Already a deficit of 10 Watt-hours on a perfect sunny day. But wait. It gets worse.",
      },
      {
        type: "h2",
        text: "What Actually Happens in the Field",
      },
      {
        type: "p",
        text: "Your 60W panel does not give you 60W in real conditions. Never. Here is why.",
      },
      {
        type: "calculation",
        step: "Reason 1 — Dust on the panel (30% loss)",
        formula: "Real output = 60 × 70% × 5",
        result: "E = 210 Watt-hours only",
        explanation: "Odisha roads are dusty. A thin layer of dust reduces panel output by 20 to 30%. You are putting 210 glasses into a tank that needs 240 every night. Every single night you are 30 glasses short.",
      },
      {
        type: "calculation",
        step: "Reason 2 — Heat in Odisha summer",
        formula: "Loss = (42 - 25) × 0.4% = 6.8%",
        result: "Additional 6.8% efficiency lost",
        explanation: "Odisha summer crosses 42 degrees Celsius. For every degree above 25 degrees C, a standard panel loses about 0.4% of its output. On a hot dusty day your 60W panel might actually give you 35 to 38 Watts of real output.",
      },
      {
        type: "calculation",
        step: "Reason 3 — Battery aging after 18 months",
        formula: "New usable = 12 × 20 × 80%",
        result: "E = 192 Watt-hours only",
        explanation: "After 18 months your 24Ah battery may only hold 20Ah effectively. Your tank that used to hold 230 usable glasses now only holds 192 glasses. But the LED still needs 240 every night.",
      },
      {
        type: "calculation",
        step: "Reason 4 — Monsoon cloudy days",
        formula: "E = 60 × 35% × 5",
        result: "E = 105 Watt-hours only",
        explanation: "On a heavily cloudy day your panel may generate only 30 to 40% of its rated output. After 2 consecutive cloudy days the battery is at 40 to 50% charge. By 2am the controller cuts power to protect it. The light goes off.",
      },
      {
        type: "h2",
        text: "The Controller Is Not the Villain",
      },
      {
        type: "p",
        text: "Many people blame the controller when the light goes off. Some even replace it thinking it is faulty. The controller is actually protecting your battery. When the battery voltage drops to the LVD threshold, the controller cuts power to the LED. If it did not do this, the battery would get deep discharged and permanently fail within a few months. Blaming the controller is like blaming the sensor in your water tank for alerting you that the tank is empty. The sensor is fine. There just was not enough water.",
      },
      {
        type: "h2",
        text: "The Right Way to Size a Solar Street Light",
      },
      {
        type: "p",
        text: "The panel and battery must be sized for real Odisha conditions. Not for a lab in Germany. Here is a simple rule of thumb.",
      },
      {
        type: "calculation",
        step: "Correct panel size for a 24W LED system",
        formula: "Panel needed = (24 × 10 × 1.5) / 5",
        result: "Minimum 72W panel required",
        explanation: "Your panel should generate at least 1.5 times what your LED consumes per night. So a 24W LED system needs at least a 75W panel. Not 60W.",
      },
      {
        type: "calculation",
        step: "Correct battery size for a 24W LED system",
        formula: "Ah = (240 × 1.5) / (12 × 0.8)",
        result: "Minimum 37.5Ah battery required",
        explanation: "Your battery should store at least 1.5 times the nightly consumption. So a 24W LED system needs at least a 36 to 40Ah battery. Not 24Ah.",
      },
      {
        type: "highlight",
        text: "Most suppliers spec the panel and battery just barely enough for ideal conditions. Because it keeps the cost low and the tender price competitive. But the light fails in the field within one monsoon season.",
      },
      {
        type: "h2",
        text: "What Should You Check Right Now?",
      },
      {
        type: "p",
        text: "If your street light is switching off before morning, check these four things in this order. One, clean the solar panel. Wipe it with a clean damp cloth early morning before sunrise. Check if performance improves over the next 2 to 3 days. This costs nothing and fixes about 30% of complaints. Two, check how old the battery is. If it is more than 2 years old, the capacity has reduced significantly. Replacing the battery usually fixes the problem completely. Three, check if anything is shading the panel during the day. A tree branch, a wall, or a nearby building casting shadow even for 1 to 2 hours can cut your charging by 30 to 50%. Four, check the controller LVD setting. Some controllers have an adjustable Low Voltage Disconnect threshold. If it is set too high, it cuts power too early. A qualified technician can check and correct this in 15 minutes.",
      },
      {
        type: "h2",
        text: "One Last Thing",
      },
      {
        type: "p",
        text: "When we design solar street lights at Green Filament, we calculate for Odisha conditions. Not lab conditions. Dust, heat, monsoon clouds and battery aging are all factored into our specifications before we size the panel and battery. This is why our lights installed in mining areas in Jharsuguda and dusty village roads in Mayurbhanj are running for 2 to 3 years without complaints. The math was done right before the first installation. If you are buying solar street lights for a government project or gram panchayat, ask the supplier one simple question. Show me your energy calculation. If they cannot show you the math, they have not done the math.",
      },
    ],
    faqs: [
      {
        q: "Why does my solar street light work for a few hours and then switch off?",
        a: "The most common reason is that the battery runs out of charge before morning. This happens when the panel is too small for the LED wattage, the battery has aged and lost capacity, or consecutive cloudy days have reduced charging. The controller switches off the light to protect the battery from permanent damage.",
      },
      {
        q: "What is Low Voltage Disconnect in a solar street light?",
        a: "Low Voltage Disconnect or LVD is a protection feature in the charge controller. When the battery voltage drops below a set threshold, the controller automatically cuts power to the LED light. This protects the battery from deep discharge which would permanently damage it. The controller is working correctly when it does this. The real problem is insufficient charging.",
      },
      {
        q: "How do I fix a solar street light that turns off at midnight?",
        a: "Start by cleaning the solar panel. Dust alone causes 20 to 30% power loss. Next check the battery age. If it is more than 2 years old, replace it. Check for shade on the panel during the day. Finally ask a technician to check the controller LVD setting. These four steps fix over 90% of cases.",
      },
      {
        q: "What size solar panel do I need for a 24W street light?",
        a: "For reliable all-night operation in Odisha conditions, a 24W LED street light needs at least a 75W solar panel. Most budget systems come with 60W panels which are undersized for real conditions involving dust, heat and cloudy days.",
      },
      {
        q: "What battery capacity is needed for a solar street light to last all night?",
        a: "For a 24W LED running 10 hours per night, you need at least a 36 to 40Ah LiFePO4 battery. Systems sold with 24Ah batteries are undersized and will fail to last the full night after a few months of use or during monsoon.",
      },
      {
        q: "Does cleaning the solar panel actually help?",
        a: "Yes significantly. A dusty panel in Odisha can lose 20 to 30% of its output. Cleaning the panel with a damp cloth once a month can restore full charging capacity and extend the light duration by 2 to 3 hours per night. It is the easiest and cheapest fix available.",
      },
    ],
  },

  

];

/* --- Categories for filter --- */
export const blogCategories = [
  "All",
  "Street Lighting",
  "Rooftop Solar",
  "Solar Water",
  "Solar Cooking",
];
