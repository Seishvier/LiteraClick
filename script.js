/* =====================================================
   LiteraKlik - Logika Utama Website
   ===================================================== */

/* ---------- DATA ARTIKEL ---------- */
const ARTICLES = [
  {
    id: 1,
    emoji: "💼",
    category: "Karier",
    title: "5 Peluang Karier Digital untuk Lulusan SMK",
    readTime: 5,
    excerpt: "Dunia digital membuka banyak pintu karier untuk lulusan SMK. Yuk, kenali peluangnya!",
    content: `
      <p>Lulusan SMK sering dianggap hanya cocok untuk pekerjaan teknis. Padahal, dunia digital saat ini membuka banyak peluang karier yang menjanjikan bagi lulusan SMK. Selama kamu mau terus belajar dan beradaptasi, pintu karier akan semakin terbuka lebar.</p>
      <h3>1. Web Developer</h3>
      <p>Web developer adalah orang yang membuat dan mengembangkan website. Banyak perusahaan, UMKM, hingga startup membutuhkan jasa ini. Modal utamanya adalah kemampuan HTML, CSS, JavaScript, dan keinginan belajar.</p>
      <h3>2. Desainer Grafis</h3>
      <p>Desainer grafis membuat visual menarik untuk konten digital, logo, poster, hingga tampilan aplikasi. Software seperti Canva, Figma, dan Adobe Creative Suite banyak digunakan di industri ini.</p>
      <h3>3. Content Creator</h3>
      <p>Membuat konten di YouTube, TikTok, atau Instagram juga menjadi karier yang menjanjikan. Butuh konsistensi, kreativitas, dan kemampuan memahami audiens.</p>
      <h3>4. Digital Marketing</h3>
      <p>Digital marketer bertugas memasarkan produk secara online lewat media sosial, iklan digital, dan email. Keterampilan menulis, analisis data, dan komunikasi sangat penting di sini.</p>
      <h3>5. Teknisi Jaringan dan IT Support</h3>
      <p>Bidang IT support dan jaringan masih sangat dibutuhkan perusahaan. Lulusan SMK jurusan TKJ memiliki peluang besar di sini.</p>
      <p><strong>Kuncinya:</strong> terus belajar, bangun portofolio, dan jangan takut mulai dari proyek kecil.</p>
    `,
    quiz: [
      { q: "Apa salah satu karier digital yang cocok untuk lulusan SMK?", options: ["Dokter Spesialis", "Web Developer", "Pilot", "Arkeolog"], answer: 1 },
      { q: "Mengapa lulusan SMK punya peluang besar di dunia digital?", options: ["Karena SMK lebih mahal", "Karena SMK fokus pada keterampilan praktis", "Karena SMK tidak perlu belajar", "Karena SMK hanya untuk pekerjaan kantoran"], answer: 1 },
      { q: "Keterampilan apa yang penting untuk karier digital?", options: ["Hanya hafal rumus", "Kemampuan belajar terus-menerus", "Menghindari teknologi", "Hanya mengandalkan nilai rapor"], answer: 1 }
    ]
  },
  {
    id: 2,
    emoji: "💰",
    category: "Finansial",
    title: "Cara Bijak Mengatur Uang Saku untuk Pelajar",
    readTime: 4,
    excerpt: "Uang saku sering habis sebelum akhir bulan? Yuk, belajar mengaturnya dengan bijak.",
    content: `
      <p>Banyak pelajar merasa uang sakunya cepat habis padahal belum pertengahan bulan. Masalahnya bukan pada jumlah uang, tapi pada cara mengaturnya. Yuk, belajar mengelola uang saku dengan bijak!</p>
      <h3>1. Catat Pengeluaran</h3>
      <p>Langkah pertama adalah mencatat semua pengeluaran. Bisa pakai buku kecil atau aplikasi gratis di HP. Setelah seminggu, kamu akan sadar ke mana uangmu pergi.</p>
      <h3>2. Terapkan Aturan 50-30-20</h3>
      <p>Alokasikan uangmu seperti ini:</p>
      <ul>
        <li><strong>50%</strong> untuk kebutuhan (makan, transportasi, alat tulis)</li>
        <li><strong>30%</strong> untuk keinginan (jajan, game, langganan)</li>
        <li><strong>20%</strong> untuk tabungan dan dana darurat</li>
      </ul>
      <h3>3. Sisihkan Tabungan di Awal</h3>
      <p>Begitu menerima uang saku, langsung sisihkan 20% untuk tabungan. Jangan menunggu sisa — biasanya tidak akan pernah ada sisa!</p>
      <h3>4. Buat Dana Darurat</h3>
      <p>Dana darurat adalah uang yang disimpan untuk kebutuhan mendadak, seperti buku hilang, bensin habis, atau keperluan tak terduga. Idealnya 3-6 kali pengeluaran bulanan, tapi untuk pelajar cukup mulai dari Rp50.000.</p>
      <h3>5. Bedakan Kebutuhan dan Keinginan</h3>
      <p>Sebelum membeli sesuatu, tanya diri sendiri: "Apakah ini benar-benar butuh, atau hanya ingin?" Tunggu 24 jam sebelum membeli barang yang tidak direncanakan.</p>
      <p><strong>Ingat:</strong> kebiasaan mengatur uang sejak muda akan sangat berguna saat kamu dewasa nanti.</p>
    `,
    quiz: [
      { q: "Berapa persen dari uang saku yang sebaiknya ditabung?", options: ["0%", "Minimal 10-20%", "100%", "Tidak perlu menabung"], answer: 1 },
      { q: "Apa itu 'dana darurat'?", options: ["Uang untuk beli gadget baru", "Uang yang disisihkan untuk kebutuhan mendadak", "Uang untuk jalan-jalan", "Uang untuk jajan"], answer: 1 },
      { q: "Cara terbaik mencatat pengeluaran adalah...", options: ["Menghafal semua", "Mencatat di buku atau aplikasi", "Tidak perlu mencatat", "Hanya catat pengeluaran besar"], answer: 1 }
    ]
  },
  {
    id: 3,
    emoji: "📖",
    category: "Belajar",
    title: "Tips Belajar Efektif Tanpa Begadang",
    readTime: 5,
    excerpt: "Belajar bukan soal berapa lama, tapi bagaimana caranya. Simak tips belajar efektif berikut.",
    content: `
      <p>Banyak pelajar mengira belajar lama dan begadang adalah tanda rajin. Padahal, belajar efektif lebih penting daripada belajar lama. Yuk, simak tips berikut!</p>
      <h3>1. Gunakan Teknik Pomodoro</h3>
      <p>Belajar 25 menit, lalu istirahat 5 menit. Setelah 4 sesi, istirahat lebih panjang (15-30 menit). Teknik ini menjaga fokus dan mencegah kelelahan.</p>
      <h3>2. Active Recall</h3>
      <p>Setelah membaca, coba tutup buku dan jelaskan ulang dengan bahasamu sendiri. Ini jauh lebih efektif daripada hanya membaca berulang kali.</p>
      <h3>3. Spaced Repetition</h3>
      <p>Ulangi materi secara berkala: hari ini, besok, minggu depan. Otak lebih mudah mengingat materi yang diulang secara berkala dibanding yang dipelajari sekaligus.</p>
      <h3>4. Tidur yang Cukup</h3>
      <p>Remaja butuh 8-10 jam tidur. Saat tidur, otak memproses dan menyimpan memori dari materi yang sudah dipelajari. Begadang justru membuat otak kesulitan mengingat!</p>
      <h3>5. Ciptakan Lingkungan Belajar yang Nyaman</h3>
      <p>Cari tempat yang terang, tenang, dan rapi. Jauhkan HP atau matikan notifikasi saat belajar agar fokus tidak terpecah.</p>
      <h3>6. Aktif Bertanya</h3>
      <p>Jangan malu bertanya saat tidak paham. Bertanya kepada guru, teman, atau mencari referensi tambahan akan mempercepat pemahaman.</p>
      <p><strong>Kesimpulan:</strong> belajar efektif = fokus + istirahat cukup + tidur cukup. Kualitas lebih penting dari kuantitas!</p>
    `,
    quiz: [
      { q: "Berapa lama waktu belajar ideal sebelum istirahat menurut teknik Pomodoro?", options: ["4 jam nonstop", "25-50 menit dengan istirahat 5-10 menit", "5 menit saja", "Seharian"], answer: 1 },
      { q: "Metode belajar yang lebih efektif adalah...", options: ["Membaca berulang-ulang", "Active recall dan spaced repetition", "Begadang setiap malam", "Belajar hanya saat ujian"], answer: 1 },
      { q: "Kenapa begadang tidak baik untuk belajar?", options: ["Membuat pintar", "Mengganggu konsentrasi dan memori", "Membuat cepat kaya", "Tidak ada efeknya"], answer: 1 }
    ]
  },
  {
    id: 4,
    emoji: "🧘",
    category: "Mental Health",
    title: "Mengelola Stres Saat Ujian",
    readTime: 4,
    excerpt: "Stres itu normal, tapi jangan sampai mengganggu. Ini cara mengelolanya dengan sehat.",
    content: `
      <p>Stres menjelang ujian adalah hal yang normal dialami siapa saja. Namun, jika tidak dikelola dengan baik, stres bisa mengganggu kesehatan dan hasil belajar. Yuk, pelajari cara mengelolanya!</p>
      <h3>1. Kenali Tanda Stres</h3>
      <p>Tanda-tanda stres berlebihan: sulit tidur, jantung berdebar, mudah marah, nafsu makan berubah, atau sulit fokus. Jika kamu mengalaminya, jangan diabaikan.</p>
      <h3>2. Teknik Pernapasan</h3>
      <p>Coba teknik pernapasan 4-7-8: tarik napas 4 detik, tahan 7 detik, buang 8 detik. Ulangi 3-4 kali. Ini membantu menenangkan sistem saraf.</p>
      <h3>3. Olahraga Ringan</h3>
      <p>Jalan kaki 15 menit, senam, atau bersepeda bisa mengurangi hormon stres. Olahraga juga membantu tidur lebih nyenyak.</p>
      <h3>4. Bicarakan dengan Orang Terpercaya</h3>
      <p>Ceritakan perasaanmu ke orang tua, guru, atau sahabat. Berbagi cerita bisa membuat beban terasa lebih ringan.</p>
      <h3>5. Persiapkan Diri Sebaik Mungkin</h3>
      <p>Stres sering datang karena rasa tidak siap. Belajar rutin dan membuat jadwal belajar jauh lebih efektif daripada belajar semalam sebelum ujian.</p>
      <h3>6. Jangan Bandingkan Dirimu</h3>
      <p>Setiap orang punya kecepatan belajar masing-masing. Fokus pada prosesmu sendiri, bukan pada nilai teman.</p>
      <p><strong>Ingat:</strong> kesehatan mental sama pentingnya dengan nilai. Jika kamu merasa sangat kewalahan, jangan ragu mencari bantuan profesional.</p>
    `,
    quiz: [
      { q: "Apa yang bisa dilakukan saat merasa stres?", options: ["Menghindari semua masalah", "Teknik pernapasan dalam", "Begadang semalaman", "Marah-marah"], answer: 1 },
      { q: "Berapa jam tidur ideal untuk remaja?", options: ["3-4 jam", "8-10 jam", "12 jam", "Tidak perlu tidur"], answer: 1 },
      { q: "Salah satu tanda stres berlebihan adalah...", options: ["Merasa tenang", "Sulit tidur dan cemas berlebihan", "Semangat belajar tinggi", "Nafsu makan normal"], answer: 1 }
    ]
  },
  {
    id: 5,
    emoji: "🤖",
    category: "Teknologi",
    title: "Kenali AI dan Cara Kerjanya di Sekitar Kita",
    readTime: 5,
    excerpt: "AI sudah ada di sekitar kita, dari rekomendasi YouTube sampai asisten digital. Yuk kenali!",
    content: `
      <p>Artificial Intelligence (AI) atau kecerdasan buatan bukan lagi hal futuristik. AI sudah ada di sekitar kita dan membantu banyak pekerjaan sehari-hari. Yuk, kenali apa itu AI!</p>
      <h3>Apa Itu AI?</h3>
      <p>AI adalah teknologi yang membuat komputer bisa melakukan tugas yang biasanya memerlukan kecerdasan manusia, seperti mengenali suara, menerjemahkan bahasa, atau merekomendasikan film.</p>
      <h3>Contoh AI di Kehidupan Sehari-hari</h3>
      <ul>
        <li><strong>Rekomendasi YouTube/TikTok</strong>: AI mempelajari apa yang kamu suka dan menyarankan konten serupa.</li>
        <li><strong>Asisten Suara</strong>: Siri, Google Assistant, dan Alexa memakai AI untuk memahami perintah suara.</li>
        <li><strong>Filter Foto</strong>: Saat kamu memakai filter Instagram, AI membantu mengenali wajahmu.</li>
        <li><strong>Chatbot</strong>: Layanan pelanggan online sering memakai chatbot yang bisa menjawab pertanyaan otomatis.</li>
        <li><strong>Google Maps</strong>: AI memprediksi lalu lintas dan memberi rute terbaik.</li>
      </ul>
      <h3>Bagaimana AI Belajar?</h3>
      <p>AI belajar dari data. Semakin banyak data yang dipelajari, semakin pintar AI. Contohnya, AI penerjemah belajar dari jutaan kalimat yang sudah diterjemahkan manusia.</p>
      <h3>Sikap Bijak Terhadap AI</h3>
      <p>AI adalah alat bantu, bukan pengganti pikiran kita. Gunakan AI untuk membantu belajar, bukan untuk menyontek atau menyalin tugas mentah-mentah. Tetap berpikir kritis dan verifikasi informasi.</p>
      <p><strong>Kesimpulan:</strong> pahami AI, manfaatkan dengan bijak, dan jangan sampai bergantung berlebihan.</p>
    `,
    quiz: [
      { q: "Apa kepanjangan AI?", options: ["Automatic Internet", "Artificial Intelligence", "Advanced Input", "Auto Innovation"], answer: 1 },
      { q: "Contoh penggunaan AI di kehidupan sehari-hari adalah...", options: ["Kalkulator biasa", "Rekomendasi video di YouTube", "Lampu tidur", "Kursi kayu"], answer: 1 },
      { q: "Bagaimana sikap bijak terhadap AI?", options: ["Menggunakannya untuk semua tugas tanpa berpikir", "Menggunakannya sebagai alat bantu sambil tetap berpikir kritis", "Menghindari sepenuhnya", "Menganggap AI selalu benar"], answer: 1 }
    ]
  },
  {
    id: 6,
    emoji: "🏃",
    category: "Kesehatan",
    title: "Olahraga Ringan, Otak Lebih Encer",
    readTime: 4,
    excerpt: "Ternyata olahraga bukan cuma bikin badan sehat, tapi juga bikin otak lebih fokus!",
    content: `
      <p>Siapa bilang olahraga hanya soal badan sehat? Penelitian menunjukkan bahwa olahraga juga sangat bermanfaat untuk otak, termasuk meningkatkan daya ingat dan konsentrasi belajar.</p>
      <h3>Bagaimana Olahraga Membantu Otak?</h3>
      <p>Saat berolahraga, aliran darah ke otak meningkat. Otak juga melepaskan hormon endorfin yang membuat perasaan lebih bahagia, serta BDNF (Brain-Derived Neurotrophic Factor) yang membantu pertumbuhan sel saraf baru.</p>
      <h3>Manfaat Olahraga untuk Pelajar</h3>
      <ul>
        <li><strong>Meningkatkan fokus</strong>: setelah olahraga, konsentrasi belajar lebih baik.</li>
        <li><strong>Meningkatkan memori</strong>: membantu mengingat materi lebih lama.</li>
        <li><strong>Mengurangi stres</strong>: endorfin membantu suasana hati lebih baik.</li>
        <li><strong>Tidur lebih nyenyak</strong>: tidur berkualitas penting untuk belajar.</li>
        <li><strong>Menambah energi</strong>: tidak mudah lelah saat belajar lama.</li>
      </ul>
      <h3>Berapa Lama Idealnya?</h3>
      <p>Untuk pelajar, cukup 20-30 menit olahraga ringan setiap hari. Tidak perlu yang berat — jalan cepat, senam, bersepeda, atau lompat tali sudah cukup.</p>
      <h3>Olahraga Ringan yang Bisa Dicoba di Rumah</h3>
      <ul>
        <li>Senam pagi 15 menit</li>
        <li>Jalan cepat keliling komplek</li>
        <li>Lompat tali 5 menit</li>
        <li>Yoga atau peregangan</li>
        <li>Naik turun tangga</li>
      </ul>
      <p><strong>Kesimpulan:</strong> olahraga bukan pemborosan waktu belajar — justru membuat belajar lebih efektif!</p>
    `,
    quiz: [
      { q: "Berapa lama olahraga ringan yang disarankan per hari?", options: ["1 menit", "20-30 menit", "5 jam", "Tidak perlu olahraga"], answer: 1 },
      { q: "Manfaat olahraga untuk otak adalah...", options: ["Membuat lupa", "Meningkatkan memori dan fokus", "Membuat malas", "Tidak ada manfaat"], answer: 1 },
      { q: "Olahraga ringan yang bisa dilakukan di rumah adalah...", options: ["Mendaki gunung", "Senam atau jalan cepat", "Maraton", "Angkat beban berat"], answer: 1 }
    ]
  }
];

