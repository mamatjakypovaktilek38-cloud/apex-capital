const i18n = {
  ru: {
    balance_label: "Свободный капитал",
    income_label: "Доход",
    net_worth_label: "Общий капитал",
    btn_deal: "Заключить сделку",
    biz_title: "Предприятия",
    biz_desc: "8 ключевых отраслей экономики",
    stock_title: "Фондовая биржа",
    stock_desc: "Покупка акций и колебания цен",
    re_title: "Недвижимость",
    re_desc: "Небоскрёбы, отели и офисы",
    lux_title: "Роскошная жизнь",
    lux_desc: "Суперкары, джеты, яхты и ассистенты",
    map_title: "Карта Бизнес-Империи",
    map_desc: "Глобальные штаб-квартиры в столицах мира",
    nav_main: "Главная",
    nav_biz: "Бизнес",
    nav_stock: "Биржа",
    nav_re: "Мүлк",
    nav_lux: "Люкс",
    nav_map: "Карта",
    buy_btn: "Купить",
    sell_btn: "Продать",
    open_btn: "Открыть филиал",
    opened_btn: "Штаб открыт",
    cost_lbl: "Цена",
    sec_lbl: "сек",
    shares_lbl: "акций",
    rent_lbl: "Аренда",
    bonus_lbl: "Бонус",
    multiplier_lbl: "Множитель дохода",
    news_label: "НОВОСТИ",
    max_rank_lbl: "Максимальный статус достигнут",
    next_goal_lbl: "Цель: {name} (${sum})",
    offline_alert: "С возвращением! Пока вас не было ({sec} сек), империя принесла {sum}."
  },
  kg: {
    balance_label: "Эркин капитал",
    income_label: "Киреше",
    net_worth_label: "Жалпы капитал",
    btn_deal: "Келишим түзүү",
    biz_title: "Ишканалар",
    biz_desc: "Экономиканын 8 негизги тармагы",
    stock_title: "Фондулук биржа",
    stock_desc: "Акция соодасы жана базардын динамикасы",
    re_title: "Кыймылсыз мүлк",
    re_desc: "Асман тиреген имараттар, отелдер",
    lux_title: "Ырахаттуу жашоо",
    lux_desc: "Суперкарлар, учактар, яхталар жана жардамчылар",
    map_title: "Бизнес-Империянын Картасы",
    map_desc: "Дүйнөлүк каржы борборлорундагы штабдар",
    nav_main: "Башкы",
    nav_biz: "Бизнес",
    nav_stock: "Биржа",
    nav_re: "Мүлк",
    nav_lux: "Люкс",
    nav_map: "Карта",
    buy_btn: "Сатып алуу",
    sell_btn: "Сатуу",
    open_btn: "Филиал ачуу",
    opened_btn: "Ачылган",
    cost_lbl: "Баасы",
    sec_lbl: "сек",
    shares_lbl: "даана",
    rent_lbl: "Ижара",
    bonus_lbl: "Бонус",
    multiplier_lbl: "Киреше көбөйткүчү",
    news_label: "ЖАҢЫЛЫКТАР",
    max_rank_lbl: "Эң жогорку даражага жеттиңиз",
    next_goal_lbl: "Максат: {name} (${sum})",
    offline_alert: "Кайтып келишиңиз менен! Сиз жок кезде ({sec} сек), империя {sum} пайда алып келди."
  },
  en: {
    balance_label: "Available Capital",
    income_label: "Income",
    net_worth_label: "Total Net Worth",
    btn_deal: "Execute Deal",
    biz_title: "Enterprises",
    biz_desc: "8 core economic sectors",
    stock_title: "Stock Exchange",
    stock_desc: "Trade equity and track market trends",
    re_title: "Real Estate",
    re_desc: "Skyscrapers, hotels and office hubs",
    lux_title: "Luxury & Lifestyle",
    lux_desc: "Supercars, private jets, yachts and staff",
    map_title: "Business Empire Map",
    map_desc: "Global headquarters across world hubs",
    nav_main: "Overview",
    nav_biz: "Business",
    nav_stock: "Exchange",
    nav_re: "Property",
    nav_lux: "Luxury",
    nav_map: "Empire Map",
    buy_btn: "Acquire",
    sell_btn: "Sell",
    open_btn: "Establish HQ",
    opened_btn: "Operational",
    cost_lbl: "Cost",
    sec_lbl: "sec",
    shares_lbl: "shares",
    rent_lbl: "Rent",
    bonus_lbl: "Bonus",
    multiplier_lbl: "Income Multiplier",
    news_label: "NEWS",
    max_rank_lbl: "Peak Tycoon Status Achieved",
    next_goal_lbl: "Goal: {name} (${sum})",
    offline_alert: "Welcome back! While you were offline ({sec}s), empire generated {sum}."
  }
};

