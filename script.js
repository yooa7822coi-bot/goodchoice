// =============================================================
// 商品データ — ここを編集するだけで全カード・まとめ表が更新される
// image: 実際の画像URLを入れると自動で <img> に切り替わる
// =============================================================
const products = [
  {
    rank: 1,
    name: "6点セット 圧縮バッグ 衣類 旅行用ポーチ 圧縮袋",
    catchCopy: "洋服や下着を分けて、バッグの中をすっきり整理したい人に",
    category: "圧縮ポーチ",
    usage: "衣類の圧縮・仕分け",
    bestScene: "2泊3日の修学旅行全般・帰りの荷物整理",
    placeholderLabel: "圧縮ポーチ画像",
    placeholderIcon: "👜",
    description: "大・中・小の異なるサイズが6枚セットになった圧縮バッグ。ファスナーを閉めるだけで空気が抜け、衣類をコンパクトにまとめられます。ポンプ不要で手軽に使えるタイプなので、旅先での使い勝手も良好です。",
    scene: "2泊3日の修学旅行での衣類整理、帰り道のお土産スペース確保、スーツケース内のパッキング",
    points: [
      "大・中・小6サイズセットで、服・下着・パジャマを種類別に分けて整理できる",
      "ポンプ不要の手圧縮タイプなので旅先でも道具なしで手軽に使える",
      "帰りのお土産スペース確保にも活躍。スーツケースに余裕が生まれる"
    ],
    caution: "手圧縮タイプのため、ポンプ式に比べると圧縮率はやや控えめです。厚手のニットや冬用コートなど、かさばりやすいアイテムには向かない場合があります。",
    recommendedFor: "服や下着を種類別にまとめて整理したい女子学生",
    affiliateUrl: "https://amzn.to/49qA7Tu",
    cta: "Amazonで圧縮ポーチを見てみる",
    image: "https://m.media-amazon.com/images/I/61Rl1l97ETL._AC_SL1500_.jpg"
  },
  {
    rank: 2,
    name: "トラベルポーチ 吊り下げ 日本ブランド旅行用圧縮袋 LASSE MOA",
    catchCopy: "ホテルで吊り下げて使いやすい、整理上手なトラベルポーチ",
    category: "吊り下げポーチ",
    usage: "吊り下げ収納",
    bestScene: "ホテルの洗面台・クローゼット",
    placeholderLabel: "吊り下げポーチ画像",
    placeholderIcon: "🪝",
    description: "ホテルのドアや洗面台のタオルバーに吊り下げて使えるトラベルポーチ。日本ブランドならではの細かい仕切り設計で、コスメ・スキンケア・小物などを種類ごとにすっきり収納できます。",
    scene: "宿泊先の洗面台やドアへの吊り下げ使用、コスメ・スキンケアグッズの整理、クローゼットまわりの荷物管理",
    points: [
      "吊り下げフック付きでホテルの洗面台やドアにかけてすぐ使える",
      "豊富な仕切りでコスメやスキンケアを種類別に管理しやすく、探し物が減る",
      "衣類の圧縮機能も搭載しており、1つで2役こなせるコスパの高さが魅力"
    ],
    caution: "容量はコンパクト設計のため、荷物が多い人には少し物足りないと感じることがあります。2〜3泊程度の旅行向きです。",
    recommendedFor: "ホテルで荷物を広げすぎず、すっきり使いたい人",
    affiliateUrl: "https://amzn.to/4u0sAmE",
    cta: "Amazonで吊り下げポーチをチェック",
    image: "https://m.media-amazon.com/images/I/61VOMNPj31L._AC_SL1500_.jpg"
  },
  {
    rank: 3,
    name: "ソロツーリスト シャワーポーチ 防水ポーチ",
    catchCopy: "お風呂や洗面グッズをまとめたいときに便利な防水ポーチ",
    category: "防水ポーチ",
    usage: "防水収納・洗面グッズ管理",
    bestScene: "大浴場・シャワー室",
    placeholderLabel: "防水ポーチ画像",
    placeholderIcon: "💧",
    description: "シャンプー・洗顔・ボディソープなどの洗面グッズをまとめて収納できる防水ポーチ。大浴場やシャワー室へそのまま持ち込める設計で、濡れる場面でも安心して使えます。",
    scene: "大浴場やシャワー室への持ち込み、洗面グッズのまとめ収納、スーツケース内の液漏れ対策",
    points: [
      "本格防水素材でシャワー室や大浴場へそのまま持ち込み可能",
      "液体アイテムをまとめて収納でき、スーツケース内の液漏れ事故を防げる",
      "アウトドアブランド「ソロツーリスト」の信頼品質で、丈夫で繰り返し使える"
    ],
    caution: "防水素材のため通気性はありません。中身を取り出した後はポーチを開けて風通しの良い場所で乾かしておくのが長持ちのコツです。",
    recommendedFor: "シャンプー・洗顔など濡れた小物も分けて清潔に持ち歩きたい人",
    affiliateUrl: "https://amzn.to/4d491nx",
    cta: "Amazonで防水ポーチを確認する",
    image: "https://m.media-amazon.com/images/I/919jPUx3HvL._AC_SX695_.jpg"
  },
  {
    rank: 4,
    name: "BrickbangOKD 圧縮袋 旅行 衣類圧縮バッグ｜かる旅・ビジネス出張向け 大容量 防水防臭防塵 可重复使用 抽気口径汎用 スーツケース収納容易 ブラウン ，ミリタリーグリーン（ポンプ付属）",
    catchCopy: "ポンプ付きで衣類をしっかり圧縮したい人に",
    category: "ポンプ付き衣類圧縮袋",
    usage: "衣類の高圧縮（ポンプ式）",
    bestScene: "荷物が多い旅行・帰りの荷造り",
    placeholderLabel: "ポンプ付き圧縮袋画像",
    placeholderIcon: "🗜️",
    description: "専用ポンプが付属した大容量の衣類圧縮袋。ポンプで空気をしっかり抜くことで高い圧縮率を実現します。防水・防臭・防塵機能も備えており、繰り返し使えるエコ設計です。",
    scene: "制服以外の私服や部屋着、タオル類のまとめ収納、帰りの荷物が増えたときの圧縮整理",
    points: [
      "付属ポンプで手圧縮より高い圧縮率を実現。大量の衣類もコンパクトにまとまる",
      "防水・防臭・防塵の3機能つきで、においや湿気が気になる季節も清潔に使える",
      "繰り返し使えるエコ設計で、修学旅行後の旅行や帰省にも引き続き活躍"
    ],
    caution: "ポンプを別途持参する必要があるため荷物が1点増えます。また、詰めすぎると袋の素材に負担がかかる場合があるため、適度な量を目安に使用してください。",
    recommendedFor: "荷物が多くなりがちな人、できるだけ荷物をコンパクトにまとめたい人",
    affiliateUrl: "https://amzn.to/4tyA1k6",
    cta: "Amazonでポンプ付き圧縮袋を見る",
    image: "https://m.media-amazon.com/images/I/61hI9FFFF8L._AC_SL1500_.jpg"
  },
  {
    rank: 5,
    name: "CIO SMARTCOBY Slim",
    catchCopy: "スマホの充電切れが不安な人に、薄型で持ち歩きやすい充電対策",
    category: "モバイルバッテリー",
    usage: "スマホ・デバイスの充電補給",
    bestScene: "移動中・自由行動",
    placeholderLabel: "モバイルバッテリー画像",
    placeholderIcon: "🔋",
    description: "日本のCIOブランドが手がける超薄型モバイルバッテリー。スリムなボディにしっかりした容量を凝縮し、USB-C対応の高速充電が可能。スマートフォンやワイヤレスイヤホンなど複数のデバイスに対応しています。",
    scene: "移動中・自由行動中の充電補給、集合前のLINE連絡、写真・動画撮影が多い観光日",
    points: [
      "業界最薄クラスのスリムデザインで、ポーチやポケットにすっと収まりやすい",
      "USB-C対応の高速充電でiPhoneもAndroidも対応。カメラやイヤホンにも使える汎用性",
      "過充電・過放電の保護機能つき。日本ブランドならではの品質と安全性"
    ],
    caution: "容量は大容量タイプではないため、スマートフォンを1日中ヘビーに使う場合は1〜2回の補充を目安にしてください。大容量が必要な場合は他モデルとの比較もおすすめです。",
    recommendedFor: "写真や動画をたくさん撮りたい人、移動中の充電切れが心配な人",
    affiliateUrl: "https://amzn.to/4wpWp1u",
    cta: "Amazonでモバイルバッテリーを見る",
    image: "https://m.media-amazon.com/images/I/51KL2+BDXCL._AC_SL1500_.jpg"
  }
];