/* ---------- DAFTAR BADGE ---------- */
const BADGES = [
  { id: "first",    emoji: "🌱", name: "Langkah Pertama", desc: "Baca 1 artikel",         check: u => u.completed.length >= 1 },
  { id: "reader3",  emoji: "📖", name: "Pembaca Rajin",   desc: "Baca 3 artikel",         check: u => u.completed.length >= 3 },
  { id: "reader5",  emoji: "🎓", name: "Ahli Literasi",   desc: "Baca 5 artikel",         check: u => u.completed.length >= 5 },
  { id: "reader6",  emoji: "🏅", name: "Kolektor",        desc: "Baca semua artikel",     check: u => u.completed.length >= ARTICLES.length },
  { id: "perfect",  emoji: "💯", name: "Sempurna",        desc: "Nilai 100 di kuis",      check: u => u.perfectScores >= 1 },
  { id: "streak3",  emoji: "🔥", name: "Konsisten",       desc: "Streak 3 hari",          check: u => u.streak >= 3 },
  { id: "streak7",  emoji: "⚡", name: "Tak Terhentikan", desc: "Streak 7 hari",          check: u => u.streak >= 7 },
  { id: "points100",emoji: "⭐", name: "Kolektor Poin",   desc: "Kumpulkan 100 poin",     check: u => u.points >= 100 }
];