const ranks = [
  { level: 1, goal: 0, ru: "Начинающий предприниматель", kg: "Жаңы баштаган ишкер", en: "Novice Entrepreneur" },
  { level: 2, goal: 1000, ru: "Малый бизнесмен", kg: "Чакан ишкер", en: "Small Business Owner" },
  { level: 3, goal: 25000, ru: "Миллионер", kg: "Миллионер", en: "Millionaire" },
  { level: 4, goal: 250000, ru: "Мультимиллионер", kg: "Мультимиллионер", en: "Multi-Millionaire" },
  { level: 5, goal: 2000000, ru: "Миллиардер", kg: "Миллиардер", en: "Billionaire" },
  { level: 6, goal: 20000000, ru: "Магнат", kg: "Магнат", en: "Business Magnate" },
  { level: 7, goal: 150000000, ru: "Корпоративный гигант", kg: "Корпоративдик гигант", en: "Corporate Giant" },
  { level: 8, goal: 1000000000, ru: "Международный инвестор", kg: "Эл аралык инвестор", en: "Global Investor" },
  { level: 9, goal: 10000000000, ru: "Бизнес-легенда", kg: "Бизнес-легенда", en: "Business Legend" },
  { level: 10, goal: 100000000000, ru: "Global Tycoon", kg: "Global Tycoon", en: "Global Tycoon" }
];

const baseBusinesses = [
  { id: "supermarket", icon: "🛒", cost: 50, income: 2, count: 0, mult: 1.15, ru: "Сеть супермаркетов", kg: "Супермаркеттер түйүнү", en: "Supermarket Chain" },
  { id: "telecom", icon: "📡", cost: 300, income: 14, count: 0, mult: 1.16, ru: "Телекоммуникации", kg: "Телекоммуникация", en: "Telecom Operator" },
  { id: "it_company", icon: "💻", cost: 1800, income: 90, count: 0, mult: 1.18, ru: "IT-компания", kg: "IT-компаниясы", en: "Tech Enterprise" },
  { id: "real_estate_firm", icon: "🏗️", cost: 12000, income: 650, count: 0, mult: 1.20, ru: "Девелоперская компания", kg: "Курулуш компаниясы", en: "Real Estate Dev" },
  { id: "auto", icon: "🏎️", cost: 85000, income: 4800, count: 0, mult: 1.21, ru: "Автопроизводитель", kg: "Автоунаа заводу", en: "Automotive Factory" },
  { id: "airline", icon: "✈️", cost: 650000, income: 38000, count: 0, mult: 1.22, ru: "Авиакомпания", kg: "Авиакомпания", en: "Aviation Holding" },
  { id: "oil", icon: "🛢️", cost: 5000000, income: 310000, count: 0, mult: 1.24, ru: "Нефтяная компания", kg: "Мунай компаниясы", en: "Oil Conglomerate" },
  { id: "bank", icon: "🏛️", cost: 45000000, income: 2900000, count: 0, mult: 1.25, ru: "Банк", kg: "Банк", en: "Investment Bank" }
];

const baseRealEstate = [
  { id: "re_offices", icon: "🏢", cost: 60000, income: 2800, count: 0, mult: 1.25, ru: "Офисный этаж", kg: "Офис кабаты", en: "Office Floor" },
  { id: "re_hotel", icon: "🏨", cost: 750000, income: 38000, count: 0, mult: 1.28, ru: "Отель 5 Звезд", kg: "5 жылдыздуу отель", en: "5-Star Hotel" },
  { id: "re_mall", icon: "🛍️", cost: 5500000, income: 320000, count: 0, mult: 1.30, ru: "Торговый Центр", kg: "Соода борбору", en: "Mega Mall" },
  { id: "re_skyscraper", icon: "🏙️", cost: 50000000, income: 3200000, count: 0, mult: 1.35, ru: "Небоскрёб", kg: "Асман тиреген имарат", en: "Skyscraper" }
];