// =============================================================
// 順位ごとの見た目設定 — 色・ボタンクラスをここで管理
// =============================================================
const RANK_CONFIG = {
  1: {
    btnClass:  "btn-amazon-gold",
    badgeBg:   "linear-gradient(135deg,#ffe066,#ffb830)",
    summaryBg: "linear-gradient(135deg,#ffe066,#ffb830)"
  },
  2: {
    btnClass:  "btn-amazon-secondary",
    badgeBg:   "linear-gradient(135deg,#e0e8f0,#b0bec5)",
    summaryBg: "linear-gradient(135deg,#e0e8f0,#b0bec5)"
  },
  3: {
    btnClass:  "btn-amazon-orange",
    badgeBg:   "linear-gradient(135deg,#ffcba4,#e8a06a)",
    summaryBg: "linear-gradient(135deg,#ffcba4,#e8a06a)"
  },
  4: {
    btnClass:  "btn-amazon-secondary",
    badgeBg:   "linear-gradient(135deg,#d8cfee,#b8adda)",
    summaryBg: "linear-gradient(135deg,#d8cfee,#b8adda)"
  },
  5: {
    btnClass:  "btn-amazon-mint",
    badgeBg:   "linear-gradient(135deg,#c5e8e0,#8ecfc3)",
    summaryBg: "linear-gradient(135deg,#c5e8e0,#8ecfc3)"
  }
};