/* ---------- MOCK TEMAN SEKELAS ---------- */
const MOCK_CLASSMATES = [
  { name: "Andi Pratama",     points: 180 },
  { name: "Siti Nurhaliza",   points: 220 },
  { name: "Budi Santoso",     points: 150 },
  { name: "Dewi Lestari",     points: 200 },
  { name: "Rizky Ramadhan",   points: 170 },
  { name: "Putri Amelia",     points: 140 },
  { name: "Fajar Nugroho",    points: 160 },
  { name: "Maya Sari",        points: 190 }
];

/* ---------- STATE ---------- */
const STORAGE_KEY = "literaklik_user";

let user = {
  name: "",
  className: "",
  points: 0,
  streak: 0,
  lastReadDate: null,
  completed: [],
  perfectScores: 0,
  badges: []
};

let currentArticle = null;
let currentQuiz = { idx: 0, correct: 0, answers: [] };

/* ---------- UTIL ---------- */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function todayStr() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
}

function yesterdayStr() {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
}

function showToast(msg, duration = 2500) {
  const toast = $("#toast");
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove("show"), duration);
}

/* ---------- STORAGE ---------- */
function saveUser() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
}

function loadUser() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw) {
    try {
      user = { ...user, ...JSON.parse(raw) };
    } catch (e) {
      console.warn("Gagal load user", e);
    }
  }
}

