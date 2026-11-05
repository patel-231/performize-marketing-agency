export interface ProofItem {
  id: string;
  varName: string;
  file: string;
  caption: string;
  category: 'ecommerce' | 'leads' | 'app' | 'google-ads' | 'overview';
}

export const VERIFIED_CAMPAIGN_PROOFS: ProofItem[] = [
  {
    id: 'proof-karpasa-atc',
    varName: 'GM',
    file: '/assets/proofs/proof_GM_39.jpeg',
    caption: 'Karpasaonline — 2,896 add-to-cart results at ₹0.96 per result',
    category: 'ecommerce'
  },
  {
    id: 'proof-gentlemens-attire',
    varName: 'qM',
    file: '/assets/proofs/proof_qM_38.jpeg',
    caption: 'Gentlemens Attire — 1,003,853 reach, ₹1,09,548 spent across 23 campaigns',
    category: 'ecommerce'
  },
  {
    id: 'proof-ecom-674',
    varName: 'PM',
    file: '/assets/proofs/proof_PM_34.jpeg',
    caption: 'Ecommerce campaign results — 674 purchases, €111K conversion value, 4.55 ROAS',
    category: 'ecommerce'
  },
  {
    id: 'proof-magic-kart',
    varName: 'UM',
    file: '/assets/proofs/proof_UM_35.jpeg',
    caption: 'Magic Kart campaign — 272 website purchases, 177K reach, ₹53.23 avg cost',
    category: 'ecommerce'
  },
  {
    id: 'proof-teaofy',
    varName: 'HM',
    file: '/assets/proofs/proof_HM_36.jpeg',
    caption: 'TEAOFY account — 369 website purchases, ₹50,000 spend, ₹135.50 per purchase',
    category: 'ecommerce'
  },
  {
    id: 'proof-karpasa-sales',
    varName: 'KM',
    file: '/assets/proofs/proof_KM_41.jpeg',
    caption: 'Karpasa Sales — 654 add-to-cart, 48,199 reach, ₹2.46 cost per result',
    category: 'ecommerce'
  },
  {
    id: 'proof-karpasa-ads',
    varName: 'QM',
    file: '/assets/proofs/proof_QM_42.jpeg',
    caption: 'Karpasaonline Ads — 2,896 website add-to-carts at ₹0.96 per result',
    category: 'ecommerce'
  },
  {
    id: 'proof-flymycart',
    varName: 'NM',
    file: '/assets/proofs/proof_NM_17.jpeg',
    caption: 'FlyMyCart campaign — 53.9K clicks, 7.62K conversions, ₹5.92 cost per conversion',
    category: 'ecommerce'
  },
  {
    id: 'proof-meta-leads-cpl',
    varName: 'zM',
    file: '/assets/proofs/proof_zM_30.jpeg',
    caption: 'Campaign performance dashboard — Meta leads at ₹138.64 per lead',
    category: 'leads'
  },
  {
    id: 'proof-meta-leads-purchases',
    varName: 'VM',
    file: '/assets/proofs/proof_VM_31.jpeg',
    caption: 'Leads generated from Meta Ads — 18 website purchases, 630K reach',
    category: 'leads'
  },
  {
    id: 'proof-messaging-results',
    varName: '_M',
    file: '/assets/proofs/proof__M_29.jpeg',
    caption: 'Messaging campaign results — 131–201 conversations per ad set, 18K+ reach',
    category: 'leads'
  },
  {
    id: 'proof-a2z-workhub',
    varName: 'AM',
    file: '/assets/proofs/proof_AM_19.jpeg',
    caption: 'A2Z WorkHub account — 8.87K clicks, 208K impressions, 1.95K conversions at ₹3.83',
    category: 'leads'
  },
  {
    id: 'proof-campaign-conversions',
    varName: 'EM',
    file: '/assets/proofs/proof_EM_20.jpeg',
    caption: 'Campaign-level view — 1,950 conversions pending, ₹0.84 avg CPC',
    category: 'leads'
  },
  {
    id: 'proof-campaigns-overview',
    varName: 'TM',
    file: '/assets/proofs/proof_TM_22.jpeg',
    caption: 'Campaigns overview — 8,154 conversions, ₹64,299 spend, ₹5.44 avg CPA',
    category: 'overview'
  },
  {
    id: 'proof-app-promotion',
    varName: 'SM',
    file: '/assets/proofs/proof_SM_18.jpeg',
    caption: 'App promotion campaign — 58.8K clicks, ₹7.89 cost per install',
    category: 'app'
  },
  {
    id: 'proof-grocery-everyday',
    varName: 'YM',
    file: '/assets/proofs/proof_YM_40.jpeg',
    caption: 'Grocery Everyday — 1,083 app installs, 2.7M impressions across 8 campaigns',
    category: 'app'
  },
  {
    id: 'proof-google-ads',
    varName: 'RM',
    file: '/assets/proofs/proof_RM_24.jpeg',
    caption: 'Google Ads account — 43.6K clicks, ₹807K total conversion value',
    category: 'google-ads'
  },
  {
    id: 'proof-performance-summary',
    varName: 'FM',
    file: '/assets/proofs/proof_FM_23.jpeg',
    caption: 'Performance summary — 1.07M clicks, 45.5K conversions at $12.73 CPA',
    category: 'overview'
  },
  {
    id: 'proof-campaign-overview-high',
    varName: 'CM',
    file: '/assets/proofs/proof_CM_21.jpeg',
    caption: 'Campaign overview — 258K clicks, 22.8K conversions, $1.87M conversion value',
    category: 'overview'
  },
  {
    id: 'proof-dashboard-growth',
    varName: 'kM',
    file: '/assets/proofs/proof_kM_25.jpeg',
    caption: 'Campaign dashboard — sustained growth over months',
    category: 'overview'
  },
  {
    id: 'proof-conversion-analysis',
    varName: 'MM',
    file: '/assets/proofs/proof_MM_26.jpeg',
    caption: 'Conversion rate and cost analysis — consistent performance',
    category: 'overview'
  },
  {
    id: 'proof-campaign-clicks',
    varName: 'DM',
    file: '/assets/proofs/proof_DM_27.jpeg',
    caption: 'Campaign clicks overview — multiple ad sets, CPM ₹96–₹472, CPC ₹10–₹34',
    category: 'leads'
  },
  {
    id: 'proof-breakdown',
    varName: 'OM',
    file: '/assets/proofs/proof_OM_28.jpeg',
    caption: 'Ad performance breakdown — 3,264 link clicks, ₹21.64 CPC, 0.37% CTR',
    category: 'leads'
  },
  {
    id: 'proof-ad-set-perf',
    varName: 'BM',
    file: '/assets/proofs/proof_BM_33.jpeg',
    caption: 'Ad set performance — 12,060 results at $0.20 per click, 2.3M impressions',
    category: 'overview'
  },
  {
    id: 'proof-multiple-conversions',
    varName: 'LM',
    file: '/assets/proofs/proof_LM_32.jpeg',
    caption: 'Ad results overview — multiple campaigns with website purchase conversions',
    category: 'ecommerce'
  },
  {
    id: 'proof-avmarrts',
    varName: 'IM',
    file: '/assets/proofs/proof_IM_37.jpeg',
    caption: 'avmarrts account — 625,005 total reach across 25 campaigns',
    category: 'overview'
  }
];
