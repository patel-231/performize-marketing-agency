import { Project, ServiceItem, ProcessStep, TestimonialItem, ClientBrand, FaqItem } from '../types';

export const FOUNDER_PROFILE = {
  name: 'Arman Beg',
  title: 'Founder & Marketing Expert',
  specialty: 'Meta Ads Expert & AI Automation Specialist',
  company: 'Performize Marketing Agency',
  bio: 'As the founder, I build performance-driven marketing systems and AI automation pipelines that generate real business results. Our focus is on measurable outcomes — leads, revenue, and ROAS — not vanity metrics.',
  phone: '+91 95280 74537',
  whatsappNumber: '919528074537',
  whatsappUrl: 'https://wa.me/919528074537?text=Hi%20Arman%2C%20I%27m%20interested%20in%20scaling%20my%20business%20with%20Performize.%20Let%27s%20talk.',
  email: 'mirzafaiz0852@gmail.com',
  agencyEmail: 'hello@performize.agency',
  calendlyUrl: 'https://calendly.com/mirzafaiz0852',
  responseTime: 'Usually replies within 1 hour (Guaranteed under 2 hours)',
  socialLinks: {
    instagram: 'https://www.instagram.com/armanbeg09',
    facebook: 'https://www.facebook.com/Armanbeg09',
    youtube: 'https://www.youtube.com/@armannbeg',
    linkedin: '',
    twitter: ''
  },
  photo: '/assets/founder/founder_photo.png',
  credentials: [
    'Meta Business Partner',
    'Google Ads Expert',
    'Google Analytics 4 Certified',
    'AI-Powered Systems Specialist',
    'Zapier & n8n Automation Partner',
    'WhatsApp CRM Architect'
  ]
};