/* ---------- NAVIGATION ---------- */
function goToPage(page) {
  $$(".page").forEach(p => p.classList.remove("active"));
  const target = document.getElementById(`page-${page}`);
  if (target) target.classList.add("active");

  // Update bottom nav
  $$(".nav-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.page === page);
  });

  // Update content per page
  if (page === "home") renderHome();
  if (page === "leaderboard") renderLeaderboard();
  if (page === "profile") renderProfile();

  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ---------- RENDER HOME ---------- */
function renderHome() {
  // Greeting
  const hour = new Date().getHours();
  let sapaan = "Halo";
  if (hour < 11) sapaan = "Selamat pagi";
  else if (hour < 15) sapaan = "Selamat siang";
  else if (hour < 18) sapaan = "Selamat sore";
  else sapaan = "Selamat malam";

  $("#greetingText").textContent = `${sapaan}, ${user.name || "Pelajar"}! 👋`;
  $("#greetingSub").textContent = user.className ? `Kelas ${user.className}` : "Siap membaca hari ini?";

  // Stats
  $("#homePoints").textContent = user.points;
  $("#homeStreak").textContent = user.streak;
  $("#homeRead").textContent = user.completed.length;
  $("#headerPoints").textContent = user.points;
  $("#headerStreak").textContent = user.streak;

  // Misi hari ini: pilih artikel yang belum selesai, atau acak
  let misi = ARTICLES.find(a => !user.completed.includes(a.id));
  if (!misi) misi = ARTICLES[Math.floor(Math.random() * ARTICLES.length)];

  $("#misiCard").innerHTML = `
    <div class="misi-card-emoji">${misi.emoji}</div>
    <div class="misi-card-title">${misi.title}</div>
    <div class="misi-card-meta">
      <span class="article-card-cat">${misi.category}</span>
      &nbsp;·&nbsp; ⏱️ ${misi.readTime} menit
    </div>
    <div class="misi-card-excerpt">${misi.excerpt}</div>
    <button class="btn-primary" data-article="${misi.id}">📖 Baca Sekarang</button>
  `;

  // Article list
  const list = $("#articleList");
  list.innerHTML = "";
  ARTICLES.forEach(a => {
    const done = user.completed.includes(a.id);
    const card = document.createElement("div");
    card.className = "article-card" + (done ? " done" : "");
    card.dataset.article = a.id;
    card.innerHTML = `
      <div class="article-card-emoji">${a.emoji}</div>
      <div class="article-card-body">
        <span class="article-card-cat">${a.category}</span>
        <div class="article-card-title">${a.title}</div>
        <div class="article-card-meta">⏱️ ${a.readTime} menit · ${done ? "Sudah dibaca" : "Belum dibaca"}</div>
      </div>
    `;
    list.appendChild(card);
  });

  // Bind klik
  document.querySelectorAll("[data-article]").forEach(el => {
    el.addEventListener("click", () => openArticle(Number(el.dataset.article)));
  });
}

