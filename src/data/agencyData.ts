import { Project, ServiceItem, ProcessStep } from '../types';

export const AGENCY_SERVICES: ServiceItem[] = [
  {
    id: 'meta-ads',
    number: '01',
    title: 'Meta Ads Management',
    shortDescription: 'Hyper-targeted creative conversion engines across Facebook and Instagram with algorithmic testing and creative fatigue mitigation.',
    fullDescription: 'We build high-converting paid social funnels engineered for scale. Combining rapid dynamic creative testing (DCT), bespoke motion assets, and strict post-click landing page alignment, we maximize ROAS and customer lifetime value.',
    deliverables: [
      'Full-funnel audience targeting & pixel tracking',
      'High-velocity creative variant testing (video + stills)',
      'Algorithmic bid optimization & budget scaling',
      'Weekly transparent performance analytics'
    ],
    coreTech: ['Meta Advantage+', 'Custom Audiences', 'Conversions API', 'Triple Whale'],
    impactMetric: '3.8x',
    impactLabel: 'Average Blended ROAS'
  },
  {
    id: 'website-development',
    number: '02',
    title: 'Website Development',
    shortDescription: 'High-performance, cinematic digital experiences engineered with modern web frameworks for maximum conversion velocity.',
    fullDescription: 'Your website is your agency flagship. We craft custom, lightning-fast digital platforms that merge avant-garde editorial motion with conversion-optimized UX architecture, ensuring sub-second load times and fluid cross-device experiences.',
    deliverables: [
      'Custom React / Next.js / Vite architectures',
      'Advanced GSAP & interactive motion choreography',
      'Conversion-rate-optimized (CRO) layout structure',
      'Mobile-first responsive engineering & technical SEO'
    ],
    coreTech: ['React', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Vite'],
    impactMetric: '<0.8s',
    impactLabel: 'Average LCP Load Time'
  },
  {
    id: 'social-media',
    number: '03',
    title: 'Social Media Management',
    shortDescription: 'Distinctive brand voice architecture, cultural relevance, and organic community engagement across TikTok, Instagram, and LinkedIn.',
    fullDescription: 'We transform brands from passive broadcasters into cultural participants. Our social team engineers compelling narrative arcs, episodic content franchises, and proactive community engagement that convert casual scrollers into loyal advocates.',
    deliverables: [
      'Comprehensive brand narrative & tone-of-voice guide',
      'Monthly editorial calendar & scheduled publishing',
      'Community management, comments & DM triage',
      'Trend-jacking & agile short-form concepting'
    ],
    coreTech: ['CapCut', 'Figma', 'Buffer / Sprout', 'Notion'],
    impactMetric: '+280%',
    impactLabel: 'Average 90-Day Engagement Growth'
  },
  {
    id: 'video-editing',
    number: '04',
    title: 'Video Editing',
    shortDescription: 'High-retention commercial reels, brand films, and direct-response video assets calibrated for modern attention spans.',
    fullDescription: 'Attention is the rarest currency. We produce visually arresting commercial edits, short-form reels, and cinematic brand stories designed with dynamic pacing, bespoke sound design, motion typography, and punchy hooks.',
    deliverables: [
      'Short-form vertical video (TikTok, Reels, Shorts)',
      'Long-form brand documentaries & case films',
      'Direct-response paid ad creative iterations',
      'Color grading, sound design & kinetic captions'
    ],
    coreTech: ['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Logic Pro'],
    impactMetric: '68%',
    impactLabel: 'Average 3-Second Hook Retention'
  },
  {
    id: 'google-ads',
    number: '05',
    title: 'Google Ads Management',
    shortDescription: 'High-intent search capture, performance max campaigns, and display retargeting engineered for predictable revenue generation.',
    fullDescription: 'Capture customers at the exact millisecond of purchase intent. We architect data-driven Search, Shopping, YouTube, and Performance Max campaigns with precision negative-keyword filtering and bid governance.',
    deliverables: [
      'High-intent search keyword clustering',
      'Performance Max (PMax) asset group orchestration',
      'Dedicated Google Shopping feed optimization',
      'Continuous conversion rate tracking & attribution'
    ],
    coreTech: ['Google Ads', 'GA4', 'Google Tag Manager', 'Search Console'],
    impactMetric: '-34%',
    impactLabel: 'Average Reduction in Cost Per Lead'
  },
  {
    id: 'ai-automation',
    number: '06',
    title: 'AI Automation & Chatbots',
    shortDescription: 'Intelligent lead qualification systems, automated CRM workflows, and custom conversational agents that run 24/7.',
    fullDescription: 'We eliminate sales friction and human bottlenecks. Our automation architects build intelligent conversational AI agents, instant lead dispatch bots, and multi-platform automation pipelines that qualify prospects and book meetings automatically.',
    deliverables: [
      'Custom LLM conversational agents for web & WhatsApp',
      'Automated multi-step CRM lead qualification pipelines',
      'Instant SMS/Email follow-up sequences',
      'Automated reporting & data sync bridges'
    ],
    coreTech: ['Gemini API', 'Make / n8n', 'Zapier', 'Webhooks / REST'],
    impactMetric: '24/7',
    impactLabel: 'Sub-Minute Lead Qualification'
  },
  {
    id: 'lead-generation-crm',
    number: '07',
    title: 'Lead Generation & CRM',
    shortDescription: 'End-to-end inbound pipeline architecture, lead nurture sequences, and CRM infrastructure for predictable pipeline velocity.',
    fullDescription: 'Stop losing leads to disorganized spreadsheets. We implement robust CRM ecosystems (HubSpot, GoHighLevel, ActiveCampaign) paired with multi-channel capture funnels, lifecycle nurturing, and sales pipeline tracking.',
    deliverables: [
      'CRM architecture, pipeline design & stage automation',
      'Automated email & SMS nurture cadences',
      'Form & calendar scheduling integrations',
      'Closed-loop revenue reporting dashboards'
    ],
    coreTech: ['GoHighLevel', 'HubSpot', 'Stripe', 'Twilio'],
    impactMetric: '+140%',
    impactLabel: 'Increase in Pipeline Velocity'
  },
  {
    id: 'content-strategy',
    number: '08',
    title: 'Content Strategy',
    shortDescription: 'Authority-building content architectures, editorial roadmaps, and storytelling frameworks that drive compounding organic reach.',
    fullDescription: 'Content without strategy is noise. We map your prospective customers’ decision journey, developing authoritative articles, whitepapers, social frameworks, and newsletter engines that position your leadership as the category standard.',
    deliverables: [
      'Target persona journey & pain-point mapping',
      'Quarterly content calendars & distribution blueprints',
      'SEO-driven long-form thought leadership',
      'Omnichannel repurposing workflows'
    ],
    coreTech: ['Ahrefs', 'SurferSEO', 'Notion', 'Figma'],
    impactMetric: '+310%',
    impactLabel: 'Compounding Organic Impressions'
  },
  {
    id: 'branding-graphic-design',
    number: '09',
    title: 'Branding & Graphic Design',
    shortDescription: 'Memorable visual identities, brand systems, packaging, and design collateral that command premium market positioning.',
    fullDescription: 'Great branding makes price sensitivity obsolete. We craft uncompromising visual identity systems—including logos, bespoke typography rules, color science, icon sets, and digital brand guidelines that make your company unmistakable.',
    deliverables: [
      'Comprehensive brand identity system & guidelines',
      'Logo design, mark variations & vector master assets',
      'Marketing collateral, decks, and social design kits',
      'Digital design system & UI component tokens'
    ],
    coreTech: ['Figma', 'Illustrator', 'Photoshop', 'InDesign'],
    impactMetric: '100%',
    impactLabel: 'Vector Bespoke Identity Master'
  }
];

export const AGENCY_PROJECTS: Project[] = [
  {
    id: 'karpasaonline',
    title: 'Karpasa Online — DTC eCommerce Scaling',
    category: 'Ecommerce',
    clientIndustry: 'Sustainable Apparel & Home Textiles',
    year: '2026',
    shortDescription: 'High-intent creative testing and catalog retargeting generating 2,896 website adds-to-cart at ₹0.96 per cart.',
    fullDescription: 'Karpasa Online needed to lower customer acquisition costs and drive purchase intent. Performize deployed high-performing dynamic creatives and audience retargeting that delivered 2,896 website adds-to-cart at ₹0.96 per action, 1,132 landing page views at ₹1.34, reaching 113,407 target buyers on a lean ₹2,767 budget.',
    image: '/src/assets/images/project_ecommerce_growth_1793425951055.jpg',
    aspectRatio: '4:3',
    services: ['Meta Ads Management', 'Website Development', 'Content Strategy'],
    results: [
      { label: 'Website Adds To Cart', value: '2,896', context: 'Achieved at ₹0.96 per add to cart' },
      { label: 'Landing Page Views', value: '1,132', context: 'At ₹1.34 per verified visitor' },
      { label: 'Audience Reach', value: '113,407', context: 'Delivered on just ₹2,767 ad spend' }
    ],
    challenge: 'High drop-off rates and escalating cart acquisition costs from generic broad-audience ad sets.',
    solution: 'Designed high-contrast product creative variations and segmented retargeting calibrated for instant mobile checkout.',
    featured: true
  },
  {
    id: 'vaani-cher',
    title: 'Vaani & Cher — Viral Paid Media Engine',
    category: 'D2C',
    clientIndustry: 'FMCG & Consumer Lifestyle',
    year: '2026',
    shortDescription: 'Multi-campaign creative distribution delivering 4.99M impressions and 36,462 link clicks at ₹0.48 CPC.',
    fullDescription: 'A high-retention video creative and engagement strategy deployed across 429 campaigns. Our team continuously tested video hooks and short-form assets, accumulating 4,990,420 total impressions, 2,787,388 unique users reached, and 36,462 clicks with CPCs dropping as low as ₹0.48.',
    image: '/src/assets/images/project_meta_brand_1793425951395.jpg',
    aspectRatio: '16:9',
    services: ['Meta Ads Management', 'Video Editing', 'Content Strategy', 'Branding & Graphic Design'],
    results: [
      { label: 'Audited Impressions', value: '4.99M+', context: 'Generated across 429 live campaigns' },
      { label: 'Unique Reach Delivered', value: '2.78M+', context: 'High-affinity consumer audience' },
      { label: 'Lowest Link CPC', value: '₹0.48', context: 'Across 36,462 high-intent clicks' }
    ],
    challenge: 'Brand saturation and rising click costs in competitive social media feeds.',
    solution: 'Engineered rapid 48-hour video creative refreshes, testing dynamic opening hooks that maximized view-through rates.',
    featured: true
  },
  {
    id: 'study-visa-funnel',
    title: 'Global Education & Visa Consulting',
    category: 'Lead Generation',
    clientIndustry: 'International Education & Immigration',
    year: '2026',
    shortDescription: 'Full-funnel student recruitment engine delivering 1.29M impressions and admissions leads starting at ₹39.24.',
    fullDescription: 'Recruiting qualified prospective students across UK and European study programs. Performize built high-converting video and WhatsApp funnel campaigns that reached 693,382 candidates, driving hundreds of verified consultations starting at ₹39.24 per lead.',
    image: '/src/assets/images/project_ai_automation_1793425951221.jpg',
    aspectRatio: '4:3',
    services: ['Meta Ads Management', 'Lead Generation & CRM', 'AI Automation & Chatbots'],
    results: [
      { label: 'Campaign Impressions', value: '1.29M+', context: 'Across 28 targeted admissions ad sets' },
      { label: 'Cost Per Consultation', value: '₹39.24', context: 'Substantially below ₹140 industry standard' },
      { label: 'Qualified Student Reach', value: '693,382', context: 'High-intent applicant demographic' }
    ],
    challenge: 'High volume of unqualified inquiries driving up counselor workload and cost per enrollment.',
    solution: 'Implemented automated WhatsApp qualification filters connected directly to counselor calendars.',
    featured: true
  },
  {
    id: 'hospitality-dining',
    title: 'Le Cafe Crush & BTS Dining Experiences',
    category: 'Lead Generation',
    clientIndustry: 'Hospitality, Cafes & Fine Dining',
    year: '2026',
    shortDescription: 'Hyperlocal WhatsApp reservation funnels generating customer dining conversations at as low as ₹2.85 per lead.',
    fullDescription: 'Promoted signature dining events, anniversary specials, and cafe launches. Utilizing localized geotargeting and dynamic carousel ads, we generated direct messaging reservations for ₹2.85 (BTS Anniversary) and ₹9.31 (Le Cafe Crush) with immediate positive cashflow.',
    image: '/src/assets/images/agency_studio_editorial_1793425952072.jpg',
    aspectRatio: '16:9',
    services: ['Meta Ads Management', 'Social Media Management', 'Video Editing'],
    results: [
      { label: 'Lowest Inbound Cost', value: '₹2.85', context: 'Per verified WhatsApp reservation lead' },
      { label: 'Campaign Ad Spend', value: '₹133 – ₹903', context: 'Maximum capital efficiency' },
      { label: 'Direct Inquiries', value: '250+', context: 'Qualified dining reservations generated' }
    ],
    challenge: 'Inconsistent weekday footfall and reliance on expensive third-party food discovery platforms.',
    solution: 'Built direct-to-WhatsApp booking campaigns giving the restaurant full ownership of customer contact data.',
    featured: false
  }
];

export const AGENCY_PROCESS: ProcessStep[] = [
  {
    step: '01',
    title: 'Discovery & Deep Audit',
    tagline: 'Uncovering the Truth in the Data',
    description: 'We dismantle your current marketing funnel, competitors, and audience behavior. We pinpoint exactly where revenue is leaking and identify the highest-leverage growth opportunities.',
    deliverables: ['Full Funnel & Ads Audit', 'Competitor Landscape Analysis', 'Audience Persona Architecture', 'Strategic Growth Roadmap']
  },
  {
    step: '02',
    title: 'Concept & Brand Architecture',
    tagline: 'Designing What Cannot Be Ignored',
    description: 'We develop the visual identity, persuasive messaging angles, and conversion architecture. No templates or cookie-cutter solutions; every concept is engineered for market dominance.',
    deliverables: ['Creative Messaging Angles', 'High-Converting Wireframes', 'Ad Creative Storyboards', 'Identity & Visual Guidelines']
  },
  {
    step: '03',
    title: 'Execution & Rapid Velocity',
    tagline: 'Flawless Production & Launch',
    description: 'Our specialists build, edit, and configure everything: high-performance landing pages, custom video ads, automated CRM funnels, and tracking pixels with surgical precision.',
    deliverables: ['Custom Web Platform Deployment', 'Multi-Variant Video & Ad Production', 'CRM & AI Bot Configuration', 'Tracking & Pixel Verification']
  },
  {
    step: '04',
    title: 'Scale & Algorithmic Optimization',
    tagline: 'Compounding Revenue Trajectory',
    description: 'Once launched, the real work begins. We continuously monitor ad fatigue, test fresh creative angles, optimize bid algorithms, and scale budget into clear winning vectors.',
    deliverables: ['Daily Bid & Budget Governance', 'Weekly Creative Refresh Rounds', 'A/B Split Test Analysis', 'Executive Revenue Dashboard Access']
  }
];

export const AGENCY_METRICS = [
  { value: '4.99M+', label: 'Audited Ad Impressions' },
  { value: '2.78M+', label: 'Unique Reach Delivered' },
  { value: '390+', label: 'Verified Purchases (Page 5)' },
  { value: '₹2.85', label: 'Lowest Cost / Inbound Lead' }
];

export const WHY_PERFORMIZE = [
  {
    title: 'Creativity Meets Performance Math',
    description: 'Most agencies pick one: beautiful design that does not convert, or ugly ads that cheapen your brand. Performize unites world-class art direction with brutal direct-response mathematics.'
  },
  {
    title: 'Agile Turnaround, Zero Bureaucracy',
    description: 'No 3-week waiting periods for a simple video edit. Our integrated sprint workflow allows us to conceptualize, produce, and deploy new creative variations in 48 hours.'
  },
  {
    title: 'AI Automation as Standard Infrastructure',
    description: 'We don’t just buy ads—we build the 24/7 automation systems that nurture leads, qualify prospects, and book calendar appointments before your competitors even open the email.'
  },
  {
    title: 'Senior Specialists On Every Account',
    description: 'You will never be handed off to junior interns after signing. You work directly with veteran creative directors, paid media strategists, and technical architects.'
  }
];

export const BRAND_VALUES = [
  {
    title: 'Relentless Distinction',
    desc: 'If it looks like everyone else in your industry, it is already dead. We build work that stops the thumb and commands attention.'
  },
  {
    title: 'Radical Accountability',
    desc: 'Vanity metrics like impressions mean nothing if the bank account doesn’t grow. We tie our success to qualified leads, pipeline, and net profit.'
  },
  {
    title: 'Velocity Without Compromise',
    desc: 'Speed is a competitive moat. We move with extreme urgency while protecting pixel-level craftsmanship.'
  }
];
