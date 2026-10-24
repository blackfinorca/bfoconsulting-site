export type Language = 'en' | 'ja';

export interface ProofPoint {
  stat: string;
  label: string;
  detail: string;
  context: string;
}

export interface CoreValue {
  key: string;
  title: string;
  titleJa: string;
  meaning: string;
  meaningJa: string;
  evidence: string;
  evidenceJa: string;
}

export interface ClientSegment {
  id: string;
  title: string;
  titleJa: string;
  scale: string;
  needs: string;
  needsJa: string;
  firstOffer: string;
  firstOfferJa: string;
  recommendedWorkflow: string[];
}

export interface ResearchProduct {
  id: string;
  title: string;
  titleJa: string;
  description: string;
  descriptionJa: string;
  edition: string;
  pagesOrItems: string;
  price: string;
  priceJa: string;
  deliveryFormat: string;
  deliveryFormatJa: string;
  sampleHighlights: string[];
  sampleHighlightsJa: string[];
  coverTag: string;
}

export interface ServiceItem {
  id: string;
  order: string;
  title: string;
  titleJa: string;
  whatWeDo: string;
  whatWeDoJa: string;
  japanFocus: string;
  japanFocusJa: string;
  deliverable: string;
  deliverableJa: string;
  timeline: string;
}

export interface WardMetric {
  wardEn: string;
  wardJa: string;
  typology: string;
  adr: number;
  occupancyPct: number;
  simpleLodgingCount: number;
  minpakuCount: number;
  taxBracketTypical: string;
  regulatoryNote: string;
}