/* ---------- OPEN ARTICLE ---------- */
function openArticle(id) {
  const article = ARTICLES.find(a => a.id === id);
  if (!article) return;
  currentArticle = article;

  $("#articleMeta").innerHTML = `
    <span class="article-card-cat">${article.category}</span>
    <span class="article-card-cat" style="background: var(--border); color: var(--text-secondary);">⏱️ ${article.readTime} menit</span>
  `;
  $("#articleTitle").textContent = article.title;
  $("#articleBody").innerHTML = article.content;

  goToPage("article");
}

/* ---------- START QUIZ ---------- */
$("#btnStartQuiz").addEventListener("click", () => {
  if (!currentArticle) return;
  currentQuiz = { idx: 0, correct: 0, answers: [] };
  renderQuiz();
  goToPage("quiz");
});

/* ---------- RENDER QUIZ ---------- */
function renderQuiz() {
  const q = currentArticle.quiz[currentQuiz.idx];
  const total = currentArticle.quiz.length;

  const progressPct = (currentQuiz.idx / total) * 100;
  $("#quizProgressBar").style.width = progressPct + "%";
  $("#quizCounter").textContent = `Soal ${currentQuiz.idx + 1} / ${total}`;

  const container = $("#quizContent");
  container.innerHTML = `
    <div class="quiz-question">${q.q}</div>
    <div class="quiz-options" id="quizOptions"></div>
  `;

  const opts = $("#quizOptions");
  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "quiz-option";
    btn.textContent = `${String.fromCharCode(65 + i)}. ${opt}`;
    btn.dataset.i = i;
    btn.addEventListener("click", () => answerQuiz(i, btn));
    opts.appendChild(btn);
  });
}