const baseStocks = [
  { id: "APEX", name: "APEX Holdings", price: 100, prevPrice: 100, shares: 0, history: [95, 98, 100] },
  { id: "NVDA", name: "Nova AI Systems", price: 250, prevPrice: 250, shares: 0, history: [240, 245, 250] },
  { id: "GLD", name: "Apex Gold Mining", price: 75, prevPrice: 75, shares: 0, history: [72, 74, 75] }
];

const baseLuxury = [
  { id: "lux_assistant", icon: "👔", cost: 5000, clickBonus: 5, count: 0, mult: 1.5, ru: "Личный ассистент", kg: "Жеке жардамчы", en: "Personal Assistant" },
  { id: "lux_supercar", icon: "🏎️", cost: 250000, clickBonus: 250, count: 0, mult: 1.6, ru: "Гараж суперкаров", kg: "Суперкарлар гаражы", en: "Supercar Fleet" },
  { id: "lux_jet", icon: "🛩️", cost: 15000000, clickBonus: 15000, count: 0, mult: 1.8, ru: "Частный самолёт", kg: "Жеке учак", en: "Private Jet" },
  { id: "lux_yacht", icon: "🛥️", cost: 120000000, clickBonus: 120000, count: 0, mult: 2.0, ru: "Мега-яхта", kg: "Чоң яхта", en: "Mega Yacht" }
];

// Города для Карты Империи
const baseCities = [
  { id: "nyc", name: "Нью-Йорк", en: "New York", kg: "Нью-Йорк", x: 110, y: 80, cost: 5000000, multBonus: 0.10, unlocked: false },
  { id: "lon", name: "Лондон", en: "London", kg: "Лондон", x: 200, y: 65, cost: 25000000, multBonus: 0.15, unlocked: false },
  { id: "dxb", name: "Дубай", en: "Dubai", kg: "Дубай", x: 260, y: 105, cost: 100000000, multBonus: 0.20, unlocked: false },
  { id: "sgp", name: "Сингапур", en: "Singapore", kg: "Сингапур", x: 310, y: 140, cost: 500000000, multBonus: 0.25, unlocked: false },
  { id: "tyo", name: "Токио", en: "Tokyo", kg: "Токио", x: 350, y: 85, cost: 2000000000, multBonus: 0.35, unlocked: false }
];

const newsEvents = [
  { ru: "Бум искусственного интеллекта! Акции технологических гигантов растут.", kg: "Жасалма интеллекттин өсүшү! IT акциялары кымбаттоодо.", en: "AI Boom! Tech stocks are skyrocketing." },
  { ru: "Центральный банк сохранил ставку. Рынок недвижимости оживился.", kg: "Борбордук банк ченемди сактап калды. Кыймылсыз мүлк базары жанданды.", en: "Central bank maintains rate. Real estate activity surges." },
  { ru: "Спрос на люксовые активы достиг исторического максимума.", kg: "Люкс буюмдарга болгон суроо-талап рекорддук чекке жетти.", en: "Luxury assets demand reaches historic peak." },
  { ru: "Международный экономический форум открыл новые горизонты для холдингов.", kg: "Эл аралык экономикалык форум жаңы мүмкүнчүлүктөрдү ачты.", en: "Global economic summit unlocks new venture potential." }
];

const state = {
  lang: "ru",
  balance: 0,
  clickPower: 1,
  incomePerSec: 0,
  soundEnabled: true,
  businesses: JSON.parse(JSON.stringify(baseBusinesses)),
  realEstate: JSON.parse(JSON.stringify(baseRealEstate)),
  stocks: JSON.parse(JSON.stringify(baseStocks)),
  luxury: JSON.parse(JSON.stringify(baseLuxury)),
  cities: JSON.parse(JSON.stringify(baseCities)),
  activeStockIdx: 0,
  lastSaveTime: Date.now()
};

