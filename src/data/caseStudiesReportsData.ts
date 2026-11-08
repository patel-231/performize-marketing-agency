import { CaseStudyReport } from '../types';

export const PORTFOLIO_AGGREGATE_METRICS = {
  totalMoneySpent: '₹5,752,997.71',
  totalMoneySpentNote: 'Approx. factoring cross-currency conversions like USD for Classy & RK’s',
  averageFrequency: '1.85 – 2.22',
  totalReach: '29,850,459+',
  totalCompaniesCount: 30
};

export const CASE_STUDY_REPORTS: CaseStudyReport[] = [
  // 1. RK's Tint & Tire
  {
    id: 'report-rktintandtire',
    companyName: "RK's Tint & Tire",
    tagline: 'Automotive Styling, Window Tinting & Performance Tire Specialists',
    logo: '/assets/brands/rktintandtire.png',
    darkLogo: true,
    websiteLink: 'https://www.rktintandtire.com/',
    totalCampaigns: '32 campaigns',
    category: 'Lead Generation',
    industry: 'Automotive Services & Performance Styling',
    reportingPeriod: 'Full Year Acquisition Flight',
    campaignObjective: 'Direct Service Bookings & Messaging Inquiries',
    performanceOverview:
      'High-velocity local automotive customer acquisition driving confirmed shop visits and custom tint installations across 32 optimized campaign sets with verified conversion attribution.',
    highlightStat: '32 Campaigns · 266K Reach · $29.1K Spent',
    metrics: {
      totalResults: '32 Campaigns (Multiple Conversions)',
      totalResultsLabel: 'Campaign Conversions',
      totalReach: '266,708',
      averageFrequency: '5.78',
      averageCostPerResult: '$3.56 – $7.60',
      totalBudget: '$32,000.00',
      totalAmountSpent: '$29,136.62',
      budgetUtilization: '91.05%',
      remainingBudget: '$2,863.38'
    },
    charts: {
      trends: [
        { period: 'Q1', results: 145, reach: 58000, spent: 6800, cpr: 5.80 },
        { period: 'Q2', results: 210, reach: 74000, spent: 8200, cpr: 5.10 },
        { period: 'Q3', results: 230, reach: 78000, spent: 8500, cpr: 4.80 },
        { period: 'Q4', results: 165, reach: 56708, spent: 5636, cpr: 4.60 }
      ]
    },
    screenshot: {
      caption: 'Campaign Performance Ledger — 266,708 Reach across 32 Campaign Sets',
      anonymizedAdSets: [
        { label: 'Local Service Geo-Radius · Window Tint Special', results: '240 inquiries', cpr: '$4.20', spend: '$12,400', reach: '115,000' },
        { label: 'Custom Wheel & Tire Package Promotions', results: '160 inquiries', cpr: '$5.50', spend: '$9,800', reach: '92,000' },
        { label: 'Retargeting · Past Video Viewers & Web Visitors', results: '95 inquiries', cpr: '$6.80', spend: '$6,936', reach: '59,708' }
      ]
    }
  },

  // 2. Gurez
  {
    id: 'report-gurez',
    companyName: 'Gurez',
    tagline: 'Modern Industrial Supply & Commercial Packaging Solutions',
    logo: '/assets/brands/gurez.png',
    darkLogo: false,
    websiteLink: 'https://gurez.com/',
    totalCampaigns: '61 campaigns',
    category: 'E-commerce',
    industry: 'Industrial Supply & E-Commerce Packaging',
    reportingPeriod: 'Full Scale Cycle (Audited)',
    campaignObjective: 'Dynamic Catalog Orders & High-Volume B2B/B2C Transactions',
    performanceOverview:
      'Engineered a massive multi-tiered product catalog architecture delivering 19.02M+ unique customer reach and thousands of verified purchases across 61 optimized campaign sets.',
    highlightStat: '19.02M Reach · ₹31.38L Spent',
    metrics: {
      totalResults: '61 Campaigns (5,225+ Purchases)',
      totalResultsLabel: 'Verified Transactions',
      totalReach: '19,025,099',
      averageFrequency: '3.61',
      averageCostPerResult: '₹70.15 (avg across items)',
      totalBudget: '₹35,00,000.00',
      totalAmountSpent: '₹3,138,472.91',
      budgetUtilization: '89.67%',
      remainingBudget: '₹3,61,527.09'
    },
    charts: {
      trends: [
        { period: 'Phase 1', results: 883, reach: 3800000, spent: 540000, cpr: 74 },
        { period: 'Phase 2', results: 1180, reach: 4950000, spent: 710000, cpr: 71 },
        { period: 'Phase 3', results: 1420, reach: 5200000, spent: 840000, cpr: 69 },
        { period: 'Phase 4', results: 1742, reach: 5075099, spent: 1048472, cpr: 68 }
      ]
    },
    screenshot: {
      caption: 'Packaging Scale Ledger — 19,025,099 Total Reach Across 61 Campaign Sets',
      anonymizedAdSets: [
        { label: 'Direct Dynamic Catalog Scale', results: '3,162 purchases', cpr: '₹68.40', spend: '₹18,42,110', reach: '11,420,000' },
        { label: 'Retargeting & Abandoned Cart Recovery', results: '1,180 purchases', cpr: '₹71.20', spend: '₹7,22,514', reach: '4,105,099' },
        { label: 'Broad Top-of-Funnel Commercial Discovery', results: '883 purchases', cpr: '₹74.50', spend: '₹5,73,848', reach: '3,500,000' }
      ]
    }
  },

  // 3. The Little Trunk
  {
    id: 'report-thelittletrunk',
    companyName: 'The Little Trunk',
    tagline: 'Artisanal Kids Fashion, Apparel & Handcrafted Essentials',
    logo: '/assets/brands/thelittletrunk.svg',
    darkLogo: true,
    websiteLink: 'https://thelittletrunk.com',
    totalCampaigns: '192 campaigns',
    category: 'E-commerce',
    industry: 'Kids Apparel & Handcrafted Lifestyle',
    reportingPeriod: 'Full Seasonal Scale',
    campaignObjective: 'Direct Store Sales & Repeat Customer Lifetime Value',
    performanceOverview:
      'Executed 192 high-velocity creative and lookalike campaigns, generating 2,144,428 unique audience reach with robust catalog conversions across India.',
    highlightStat: '192 Campaigns · 2.14M Reach · ₹14.14L Spent',
    metrics: {
      totalResults: '192 Campaigns (Multiple Conversions)',
      totalResultsLabel: 'Order Transactions',
      totalReach: '2,144,428',
      averageFrequency: '2.14',
      averageCostPerResult: '₹850.55 avg',
      totalBudget: '₹15,00,000.00',
      totalAmountSpent: '₹1,414,467.59',
      budgetUtilization: '94.30%',
      remainingBudget: '₹85,532.41'
    },
    charts: {
      trends: [
        { period: 'Month 1', results: 420, reach: 390000, spent: 220000, cpr: 870 },
        { period: 'Month 2', results: 680, reach: 580000, spent: 340000, cpr: 855 },
        { period: 'Month 3', results: 890, reach: 620000, spent: 410000, cpr: 840 },
        { period: 'Month 4', results: 950, reach: 554428, spent: 444467, cpr: 835 }
      ]
    },
    screenshot: {
      caption: 'Kids Lifestyle Scale Ledger — 2,144,428 Targeted Reach across 192 Sets',
      anonymizedAdSets: [
        { label: 'Parent Audience Segment · Festive Collection', results: '1,420 orders', cpr: '₹840.00', spend: '₹6,46,100', reach: '980,000' },
        { label: 'Dynamic Catalog Retargeting Set', results: '980 orders', cpr: '₹855.00', spend: '₹4,82,160', reach: '710,000' },
        { label: 'High-Value Festive Gift Sets', results: '540 orders', cpr: '₹865.00', spend: '₹2,86,207', reach: '454,428' }
      ]
    }
  },

  // 4. Dr. Venture
  {
    id: 'report-drventure',
    companyName: 'Dr. Venture',
    tagline: 'Scientific Wellness, Skin & Hair Nourishment Formulations',
    logo: '/assets/brands/drventure.svg',
    darkLogo: true,
    websiteLink: 'https://drventure.in/',
    totalCampaigns: '39 campaigns',
    category: 'E-commerce',
    industry: 'Nutraceuticals, Wellness & Personal Care',
    reportingPeriod: 'Conversion Architecture Scale',
    campaignObjective: 'Direct DTC Order Scale & Cart Value Optimization',
    performanceOverview:
      'Scaled 39 algorithmic campaign sets across CBO clusters, generating steady high-margin purchase conversions with CPR optimized at ₹180.68.',
    highlightStat: '39 Campaigns · ₹7.28L Spent · ₹180.68 CPR',
    metrics: {
      totalResults: '39 Campaigns (Multiple Conversions)',
      totalResultsLabel: 'Confirmed Purchases',
      totalReach: '2,890,000',
      averageFrequency: '2.44',
      averageCostPerResult: '₹180.68',
      totalBudget: '₹8,00,000.00',
      totalAmountSpent: '₹728,424.44',
      budgetUtilization: '91.05%',
      remainingBudget: '₹71,575.56'
    },
    charts: {
      trends: [
        { period: 'Sprint 1', results: 980, reach: 620000, spent: 155000, cpr: 185 },
        { period: 'Sprint 2', results: 1240, reach: 740000, spent: 184000, cpr: 180 },
        { period: 'Sprint 3', results: 1420, reach: 810000, spent: 208000, cpr: 178 },
        { period: 'Sprint 4', results: 1240, reach: 720000, spent: 181424, cpr: 179 }
      ]
    },
    screenshot: {
      caption: 'Wellness Ecom Report — 39 Optimized Campaigns at ₹180.68 CPR',
      anonymizedAdSets: [
        { label: 'Daily Care Bundle Variant A', results: '2,150 orders', cpr: '₹176.00', spend: '₹3,21,000', reach: '1,280,000' },
        { label: 'Targeted Hair & Skin Nourishment Formula', results: '1,740 orders', cpr: '₹182.00', spend: '₹2,69,000', reach: '1,040,000' },
        { label: '3-Month Reorder Auto-Delivery', results: '990 orders', cpr: '₹184.00', spend: '₹138,424', reach: '570,000' }
      ]
    }
  },

  // 5. Eldearly Donation Campaign (Classy Platform)
  {
    id: 'report-eldearly',
    companyName: 'Eldearly (Classy)',
    tagline: 'Empowering Elderly Dignity, Medical Care & Compassion',
    logo: '/assets/brands/eldearly.png',
    darkLogo: false,
    websiteLink: 'https://giving.classy.org/campaign/605198/donate',
    totalCampaigns: '33 campaigns',
    category: 'Brand Awareness',
    industry: 'Philanthropy & Elder Care Fundraising',
    reportingPeriod: 'Global Giving Season',
    campaignObjective: 'Donor Acquisition & Philanthropic Mission Support',
    performanceOverview:
      'International fundraising initiative deployed on Classy platform, generating 1,060,933 unique global reach across 33 dedicated giving campaigns.',
    highlightStat: '1.06M Reach · $26.0K Spent · 33 Campaigns',
    metrics: {
      totalResults: '33 Campaigns (Multiple Donors)',
      totalResultsLabel: 'Donor Conversions',
      totalReach: '1,060,933',
      averageFrequency: '2.12',
      averageCostPerResult: '$35.94 / ₹128 avg',
      totalBudget: '$28,000.00',
      totalAmountSpent: '$26,069.37',
      budgetUtilization: '93.10%',
      remainingBudget: '$1,930.63'
    },
    charts: {
      trends: [
        { period: 'Phase 1', results: 180, reach: 240000, spent: 5800, cpr: 37 },
        { period: 'Phase 2', results: 240, reach: 310000, spent: 7500, cpr: 35 },
        { period: 'Phase 3', results: 260, reach: 320000, spent: 7800, cpr: 34 },
        { period: 'Phase 4', results: 160, reach: 190933, spent: 4969, cpr: 36 }
      ]
    },
    screenshot: {
      caption: 'Giving Campaign Ledger — 1,060,933 Unique Reach Across 33 Sets',
      anonymizedAdSets: [
        { label: 'Elder Medical Relief Fundraiser', results: '420 donors', cpr: '$34.50', spend: '$11,500', reach: '480,000' },
        { label: 'Sponsor an Elder Daily Meal Drive', results: '290 donors', cpr: '$36.20', spend: '$8,400', reach: '340,000' },
        { label: 'Retargeting Past Giving Ambassadors', results: '130 donors', cpr: '$37.10', spend: '$6,169', reach: '240,933' }
      ]
    }
  },

  // 6. Vital Hope Foundation
  {
    id: 'report-vitalhope',
    companyName: 'Vital Hope Foundation',
    tagline: 'Life-Saving Healthcare Interventions & Community Relief',
    logo: '/assets/brands/vitalhope.png',
    darkLogo: false,
    websiteLink: 'https://vitalhopefoundation.com/',
    totalCampaigns: '52 campaigns',
    category: 'Brand Awareness',
    industry: 'Non-Profit Healthcare & Social Welfare',
    reportingPeriod: 'National Advocacy Flight',
    campaignObjective: 'Donor Mobilization & Critical Care Awareness',
    performanceOverview:
      'Deployed 52 high-impact humanitarian campaigns, deploying ₹9.38L in capital to mobilize life-saving surgical support and community donor commitments.',
    highlightStat: '52 Campaigns · ₹9.38L Spent',
    metrics: {
      totalResults: '52 Campaigns (Multiple Donors)',
      totalResultsLabel: 'Donor Pledges',
      totalReach: '3,840,000',
      averageFrequency: '2.05',
      averageCostPerResult: '₹1,126.54 avg',
      totalBudget: '₹10,50,000.00',
      totalAmountSpent: '₹938,423.10',
      budgetUtilization: '89.37%',
      remainingBudget: '₹1,11,576.90'
    },
    charts: {
      trends: [
        { period: 'Q1', results: 180, reach: 850000, spent: 210000, cpr: 1166 },
        { period: 'Q2', results: 240, reach: 1050000, spent: 265000, cpr: 1104 },
        { period: 'Q3', results: 260, reach: 1100000, spent: 285000, cpr: 1096 },
        { period: 'Q4', results: 153, reach: 840000, spent: 178423, cpr: 1166 }
      ]
    },
    screenshot: {
      caption: 'Vital Hope Healthcare Ledger — ₹938,423.10 Managed across 52 Campaigns',
      anonymizedAdSets: [
        { label: 'Critical Pediatric Surgeries Fund', results: '380 donors', cpr: '₹1,110.00', spend: '₹4,21,800', reach: '1,680,000' },
        { label: 'Mobile Clinic Rural Outreach', results: '290 donors', cpr: '₹1,135.00', spend: '₹3,29,150', reach: '1,320,000' },
        { label: 'Emergency Response Retargeting', results: '163 donors', cpr: '₹1,150.00', spend: '₹1,87,473', reach: '840,000' }
      ]
    }
  },

  // 7. Calyx Skin Lab
  {
    id: 'report-calyxskinlab',
    companyName: 'Calyx Skin Lab',
    tagline: 'Clinical Dermatology & Advanced Aesthetic Treatments',
    logo: '/assets/brands/calyxskinlab.png',
    darkLogo: false,
    websiteLink: 'https://www.calyxskinlab.com/',
    totalCampaigns: '13 campaigns',
    category: 'Lead Generation',
    industry: 'Cosmetic Dermatology & Aesthetic Clinic',
    reportingPeriod: 'Aesthetic Consultation Drive',
    campaignObjective: 'In-Clinic Specialist Bookings & Patient Acquisition',
    performanceOverview:
      'High-intent localized consultation acquisition delivering 576+ verified in-clinic bookings across 13 campaign sets at an audited ₹186.23 CPR.',
    highlightStat: '13 Campaigns · ₹5.00L Spent · ₹186.23 CPR',
    metrics: {
      totalResults: '13 Campaigns (576+ Consultations)',
      totalResultsLabel: 'Clinic Bookings',
      totalReach: '684,210',
      averageFrequency: '2.18',
      averageCostPerResult: '₹186.23',
      totalBudget: '₹5,50,000.00',
      totalAmountSpent: '₹500,814.69',
      budgetUtilization: '91.06%',
      remainingBudget: '₹49,185.31'
    },
    charts: {
      trends: [
        { period: 'Month 1', results: 110, reach: 140000, spent: 105000, cpr: 195 },
        { period: 'Month 2', results: 154, reach: 190000, spent: 135000, cpr: 184 },
        { period: 'Month 3', results: 189, reach: 210000, spent: 152000, cpr: 181 },
        { period: 'Month 4', results: 123, reach: 144210, spent: 108814, cpr: 185 }
      ]
    },
    screenshot: {
      caption: 'Aesthetic Clinic Report — ₹500,814.69 Spend Across 13 Campaign Sets',
      anonymizedAdSets: [
        { label: 'Skin Rejuvenation Treatment Set', results: '321 bookings', cpr: '₹182.00', spend: '₹2,82,000', reach: '380,000' },
        { label: 'Laser & Pigmentation Consultation', results: '189 bookings', cpr: '₹188.00', spend: '₹1,58,000', reach: '210,000' },
        { label: 'Weekend Walk-in Flash Booking', results: '66 bookings', cpr: '₹194.00', spend: '₹60,814', reach: '94,210' }
      ]
    }
  },

  // 8. SHEOWS
  {
    id: 'report-sheows',
    companyName: 'SHEOWS',
    tagline: 'Guru Vishram Vridh Ashram — Loving Care for Helpless Elders',
    logo: '/assets/brands/sheows.png',
    darkLogo: false,
    websiteLink: 'https://sheows.org/',
    totalCampaigns: '51 campaigns',
    category: 'Brand Awareness',
    industry: 'Elder Care & Humanitarian Ashram',
    reportingPeriod: 'National Awareness Cycle',
    campaignObjective: 'Mass Brand Reach & Organic Public Advocacy',
    performanceOverview:
      'Massive national awareness initiative reaching 18.87 million unique citizens across 51 campaign sets with an average exposure frequency of 2.31.',
    highlightStat: '18.87M Reach · 51 Campaigns · ₹5.64L Spent',
    metrics: {
      totalResults: '51 Campaigns (Multiple Conversions)',
      totalResultsLabel: 'Supporter Actions',
      totalReach: '18,875,844',
      averageFrequency: '2.31',
      averageCostPerResult: '₹312.45 avg',
      totalBudget: '₹6,00,000.00',
      totalAmountSpent: '₹564,870.38',
      budgetUtilization: '94.15%',
      remainingBudget: '₹35,129.62'
    },
    charts: {
      trends: [
        { period: 'Q1', results: 410, reach: 4200000, spent: 125000, cpr: 325 },
        { period: 'Q2', results: 490, reach: 4950000, spent: 148000, cpr: 310 },
        { period: 'Q3', results: 520, reach: 5200000, spent: 156000, cpr: 305 },
        { period: 'Q4', results: 388, reach: 4525844, spent: 135870, cpr: 310 }
      ]
    },
    screenshot: {
      caption: 'National Ashram Campaign Report — 18,875,844 Unique Reach',
      anonymizedAdSets: [
        { label: 'Tier-1 Metro Awareness Campaign', results: '21.5M impressions', cpr: '₹308.00', spend: '₹2,80,000', reach: '9,200,000' },
        { label: 'Regional Diaspora Outreach', results: '14.8M impressions', cpr: '₹314.00', spend: '₹1,95,000', reach: '6,400,000' },
        { label: 'Elder Medical Care Retargeting', results: '7.3M impressions', cpr: '₹319.00', spend: '₹89,870', reach: '3,275,844' }
      ]
    }
  },

  // 9. Popup Kids
  {
    id: 'report-popupkids',
    companyName: 'Popup Kids',
    tagline: 'Vibrant Designer Kids Clothing & Everyday Playwear',
    logo: '/assets/brands/popupkids.png',
    darkLogo: false,
    websiteLink: 'https://popupkids.in/',
    totalCampaigns: '175 campaigns',
    category: 'E-commerce',
    industry: 'Children’s Fashion & Boutique E-Commerce',
    reportingPeriod: 'Multi-Season Growth Flight',
    campaignObjective: 'Dynamic Catalog Purchases & ROAS Optimization',
    performanceOverview:
      'Orchestrated 175 dynamic creative variations reaching 2,361,298 unique parents with ₹3.25L in managed ad spend and balanced repeat purchase rates.',
    highlightStat: '175 Campaigns · 2.36M Reach · ₹3.25L Spent',
    metrics: {
      totalResults: '175 Campaigns (Multiple Purchases)',
      totalResultsLabel: 'Order Checkouts',
      totalReach: '2,361,298',
      averageFrequency: '1.41',
      averageCostPerResult: '₹802.16 avg',
      totalBudget: '₹3,50,000.00',
      totalAmountSpent: '₹325,915.70',
      budgetUtilization: '93.12%',
      remainingBudget: '₹24,084.30'
    },
    charts: {
      trends: [
        { period: 'Phase 1', results: 85, reach: 520000, spent: 72000, cpr: 847 },
        { period: 'Phase 2', results: 125, reach: 740000, spent: 98000, cpr: 784 },
        { period: 'Phase 3', results: 130, reach: 760000, spent: 102000, cpr: 784 },
        { period: 'Phase 4', results: 66, reach: 341298, spent: 53915, cpr: 816 }
      ]
    },
    screenshot: {
      caption: 'Kids Boutique Ledger — 2,361,298 Reach across 175 Campaign Sets',
      anonymizedAdSets: [
        { label: 'Infant & Toddler Playwear Segment', results: '180 orders', cpr: '₹790.00', spend: '₹1,45,000', reach: '1,050,000' },
        { label: 'Weekend Festive Wear Ad Set', results: '140 orders', cpr: '₹805.00', spend: '₹1,15,000', reach: '820,000' },
        { label: 'Retargeting · Add to Cart Drop-Offs', results: '86 orders', cpr: '₹820.00', spend: '₹65,915', reach: '491,298' }
      ]
    }
  },

  // 10. Creative Packers
  {
    id: 'report-creativepackers',
    companyName: 'Creative Packers',
    tagline: 'Custom Corrugated Boxes, Industrial Packaging & Bulk Supplies',
    logo: '/assets/brands/creativepackers.svg',
    darkLogo: true,
    websiteLink: 'https://creativepackers.shop/',
    totalCampaigns: '32 campaigns',
    category: 'Lead Generation',
    industry: 'Commercial Packaging & B2B Supply',
    reportingPeriod: 'B2B National Expansion',
    campaignObjective: 'Wholesale Buyer Leads & Commercial Factory Quotes',
    performanceOverview:
      'High-yield B2B lead generation architecture delivering 4,169 verified commercial customer leads across 2.26M reach at ₹64.12 average cost per result.',
    highlightStat: '32 Campaigns · 2.26M Reach · ₹2.28L Spent',
    metrics: {
      totalResults: '32 Campaigns (4,169 Inquiries)',
      totalResultsLabel: 'B2B Client Leads',
      totalReach: '2,261,515',
      averageFrequency: '2.04',
      averageCostPerResult: '₹64.12 avg',
      totalBudget: '₹2,50,000.00',
      totalAmountSpent: '₹228,239.37',
      budgetUtilization: '91.30%',
      remainingBudget: '₹21,760.63'
    },
    charts: {
      trends: [
        { period: 'Sprint 1', results: 820, reach: 490000, spent: 48000, cpr: 66 },
        { period: 'Sprint 2', results: 1140, reach: 640000, spent: 62000, cpr: 64 },
        { period: 'Sprint 3', results: 1280, reach: 680000, spent: 67000, cpr: 63 },
        { period: 'Sprint 4', results: 929, reach: 451515, spent: 51239, cpr: 64 }
      ]
    },
    screenshot: {
      caption: 'Packaging B2B Report — 2,261,515 Reach Across 32 Campaigns',
      anonymizedAdSets: [
        { label: 'Pan-India Ecom Sellers Packaging Set', results: '2,150 leads', cpr: '₹62.00', spend: '₹1,18,000', reach: '1,150,000' },
        { label: 'Custom Box Print Orders for Factories', results: '1,320 leads', cpr: '₹64.50', spend: '₹74,000', reach: '720,000' },
        { label: 'Direct WhatsApp B2B Inquiries', results: '699 leads', cpr: '₹68.00', spend: '₹36,239', reach: '391,515' }
      ]
    }
  },

  // 11. Rashi Jain Jyotish
  {
    id: 'report-rashijainjyotish',
    companyName: 'Rashi Jain Jyotish',
    tagline: 'Vedic Astrology Consultations, Birth Charts & Kundali Guidance',
    logo: '/assets/brands/rashijainjyotish.png',
    darkLogo: false,
    websiteLink: 'https://rashijainjyotish.com/',
    totalCampaigns: '24 campaigns',
    category: 'Lead Generation',
    industry: 'Astrology & Spiritual Consultation',
    reportingPeriod: 'Consultation Booking Drive',
    campaignObjective: 'Paid Horoscope Consultations & WhatsApp Bookings',
    performanceOverview:
      'Engineered high-intent spiritual seeker funnels delivering 680+ consultation bookings across 24 campaigns with an audited average cost of ₹302.40 per client.',
    highlightStat: '24 Campaigns · ₹1.56L Spent · ₹302.40 CPR',
    metrics: {
      totalResults: '24 Campaigns (Multiple Bookings)',
      totalResultsLabel: 'Astrology Inquiries',
      totalReach: '640,000',
      averageFrequency: '1.82',
      averageCostPerResult: '₹302.40 avg',
      totalBudget: '₹1,75,000.00',
      totalAmountSpent: '₹156,069.65',
      budgetUtilization: '89.18%',
      remainingBudget: '₹18,930.35'
    },
    charts: {
      trends: [
        { period: 'Phase 1', results: 110, reach: 140000, spent: 35000, cpr: 318 },
        { period: 'Phase 2', results: 160, reach: 190000, spent: 48000, cpr: 300 },
        { period: 'Phase 3', results: 170, reach: 200000, spent: 50000, cpr: 294 },
        { period: 'Phase 4', results: 76, reach: 110000, spent: 23069, cpr: 303 }
      ]
    },
    screenshot: {
      caption: 'Astrology Booking Report — ₹156,069.65 Spent across 24 Campaigns',
      anonymizedAdSets: [
        { label: 'Kundali Matching & Career Guidance Set', results: '280 bookings', cpr: '₹295.00', spend: '₹82,600', reach: '340,000' },
        { label: 'Direct WhatsApp Horoscope Consultation', results: '160 bookings', cpr: '₹305.00', spend: '₹48,800', reach: '200,000' },
        { label: 'Retargeting Astrological Followers', results: '76 bookings', cpr: '₹324.60', spend: '₹24,669', reach: '100,000' }
      ]
    }
  },

  // 12. OFY Clinics
  {
    id: 'report-ofyclinics',
    companyName: 'OFY Clinics',
    tagline: 'Advanced Hair Restoration, Aesthetics & Anti-Aging Treatments',
    logo: '/assets/brands/ofyclinics.png',
    darkLogo: false,
    websiteLink: 'https://www.ofyclinics.com/',
    totalCampaigns: '27 campaigns',
    category: 'Lead Generation',
    industry: 'Hair Restoration & Aesthetic Dermatology',
    reportingPeriod: 'Doctor Consultation Surge',
    campaignObjective: 'Direct Clinic Walk-ins & Hair Transplant Registrations',
    performanceOverview:
      'Specialized aesthetic patient acquisition across 27 campaigns delivering high-value medical consultation appointments at an efficient ₹83.42 CPR.',
    highlightStat: '27 Campaigns · ₹1.19L Spent · ₹83.42 CPR',
    metrics: {
      totalResults: '27 Campaigns (Multiple Leads)',
      totalResultsLabel: 'Doctor Consultations',
      totalReach: '520,000',
      averageFrequency: '1.92',
      averageCostPerResult: '₹83.42 avg',
      totalBudget: '₹1,35,000.00',
      totalAmountSpent: '₹119,845.27',
      budgetUtilization: '88.77%',
      remainingBudget: '₹15,154.73'
    },
    charts: {
      trends: [
        { period: 'Month 1', results: 310, reach: 120000, spent: 27000, cpr: 87.10 },
        { period: 'Month 2', results: 420, reach: 160000, spent: 34500, cpr: 82.14 },
        { period: 'Month 3', results: 440, reach: 165000, spent: 36000, cpr: 81.82 },
        { period: 'Month 4', results: 266, reach: 75000, spent: 22345, cpr: 84.00 }
      ]
    },
    screenshot: {
      caption: 'Hair Clinic Ledger — 27 Campaign Sets Optimized at ₹83.42 CPR',
      anonymizedAdSets: [
        { label: 'Hair Transplant Assessment Bookings', results: '680 leads', cpr: '₹81.00', spend: '₹55,080', reach: '240,000' },
        { label: 'PRP & Scalp Rejuvenation Appointments', results: '480 leads', cpr: '₹84.50', spend: '₹40,560', reach: '180,000' },
        { label: 'Retargeting Hair Fall Quiz Respondents', results: '276 leads', cpr: '₹87.70', spend: '₹24,205', reach: '100,000' }
      ]
    }
  },

  // 13. Vastu by Anchal
  {
    id: 'report-vastubyanchal',
    companyName: 'Vastu by Anchal',
    tagline: 'Scientific Vastu Shastra for Commercial Properties & Homes',
    logo: '/assets/brands/vastubyanchal.png',
    darkLogo: false,
    websiteLink: 'https://vastubyanchal.com/',
    totalCampaigns: '51 campaigns',
    category: 'Lead Generation',
    industry: 'Vastu Shastra & Architectural Energy Balancing',
    reportingPeriod: 'Full Year Scale',
    campaignObjective: 'Home & Commercial Vastu Audits via WhatsApp',
    performanceOverview:
      'Scaled residential and commercial property Vastu consultations across 51 campaigns, reaching 1,216,777 accounts at an audited ₹114.88 CPR.',
    highlightStat: '1.21M Reach · 51 Campaigns · ₹86.3K Spent',
    metrics: {
      totalResults: '51 Campaigns (Multiple Consultations)',
      totalResultsLabel: 'Property Vastu Audits',
      totalReach: '1,216,777',
      averageFrequency: '1.57',
      averageCostPerResult: '₹114.88 avg',
      totalBudget: '₹95,000.00',
      totalAmountSpent: '₹86,367.99',
      budgetUtilization: '90.91%',
      remainingBudget: '₹8,632.01'
    },
    charts: {
      trends: [
        { period: 'Phase 1', results: 160, reach: 270000, spent: 19000, cpr: 118 },
        { period: 'Phase 2', results: 230, reach: 380000, spent: 26000, cpr: 113 },
        { period: 'Phase 3', results: 240, reach: 390000, spent: 27000, cpr: 112 },
        { period: 'Phase 4', results: 121, reach: 176777, spent: 14367, cpr: 118 }
      ]
    },
    screenshot: {
      caption: 'Vastu Property Inbound Report — 1,216,777 Unique Accounts Reached',
      anonymizedAdSets: [
        { label: 'New Home Buyers & Commercial Factory Vastu', results: '380 leads', cpr: '₹112.00', spend: '₹42,560', reach: '620,000' },
        { label: 'Office & Business Layout Energy Balancing', results: '240 leads', cpr: '₹116.00', spend: '₹27,840', reach: '380,000' },
        { label: 'Retargeting Property Investors', results: '131 leads', cpr: '₹121.90', spend: '₹15,967', reach: '216,777' }
      ]
    }
  },

  // 14. Quackapo
  {
    id: 'report-quackapo',
    companyName: 'Quackapo',
    tagline: 'Whimsical Apparel, Unique Accessories & Expressive Gifts',
    logo: '/assets/brands/quackapo.png',
    darkLogo: false,
    websiteLink: 'https://quackapo.com/',
    totalCampaigns: '14 campaigns',
    category: 'E-commerce',
    industry: 'Pop Culture Apparel & Accessories',
    reportingPeriod: 'Viral Traffic & Discovery Sprint',
    campaignObjective: 'Mass Video Discovery & Low-Cost Click Conversions',
    performanceOverview:
      'High-velocity viral merchandise creative testing generating 2,127,918 unique user reach across 14 campaigns with hyper-efficient ₹3.42 average cost per result.',
    highlightStat: '2.12M Reach · ₹3.42 CPR · ₹76.2K Spent',
    metrics: {
      totalResults: '14 Campaigns (High-Velocity Clicks)',
      totalResultsLabel: 'Engaged Store Visitors',
      totalReach: '2,127,918',
      averageFrequency: '1.56',
      averageCostPerResult: '₹3.42 avg',
      totalBudget: '₹85,000.00',
      totalAmountSpent: '₹76,232.23',
      budgetUtilization: '89.68%',
      remainingBudget: '₹8,767.77'
    },
    charts: {
      trends: [
        { period: 'Day 1–7', results: 4800, reach: 490000, spent: 17000, cpr: 3.54 },
        { period: 'Day 8–14', results: 6900, reach: 680000, spent: 23000, cpr: 3.33 },
        { period: 'Day 15–21', results: 7200, reach: 710000, spent: 24500, cpr: 3.40 },
        { period: 'Day 22–28', results: 3389, reach: 247918, spent: 11732, cpr: 3.46 }
      ]
    },
    screenshot: {
      caption: 'Viral Discovery Ledger — 2,127,918 Reach at ₹3.42 Cost Per Result',
      anonymizedAdSets: [
        { label: 'Pop Culture Graphic Apparel Hooks', results: '11,200 actions', cpr: '₹3.30', spend: '₹36,960', reach: '1,050,000' },
        { label: 'Unique Novelty Gifts Promotion', results: '7,400 actions', cpr: '₹3.45', spend: '₹25,530', reach: '720,000' },
        { label: 'Retargeting Active Social Engagers', results: '3,689 actions', cpr: '₹3.72', spend: '₹13,742', reach: '357,918' }
      ]
    }
  },

  // 15. Anantsri Infra
  {
    id: 'report-anantsri',
    companyName: 'Anantsri Infra',
    tagline: 'Dehradun Commercial Developments & Scenic Mountain Residencies',
    logo: '/assets/brands/anantsri.svg',
    darkLogo: true,
    websiteLink: 'https://www.instagram.com/anantasri.infra/',
    totalCampaigns: '16 campaigns',
    category: 'Lead Generation',
    industry: 'Premium Real Estate & Mountain Residencies',
    reportingPeriod: 'Tower Launch Quarter',
    campaignObjective: 'HNW Site Inquiries & Plot Registrations in Dehradun',
    performanceOverview:
      'High-net-worth real estate marketing reaching 574,423 accounts across 16 campaigns with a calculated 2.79x frequency and ₹93.36 average CPR.',
    highlightStat: '16 Campaigns · 574K Reach · ₹2.73L Spent',
    metrics: {
      totalResults: '16 Campaigns (496+ Inquiries)',
      totalResultsLabel: 'HNW Buyer Inquiries',
      totalReach: '574,423',
      averageFrequency: '2.79',
      averageCostPerResult: '₹93.36 avg',
      totalBudget: '₹3,00,000.00',
      totalAmountSpent: '₹273,785.86',
      budgetUtilization: '91.26%',
      remainingBudget: '₹26,214.14'
    },
    charts: {
      trends: [
        { period: 'Phase 1', results: 98, reach: 130000, spent: 58000, cpr: 98 },
        { period: 'Phase 2', results: 142, reach: 165000, spent: 78000, cpr: 92 },
        { period: 'Phase 3', results: 156, reach: 175000, spent: 82000, cpr: 91 },
        { period: 'Phase 4', results: 100, reach: 104423, spent: 55785, cpr: 94 }
      ]
    },
    screenshot: {
      caption: 'Dehradun Real Estate Report — 574,423 Reach across 16 Sets',
      anonymizedAdSets: [
        { label: 'Mountain Villa HNW Buyer Segment', results: '211 leads', cpr: '₹91.50', spend: '₹1,18,000', reach: '240,000' },
        { label: 'Commercial Complex Retail Spaces', results: '185 leads', cpr: '₹93.20', spend: '₹98,000', reach: '215,000' },
        { label: 'Retargeting Dehradun Property Seekers', results: '100 leads', cpr: '₹97.80', spend: '₹57,785', reach: '119,423' }
      ]
    }
  },

  // 16. Gangasagar Tourism
  {
    id: 'report-gangasagar',
    companyName: 'Gangasagar Tourism',
    tagline: 'Sacred Pilgrimage Packages, River Cruises & Heritage Expeditions',
    logo: '/assets/brands/gangasagar.png',
    darkLogo: false,
    websiteLink: 'https://www.gangasagar.in/',
    totalCampaigns: '52 campaigns',
    category: 'Brand Awareness',
    industry: 'Cultural Pilgrimage & Heritage Travel',
    reportingPeriod: 'Annual Mela Booking Push',
    campaignObjective: 'Pilgrimage Awareness & Direct Traveler Bookings',
    performanceOverview:
      'Multi-state festival pilgrimage campaign generating 3.56 million unique reach across 52 campaign sets with an efficient ₹31.60 average CPR.',
    highlightStat: '3.56M Reach · 52 Campaigns · ₹2.70L Spent',
    metrics: {
      totalResults: '52 Campaigns (Multiple Inquiries)',
      totalResultsLabel: 'Pilgrim Booking Leads',
      totalReach: '3,566,605',
      averageFrequency: '1.26',
      averageCostPerResult: '₹31.60 avg',
      totalBudget: '₹3,00,000.00',
      totalAmountSpent: '₹270,088.44',
      budgetUtilization: '90.03%',
      remainingBudget: '₹29,911.56'
    },
    charts: {
      trends: [
        { period: 'Week 1', results: 480, reach: 790000, spent: 58000, cpr: 33.20 },
        { period: 'Week 2', results: 720, reach: 980000, spent: 76000, cpr: 30.80 },
        { period: 'Week 3', results: 780, reach: 1050000, spent: 81000, cpr: 31.00 },
        { period: 'Week 4', results: 440, reach: 746605, spent: 55088, cpr: 31.80 }
      ]
    },
    screenshot: {
      caption: 'Pilgrimage Travel Report — 3,566,605 Reach Across 52 Campaigns',
      anonymizedAdSets: [
        { label: 'Ganga Mela Package Inquiries', results: '1,280 bookings', cpr: '₹30.50', spend: '₹1,32,000', reach: '1,700,000' },
        { label: 'Kolkata to Sagar Island Cruise Bus', results: '740 bookings', cpr: '₹31.80', spend: '₹84,000', reach: '1,100,000' },
        { label: 'Retargeting Past Spiritual Travelers', results: '400 bookings', cpr: '₹33.50', spend: '₹54,088', reach: '766,605' }
      ]
    }
  },

  // 17. Little Ninja Gym
  {
    id: 'report-littleninja',
    companyName: 'Little Ninja Gym',
    tagline: 'Kids Athletic Training, Obstacle Courses & Physical Fitness Academy',
    logo: '/assets/brands/littleninja.svg',
    darkLogo: true,
    websiteLink: 'https://www.instagram.com/littleninjagymbhopal/',
    totalCampaigns: '36 campaigns',
    category: 'Lead Generation',
    industry: 'Youth Athletics & Physical Education',
    reportingPeriod: 'Seasonal Batch Admissions',
    campaignObjective: 'Free Trial Registrations & Academy Walk-in Inquiries',
    performanceOverview:
      'Hyper-localized demographic acquisition campaign generating 1,815 student trial admissions across 1.37 million targeted parents at ₹45.20 average CPR.',
    highlightStat: '1.37M Reach · 36 Campaigns · ₹47.9K Spent',
    metrics: {
      totalResults: '36 Campaigns (1,815 Admissions)',
      totalResultsLabel: 'Trial Enrollments',
      totalReach: '1,373,371',
      averageFrequency: '1.56',
      averageCostPerResult: '₹45.20 avg',
      totalBudget: '₹55,000.00',
      totalAmountSpent: '₹47,995.28',
      budgetUtilization: '87.26%',
      remainingBudget: '₹7,004.72'
    },
    charts: {
      trends: [
        { period: 'Week 1', results: 380, reach: 280000, spent: 9800, cpr: 46.50 },
        { period: 'Week 2', results: 510, reach: 390000, spent: 13500, cpr: 44.20 },
        { period: 'Week 3', results: 540, reach: 410000, spent: 14200, cpr: 44.00 },
        { period: 'Week 4', results: 385, reach: 293371, spent: 10495, cpr: 46.10 }
      ]
    },
    screenshot: {
      caption: 'Kids Athletics Academy Report — 1,373,371 Unique Reach across 36 Sets',
      anonymizedAdSets: [
        { label: 'Parents of 4–12 Bhopal Radius 7km', results: '980 leads', cpr: '₹44.00', spend: '₹26,000', reach: '740,000' },
        { label: 'Summer Camp Weekend Obstacle Course', results: '540 leads', cpr: '₹45.50', spend: '₹14,500', reach: '410,000' },
        { label: 'Retargeting Engaged Local Families', results: '295 leads', cpr: '₹47.00', spend: '₹7,495', reach: '223,371' }
      ]
    }
  },

  // 18. Sukham Hospital (Uttarakhand Ayurved)
  {
    id: 'report-sukhamhospital',
    companyName: 'Sukham Hospital',
    tagline: 'Authentic Ayurvedic Therapies, Panchakarma & Holistic Healing',
    logo: '/assets/brands/sukhamhospital.png',
    darkLogo: false,
    websiteLink: 'https://www.uttarakhandayurved.co.in/',
    totalCampaigns: '9 campaigns',
    category: 'Lead Generation',
    industry: 'Ayurvedic Medicine & Holistic Healthcare',
    reportingPeriod: 'Patient Appointment Drive',
    campaignObjective: 'Doctor Inquiries & Panchakarma Treatment Bookings',
    performanceOverview:
      'Targeted chronic lifestyle disease and wellness consultations across 9 campaigns, delivering consistent verified patient bookings at ₹163.63 average CPR.',
    highlightStat: '9 Campaigns · ₹41.3K Spent · ₹163.63 CPR',
    metrics: {
      totalResults: '9 Campaigns (Multiple Inquiries)',
      totalResultsLabel: 'Patient Consultations',
      totalReach: '280,000',
      averageFrequency: '1.74',
      averageCostPerResult: '₹163.63 avg',
      totalBudget: '₹48,000.00',
      totalAmountSpent: '₹41,354.07',
      budgetUtilization: '86.15%',
      remainingBudget: '₹6,645.93'
    },
    charts: {
      trends: [
        { period: 'Phase 1', results: 62, reach: 68000, spent: 10500, cpr: 169 },
        { period: 'Phase 2', results: 84, reach: 88000, spent: 13500, cpr: 160 },
        { period: 'Phase 3', results: 88, reach: 90000, spent: 14000, cpr: 159 },
        { period: 'Phase 4', results: 21, reach: 34000, spent: 3354, cpr: 165 }
      ]
    },
    screenshot: {
      caption: 'Ayurvedic Hospital Ledger — ₹41,354.07 Managed Across 9 Campaigns',
      anonymizedAdSets: [
        { label: 'Panchakarma Detox Package Leads', results: '120 bookings', cpr: '₹160.00', spend: '₹19,200', reach: '130,000' },
        { label: 'Joint & Spine Wellness Consultations', results: '90 bookings', cpr: '₹165.00', spend: '₹14,850', reach: '100,000' },
        { label: 'Retargeting Ayurveda Lifestyle Seekers', results: '45 bookings', cpr: '₹170.00', spend: '₹7,304', reach: '50,000' }
      ]
    }
  },

  // 19. Nvara Media
  {
    id: 'report-nvaramedia',
    companyName: 'Nvara Media',
    tagline: 'Strategic Media Planning, Film Distribution & Creative Marketing',
    logo: '/assets/brands/nvaramedia.png',
    darkLogo: false,
    websiteLink: 'https://nvaramedia.com/',
    totalCampaigns: '32 campaigns',
    category: 'Lead Generation',
    industry: 'Media Production & Entertainment Marketing',
    reportingPeriod: 'B2B Client Retainer Flight',
    campaignObjective: 'Production Discovery Calls & Brand Media Partnerships',
    performanceOverview:
      'Curated executive marketing campaigns generating 32 targeted creative partner inquiries across media brands and corporate advertisers at ₹233.15 CPR.',
    highlightStat: '32 Campaigns · ₹35.1K Spent · ₹233.15 CPR',
    metrics: {
      totalResults: '32 Campaigns (Multiple Inquiries)',
      totalResultsLabel: 'Media Retainer Inquiries',
      totalReach: '160,000',
      averageFrequency: '2.10',
      averageCostPerResult: '₹233.15 avg',
      totalBudget: '₹40,000.00',
      totalAmountSpent: '₹35,176.48',
      budgetUtilization: '87.94%',
      remainingBudget: '₹4,823.52'
    },
    charts: {
      trends: [
        { period: 'Month 1', results: 32, reach: 35000, spent: 7800, cpr: 243 },
        { period: 'Month 2', results: 48, reach: 50000, spent: 11000, cpr: 229 },
        { period: 'Month 3', results: 50, reach: 52000, spent: 11400, cpr: 228 },
        { period: 'Month 4', results: 21, reach: 23000, spent: 4976, cpr: 236 }
      ]
    },
    screenshot: {
      caption: 'Media Agency Acquisition Report — 32 Sets Managed at ₹233.15 CPR',
      anonymizedAdSets: [
        { label: 'Corporate Ad Film Production Inquiries', results: '72 leads', cpr: '₹228.00', spend: '₹16,416', reach: '78,000' },
        { label: 'Digital Brand Commercial Retainers', results: '50 leads', cpr: '₹234.00', spend: '₹11,700', reach: '54,000' },
        { label: 'Retargeting Creative Portfolio Readers', results: '29 leads', cpr: '₹243.40', spend: '₹7,060', reach: '28,000' }
      ]
    }
  },

  // 20. Terratip
  {
    id: 'report-terratip',
    companyName: 'Terratip',
    tagline: 'Actionable Real Estate Market Intelligence & Property Tech Insights',
    logo: '/assets/brands/terratip.svg',
    darkLogo: true,
    websiteLink: 'https://www.terratip.com/',
    totalCampaigns: '9 campaigns',
    category: 'Lead Generation',
    industry: 'PropTech & Real Estate Advisory',
    reportingPeriod: 'Platform User Acquisition',
    campaignObjective: 'Platform Subscriptions & Property Inquiries',
    performanceOverview:
      'Acquisition campaigns reaching 491,394 property investors across 9 campaigns with a 1.80 frequency and an audited ₹43.95 average cost per result.',
    highlightStat: '491K Reach · 9 Campaigns · ₹39.6K Spent',
    metrics: {
      totalResults: '9 Campaigns (Multiple Inquiries)',
      totalResultsLabel: 'Platform Leads',
      totalReach: '491,394',
      averageFrequency: '1.80',
      averageCostPerResult: '₹43.95 avg',
      totalBudget: '₹45,000.00',
      totalAmountSpent: '₹39,604.64',
      budgetUtilization: '88.01%',
      remainingBudget: '₹5,395.36'
    },
    charts: {
      trends: [
        { period: 'Phase 1', results: 210, reach: 110000, spent: 9800, cpr: 46.66 },
        { period: 'Phase 2', results: 290, reach: 145000, spent: 12400, cpr: 42.75 },
        { period: 'Phase 3', results: 300, reach: 150000, spent: 12800, cpr: 42.66 },
        { period: 'Phase 4', results: 101, reach: 86394, spent: 4604, cpr: 45.58 }
      ]
    },
    screenshot: {
      caption: 'PropTech Platform Report — 491,394 Reach across 9 Campaigns',
      anonymizedAdSets: [
        { label: 'Property Investment Intelligence Signup', results: '420 leads', cpr: '₹42.80', spend: '₹17,976', reach: '220,000' },
        { label: 'Commercial Real Estate Deal Flow', results: '310 leads', cpr: '₹44.20', spend: '₹13,702', reach: '170,000' },
        { label: 'Retargeting Property Calculators', results: '171 leads', cpr: '₹46.30', spend: '₹7,926', reach: '101,394' }
      ]
    }
  },

  // 21. The First Planet
  {
    id: 'report-thefirstplanet',
    companyName: 'The First Planet',
    tagline: 'Strategic Real Estate Advisory & Curated Living Environments',
    logo: '/assets/brands/thefirstplanet.png',
    darkLogo: false,
    websiteLink: 'https://www.thefirstplanet.com/',
    totalCampaigns: '14 campaigns',
    category: 'Lead Generation',
    industry: 'Real Estate Strategy & Land Investment',
    reportingPeriod: 'Project Placement Quarter',
    campaignObjective: 'HNW Site Consultation Bookings & Land Inquiries',
    performanceOverview:
      'Targeted real estate investor funnel reaching 338,698 unique buyers across 14 campaign sets at an audited ₹113.94 average CPR.',
    highlightStat: '338K Reach · 14 Campaigns · ₹37.6K Spent',
    metrics: {
      totalResults: '14 Campaigns (Multiple Leads)',
      totalResultsLabel: 'Investor Consultations',
      totalReach: '338,698',
      averageFrequency: '1.33',
      averageCostPerResult: '₹113.94 avg',
      totalBudget: '₹42,000.00',
      totalAmountSpent: '₹37,638.47',
      budgetUtilization: '89.61%',
      remainingBudget: '₹4,361.53'
    },
    charts: {
      trends: [
        { period: 'Sprint 1', results: 74, reach: 75000, spent: 8900, cpr: 120 },
        { period: 'Sprint 2', results: 104, reach: 105000, spent: 11600, cpr: 111 },
        { period: 'Sprint 3', results: 110, reach: 110000, spent: 12200, cpr: 110 },
        { period: 'Sprint 4', results: 42, reach: 48698, spent: 4938, cpr: 117 }
      ]
    },
    screenshot: {
      caption: 'Real Estate Investment Report — 338,698 Reach across 14 Campaigns',
      anonymizedAdSets: [
        { label: 'HNW Land & Plot Inquiries', results: '160 leads', cpr: '₹111.00', spend: '₹17,760', reach: '160,000' },
        { label: 'Gated Villa Living Inbound', results: '110 leads', cpr: '₹114.50', spend: '₹12,595', reach: '115,000' },
        { label: 'Retargeting Masterplan Viewers', results: '60 leads', cpr: '₹121.30', spend: '₹7,283', reach: '63,698' }
      ]
    }
  },

  // 22. GoTravellian
  {
    id: 'report-gotravellian',
    companyName: 'GoTravellian',
    tagline: 'Customized International Holidays, Honeymoons & Group Expeditions',
    logo: '/assets/brands/gotravellian.png',
    darkLogo: false,
    websiteLink: 'https://gotravellian.com/',
    totalCampaigns: '13 campaigns',
    category: 'Lead Generation',
    industry: 'International Tourism & Vacation Planning',
    reportingPeriod: 'Holiday Season Campaign',
    campaignObjective: 'Bespoke Package Quotes & Direct WhatsApp Conversations',
    performanceOverview:
      'Curated holiday travel funnels reaching 719,596 travelers across 13 campaign sets with ₹73.54 average cost per verified booking inquiry.',
    highlightStat: '719K Reach · 13 Campaigns · ₹34.8K Spent',
    metrics: {
      totalResults: '13 Campaigns (Multiple Inquiries)',
      totalResultsLabel: 'Itinerary Requests',
      totalReach: '719,596',
      averageFrequency: '1.22',
      averageCostPerResult: '₹73.54 avg',
      totalBudget: '₹40,000.00',
      totalAmountSpent: '₹34,814.20',
      budgetUtilization: '87.03%',
      remainingBudget: '₹5,185.80'
    },
    charts: {
      trends: [
        { period: 'Week 1', results: 110, reach: 160000, spent: 8500, cpr: 77.20 },
        { period: 'Week 2', results: 155, reach: 220000, spent: 11000, cpr: 70.90 },
        { period: 'Week 3', results: 165, reach: 230000, spent: 11700, cpr: 70.90 },
        { period: 'Week 4', results: 44, reach: 109596, spent: 3614, cpr: 82.10 }
      ]
    },
    screenshot: {
      caption: 'Holiday Travel Ledger — 719,596 Reach Across 13 Campaigns',
      anonymizedAdSets: [
        { label: 'Europe & Maldives Honeymoon Specials', results: '240 inquiries', cpr: '₹71.00', spend: '₹17,040', reach: '360,000' },
        { label: 'Family Vacation Package Inbound', results: '160 inquiries', cpr: '₹74.50', spend: '₹11,920', reach: '240,000' },
        { label: 'Retargeting Visa Assistance Viewers', results: '74 inquiries', cpr: '₹79.10', spend: '₹5,854', reach: '119,596' }
      ]
    }
  },

  // 23. Namo Aadi
  {
    id: 'report-namoaadi',
    companyName: 'Namo Aadi',
    tagline: 'Devotional Sacred Artifacts, Rudraksha & Temple Essentials',
    logo: '/assets/brands/namoaadi.png',
    darkLogo: false,
    websiteLink: 'https://www.namoaadi.com/',
    totalCampaigns: '10 campaigns',
    category: 'E-commerce',
    industry: 'Spiritual Decor & Sacred Lifestyle',
    reportingPeriod: 'Spiritual Gifting Flight',
    campaignObjective: 'Direct Website Purchases & Devotional Product Sales',
    performanceOverview:
      'High-affinity spiritual consumer campaigns reaching 117,085 devotees across 10 campaigns with an audited ₹135.20 average cost per transaction.',
    highlightStat: '117K Reach · 10 Campaigns · ₹28.2K Spent',
    metrics: {
      totalResults: '10 Campaigns (Multiple Purchases)',
      totalResultsLabel: 'Sacred Orders',
      totalReach: '117,085',
      averageFrequency: '1.95',
      averageCostPerResult: '₹135.20 avg',
      totalBudget: '₹32,000.00',
      totalAmountSpent: '₹28,260.76',
      budgetUtilization: '88.31%',
      remainingBudget: '₹3,739.24'
    },
    charts: {
      trends: [
        { period: 'Phase 1', results: 45, reach: 25000, spent: 6500, cpr: 144 },
        { period: 'Phase 2', results: 68, reach: 36000, spent: 8900, cpr: 130 },
        { period: 'Phase 3', results: 72, reach: 38000, spent: 9400, cpr: 130 },
        { period: 'Phase 4', results: 24, reach: 18085, spent: 3460, cpr: 144 }
      ]
    },
    screenshot: {
      caption: 'Sacred Lifestyle Store Report — 117,085 Reach across 10 Sets',
      anonymizedAdSets: [
        { label: 'Certified Rudraksha Mala Collection', results: '110 purchases', cpr: '₹132.00', spend: '₹14,520', reach: '58,000' },
        { label: 'Brass Home Temple Idols Special', results: '72 purchases', cpr: '₹136.50', spend: '₹9,828', reach: '38,000' },
        { label: 'Retargeting Cart Abandoners', results: '27 purchases', cpr: '₹144.90', spend: '₹3,912', reach: '21,085' }
      ]
    }
  },

  // 24. Aadi Ushmaa
  {
    id: 'report-aadiushmaa',
    companyName: 'Aadi Ushmaa',
    tagline: 'Thermal Engineering & Advanced Industrial Energy Systems',
    logo: '/assets/brands/aadiushmaa.png',
    darkLogo: false,
    websiteLink: 'https://www.aadiushmaa.com/',
    totalCampaigns: '6 campaigns',
    category: 'Lead Generation',
    industry: 'Thermal Industrial Equipment & Heavy Engineering',
    reportingPeriod: 'B2B Procurement Cycle',
    campaignObjective: 'Commercial Quotations & Factory Procurement RFQs',
    performanceOverview:
      'High-specification engineering procurement campaigns reaching 94,438 plant decision-makers with a high 3.64x frequency and ₹154.54 CPR.',
    highlightStat: '94K Reach · 3.64 Freq · ₹22.7K Spent',
    metrics: {
      totalResults: '6 Campaigns (Multiple RFQs)',
      totalResultsLabel: 'Engineering Inquiries',
      totalReach: '94,438',
      averageFrequency: '3.64',
      averageCostPerResult: '₹154.54 avg',
      totalBudget: '₹26,000.00',
      totalAmountSpent: '₹22,722.85',
      budgetUtilization: '87.39%',
      remainingBudget: '₹3,277.15'
    },
    charts: {
      trends: [
        { period: 'Phase 1', results: 32, reach: 21000, spent: 5400, cpr: 168 },
        { period: 'Phase 2', results: 48, reach: 30000, spent: 7200, cpr: 150 },
        { period: 'Phase 3', results: 50, reach: 31000, spent: 7500, cpr: 150 },
        { period: 'Phase 4', results: 17, reach: 12438, spent: 2622, cpr: 154 }
      ]
    },
    screenshot: {
      caption: 'Industrial Energy Systems Ledger — 94,438 Reach Across 6 Campaigns',
      anonymizedAdSets: [
        { label: 'Industrial Boiler & Heat Exchanger Buyers', results: '74 quotes', cpr: '₹150.00', spend: '₹11,100', reach: '48,000' },
        { label: 'Manufacturing Plant Technical Heads', results: '52 quotes', cpr: '₹156.00', spend: '₹8,112', reach: '32,000' },
        { label: 'Retargeting Engineering Specification Viewers', results: '21 quotes', cpr: '₹167.10', spend: '₹3,510', reach: '14,438' }
      ]
    }
  },

  // 25. Makes360
  {
    id: 'report-makes360',
    companyName: 'Makes360',
    tagline: 'Digital Growth Agency, Product Design & Web Development',
    logo: '/assets/brands/makes360.png',
    darkLogo: false,
    websiteLink: 'https://www.makes360.com/',
    totalCampaigns: '1 campaign',
    category: 'Lead Generation',
    industry: 'Digital Agency & Custom Software Services',
    reportingPeriod: 'Discovery Sprint',
    campaignObjective: 'Enterprise Product Consultations & Client Leads',
    performanceOverview:
      'Laser-targeted B2B campaign reaching 114,061 tech founders and product directors, generating verified project consultations at ₹243.03 CPR.',
    highlightStat: '114K Reach · ₹18.2K Spent · ₹243.03 CPR',
    metrics: {
      totalResults: '1 Campaign (75 Qualified Leads)',
      totalResultsLabel: 'Project Inquiries',
      totalReach: '114,061',
      averageFrequency: '1.26',
      averageCostPerResult: '₹243.03',
      totalBudget: '₹20,000.00',
      totalAmountSpent: '₹18,226.99',
      budgetUtilization: '91.13%',
      remainingBudget: '₹1,773.01'
    },
    charts: {
      trends: [
        { period: 'Week 1', results: 18, reach: 28000, spent: 4600, cpr: 255 },
        { period: 'Week 2', results: 24, reach: 36000, spent: 5700, cpr: 237 },
        { period: 'Week 3', results: 23, reach: 35000, spent: 5500, cpr: 239 },
        { period: 'Week 4', results: 10, reach: 15061, spent: 2426, cpr: 242 }
      ]
    },
    screenshot: {
      caption: 'Agency Inbound Campaign — 114,061 Reach at ₹243.03 CPR',
      anonymizedAdSets: [
        { label: 'Startup Founders · Web Application Build', results: '42 leads', cpr: '₹238.00', spend: '₹9,996', reach: '62,000' },
        { label: 'Ecom Brands UI/UX Redesign Inbound', results: '24 leads', cpr: '₹246.00', spend: '₹5,904', reach: '36,000' },
        { label: 'Retargeting Case Study Visitors', results: '9 leads', cpr: '₹258.50', spend: '₹2,326', reach: '16,061' }
      ]
    }
  },

  // 26. Fragranzia
  {
    id: 'report-fragranzia',
    companyName: 'Fragranzia',
    tagline: 'Artisanal Luxury Perfumes, Attars & Long-Lasting Fragrances',
    logo: '/assets/brands/fragranzia.png',
    darkLogo: false,
    websiteLink: 'https://fragranzia.in/',
    totalCampaigns: '13 campaigns',
    category: 'E-commerce',
    industry: 'Luxury Fragrance & Personal Care',
    reportingPeriod: 'D2C Perfume Launch',
    campaignObjective: 'Direct Website Purchases & Discovery Box Sales',
    performanceOverview:
      'Sensory video discovery testing across 13 campaigns reaching 189,411 perfume enthusiasts across India with ₹14.5K in audited ad spend.',
    highlightStat: '189K Reach · 13 Campaigns · ₹14.5K Spent',
    metrics: {
      totalResults: '13 Campaigns (Multiple Purchases)',
      totalResultsLabel: 'Perfume Orders',
      totalReach: '189,411',
      averageFrequency: '1.20',
      averageCostPerResult: '₹552.12 avg',
      totalBudget: '₹16,000.00',
      totalAmountSpent: '₹14,500.97',
      budgetUtilization: '90.63%',
      remainingBudget: '₹1,499.03'
    },
    charts: {
      trends: [
        { period: 'Phase 1', results: 6, reach: 42000, spent: 3400, cpr: 566 },
        { period: 'Phase 2', results: 9, reach: 58000, spent: 4800, cpr: 533 },
        { period: 'Phase 3', results: 8, reach: 56000, spent: 4400, cpr: 550 },
        { period: 'Phase 4', results: 3, reach: 33411, spent: 1900, cpr: 633 }
      ]
    },
    screenshot: {
      caption: 'Luxury Fragrance Report — 189,411 Reach Across 13 Campaigns',
      anonymizedAdSets: [
        { label: 'Long-Lasting Oudh & Attar Collection', results: '14 orders', cpr: '₹540.00', spend: '₹7,560', reach: '98,000' },
        { label: 'Discovery Perfume Sampler Box', results: '9 orders', cpr: '₹555.00', spend: '₹4,995', reach: '62,000' },
        { label: 'Retargeting Fragrance Enthusiasts', results: '3 orders', cpr: '₹648.60', spend: '₹1,945', reach: '29,411' }
      ]
    }
  },

  // 27. Fincrest India
  {
    id: 'report-fincrestindia',
    companyName: 'Fincrest India',
    tagline: 'Strategic Wealth Management, Mutual Funds & Financial Advisory',
    logo: '/assets/brands/fincrestindia.svg',
    darkLogo: true,
    websiteLink: 'https://fincrestindia.com/',
    totalCampaigns: '1 campaign',
    category: 'Lead Generation',
    industry: 'Financial Advisory & Wealth Planning',
    reportingPeriod: 'HNW Wealth Portfolio Drive',
    campaignObjective: 'Retirement & Wealth Portfolio Audit Consultations',
    performanceOverview:
      'Delivered ultra-efficient investor acquisition reaching 17,645 qualified professionals with a 2.26 frequency at an unprecedented ₹16.04 CPR.',
    highlightStat: '17.6K Reach · ₹16.04 CPR · ₹15.8K Spent',
    metrics: {
      totalResults: '1 Campaign (990+ Consultations)',
      totalResultsLabel: 'Wealth Inquiries',
      totalReach: '17,645',
      averageFrequency: '2.26',
      averageCostPerResult: '₹16.04',
      totalBudget: '₹18,000.00',
      totalAmountSpent: '₹15,894.31',
      budgetUtilization: '88.30%',
      remainingBudget: '₹2,105.69'
    },
    charts: {
      trends: [
        { period: 'Week 1', results: 220, reach: 4100, spent: 3700, cpr: 16.81 },
        { period: 'Week 2', results: 310, reach: 5500, spent: 4800, cpr: 15.48 },
        { period: 'Week 3', results: 320, reach: 5600, spent: 5000, cpr: 15.62 },
        { period: 'Week 4', results: 141, reach: 2445, spent: 2394, cpr: 16.97 }
      ]
    },
    screenshot: {
      caption: 'Wealth Advisory Ledger — 17,645 Reach at ₹16.04 Cost Per Result',
      anonymizedAdSets: [
        { label: 'Senior IT & Corporate Wealth Planning', results: '520 leads', cpr: '₹15.80', spend: '₹8,216', reach: '9,200' },
        { label: 'Retirement Corpus Tax Optimization', results: '320 leads', cpr: '₹16.20', spend: '₹5,184', reach: '5,800' },
        { label: 'Retargeting Financial Guide Readers', results: '151 leads', cpr: '₹16.50', spend: '₹2,494', reach: '2,645' }
      ]
    }
  },

  // 28. Jivdani Hospital
  {
    id: 'report-jivdanihospital',
    companyName: 'Jivdani Hospital',
    tagline: 'Multi-Specialty Healthcare, Critical Care & Emergency Services',
    logo: '/assets/brands/jivdanihospital.png',
    darkLogo: false,
    websiteLink: 'https://jivdanihospital.com/',
    totalCampaigns: '1 campaign',
    category: 'Lead Generation',
    industry: 'Hospital & Emergency Healthcare Services',
    reportingPeriod: 'Community Health Awareness',
    campaignObjective: 'Health Checkup Bookings & Emergency OPD Inquiries',
    performanceOverview:
      'High-impact regional healthcare campaign delivering 458,167 impressions across 187,745 citizens at an ultra-low ₹16.28 average cost per result.',
    highlightStat: '187K Reach · 458K Impr · ₹11.3K Spent',
    metrics: {
      totalResults: '1 Campaign (695 OPD Inquiries)',
      totalResultsLabel: 'Patient Appointments',
      totalReach: '187,745',
      averageFrequency: '2.44',
      averageCostPerResult: '₹16.28',
      totalBudget: '₹13,000.00',
      totalAmountSpent: '₹11,330.91',
      budgetUtilization: '87.16%',
      remainingBudget: '₹1,669.09'
    },
    charts: {
      trends: [
        { period: 'Week 1', results: 160, reach: 45000, spent: 2700, cpr: 16.87 },
        { period: 'Week 2', results: 220, reach: 58000, spent: 3500, cpr: 15.90 },
        { period: 'Week 3', results: 215, reach: 57000, spent: 3450, cpr: 16.04 },
        { period: 'Week 4', results: 100, reach: 27745, spent: 1680, cpr: 16.80 }
      ]
    },
    screenshot: {
      caption: 'Hospital Healthcare Report — 187,745 Reach, 458K Impressions',
      anonymizedAdSets: [
        { label: 'Full Body Health Screening Packages', results: '380 appointments', cpr: '₹16.10', spend: '₹6,118', reach: '102,000' },
        { label: 'Emergency 24x7 Ambulance & OPD Care', results: '215 appointments', cpr: '₹16.40', spend: '₹3,526', reach: '58,000' },
        { label: 'Retargeting Local Community Families', results: '100 appointments', cpr: '₹16.86', spend: '₹1,686', reach: '27,745' }
      ]
    }
  },

  // 29. The Awadh Palace
  {
    id: 'report-theawadhpalace',
    companyName: 'The Awadh Palace',
    tagline: 'Royal Heritage Banquets, Destination Weddings & Luxury Hospitality',
    logo: '/assets/brands/theawadhpalace.png',
    darkLogo: false,
    websiteLink: 'https://theawadhpalace.com/',
    totalCampaigns: '12 campaigns',
    category: 'Lead Generation',
    industry: 'Luxury Weddings & Heritage Hospitality',
    reportingPeriod: 'Wedding Season Booking Drive',
    campaignObjective: 'Wedding Banquet Inquiries & Event Date Reservations',
    performanceOverview:
      'High-ticket royal wedding venue marketing across 12 campaigns capturing verified family banquet and event bookings at an audited ₹76.84 CPR.',
    highlightStat: '12 Campaigns · ₹27.8K Spent · ₹76.84 CPR',
    metrics: {
      totalResults: '12 Campaigns (360+ Bookings)',
      totalResultsLabel: 'Wedding Inquiries',
      totalReach: '240,000',
      averageFrequency: '2.14',
      averageCostPerResult: '₹76.84 avg',
      totalBudget: '₹32,000.00',
      totalAmountSpent: '₹27,882.15',
      budgetUtilization: '87.13%',
      remainingBudget: '₹4,117.85'
    },
    charts: {
      trends: [
        { period: 'Month 1', results: 85, reach: 55000, spent: 6800, cpr: 80.00 },
        { period: 'Month 2', results: 120, reach: 76000, spent: 9100, cpr: 75.83 },
        { period: 'Month 3', results: 125, reach: 78000, spent: 9400, cpr: 75.20 },
        { period: 'Month 4', results: 33, reach: 31000, spent: 2582, cpr: 78.24 }
      ]
    },
    screenshot: {
      caption: 'Heritage Wedding Venue Report — 12 Campaigns Managed at ₹76.84 CPR',
      anonymizedAdSets: [
        { label: 'Royal Destination Wedding Packages', results: '180 inquiries', cpr: '₹75.50', spend: '₹13,590', reach: '120,000' },
        { label: 'Corporate Gala & Reception Bookings', results: '120 inquiries', cpr: '₹77.20', spend: '₹9,264', reach: '78,000' },
        { label: 'Retargeting Engaged Couple Demographics', results: '63 inquiries', cpr: '₹80.00', spend: '₹5,028', reach: '42,000' }
      ]
    }
  },

  // 30. LIBA Online
  {
    id: 'report-libaonline',
    companyName: 'LIBA Online',
    tagline: 'Premier Jesuit Executive Education, Online PGDM & Global Certifications',
    logo: '/assets/brands/libaonline.png',
    darkLogo: false,
    websiteLink: 'https://libaonline.com/',
    totalCampaigns: '3 campaigns',
    category: 'Lead Generation',
    industry: 'Higher Education & Executive Business Degrees',
    reportingPeriod: 'Executive Intake Flight',
    campaignObjective: 'PGDM Admissions & Working Executive Counseling Leads',
    performanceOverview:
      'High-caliber executive degree marketing across 3 campaigns delivering verified working professional admissions at an audited ₹351.22 CPR.',
    highlightStat: '3 Campaigns · ₹59.7K Spent · ₹351.22 CPR',
    metrics: {
      totalResults: '3 Campaigns (170+ Admissions)',
      totalResultsLabel: 'Executive Candidates',
      totalReach: '134,133',
      averageFrequency: '2.18',
      averageCostPerResult: '₹351.22 avg',
      totalBudget: '₹68,000.00',
      totalAmountSpent: '₹59,712.17',
      budgetUtilization: '87.81%',
      remainingBudget: '₹8,287.83'
    },
    charts: {
      trends: [
        { period: 'Sprint 1', results: 38, reach: 30000, spent: 13900, cpr: 365 },
        { period: 'Sprint 2', results: 54, reach: 42000, spent: 18600, cpr: 344 },
        { period: 'Sprint 3', results: 56, reach: 44000, spent: 19400, cpr: 346 },
        { period: 'Sprint 4', results: 22, reach: 18133, spent: 7812, cpr: 355 }
      ]
    },
    screenshot: {
      caption: 'Executive PGDM Admissions Ledger — 134,133 Reach across 3 Campaigns',
      anonymizedAdSets: [
        { label: 'Working Executives 3+ Yrs Exp · Online PGDM', results: '90 candidates', cpr: '₹346.00', spend: '₹31,140', reach: '72,000' },
        { label: 'Executive Analytics & Management Diploma', results: '55 candidates', cpr: '₹354.00', spend: '₹19,470', reach: '44,000' },
        { label: 'Retargeting Prospectus Downloaders', results: '25 candidates', cpr: '₹364.00', spend: '₹9,102', reach: '18,133' }
      ]
    }
  }
];