export const AGENCY_SERVICES: ServiceItem[] = [
  {
    id: 'meta-ads',
    number: '01',
    title: 'Meta Ads Management',
    shortDescription: 'Reach the right people on Facebook and Instagram and turn them into real inquiries, leads, and sales — not just impressions.',
    fullDescription: 'We build high-converting paid social funnels engineered for scale across Facebook and Instagram. Combining rapid dynamic creative testing, bespoke video and carousel assets, and strict post-click landing page alignment, we maximize ROAS and customer lifetime value.',
    deliverables: [
      'Lead Generation Campaigns',
      'Product Sales & ROAS Scaling',
      'Retargeting & Remarketing Funnels',
      'High-Velocity Creative Testing',
      'Pixel & Conversions API (CAPI) Setup',
      'Audience & Lookalike Architecture'
    ],
    coreTech: ['Meta Advantage+', 'Custom Audiences', 'Conversions API', 'Triple Whale'],
    impactMetric: '4.5x',
    impactLabel: 'Average ROAS Delivered',
    whatsappMessage: "Hi Arman, I want to scale my business with Meta Ads (Facebook & Instagram). Let's discuss campaign strategy and ROAS targets for my brand."
  },
  {
    id: 'google-ads',
    number: '02',
    title: 'Google Ads Management',
    shortDescription: 'Show up when people are actively searching for what you offer. Capture high-intent buyers at the right moment.',
    fullDescription: 'Capture customers at the exact millisecond of purchase intent. We architect data-driven Search, Display, YouTube, and Performance Max campaigns with precision negative-keyword filtering, high-converting copy, and bid governance.',
    deliverables: [
      'High-Intent Search Campaigns',
      'Performance Max (PMax) Asset Optimization',
      'YouTube Video Ad Campaigns',
      'Display & Remarketing Networks',
      'Precision Conversion Tracking & GA4',
      'Negative Keyword Governance'
    ],
    coreTech: ['Google Ads', 'GA4', 'Google Tag Manager', 'Search Console'],
    impactMetric: '1.07M+',
    impactLabel: 'Verified Clicks Delivered',
    whatsappMessage: "Hi Arman, I want to scale with high-intent Google Ads (Search, PMax & YouTube). Can we review my keywords and customer acquisition strategy?"
  },
  {
    id: 'website-development',
    number: '03',
    title: 'Website Development',
    shortDescription: 'A website that works for your business — fast to load, easy to navigate, and designed to turn visitors into paying customers.',
    fullDescription: 'Your website is your commercial flagship. We craft custom, lightning-fast digital platforms that merge avant-garde editorial motion with conversion-optimized UX architecture, ensuring sub-second load times and fluid mobile experiences.',
    deliverables: [
      'High-Converting Business Websites',
      'Dedicated Sales Landing Pages',
      'Lead Generation Funnel Architecture',
      'Appointment & Booking Systems',
      'Mobile-First Responsive Engineering',
      'Sub-Second Speed & Technical SEO'
    ],
    coreTech: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vite'],
    impactMetric: '<0.8s',
    impactLabel: 'Average LCP Load Time',
    whatsappMessage: "Hi Arman, I need a high-converting website / landing page funnel for my brand to convert more visitors into buyers."
  },
  {
    id: 'social-media',
    number: '04',
    title: 'Social Media Management',
    shortDescription: 'Stay visible, build trust, and keep your audience engaged with consistent, well-planned social media content.',
    fullDescription: 'We transform brands from passive broadcasters into cultural participants. Our social team engineers compelling narrative arcs, episodic content franchises, and proactive community engagement that convert casual scrollers into loyal customers.',
    deliverables: [
      'Content Strategy & Positioning',
      'Monthly Post Planning & Scheduling',
      'Brand Voice, Tone & Identity Guidelines',
      'Community Management & DM Triage',
      'Reel & Story Short-Form Video',
      'Monthly Growth & Engagement Analytics'
    ],
    coreTech: ['CapCut', 'Figma', 'Buffer / Sprout', 'Notion'],
    impactMetric: '100%',
    impactLabel: 'Consistent Brand Visibility',
    whatsappMessage: "Hi Arman, I want to discuss organic brand growth and content marketing strategy for our social media channels."
  },
  {
    id: 'lead-generation',
    number: '05',
    title: 'Lead Generation & CRM',
    shortDescription: 'Build a consistent, predictable flow of qualified leads for your business — no cold calling, no guesswork.',
    fullDescription: 'Stop losing leads to disorganized spreadsheets. We implement robust CRM ecosystems paired with multi-channel capture funnels, automated qualification, lifecycle nurturing, and instant sales rep routing.',
    deliverables: [
      'Multi-Channel Inbound Campaigns',
      'High-Converting Landing Page + Form Setup',
      'WhatsApp Lead Routing Funnels',
      'Automated Lead Qualification Filters',
      'CRM Integration & Pipeline Automation',
      'Sub-2-Second Lead Dispatch to Sales'
    ],
    coreTech: ['GoHighLevel', 'HubSpot', 'WhatsApp Business API', 'Twilio'],
    impactMetric: '500+',
    impactLabel: 'Qualified Leads / Month',
    whatsappMessage: "Hi Arman, I need a predictable flow of qualified B2B/B2C leads for my business. Can we discuss a custom lead acquisition funnel?"
  },
  {
    id: 'conversion-optimization',
    number: '06',
    title: 'Conversion Optimisation',
    shortDescription: 'More traffic does not always mean more sales. We fix what is stopping people from taking action on your website.',
    fullDescription: 'True conversion optimization is about removing friction and amplifying persuasion. We conduct exhaustive qualitative and quantitative funnel audits, eliminating objections and elevating landing page conversion rates.',
    deliverables: [
      'Full Landing Page & Funnel Audits',
      'Scientific A/B Split Testing',
      'Funnel Drop-off & Heatmap Analysis',
      'Persuasive Copy & CTA Enhancements',
      'Form & Checkout Friction Removal',
      'User Experience & Mobile Reviews'
    ],
    coreTech: ['Hotjar', 'Microsoft Clarity', 'Optimizely', 'Google Optimize'],
    impactMetric: '+35%',
    impactLabel: 'Average Conversion Lift',
    whatsappMessage: "Hi Arman, I want to audit our checkout funnel and improve our conversion rate, user journey, and average order value."
  },
  {
    id: 'analytics-tracking',
    number: '07',
    title: 'Analytics & Tracking',
    shortDescription: 'Stop guessing. Know exactly which campaigns bring results, where leads come from, and how to improve every rupee spent.',
    fullDescription: 'Data without precision attribution leads to wasted ad budgets. We configure server-side Conversions API, Google Analytics 4, and custom revenue dashboards so you have 100% transparency on ROI.',
    deliverables: [
      'GA4 Full Setup & Audit Architecture',
      'Meta Conversions API (CAPI) & Pixel Configuration',
      'Custom Multi-Touch Event Tracking',
      'Closed-Loop Conversion Reports',
      'Live Executive ROI Dashboards',
      'Monthly Data-Driven Optimization Insights'
    ],
    coreTech: ['GA4', 'Google Tag Manager', 'Meta CAPI', 'Looker Studio'],
    impactMetric: '100%',
    impactLabel: 'Attribution Tracking Accuracy',
    whatsappMessage: "Hi Arman, I need precision tracking set up for GA4, Meta Conversions API (CAPI), and accurate multi-touch attribution."
  },
  {
    id: 'ad-creative-ugc',
    number: '08',
    title: 'Ad Creative & UGC',
    shortDescription: 'Scroll-stopping ad creatives, product videos, and authentic UGC content built specifically to perform in paid campaigns.',
    fullDescription: 'Attention is the rarest currency online. We produce visually arresting commercial edits, authentic user-generated content (UGC), and high-retention motion graphics designed to stop thumbs in competitive social feeds.',
    deliverables: [
      'Authentic UGC Video Production',
      'High-CTR Ad Creatives & Banners',
      'Dynamic Product Showcase Videos',
      'High-Retention Instagram Reels & TikTok Ads',
      'High-Converting Carousel Variations',
      'Brand Visual Kits & Hook Testing Sets'
    ],
    coreTech: ['Premiere Pro', 'After Effects', 'Figma', 'DaVinci Resolve'],
    impactMetric: '3.2s+',
    impactLabel: 'Average Thumb-Stop Retention',
    whatsappMessage: "Hi Arman, I need high-CTR ad creatives, scroll-stopping hooks, and authentic UGC video variations for our paid ad campaigns."
  },
  {
    id: 'ai-automation',
    number: '09',
    title: 'AI Automation & Chatbots',
    shortDescription: 'An intelligent chatbot on WhatsApp or your website that qualifies leads, answers questions, and books appointments — even while you sleep.',
    fullDescription: 'Stop throwing bodies at operational bottlenecks. We build bespoke AI architectures that handle your heavy lifting — intelligent conversational agents, instant WhatsApp dispatch bots, and automated CRM workflows that work 24/7.',
    deliverables: [
      'Intelligent WhatsApp Conversational Chatbots',
      'Website Interactive AI Chat Widgets',
      'Multi-Step Automated Lead Qualification Flows',
      'Automated Calendar Appointment Booking',
      '24/7 Instant Auto-Replies & FAQ Handling',
      'Real-Time CRM & Google Sheets Data Sync'
    ],
    coreTech: ['Gemini API', 'WhatsApp Business API', 'Make / n8n', 'Zapier'],
    impactMetric: '<2 sec',
    impactLabel: 'Instant Lead Routing & Sync',
    whatsappMessage: "Hi Arman, I want to implement AI Chatbots and WhatsApp CRM automation to qualify leads 24/7 and automate follow-ups."
  }
];