// Звуковой синтезатор (Web Audio API)
let audioCtx = null;
function playSound(type) {
  if (!state.soundEnabled) return;
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    const now = audioCtx.currentTime;

    if (type === "click") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(600, now);
      osc.frequency.exponentialRampToValueAtTime(150, now + 0.05);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.05);
      osc.start(now);
      osc.stop(now + 0.05);
    } else if (type === "buy") {
      osc.type = "triangle";
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.setValueAtTime(660, now + 0.06);
      osc.frequency.setValueAtTime(880, now + 0.12);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
      osc.start(now);
      osc.stop(now + 0.25);
    } else if (type === "cash") {
      osc.type = "square";
      osc.frequency.setValueAtTime(987, now);
      osc.frequency.setValueAtTime(1318, now + 0.08);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
      osc.start(now);
      osc.stop(now + 0.3);
    }
  } catch (err) {
    // Тихо игнорируем, если браузер блокирует звук до первого взаимодействия
  }
}

// DOM Элементы
const balanceValEl = document.getElementById("balance-val");
const incomeValEl = document.getElementById("income-val");
const netWorthValEl = document.getElementById("net-worth-val");
const rankNameEl = document.getElementById("rank-name");
const rankStepEl = document.getElementById("rank-step");
const rankBarEl = document.getElementById("rank-bar");
const rankNextEl = document.getElementById("rank-next");
const businessListEl = document.getElementById("business-list");
const reListEl = document.getElementById("re-list");
const stockListEl = document.getElementById("stock-list");
const luxuryListEl = document.getElementById("luxury-list");
const citiesListEl = document.getElementById("cities-list");
const newsTextEl = document.getElementById("news-text");
const langSelectEl = document.getElementById("lang-select");
const btnSound = document.getElementById("btn-sound");
const btnDeal = document.getElementById("btn-deal");
const dealArea = document.getElementById("deal-area");
const canvas = document.getElementById("market-canvas");
const ctx = canvas ? canvas.getContext("2d") : null;
const mapCanvas = document.getElementById("map-canvas");
const mapCtx = mapCanvas ? mapCanvas.getContext("2d") : null;

function t(key) {
  return i18n[state.lang][key] || key;
}

function formatMoney(num) {
  if (num >= 1e12) return "$" + (num / 1e12).toFixed(2) + "T";
  if (num >= 1e9) return "$" + (num / 1e9).toFixed(2) + "B";
  if (num >= 1e6) return "$" + (num / 1e6).toFixed(2) + "M";
  return "$" + Math.floor(num).toLocaleString("en-US");
}

function getGlobalMultiplier() {
  const bonus = state.cities.reduce((sum, c) => sum + (c.unlocked ? c.multBonus : 0), 0);
  return 1 + bonus;
}

function calculateIncome() {
  const bizIncome = state.businesses.reduce((sum, b) => sum + (b.count * b.income), 0);
  const reIncome = state.realEstate.reduce((sum, r) => sum + (r.count * r.income), 0);
  
  const mult = getGlobalMultiplier();
  state.incomePerSec = Math.round((bizIncome + reIncome) * mult);

  const luxBonus = state.luxury.reduce((sum, l) => sum + (l.count * l.clickBonus), 0);
  state.clickPower = Math.max(1, Math.floor(1 + Math.sqrt(state.incomePerSec)) + luxBonus);

  const payoutEl = document.getElementById("click-payout");
  if (payoutEl) {
    payoutEl.textContent = "+" + formatMoney(state.clickPower);
  }
}

function getNetWorth() {
  let total = state.balance;
  state.businesses.forEach(b => { total += b.count * b.cost; });
  state.realEstate.forEach(r => { total += r.count * r.cost; });
  state.stocks.forEach(s => { total += s.shares * s.price; });
  state.luxury.forEach(l => { total += l.count * l.cost; });
  state.cities.forEach(c => { if (c.unlocked) total += c.cost; });
  return total;
}

function updateRank(netWorth) {
  let rankIdx = 0;
  for (let i = ranks.length - 1; i >= 0; i--) {
    if (netWorth >= ranks[i].goal) {
      rankIdx = i;
      break;
    }
  }

  const current = ranks[rankIdx];
  if (rankNameEl) rankNameEl.textContent = current[state.lang];
  if (rankStepEl) rankStepEl.textContent = current.level + " / " + ranks.length;

  const next = ranks[rankIdx + 1];
  if (next) {
    const range = next.goal - current.goal;
    const progress = Math.min(100, Math.max(0, ((netWorth - current.goal) / range) * 100));
    if (rankBarEl) rankBarEl.style.width = progress + "%";
    if (rankNextEl) {
      rankNextEl.textContent = t("next_goal_lbl")
        .replace("{name}", next[state.lang])
        .replace("{sum}", formatMoney(next.goal));
    }
  } else {
    if (rankBarEl) rankBarEl.style.width = "100%";
    if (rankNextEl) rankNextEl.textContent = t("max_rank_lbl");
  }
}