// =============================================================
// レンダリング関数
// =============================================================

/** 画像URLかプレースホルダー文字列かを判定して対応するHTMLを返す */
function renderImage(image, altText, placeholderLabel, placeholderIcon) {
  if (/^https?:\/\//.test(image)) {
    return `<img src="${image}" alt="${escapeHtml(altText)}" class="product-img" loading="lazy">`;
  }
  return `<div class="product-img-placeholder" aria-label="${escapeHtml(placeholderLabel)}（準備中）">
    <span class="placeholder-icon">${escapeHtml(placeholderIcon || "🖼️")}</span>
    <span class="placeholder-label">${escapeHtml(placeholderLabel)}</span>
    <span class="placeholder-sub">画像URLを image フィールドに設定すると表示されます</span>
  </div>`;
}

/** XSS対策用エスケープ */
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** おすすめポイントのリストHTMLを生成 */
function renderPoints(points, rank) {
  return points.map(point => `
    <li>
      <span class="point-check rank-${rank}">✓</span>
      <span>${escapeHtml(point)}</span>
    </li>`).join("");
}

/**
 * ランキング一覧（クイックリスト）を生成
 * ランキングセクション上部に配置し、各商品へのAmazon導線を提供する
 */
function renderQuickList() {
  const items = products.map(p => {
    const cfg = RANK_CONFIG[p.rank];
    return `
<div class="quick-rank-item">
  <div class="quick-rank-badge rank-badge rank-${p.rank}">
    <span class="rank-label">No.</span>
    <span class="rank-num">${p.rank}</span>
  </div>
  <div class="quick-rank-info">
    <span class="quick-rank-category">${escapeHtml(p.category)}</span>
    <span class="quick-rank-name">${escapeHtml(p.name)}</span>
  </div>
  <a href="${escapeHtml(p.affiliateUrl)}"
     target="_blank"
     rel="noopener noreferrer"
     class="quick-rank-btn ${escapeHtml(cfg.btnClass)}">
    <span>🛒</span>
    ${escapeHtml(p.cta)}
  </a>
</div>`.trim();
  }).join("\n");

  return `<div class="quick-rank-note">気になる商品はこちらから直接確認できます。修学旅行前に必要なものを早めにチェックしておくと安心です。</div>\n${items}`;
}

/**
 * 1商品分のカードHTMLを生成（セクション区切りラベル + カード本体）
 * 表示順: 商品名 → キャッチコピー → どんな商品か → 修学旅行で役立つ場面
 *         → おすすめポイント → 注意点 → こんな人におすすめ → CTAボタン
 */
function renderCard(p) {
  const cfg = RANK_CONFIG[p.rank];
  const no1Banner = p.rank === 1
    ? `<div class="no1-banner">🏆 編集部イチ推し！コスパと使いやすさのバランスで高評価</div>`
    : "";

  const divider = `
<div class="rank-section-divider">
  <span class="rank-section-num">第${p.rank}位</span>
  <span class="rank-section-line"></span>
  <span class="rank-section-category">${escapeHtml(p.category)}</span>
</div>`.trim();

  const card = `
<article class="product-card rank-${p.rank}" id="product-${p.rank}">
  <div class="product-card-header">
    <div class="rank-badge rank-${p.rank}">
      <span class="rank-label">No.</span>
      <span class="rank-num">${p.rank}</span>
    </div>
    <div class="product-name-wrap">
      <div class="product-type-tag">${escapeHtml(p.category)}</div>
      <div class="product-name">${escapeHtml(p.name)}</div>
    </div>
  </div>
  <div class="product-card-body">
    ${renderImage(p.image, p.name, p.placeholderLabel, p.placeholderIcon)}
    ${no1Banner}

    <p class="product-catchcopy">${escapeHtml(p.catchCopy)}</p>

    <div class="review-section">
      <div class="review-section-label">どんな商品か</div>
      <p class="review-section-text">${escapeHtml(p.description)}</p>
    </div>

    <div class="review-section">
      <div class="review-section-label">修学旅行で役立つ場面</div>
      <p class="review-section-text">${escapeHtml(p.scene)}</p>
    </div>

    <div class="review-section">
      <div class="review-section-label review-section-label--points">おすすめポイント</div>
      <ul class="points-list">
        ${renderPoints(p.points, p.rank)}
      </ul>
    </div>

    <div class="review-section review-caution">
      <div class="review-section-label">注意点</div>
      <p class="review-section-text">${escapeHtml(p.caution)}</p>
    </div>

    <div class="recommend-for-box">
      <span class="recommend-for-label rank-${p.rank}">こんな人におすすめ</span>
      <span class="recommend-for-text">${escapeHtml(p.recommendedFor)}</span>
    </div>

    <a href="${escapeHtml(p.affiliateUrl)}"
       target="_blank"
       rel="noopener noreferrer"
       class="btn-amazon ${escapeHtml(cfg.btnClass)}">
      <span class="btn-icon">🛒</span>
      ${escapeHtml(p.cta)}
    </a>
  </div>
</article>`.trim();

  return `${divider}\n${card}`;
}

