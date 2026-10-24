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
    { en: "Operating decisions for independent accommodation owners in Japan.", ja: "日本の独立系宿泊施設のための客観的な運営判断。" }
  ],
  coreValues: [
    {
      key: 'scale',
      title: 'Scale',
      titleJa: '圧倒的なスケール',
      meaning: "A benchmark built on thousands of guests, not one house's dozen reviews a year",
      meaningJa: '年間わずか十数件のレビューではなく、数千人規模の宿泊客データに基づく市場基準',
      evidence: '12,441 reviews of 246 whole-house machiya (from 101,996 reviews total)',
      evidenceJa: '一棟貸し町家246軒・12,441件の詳細レビュー（総計101,996件から抽出）',
    },
    {
      key: 'cost_on_problem',
      title: 'A Cost on Every Problem',
      titleJa: '課題ごとのスコア損失額',
      meaning: 'Complaints ranked by what they take off the score, so money goes to the right fix first',
      meaningJa: 'クレーム項目をスコア減点幅順に順位付け。最も影響の大きい修繕から着手',
      evidence: 'Cleanliness lapse costs 2.15 points; steep stairs 0.43',
      evidenceJa: '清掃の不備は-2.15点、急な町家階段は-0.43点',
    },
    {
      key: 'yen_not_adjectives',
      title: 'Yen, Not Adjectives',
      titleJa: '形容詞ではなく「円」で判断',
      meaning: 'Each fix priced, with its return stated as an assumption, including when a fix does not pay',
      meaningJa: '各改善策の費用対効果を試算。投資回収が見合わない場合も正直に明示',
      evidence: 'Basics pay their running cost only from about ¥94,000 a night at 7% per point',
      evidenceJa: '基本設備の維持費回収には、1点あたり7%仮定でADR約94,000円が必要',
    },
    {
      key: 'japan_rules',
      title: "Japan's Rules Built In",
      titleJa: '日本の法規制に完全準拠',
      meaning: "Licence type, the 180-night cap, the accommodation tax tiers since 1 March 2026 and the city's draft staffing rule",
      meaningJa: '簡易宿所/特区民泊、180日上限、2026年3月1日改定の京都宿泊税、常駐規制案を考慮',
      evidence: 'Section 2.2 and 9.5 of the study',
      evidenceJa: '独自調査レポート第2.2節および第9.5節に詳述',
    },
    {
      key: 'ready_to_use',
      title: 'Ready to Use',
      titleJa: '今すぐ現場で使えるツール',
      meaning: 'Checklists, scorecards and guest texts in English, Japanese and Traditional Chinese',
      meaningJa: '英語・日本語・繁体字中国語のチェックリスト、スコアカード、現場用テンプレート',
      evidence: '54-item checklist, cleaner and host cards',
      evidenceJa: '54項目の実地チェックリスト、清掃員・ホスト用指示カード完備',
    },
  ],
  proofPoints: [
    {
      stat: '101,996',
      label: 'Public Reviews Analyzed',
      detail: '367 Kyoto properties, 20 languages, Aug 2023 – Oct 2026.',
      context: 'Empirical market study across all Kyoto municipal wards',
    },
    {
      stat: '¥47k vs ¥52k',
      label: 'Price Parity Gap',
      detail: 'Top-quarter and bottom-quarter machiya ask virtually the same price.',
      context: 'The gap is not the building or ward—it is operational execution.',
    },
    {
      stat: '43% vs 14%',
      label: 'Host Praise Spread',
      detail: 'Guests praise the host in 43% of positive comments at top houses and only 14% at the bottom.',
      context: 'Arrival messaging and local care generate direct review alpha.',
    },
    {
      stat: '-0.36 pt',
      label: 'One 4-Star Impact',
      detail: 'A single review score of 4 takes 0.36 off the score guests see on the day it appears.',
      context: 'Calculated at single-house review cadence (avg. 13 reviews/yr)',
    },
    {
      stat: '-0.53 pt',
      label: 'Japanese Guest Differential',
      detail: 'Japanese guests score 0.53 lower at the exact same house than international guests.',
      context: '49% of Japanese guests who leave low scores provide zero written reason.',
    },
    {
      stat: '¥94,000',
      label: 'Break-Even Baseline',
      detail: 'Fixing physical basics pays running costs only from about ¥94,000/night at 7% per point.',
      context: 'Based on our explicit 7% per point revenue assumption (not a promise).',
    },
  ],
  clientSegments: [
    {
      id: 'owner_1_3',
      title: 'Owner of 1 to 3 licensed machiya in Kyoto',
      titleJa: '京都で1〜3軒の許可済み町家を所有・運営するオーナー',
      scale: '1 – 3 Licensed Machiya',
      needs: 'A higher score, the right rate, cheaper distribution channels',
      needsJa: 'レビュースコアの改善、適切な宿泊単価の設定、手数料の安い販売経路の開拓',
      firstOffer: 'Review Study, then OTA Channel Performance Audit',
      firstOfferJa: '町家ゲストレビュー調査報告書、続いてOTAチャネルパフォーマンス診断',
      recommendedWorkflow: [
        'Review study benchmark against 246 whole-house peers',
        'Audit net take-rates on Booking.com, Airbnb, and Ikyu',
        'Reprice high-demand Saturdays and November Koyo foliage',
      ],
    },
    {
      id: 'operator_4_12',
      title: 'Operator of 4 to 12 houses',
      titleJa: '4〜12軒の町家・簡易宿所を運営するオペレーター',
      scale: '4 – 12 Managed Units',
      needs: 'The same high standard at every house, early warning on shared processes',
      needsJa: '全物件での一貫した品質管理、共通オペレーション（清掃・鍵受渡）の早期アラート',
      firstOffer: 'Guest Messaging Automation, Benchmark Club',
      firstOfferJa: '多言語自動メッセージ設定、京都町家ベンチマーククラブ（会員制）',
      recommendedWorkflow: [
        'Multi-lingual automated pre-arrival and check-in workflows',
        'Quarterly peer comparison across occupancy and ADR',
        'Cleaner scorecard standardization to eliminate hygiene penalties',
      ],
    },
    {
      id: 'minpaku_180',
      title: 'Minpaku owner on the 180-night cap',
      titleJa: '民泊新法（180日上限）の適用を受ける住宅宿泊オーナー',
      scale: '180-Night Capped Minpaku',
      needs: 'More net revenue per operating night, since available calendar nights are capped',
      needsJa: '年間営業日数が180日に制限されているため、1泊あたりの純収益の最大化が必須',
      firstOffer: 'OTA Channel Performance Audit, Competitive Rate Benchmark',
      firstOfferJa: 'OTAチャネルパフォーマンス診断、近隣競合レートベンチマーク',
      recommendedWorkflow: [
        'Harvest peak seasonal elasticity (Sakura, Gion Matsuri, Autumn)',
        'Screen out low-yield gap nights and high-cancellation OTAs',
        'Dual-license feasibility analysis (Simple Lodging conversion path)',
      ],
    },
    {
      id: 'outside_kyoto',
      title: 'Owner outside Kyoto (Osaka, Tokyo, Hokkaido)',
      titleJa: '京都以外の地域（大阪、東京、北海道など）の宿泊オーナー',
      scale: 'Regional & Urban Japan',
      needs: 'Channel selection and rate elasticity decisions driven by empirical take-rate data',
      needsJa: '手数料や実質手取り額の客観的データに基づいた、販売チャネル選定と価格戦略',
      firstOffer: 'OTA Channel Performance Audit, Competitive Rate Benchmark',
      firstOfferJa: 'OTAチャネルパフォーマンス診断、競合レートベンチマーク',
      recommendedWorkflow: [
        'Channel take-rate modeling for Rakuten, Jalan, Booking, and Airbnb',
        'Stacked promotion audit (disabling unintentional discount overlaps)',
        'Local accommodation tax compliance and pricing tier structuring',
      ],
    },
  ],
  researchProducts: [
    {
      id: 'guest_review_study',
      title: 'Kyoto Machiya Guest Review Study',
      titleJa: '京都町家 ゲストレビュー白書 2026',
      description: '61 pages on what guests value, forgive and punish, what each fix costs, and where prices and municipal rules stand.',
      descriptionJa: '宿泊客が何を評価し、何を許容し、何を減点するのか。各修繕の実費と効果、価格帯と最新規制を網羅した61ページの調査書。',
      edition: 'Second Edition, v1.1 · October 2026',
      pagesOrItems: '61 Pages · PDF & Executive Summary',
      price: '¥28,000',
      priceJa: '¥28,000 (税込)',
      deliveryFormat: 'Instant PDF + Executive Brief',
      deliveryFormatJa: 'PDF即時納品 ＋ 概要要約書',
      coverTag: 'Flagship Research',
      sampleHighlights: [
        'Methodology across 101,996 reviews & 367 properties',
        'Complaint point penalties ranked: Cleanliness (-2.15) to Stairs (-0.43)',
        'Japanese guest scoring suppression (-0.53) & blank low-score phenomenon',
        'Fix ROI break-even model at ¥94,000 ADR (7% assumption)',
      ],
      sampleHighlightsJa: [
        '101,996件のレビュー・367軒の町家を分析した実証手法',
        '減点要因ランキング：清掃不備（-2.15点）から急階段（-0.43点）まで',
        '日本人ゲストの評価傾向（-0.53点低評価）と理由未記入率49%の構造',
        'ADR約94,000円での設備投資回収分岐点モデル（7%仮定に基づく）',
      ],
    },
    {
      id: 'owners_checklist',
      title: "Kyoto Machiya Owner's Checklist",
      titleJa: '京都町家 オーナー実務チェックリスト',
      description: 'Companion practical kit to the study: 54 items, red-flag scorecard, and printable cards for the cleaner and host.',
      descriptionJa: '白書と連動した現場実践キット。54の点検項目、赤旗スコアカード、現場清掃員・ホスト向けバイリンガル作業指示カード。',
      edition: 'Version 1.1 · October 2026',
      pagesOrItems: '54 Items · EN / JA / Traditional Chinese',
      price: '¥14,000',
      priceJa: '¥14,000 (税込)',
      deliveryFormat: 'Digital Sheets & Printable Cards',
      deliveryFormatJa: '点検シート ＋ 現場指示カード',
      coverTag: 'Field Operations Kit',
      sampleHighlights: [
        '54-point pre-arrival property inspection checklist',
        'Cleaner operational scorecard (eliminating the 2.15-point hygiene trap)',
        'Host emergency protocol & Kyoto neighborhood noise etiquette',
        'Physical taxi card template with driver route instructions',
      ],
      sampleHighlightsJa: [
        '到着前の54項目物件インスペクション・チェックシート',
        '清掃スタッフ用スコアカード（-2.15点の致命的減点を防止）',
        'ホスト緊急対応手順と近隣住民への配慮・騒音防止ガイド',
        'タクシー運転手向け日本語住所・進入路案内カードのひな形',
      ],
    },
    {
      id: 'otas_guide',
      title: "The Operator's Guide to OTAs",
      titleJa: '日本の宿泊事業者のためのOTA徹底比較ガイド',
      description: 'Airbnb, Booking.com, Agoda, Vrbo, Expedia, Rakuten Travel, and Jalan compared on fees, ranking, and net rate, weighted to Japan.',
      descriptionJa: 'Airbnb、Booking.com、Agoda、Vrbo、Expedia、楽天トラベル、じゃらんの手数料、検索アルゴリズム、手取り額を日本市場向けに徹底比較。',
      edition: 'October 2026 Edition',
      pagesOrItems: '38 Pages · Net Rate Matrix & Rules',
      price: '¥18,000',
      priceJa: '¥18,000 (税込)',
      deliveryFormat: '38-Page Guide & Channel Matrix',
      deliveryFormatJa: '38ページ解説書 ＋ 手取り試算表',
      coverTag: 'Distribution Manual',
      sampleHighlights: [
        'Net take-rate on a ¥100 booking across 7 channels',
        'Hidden stacked discounts (Genius Tier + Mobile + Early Booker)',
        'Domestic portals (Ikyu, Rakuten, Jalan) vs. Global OTAs',
        'Japan license number compliance on platform listings',
      ],
      sampleHighlightsJa: [
        '主要7チャネルにおける「100円の予約あたりの手取り額」完全比較',
        '意図せぬ二重割引の罠（Genius + モバイル割引 + 早期割引の重複）',
        '国内高級ポータル（一休、楽天、じゃらん）とグローバルOTAの住み分け',
        '民泊届出番号・旅館業許可番号の掲載義務とペナルティ回避法',
      ],
    },
  ],
  services: [
    {
      id: 'ota_audit',
      order: '01',
      title: 'OTA Channel Performance Audit',
      titleJa: 'OTAチャネル パフォーマンス診断',
      whatWeDo: 'We review your listings on every OTA and your direct booking engine, calculate what you keep from each booking after commission and stacked discounts, and show where you stand and which settings to change.',
      whatWeDoJa: '主要OTAおよび自社予約エンジンの掲載内容を精査し、手数料や多重割引後の「本当の手取り額」を算出。変更すべき設定項目を優先度順に提示します。',
      japanFocus: 'Booking.com, Airbnb, Agoda, and Trip.com; Rakuten Travel and Jalan where the licence allows; licence number on every listing; Korean and Traditional Chinese content.',
      japanFocusJa: 'Booking.com、Airbnb、Agoda、Trip.com、許可に応じた楽天トラベル・じゃらん。各サイトの許可番号記載確認、韓国語・繁体字対応。',
      deliverable: 'Net rate per channel on a ¥100 booking, ranked list of specific settings to change.',
      deliverableJa: '100円予約あたりのチャネル別手取り額一覧表、変更すべき設定の優先度付き指示書。',
      timeline: 'Completed within 5 business days',
    },
    {
      id: 'rate_benchmark',
      order: '02',
      title: 'Competitive Rate Benchmark',
      titleJa: '近隣競合レートベンチマーク',
      whatWeDo: "We compare your nightly rates with your closest competitors' member prices, night by night, and show the dates where you are underpriced or overpriced.",
      whatWeDoJa: '周辺の競合町家の実質販売価格（会員割引後）と貴館の価格を365日比較。値付けが低すぎる日、高すぎて売れ残っている日を特定します。',
      japanFocus: 'Saturdays and holiday eves, the November foliage premium, December and January minimum stays, and Kyoto accommodation tax steps.',
      japanFocusJa: '土曜・祝前日の加算幅、11月の紅葉プレミアム、12月〜1月の連泊制限、京都市宿泊税の階層境界を考慮した価格設定。',
      deliverable: 'Night-by-night price comparison for the next 12 months with exact dates to reprice.',
      deliverableJa: '今後12ヶ月間の日別競合比較表、即座に価格改定すべき日付リスト。',
      timeline: 'Delivered in 7 business days',
    },
    {
      id: 'review_diagnostic',
      order: '03',
      title: 'Guest Review Diagnostic',
      titleJa: 'ゲストレビュー詳細診断',
      whatWeDo: 'We read every review your house has received on every channel, rank each complaint by what it costs your score, and benchmark you against 246 Kyoto machiya.',
      whatWeDoJa: '全予約チャネルの過去全レビューを精読し、各不満点がスコアに与えた影響を定量化。京都の一棟貸し町家246軒のデータと比較評価します。',
      japanFocus: 'Adjusts for the share of Japanese guests, who score 0.53 lower at the same house on average.',
      japanFocusJa: '同一物件で平均0.53点低く評価する日本人ゲストの宿泊比率を補正し、客観的な実力を判定。',
      deliverable: 'Where you stand vs. market, ranked complaints by score deduction, and priced fixes.',
      deliverableJa: '市場順位、減点要因のワーストランキング、修繕費と見込みリターンの一覧表。',
      timeline: 'Delivered in 5 business days',
    },
    {
      id: 'messaging_automation',
      order: '04',
      title: 'Guest Messaging Automation',
      titleJa: 'ゲスト案内メッセージ自動化',
      whatWeDo: "We write your booking-confirmation, arrival and first-evening messages in your guests' languages and set them to send automatically from your booking system.",
      whatWeDoJa: '予約確認、道案内、チェックイン当日の連絡文面をゲストの言語で執筆し、PMSや予約サイトの自動送信機能に直接組み込みます。',
      japanFocus: 'Japanese, English, Traditional Chinese and Korean; accommodation tax line in the confirmation; taxi card for the local driver.',
      japanFocusJa: '日・英・繁体字・韓国語の4言語対応。予約確認時の宿泊税案内、京都のタクシー運転手に見せる専用カード。',
      deliverable: 'Tested message sequences set live in your booking system or channel manager.',
      deliverableJa: '予約管理システム上で稼働する実戦用メッセージテンプレート群。',
      timeline: 'Implemented in 3 business days',
    },
    {
      id: 'ai_agents',
      order: '05',
      title: 'Custom AI Agents to Automate Your Business',
      titleJa: '業務自動化のためのカスタムAIエージェント構築',
      whatWeDo: 'We build custom AI agents to automate repetitive operations in your accommodation business—answering 24/7 multilingual guest inquiries, automating reservation intake, managing arrival logistics, and dispatching cleaner workflows.',
      whatWeDoJa: '宿泊施設特化のカスタムAIエージェントを構築し、24時間365日の多言語ゲスト対応、予約受付、到着案内、清掃・修繕手配など、日々の反復業務を完全自動化します。',
      japanFocus: 'Japanese, English, Traditional Chinese, and Korean natively; direct API and webhook integration with PMS & channel managers; automated accommodation tax calculation and check-in compliance.',
      japanFocusJa: '日・英・繁体字・韓国語の自然な多言語自動応答、PMSやサイトコントローラーとの直接連携、京都市宿泊税案内と法令遵守のチェックイン導線。',
      deliverable: 'Customized AI agent configured and live in your communication channels, with host escalation safeguards.',
      deliverableJa: '貴館専用に調整され、既存のメッセージ基盤で稼働するAIエージェントおよび緊急時ホスト通知設定。',
      timeline: 'Configured and live within 7-10 business days',
    },
    {
      id: 'benchmark_club',
      order: '05',
      title: 'Kyoto Machiya Benchmark Club',
      titleJa: '京都町家ベンチマーククラブ（会員制）',
      whatWeDo: 'Members share their occupancy and rates anonymously each quarter and receive a report showing where their house stands against the group.',
      whatWeDoJa: '四半期ごとに稼働率と客室単価を匿名で共有し、参加町家グループ内での自館の正確な立ち位置と市場動向レポートを受け取ります。',
      japanFocus: 'Kyoto-first peer network of licensed machiya and authentic traditional accommodations.',
      japanFocusJa: '京都の正式許可町家に限定した、信頼性の高い同業者データ共有ネットワーク。',
      deliverable: 'Quarterly confidential benchmark report with quartile distributions and pacing signals.',
      deliverableJa: '四半期ごとの非公開ベンチマークレポート（上位25%ライン、需給ペース分析）。',
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
      regulatoryNote: 'Strict historic preservation zone; strong international demand; highest ADR premium.',
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
      regulatoryNote: 'High business & leisure density; walkable to Nishiki Market & Kawaramachi.',
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
      regulatoryNote: 'Shinkansen gateway proximity; high transit convenience; competitive minpaku cluster.',
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
      regulatoryNote: 'Quiet residential fabric; longer average length of stay (3.8 nights); lower noise friction.',
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
      regulatoryNote: 'Scenic landscape regulations; high domestic affluent travel; high margin per booking.',
    },
  ],
  regulatoryNotice: {
    en: "Notice: All regulatory information provided is a factual summary of public sources (including Kyoto Municipal Tourism Bureau statistics, Japan Private Lodging Business Act No. 65, and the Kyoto City Accommodation Tax ordinance effective March 1, 2026), and does not constitute formal legal advice. BFO Consulting's research is conducted under Article 30-4 of Japan's Copyright Act. We never disclose individual property names or proprietary client data.",
    ja: "ご注意：掲載されている法規制・条例情報は、公知の公的資料（京都市観光協会統計、住宅宿泊事業法（民泊新法第65号）、2026年3月1日施行の京都市宿泊税条例等）の客観的要約であり、法的助言を構成するものではありません。弊社の調査は著作権法第30条の4に基づき適法に行われており、個別の宿泊施設名や専有データの開示は一切行いません。"
  }
};