function drawChart() {
  if (!canvas || !ctx) return;
  const stock = state.stocks[state.activeStockIdx];
  if (!stock) return;

  const symEl = document.getElementById("chart-symbol");
  const priceEl = document.getElementById("chart-price");
  const tagEl = document.getElementById("chart-tag");

  if (symEl) symEl.textContent = stock.name;
  if (priceEl) priceEl.textContent = "$" + stock.price.toFixed(2);

  const diffPct = (((stock.price - stock.prevPrice) / stock.prevPrice) * 100);
  if (tagEl) {
    tagEl.textContent = (diffPct >= 0 ? "+" : "") + diffPct.toFixed(2) + "%";
    tagEl.className = "chart-tag " + (diffPct >= 0 ? "up" : "down");
  }

  const w = canvas.width;
  const h = canvas.height;
  ctx.clearRect(0, 0, w, h);

  const arr = stock.history;
  const min = Math.min(...arr) * 0.98;
  const max = Math.max(...arr) * 1.02;
  const range = max - min || 1;

  ctx.beginPath();
  arr.forEach((val, i) => {
    const x = (i / (arr.length - 1)) * w;
    const y = h - ((val - min) / range) * (h - 20) - 10;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });

  ctx.strokeStyle = diffPct >= 0 ? "#10b981" : "#ef4444";
  ctx.lineWidth = 2.5;
  ctx.stroke();
}

// Отрисовка интерактивной карты
function drawEmpireMap() {
  if (!mapCanvas || !mapCtx) return;
  const w = mapCanvas.width;
  const h = mapCanvas.height;
  mapCtx.clearRect(0, 0, w, h);

  // Сетка координат
  mapCtx.strokeStyle = "rgba(255, 255, 255, 0.04)";
  mapCtx.lineWidth = 1;
  for (let x = 0; x < w; x += 40) {
    mapCtx.beginPath();
    mapCtx.moveTo(x, 0);
    mapCtx.lineTo(x, h);
    mapCtx.stroke();
  }
  for (let y = 0; y < h; y += 40) {
    mapCtx.beginPath();
    mapCtx.moveTo(0, y);
    mapCtx.lineTo(w, y);
    mapCtx.stroke();
  }

  // Соединительные линии между открытыми столицами
  const unlocked = state.cities.filter(c => c.unlocked);
  if (unlocked.length > 1) {
    mapCtx.beginPath();
    mapCtx.strokeStyle = "rgba(245, 158, 11, 0.35)";
    mapCtx.lineWidth = 2;
    mapCtx.setLineDash([4, 4]);
    for (let i = 0; i < unlocked.length - 1; i++) {
      mapCtx.moveTo(unlocked[i].x, unlocked[i].y);
      mapCtx.lineTo(unlocked[i + 1].x, unlocked[i + 1].y);
    }
    mapCtx.stroke();
    mapCtx.setLineDash([]);
  }

  // Точки городов
  state.cities.forEach(c => {
    mapCtx.beginPath();
    mapCtx.arc(c.x, c.y, c.unlocked ? 7 : 4, 0, Math.PI * 2);
    mapCtx.fillStyle = c.unlocked ? "#f59e0b" : "#475569";
    mapCtx.fill();

    if (c.unlocked) {
      mapCtx.beginPath();
      mapCtx.arc(c.x, c.y, 12, 0, Math.PI * 2);
      mapCtx.strokeStyle = "rgba(245, 158, 11, 0.4)";
      mapCtx.lineWidth = 1.5;
      mapCtx.stroke();
    }

    mapCtx.font = "10px sans-serif";
    mapCtx.fillStyle = c.unlocked ? "#fbbf24" : "#64748b";
    mapCtx.fillText(c[state.lang] || c.name, c.x + 9, c.y + 3);
  });
}

function applyLanguage() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (i18n[state.lang][key]) {
      el.textContent = i18n[state.lang][key];
    }
  });
  if (langSelectEl) langSelectEl.value = state.lang;
}

