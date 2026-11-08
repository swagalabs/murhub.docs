"use strict";

const KEY = "murrhub-proto-v1";
const WD = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
const MO = ["янв", "фев", "мар", "апр", "мая", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"];
const SESSION = { clientId: "maria", masterId: "alina" };

const ICONS = {
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  map: '<path d="M9 18 3 20V6l6-2 6 2 6-2v14l-6 2-6-2z"/><path d="M9 4v14M15 6v14"/>',
  feed: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  chat: '<path d="M21 12a8 8 0 0 1-8 8H8l-5 3V12a8 8 0 1 1 18 0z"/>',
  user: '<circle cx="12" cy="8" r="3.2"/><path d="M5 19.2c1.4-3 3.8-4.4 7-4.4s5.6 1.4 7 4.4"/>',
  heart: '<path d="M12 19s-7-4.4-7-9a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 4.6-7 9-7 9z"/>',
  bookmark: '<path d="M7 4h10a1 1 0 0 1 1 1v15l-6-3-6 3V5a1 1 0 0 1 1-1z"/>',
  comment: '<path d="M6 17.5 4 20.5V6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v8A2.5 2.5 0 0 1 17.5 17H8z"/>',
  repost: '<path d="M17 7h3v3"/><path d="M20 10a8 8 0 0 1-14 5"/><path d="M7 17H4v-3"/><path d="M4 14a8 8 0 0 1 14-5"/>',
  star: '<path d="m12 3 2.6 5.4 6 .9-4.3 4.2 1 5.9L12 16.8 6.7 19.4l1-5.9L3.4 9.3l6-.9z"/>',
  check: '<path d="m5 12 5 5L20 7"/>',
  back: '<path d="M15 5 8 12l7 7"/>',
  arrow: '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
  mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M6 11a6 6 0 0 0 12 0M12 17v4"/>',
  send: '<path d="m4 12 16-8-6 16-2-6z"/>',
  clock: '<circle cx="12" cy="12" r="8"/><path d="M12 8v5l3 2"/>',
  pin: '<path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.2"/>',
  shield: '<path d="M12 3 5 6v6c0 4.2 2.8 7 7 9 4.2-2 7-4.8 7-9V6z"/>',
  home: '<path d="m4 11 8-7 8 7"/><path d="M7 10.5V20h10v-9.5"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  calendar: '<rect x="4" y="5" width="16" height="15" rx="2"/><path d="M8 3v4M16 3v4M4 10h16"/>',
  percent: '<path d="m6 18 12-12"/><circle cx="8" cy="7" r="1.6"/><circle cx="16" cy="17" r="1.6"/>',
  filter: '<path d="M4 6h16M7 12h10M10 18h4"/>',
  lock: '<rect x="6" y="11" width="12" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
  play: '<path d="m8 5 11 7-11 7z"/>',
};

const CRAFT = {
  nails: '<path d="M10 33V22c0-6 1.8-11 4-11s4 5 4 11v11"/><path d="M20 33V19c0-7 1.8-12 4-12s4 5 4 12v14"/><path d="M30 33V22c0-6 1.8-11 4-11s4 5 4 11v11"/>',
  hair: '<circle cx="16" cy="34" r="5"/><circle cx="32" cy="34" r="5"/><path d="M20.4 30.8 34 11"/><path d="M27.6 30.8 14 11"/>',
  tattoo: '<circle cx="24" cy="24" r="15"/><path fill="currentColor" stroke="none" d="M24 13.2 26.5 20h7.1l-5.7 4.3 2.2 6.9L24 27.2l-6.1 3.9 2.2-6.9L14.4 20h7.1z"/>',
  piercing: '<circle cx="11" cy="24" r="4"/><path d="M15 24h18"/><circle cx="37" cy="24" r="4"/>',
  brows: '<path d="M6 16c5-6 12-6 16 1"/><circle cx="14" cy="26" r="2.6"/><path d="M26 17c4-7 11-6 16 1"/><circle cx="34" cy="26" r="2.6"/>',
  lashes: '<path d="M9 29c6-9 24-9 30 0"/><path d="M12 26 8 16"/><path d="M20 23 18 12"/><path d="M28 23l2-11"/><path d="M36 26l5-9"/><path d="M16 31c5 4 11 4 16 0"/>',
};

const GENDER = {
  woman: ["Женщина", "Как ты носишь это сама"],
  man: ["Мужчина", "Те же ремёсла, свой отбор"],
  other: ["Иначе", "Без чужой рамки"],
  private: ["Не сейчас", "Можно не говорить"],
};

const AGES = {
  "18-24": ["18–24", "Только собираю своих"],
  "25-34": ["25–34", "Уже знаю, чего не хочу"],
  "35-44": ["35–44", "Точное важнее шумного"],
  "45+": ["45 и дальше", "Спокойные руки важнее тренда"],
};

const HINTS = {
  "client/welcome": "Сначала пол и возраст. Это выбор, не анкета. Потом интересы.",
  "client/onboarding": "Интересы иконками. После них первый экран — лента.",
  "client/search": "Поиск рядом с лентой. Дом — лента, не этот экран.",
  "client/paywall": "Свой запрос по ремеслу. Фото и текст без отдельного доступа.",
  "client/search/filters": "Фильтры: услуга, район, цена, настроение, окна, скидка, проверка.",
  "client/map": "Мастера на карте города. У части окна скрыты.",
  "client/feed": "Лента — дом. На карточках нет цены. Поиск и карта остаются рядом.",
  "client/feed/why": "Почему так: город, услуга, цена, скидка, настроение, лайки, заходы в профиль.",
  "client/post": "Работа. Город берётся из профиля. Цена, время и услуга могут отсутствовать.",
  "client/master": "Портфолио первым. Рейтинг, галочка, город. Сертификаты — сбоку.",
  "client/book": "Запись. Если окон нет в профиле, остаётся только чат.",
  "client/chat": "Чат: текст, голосовые, карточка услуги или работы. Календарь — уже записанные визиты.",
  "client/chats": "Переписки с мастерами. Внизу календарь уже записанных визитов.",
  "client/review": "Отзыв после визита.",
  "client/compose": "Пост только внутри ремесла. Текст и фото можно сразу, без отдельного доступа.",
  "client/profile": "Профиль человека. Салона нет.",
  "client/visits": "Будущие записи и прошедшие визиты.",
  "client/saves": "Сохранённые работы.",
  "master/bookings": "Кабинет мастера. Подтвердить запись можно с подпиской.",
  "master/paywall": "Подписка открывает посты и записи. Это не касса.",
  "master/compose": "Публикация работы. Поста из жизни здесь нет.",
  "master/slots": "Окна, которые клиент иногда видит в профиле.",
  "master/later": "Комиссия и оплата в приложении — не в этой версии.",
  "master/profile": "Тот же профиль человека, со стороны мастера.",
  "master/reviews": "Отзывы после визитов.",
};

let S = null;
let lastHash = "";
let scrollBottom = false;
const seenVisit = new Set();
let toastTimer = 0;

function defaultState() {
  return {
    theme: "light",
    chocolate: 78,
    onboarded: false,
    gender: "",
    age: "",
    interests: [],
    feedTipSeen: false,
    subscribed: false,
    clientSub: false,
    afterPaywall: "",
    afterClientPaywall: "",
    likes: {},
    saves: {},
    follows: {},
    reposts: [],
    extraComments: {},
    clientPosts: [],
    masterPosts: [],
    extraMessages: {},
    extraThreads: [],
    extraBookings: [],
    bookingStatus: {},
    extraReviews: [],
    reviewed: {},
    slotsOff: {},
    extraSlots: [],
    prices: {},
    profileVisits: {},
    tagline: "",
    pending: null,
    lastBooking: "",
    ui: {
      q: "",
      filters: { cat: "", district: "", max: 0, vibe: "", slots: false, discount: false, verified: false },
      mapCat: "",
      draft: { masterId: "", serviceId: "", slotId: "", note: "" },
      chatText: "",
      comment: "",
      aboutStep: "gender",
      composeTheme: "",
      clientForm: { photo: "", category: "", text: "", budget: "", district: "", when: "", masterId: "" },
      masterForm: { photos: [], title: "", text: "", serviceId: "", price: "", duration: "", compare: false, vibes: [] },
      review: { stars: 0, text: "", photo: false },
      plan: "month",
      editingLine: false,
      taglineDraft: "",
      newSlotDay: "2026-11-12",
      newSlotTime: "15:00",
      calMonth: "2026-11",
      calDay: "",
    },
  };
}

function loadState() {
  const base = defaultState();
  try {
    const raw = JSON.parse(localStorage.getItem(KEY) || "null");
    const theme = localStorage.getItem("murrhub-theme");
    if (theme === "dark" || theme === "light") base.theme = theme;
    if (!raw || typeof raw !== "object") return base;
    const ui = Object.assign(base.ui, raw.ui || {});
    ui.filters = Object.assign(defaultState().ui.filters, (raw.ui && raw.ui.filters) || {});
    ui.draft = Object.assign(defaultState().ui.draft, (raw.ui && raw.ui.draft) || {});
    ui.clientForm = Object.assign(defaultState().ui.clientForm, (raw.ui && raw.ui.clientForm) || {});
    ui.masterForm = Object.assign(defaultState().ui.masterForm, (raw.ui && raw.ui.masterForm) || {});
    ui.review = Object.assign(defaultState().ui.review, (raw.ui && raw.ui.review) || {});
    if (!Array.isArray(ui.masterForm.photos)) ui.masterForm.photos = [];
    if (!Array.isArray(ui.masterForm.vibes)) ui.masterForm.vibes = [];
    return Object.assign(base, raw, { ui });
  } catch (e) {
    return base;
  }
}

function save() {
  const copy = Object.assign({}, S);
  localStorage.setItem(KEY, JSON.stringify(copy));
  localStorage.setItem("murrhub-theme", S.theme === "dark" ? "dark" : "light");
  localStorage.setItem("murrhub-chocolate", String(S.chocolate));
}

function esc(s) {
  return String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[c]));
}

function uid(prefix) {
  return (prefix || "id") + "-" + Math.random().toString(36).slice(2, 8);
}

function plural(n, one, few, many) {
  const a = Math.abs(n) % 100;
  const b = a % 10;
  if (a > 10 && a < 20) return many;
  if (b > 1 && b < 5) return few;
  if (b === 1) return one;
  return many;
}

function yearsLabel(n) {
  return n + " " + plural(n, "год", "года", "лет");
}

function dur(min) {
  if (!min) return "";
  if (min < 60) return min + " мин";
  const h = Math.floor(min / 60);
  const m = min % 60;
  return m ? h + " ч " + m + " мин" : h + " ч";
}