function answerQuiz(chosenIdx, btn) {
  const q = currentArticle.quiz[currentQuiz.idx];
  const opts = $("#quizOptions");
  const buttons = opts.querySelectorAll(".quiz-option");

  buttons.forEach(b => { b.disabled = true; b.classList.remove("selected"); });

  if (chosenIdx === q.answer) {
    btn.classList.add("correct");
    currentQuiz.correct++;
  } else {
    btn.classList.add("wrong");
    buttons[q.answer].classList.add("correct");
  }

  setTimeout(() => {
    currentQuiz.idx++;
    if (currentQuiz.idx < currentArticle.quiz.length) {
      renderQuiz();
    } else {
      finishQuiz();
    }
  }, 1200);
}

/* ---------- FINISH QUIZ ---------- */
function finishQuiz() {
  const total = currentArticle.quiz.length;
  const correct = currentQuiz.correct;
  const score = Math.round((correct / total) * 100);

  // Hitung poin
  const isFirstTime = !user.completed.includes(currentArticle.id);
  let pointsEarned = 0;
  if (isFirstTime) {
    pointsEarned = correct * 10;
  } else {
    pointsEarned = Math.floor(correct * 3); // reward lebih kecil untuk replay
  }

  // Update user
  user.points += pointsEarned;
  if (score === 100) user.perfectScores++;
  if (isFirstTime) user.completed.push(currentArticle.id);

  // Update streak (hanya sekali per hari)
  const today = todayStr();
  if (user.lastReadDate !== today) {
    if (user.lastReadDate === yesterdayStr()) {
      user.streak++;
    } else {
      user.streak = 1;
    }
    user.lastReadDate = today;
  }

  // Cek badge baru
  const newBadges = [];
  BADGES.forEach(b => {
    if (!user.badges.includes(b.id) && b.check(user)) {
      user.badges.push(b.id);
      newBadges.push(b);
    }
  });

  saveUser();

  // Render hasil
  let emoji = "😢";
  let title = "Coba Lagi!";
  if (score >= 80) { emoji = "🎉"; title = "Luar Biasa!"; }
  else if (score >= 60) { emoji = "👍"; title = "Bagus!"; }
  else if (score >= 40) { emoji = "💪"; title = "Lumayan!"; }

  $("#quizContent").innerHTML = `
    <div class="quiz-result">
      <div class="quiz-result-emoji">${emoji}</div>
      <div class="quiz-result-title">${title}</div>
      <div class="quiz-result-score">${score}</div>
      <div class="quiz-result-sub">Kamu menjawab benar ${correct} dari ${total} soal</div>
      <div class="quiz-result-points">+${pointsEarned} poin</div>
      ${newBadges.length ? `<div style="margin-bottom:16px;font-size:0.9rem;color:var(--text-secondary);">
        🎖️ Badge baru: <strong>${newBadges.map(b => b.emoji + " " + b.name).join(", ")}</strong>
      </div>` : ""}
      <div class="quiz-result-actions">
        <button class="btn-secondary" id="btnBackHome">🏠 Beranda</button>
        <button class="btn-primary" id="btnTryAnother">📚 Artikel Lain</button>
      </div>
    </div>
  `;

  $("#quizProgressBar").style.width = "100%";
  $("#quizCounter").textContent = `Selesai!`;

  $("#btnBackHome").addEventListener("click", () => goToPage("home"));
  $("#btnTryAnother").addEventListener("click", () => goToPage("home"));

  // Update header stats
  $("#headerPoints").textContent = user.points;
  $("#headerStreak").textContent = user.streak;

  if (newBadges.length) {
    setTimeout(() => showToast(`🎖️ Badge baru: ${newBadges[0].name}!`), 500);
  }
}