function render() {
  const netWorth = getNetWorth();

  if (balanceValEl) balanceValEl.textContent = formatMoney(state.balance);
  if (incomeValEl) incomeValEl.textContent = "+" + formatMoney(state.incomePerSec) + " / " + t("sec_lbl");
  if (netWorthValEl) netWorthValEl.textContent = formatMoney(netWorth);

  updateRank(netWorth);

  if (businessListEl) {
    businessListEl.innerHTML = "";
    state.businesses.forEach(b => {
      const card = document.createElement("div");
      card.className = "card";
      const canAfford = state.balance >= b.cost;
      card.innerHTML = 
        '<div class="card-left">' +
          '<div class="card-icon">' + b.icon + '</div>' +
          '<div class="card-info">' +
            '<div class="card-title">' + b[state.lang] + ' (' + b.count + ')</div>' +
            '<div class="card-yield">+' + formatMoney(b.income) + ' / ' + t("sec_lbl") + '</div>' +
            '<div class="card-cost">' + t("cost_lbl") + ': ' + formatMoney(b.cost) + '</div>' +
          '</div>' +
        '</div>' +
        '<button class="btn-buy" ' + (!canAfford ? 'disabled' : '') + ' data-id="' + b.id + '">' +
          t("buy_btn") +
        '</button>';
      businessListEl.appendChild(card);
    });
  }

  if (reListEl) {
    reListEl.innerHTML = "";
    state.realEstate.forEach(r => {
      const card = document.createElement("div");
      card.className = "card";
      const canAfford = state.balance >= r.cost;
      card.innerHTML = 
        '<div class="card-left">' +
          '<div class="card-icon">' + r.icon + '</div>' +
          '<div class="card-info">' +
            '<div class="card-title">' + r[state.lang] + ' (' + r.count + ')</div>' +
            '<div class="card-yield">' + t("rent_lbl") + ': +' + formatMoney(r.income) + ' / ' + t("sec_lbl") + '</div>' +
            '<div class="card-cost">' + t("cost_lbl") + ': ' + formatMoney(r.cost) + '</div>' +
          '</div>' +
        '</div>' +
        '<button class="btn-buy" ' + (!canAfford ? 'disabled' : '') + ' data-re-id="' + r.id + '">' +
          t("buy_btn") +
        '</button>';
      reListEl.appendChild(card);
    });
  }

  if (stockListEl) {
    stockListEl.innerHTML = "";
    state.stocks.forEach((s, idx) => {
      const card = document.createElement("div");
      card.className = "card";
      const canBuy = state.balance >= s.price;
      const canSell = s.shares > 0;
      card.innerHTML = 
        '<div class="card-left" style="cursor:pointer;" onclick="selectStock(' + idx + ')">' +
          '<div class="card-info">' +
            '<div class="card-title">' + s.name + ' (' + s.shares + ' ' + t("shares_lbl") + ')</div>' +
            '<div class="card-cost">' + t("cost_lbl") + ': $' + s.price.toFixed(2) + '</div>' +
          '</div>' +
        '</div>' +
        '<div class="stock-btns">' +
          '<button class="btn-trade buy" ' + (!canBuy ? 'disabled' : '') + ' data-stock-buy="' + s.id + '">' + t("buy_btn") + '</button>' +
          '<button class="btn-trade sell" ' + (!canSell ? 'disabled' : '') + ' data-stock-sell="' + s.id + '">' + t("sell_btn") + '</button>' +
        '</div>';
      stockListEl.appendChild(card);
    });
  }

  if (luxuryListEl) {
    luxuryListEl.innerHTML = "";
    state.luxury.forEach(l => {
      const card = document.createElement("div");
      card.className = "card";
      const canAfford = state.balance >= l.cost;
      card.innerHTML = 
        '<div class="card-left">' +
          '<div class="card-icon">' + l.icon + '</div>' +
          '<div class="card-info">' +
            '<div class="card-title">' + l[state.lang] + ' (' + l.count + ')</div>' +
            '<div class="card-yield">' + t("bonus_lbl") + ': +' + formatMoney(l.clickBonus) + ' / клик</div>' +
            '<div class="card-cost">' + t("cost_lbl") + ': ' + formatMoney(l.cost) + '</div>' +
          '</div>' +
        '</div>' +
        '<button class="btn-buy" ' + (!canAfford ? 'disabled' : '') + ' data-lux-id="' + l.id + '">' +
          t("buy_btn") +
        '</button>';
      luxuryListEl.appendChild(card);
    });
  }

  if (citiesListEl) {
    citiesListEl.innerHTML = "";
    state.cities.forEach(c => {
      const card = document.createElement("div");
      card.className = "card";
      const canAfford = state.balance >= c.cost;
      const cityName = c[state.lang] || c.name;
      const bonusPct = Math.round(c.multBonus * 100);

      card.innerHTML = 
        '<div class="card-left">' +
          '<div class="card-icon">' + (c.unlocked ? '🏛️' : '🌐') + '</div>' +
          '<div class="card-info">' +
            '<div class="card-title">' + cityName + '</div>' +
            '<div class="card-yield">+' + bonusPct + '% ' + t("multiplier_lbl") + '</div>' +
            '<div class="card-cost">' + (c.unlocked ? '' : (t("cost_lbl") + ': ' + formatMoney(c.cost))) + '</div>' +
          '</div>' +
        '</div>' +
        '<button class="btn-buy" ' + (c.unlocked || !canAfford ? 'disabled' : '') + ' data-city-id="' + c.id + '">' +
          (c.unlocked ? t("opened_btn") : t("open_btn")) +
        '</button>';
      citiesListEl.appendChild(card);
    });
  }

  drawChart();
  drawEmpireMap();
}