export const SITE_CONTENT = {
  heroTaglines: [
    { en: "BFO Consulting", ja: "BFO Consulting" },
    { en: "Data for independent owners in Japan, from owners who use it.", ja: "日本の個人オーナーのためのデータ。自ら町家を運営する私たちから。" },
    { en: "Operating decisions for independent owners in Japan.", ja: "日本の独立系宿泊施設のための運営判断。" }
  ],
  coreValues: [
    {
      key: 'scale',
      title: 'Scale',
      titleJa: '数千人規模のデータ',
      meaning: "A benchmark from thousands of guests, not a dozen reviews a year.",
      meaningJa: '年間十数件のレビューではなく、数千人の宿泊客に基づく基準。',
      evidence: '12,441 reviews of 246 whole-house machiya',
      evidenceJa: '一棟貸し町家246軒・12,441件のレビュー',
    },
    {
      key: 'cost_on_problem',
      title: 'A cost on every problem',
      titleJa: '課題ごとの損失額',
      meaning: 'Complaints ranked by score lost, so you fix the costliest first.',
      meaningJa: '不満をスコア減点幅順に並べ、影響の大きい修繕から着手。',
      evidence: 'Cleanliness lapse costs 2.15 points; steep stairs 0.43',
      evidenceJa: '清掃の不備は-2.15点、急な町家階段は-0.43点',
    },
    {
      key: 'yen_not_adjectives',
      title: 'Yen, not adjectives',
      titleJa: '円で判断',
      meaning: 'Each fix priced, including the ones that do not pay back.',
      meaningJa: '各改善策の費用を試算。回収できない場合もそのまま示します。',
      evidence: 'Basics pay their running cost only from about ¥94,000 a night at 7% per point',
      evidenceJa: '基本設備の維持費回収には、1点あたり7%仮定でADR約94,000円が必要',
    },
    {
      key: 'japan_rules',
      title: "Japan's rules built in",
      titleJa: '日本の法規制に対応',
      meaning: 'Licence type, the 180-night cap and Kyoto accommodation tax tiers.',
      meaningJa: '許可の種類、180日上限、京都宿泊税の区分を反映。',
      evidence: 'Study sections 2.2 and 9.5',
      evidenceJa: '調査報告書 第2.2節・第9.5節',
    },
    {
      key: 'ready_to_use',
      title: 'Ready to use',
      titleJa: 'すぐ使えるツール',
      meaning: 'Checklists, scorecards and guest texts in English, Japanese and Traditional Chinese.',
      meaningJa: '英語・日本語・繁体字のチェックリスト、スコアカード、案内文。',
      evidence: '54-item checklist, cleaner and host cards',
      evidenceJa: '54項目チェックリスト、清掃員・ホスト用カード',
    },
  ],
  proofPoints: [
    {
      stat: '101,996',
      label: 'Public reviews analyzed',
      detail: '367 Kyoto properties, 20 languages, Aug 2023 to Oct 2026.',
      context: 'Kyoto-wide market study',
    },
    {
      stat: '¥47k vs ¥52k',
      label: 'Price gap',
      detail: 'Top-quarter and bottom-quarter machiya ask nearly the same price.',
      context: 'Operations explain the score gap.',
    },
    {
      stat: '43% vs 14%',
      label: 'Host praise',
      detail: 'Top houses get host praise in 43% of positive comments; bottom houses, 14%.',
      context: 'Arrival messaging and local care lift reviews.',
    },
    {
      stat: '-0.36 pt',
      label: 'One 4-star review',
      detail: 'A single 4 takes 0.36 off the visible score the day it appears.',
      context: 'At an average 13 reviews a year',
    },
    {
      stat: '-0.53 pt',
      label: 'Japanese guest gap',
      detail: 'Japanese guests score the same house 0.53 lower than international guests.',
      context: '49% of low scores from Japanese guests have no written reason.',
    },
    {
      stat: '¥94,000',
      label: 'Break-even',
      detail: 'Basics pay their running cost from about ¥94,000/night at 7% per point.',
      context: '7% per point is an assumption, not a promise.',
    },
  ],
  clientSegments: [
    {
      id: 'owner_1_3',
      title: 'Owner of 1 to 3 licensed machiya in Kyoto',
      titleJa: '京都で1〜3軒の許可済み町家を所有・運営するオーナー',
      scale: '1 – 3 Licensed Machiya',
      needs: 'A higher score, the right rate, cheaper channels',
      needsJa: 'スコア改善、適正な宿泊単価、手数料の安い販売経路',
      firstOffer: 'Review Study, then OTA Channel Performance Audit',
      firstOfferJa: 'レビュー調査報告書、続いてOTAチャネル診断',
      recommendedWorkflow: [
        'Benchmark against 246 whole-house peers',
        'Audit net take-rates on Booking.com, Airbnb and Ikyu',
        'Reprice Saturdays and November foliage',
      ],
    },
    {
      id: 'operator_4_12',
      title: 'Operator of 4 to 12 houses',
      titleJa: '4〜12軒の町家・簡易宿所を運営するオペレーター',
      scale: '4 – 12 Managed Units',
      needs: 'One standard at every house, early warning on shared processes',
      needsJa: '全物件で同じ品質、共通業務の早期アラート',
      firstOffer: 'Guest Messaging Automation, Benchmark Club',
      firstOfferJa: 'ゲスト案内メッセージ自動化、ベンチマーククラブ',
      recommendedWorkflow: [
        'Automated multilingual pre-arrival messages',
        'Quarterly peer comparison of occupancy and ADR',
        'Standard cleaner scorecard',
      ],
    },
    {
      id: 'minpaku_180',
      title: 'Minpaku owner on the 180-night cap',
      titleJa: '民泊新法（180日上限）の適用を受ける住宅宿泊オーナー',
      scale: '180-Night Capped Minpaku',
      needs: 'More net revenue per night, since nights are capped',
      needsJa: '営業日数が限られるため、1泊あたりの純収益を最大化',
      firstOffer: 'OTA Channel Performance Audit, Competitive Rate Benchmark',
      firstOfferJa: 'OTAチャネル診断、近隣競合レートベンチマーク',
      recommendedWorkflow: [
        'Price up for sakura, Gion Matsuri and autumn',
        'Drop low-yield gap nights and high-cancellation OTAs',
        'Check conversion to a Simple Lodging licence',
      ],
    },
    {
      id: 'outside_kyoto',
      title: 'Owner outside Kyoto (Osaka, Tokyo, Hokkaido)',
      titleJa: '京都以外の地域（大阪、東京、北海道など）の宿泊オーナー',
      scale: 'Regional & Urban Japan',
      needs: 'Channel and rate decisions based on real take-rate data',
      needsJa: '手数料と手取り額のデータに基づく、チャネル選定と価格戦略',
      firstOffer: 'OTA Channel Performance Audit, Competitive Rate Benchmark',
      firstOfferJa: 'OTAチャネル診断、競合レートベンチマーク',
      recommendedWorkflow: [
        'Take-rate model for Rakuten, Jalan, Booking and Airbnb',
        'Switch off overlapping discounts',
        'Local accommodation tax and price tiers',
      ],
    },
  ],
  researchProducts: [
    {
      id: 'guest_review_study',
      title: 'Kyoto Machiya Guest Review Study',
      titleJa: '京都町家 ゲストレビュー白書 2026',
      description: '61 pages on what guests value and punish, what fixes cost, and current rules.',
      descriptionJa: 'ゲストが評価・減点する点、修繕費、最新規制をまとめた61ページ。',
      edition: 'Second Edition, v1.1 · October 2026',
      pagesOrItems: '61 pages · PDF & summary',
      price: '¥28,000',
      priceJa: '¥28,000 (税込)',
      deliveryFormat: 'Instant PDF + summary',
      deliveryFormatJa: 'PDF即時納品 ＋ 要約',
      coverTag: 'Flagship Research',
      sampleHighlights: [
        'Method: 101,996 reviews, 367 properties',
        'Complaints ranked: cleanliness (-2.15) to stairs (-0.43)',
        'Japanese guest gap (-0.53) and blank low scores',
        'Fix break-even at ¥94,000 ADR (7% assumption)',
      ],
      sampleHighlightsJa: [
        '調査手法：101,996件、367軒',
        '減点ランキング：清掃（-2.15点）から急階段（-0.43点）',
        '日本人ゲストの差（-0.53点）と理由未記入49%',
        'ADR約94,000円での回収分岐点（7%仮定）',
      ],
    },
    {
      id: 'owners_checklist',
      title: "Kyoto Machiya Owner's Checklist",
      titleJa: '京都町家 オーナー実務チェックリスト',
      description: '54 items, a red-flag scorecard, and printable cleaner and host cards.',
      descriptionJa: '54の点検項目、赤旗スコアカード、清掃員・ホスト用の印刷カード。',
      edition: 'Version 1.1 · October 2026',
      pagesOrItems: '54 items · EN / JA / Traditional Chinese',
      price: '¥14,000',
      priceJa: '¥14,000 (税込)',
      deliveryFormat: 'Sheets & printable cards',
      deliveryFormatJa: '点検シート ＋ 現場指示カード',
      coverTag: 'Field Operations Kit',
      sampleHighlights: [
        '54-point pre-arrival checklist',
        'Cleaner scorecard',
        'Host emergency steps and noise etiquette',
        'Taxi card with route instructions',
      ],
      sampleHighlightsJa: [
        '到着前の54項目チェックシート',
        '清掃スタッフ用スコアカード',
        'ホスト緊急対応と騒音配慮ガイド',
        'タクシー運転手向け案内カード',
      ],
    },
    {
      id: 'otas_guide',
      title: "The Operator's Guide to OTAs",
      titleJa: '日本の宿泊事業者のためのOTA徹底比較ガイド',
      description: 'Seven OTAs compared on fees, ranking and net rate for Japan.',
      descriptionJa: 'OTA7社の手数料、掲載順位、手取り額を日本向けに比較。',
      edition: 'October 2026 Edition',
      pagesOrItems: '38 pages · Net rate matrix',
      price: '¥18,000',
      priceJa: '¥18,000 (税込)',
      deliveryFormat: 'Guide & channel matrix',
      deliveryFormatJa: '38ページ解説書 ＋ 手取り試算表',
      coverTag: 'Distribution Manual',
      sampleHighlights: [
        'Net take-rate on a ¥100 booking, 7 channels',
        'Stacked discounts (Genius, Mobile, Early Booker)',
        'Ikyu, Rakuten, Jalan vs. global OTAs',
        'Licence numbers on listings',
      ],
      sampleHighlightsJa: [
        '7チャネルの「100円予約あたり手取り額」比較',
        '割引の重複（Genius、モバイル、早期割引）',
        '一休・楽天・じゃらんとグローバルOTAの違い',
        '掲載ページへの許可番号の記載',
      ],
    },
  ],
  services: [
    {
      id: 'ota_audit',
      order: '01',
      title: 'OTA Channel Performance Audit',
      titleJa: 'OTAチャネル パフォーマンス診断',
      whatWeDo: 'We calculate what you keep per booking on each channel after commission and discounts.',
      whatWeDoJa: '各チャネルで、手数料と割引後の手取り額を算出します。',
      japanFocus: 'Booking.com, Airbnb, Agoda, Trip.com; Rakuten Travel and Jalan where the licence allows.',
      japanFocusJa: 'Booking.com、Airbnb、Agoda、Trip.com。許可があれば楽天トラベル・じゃらん。',
      deliverable: 'Net rate per channel on a ¥100 booking, plus ranked settings to change.',
      deliverableJa: '100円予約あたりのチャネル別手取り額と、変更すべき設定の優先順位。',
      timeline: 'Completed within 5 business days',
    },
    {
      id: 'rate_benchmark',
      order: '02',
      title: 'Competitive Rate Benchmark',
      titleJa: '近隣競合レートベンチマーク',
      whatWeDo: "We compare your rates with nearby competitors' member prices, night by night.",
      whatWeDoJa: '近隣競合の会員価格と自館の価格を、毎晩比較します。',
      japanFocus: 'Saturdays, holiday eves, November foliage, winter minimum stays, Kyoto tax steps.',
      japanFocusJa: '土曜・祝前日、11月の紅葉、冬の連泊制限、京都市宿泊税の区分。',
      deliverable: '12-month nightly comparison with dates to reprice.',
      deliverableJa: '12ヶ月の日別比較表と、価格改定すべき日付。',
      timeline: 'Delivered in 7 business days',
    },
    {
      id: 'review_diagnostic',
      order: '03',
      title: 'Guest Review Diagnostic',
      titleJa: 'ゲストレビュー詳細診断',
      whatWeDo: 'We rank every complaint by score lost and benchmark you against 246 Kyoto machiya.',
      whatWeDoJa: '不満をスコア損失順に並べ、京都の町家246軒と比較します。',
      japanFocus: 'Adjusts for your share of Japanese guests, who score 0.53 lower.',
      japanFocusJa: '0.53点低く評価する日本人ゲストの比率を補正します。',
      deliverable: 'Market rank, ranked complaints and priced fixes.',
      deliverableJa: '市場順位、減点ランキング、修繕費の一覧。',
      timeline: 'Delivered in 5 business days',
    },
    {
      id: 'messaging_automation',
      order: '04',
      title: 'Guest Messaging Automation',
      titleJa: 'ゲスト案内メッセージ自動化',
      whatWeDo: "We write your confirmation, arrival and first-evening messages in your guests' languages and automate them.",
      whatWeDoJa: '予約確認、到着案内、初日夜の連絡文をゲストの言語で作成し、自動送信します。',
      japanFocus: 'Japanese, English, Traditional Chinese, Korean; tax line in the confirmation; taxi card.',
      japanFocusJa: '日・英・繁体字・韓国語。予約確認に宿泊税の案内、タクシーカード付き。',
      deliverable: 'Tested message sequences live in your booking system.',
      deliverableJa: '予約管理システム上で稼働するメッセージ一式。',
      timeline: 'Implemented in 3 business days',
    },
    {
      id: 'ai_agents',
      order: '05',
      title: 'Custom AI agents',
      titleJa: 'カスタムAIエージェント',
      whatWeDo: 'We build AI agents that answer guest inquiries 24/7, take reservations and dispatch cleaners.',
      whatWeDoJa: '24時間の多言語ゲスト対応、予約受付、清掃手配を行うAIエージェントを構築します。',
      japanFocus: 'Japanese, English, Traditional Chinese, Korean; connects to your PMS and channel manager.',
      japanFocusJa: '日・英・繁体字・韓国語。PMSやサイトコントローラーと連携。',
      deliverable: 'An AI agent live in your guest channels, with host escalation.',
      deliverableJa: 'ゲスト対応チャネルで稼働するAIエージェントと、ホストへの緊急通知。',
      timeline: 'Configured and live within 7-10 business days',
    },
    {
      id: 'benchmark_club',
      order: '05',
      title: 'Kyoto Machiya Benchmark Club',
      titleJa: '京都町家ベンチマーククラブ（会員制）',
      whatWeDo: 'Members share occupancy and rates anonymously each quarter and see where they stand.',
      whatWeDoJa: '四半期ごとに稼働率と単価を匿名で共有し、自館の位置を確認します。',
      japanFocus: 'Peer network of licensed Kyoto machiya.',
      japanFocusJa: '京都の許可済み町家の同業者ネットワーク。',
      deliverable: 'Quarterly confidential benchmark report.',
      deliverableJa: '四半期ごとの非公開ベンチマークレポート。',
      timeline: 'Quarterly reporting cycle',
    },
  ],
  wardData: [
    {
      wardEn: 'Higashiyama Ward (東山区)',
      wardJa: '東山区 (Higashiyama)',
      typology: 'Heritage Ryokan / Sukiya & Preserved Machiya',
      adr: 158000,
      occupancyPct: 88,
      simpleLodgingCount: 684,
      minpakuCount: 242,
      taxBracketTypical: '¥1,000 – ¥2,000/person',
      regulatoryNote: 'Historic preservation zone; strong international demand.',
    },
    {
      wardEn: 'Nakagyo Ward (中京区)',
      wardJa: '中京区 (Nakagyo)',
      typology: 'Urban Commercial Machiya & Boutique Stays',
      adr: 94500,
      occupancyPct: 92,
      simpleLodgingCount: 820,
      minpakuCount: 388,
      taxBracketTypical: '¥500 – ¥1,000/person',
      regulatoryNote: 'Business and leisure demand; walk to Nishiki Market.',
    },
    {
      wardEn: 'Shimogyo Ward (下京区)',
      wardJa: '下京区 (Shimogyo)',
      typology: 'Kyoto Station Gateway & Transit Townhouses',
      adr: 72000,
      occupancyPct: 84,
      simpleLodgingCount: 712,
      minpakuCount: 310,
      taxBracketTypical: '¥500/person',
      regulatoryNote: 'Near the Shinkansen; crowded minpaku market.',
    },
    {
      wardEn: 'Kamigyo Ward (上京区)',
      wardJa: '上京区 (Kamigyo)',
      typology: 'Nishijin Textile Machiya / Extended Stay',
      adr: 61500,
      occupancyPct: 78,
      simpleLodgingCount: 390,
      minpakuCount: 164,
      taxBracketTypical: '¥500/person',
      regulatoryNote: 'Quiet residential area; 3.8-night average stay.',
    },
    {
      wardEn: 'Arashiyama / Ukyo Ward (嵐山/右京区)',
      wardJa: '嵐山・右京区 (Arashiyama / Ukyo)',
      typology: 'Destination Luxury Villas & Scenic Retreats',
      adr: 186000,
      occupancyPct: 74,
      simpleLodgingCount: 198,
      minpakuCount: 62,
      taxBracketTypical: '¥2,000/person',
      regulatoryNote: 'Scenic landscape rules; high margin per booking.',
    },
  ],
  regulatoryNotice: {
    en: "Regulatory information summarizes public sources and is not legal advice. Research is conducted under Article 30-4 of Japan's Copyright Act. We never disclose property names or client data.",
    ja: "法規制の情報は公的資料の要約であり、法的助言ではありません。調査は著作権法第30条の4に基づき実施し、施設名や顧客データは開示しません。"
  }
};