/* ---------- RENDER LEADERBOARD ---------- */
function renderLeaderboard() {
  const list = MOCK_CLASSMATES.map(c => ({ name: c.name, points: c.points, isYou: false }));
  list.push({ name: user.name || "Kamu", points: user.points, isYou: true });
  list.sort((a, b) => b.points - a.points);

  const medals = ["🥇", "🥈", "🥉"];
  const container = $("#leaderboardList");
  container.innerHTML = "";

  list.forEach((item, i) => {
    const rankEmoji = medals[i] || `#${i + 1}`;
    const div = document.createElement("div");
    div.className = "lb-item" + (item.isYou ? " you" : "");
    div.innerHTML = `
      <div class="lb-rank">${rankEmoji}</div>
      <div class="lb-name">
        ${item.name}
        ${item.isYou ? '<span class="lb-you-badge">Kamu</span>' : ""}
      </div>
      <div class="lb-points">⭐ ${item.points}</div>
    `;
    container.appendChild(div);
  });
}

/* ---------- RENDER PROFILE ---------- */
function renderProfile() {
  $("#profileName").textContent = user.name || "Belum diisi";
  $("#profileClass").textContent = user.className ? `Kelas ${user.className}` : "Kelas belum diisi";
  $("#profilePoints").textContent = user.points;
  $("#profileStreak").textContent = user.streak;
  $("#profileArticles").textContent = user.completed.length;

  const initial = (user.name || "?").trim().charAt(0).toUpperCase();
  $("#profileAvatar").textContent = initial || "👤";

  // Badges
  const grid = $("#badgeGrid");
  grid.innerHTML = "";
  BADGES.forEach(b => {
    const owned = user.badges.includes(b.id);
    const div = document.createElement("div");
    div.className = "badge-item" + (owned ? "" : " locked");
    div.innerHTML = `
      <div class="badge-emoji">${b.emoji}</div>
      <div class="badge-name">${b.name}</div>
      <div class="badge-desc">${b.desc}</div>
    `;
    grid.appendChild(div);
  });
}