window.selectStock = function(idx) {
  state.activeStockIdx = idx;
  drawChart();
};

function spawnFlyingNumber(x, y, text) {
  if (!dealArea) return;
  const el = document.createElement("div");
  el.className = "flying-number";
  el.textContent = text;
  el.style.left = x + "px";
  el.style.top = y + "px";
  dealArea.appendChild(el);
  setTimeout(() => el.remove(), 750);
}

if (btnDeal) {
  btnDeal.addEventListener("click", (e) => {
    state.balance += state.clickPower;
    playSound("click");
    const rect = dealArea.getBoundingClientRect();
    const x = e.clientX ? e.clientX - rect.left : rect.width / 2;
    const y = e.clientY ? e.clientY - rect.top : rect.height / 2;
    spawnFlyingNumber(x, y, "+" + formatMoney(state.clickPower));
    render();
  });
}

if (businessListEl) {
  businessListEl.addEventListener("click", (e) => {
    if (!e.target.classList.contains("btn-buy")) return;
    const b = state.businesses.find(item => item.id === e.target.getAttribute("data-id"));
    if (b && state.balance >= b.cost) {
      state.balance -= b.cost;
      b.count++;
      b.cost = Math.round(b.cost * b.mult);
      playSound("buy");
      calculateIncome();
      render();
      saveData();
    }
  });
}

if (reListEl) {
  reListEl.addEventListener("click", (e) => {
    if (!e.target.classList.contains("btn-buy")) return;
    const r = state.realEstate.find(item => item.id === e.target.getAttribute("data-re-id"));
    if (r && state.balance >= r.cost) {
      state.balance -= r.cost;
      r.count++;
      r.cost = Math.round(r.cost * r.mult);
      playSound("buy");
      calculateIncome();
      render();
      saveData();
    }
  });
}

if (luxuryListEl) {
  luxuryListEl.addEventListener("click", (e) => {
    if (!e.target.classList.contains("btn-buy")) return;
    const l = state.luxury.find(item => item.id === e.target.getAttribute("data-lux-id"));
    if (l && state.balance >= l.cost) {
      state.balance -= l.cost;
      l.count++;
      l.cost = Math.round(l.cost * l.mult);
      playSound("cash");
      calculateIncome();
      render();
      saveData();
    }
  });
}

// Открытие филиалов на Карте
if (citiesListEl) {
  citiesListEl.addEventListener("click", (e) => {
    if (!e.target.classList.contains("btn-buy")) return;
    const c = state.cities.find(item => item.id === e.target.getAttribute("data-city-id"));
    if (c && !c.unlocked && state.balance >= c.cost) {
      state.balance -= c.cost;
      c.unlocked = true;
      playSound("cash");
      calculateIncome();
      render();
      saveData();
    }
  });
}