function parts(iso) {
  const m = String(iso).match(/(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/);
  if (!m) return { wd: 0, mins: 0, d: 1, mo: 1, hh: "00", mm: "00", y: 2026 };
  const dt = new Date(Date.UTC(+m[1], +m[2] - 1, +m[3]));
  return { wd: dt.getUTCDay(), mins: +m[4] * 60 + +m[5], d: +m[3], mo: +m[2], hh: m[4], mm: m[5], y: +m[1] };
}

function fmtWhen(iso) {
  const p = parts(iso);
  return WD[p.wd] + ", " + p.d + " " + MO[p.mo - 1] + " · " + p.hh + ":" + p.mm;
}

function fmtDay(iso) {
  return fmtWhen(iso).split("·")[0].trim();
}

function fmtClock(iso) {
  const p = parts(iso);
  return p.hh + ":" + p.mm;
}

function icon(name) {
  return '<svg class="i" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICONS[name] || "") + "</svg>";
}

function master(id) {
  return DATA.masters.find((m) => m.id === id) || null;
}

function service(id) {
  const s = DATA.services.find((x) => x.id === id);
  if (!s) return null;
  if (S.prices && S.prices[id] != null && S.prices[id] !== "") return Object.assign({}, s, { price: Number(S.prices[id]) });
  return s;
}

function servicesOf(id) {
  return DATA.services.filter((s) => s.masterId === id).map((s) => service(s.id));
}

function person(id) {
  const m = master(id);
  if (m) return m;
  return DATA.people[id] || { id: id, name: "Гость", avatar: "", color: "#e7d3c0" };
}

function posts() {
  return DATA.posts.concat(S.masterPosts || []);
}

function clientPostsAll() {
  return DATA.clientPosts.concat(S.clientPosts || []);
}

function getPost(id) {
  return posts().find((p) => p.id === id) || clientPostsAll().find((p) => p.id === id) || null;
}

function catsOf(p) {
  return p.categories && p.categories.length ? p.categories : [p.category];
}

function bookings() {
  return DATA.bookings.concat(S.extraBookings || []).map((b) => Object.assign({}, b, {
    status: (S.bookingStatus && S.bookingStatus[b.id]) || b.status,
  }));
}

function allThreads() {
  return DATA.threads.concat(S.extraThreads || []);
}

function threadById(id) {
  return allThreads().find((t) => t.id === id) || null;
}

function threadBetween(masterId, clientId) {
  return allThreads().find((t) => t.masterId === masterId && t.clientId === clientId) || null;
}

function messages(thread) {
  if (!thread) return [];
  return (thread.messages || []).concat((S.extraMessages && S.extraMessages[thread.id]) || []);
}

function pushMsg(threadId, msg) {
  if (!S.extraMessages[threadId]) S.extraMessages[threadId] = [];
  S.extraMessages[threadId].push(Object.assign({ id: uid("m"), at: "9:41" }, msg));
}

function ensureThread(masterId) {
  let t = threadBetween(masterId, SESSION.clientId);
  if (t) return t;
  t = { id: uid("t"), masterId: masterId, clientId: SESSION.clientId, messages: [] };
  S.extraThreads.push(t);
  return t;
}

function allSlots(masterId) {
  const base = DATA.slots.filter((s) => s.masterId === masterId).map((s) => Object.assign({}, s, { open: !S.slotsOff[s.id] }));
  const extra = (S.extraSlots || []).filter((s) => s.masterId === masterId).map((s) => Object.assign({}, s, { open: !S.slotsOff[s.id] }));
  return base.concat(extra).sort((a, b) => a.iso.localeCompare(b.iso));
}

function taken(slotId) {
  return bookings().some((b) => b.slotId === slotId && b.status !== "declined");
}

function slotDiscount(masterId, iso) {
  if (masterId !== "alina") return null;
  const p = parts(iso);
  if (p.wd >= 1 && p.wd <= 5 && p.mins < 12 * 60) return { pct: 15, label: "−15%" };
  return null;
}

function visibleSlots(masterId) {
  const m = master(masterId);
  if (!m || !m.slotsVisible) return [];
  return allSlots(masterId).filter((s) => s.open && !taken(s.id) && s.iso >= "2026-11-06T09:00");
}

function nextSlot(masterId) {
  return visibleSlots(masterId)[0] || null;
}

function commentsOf(p) {
  if (!p) return [];
  return (p.comments || []).concat((S.extraComments && S.extraComments[p.id]) || []);
}

function likeCount(p) {
  return (p.likes || 0) + (S.likes[p.id] ? 1 : 0);
}

function saveCount(p) {
  return (p.saves || 0) + (S.saves[p.id] ? 1 : 0);
}

function reviewsFor(masterId) {
  return DATA.reviews.filter((r) => r.masterId === masterId).concat((S.extraReviews || []).filter((r) => r.masterId === masterId));
}

function reviewStats(m) {
  const extra = (S.extraReviews || []).filter((r) => r.masterId === m.id);
  const n = m.reviews + extra.length;
  if (!extra.length) return { avg: m.rating, n: m.reviews };
  const sum = m.rating * m.reviews + extra.reduce((s, r) => s + r.stars, 0);
  return { avg: sum / n, n: n };
}

function fmtRating(n) {
  return (Math.round(n * 10) / 10).toFixed(1).replace(".", ",");
}

function visitReviewed(v) {
  return !!(v && (v.reviewed || S.reviewed[v.id]));
}

function lineOf(m) {
  if (m.id === "alina" && S.tagline) return S.tagline;
  return m.line;
}

function priceHtml(p) {
  if (p.price == null) return "";
  if (p.discount && p.discount.amount) {
    return '<span class="old">' + p.price + " €</span>" + Math.max(0, p.price - p.discount.amount) + " €";
  }
  return p.price + " €";
}

function plainPrice(p) {
  if (p.price == null) return "";
  if (p.discount && p.discount.amount) return Math.max(0, p.price - p.discount.amount) + " €";
  return p.price + " €";
}

function coverOf(p) {
  if (!p) return "";
  if (p.compare && p.after) return p.after;
  return (p.images && p.images[0]) || "";
}

function isTextPost(p) {
  return !coverOf(p) && String((p && p.text) || "").trim().length > 0;
}

function clipText(text, max) {
  const s = String(text || "").replace(/\s+/g, " ").trim();
  if (!s) return "...";
  if (s.length <= max) return s.endsWith("...") ? s : s + "...";
  let cut = s.slice(0, max);
  const sp = cut.lastIndexOf(" ");
  if (sp > max * 0.55) cut = cut.slice(0, sp);
  return cut.replace(/[.,;:–—-]+$/, "") + "...";
}

function craftIcon(id) {
  return '<svg class="craft" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (CRAFT[id] || "") + "</svg>";
}

function homePath() {
  if (!S) return "/client/welcome";
  if (S.onboarded) return "/client/feed";
  if (!S.gender || !S.age) return "/client/welcome";
  return "/client/onboarding";
}

function avatarHtml(p, cls) {
  const c = cls ? " " + cls : "";
  if (p && p.avatar) {
    return '<img class="avatar' + c + '" src="' + esc(p.avatar) + '" alt="" style="object-position:' + esc(p.pos || "center 20%") + '"/>';
  }
  const name = (p && p.name) || "?";
  const bg = (p && p.color) || "#e7d3c0";
  return '<span class="mono avatar' + c + '" style="background:' + esc(bg) + '">' + esc(name.slice(0, 1)) + "</span>";
}

function seal(m) {
  if (!m) return "";
  if (m.verified) return '<button class="verified" type="button" data-act="verify" data-id="' + m.id + '" aria-label="Проверен">' + icon("check") + "</button>";
  return '<button class="verified pending" type="button" data-act="verify" data-id="' + m.id + '" aria-label="Документы на проверке">' + icon("clock") + "</button>";
}

function starsHtml(n) {
  let h = '<span class="stars" aria-label="Оценка ' + fmtRating(n) + '">';
  for (let i = 1; i <= 5; i++) h += '<span class="star' + (i <= Math.round(n) ? " on" : "") + '">' + icon("star") + "</span>";
  return h + "</span>";
}

function page(opts) {
  const back = opts.back
    ? '<button class="iconbtn" type="button" data-back="' + esc(opts.back) + '" aria-label="Назад">' + icon("back") + "</button>"
    : "<span></span>";
  return '<section class="page"><header class="top">' + back + "<h1>" + esc(opts.title || "") + "</h1>" + (opts.right || "<span></span>") + '</header><div class="pad">' + (opts.body || "") + "</div></section>";
}

function missing(text) {
  return '<div class="pad empty"><p class="display">Пусто</p><p>' + esc(text || "Этого экрана нет") + '</p><button class="btn" type="button" data-go="/client/feed">В ленту</button></div>';
}

function affinityVibes() {
  const set = new Set();
  Object.keys(S.likes || {}).concat(Object.keys(S.saves || {})).forEach((id) => {
    if (!S.likes[id] && !S.saves[id]) return;
    const p = getPost(id);
    ((p && p.vibes) || []).forEach((v) => set.add(v));
  });
  return set;
}

function likedPrices() {
  return posts().filter((p) => S.likes[p.id] && p.price != null).map((p) => p.price);
}

function scorePost(p) {
  const m = master(p.masterId) || { city: "Вильнюс", id: "", discount: null };
  const reasons = [];
  let s = 0;
  const mine = S.interests || [];
  const hit = catsOf(p).some((c) => mine.includes(c));
  if (!mine.length) reasons.push({ k: "Интересы ещё не выбраны", w: 28 });
  else if (hit) { s += 48; reasons.push({ k: "Услуга из интересов", w: 92 }); }
  else reasons.push({ k: "Другая услуга", w: 22 });
  s += 18;
  reasons.push({ k: "Город · " + m.city, w: 84 });
  const vibes = affinityVibes();
  const overlap = (p.vibes || []).filter((v) => vibes.has(v)).length;
  if (overlap) { s += overlap * 12; reasons.push({ k: "Настроение как у отмеченных", w: Math.min(96, 40 + overlap * 22) }); }
  else reasons.push({ k: "Настроение", w: 28 });
  const prices = likedPrices();
  if (p.price != null && prices.length) {
    const avg = prices.reduce((a, b) => a + b, 0) / prices.length;
    if (Math.abs(p.price - avg) / avg < 0.35) { s += 14; reasons.push({ k: "Цена рядом с отмеченной", w: 74 }); }
    else reasons.push({ k: "Цена", w: 34 });
  } else if (p.price != null) reasons.push({ k: "Цена на работе", w: 40 });
  else reasons.push({ k: "Цены на фото нет", w: 24 });
  if (p.discount || (m.discount && p.price != null)) { s += 8; reasons.push({ k: "Есть скидка", w: 66 }); }
  const likes = likeCount(p);
  s += Math.log10(likes + 1) * 10;
  reasons.push({ k: "Лайки", w: Math.min(96, 18 + Math.log10(likes + 1) * 28) });
  const vis = (S.profileVisits && S.profileVisits[p.masterId]) || 0;
  if (vis) { s += Math.min(24, vis * 6); reasons.push({ k: "Заходы в профиль", w: Math.min(96, 36 + vis * 16) }); }
  else reasons.push({ k: "Заходы в профиль", w: 16 });
  if (S.follows[p.masterId]) s += 10;
  return { s: s, reasons: reasons };
}

function rankedPosts() {
  return posts().map((p) => ({ p: p, s: scorePost(p).s })).sort((a, b) => b.s - a.s || (b.p.likes || 0) - (a.p.likes || 0)).map((x) => x.p);
}

function matchPost(p, q, f) {
  const m = master(p.masterId);
  if (!m) return false;
  const sv = p.serviceId ? service(p.serviceId) : null;
  const hay = [p.title, p.text, m.name, m.district, sv && sv.name, CATS[p.category], ...(p.vibes || [])].join(" ").toLowerCase();
  if (q && hay.indexOf(q.toLowerCase()) === -1) return false;
  if (f.cat && catsOf(p).indexOf(f.cat) === -1) return false;
  if (f.district && m.district !== f.district) return false;
  if (f.max && (p.price == null || p.price > f.max)) return false;
  if (f.vibe && (p.vibes || []).indexOf(f.vibe) === -1) return false;
  if (f.slots && !nextSlot(m.id)) return false;
  if (f.discount && !(p.discount || m.discount)) return false;
  if (f.verified && !m.verified) return false;
  return true;
}

function matchMaster(m, q, f) {
  const names = servicesOf(m.id).map((s) => s.name).join(" ");
  const hay = [m.name, m.district, m.line, names, ...(m.vibes || [])].join(" ").toLowerCase();
  if (q && hay.indexOf(q.toLowerCase()) === -1) return false;
  if (f.cat && (m.categories || []).indexOf(f.cat) === -1) return false;
  if (f.district && m.district !== f.district) return false;
  if (f.slots && !nextSlot(m.id)) return false;
  if (f.discount && !m.discount) return false;
  if (f.verified && !m.verified) return false;
  if (f.max) {
    const priced = servicesOf(m.id).some((s) => s.price <= f.max);
    if (!priced) return false;
  }
  if (f.vibe && (m.vibes || []).indexOf(f.vibe) === -1) return false;
  return true;
}

function cardHtml(p, opts) {
  const o = opts || {};
  const m = master(p.masterId);
  if (!m) return "";
  const role = o.role || "client";
  const postGo = (role === "master" ? "/master/post/" : "/client/post/") + p.id;
  const mastGo = role === "master" ? "/master/profile" : "/client/master/" + m.id;
  const cover = coverOf(p);
  const showMoney = !o.noprice;
  const badge = p.compare ? '<span class="badge">до / после</span>' : (showMoney && p.discount ? '<span class="badge">' + esc(p.discount.label || "скидка") + "</span>" : "");
  const price = showMoney && p.price != null ? '<span class="price-pill">' + esc(plainPrice(p)) + "</span>" : "";
  const face = '<button class="face" type="button" data-go="' + mastGo + '" aria-label="' + esc(m.name) + '">' + avatarHtml(m, "pub") + "</button>";
  const name = '<button class="by" type="button" data-go="' + mastGo + '"><span class="pname">' + esc(m.name.split(" ")[0]) + "</span></button>";
  if (o.feed) {
    const foot = '<div class="cardfoot">' + face + name +
      '<span class="likecount">' + icon("heart") + likeCount(p) + "</span></div>";
    if (isTextPost(p)) {
      return '<article class="pcard textcard"><div class="shotwrap"><button class="textshell" type="button" data-go="' + mastGo + '">' +
        '<span class="textinner">' + esc(clipText(p.text, 92)) + "</span></button>" + foot + "</div></article>";
    }
    return '<article class="pcard"><div class="shotwrap"><button class="shot ' + esc(p.ratio || "tall") + '" type="button" data-go="' + postGo + '">' +
      (cover ? '<img src="' + esc(cover) + '" alt="' + esc(p.title) + '" style="object-position:' + esc(p.pos || "center") + '"/>' : "") +
      badge + price + "</button>" + foot + "</div></article>";
  }
  const likeBtn = '<button class="heart' + (S.likes[p.id] ? " on" : "") + '" type="button" data-act="like" data-id="' + p.id + '" aria-label="Нравится">' + icon("heart") + "</button>";
  const meta = '<div class="meta">' + name + (o.foryou ? '<span class="muted">для тебя</span>' : "") + "</div>";
  if (isTextPost(p)) {
    return '<article class="pcard textcard"><div class="shotwrap"><button class="textshell" type="button" data-go="' + postGo + '">' +
      '<span class="textinner">' + esc(clipText(p.text, 92)) + "</span></button>" +
      face + "</div>" + likeBtn + meta + "</article>";
  }
  return '<article class="pcard"><div class="shotwrap"><button class="shot ' + esc(p.ratio || "tall") + '" type="button" data-go="' + postGo + '">' +
    (cover ? '<img src="' + esc(cover) + '" alt="' + esc(p.title) + '" style="object-position:' + esc(p.pos || "center") + '"/>' : "") +
    badge + price + "</button>" +
    face + "</div>" +
    likeBtn + meta + "</article>";
}

function clientCard(p) {
  const author = person(p.authorId);
  const theme = p.theme === "want" ? "Хочу так" : p.theme === "seek" ? "Ищу мастера" : "Мой визит";
  const img = p.images && p.images[0];
  const thumb = img
    ? '<img src="' + esc(img) + '" alt=""/>'
    : '<span class="thumb">' + esc(theme.slice(0, 1)) + "</span>";
  return '<button class="hit" type="button" data-go="/client/post/' + p.id + '">' + thumb +
    "<span><em>" + esc(theme) + " · " + esc(CATS[p.category] || "") + "</em><b>" + esc(p.title) + '</b><b class="hit-name">' + avatarHtml(author, "pub") + esc(author.name) + "</b><em>" + (p.district ? esc(p.district) : "") + "</em></span></button>";
}

function filtersActive() {
  const f = S.ui.filters;
  return !!(f.cat || f.district || f.max || f.vibe || f.slots || f.discount || f.verified);
}

function searchBody() {
  const q = (S.ui.q || "").trim();
  const f = S.ui.filters;
  const active = !!(q || filtersActive());
  let list = active ? posts().filter((p) => matchPost(p, q, f)) : rankedPosts().slice(0, 8);
  if (active) list = list.slice().sort((a, b) => (b.likes || 0) - (a.likes || 0));
  const ms = DATA.masters.filter((m) => matchMaster(m, q, f));
  const works = list.map((p) => {
    const m = master(p.masterId);
    const slot = m.slotsVisible ? nextSlot(m.id) : null;
    const cover = coverOf(p);
    const visual = cover
      ? '<img src="' + esc(cover) + '" alt="" style="object-position:' + esc(p.pos || "center") + '"/>'
      : '<span class="thumb textbit">' + esc(clipText(p.text || p.title, 48)) + "</span>";
    return '<button class="hit" type="button" data-go="/client/post/' + p.id + '">' + visual +
      "<span><b>" + esc(p.title) + "</b><em>" + esc(m.name) + " · " + esc(m.district) + "</em><em class=\"price\">" +
      (p.price != null ? plainPrice(p) : "цена по запросу") + (p.duration ? " · " + esc(dur(p.duration)) : "") + "</em>" +
      "<em>" + (slot ? "окно " + esc(fmtClock(slot.iso)) : (m.slotsVisible ? "окон нет" : "окна по запросу")) + "</em></span></button>";
  }).join("");
  const people = ms.map((m) => {
    const st = reviewStats(m);
    return '<button class="hit" type="button" data-go="/client/master/' + m.id + '">' + avatarHtml(m) +
      "<span><b>" + esc(m.name) + "</b><em>" + esc(CATS[m.category]) + " · " + esc(m.district) + " · " + fmtRating(st.avg) + "</em><em>" + esc(lineOf(m)) + "</em></span></button>";
  }).join("");
  if (!works && !people) {
    return '<div class="empty"><p class="display">Ничего рядом</p><p>Можно оставить запрос по теме — работы в ленте всё равно выше.</p><button class="btn primary" type="button" data-go="/client/compose">Оставить запрос</button></div>';
  }
  return '<p class="section">' + (active ? "Работы" : "Смотрят в Вильнюсе") + "</p>" + works +
    '<p class="section">Мастера</p>' + people;
}

function choiceButtons(map, act, current) {
  return Object.keys(map).map((id) => {
    const row = map[id];
    const on = current === id;
    return '<button type="button" class="choice' + (on ? " on" : "") + '" data-act="' + act + '" data-id="' + esc(id) + '"><b>' + esc(row[0]) + "</b><span>" + esc(row[1]) + "</span></button>";
  }).join("");
}

function screenWelcome() {
  const ageStep = S.ui.aboutStep === "age" && S.gender && GENDER[S.gender];
  if (ageStep) {
    const picked = GENDER[S.gender][0];
    return '<section class="onboard consider"><p class="kicker">Дальше</p><h1 class="display">Сколько лет этому взгляду</h1>' +
      '<p class="sub">Не поле и не дата. Один диапазон, и можно идти к интересам.</p>' +
      '<button class="chip backchip" type="button" data-act="about-back">' + esc(picked) + "</button>" +
      '<div class="choices">' + choiceButtons(AGES, "age", S.age) + "</div></section>";
  }
  return '<section class="onboard consider"><p class="kicker">Сначала о тебе</p><h1 class="display">Кто смотрит</h1>' +
    '<p class="sub">Два касания, без полей. Это остаётся на телефоне. Потом — что хочется смотреть.</p>' +
    '<div class="choices">' + choiceButtons(GENDER, "gender", S.gender) + "</div></section>";
}

function screenOnboarding() {
  const tiles = Object.keys(CATS).map((id) => {
    const on = S.interests.indexOf(id) !== -1;
    return '<button type="button" class="' + (on ? "on" : "") + '" data-act="interest" data-id="' + id + '">' +
      craftIcon(id) +
      "<b>" + esc(CATS[id]) + '</b><span class="tick">' + (on ? icon("check") : "") + "</span></button>";
  }).join("");
  return '<section class="onboard"><p class="kicker">Вильнюс</p><h1 class="display">Что хочется смотреть?</h1>' +
    '<p class="sub">Ленту соберём сразу по этому. Она откроется первой. Поиск и карта останутся рядом.</p><div class="igrid">' + tiles +
    '</div><button class="btn primary block" type="button" data-act="onboard">В ленту</button></section>';
}

function screenSearch() {
  const f = S.ui.filters;
  const cats = Object.keys(CATS).map((id) => '<button class="chip' + (f.cat === id ? " on" : "") + '" type="button" data-act="filt" data-k="cat" data-v="' + id + '">' + esc(CATS[id]) + "</button>").join("");
  const recent = ["молочный", "fine line", "балаяж", "чёлка"].map((q) => '<button class="chip" type="button" data-act="setq" data-q="' + esc(q) + '">' + esc(q) + "</button>").join("");
  return '<section class="page"><div class="pad"><p class="kicker">Вильнюс</p><h1 class="display">Найти</h1>' +
    '<label class="search">' + icon("search") + '<input id="q" value="' + esc(S.ui.q) + '" placeholder="Услуга, мастер, настроение" aria-label="Поиск"/></label>' +
    '<div class="chips">' + cats + '<button class="chip' + (filtersActive() ? " on" : "") + '" type="button" data-go="/client/search/filters">' + icon("filter") + " Фильтры</button></div>" +
    '<div class="chips">' + recent + "</div>" +
    '<button class="peek" type="button" data-go="/client/map"><div class="peekmap">' + mapSvg() + '</div><span class="copy"><strong>Карта Вильнюса</strong><span>' + DATA.masters.length + " мастеров · окна видны не у всех</span></span></button>" +
    '<div id="results">' + searchBody() + "</div></div></section>";
}

function screenFilters() {
  const f = S.ui.filters;
  const chip = (k, v, label, on) => '<button class="chip' + (on ? " on" : "") + '" type="button" data-act="filt" data-k="' + k + '" data-v="' + esc(v) + '">' + esc(label) + "</button>";
  const cats = Object.keys(CATS).map((id) => chip("cat", id, CATS[id], f.cat === id)).join("");
  const dist = DISTRICTS.map((d) => chip("district", d, d, f.district === d)).join("");
  const prices = [[0, "Любая"], [40, "до 40 €"], [80, "до 80 €"], [150, "до 150 €"]].map((x) => chip("max", String(x[0]), x[1], Number(f.max) === x[0])).join("");
  const vibes = VIBES.map((v) => chip("vibe", v, v, f.vibe === v)).join("");
  const tog = (k, label) => '<button class="toggle' + (f[k] ? " on" : "") + '" type="button" data-act="filt" data-k="' + k + '" data-v="1">' + label + "</button>";
  return page({
    title: "Фильтры",
    back: "/client/search",
    body: '<p class="label">Услуга</p><div class="chips">' + cats + '</div><p class="label">Район</p><div class="chips">' + dist +
      '</div><p class="label">Цена</p><div class="chips">' + prices + '</div><p class="label">Настроение</p><div class="chips">' + vibes + "</div>" +
      tog("slots", "Только со свободным окном") + tog("discount", "Со скидкой") + tog("verified", "Только проверенные") +
      '<div class="btnrow"><button class="btn" type="button" data-act="clear-filt">Сбросить</button><button class="btn primary" type="button" data-go="/client/search">Показать</button></div>',
  });
}

function mapSvg() {
  let blocks = "";
  for (let y = 0; y < 5; y++) {
    for (let x = 0; x < 6; x++) {
      blocks += '<rect x="' + (128 + x * 14) + '" y="' + (330 + y * 16) + '" width="9" height="11" rx="1.5" fill="var(--map-block)" opacity="' + (0.5 + ((x + y) % 3) * 0.15) + '"/>';
    }
  }
  return '<svg class="mapsvg" viewBox="0 0 360 560" preserveAspectRatio="xMidYMid slice" aria-hidden="true">' +
    '<rect width="360" height="560" fill="var(--map-paper)"/>' +
    '<ellipse cx="74" cy="480" rx="78" ry="50" fill="var(--map-park)"/>' +
    '<ellipse cx="286" cy="250" rx="62" ry="42" fill="var(--map-park)"/>' +
    '<path d="M-20 278 C 48 228, 96 324, 168 276 S 270 214, 390 258" fill="none" stroke="var(--map-water)" stroke-width="26" stroke-linecap="round"/>' +
    '<path d="M-20 278 C 48 228, 96 324, 168 276 S 270 214, 390 258" fill="none" stroke="var(--map-water-2)" stroke-width="8" stroke-linecap="round"/>' +
    '<path d="M236 300 C 258 346, 274 370, 308 410" fill="none" stroke="var(--map-water)" stroke-width="8" stroke-linecap="round"/>' +
    blocks + "</svg>";
}

function screenMap(activeId) {
  const cat = S.ui.mapCat;
  const chips = '<button class="chip' + (!cat ? " on" : "") + '" type="button" data-act="mapcat" data-id="">Все</button>' +
    Object.keys(CATS).map((id) => '<button class="chip' + (cat === id ? " on" : "") + '" type="button" data-act="mapcat" data-id="' + id + '">' + esc(CATS[id]) + "</button>").join("");
  const labels = [
    ["Фабийонишкес", 16, 32],
    ["Жирмунай", 78, 16],
    ["Шнипишкес", 52, 28],
    ["Антакальнис", 78, 29],
    ["Ужупис", 60, 49],
    ["Старый город", 40, 74],
    ["Науяместис", 24, 78],
  ].map((l) => '<span class="dlabel" style="left:' + l[1] + "%;top:" + l[2] + '%">' + l[0] + "</span>").join("");
  const pins = DATA.masters.map((m) => {
    const dim = cat && (m.categories || []).indexOf(cat) === -1;
    return '<button class="pin' + (activeId === m.id ? " on" : "") + (dim ? " dim" : "") + '" type="button" style="left:' + m.pin.x + "%;top:" + m.pin.y + '%" data-go="/client/map/' + m.id + '" aria-label="' + esc(m.name) + '">' +
      '<img src="' + esc(m.avatar) + '" alt="" style="object-position:' + esc(m.pos || "center 20%") + '"/></button>';
  }).join("");
  let sheet = "";
  const m = activeId ? master(activeId) : null;
  if (m) {
    const slot = m.slotsVisible ? nextSlot(m.id) : null;
    const st = reviewStats(m);
    sheet = '<div class="mapsheet"><div class="row">' + avatarHtml(m) + '<div class="grow"><b>' + esc(m.name) + "</b> " + seal(m) +
      '<div class="muted">' + esc(m.district) + " · " + fmtRating(st.avg) + "</div></div></div>" +
      '<p class="muted">' + (slot ? "Ближайшее окно " + esc(fmtWhen(slot.iso)) : "Окна по запросу") + "</p>" +
      '<div class="btnrow"><button class="btn" type="button" data-go="/client/master/' + m.id + '">Профиль</button>' +
      '<button class="btn primary" type="button" data-act="book" data-master="' + m.id + '" data-service="">Записаться</button></div></div>';
  }
  return '<section class="mappage"><div class="mapstage">' + mapSvg() + '<div class="mapchips"><div class="chips">' + chips + "</div></div>" +
    labels + '<span class="you" style="left:48%;top:60%" title="Вы"></span>' + pins + sheet + "</div></section>";
}

function screenFeed() {
  const list = rankedPosts();
  const top = {};
  list.slice(0, 3).forEach((p) => {
    if ((S.interests || []).some((i) => catsOf(p).includes(i))) top[p.id] = true;
  });
  const interest = (S.interests.length ? S.interests : ["nails", "tattoo", "hair"]).map((id) => CATS[id]).join(" · ");
  const cards = list.map((p) => cardHtml(p, { foryou: !!top[p.id], noprice: true, feed: true })).join("");
  const clients = clientPostsAll().map(clientCard).join("");
  return '<section class="page"><div class="pad"><div class="spread"><div><p class="kicker">Для тебя · Вильнюс</p><h1 class="display">Лента</h1></div>' +
    '<button class="btn small" type="button" data-go="/client/feed/why">Как собрано</button></div>' +
    '<div class="sub spread"><span>' + esc(interest) + (S.interests.length ? "" : " · выбери интересы, станет точнее") + '</span><button class="btn small ghost" type="button" data-go="/client/onboarding">Изменить</button></div>' +
    '<div class="feedflow flush">' + cards + "</div>" +
    '<div class="splitnote"><strong>Дальше — не работы</strong><p class="muted">Запросы и визиты только по готовой теме, чтобы лента не стала дневником.</p></div>' +
    clients + '<button class="btn block" type="button" data-go="/client/compose">Оставить запрос</button></div></section>';
}

function feedTeach() {
  return '<div class="teach" role="dialog" aria-labelledby="teach-title"><button class="teach-scrim" type="button" data-act="feed-stay" aria-label="Остаться в ленте"></button><div class="teach-sheet"><p class="kicker">Первый заход</p><h2 id="teach-title">Лента — дом</h2><p>Работы уже собраны по интересам. Цену увидишь, когда откроешь публикацию. Поиск и карта рядом, если нужно точнее.</p><button class="btn primary block" type="button" data-act="feed-stay">Остаться в ленте</button><button class="btn block" type="button" data-act="feed-search">Перейти в поиск</button></div></div>';
}

function screenWhy(postId) {
  const list = rankedPosts();
  const p = postId ? getPost(postId) : list[0];
  const back = postId ? "/client/post/" + postId : "/client/feed";
  if (!p || p.kind === "client") {
    return page({ title: "Как собрано", back: back, body: "<p>Лента работ собирается не по дате. Ниже — город, услуга, цена, скидка, настроение, лайки и заходы в профиль.</p>" });
  }
  const sc = scorePost(p);
  const bars = sc.reasons.map((r) => '<div class="signal"><span>' + esc(r.k) + '</span><i class="meter"><i style="--w:' + r.w + '%"></i></i></div>').join("");
  return page({
    title: "Как собрано",
    back: back,
    body: "<p>Выше то, что ближе к твоим отметкам. Дата почти не решает.</p>" +
      '<p class="muted">Пример: «' + esc(p.title) + "»</p>" + bars,
  });
}

function screenPost(id, role) {
  const p = getPost(id);
  if (!p) return missing("Нет такой работы");
  if (p.kind === "client") return screenClientPost(p, role);
  const m = master(p.masterId);
  const back = role === "master" ? "/master/posts" : "/client/feed";
  const base = role === "master" ? "/master/post/" + id : "/client/post/" + id;
  const sv = p.serviceId ? service(p.serviceId) : null;
  const slot = m.slotsVisible ? nextSlot(m.id) : null;
  const own = role === "master" && m.id === SESSION.masterId;
  const textOnly = isTextPost(p);
  let hero = "";
  if (textOnly) {
    hero = '<div class="textread"><p>' + esc(p.text) + "</p></div>";
  } else if (p.compare && p.before && p.after) {
    hero = '<div class="compare" style="--pos:62%"><img class="base" src="' + esc(p.after) + '" alt="После. ' + esc(p.title) + '"/>' +
      '<div class="fore"><img src="' + esc(p.before) + '" alt="До. ' + esc(p.title) + '"/></div>' +
      '<input class="cmp" type="range" min="0" max="100" value="62" aria-label="До и после"/>' +
      '<span class="tag l">До</span><span class="tag r">После</span></div>';
  } else {
    const imgs = (p.images || [coverOf(p)]).filter(Boolean).map((src) => '<img src="' + esc(src) + '" alt="' + esc(p.title) + '" style="object-position:' + esc(p.pos || "center") + '"/>').join("");
    hero = '<div class="slides">' + imgs + "</div>";
  }
  const bits = [];
  if (p.price != null) bits.push('<span class="chip">' + priceHtml(p) + "</span>");
  if (p.duration) bits.push('<span class="chip">' + esc(dur(p.duration)) + "</span>");
  if (sv) bits.push('<span class="chip">' + esc(sv.name) + "</span>");
  if (p.discount) bits.push('<span class="chip">' + esc(p.discount.label) + "</span>");
  const preview = commentsOf(p).slice(0, 2).map((c) => {
    const a = person(c.author);
    return "<p><b>" + esc(a.name) + "</b> " + esc(c.text) + "</p>";
  }).join("");
  const writeAbout = own ? "" : '<button class="writebig" type="button" data-act="write-post" data-id="' + id + '" aria-label="Написать">' + icon("arrow") + "</button>";
  const actions = '<div class="actions">' +
    '<button class="iconstat' + (S.likes[p.id] ? " on" : "") + '" type="button" data-act="like" data-id="' + id + '" aria-label="Нравится">' + icon("heart") + '<span data-count>' + likeCount(p) + "</span></button>" +
    '<button class="iconstat" type="button" data-go="' + base + '/comments" aria-label="Комментарии">' + icon("comment") + "<span>" + commentsOf(p).length + "</span></button>" +
    '<button class="iconstat" type="button" data-go="' + base + '/repost" aria-label="Репост">' + icon("repost") + "</button>" +
    '<button class="iconstat' + (S.saves[p.id] ? " on" : "") + '" type="button" data-act="save" data-id="' + id + '" aria-label="Сохранить">' + icon("bookmark") + '<span data-count>' + saveCount(p) + "</span></button></div>";
  const slotLine = m.slotsVisible
    ? '<div class="slotline"><span>' + (slot ? "Есть свободное окно" : "Свободных окон нет") + "</span></div>"
    : '<div class="slotline hide"><span>Окна скрыты — напиши мастеру</span></div>';
  const ctas = own ? '<p class="muted">Это твоя работа. Клиенты видят её так.</p>' : "";
  return '<section class="page"><header class="top"><button class="iconbtn" type="button" data-back="' + esc(back) + '" aria-label="Назад">' + icon("back") + "</button><h1>" + esc(p.title) + '</h1><span></span></header>' +
    '<div class="postpic' + (textOnly ? " textpic" : "") + '">' + hero +
    '<button class="face" type="button" data-go="' + (role === "master" ? "/master/profile" : "/client/master/" + m.id) + '" aria-label="' + esc(m.name) + '">' + avatarHtml(m, "pub") + "</button>" +
    writeAbout + "</div>" +
    '<div class="row who tight"><div class="grow"><h2 style="margin:0;font-size:20px">' + esc(m.name) + " " + seal(m) + "</h2>" +
    '<div class="muted">' + starsHtml(reviewStats(m).avg) + " " + fmtRating(reviewStats(m).avg) + "</div>" +
    '<div class="muted">' + esc(m.city) + " · " + esc(m.district) + "</div></div></div>" +
    actions + '<div class="pad">' +
    (!textOnly && p.text ? '<p class="posttext">' + esc(p.text) + "</p>" : "") +
    (bits.length ? '<div class="chips" style="margin-top:12px">' + bits.join("") + "</div>" : '<p class="muted">На этой работе нет цены' + (sv ? "" : " и услуги") + " — их можно спросить в чате.</p>") +
    '<p class="fine muted">Город из профиля, не из поста.</p>' + slotLine + ctas +
    '<button class="btn small ghost" type="button" data-go="' + base + '/why">Почему эта работа здесь</button>' +
    '<div class="section">Комментарии</div>' + (preview || '<p class="muted">Пока тихо.</p>') +
    '<button class="btn small" type="button" data-go="' + base + '/comments">Открыть</button></div></section>';
}

function screenClientPost(p, role) {
  const author = person(p.authorId);
  const theme = p.theme === "want" ? "Хочу так" : p.theme === "seek" ? "Ищу мастера" : "Мой визит";
  const m = p.masterId ? master(p.masterId) : null;
  const img = p.images && p.images[0];
  const back = role === "master" ? "/master/posts" : "/client/feed";
  return page({
    title: theme,
    back: back,
    body: (img
      ? '<div class="postpic"><img class="cover" src="' + esc(img) + '" alt="' + esc(p.title) + '"/>' + avatarHtml(author, "pub face") + "</div>"
      : "") +
      '<div class="row who' + (img ? " tight" : "") + '">' + (img ? "" : avatarHtml(author, "pub")) + "<div><b>" + esc(author.name) + "</b><div class=\"muted\">" + esc(CATS[p.category] || "") + (p.district ? " · " + esc(p.district) : "") + "</div></div></div>" +
      '<p class="kicker">' + esc(theme) + "</p><h2 class=\"display\" style=\"font-size:28px\">" + esc(p.title) + "</h2>" +
      "<p>" + esc(p.text || "") + "</p>" +
      (p.budget ? "<p class=\"muted\">Бюджет " + esc(p.budget) + "</p>" : "") +
      (m ? '<button class="btn block" type="button" data-go="/client/master/' + m.id + '">Мастер · ' + esc(m.name) + "</button>" : "") +
      '<p class="lockline">Это не свободный пост. Тема задана, чтобы работы мастеров оставались выше.</p>' +
      '<div class="actions" style="padding-left:0">' +
      '<button class="iconstat' + (S.likes[p.id] ? " on" : "") + '" type="button" data-act="like" data-id="' + p.id + '">' + icon("heart") + "<span data-count>" + likeCount(p) + "</span></button>" +
      '<button class="iconstat" type="button" data-go="/client/post/' + p.id + '/comments">' + icon("comment") + "<span>" + commentsOf(p).length + "</span></button>" +
      '<button class="iconstat' + (S.saves[p.id] ? " on" : "") + '" type="button" data-act="save" data-id="' + p.id + '">' + icon("bookmark") + "</button></div>",
  });
}

function screenComments(id, back) {
  const p = getPost(id);
  if (!p) return missing("Нет комментариев");
  const list = commentsOf(p).map((c) => {
    const a = person(c.author);
    return '<div class="comment">' + avatarHtml(a, "sm") + "<div><b>" + esc(a.name) + '</b> <span class="muted">' + esc(c.time || "") + "</span><p>" + esc(c.text) + "</p></div></div>";
  }).join("") || '<p class="empty">Пока тихо.</p>';
  return page({
    title: "Комментарии",
    back: back,
    body: list + '<div class="field"><span>Ответ</span><input id="commentbox" data-field="comment" data-post="' + esc(id) + '" placeholder="Коротко и по работе" value="' + esc(S.ui.comment) + '"/></div>' +
      '<button class="btn primary block" type="button" data-act="comment" data-id="' + esc(id) + '">Отправить</button>',
  });
}

function screenRepost(id) {
  const p = getPost(id);
  if (!p) return missing("Нечего репостить");
  return page({
    title: "Репост",
    back: "/client/post/" + id,
    body: '<button class="theme" type="button" data-act="repost" data-id="' + id + '"><b>В мой профиль</b><span class="muted">Работа останется работой.</span></button>' +
      (p.masterId ? '<button class="theme" type="button" data-act="repost-chat" data-id="' + id + '"><b>В чат с мастером</b><span class="muted">Карточка прикрепится к переписке.</span></button>' : "") +
      '<button class="theme" type="button" data-act="copy"><b>Скопировать ссылку</b></button>',
  });
}

function factsHtml(m) {
  const bits = [
    icon("calendar") + " " + yearsLabel(m.years),
    icon("chat") + " " + m.langs.join(" · "),
    icon("home") + " Кабинет",
    m.sterile ? icon("shield") + " Стерильно" : "",
    icon("clock") + " " + (m.slotsVisible ? "Окна открыты" : "По запросу"),
    m.discount ? icon("percent") + " " + m.discount : "",
  ].filter(Boolean);
  return '<div class="facts">' + bits.map((b) => '<span class="fact">' + b + "</span>").join("") + "</div>";
}

function screenMaster(id, role) {
  const m = master(id);
  if (!m) return missing("Нет такого мастера");
  const st = reviewStats(m);
  const works = posts().filter((p) => p.masterId === m.id);
  const tiles = works.slice(0, 6).map((p, i) => {
    const go = (role === "master" ? "/master/post/" : "/client/post/") + p.id;
    const src = coverOf(p);
    if (!src) return '<button class="tile texttile' + (i === 0 ? " big" : "") + '" type="button" data-go="' + go + '"><span>' + esc(clipText(p.text || p.title, 80)) + "</span></button>";
    return '<button class="tile' + (i === 0 ? " big" : "") + '" type="button" data-go="' + go + '"><img src="' + esc(src) + '" alt="" style="object-position:' + esc(p.pos || "center") + '"/></button>';
  }).join("");
  const certGo = role === "master" ? "/master/certs" : "/client/master/" + m.id + "/certs";
  const back = role === "master" ? "" : "/client/feed";
  const own = role === "master";
  const follow = own ? "" : '<button class="btn small' + (S.follows[m.id] ? "" : " primary") + '" type="button" data-act="follow" data-id="' + m.id + '">' + (S.follows[m.id] ? "Вы подписаны" : "Подписаться") + "</button>";
  const slot = m.slotsVisible ? nextSlot(m.id) : null;
  const slotLine = m.slotsVisible
    ? '<button class="slotline" type="button" data-act="book" data-master="' + m.id + '" data-service=""><span>' + (slot ? "Ближайшее · " + esc(fmtWhen(slot.iso)) : "Окон нет") + "</span><span>Запись</span></button>"
    : '<div class="slotline hide"><span>Окна по запросу, в чате</span></div>';
  const svcs = servicesOf(m.id).map((sv) => '<button class="svc" type="button" data-act="write-service" data-master="' + m.id + '" data-service="' + sv.id + '"><span><b>' + esc(sv.name) + '</b><span class="muted">' + esc(dur(sv.duration)) + '</span></span><span class="end"><span class="price">' + sv.price + ' €</span><span class="fine muted">написать</span></span></button>').join("");
  const revs = reviewsFor(m.id).slice(0, 3).map((r) => {
    const a = person(r.author);
    return '<div class="comment">' + avatarHtml(a, "sm") + "<div>" + starsHtml(r.stars) + "<p>" + esc(r.text) + '</p><span class="muted">' + esc(a.name) + " · " + esc(r.date) + "</span></div></div>";
  }).join("");
  let editor = "";
  if (own) {
    editor = S.ui.editingLine
      ? '<div class="field"><input data-field="taglineDraft" value="' + esc(S.ui.taglineDraft || lineOf(m)) + '" maxlength="80"/></div><button class="btn small primary" type="button" data-act="save-line">Сохранить строку</button>'
      : '<button class="btn small" type="button" data-act="edit-line">Изменить строку</button>';
    editor += '<div class="chips" style="margin-top:10px"><button class="chip" type="button" data-go="/master/services">Услуги</button><button class="chip" type="button" data-go="/master/reviews">Отзывы</button><button class="chip" type="button" data-go="/master/slots">Слоты</button><button class="chip" type="button" data-go="/master/later">Оплаты</button></div>';
  }
  const ctas = own ? '<p class="lockline">Один профиль на человека. Салона в MurrHub нет.</p>' :
    '<div class="btnrow"><button class="btn primary" type="button" data-act="book" data-master="' + m.id + '" data-service="">Записаться</button>' +
    '<button class="btn" type="button" data-act="write-service" data-master="' + m.id + '" data-service="' + (servicesOf(m.id)[0] ? servicesOf(m.id)[0].id : "") + '">Написать</button></div>';
  return '<section class="page profile"><div class="mosaicwrap">' +
    (back ? '<button class="iconbtn backfloat" type="button" data-back="' + esc(back) + '" aria-label="Назад">' + icon("back") + "</button>" : "") +
    '<div class="mosaic">' + tiles + '</div><button class="cert-tab" type="button" data-go="' + certGo + '">Сертификаты</button></div>' +
    '<div class="pad"><div class="who"><div class="spread"><h2>' + esc(m.name) + " " + seal(m) + "</h2>" + follow + "</div>" +
    '<div class="row" style="margin-top:8px;align-items:flex-start">' + avatarHtml(m, "lg") + '<div class="grow">' +
    '<div class="muted">' + starsHtml(st.avg) + " " + fmtRating(st.avg) + "</div>" +
    '<div class="muted">' + st.n + " " + plural(st.n, "отзыв", "отзыва", "отзывов") + "</div>" +
    '<div class="muted">' + esc(m.city) + " · " + esc(m.district) + "</div></div></div></div>" +
    '<p class="line">' + esc(lineOf(m)) + "</p>" + editor + factsHtml(m) + (own ? "" : slotLine) +
    '<p class="section">Услуги</p>' + svcs + '<p class="section">Отзывы</p>' + revs + ctas + "</div></section>";
}

function screenCerts(masterId, back) {
  const m = master(masterId);
  if (!m) return missing("Нет сертификатов");
  const cards = (m.certs || []).map((c) => '<article class="paper"><span class="kicker">' + esc(c.year) + "</span><b>" + esc(c.title) + "</b><p class=\"muted\">" + esc(c.org) + "</p></article>").join("");
  return page({
    title: "Сертификаты",
    back: back,
    body: "<p class=\"muted\">" + esc(m.name) + ". Это боковой экран, не главный блок профиля.</p>" + cards,
  });
}

function screenBook(masterId) {
  const m = master(masterId);
  if (!m) return missing("Некого записывать");
  if (S.ui.draft.masterId !== masterId) S.ui.draft = { masterId: masterId, serviceId: S.ui.draft.serviceId || "", slotId: "", note: "" };
  const svcs = servicesOf(m.id).map((sv) => '<button class="svc pick' + (S.ui.draft.serviceId === sv.id ? " on" : "") + '" type="button" data-act="pick-service" data-id="' + sv.id + '" data-master="' + m.id + '"><span><b>' + esc(sv.name) + '</b><span class="muted">' + esc(dur(sv.duration)) + '</span></span><span class="price">' + sv.price + " €</span></button>").join("");
  if (!m.slotsVisible) {
    const sv = S.ui.draft.serviceId || (servicesOf(m.id)[0] && servicesOf(m.id)[0].id) || "";
    return page({
      title: "Запись",
      back: "/client/master/" + m.id,
      body: '<div class="banner"><b>Окна по запросу</b><p>' + esc(m.name.split(" ")[0]) + " не вешает слоты. Напиши удобные дни — подберёт в чате.</p></div>" + svcs +
        '<button class="btn primary block" type="button" data-act="write-service" data-master="' + m.id + '" data-service="' + sv + '">Написать о записи</button>',
    });
  }
  const groups = {};
  allSlots(m.id).forEach((s) => {
    const label = fmtDay(s.iso);
    if (!groups[label]) groups[label] = [];
    groups[label].push(s);
  });
  const slots = Object.keys(groups).map((label) => {
    const items = groups[label].map((s) => {
      const disc = slotDiscount(m.id, s.iso);
      const busy = taken(s.id) || !s.open;
      const on = S.ui.draft.slotId === s.id;
      return '<button class="slotpick' + (on ? " on" : "") + '" type="button" data-act="pick-slot" data-id="' + s.id + '"' + (busy ? " disabled" : "") + ">" +
        fmtClock(s.iso) + (busy ? "<small>занято</small>" : "") + (disc && !busy ? "<small>" + disc.label + "</small>" : "") + "</button>";
    }).join("");
    return '<p class="dayh">' + esc(label) + '</p><div class="slots">' + items + "</div>";
  }).join("");
  const ready = S.ui.draft.serviceId && S.ui.draft.slotId;
  return '<section class="page bookpage"><header class="top"><button class="iconbtn" type="button" data-back="/client/master/' + m.id + '" aria-label="Назад">' + icon("back") + '</button><h1>Запись</h1><span></span></header>' +
    '<div class="bookbody"><p class="muted">' + esc(m.name) + " · " + esc(m.address) + "</p>" + svcs + slots +
    '<div class="field"><span>Заметка мастеру</span><input data-field="draft.note" maxlength="120" placeholder="Длина, оттенок, ничего лишнего" value="' + esc(S.ui.draft.note) + '"/></div>' +
    '<p class="lockline">Оплата в приложении не в этой версии. Цену видно заранее, платишь мастеру напрямую.</p></div>' +
    '<div class="dock"><button class="btn primary block" id="book-next" type="button" data-act="book-next"' + (ready ? "" : " disabled") + ">Дальше</button></div></section>";
}

function quotedPrice(masterId, serviceId, slotId) {
  const sv = service(serviceId);
  if (!sv) return "";
  const slot = allSlots(masterId).find((s) => s.id === slotId);
  const disc = slot ? slotDiscount(masterId, slot.iso) : null;
  if (disc) return Math.round(sv.price * (100 - disc.pct) / 100) + " € вместо " + sv.price + " €";
  return sv.price + " €";
}

function screenBookConfirm(masterId) {
  const d = S.ui.draft;
  const m = master(masterId);
  const sv = service(d.serviceId);
  const slot = allSlots(masterId).find((s) => s.id === d.slotId);
  if (!m || !sv || !slot || d.masterId !== masterId) {
    return page({ title: "Запись", back: "/client/book/" + masterId, body: '<p>Сначала выбери услугу и окно.</p><button class="btn primary" type="button" data-go="/client/book/' + masterId + '">К окнам</button>' });
  }
  return page({
    title: "Проверь",
    back: "/client/book/" + masterId,
    body: '<div class="card"><b>' + esc(m.name) + "</b><p>" + esc(sv.name) + "</p><p>" + esc(fmtWhen(slot.iso)) + "</p><p class=\"price\">" + esc(quotedPrice(masterId, sv.id, slot.id)) + "</p><p class=\"muted\">" + esc(m.address) + "</p>" +
      (d.note ? "<p>" + esc(d.note) + "</p>" : "") + "</div>" +
      '<button class="btn primary block" type="button" data-act="book-send">Отправить запрос</button>' +
      '<p class="lockline">Это не оплата. Мастер подтвердит запись в чате.</p>',
  });
}

function screenBookDone() {
  const b = bookings().find((x) => x.id === S.lastBooking);
  if (!b) return page({ title: "Запрос", back: "/client/visits", body: "<p>Запроса нет.</p>" });
  const m = master(b.masterId);
  const t = threadBetween(b.masterId, SESSION.clientId);
  return page({
    title: "Ушло",
    back: "/client/visits",
    body: '<p class="display" style="font-size:32px">Ждём ' + esc(m.name.split(" ")[0]) + "</p><p>" + esc(fmtWhen(b.iso)) + "</p>" +
      "<p class=\"muted\">Оплата в приложении не в этой версии. Договоритесь о деньгах напрямую.</p>" +
      (t ? '<button class="btn primary block" type="button" data-go="/client/chat/' + t.id + '">Открыть чат</button>' : "") +
      '<button class="btn block" type="button" data-go="/client/visits">Мои визиты</button>',
  });
}

function placeBooking() {
  const d = S.ui.draft;
  const m = master(d.masterId);
  const slot = allSlots(d.masterId).find((s) => s.id === d.slotId);
  const sv = service(d.serviceId);
  if (!m || !slot || !sv || taken(slot.id) || !slot.open) return null;
  const b = {
    id: uid("b"),
    masterId: m.id,
    clientId: SESSION.clientId,
    serviceId: sv.id,
    slotId: slot.id,
    iso: slot.iso,
    status: "pending",
    note: (d.note || "").trim(),
  };
  S.extraBookings.push(b);
  S.lastBooking = b.id;
  const t = ensureThread(m.id);
  pushMsg(t.id, { from: "system", type: "system", text: "Запрос на запись · " + fmtWhen(slot.iso) + " · " + sv.name });
  if (b.note) pushMsg(t.id, { from: "maria", type: "text", text: b.note });
  save();
  return b;
}

function confirmBooking(id) {
  const b = bookings().find((x) => x.id === id);
  if (!b) return "missing";
  if (!S.subscribed) {
    S.afterPaywall = "/master/booking/" + id;
    save();
    return "paywall";
  }
  S.bookingStatus[id] = "confirmed";
  const t = threadBetween(b.masterId, b.clientId);
  if (t) pushMsg(t.id, { from: "system", type: "system", text: "Запись подтверждена · " + fmtWhen(b.iso) });
  save();
  return "ok";
}

function msgHtml(msg, role) {
  if (msg.type === "system") return '<div class="sys">' + esc(msg.text) + "</div>";
  const mine = (role === "master" && msg.from === "alina") || (role === "client" && msg.from === "maria");
  const cls = mine ? "me" : "";
  if (msg.type === "voice") {
    const sec = msg.sec || 4;
    return '<div class="bubble voice ' + cls + '"><div class="row"><button class="iconbtn" type="button" data-act="play" data-sec="' + sec + '" aria-label="Слушать голосовое, ' + sec + ' секунд">' + icon("play") + '</button><span class="bars" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></span><b>0:' + String(sec).padStart(2, "0") + '</b></div><span class="cap">' + esc(msg.text || "") + '</span><span class="at">' + esc(msg.at || "") + "</span></div>";
  }
  if (msg.type === "post") {
    const p = getPost(msg.postId);
    if (!p) return "";
    const go = (role === "master" ? "/master/post/" : "/client/post/") + p.id;
    const who = master(p.masterId);
    return '<button class="pattach ' + cls + '" type="button" data-go="' + go + '">' +
      (coverOf(p) ? '<img src="' + esc(coverOf(p)) + '" alt=""/>' : '<span class="thumb">+</span>') +
      '<span><em class="kicker">Работа</em><b>' + esc(p.title) + '</b><em class="muted">' + esc(who ? who.name : "") + "</em></span></button>";
  }
  if (msg.type === "service") {
    const sv = service(msg.serviceId);
    if (!sv) return "";
    const book = role === "client"
      ? '<button class="btn small primary" type="button" data-act="book" data-master="' + sv.masterId + '" data-service="' + sv.id + '">Записаться</button>'
      : "";
    return '<div class="scard"><span class="kicker">' + esc(CATS[sv.category] || "Услуга") + "</span><b>" + esc(sv.name) + "</b><div>" + sv.price + " € · " + esc(dur(sv.duration)) + "</div>" + book + "</div>";
  }
  return '<div class="bubble ' + cls + '">' + esc(msg.text || "") + '<span class="at">' + esc(msg.at || "") + "</span></div>";
}

function calBtn(go) {
  return '<button class="calbtn" type="button" data-go="' + go + '"><span class="calface">' + icon("calendar") + "</span><span>Календарь</span></button>";
}

function screenChats(role) {
  const list = allThreads().filter((t) => role === "master" ? t.masterId === SESSION.masterId : t.clientId === SESSION.clientId);
  const rows = list.map((t) => {
    const other = person(role === "master" ? t.clientId : t.masterId);
    const last = messages(t).slice(-1)[0];
    const preview = !last ? "" : last.type === "voice" ? "Голосовое" : last.type === "service" ? "Карточка услуги" : last.type === "post" ? "Работа" : last.text;
    return '<button class="hit" type="button" data-go="/' + role + "/chat/" + t.id + '">' + avatarHtml(other) +
      "<span><b>" + esc(other.name) + "</b><em>" + esc(preview || "") + "</em></span></button>";
  }).join("");
  const body = rows || '<div class="empty">Переписок пока нет.</div>';
  if (role !== "client") return page({ title: "Чаты", body: body });
  return '<section class="chatpage"><header class="top"><span></span><h1>Чаты</h1><span></span></header><div class="thread">' +
    body + '</div><div class="composer calbar noline">' + calBtn("/client/chats/calendar") + "</div></section>";
}

function screenChat(id, role) {
  const t = threadById(id);
  if (!t) return missing("Нет такого чата");
  const other = person(role === "master" ? t.clientId : t.masterId);
  const back = "/" + role + "/chats";
  const body = messages(t).map((m) => msgHtml(m, role)).join("");
  const pending = S.pending && S.pending.threadId === id ? S.pending : null;
  let pendingHtml = "";
  if (pending) {
    const label = pending.kind === "post" ? ((getPost(pending.id) || {}).title || "работа") : ((service(pending.id) || {}).name || "услуга");
    pendingHtml = '<div class="attach"><span>Прикреплено · ' + esc(label) + '</span><button class="btn small" type="button" data-act="clear-pending">Убрать</button></div>';
  }
  const review = role === "client" && t.masterId === "eva" && !visitReviewed(DATA.visits.find((v) => v.id === "v-eva"));
  const reviewBar = review ? '<button class="banner" type="button" data-go="/client/review/v-eva" style="margin:8px 12px;text-align:left;color:inherit;width:auto"><b>Визит прошёл</b><div class="muted">Оставить отзыв</div></button>' : "";
  const profile = role === "client" ? "/client/master/" + t.masterId : "/master/bookings";
  const cal = role === "client" ? calBtn("/client/chat/" + id + "/calendar") : "";
  return '<section class="chatpage"><header class="top"><button class="iconbtn" type="button" data-back="' + back + '" aria-label="Назад">' + icon("back") + '</button><h1>' + esc(other.name) + '</h1><button class="iconbtn" type="button" data-go="' + profile + '" aria-label="Профиль">' + icon("user") + '</button></header>' +
    '<div class="thread">' + body + "</div>" + reviewBar + pendingHtml +
    '<div class="composer' + (cal ? " noline" : "") + '"><button class="iconbtn" type="button" data-act="voice" aria-label="Голосовое">' + icon("mic") + '</button>' +
    '<input id="chatbox" data-field="chatText" placeholder="Сообщение" value="' + esc(S.ui.chatText) + '" aria-label="Сообщение"/>' +
    '<button class="iconbtn" type="button" data-act="send" aria-label="Отправить">' + icon("send") + "</button>" + cal + "</div></section>";
}

function bookedVisits() {
  const rows = bookings().filter((b) => b.status === "pending" || b.status === "confirmed").map((b) => ({
    iso: b.iso, masterId: b.masterId, clientId: b.clientId, serviceId: b.serviceId, status: b.status,
  }));
  DATA.visits.forEach((v) => {
    rows.push({ iso: v.iso, masterId: v.masterId, clientId: v.clientId, serviceId: v.serviceId, status: "done" });
  });
  return rows.sort((a, b) => a.iso.localeCompare(b.iso));
}

function visitLine(it) {
  const m = master(it.masterId);
  const sv = it.serviceId ? service(it.serviceId) : null;
  const who = person(it.clientId);
  const status = it.status === "confirmed" ? "подтверждено" : it.status === "pending" ? "ждёт" : "уже был";
  const mine = it.clientId === SESSION.clientId;
  return '<article class="visit"><span class="spread"><b>' + esc(m ? m.name : "") + '</b><span class="status' + (it.status === "pending" ? "" : " ok") + '">' + status + "</span></span><div>" +
    esc(sv ? sv.name : "Визит") + '</div><div class="muted">' + esc(fmtWhen(it.iso)) + (mine ? "" : " · " + esc(who.name.split(" ")[0])) + "</div></article>";
}

function screenChatCalendar(threadId) {
  const back = threadById(threadId) ? "/client/chat/" + threadId : "/client/chats";
  const month = S.ui.calMonth || "2026-11";
  const bits = month.split("-");
  const y = Number(bits[0]);
  const mo = Number(bits[1]);
  const items = bookedVisits().filter((it) => {
    const p = parts(it.iso);
    return p.y === y && p.mo === mo;
  });
  const byDay = {};
  items.forEach((it) => {
    const d = parts(it.iso).d;
    if (!byDay[d]) byDay[d] = [];
    byDay[d].push(it);
  });
  const first = new Date(Date.UTC(y, mo - 1, 1));
  const lead = (first.getUTCDay() + 6) % 7;
  const count = new Date(Date.UTC(y, mo, 0)).getUTCDate();
  const heads = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"].map((d) => '<span class="calh">' + d + "</span>").join("");
  let cells = "";
  for (let i = 0; i < lead; i++) cells += '<span class="calempty"></span>';
  const selected = String(S.ui.calDay || "").indexOf(month) === 0 ? Number(String(S.ui.calDay).slice(8)) : 0;
  for (let d = 1; d <= count; d++) {
    const key = month + "-" + String(d).padStart(2, "0");
    const has = !!byDay[d];
    cells += '<button type="button" class="calday' + (has ? " has" : "") + (selected === d ? " on" : "") + '" data-act="cal-day" data-id="' + key + '">' + d + (has ? "<i></i>" : "") + "</button>";
  }
  const shown = selected ? (byDay[selected] || []) : items;
  const list = shown.map(visitLine).join("") || '<p class="muted">В этот день записей нет.</p>';
  return page({
    title: "Календарь",
    back: back,
    body: '<p class="muted">Визиты, которые уже стоят в записи.</p><div class="calhead"><button class="iconbtn" type="button" data-act="cal-shift" data-id="prev" aria-label="Предыдущий месяц">' + icon("back") + "</button><b>" +
      esc(MO[mo - 1] + " " + y) + '</b><button class="iconbtn flip" type="button" data-act="cal-shift" data-id="next" aria-label="Следующий месяц">' + icon("back") + "</button></div>" +
      '<div class="calgrid">' + heads + cells + "</div>" +
      '<p class="section">' + (selected ? "Этот день" : "Уже записано") + "</p>" + list,
  });
}

function screenSaves() {
  const list = posts().concat(clientPostsAll()).filter((p) => S.saves[p.id]);
  const html = list.map((p) => p.kind === "client" ? clientCard(p) : cardHtml(p)).join("");
  return page({
    title: "Сохранённое",
    back: "/client/profile",
    body: html || '<div class="empty"><p class="display">Пусто</p><p>Отмечай работы закладкой — вернуться будет проще, чем листать ленту.</p></div>',
  });
}

function screenFollows() {
  const list = DATA.masters.filter((m) => S.follows[m.id]);
  const html = list.map((m) => '<button class="hit" type="button" data-go="/client/master/' + m.id + '">' + avatarHtml(m) + "<span><b>" + esc(m.name) + "</b><em>" + esc(m.district) + "</em></span></button>").join("");
  return page({ title: "Подписки", back: "/client/profile", body: html || '<div class="empty">Ты ещё ни на кого не подписана.</div>' });
}

function screenVisits() {
  const upcoming = bookings().filter((b) => b.clientId === SESSION.clientId && (b.status === "pending" || b.status === "confirmed"));
  const past = DATA.visits.filter((v) => v.clientId === SESSION.clientId);
  const up = upcoming.map((b) => {
    const m = master(b.masterId);
    const sv = service(b.serviceId);
    return '<div class="visit"><b>' + esc(m.name) + '</b><div>' + esc(sv ? sv.name : "") + "</div><div class=\"muted\">" + esc(fmtWhen(b.iso)) + " · " + (b.status === "pending" ? "ждём подтверждения" : "подтверждено") + "</div></div>";
  }).join("") || '<p class="muted">Будущих записей нет.</p>';
  const was = past.map((v) => {
    const m = master(v.masterId);
    const sv = service(v.serviceId);
    const done = visitReviewed(v);
    return '<div class="visit"><b>' + esc(m.name) + "</b><div>" + esc(sv ? sv.name : "") + "</div><div class=\"muted\">" + esc(fmtWhen(v.iso)) + "</div>" +
      (done ? '<span class="status ok">отзыв есть</span>' : '<button class="btn small primary" type="button" data-go="/client/review/' + v.id + '">Оставить отзыв</button>') + "</div>";
  }).join("");
  return page({ title: "Визиты", back: "/client/profile", body: '<p class="section">Дальше</p>' + up + '<p class="section">Уже были</p>' + was });
}

function screenReview(id) {
  const v = DATA.visits.find((x) => x.id === id);
  if (!v) return missing("Нет такого визита");
  const m = master(v.masterId);
  const sv = service(v.serviceId);
  if (visitReviewed(v)) {
    return page({ title: "Отзыв", back: "/client/visits", body: "<p>Отзыв уже у " + esc(m.name.split(" ")[0]) + " на профиле.</p>" });
  }
  let stars = "";
  for (let i = 1; i <= 5; i++) stars += '<button type="button" class="' + (i <= S.ui.review.stars ? "on" : "") + '" data-act="star" data-n="' + i + '" aria-label="' + i + '">' + icon("star") + "</button>";
  return page({
    title: "После визита",
    back: "/client/visits",
    body: '<div class="row">' + avatarHtml(m, "lg") + "<div><b>" + esc(m.name) + "</b><div class=\"muted\">" + esc(sv.name) + " · " + esc(fmtWhen(v.iso)) + "</div></div></div>" +
      '<div class="starbig">' + stars + "</div>" +
      '<div class="field"><span>Как прошло</span><textarea data-field="review.text" maxlength="240" placeholder="Коротко, про работу">' + esc(S.ui.review.text) + "</textarea></div>" +
      '<button class="toggle' + (S.ui.review.photo ? " on" : "") + '" type="button" data-act="review-photo">' + (S.ui.review.photo ? "Фото результата приложено" : "Приложить фото результата") + "</button>" +
      '<button class="btn primary block" type="button" data-act="review-send" data-id="' + v.id + '">Опубликовать</button>',
  });
}

function screenClientProfile() {
  const me = person(SESSION.clientId);
  const interests = S.interests.length ? S.interests.map((id) => CATS[id]).join(" · ") : "не выбраны";
  const need = !visitReviewed(DATA.visits.find((v) => v.id === "v-eva"));
  const mine = clientPostsAll().filter((p) => p.authorId === SESSION.clientId);
  return page({
    title: "Профиль",
    right: '<button class="iconbtn" type="button" data-go="/client/saves" aria-label="Сохранённое">' + icon("bookmark") + "</button>",
    body: '<div class="row">' + avatarHtml(me, "lg") + "<div><h2 class=\"display\" style=\"font-size:28px;margin:0\">" + esc(me.name) + '</h2><div class="muted">Вильнюс · клиент</div></div></div>' +
      (need ? '<button class="banner" type="button" data-go="/client/review/v-eva" style="width:100%;text-align:left;color:inherit"><b>Визит у Евы прошёл</b><div>Оставить отзыв</div></button>' : "") +
      '<p class="muted">Интересы: ' + esc(interests) + '</p><button class="btn small" type="button" data-go="/client/onboarding">Изменить интересы</button>' +
      '<div class="chips" style="margin-top:14px"><button class="chip" type="button" data-go="/client/visits">Визиты</button><button class="chip" type="button" data-go="/client/follows">Подписки · ' + Object.keys(S.follows).filter((k) => S.follows[k]).length + '</button><button class="chip" type="button" data-go="/client/saves">Сохранено · ' + Object.keys(S.saves).filter((k) => S.saves[k]).length + "</button></div>" +
      '<p class="section">Мои запросы</p>' + (mine.map(clientCard).join("") || '<p class="muted">Пока нет.</p>') +
      '<button class="btn block" type="button" data-go="/client/compose">Новый запрос по теме</button>' +
      (S.reposts.length ? '<p class="section">Репосты</p>' + S.reposts.map((id) => { const p = getPost(id); return p ? clientCardLike(p) : ""; }).join("") : "") +
      '<p class="lockline">Это профиль человека, не салона.</p>',
  });
}

function clientCardLike(p) {
  if (p.kind === "client") return clientCard(p);
  return '<button class="hit" type="button" data-go="/client/post/' + p.id + '"><img src="' + esc(coverOf(p)) + '" alt=""/><span><b>' + esc(p.title) + "</b><em>Репост</em></span></button>";
}

function craftChips(current) {
  return Object.keys(CATS).map((id) => '<button class="chip' + (current === id ? " on" : "") + '" type="button" data-act="set-cat" data-id="' + id + '">' + esc(CATS[id]) + "</button>").join("");
}

function screenClientThemes() {
  const items = [
    ["want", "Хочу так", "Референс и одна фраза, что важно. Без дневника."],
    ["seek", "Ищу мастера", "Услуга, район, бюджет, когда."],
    ["visit", "Мой визит", "Только после визита и только про работу."],
  ].map((t) => '<button class="theme" type="button" data-act="pick-theme" data-id="' + t[0] + '"><b>' + t[1] + '</b><span class="muted">' + t[2] + "</span></button>").join("");
  return page({
    title: "Новый запрос",
    back: "/client/profile",
    body: "<p>Обычный человек пишет только внутри ремесла: ногти, волосы, тату, пирсинг, брови, ресницы. Свободного поста нет. Текст и фото можно сразу. Тема держит работы мастеров первыми.</p><div class=\"themes\">" + items + "</div>",
  });
}

function photoTray(selected, bag) {
  return '<div class="phototray">' + DATA.tray.map((src) => {
    const on = bag === "client" ? selected === src : selected.indexOf(src) !== -1;
    return '<button type="button" class="' + (on ? "on" : "") + '" data-act="photo" data-bag="' + bag + '" data-src="' + esc(src) + '"><img src="' + esc(src) + '" alt=""/></button>';
  }).join("") + "</div>";
}

function screenClientForm() {
  const theme = S.ui.composeTheme;
  if (!theme) return screenClientThemes();
  const f = S.ui.clientForm;
  const title = theme === "want" ? "Хочу так" : theme === "seek" ? "Ищу мастера" : "Мой визит";
  let fields = "";
  const craft = '<p class="label">Ремесло</p><div class="chips">' + craftChips(f.category) + "</div>";
  if (theme === "want") {
    fields = craft + "<p class=\"label\">Референс, если есть</p>" + photoTray(f.photo, "client") +
      '<div class="field"><span>Текст</span><textarea data-field="clientForm.text" maxlength="320" placeholder="Длина, тон, без декора">' + esc(f.text) + "</textarea></div>";
  } else if (theme === "seek") {
    const dist = DISTRICTS.map((d) => '<button class="chip' + (f.district === d ? " on" : "") + '" type="button" data-act="set-dist" data-id="' + esc(d) + '">' + esc(d) + "</button>").join("");
    fields = craft + '<p class="label">Район</p><div class="chips">' + dist + "</div>" +
      '<div class="field"><span>Бюджет</span><input data-field="clientForm.budget" maxlength="24" placeholder="до 100 €" value="' + esc(f.budget) + '"/></div>' +
      '<div class="field"><span>Когда</span><input data-field="clientForm.when" maxlength="32" placeholder="в этом месяце" value="' + esc(f.when) + '"/></div>' +
      '<div class="field"><span>Текст</span><textarea data-field="clientForm.text" maxlength="320">' + esc(f.text) + "</textarea></div>";
  } else {
    const visits = DATA.visits.filter((v) => v.clientId === SESSION.clientId).map((v) => {
      const m = master(v.masterId);
      return '<button class="chip' + (f.masterId === v.masterId ? " on" : "") + '" type="button" data-act="set-visit" data-id="' + v.masterId + '">' + esc(m.name) + "</button>";
    }).join("");
    fields = craft + '<p class="label">К кому ходила</p><div class="chips">' + visits + "</div><p class=\"label\">Фото результата, если есть</p>" + photoTray(f.photo, "client") +
      '<div class="field"><span>Текст</span><textarea data-field="clientForm.text" maxlength="320">' + esc(f.text) + "</textarea></div>";
  }
  return page({
    title: title,
    back: "/client/compose",
    body: fields + '<button class="btn primary block" type="button" data-go="/client/compose/preview">Дальше</button>',
  });
}

function screenClientPreview() {
  const theme = S.ui.composeTheme || "want";
  const f = S.ui.clientForm;
  const label = theme === "want" ? "Хочу так" : theme === "seek" ? "Ищу мастера" : "Мой визит";
  return page({
    title: "Так увидят",
    back: "/client/compose/form",
    body: '<div class="card"><span class="kicker">' + label + "</span><b>" + esc(f.text || "Без текста") + "</b><p class=\"muted\">" + esc(CATS[f.category] || "") + (f.district ? " · " + esc(f.district) : "") + "</p></div>" +
      '<p class="lockline">Попадёт под работы, не вместо них. Цена на карточке ленты не показывается.</p>' +
      '<button class="btn primary block" type="button" data-act="publish-client">Опубликовать запрос</button>',
  });
}

function publishClient() {
  const theme = S.ui.composeTheme;
  const f = S.ui.clientForm;
  if (!theme) return null;
  if (!CATS[f.category]) return null;
  if (!String(f.text || "").trim()) return null;
  if (theme === "seek" && !f.district) return null;
  if (theme === "visit" && !f.masterId) return null;
  const titles = { want: "Хочу так", seek: "Ищу мастера", visit: "Мой визит" };
  const post = {
    id: uid("cp"),
    kind: "client",
    theme: theme,
    authorId: SESSION.clientId,
    title: titles[theme],
    images: f.photo ? [f.photo] : [],
    ratio: "sq",
    category: f.category || "nails",
    text: String(f.text || "").trim().slice(0, 320),
    budget: f.budget || "",
    district: f.district || "",
    when: f.when || "",
    masterId: f.masterId || "",
    likes: 0,
    saves: 0,
    comments: [],
  };
  S.clientPosts.push(post);
  save();
  return post;
}

function screenMasterBookings() {
  const list = bookings().filter((b) => b.masterId === SESSION.masterId).slice().sort((a, b) => a.iso.localeCompare(b.iso));
  const banner = S.subscribed ? '<div class="banner"><b>Доступ открыт</b><p class="muted">Подписка в прототипе ничего не списывает.</p></div>' :
    '<div class="banner"><b>Записи закрыты</b><p>Подтверждать окна можно с подпиской. Это не оплата визита.</p><button class="btn small primary" type="button" data-go="/master/paywall">Открыть доступ</button></div>';
  const cards = list.map((b) => {
    const c = person(b.clientId);
    const sv = service(b.serviceId);
    const label = b.status === "pending" ? "ждёт" : b.status === "confirmed" ? "подтверждена" : b.status === "declined" ? "отклонена" : b.status;
    return '<button class="visit inbox" type="button" data-go="/master/booking/' + b.id + '"><span class="spread"><b>' + esc(c.name) + '</b><span class="status ' + (b.status === "confirmed" ? "ok" : "") + '">' + label + "</span></span><span class=\"muted\">" + esc(sv ? sv.name : "") + " · " + esc(fmtWhen(b.iso)) + "</span></button>";
  }).join("");
  return page({ title: "Записи", body: banner + (cards || '<p class="muted">Запросов нет.</p>') });
}

function screenMasterBooking(id) {
  const b = bookings().find((x) => x.id === id);
  if (!b) return missing("Нет такой записи");
  const c = person(b.clientId);
  const sv = service(b.serviceId);
  const t = threadBetween(b.masterId, b.clientId);
  const actions = b.status === "pending"
    ? '<div class="btnrow"><button class="btn primary" type="button" data-act="confirm-booking" data-id="' + b.id + '">Подтвердить</button><button class="btn" type="button" data-act="decline-booking" data-id="' + b.id + '">Отклонить</button></div>'
    : '<p class="muted">Статус: ' + esc(b.status === "confirmed" ? "подтверждена" : b.status === "declined" ? "отклонена" : b.status) + "</p>";
  return page({
    title: "Запись",
    back: "/master/bookings",
    body: '<div class="row">' + avatarHtml(c, "lg") + "<div><b>" + esc(c.name) + "</b><div>" + esc(sv ? sv.name : "") + "</div></div></div>" +
      "<p>" + esc(fmtWhen(b.iso)) + "</p><p class=\"price\">" + (sv ? sv.price + " €" : "") + "</p><p>" + esc(b.note || "Без заметки") + "</p>" +
      '<p class="lockline">Клиент платит тебе напрямую. Оплаты визита в приложении нет.</p>' + actions +
      (t ? '<button class="btn block" type="button" data-go="/master/chat/' + t.id + '">Написать</button>' : ""),
  });
}

function screenPaywall() {
  const plans = [
    ["month", "Месяц", "19 €"],
    ["quarter", "3 месяца", "49 €"],
  ].map((p) => '<button class="plan' + (S.ui.plan === p[0] ? " on" : "") + '" type="button" data-act="plan" data-id="' + p[0] + '"><span class="kicker">' + p[1] + '</span><b class="price" style="font-size:28px">' + p[2] + "</b></button>").join("");
  const cta = S.subscribed
    ? '<button class="btn block" type="button" data-act="unsubscribe">Закрыть доступ в прототипе</button>'
    : '<button class="btn primary block" type="button" data-act="subscribe">Открыть доступ в прототипе</button>';
  return page({
    title: "Подписка",
    back: S.afterPaywall || "/master/bookings",
    body: '<p class="display" style="font-size:32px">Чтобы публиковать и принимать записи</p><p>Профиль, который уже есть, клиенты видят и без неё. Новая работа и подтверждение окна — с подпиской.</p>' +
      plans + "<ul><li>публикация работ</li><li>подтверждение записей</li><li>слоты в профиле</li></ul>" + cta +
      '<p class="lockline">Деньги не списываются. На этом экране нет оплаты.</p>' +
      '<button class="btn block" type="button" data-go="/master/later">Комиссия и оплата визита — не в этой версии</button>',
  });
}

function screenLater() {
  return page({
    title: "Позже",
    back: "/master/profile",
    body: '<div class="card"><b>Подписка мастера</b><p class="muted">В этой версии это только доступ: публиковать и принимать записи. Кассы нет.</p></div>' +
      '<div class="card"><b>Комиссия с записи</b><p>Не в этой версии.</p></div>' +
      '<div class="card"><b>Оплата визита в приложении</b><p>Не в этой версии. Клиент платит мастеру напрямую.</p></div>',
  });
}

function screenMasterPosts() {
  const mine = posts().filter((p) => p.masterId === SESSION.masterId);
  return page({
    title: "Работы",
    right: '<button class="iconbtn" type="button" data-go="/master/compose" aria-label="Новая работа">' + icon("plus") + "</button>",
    body: (S.subscribed ? "" : '<div class="banner"><b>Новая публикация закрыта</b><p class="muted">Форма уже про работу, кнопка ведёт на подписку.</p></div>') +
      '<div class="feedflow">' + mine.map((p) => cardHtml(p, { role: "master" })).join("") + "</div>",
  });
}

function screenMasterCompose() {
  const f = S.ui.masterForm;
  const svcs = '<button class="chip' + (!f.serviceId ? " on" : "") + '" type="button" data-act="set-mservice" data-id="">Без услуги</button>' +
    servicesOf("alina").map((sv) => '<button class="chip' + (f.serviceId === sv.id ? " on" : "") + '" type="button" data-act="set-mservice" data-id="' + sv.id + '">' + esc(sv.name) + "</button>").join("");
  const vibes = ["молочный", "тихий", "чистый", "минимал"].map((v) => '<button class="chip' + (f.vibes.indexOf(v) !== -1 ? " on" : "") + '" type="button" data-act="mvibe" data-id="' + esc(v) + '">' + esc(v) + "</button>").join("");
  return page({
    title: "Новая работа",
    back: "/master/posts",
    body: (S.subscribed ? "" : '<div class="banner"><b>Нужна подписка, чтобы выложить</b><p class="muted">Смотреть форму можно. Оплаты здесь нет.</p></div>') +
      '<p class="lockline">Посты из жизни — не в этой версии. Здесь только работа. Позже таких постов будет немного, примерно каждый десятый.</p>' +
      "<p class=\"label\">До трёх фото</p>" + photoTray(f.photos, "master") +
      '<button class="toggle' + (f.compare ? " on" : "") + '" type="button" data-act="compare-toggle">Первые два кадра — до и после</button>' +
      '<div class="field"><span>Название</span><input data-field="masterForm.title" maxlength="60" placeholder="Молочный овал" value="' + esc(f.title) + '"/></div>' +
      '<div class="field"><span>Текст</span><textarea data-field="masterForm.text" maxlength="400" placeholder="Можно только текстом, без фото">' + esc(f.text || "") + "</textarea></div>" +
      '<p class="label">Услуга, если нужна</p><div class="chips">' + svcs + "</div>" +
      '<div class="field"><span>Цена, € — можно пусто</span><input data-field="masterForm.price" inputmode="numeric" placeholder="35" value="' + esc(f.price) + '"/></div>' +
      '<div class="field"><span>Минуты — можно пусто</span><input data-field="masterForm.duration" inputmode="numeric" placeholder="75" value="' + esc(f.duration) + '"/></div>' +
      '<p class="label">Настроение</p><div class="chips">' + vibes + "</div>" +
      '<button class="btn primary block" type="button" data-act="publish-master">Опубликовать работу</button>',
  });
}

function publishMaster() {
  if (!S.subscribed) return "paywall";
  const f = S.ui.masterForm;
  const text = String(f.text || "").trim();
  if (!String(f.title || "").trim() || (!f.photos.length && !text)) return null;
  const price = f.price === "" ? null : Number(f.price);
  const duration = f.duration === "" ? null : Number(f.duration);
  const post = {
    id: uid("p"),
    masterId: "alina",
    kind: f.photos.length ? "work" : "text",
    title: String(f.title).trim().slice(0, 60),
    text: text.slice(0, 400),
    images: f.photos.slice(0, 3),
    compare: !!(f.compare && f.photos.length > 1),
    before: f.photos[0],
    after: f.photos[1] || f.photos[0],
    ratio: "tall",
    category: "nails",
    serviceId: f.serviceId || null,
    price: Number.isFinite(price) ? price : null,
    duration: Number.isFinite(duration) ? duration : null,
    vibes: f.vibes.slice(),
    likes: 0,
    saves: 0,
    comments: [],
    pos: "center",
  };
  S.masterPosts.push(post);
  save();
  return post;
}

function upcomingDays(n) {
  const out = [];
  for (let i = 1; i <= n; i++) {
    const d = new Date(Date.UTC(2026, 10, 6 + i));
    out.push(d.toISOString().slice(0, 10));
  }
  return out;
}

function screenSlots() {
  const groups = {};
  allSlots("alina").forEach((s) => {
    const label = fmtDay(s.iso);
    if (!groups[label]) groups[label] = [];
    groups[label].push(s);
  });
  const html = Object.keys(groups).map((label) => {
    const items = groups[label].map((s) => {
      const closed = !!S.slotsOff[s.id];
      const disc = slotDiscount("alina", s.iso);
      return '<button class="slotpick' + (closed ? "" : " on") + '" type="button" data-act="slot" data-id="' + s.id + '">' + fmtClock(s.iso) +
        "<small>" + (closed ? "закрыто" : "открыто") + (taken(s.id) ? " · занято" : "") + "</small>" +
        (disc ? "<small>" + disc.label + "</small>" : "") + "</button>";
    }).join("");
    return '<p class="dayh">' + esc(label) + '</p><div class="slots">' + items + "</div>";
  }).join("");
  const days = upcomingDays(8).map((d) => '<button class="chip' + (S.ui.newSlotDay === d ? " on" : "") + '" type="button" data-act="setday" data-id="' + d + '">' + esc(fmtDay(d + "T12:00")) + "</button>").join("");
  const times = ["10:00", "11:30", "13:00", "15:00", "16:30", "18:00"].map((t) => '<button class="chip' + (S.ui.newSlotTime === t ? " on" : "") + '" type="button" data-act="settime" data-id="' + t + '">' + t + "</button>").join("");
  return page({
    title: "Слоты",
    body: "<p class=\"muted\">Открытые окна Алина показывает в профиле. Закрытые клиент не видит.</p>" + html +
      '<p class="section">Добавить</p><div class="chips">' + days + '</div><div class="chips">' + times + '</div>' +
      '<button class="btn primary block" type="button" data-act="add-slot">Добавить окно</button>',
  });
}

function screenServices() {
  const rows = servicesOf("alina").map((sv) => '<label class="field"><span>' + esc(sv.name) + " · " + esc(dur(sv.duration)) + '</span><input data-price="' + sv.id + '" inputmode="numeric" value="' + esc(sv.price) + '"/></label>').join("");
  return page({
    title: "Услуги",
    back: "/master/profile",
    body: "<p class=\"muted\">Цена на работе по-прежнему необязательна. Здесь — прайс кабинета.</p>" + rows,
  });
}

function screenMasterReviews() {
  const list = reviewsFor("alina").map((r) => {
    const a = person(r.author);
    return '<article class="card">' + starsHtml(r.stars) + "<p>" + esc(r.text) + '</p><div class="muted">' + esc(a.name) + " · " + esc(r.service) + " · " + esc(r.date) + "</div></article>";
  }).join("");
  return page({ title: "Отзывы", back: "/master/profile", body: list });
}

function renderClient(r) {
  if (r.name === "welcome") return screenWelcome();
  if (r.name === "onboarding") return screenOnboarding();
  if (r.name === "search" && r.a === "filters") return screenFilters();
  if (r.name === "search") return screenSearch();
  if (r.name === "map") return screenMap(r.a);
  if (r.name === "feed" && r.a === "why") return screenWhy("");
  if (r.name === "feed") return screenFeed();
  if (r.name === "post" && r.b === "comments") return screenComments(r.a, "/client/post/" + r.a);
  if (r.name === "post" && r.b === "repost") return screenRepost(r.a);
  if (r.name === "post" && r.b === "why") return screenWhy(r.a);
  if (r.name === "post") return screenPost(r.a, "client");
  if (r.name === "master" && r.b === "certs") return screenCerts(r.a, "/client/master/" + r.a);
  if (r.name === "master") return screenMaster(r.a, "client");
  if (r.name === "book" && r.b === "confirm") return screenBookConfirm(r.a);
  if (r.name === "book" && r.b === "done") return screenBookDone();
  if (r.name === "book") return screenBook(r.a);
  if (r.name === "chats" && r.a === "calendar") return screenChatCalendar("");
  if (r.name === "chats") return screenChats("client");
  if (r.name === "chat" && r.b === "calendar") return screenChatCalendar(r.a);
  if (r.name === "chat") return screenChat(r.a, "client");
  if (r.name === "saves") return screenSaves();
  if (r.name === "profile") return screenClientProfile();
  if (r.name === "follows") return screenFollows();
  if (r.name === "visits") return screenVisits();
  if (r.name === "review") return screenReview(r.a);
  if (r.name === "compose" && r.a === "form") return screenClientForm();
  if (r.name === "compose" && r.a === "preview") return screenClientPreview();
  if (r.name === "compose") return screenClientThemes();
  if (r.name === "paywall") return screenClientThemes();
  return missing("Нет такого экрана");
}

function renderMaster(r) {
  if (r.name === "bookings") return screenMasterBookings();
  if (r.name === "booking") return screenMasterBooking(r.a);
  if (r.name === "posts") return screenMasterPosts();
  if (r.name === "post" && r.b === "comments") return screenComments(r.a, "/master/post/" + r.a);
  if (r.name === "post") return screenPost(r.a, "master");
  if (r.name === "compose") return screenMasterCompose();
  if (r.name === "slots") return screenSlots();
  if (r.name === "chats") return screenChats("master");
  if (r.name === "chat") return screenChat(r.a, "master");
  if (r.name === "profile") return screenMaster(SESSION.masterId, "master");
  if (r.name === "certs") return screenCerts(SESSION.masterId, "/master/profile");
  if (r.name === "reviews") return screenMasterReviews();
  if (r.name === "services") return screenServices();
  if (r.name === "paywall") return screenPaywall();
  if (r.name === "later") return screenLater();
  return missing("Нет такого экрана");
}

function renderScreen(r) {
  if (r.role === "client") return renderClient(r);
  if (r.role === "master") return renderMaster(r);
  return missing("Нет такого экрана");
}

function parseRoute() {
  let h = (location.hash || "").replace(/^#/, "");
  if (!h) h = homePath();
  const p = h.split("/").filter(Boolean);
  return { role: p[0] || "client", name: p[1] || "onboarding", a: p[2] || "", b: p[3] || "", raw: "/" + p.join("/") };
}

function hideTabs(r) {
  if (r.name === "chats" && r.a === "calendar") return true;
  if (["welcome", "onboarding", "chat", "book", "review", "compose", "paywall", "later"].indexOf(r.name) !== -1) return true;
  if (["comments", "certs", "repost", "why", "filters"].indexOf(r.a) !== -1) return true;
  if (["comments", "certs", "repost", "why"].indexOf(r.b) !== -1) return true;
  return false;
}

function tabOf(r) {
  if (r.role === "client") {
    if (r.name === "search" || r.name === "map" || r.name === "feed") return r.name;
    if (r.name === "chats" || r.name === "chat") return "chats";
    if (r.name === "post" || r.name === "master" || r.name === "book") return "feed";
    return "profile";
  }
  if (r.name === "bookings" || r.name === "booking" || r.name === "paywall") return "bookings";
  if (r.name === "posts" || r.name === "post" || r.name === "compose") return "posts";
  if (r.name === "slots") return "slots";
  if (r.name === "chats" || r.name === "chat") return "chats";
  return "profile";
}

function renderTabs(r) {
  const items = r.role === "master"
    ? [["bookings", "/master/bookings", "calendar", "Записи"], ["posts", "/master/posts", "feed", "Работы"], ["slots", "/master/slots", "clock", "Слоты"], ["chats", "/master/chats", "chat", "Чаты"], ["profile", "/master/profile", "user", "Профиль"]]
    : [["feed", "/client/feed", "feed", "Лента"], ["search", "/client/search", "search", "Поиск"], ["map", "/client/map", "map", "Карта"], ["chats", "/client/chats", "chat", "Чаты"], ["profile", "/client/profile", "user", "Профиль"]];
  const current = tabOf(r);
  const pending = bookings().filter((b) => b.masterId === "alina" && b.status === "pending").length;
  const reviewDot = !visitReviewed(DATA.visits.find((v) => v.id === "v-eva"));
  document.getElementById("tabbar").innerHTML = items.map((it) => {
    let dot = "";
    if (r.role === "master" && it[0] === "bookings" && pending) dot = '<i class="dot"></i>';
    if (r.role === "client" && it[0] === "profile" && reviewDot) dot = '<i class="dot"></i>';
    return '<button class="tab' + (current === it[0] ? " on" : "") + '" type="button" data-go="' + it[1] + '">' + icon(it[2]) + dot + "<span>" + it[3] + "</span></button>";
  }).join("");
}

function renderJumps(r) {
  const links = r.role === "master"
    ? [["Записи", "/master/bookings"], ["Подписка", "/master/paywall"], ["Новая работа", "/master/compose"], ["Слоты", "/master/slots"], ["Чат с Гретой", "/master/chat/t-greta"], ["Отзывы", "/master/reviews"], ["Оплаты позже", "/master/later"]]
    : [["Пол и возраст", "/client/welcome"], ["Интересы", "/client/onboarding"], ["Лента", "/client/feed"], ["Поиск", "/client/search"], ["Карта", "/client/map"], ["Календарь", "/client/chats/calendar"], ["Текст", "/client/post/p-alina-note"], ["До и после", "/client/post/p-alina-ba"], ["Профиль Алины", "/client/master/alina"], ["Запись", "/client/book/alina"], ["Окна скрыты", "/client/book/kasparas"], ["Чат", "/client/chat/t-alina"], ["Отзыв", "/client/review/v-eva"], ["Запрос", "/client/compose"]];
  const el = document.getElementById("jumps");
  if (el) el.innerHTML = links.map((l) => '<a href="#' + l[1] + '">' + l[0] + "</a>").join("");
}

function hint(r) {
  const full = r.role + "/" + r.name + (r.b ? "/" + r.b : "");
  return HINTS[full] || HINTS[r.role + "/" + r.name] || "MurrHub · Вильнюс";
}

function noteVisit(id) {
  if (!id || seenVisit.has(id)) return;
  seenVisit.add(id);
  S.profileVisits[id] = (S.profileVisits[id] || 0) + 1;
  save();
}

function applyTheme() {
  const dark = S.theme === "dark";
  document.documentElement.dataset.theme = dark ? "dark" : "light";
  if (window.MurrChocolate) MurrChocolate.apply(S.chocolate, dark ? "dark" : "light");
  const btn = document.getElementById("theme");
  if (btn) {
    btn.textContent = dark ? "Светлая" : "Тёмная";
    btn.setAttribute("aria-pressed", dark ? "true" : "false");
  }
  const slider = document.getElementById("chocolate");
  if (slider && document.activeElement !== slider) slider.value = String(S.chocolate);
}

let splashTimer = 0;
function showSplash() {
  const el = document.getElementById("splash");
  if (!el) return;
  clearTimeout(splashTimer);
  el.classList.remove("play");
  el.hidden = false;
}

function playSplash() {
  const el = document.getElementById("splash");
  if (!el || el.hidden || el.classList.contains("play")) return;
  el.classList.add("play");
  clearTimeout(splashTimer);
  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  splashTimer = setTimeout(finishSplash, reduce ? 400 : 1280);
}

function finishSplash() {
  const el = document.getElementById("splash");
  if (!el || el.hidden) return;
  el.hidden = true;
  el.classList.remove("play");
  const phone = document.getElementById("phone");
  if (!phone) return;
  phone.classList.remove("arriving");
  void phone.offsetWidth;
  phone.classList.add("arriving");
}

function restartStory() {
  S.onboarded = false;
  S.feedTipSeen = false;
  S.interests = [];
  S.gender = "";
  S.age = "";
  S.ui.aboutStep = "gender";
  save();
  if (location.hash !== "#/client/welcome") location.hash = "/client/welcome";
  else render();
  showSplash();
}

function toast(msg) {
  const el = document.getElementById("toast");
  if (!el) return;
  el.hidden = false;
  el.textContent = msg;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { el.hidden = true; }, 2400);
}

function go(path) {
  const next = "#" + path;
  if (location.hash === next) render();
  else location.hash = path;
}

function render() {
  const r = parseRoute();
  const routeChanged = location.hash !== lastHash;
  lastHash = location.hash;
  if (routeChanged && r.role === "client" && r.name === "master" && r.a) noteVisit(r.a);
  const phone = document.getElementById("phone");
  phone.classList.toggle("no-tabs", hideTabs(r) || r.role === "selftest");
  document.getElementById("role-client").classList.toggle("on", r.role !== "master");
  document.getElementById("role-master").classList.toggle("on", r.role === "master");
  const where = document.getElementById("where");
  if (where) where.textContent = hint(r);
  renderJumps(r);
  renderTabs(r);
  let html = "";
  try {
    html = renderScreen(r);
  } catch (err) {
    console.error(err);
    html = '<div class="pad"><p class="display">Экран не собрался</p><p class="muted">' + esc(err.message) + "</p></div>";
  }
  const screen = document.getElementById("screen");
  phone.querySelectorAll(".teach").forEach((n) => n.remove());
  screen.innerHTML = html;
  if (r.role === "client" && r.name === "feed" && !r.a && !S.feedTipSeen) phone.insertAdjacentHTML("beforeend", feedTeach());
  if (routeChanged) screen.scrollTop = 0;
  if (scrollBottom) {
    screen.scrollTop = screen.scrollHeight;
    scrollBottom = false;
  }
  const thread = screen.querySelector(".thread");
  if (thread) thread.scrollTop = thread.scrollHeight;
}

function assignField(path, value) {
  const bits = path.split(".");
  if (bits.length === 2) S.ui[bits[0]][bits[1]] = value;
  else S.ui[path] = value;
}

function onAct(el) {
  const act = el.dataset.act;
  const id = el.dataset.id;
  if (act === "gender") {
    S.gender = id;
    S.ui.aboutStep = "age";
    save(); render(); return;
  }
  if (act === "age") {
    if (!AGES[id]) return;
    S.age = id;
    save(); go("/client/onboarding"); return;
  }
  if (act === "about-back") {
    S.ui.aboutStep = "gender";
    save();
    if (parseRoute().name !== "welcome") go("/client/welcome");
    else render();
    return;
  }
  if (act === "interest") {
    S.interests = S.interests.indexOf(id) === -1 ? S.interests.concat(id) : S.interests.filter((x) => x !== id);
    save(); render(); return;
  }
  if (act === "onboard") {
    if (!S.interests.length) return toast("Выбери хотя бы одно");
    S.onboarded = true; save(); go("/client/feed"); return;
  }
  if (act === "like" || act === "save") {
    const bag = act === "like" ? S.likes : S.saves;
    bag[id] = !bag[id];
    if (!bag[id]) delete bag[id];
    save();
    const p = getPost(id);
    document.querySelectorAll('[data-act="' + act + '"][data-id="' + id + '"]').forEach((btn) => {
      btn.classList.toggle("on", !!bag[id]);
      const c = btn.querySelector("[data-count]");
      if (c && p) c.textContent = String(act === "like" ? likeCount(p) : saveCount(p));
    });
    return;
  }
  if (act === "follow") {
    S.follows[id] = !S.follows[id];
    if (!S.follows[id]) delete S.follows[id];
    save(); render(); return;
  }
  if (act === "filt") {
    const k = el.dataset.k;
    const v = el.dataset.v;
    if (k === "slots" || k === "discount" || k === "verified") S.ui.filters[k] = !S.ui.filters[k];
    else if (k === "max") S.ui.filters.max = Number(v);
    else S.ui.filters[k] = S.ui.filters[k] === v ? "" : v;
    save();
    const box = document.getElementById("results");
    if (box && parseRoute().name === "search" && parseRoute().a !== "filters") {
      box.innerHTML = searchBody();
      document.querySelectorAll(".chips .chip").forEach((chip) => {
        if (chip.dataset.k === "cat") chip.classList.toggle("on", chip.dataset.v === S.ui.filters.cat);
      });
    } else render();
    return;
  }
  if (act === "clear-filt") {
    S.ui.filters = { cat: "", district: "", max: 0, vibe: "", slots: false, discount: false, verified: false };
    save(); render(); return;
  }
  if (act === "setq") { S.ui.q = el.dataset.q || ""; save(); render(); return; }
  if (act === "mapcat") { S.ui.mapCat = S.ui.mapCat === id ? "" : id; save(); render(); return; }
  if (act === "verify") {
    const m = master(id);
    toast(m && m.verified ? "Личность и гигиена проверены." : "Документы на проверке. Галочки пока нет.");
    return;
  }
  if (act === "book") {
    const masterId = el.dataset.master;
    const serviceId = el.dataset.service || "";
    if (S.ui.draft.masterId !== masterId) S.ui.draft = { masterId: masterId, serviceId: serviceId, slotId: "", note: "" };
    else if (serviceId) S.ui.draft.serviceId = serviceId;
    save(); go("/client/book/" + masterId); return;
  }
  if (act === "pick-service") {
    S.ui.draft.serviceId = id;
    S.ui.draft.masterId = el.dataset.master;
    save(); render(); return;
  }
  if (act === "pick-slot") {
    if (el.disabled) return;
    S.ui.draft.slotId = id;
    S.ui.draft.masterId = parseRoute().a;
    save();
    document.querySelectorAll(".slotpick").forEach((b) => b.classList.toggle("on", b.dataset.id === id));
    const cta = document.getElementById("book-next");
    if (cta) cta.disabled = !(S.ui.draft.slotId && S.ui.draft.serviceId);
    return;
  }
  if (act === "book-next") {
    if (!S.ui.draft.serviceId || !S.ui.draft.slotId) return toast("Выбери услугу и окно");
    go("/client/book/" + S.ui.draft.masterId + "/confirm"); return;
  }
  if (act === "book-send") {
    const b = placeBooking();
    if (!b) return toast("Это окно уже занято");
    go("/client/book/" + b.masterId + "/done"); return;
  }
  if (act === "write-post") {
    const p = getPost(id);
    if (!p || !p.masterId) return;
    const t = ensureThread(p.masterId);
    S.pending = { threadId: t.id, kind: "post", id: p.id };
    save(); go("/client/chat/" + t.id); return;
  }
  if (act === "write-service") {
    const t = ensureThread(el.dataset.master);
    S.pending = { threadId: t.id, kind: "service", id: el.dataset.service || (servicesOf(el.dataset.master)[0] || {}).id };
    save(); go("/client/chat/" + t.id); return;
  }
  if (act === "clear-pending") { S.pending = null; save(); render(); return; }
  if (act === "send") {
    const r = parseRoute();
    const t = threadById(r.a);
    if (!t) return;
    const text = String(S.ui.chatText || "").trim();
    const mine = r.role === "master" ? "alina" : "maria";
    let sent = false;
    if (S.pending && S.pending.threadId === t.id) {
      if (S.pending.kind === "post") pushMsg(t.id, { from: mine, type: "post", postId: S.pending.id });
      if (S.pending.kind === "service" && S.pending.id) pushMsg(t.id, { from: mine, type: "service", serviceId: S.pending.id });
      S.pending = null;
      sent = true;
    }
    if (text) { pushMsg(t.id, { from: mine, type: "text", text: text }); S.ui.chatText = ""; sent = true; }
    if (!sent) return;
    save(); render(); return;
  }
  if (act === "voice") {
    const r = parseRoute();
    const t = threadById(r.a);
    if (!t) return;
    const mine = r.role === "master" ? "alina" : "maria";
    pushMsg(t.id, { from: mine, type: "voice", sec: 4, text: "Голосовое из прототипа." });
    save(); render(); return;
  }
  if (act === "play") {
    el.classList.toggle("is-playing");
    clearTimeout(el._timer);
    if (el.classList.contains("is-playing")) {
      el._timer = setTimeout(() => el.classList.remove("is-playing"), (Number(el.dataset.sec) || 4) * 1000);
    }
    return;
  }
  if (act === "comment") {
    const postId = id || (parseRoute().a);
    const text = String(S.ui.comment || "").trim();
    if (!text) return toast("Напиши комментарий");
    const r = parseRoute();
    const author = r.role === "master" ? "alina" : "maria";
    if (!S.extraComments[postId]) S.extraComments[postId] = [];
    S.extraComments[postId].push({ id: uid("c"), author: author, text: text, time: "сейчас" });
    S.ui.comment = "";
    save(); scrollBottom = true; render(); return;
  }
  if (act === "repost") {
    if (S.reposts.indexOf(id) === -1) S.reposts.push(id);
    save(); toast("В твоём профиле"); go("/client/profile"); return;
  }
  if (act === "repost-chat") {
    const p = getPost(id);
    if (!p || !p.masterId) return;
    const t = ensureThread(p.masterId);
    S.pending = { threadId: t.id, kind: "post", id: p.id };
    save(); go("/client/chat/" + t.id); return;
  }
  if (act === "copy") {
    const url = location.href;
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(url).catch(() => {});
    toast("Ссылка скопирована"); return;
  }
  if (act === "star") { S.ui.review.stars = Number(el.dataset.n); save(); render(); return; }
  if (act === "review-photo") { S.ui.review.photo = !S.ui.review.photo; save(); render(); return; }
  if (act === "review-send") {
    const v = DATA.visits.find((x) => x.id === id);
    if (!v) return;
    if (!S.ui.review.stars) return toast("Поставь оценку");
    S.extraReviews.push({
      id: uid("r"),
      masterId: v.masterId,
      author: "maria",
      stars: S.ui.review.stars,
      text: String(S.ui.review.text || "").trim() || "Без текста.",
      service: service(v.serviceId).name,
      date: "6 ноя",
    });
    S.reviewed[v.id] = true;
    S.ui.review = { stars: 0, text: "", photo: false };
    save(); toast("Отзыв на профиле"); go("/client/master/" + v.masterId); return;
  }
  if (act === "pick-theme") { S.ui.composeTheme = id; save(); go("/client/compose/form"); return; }
  if (act === "set-cat") { S.ui.clientForm.category = id; save(); render(); return; }
  if (act === "set-dist") { S.ui.clientForm.district = id; save(); render(); return; }
  if (act === "set-visit") { S.ui.clientForm.masterId = id; save(); render(); return; }
  if (act === "photo") {
    const src = el.dataset.src;
    if (el.dataset.bag === "client") S.ui.clientForm.photo = S.ui.clientForm.photo === src ? "" : src;
    else {
      const arr = S.ui.masterForm.photos;
      const i = arr.indexOf(src);
      if (i >= 0) arr.splice(i, 1);
      else if (arr.length < 3) arr.push(src);
    }
    save(); render(); return;
  }
  if (act === "cal-shift") {
    const bits = String(S.ui.calMonth || "2026-11").split("-");
    const d = new Date(Date.UTC(Number(bits[0]), Number(bits[1]) - 1 + (id === "next" ? 1 : -1), 1));
    S.ui.calMonth = d.toISOString().slice(0, 7);
    S.ui.calDay = "";
    save(); render(); return;
  }
  if (act === "cal-day") {
    S.ui.calDay = S.ui.calDay === id ? "" : id;
    save(); render(); return;
  }
  if (act === "feed-stay") { S.feedTipSeen = true; save(); render(); return; }
  if (act === "feed-search") { S.feedTipSeen = true; save(); go("/client/search"); return; }
  if (act === "client-gate") {
    S.afterClientPaywall = parseRoute().raw || "/client/compose";
    save(); go("/client/paywall"); return;
  }
  if (act === "publish-client") {
    const post = publishClient();
    if (!post) return toast("Нужны ремесло и текст");
    toast("Запрос под работами"); go("/client/feed"); return;
  }
  if (act === "set-mservice") { S.ui.masterForm.serviceId = id; save(); render(); return; }
  if (act === "mvibe") {
    const arr = S.ui.masterForm.vibes;
    const i = arr.indexOf(id);
    if (i >= 0) arr.splice(i, 1); else arr.push(id);
    save(); render(); return;
  }
  if (act === "compare-toggle") { S.ui.masterForm.compare = !S.ui.masterForm.compare; save(); render(); return; }
  if (act === "publish-master") {
    if (!S.subscribed) { S.afterPaywall = "/master/compose"; save(); go("/master/paywall"); return; }
    const post = publishMaster();
    if (!post) return toast("Нужны название и текст или фото");
    toast("Работа в ленте"); go("/master/posts"); return;
  }
  if (act === "plan") { S.ui.plan = id; save(); render(); return; }
  if (act === "subscribe") {
    S.subscribed = true;
    const next = S.afterPaywall || "/master/bookings";
    S.afterPaywall = "";
    save(); toast("Доступ открыт. Оплаты нет."); go(next); return;
  }
  if (act === "unsubscribe") { S.subscribed = false; save(); toast("Доступ снова закрыт"); render(); return; }
  if (act === "subscribe-client") {
    S.clientSub = true;
    const next = S.afterClientPaywall || "/client/compose";
    S.afterClientPaywall = "";
    save(); toast("Доступ открыт. Оплаты нет."); go(next); return;
  }
  if (act === "unsubscribe-client") { S.clientSub = false; save(); toast("Доступ к запросам снова закрыт"); render(); return; }
  if (act === "confirm-booking") {
    const res = confirmBooking(id);
    if (res === "paywall") { toast("Нужна подписка"); go("/master/paywall"); return; }
    toast("Запись подтверждена"); render(); return;
  }
  if (act === "decline-booking") { S.bookingStatus[id] = "declined"; save(); render(); return; }
  if (act === "slot") {
    if (S.slotsOff[id]) delete S.slotsOff[id];
    else S.slotsOff[id] = true;
    save(); render(); return;
  }
  if (act === "setday") { S.ui.newSlotDay = id; save(); render(); return; }
  if (act === "settime") { S.ui.newSlotTime = id; save(); render(); return; }
  if (act === "add-slot") {
    const iso = S.ui.newSlotDay + "T" + S.ui.newSlotTime;
    S.extraSlots.push({ id: uid("sl"), masterId: "alina", iso: iso, open: true });
    save(); toast("Окно добавлено"); render(); return;
  }
  if (act === "edit-line") { S.ui.editingLine = true; S.ui.taglineDraft = lineOf(master("alina")); save(); render(); return; }
  if (act === "save-line") {
    S.tagline = String(S.ui.taglineDraft || "").trim();
    S.ui.editingLine = false;
    save(); render(); return;
  }
}

function bind() {
  const phone = document.getElementById("phone");
  phone.addEventListener("click", (e) => {
    const back = e.target.closest("[data-back]");
    if (back) { go(back.getAttribute("data-back")); return; }
    const goEl = e.target.closest("[data-go]");
    if (goEl) { go(goEl.getAttribute("data-go")); return; }
    const act = e.target.closest("[data-act]");
    if (act) onAct(act);
  });
  phone.addEventListener("input", (e) => {
    const t = e.target;
    if (t.classList.contains("cmp")) {
      const box = t.closest(".compare");
      if (box) box.style.setProperty("--pos", t.value + "%");
      return;
    }
    if (t.dataset.price != null) {
      S.prices[t.dataset.price] = t.value;
      save();
      return;
    }
    if (t.id === "q") {
      S.ui.q = t.value;
      const box = document.getElementById("results");
      if (box) box.innerHTML = searchBody();
      return;
    }
    if (t.dataset.field) assignField(t.dataset.field, t.value);
  });
  phone.addEventListener("change", (e) => {
    const t = e.target;
    if (t.dataset.price != null) save();
    if (t.dataset.field) save();
  });
  phone.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" || e.shiftKey) return;
    if (e.target.id === "chatbox") { e.preventDefault(); onAct({ dataset: { act: "send", id: "" } }); }
    if (e.target.id === "commentbox") { e.preventDefault(); onAct({ dataset: { act: "comment", id: e.target.dataset.post } }); }
  });
  phone.addEventListener("error", (e) => {
    if (e.target && e.target.tagName === "IMG") e.target.style.opacity = "0";
  }, true);
  document.getElementById("theme").addEventListener("click", () => {
    S.theme = S.theme === "dark" ? "light" : "dark";
    applyTheme(); save();
  });
  const choc = document.getElementById("chocolate");
  if (choc) choc.addEventListener("input", () => {
    S.chocolate = Math.max(0, Math.min(100, Math.round(Number(choc.value) || 0)));
    applyTheme();
    save();
  });
  const restart = document.getElementById("restart");
  if (restart) restart.addEventListener("click", restartStory);
  const paw = document.getElementById("splash-paw");
  if (paw) paw.addEventListener("click", playSplash);
  document.querySelectorAll("[data-role]").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.dataset.role === "master") go("/master/bookings");
      else go(homePath());
    });
  });
  document.getElementById("reset").addEventListener("click", () => {
    localStorage.removeItem(KEY);
    localStorage.setItem("murrhub-theme", "light");
    localStorage.setItem("murrhub-chocolate", "78");
    S = defaultState();
    applyTheme();
    if (location.hash === "#/client/welcome") render();
    else location.hash = "/client/welcome";
  });
}