/* ---------- MODAL NAMA ---------- */
function showNameModal() {
  $("#inputName").value = user.name || "";
  $("#inputClass").value = user.className || "";
  $("#modalName").classList.add("active");
  setTimeout(() => $("#inputName").focus(), 100);
}

$("#btnSaveName").addEventListener("click", () => {
  const name = $("#inputName").value.trim();
  const cls = $("#inputClass").value.trim();
  if (!name) { showToast("Nama tidak boleh kosong"); return; }
  user.name = name;
  user.className = cls || "Pelajar";
  saveUser();
  $("#modalName").classList.remove("active");
  showToast(`Selamat belajar, ${name}! 🎉`);
  renderHome();
});

$("#inputName").addEventListener("keydown", e => { if (e.key === "Enter") $("#btnSaveName").click(); });
$("#inputClass").addEventListener("keydown", e => { if (e.key === "Enter") $("#btnSaveName").click(); });

/* ---------- DARK MODE ---------- */
function applyDarkMode(isDark) {
  document.body.classList.toggle("dark", isDark);
  $("#darkModeToggle").textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("literaklik_dark", isDark ? "1" : "0");
}

$("#darkModeToggle").addEventListener("click", () => {
  applyDarkMode(!document.body.classList.contains("dark"));
});

/* ---------- EDIT PROFILE ---------- */
$("#btnEditProfile").addEventListener("click", showNameModal);

/* ---------- RESET ---------- */
$("#btnReset").addEventListener("click", () => {
  if (!confirm("Yakin ingin menghapus semua data? Poin, streak, dan badge akan hilang.")) return;
  localStorage.removeItem(STORAGE_KEY);
  user = {
    name: "", className: "", points: 0, streak: 0,
    lastReadDate: null, completed: [], perfectScores: 0, badges: []
  };
  showToast("Data berhasil dihapus");
  showNameModal();
  goToPage("home");
});

/* ---------- NAVIGATION BINDINGS ---------- */
document.querySelectorAll("[data-page]").forEach(el => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    goToPage(el.dataset.page);
  });
});

/* ---------- INIT ---------- */
function init() {
  loadUser();

  // Dark mode
  const savedDark = localStorage.getItem("literaklik_dark") === "1";
  applyDarkMode(savedDark);

  // Tampilkan modal jika belum ada nama
  if (!user.name) {
    showNameModal();
  }

  renderHome();
}

init();