if (stockListEl) {
  stockListEl.addEventListener("click", (e) => {
    const buyId = e.target.getAttribute("data-stock-buy");
    const sellId = e.target.getAttribute("data-stock-sell");

    if (buyId) {
      const s = state.stocks.find(item => item.id === buyId);
      if (s && state.balance >= s.price) {
        state.balance -= s.price;
        s.shares++;
        playSound("buy");
        render();
        saveData();
      }
    } else if (sellId) {
      const s = state.stocks.find(item => item.id === sellId);
      if (s && s.shares > 0) {
        state.balance += s.price;
        s.shares--;
        playSound("cash");
        render();
        saveData();
      }
    }
  });
}

// Переключатель звука
if (btnSound) {
  btnSound.addEventListener("click", () => {
    state.soundEnabled = !state.soundEnabled;
    btnSound.textContent = state.soundEnabled ? "🔊" : "🔇";
    saveData();
  });
}

setInterval(() => {
  const randomNews = newsEvents[Math.floor(Math.random() * newsEvents.length)];
  if (newsTextEl) {
    newsTextEl.textContent = randomNews[state.lang];
  }
}, 15000);

setInterval(() => {
  state.stocks.forEach(s => {
    s.prevPrice = s.price;
    const delta = (Math.random() - 0.48) * (s.price * 0.05);
    s.price = Math.max(5, s.price + delta);
    s.history.push(s.price);
    if (s.history.length > 25) s.history.shift();
  });
  render();
}, 3000);

if (langSelectEl) {
  langSelectEl.addEventListener("change", (e) => {
    state.lang = e.target.value;
    applyLanguage();
    render();
    saveData();
  });
}

document.querySelectorAll(".nav-item").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".nav-item").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".tab-pane").forEach(p => p.classList.remove("active"));
    btn.classList.add("active");
    const pane = document.getElementById(btn.getAttribute("data-tab"));
    if (pane) pane.classList.add("active");
    if (btn.getAttribute("data-tab") === "tab-stock") drawChart();
    if (btn.getAttribute("data-tab") === "tab-map") drawEmpireMap();
  });
});

setInterval(() => {
  if (state.incomePerSec > 0) {
    state.balance += state.incomePerSec;
    render();
  }
}, 1000);

function saveData() {
  state.lastSaveTime = Date.now();
  localStorage.setItem("apex_game_save_v4", JSON.stringify(state));
}

function loadData() {
  const raw = localStorage.getItem("apex_game_save_v4");
  if (!raw) {
    calculateIncome();
    applyLanguage();
    render();
    return;
  }

  try {
    const data = JSON.parse(raw);
    state.lang = data.lang || "ru";
    state.balance = data.balance || 0;
    state.soundEnabled = data.soundEnabled !== undefined ? data.soundEnabled : true;
    if (btnSound) btnSound.textContent = state.soundEnabled ? "🔊" : "🔇";

    if (data.businesses) {
      data.businesses.forEach(sItem => {
        const b = state.businesses.find(x => x.id === sItem.id);
        if (b) { b.count = sItem.count; b.cost = sItem.cost; }
      });
    }

    if (data.realEstate) {
      data.realEstate.forEach(sItem => {
        const r = state.realEstate.find(x => x.id === sItem.id);
        if (r) { r.count = sItem.count; r.cost = sItem.cost; }
      });
    }

    if (data.stocks) {
      data.stocks.forEach(sItem => {
        const s = state.stocks.find(x => x.id === sItem.id);
        if (s) { s.shares = sItem.shares; }
      });
    }

    if (data.luxury) {
      data.luxury.forEach(sItem => {
        const l = state.luxury.find(x => x.id === sItem.id);
        if (l) { l.count = sItem.count; l.cost = sItem.cost; }
      });
    }

    if (data.cities) {
      data.cities.forEach(sItem => {
        const c = state.cities.find(x => x.id === sItem.id);
        if (c) { c.unlocked = sItem.unlocked; }
      });
    }

    calculateIncome();
    applyLanguage();

    if (data.lastSaveTime && state.incomePerSec > 0) {
      const passedSec = Math.floor((Date.now() - data.lastSaveTime) / 1000);
      if (passedSec > 5) {
        const gain = passedSec * state.incomePerSec;
        state.balance += gain;
        alert(t("offline_alert").replace("{sec}", passedSec).replace("{sum}", formatMoney(gain)));
      }
    }
  } catch (err) {
    console.error("Save load error", err);
  }

  render();
}

setInterval(saveData, 10000);
loadData();