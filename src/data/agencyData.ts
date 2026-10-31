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
    id: 'cypher-finance',
    title: 'Cypher Digital Financial',
    category: 'Brand & Performance Marketing',
    clientIndustry: 'Fintech / Next-Gen Asset Management',
    year: '2026',
    shortDescription: 'End-to-end brand repositioning and multi-channel acquisition funnel delivering unprecedented inbound capital volume.',
    fullDescription: 'Cypher required a total creative overhaul and an aggressive user acquisition engine to compete with incumbent wealth platforms. Performize rebuilt their brand positioning, designed a dark obsidian interactive web experience, and orchestrated a synchronized Meta & Google Ads strategy that outperformed previous customer acquisition benchmarks.',
    image: '/src/assets/images/project_meta_brand_1793425951395.jpg',
    aspectRatio: '16:9',
    services: ['Meta Ads Management', 'Website Development', 'Branding & Graphic Design', 'Lead Generation & CRM'],
    results: [
      { label: 'Customer Acquisition Cost', value: '-42%', context: 'Reduced across Meta & Google campaigns' },
      { label: 'Qualified Investor Inbound', value: '+310%', context: 'Within first 90 days of campaign deployment' },
      { label: 'Average ROAS', value: '4.4x', context: 'Sustained blended return on ad spend' }
    ],
    challenge: 'Overcoming trust barriers in a crowded fintech sector with outdated, low-trust legacy branding and fragmented media buying.',
    solution: 'Designed an authoritative dark-mode identity with glowing crimson cues, paired with high-velocity video storytelling and algorithmic bidding.',
    featured: true
  },
  {
    id: 'aura-chronometry',
    title: 'Aura Luxury Chronometry',
    category: 'eCommerce Growth & Creative',
    clientIndustry: 'Luxury Hardware & Wearable Tech',
    year: '2026',
    shortDescription: 'High-contrast studio creative production, website redesign, and Meta Advantage+ scaling for an international luxury brand.',
    fullDescription: 'Aura merged precision mechanical watch craftsmanship with biometric wireless audio. We engineered a cinematic DTC ecommerce experience with sub-second page transitions, accompanied by punchy short-form product reels and retargeting workflows that drove immediate global sales velocity.',
    image: '/src/assets/images/project_ecommerce_growth_1793425951055.jpg',
    aspectRatio: '4:3',
    services: ['Website Development', 'Video Editing', 'Meta Ads Management', 'Content Strategy'],
    results: [
      { label: 'eCommerce Conversion Rate', value: '4.8%', context: 'Up from 1.9% prior to platform redesign' },
      { label: 'Launch Drop Sales', value: '$1.8M', context: 'Generated in the first 72 hours of product debut' },
      { label: 'Video Hook Retention', value: '74%', context: 'On 15-second cinematic TikTok & Reel ads' }
    ],
    challenge: 'Communicating the dual value proposition of luxury mechanical craftsmanship and high-tech biometric connectivity without confusing the buyer.',
    solution: 'Cinematic lighting, high-contrast studio editorial assets, and split-second conversion flows on mobile devices.',
    featured: true
  },
  {
    id: 'nexus-workflows',
    title: 'Nexus Intelligent Automation',
    category: 'AI Automation & CRM Architecture',
    clientIndustry: 'Enterprise B2B Logistics & SaaS',
    year: '2026',
    shortDescription: 'Custom 24/7 intelligent conversational agents, automated qualification pipelines, and CRM integration for global freight brokers.',
    fullDescription: 'Nexus struggled with manual lead triage, resulting in 8-hour response times and lost contracts. Performize engineered an autonomous AI qualification engine integrated directly into WhatsApp and web chat, dispatching quotes in under 45 seconds.',
    image: '/src/assets/images/project_ai_automation_1793425951221.jpg',
    aspectRatio: '4:3',
    services: ['AI Automation & Chatbots', 'Lead Generation & CRM', 'Website Development'],
    results: [
      { label: 'Lead Response Time', value: '<45s', context: 'Down from 8+ hours manual triage' },
      { label: 'Sales Rep Capacity', value: '3.5x', context: 'More demos booked per sales engineer' },
      { label: 'Pipeline Closed Volume', value: '+185%', context: 'In qualified deal conversions year-over-year' }
    ],
    challenge: 'High lead volume slipping through the cracks due to timezone delays and manual spreadsheet data entry.',
    solution: 'Built an autonomous AI qualification triage system connecting web inquiry forms directly to CRM and WhatsApp.',
    featured: true
  },
  {
    id: 'performize-studio-ops',
    title: 'Performize Internal Showreel',
    category: 'Agency Production & Media',
    clientIndustry: 'Creative Direction & Strategy',
    year: '2026',
    shortDescription: 'A showcase of our high-intensity creative laboratory, motion graphics engineering, and performance marketing operations.',
    fullDescription: 'Our creative agency space and production laboratory in action. We combine rigorous analytics with bold artistic direction to produce media that captures market share.',
    image: '/src/assets/images/agency_studio_editorial_1793425952072.jpg',
    aspectRatio: '16:9',
    services: ['Video Editing', 'Content Strategy', 'Branding & Graphic Design'],
    results: [
      { label: 'Campaign Production Turnaround', value: '48h', context: 'Rapid creative iteration deployment' },
      { label: 'Client Retention Rate', value: '94%', context: 'Long-term agency growth partnership' },
      { label: 'Creative Fatigue Reduction', value: '-80%', context: 'Through continuous automated variant testing' }
    ],
    challenge: 'Scaling high-production creative output without sacrificing bespoke craftsmanship or strategic rigor.',
    solution: 'Integrated production pipeline unifying strategy, design, video editing, and live performance metrics under one roof.',
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
  { value: '$48M+', label: 'Client Revenue Generated' },
  { value: '3.8x', label: 'Average Blended ROAS' },
  { value: '94%', label: 'Partner Retention Rate' },
  { value: '180+', label: 'Campaigns Deployed' }
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