function selfTest() {
  const lines = [];
  const ok = (cond, msg) => lines.push((cond ? "ok   " : "FAIL ") + msg);
  try {
    S.interests = ["nails", "hair"];
    const ranked = rankedPosts();
    ok(ranked.length > 8, "ranked " + ranked.length);
    ok(ranked[0].category === "nails" || ranked[0].category === "hair", "top is interest " + ranked[0].id + " " + ranked[0].category);
    ok(visibleSlots("kasparas").length === 0, "kasparas hidden slots");
    ok(visibleSlots("alina").length > 0, "alina visible slots");
    const work = getPost("p-alina-work");
    ok(work.price == null && !work.serviceId, "optional price and service");
    ok(master(work.masterId).city === "Вильнюс", "city on profile");
    const ba = getPost("p-alina-ba");
    ok(!!(ba.compare && ba.before && ba.after), "before after pair");
    ok(fmtWhen("2026-11-07T11:30").indexOf("сб") === 0, "saturday label " + fmtWhen("2026-11-07T11:30"));
    ok(!!slotDiscount("alina", "2026-11-09T10:00"), "monday morning discount");
    ok(!slotDiscount("alina", "2026-11-07T11:30"), "saturday no morning discount");
    S.ui.draft = { masterId: "alina", serviceId: "sv-alina-gel", slotId: "sl-sat-1130", note: "тест" };
    const res = placeBooking();
    ok(!!res && res.status === "pending", "booking created");
    S.subscribed = false;
    ok(confirmBooking("b-greta") === "paywall", "confirm blocked");
    S.subscribed = true;
    ok(confirmBooking("b-greta") === "ok", "confirm after sub");
    S.clientSub = false;
    S.ui.composeTheme = "seek";
    S.ui.clientForm = { photo: "media/nails-hands.jpg", category: "tattoo", text: "веточка", budget: "100", district: "Ужупис", when: "в этом месяце", masterId: "" };
    const photoPost = publishClient();
    ok(!!photoPost && photoPost !== "paywall" && photoPost.images.length === 1, "client photo posts without a gate");
    S.ui.clientForm.photo = "";
    S.ui.clientForm.text = "веточка текстом";
    const textPost = publishClient();
    ok(!!textPost && !textPost.images.length && textPost.category === "tattoo", "text post without photo");
    S.ui.clientForm.photo = "media/nails-hands.jpg";
    S.ui.clientForm.text = "веточка с фото";
    const cp = publishClient();
    ok(!!cp && cp.theme === "seek", "themed client post");
    ok(clientPostsAll().every((p) => p.theme), "themes only");
    const msgs = messages(threadById("t-alina"));
    ok(msgs.some((m) => m.type === "voice"), "voice message");
    ok(msgs.some((m) => m.type === "service"), "service card");
    ok(msgs.some((m) => m.type === "post"), "attached post");
    const html = [
      screenOnboarding(), screenSearch(), screenMap(""), screenMap("alina"), screenFeed(), screenWhy("p-alina-ba"),
      screenPost("p-alina-ba", "client"), screenPost("p-alina-work", "client"), screenMaster("alina", "client"),
      screenMaster("kasparas", "client"), screenCerts("alina", "/x"), screenBook("alina"), screenBook("kasparas"),
      screenChat("t-alina", "client"), screenReview("v-eva"), screenClientThemes(), screenMasterCompose(),
      screenPaywall(), screenLater(), screenMasterBookings(), screenSlots(),
    ].join("\n");
    ok(html.indexOf("undefined") === -1, "no undefined text");
    ok(html.indexOf("Сертификаты") !== -1, "certs");
    ok(html.indexOf("не в этой версии") !== -1, "later copy");
    ok(html.indexOf("номер карты") === -1 && html.indexOf("CVC") === -1, "no card form");
    ok(screenClientThemes().indexOf("2 €") === -1 && screenClientForm().indexOf("2 €") === -1 && screenClientProfile().indexOf("2 €") === -1, "no client photo toll");
    ok(screenFeed().indexOf("price-pill") === -1, "feed hides prices");
    ok(screenFeed().indexOf("avatar pub") !== -1, "feed shows publisher avatar");
    const feedHtml = screenFeed();
    const shotAt = feedHtml.indexOf('<button class="shot');
    const textAt = feedHtml.indexOf('<button class="textshell');
    const footAt = feedHtml.indexOf("cardfoot");
    ok(feedHtml.indexOf("feedflow flush") !== -1, "feed tiles sit flush");
    ok(footAt !== -1 && feedHtml.indexOf("likecount") !== -1 && feedHtml.indexOf('class="heart') === -1, "feed mark and count, no like button");
    ok(feedHtml.slice(shotAt, feedHtml.indexOf("</button>", shotAt)).indexOf("likecount") === -1, "like count sits off the photo");
    ok(textAt === -1 || feedHtml.slice(textAt, feedHtml.indexOf("</button>", textAt)).indexOf("likecount") === -1, "like count sits off the text");
    ok(feedHtml.indexOf('class="likecount"') > footAt, "like count is in the card foot");
    ok(screenChats("client").indexOf("Календарь") !== -1 && screenChats("master").indexOf("Календарь") === -1, "calendar on the client chat list");
    ok(screenChat("t-alina", "client").indexOf("Календарь") !== -1, "chat calendar button");
    S.ui.calMonth = "2026-11";
    S.ui.calDay = "";
    const calHtml = screenChatCalendar("t-alina");
    ok(calHtml.indexOf("16:30") !== -1 && calHtml.indexOf("10:00") !== -1, "sample bookings on calendar");
    ok(screenPost("p-alina-ba", "client").indexOf('data-act="like"') !== -1, "post keeps like");
    ok(screenPost("p-alina-ba", "client").indexOf("avatar pub") !== -1, "post shows publisher avatar");
    ok(screenPost("p-alina-ba", "client").indexOf("ноя") === -1, "post hides the date");
    ok(html.indexOf("Посты из жизни") !== -1, "life posts called out as absent");
    ok(screenPost("p-kas-back", "client").indexOf("Цены на этой работе нет") !== -1 || screenPost("p-alina-work", "client").indexOf("нет цены") !== -1, "missing price copy");
    S.ui.aboutStep = "gender";
    ok(screenWelcome().indexOf("Женщина") !== -1 && screenWelcome().indexOf("<input") === -1, "gender is a choice");
    ok(screenOnboarding().indexOf("<img") === -1 && screenOnboarding().indexOf("craft") !== -1, "interest icons");
    ok(screenOnboarding().indexOf("Пирсинг") !== -1, "piercing interest");
    ok(screenFeed().indexOf("feedflow") !== -1 && screenFeed().indexOf("textinner") !== -1 && screenFeed().indexOf("...") !== -1, "text tile in feed");
    const opened = screenPost("p-alina-ba", "client");
    ok(opened.indexOf("writebig") !== -1 && opened.indexOf("Записаться") === -1 && opened.indexOf("Написать об этом") === -1, "only the round arrow writes");
    ok(screenPost("p-alina-note", "client").indexOf("textread") !== -1, "opened text");
    ok(screenClientForm().indexOf("Ремесло") !== -1, "composer asks category");
  } catch (err) {
    lines.push("FAIL exception " + err.message);
  }
  return lines.join("\n");
}

function boot() {
  S = loadState();
  const storedChoc = localStorage.getItem("murrhub-chocolate");
  if (storedChoc != null && storedChoc !== "" && Number.isFinite(Number(storedChoc))) {
    S.chocolate = Math.max(0, Math.min(100, Math.round(Number(storedChoc))));
  } else if (typeof S.chocolate !== "number" || !Number.isFinite(S.chocolate)) {
    S.chocolate = 78;
  }
  if (/[?&]theme=dark/.test(location.search || "")) S.theme = "dark";
  if (/[?&]theme=light/.test(location.search || "")) S.theme = "light";
  applyTheme();
  bind();
  window.addEventListener("hashchange", render);
  if (!location.hash) go(homePath());
  else render();
}

boot();