/**
 * 比較表の1行HTMLを生成（6列: 順位 / 商品名 / 用途 / おすすめ場面 / 向いている人 / Amazon）
 */
function renderSummaryRow(p) {
  const cfg = RANK_CONFIG[p.rank];
  return `
<tr>
  <td><span class="summary-rank" style="background:${cfg.summaryBg}">${p.rank}</span></td>
  <td class="summary-name">${escapeHtml(p.name)}</td>
  <td>${escapeHtml(p.usage)}</td>
  <td>${escapeHtml(p.bestScene)}</td>
  <td>${escapeHtml(p.recommendedFor)}</td>
  <td>
    <a href="${escapeHtml(p.affiliateUrl)}"
       target="_blank"
       rel="noopener noreferrer"
       class="summary-link">${escapeHtml(p.cta)}</a>
  </td>
</tr>`.trim();
}

/**
 * 記事末尾CTAグリッドを生成
 */
function renderEndCta() {
  return products.map(p => {
    const cfg = RANK_CONFIG[p.rank];
    return `
<div class="end-cta-item">
  <div class="end-cta-rank" style="background:${cfg.summaryBg}">第${p.rank}位</div>
  <div class="end-cta-category">${escapeHtml(p.category)}</div>
  <div class="end-cta-name">${escapeHtml(p.name)}</div>
  <a href="${escapeHtml(p.affiliateUrl)}"
     target="_blank"
     rel="noopener noreferrer"
     class="btn-amazon ${escapeHtml(cfg.btnClass)}">
    <span class="btn-icon">🛒</span>
    ${escapeHtml(p.cta)}
  </a>
</div>`.trim();
  }).join("\n");
}

/** 全コンポーネントをDOMに注入 */
function renderAll() {
  // ランキング一覧クイックリスト
  const quickList = document.getElementById("quick-ranking-list");
  if (quickList) quickList.innerHTML = renderQuickList();

  // ランキングカード
  const rankingList = document.getElementById("ranking-list");
  if (rankingList) rankingList.innerHTML = products.map(renderCard).join("\n");

  // 比較表
  const summaryTbody = document.getElementById("summary-tbody");
  if (summaryTbody) summaryTbody.innerHTML = products.map(renderSummaryRow).join("\n");

  // まとめCTAボタン（1位商品）
  const ctaWrap = document.getElementById("summary-cta-btn");
  if (ctaWrap && products.length > 0) {
    const top = products[0];
    const cfg = RANK_CONFIG[top.rank];
    ctaWrap.innerHTML = `
<a href="${escapeHtml(top.affiliateUrl)}"
   target="_blank"
   rel="noopener noreferrer"
   class="btn-amazon btn-amazon-primary"
   style="max-width:360px;margin:0 auto;">
  <span class="btn-icon">🏆</span>
  ${escapeHtml(top.cta)}
</a>`.trim();
  }

  // 記事末尾CTAグリッド
  const endCta = document.getElementById("end-cta");
  if (endCta) endCta.innerHTML = renderEndCta();
}

// =============================================================
// スクロールアニメーション
// =============================================================
function initScrollAnimation() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll(".product-card, .fade-in").forEach((el, i) => {
    if (el.classList.contains("product-card")) {
      el.style.transitionDelay = `${i * 0.06}s`;
    }
    observer.observe(el);
  });
}

// =============================================================
// FAQ アコーディオン
// =============================================================
function initFaqAccordion() {
  document.querySelectorAll(".faq-question").forEach((btn) => {
    btn.addEventListener("click", () => {
      const expanded = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!expanded));
      btn.nextElementSibling.hidden = expanded;
    });
  });
}

// =============================================================
// 起動
// =============================================================
document.addEventListener("DOMContentLoaded", () => {
  renderAll();
  initScrollAnimation();
  initFaqAccordion();
});