export function createWhatsAppUrl(message?: string): string {
  const phone = '919528074537';
  if (!message) return `https://wa.me/${phone}`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function getServiceWhatsAppUrl(serviceTitle: string, customMessage?: string): string {
  const text = customMessage || `Hi Arman, I am interested in ${serviceTitle} for my business. Can we discuss a custom growth strategy?`;
  return createWhatsAppUrl(text);
}

export const AGENCY_PROJECTS: Project[] = [
  {
    id: 'karpasaonline',
    title: 'Karpasa Online — DTC Apparel Scaling',
    category: 'Ecommerce',
    clientIndustry: 'Sustainable Apparel & Home Textiles',
    year: '2026',
    shortDescription: 'High-intent creative testing and catalog retargeting generating 2,896 website adds-to-cart at ₹0.96 per cart.',
    fullDescription: 'Karpasa Online needed to lower customer acquisition costs and drive purchase intent. Performize deployed high-performing dynamic creatives and audience retargeting that delivered 2,896 website adds-to-cart at ₹0.96 per action, 1,132 landing page views at ₹1.34, reaching 113,407 target buyers on a lean ₹2,767 budget.',
    image: '/src/assets/images/d2c_ecommerce_case_study_1793790557234.jpg',
    aspectRatio: '4:3',
    services: ['Meta Ads Management', 'Website Development', 'Conversion Optimisation'],
    results: [
      { label: 'Website Adds To Cart', value: '2,896', context: 'Achieved at ₹0.96 per add to cart' },
      { label: 'Audience Reach', value: '113,407', context: 'Delivered on just ₹2,767 ad spend' },
      { label: 'Landing Page Views', value: '1,132', context: 'At ₹1.34 per verified visitor' }
    ],
    challenge: 'High cart abandonment rates and escalating acquisition costs from broad-audience ad sets.',
    solution: 'Designed high-contrast product creative variations and segmented retargeting calibrated for instant checkout.',
    featured: true
  },
  {
    id: 'gentlemens-attire',
    title: 'Gentlemens Attire — D2C Fashion Scale',
    category: 'D2C',
    clientIndustry: "Men's Premium Fashion & Lifestyle",
    year: '2026',
    shortDescription: 'Over 1.0M reach and ₹1.09L spend delivering 674 purchases at 4.55x ROAS and link clicks down to ₹0.48 CPC.',
    fullDescription: 'Scaled Gentlemens Attire across Meta Ads using dynamic video creative iterations and catalog retargeting. Delivered 1,003,853 unique audience reach across 23 campaigns on ₹1,09,548 ad spend, yielding 674 purchases with a 4.55x ROAS and link CPCs as low as ₹0.48.',
    image: '/src/assets/images/fashion_d2c_case_study_1793790557429.jpg',
    aspectRatio: '16:9',
    services: ['Meta Ads Management', 'Ad Creative & UGC', 'Conversion Optimisation'],
    results: [
      { label: 'Total Audience Reach', value: '1.00M+', context: 'Delivered across 23 live campaigns' },
      { label: 'Ecom Purchases Generated', value: '674', context: 'Achieved 4.55x peak ROAS' },
      { label: 'Lowest Link CPC', value: '₹0.48', context: 'Across 36,462 high-intent clicks' }
    ],
    challenge: 'Ad fatigue and escalating CPMs in competitive fashion feeds.',
    solution: 'Engineered rapid 48-hour video creative refreshes, testing dynamic opening hooks that maximized view-through rates.',
    featured: true
  },
  {
    id: 'magic-kart-teaofy',
    title: 'Magic Kart & TEAOFY — E-Commerce Growth',
    category: 'Ecommerce',
    clientIndustry: 'E-Commerce & D2C Consumer Goods',
    year: '2026',
    shortDescription: 'Multi-brand e-commerce campaigns generating 641 purchases and 802K+ reach across targeted catalog funnels.',
    fullDescription: 'Deployed conversion-focused campaigns for Magic Kart (272 purchases, 177K reach at ₹53.23 avg CPA) and TEAOFY (369 purchases on ₹50,000 spend at ₹135.50 CPA), backed by cross-campaign reach scaling across avmarrts (625,005 reach across 25 campaigns).',
    image: '/src/assets/images/d2c_ecommerce_case_study_1793790557234.jpg',
    aspectRatio: '4:3',
    services: ['Meta Ads Management', 'Google Ads Management', 'Analytics & Tracking'],
    results: [
      { label: 'Purchases Generated', value: '641', context: 'Across Magic Kart & TEAOFY campaigns' },
      { label: 'Average Magic Kart CPA', value: '₹53.23', context: 'With 177,000 unique buyers reached' },
      { label: 'avmarrts Brand Reach', value: '625K+', context: 'Generated across 25 active campaigns' }
    ],
    challenge: 'Scaling purchase volume while maintaining a strict cost-per-acquisition threshold.',
    solution: 'Implemented multi-tiered remarketing funnels and algorithmic budget shifting into top-performing SKU ads.',
    featured: true
  },
  {
    id: 'lead-generation-flyhigh',
    title: 'Fly High Visas & Real Estate Lead Engines',
    category: 'Lead Generation',
    clientIndustry: 'Immigration, Overseas Education & Real Estate',
    year: '2026',
    shortDescription: 'Predictable high-intent lead funnels generating 500+ verified inquiries/month at ₹2.85 to ₹39.24 per lead.',
    fullDescription: 'Built full-funnel lead generation architectures for Fly High Visas, White Sand Residency, and local hospitality clients. Achieved 500+ leads/month with CPLs starting at ₹2.85 for direct messaging inquiries up to ₹39.24 for overseas university consultations, routing all leads to sales in < 2 seconds.',
    image: '/src/assets/images/ai_automation_funnel_1793790557532.jpg',
    aspectRatio: '16:9',
    services: ['Meta Ads Management', 'Lead Generation & CRM', 'AI Automation & Chatbots'],
    results: [
      { label: 'Monthly Inbound Leads', value: '500+', context: 'High-intent qualified inquiries' },
      { label: 'Lowest Inbound Cost', value: '₹2.85', context: 'Per verified WhatsApp lead' },
      { label: 'Average Lead CPL', value: '₹85', context: 'Substantially below industry benchmarks' }
    ],
    challenge: 'High volume of unqualified inquiries and slow manual sales follow-up causing lost revenue.',
    solution: 'Built automated WhatsApp qualification flows integrated with instant CRM syncing and calendar booking.',
    featured: false
  }
];

export const AGENCY_PROCESS: ProcessStep[] = [
  {
    step: '01',
    title: 'Free Business Audit',
    tagline: 'Finding Hidden Growth Opportunities',
    description: 'We analyze your current ads, funnel, tracking, and competitors to find hidden growth opportunities. We pinpoint exactly where revenue is leaking and establish realistic scaling baselines.',
    deliverables: ['Full Funnel & Ads Audit', 'Competitor Landscape Analysis', 'Audience Architecture Review', 'Strategic Growth Roadmap']
  },
  {
    step: '02',
    title: 'Custom Growth Strategy',
    tagline: 'Tailored for Maximum ROAS',
    description: 'AI-driven growth plan tailored to your business — the right platforms, audiences, creatives, and funnel. No templates or cookie-cutter solutions; every campaign is designed to convert.',
    deliverables: ['Target Platform & Audience Plan', 'Creative Messaging & Angles', 'High-Converting Funnel Wireframes', 'Budget & KPI Projections']
  },
  {
    step: '03',
    title: 'Launch & Test',
    tagline: 'Establishing Your Winning Baseline',
    description: 'We deploy campaigns, run creative A/B tests, set up pixel tracking, and establish your winning baseline. Tracking and Conversions API verified before spending a single rupee.',
    deliverables: ['Campaign Deployment & Setup', 'A/B Creative Variant Testing', 'Pixel & CAPI Server Verification', 'CRM & WhatsApp Automation Sync']
  },
  {
    step: '04',
    title: 'Scale & Automate',
    tagline: 'Predictable Revenue & Automation',
    description: 'Winners get budget. AI automation handles follow-ups. You get consistent leads and predictable revenue without operational bottlenecks.',
    deliverables: ['Algorithmic Budget Scaling', 'Weekly Creative Refresh Rounds', 'Sub-2-Second Lead Dispatch', 'Transparent Live ROI Dashboards']
  }
];

export const AGENCY_METRICS = [
  { value: '₹1.2Cr+', label: 'Meta Ads Spend Managed' },
  { value: '4.5x', label: 'Average ROAS Delivered' },
  { value: '500+', label: 'Campaigns Run & Managed' },
  { value: '30+', label: 'Active Brands Scaled' }
];

export const WHY_PERFORMIZE = [
  {
    title: 'AI-Powered Systems, Not Just Ads',
    description: 'We build intelligent automation pipelines, lead qualification bots, and full-funnel architectures — so you do not just get clicks, you get paying customers and predictable revenue.'
  },
  {
    title: 'Measurable Outcomes Over Vanity Metrics',
    description: 'Our focus is strictly on leads, revenue, and ROAS. We do not hide behind superficial impressions or click metrics when cash flow and pipeline are what actually build businesses.'
  },
  {
    title: 'Agile 48-Hour Creative Testing & Velocity',
    description: 'Markets reward the rapid. Our streamlined sprint model allows us to iterate on creatives, test live angles, and deploy high-converting funnels weeks before traditional agencies finish kickoff decks.'
  },
  {
    title: 'Senior Strategy & Direct Founder Access',
    description: 'You work directly with founder Arman Beg and senior growth strategists on every campaign strategy call — no junior interns or disconnected account managers.'
  }
];

export const BRAND_VALUES = [
  {
    title: 'Measurable Commercial Outcomes',
    desc: 'Vanity metrics mean nothing if the bank account does not grow. We tie our success directly to qualified leads, purchases, and net profit.'
  },
  {
    title: 'Full-Funnel System Architecture',
    desc: 'Ads only bring traffic; conversions happen on the funnel. We optimize landing pages, tracking, and automated CRM follow-ups together.'
  },
  {
    title: 'Speed & Continuous Iteration',
    desc: 'Velocity is a competitive moat. We test relentlessly and let real consumer data dictate winning creative and scaling decisions.'
  }
];

export const REAL_CLIENT_BRANDS: ClientBrand[] = [
  { name: 'Karpasa', category: 'Sustainable Apparel', logo: '/assets/brands/karpasa.png' },
  { name: 'Gentlemens Attire', category: 'Fashion & D2C', logo: '/assets/brands/the_waffle_co.png' },
  { name: 'Starglazze Academy', category: 'Education & Acting', logo: '/assets/brands/starglazze.png' },
  { name: 'First Thought', category: 'Digital Strategy', logo: '/assets/brands/first_thought.png', darkBg: true },
  { name: 'Solvia Media & Legal', category: 'Legal & Corporate', logo: '/assets/brands/solvia.png', darkBg: true },
  { name: 'Sada E Haram', category: 'Travel & Tours', logo: '/assets/brands/sada_e_haram.png' },
  { name: 'Fly High Visas', category: 'Immigration & Study Abroad', logo: '/assets/brands/fly_high_visas.png' },
  { name: 'Waken', category: 'Lifestyle & Wellness', logo: '/assets/brands/waken.png', darkBg: true },
  { name: 'Grocery Everyday', category: 'Quick Commerce', logo: '/assets/brands/grocery_everyday.png' },
  { name: 'Sasy Travels', category: 'Tourism', logo: '/assets/brands/sasy_travels.png' },
  { name: 'Shakti', category: 'Industrial & Manufacturing', logo: '/assets/brands/shakti.png' },
  { name: 'EduJam', category: 'EdTech', logo: '/assets/brands/edujam.png' },
  { name: 'Growth-Sharks', category: 'B2B & Agency', logo: '/assets/brands/growth_sharks.png' },
  { name: 'Primal Nutrition', category: 'Health & Supplements', logo: '/assets/brands/primal_nutrition.png', darkBg: true },
  { name: 'The Waffle Co.', category: 'F&B Franchise', logo: '/assets/brands/the_waffle_co.png', darkBg: true },
  { name: 'Aarna Lube', category: 'Lubricants & Auto', logo: '/assets/brands/aarna_lube.png' },
  { name: 'Ted Tech', category: 'Software & Cloud', logo: '/assets/brands/ted_tech.png' },
  { name: 'Rumao World School', category: 'K-12 Education', logo: '/assets/brands/rumao_school.png' },
  { name: 'GraceMax', category: 'Pharma & Health', logo: '/assets/brands/gracemax.png' },
  { name: 'White Sand Residency', category: 'Real Estate', logo: '/assets/brands/white_sand.png' },
  { name: 'Coding Chaska', category: 'Tech Education', logo: '/assets/brands/coding_chaska.png' },
  { name: 'Ramashary Pharma', category: 'Healthcare', logo: '/assets/brands/ramashary_pharma.png' },
  { name: 'Home Square Interiors', category: 'Interior Design', logo: '/assets/brands/home_square.png' },
  { name: 'Little Millennium', category: 'Preschool Education', logo: '/assets/brands/little_millennium.png' }
];

export const CLIENT_TESTIMONIALS: TestimonialItem[] = [
  {
    name: 'Rohit Sharma',
    location: 'Delhi',
    rating: 5,
    text: 'Helped us generate consistent leads through Meta Ads. The campaigns were structured properly and results started improving within weeks. Highly recommended.',
    initials: 'RS',
    color: '#0066FF'
  },
  {
    name: 'Aman Verma',
    location: 'Noida',
    rating: 5,
    text: 'Very professional and clear with strategy. We saw a good improvement in lead quality and cost per lead. Communication was smooth throughout.',
    initials: 'AV',
    color: '#4285F4'
  },
  {
    name: 'Saurabh Gupta',
    location: 'Lucknow',
    rating: 5,
    text: 'Worked with the team for Meta Ads and automation. The system they built actually helped us manage leads better and save hours of manual follow-up every single day.',
    initials: 'SG',
    color: '#6366f1'
  },
  {
    name: 'Imran Khan',
    location: 'Mumbai',
    rating: 5,
    text: 'Performance-focused approach. No unnecessary promises, just proper execution and results. Very happy with the numbers and cost per acquisition.',
    initials: 'IK',
    color: '#0066FF'
  },
  {
    name: 'Rahul Singh',
    location: 'Jaipur',
    rating: 5,
    text: 'Campaign structure and targeting was on point. We started getting much better conversions compared to our previous setup and generic agency retainers.',
    initials: 'RS',
    color: '#4285F4'
  },
  {
    name: 'Nitin Agarwal',
    location: 'Indore',
    rating: 5,
    text: 'Understands ads and business both. Helped us scale our campaigns step by step with proper creative testing and tracking optimization.',
    initials: 'NA',
    color: '#8b5cf6'
  },
  {
    name: 'Arjun Mehta',
    location: 'Ahmedabad',
    rating: 5,
    text: 'Clean setup, good creatives, and proper tracking. Overall a great experience working together on performance marketing.',
    initials: 'AM',
    color: '#06b6d4'
  }
];

export const AI_AUTOMATION_SOLUTIONS = [
  {
    title: 'Intelligent Lead Qualification',
    desc: 'Never waste sales calls on bad fits. Automated bots qualify budget and timeline beforehand.',
    color: '#0066FF'
  },
  {
    title: 'Instant CRM Syncing',
    desc: 'Leads routed to your sales team in < 2 seconds via WhatsApp, SMS, or CRM webhooks.',
    color: '#4285F4'
  },
  {
    title: '24/7 Support Resolution',
    desc: 'Automate 60%+ of routine customer inquiries and appointment scheduling while you sleep.',
    color: '#6366f1'
  },
  {
    title: 'Error-Free Operations',
    desc: 'Eliminate manual spreadsheet data entry mistakes with automated data pipelines.',
    color: '#10a37f'
  }
];

export const AGENCY_FAQS: FaqItem[] = [
  {
    question: 'Is your main focus on ROI or ROAS?',
    answer: 'Our primary goal is Profitable Growth. We do not just chase clicks or views — we focus on actual sales and leads so every rupee you invest works for you. ROAS is a metric; profitable revenue is the goal.'
  },
  {
    question: 'Do you run ads on all platforms?',
    answer: 'We specialize in Meta Ads (Facebook/Instagram) and Google Ads (Search, Display, YouTube & PMax). Whichever platform drives the highest converting volume for your business, that is what we scale.'
  },
  {
    question: 'What is the minimum budget needed for Performance Marketing?',
    answer: 'Budget always depends on your commercial goals. We recommend starting with a focused testing budget, identifying the winning ad creatives, and then scaling aggressively from there after your free growth audit.'
  },
  {
    question: 'Do you only run ads, or do you optimize the funnel too?',
    answer: 'Ads only bring traffic — conversions happen on your landing page and funnel. That is why we also work on landing page optimization, copy, and tracking setup (Pixel/CAPI/GA4) to keep your conversion rate high.'
  },
  {
    question: 'How is Performize different from traditional agencies?',
    answer: 'We build AI-powered systems, not just ad campaigns. Our clients get full-funnel strategy, creative variant testing, automation pipelines, and transparent reporting — with direct access to senior leadership.'
  },
  {
    question: 'How quickly can I expect results?',
    answer: 'Most clients see initial results within 2–4 weeks of campaign launch. Scaling and sustained ROI typically solidify by month 2–3 as we optimize based on data. We set realistic expectations from day one.'
  }
];
