const quizData = [
  {
    id: 1,
    category: "HTML",
    question: "HTML nima?",
    options: ["Dasturlash tili", "Markup Language", "Database", "Framework"],
    correctAnswer: "Markup Language"
  },
  {
    id: 2,
    category: "HTML",
    question: "Semantic teg qaysi?",
    options: ["div", "span", "header", "font"],
    correctAnswer: "header"
  },
  {
    id: 3,
    category: "CSS",
    question: "Flexbox nima uchun ishlatiladi?",
    options: ["Database", "Layout yaratish", "Server", "API"],
    correctAnswer: "Layout yaratish"
  },
  {
    id: 4,
    category: "CSS",
    question: "display:none nima qiladi?",
    options: ["Elementni yashiradi", "Elementni kattalashtiradi", "Elementni nusxalaydi", "Elementni markazga oladi"],
    correctAnswer: "Elementni yashiradi"
  },
  {
    id: 5,
    category: "JavaScript",
    question: "let nima?",
    options: ["Variable", "Loop", "Function", "Object"],
    correctAnswer: "Variable"
  },
  {
    id: 6,
    category: "JavaScript",
    question: "Array qaysi belgilar bilan yoziladi?",
    options: ["()", "{}", "[]", "<>"],
    correctAnswer: "[]"
  },
  {
    id: 7,
    category: "React",
    question: "React nima?",
    options: ["Framework", "Library", "Database", "Compiler"],
    correctAnswer: "Library"
  },
  {
    id: 8,
    category: "React",
    question: "State qaysi Hook bilan yaratiladi?",
    options: ["useEffect", "useState", "useRef", "useMemo"],
    correctAnswer: "useState"
  },
  {
    id: 9,
    category: "TypeScript",
    question: "TypeScript nima?",
    options: ["CSS Library", "JavaScript Superset", "Database", "Framework"],
    correctAnswer: "JavaScript Superset"
  },
  {
    id: 10,
    category: "Next.js",
    question: "Next.js nimaga asoslangan?",
    options: ["Vue", "Angular", "React", "Node"],
    correctAnswer: "React"
  },

  // ---------------- YANGI SAVOLLAR (11-40) ----------------
  {
    id: 11,
    category: "HTML",
    question: "Qaysi HTML teg eng katta sarlavhani ifodalaydi?",
    options: ["<h6>", "<head>", "<heading>", "<h1>"],
    correctAnswer: "<h1>"
  },
  {
    id: 12,
    category: "HTML",
    question: "Yangi varaqda (tab) havola ochish uchun qaysi atribut ishlatiladi?",
    options: ["target='_blank'", "target='_self'", "href='_new'", "rel='noopener'"],
    correctAnswer: "target='_blank'"
  },
  {
    id: 13,
    category: "HTML",
    question: "Tartiblangan ro'yxat yaratish uchun qaysi teg ishlatiladi?",
    options: ["<ul>", "<li>", "<ol>", "<list>"],
    correctAnswer: "<ol>"
  },
  {
    id: 14,
    category: "HTML",
    question: "Rasm joylashtirishda muqobil matn ko'rsatish uchun qaysi atribut kerak?",
    options: ["title", "alt", "src", "link"],
    correctAnswer: "alt"
  },
  {
    id: 15,
    category: "HTML",
    question: "Kiritish maydonini majburiy to'ldiriladigan qilish uchun qaysi atribut yoziladi?",
    options: ["required", "validate", "important", "placeholder"],
    correctAnswer: "required"
  },
  {
    id: 16,
    category: "CSS",
    question: "Tashqi bo'shliq (margin) va ichki bo'shliq (padding) farqi nimada?",
    options: ["Farqi yo'q", "Margin border ichida, padding tashqarisida", "Margin border tashqarisida, padding ichida", "Margin faqat matnlarga ta'sir qiladi"],
    correctAnswer: "Margin border tashqarisida, padding ichida"
  },
  {
    id: 17,
    category: "CSS",
    question: "Id selektori CSS-da qaysi belgi bilan yoziladi?",
    options: [".", "#", "*", "@"],
    correctAnswer: "#"
  },
  {
    id: 18,
    category: "CSS",
    question: "Elementni sahifada mutloq joylashtirish uchun qaysi qiymat beriladi?",
    options: ["position: relative", "position: static", "position: absolute", "position: fixed"],
    correctAnswer: "position: absolute"
  },
  {
    id: 19,
    category: "CSS",
    question: "Matn rangini o'zgartirish uchun qaysi CSS xossasi ishlatiladi?",
    options: ["text-color", "font-color", "color", "background-color"],
    correctAnswer: "color"
  },
  {
    id: 20,
    category: "CSS",
    question: "Z-index xossasi nima vazifani bajaradi?",
    options: ["Elementni o'ngga suradi", "Elementlarning qatlamlar tartibini (ustma-ustligini) belgilaydi", "Shrift qalinligini o'zgartiradi", "Aylanish burchagini beradi"],
    correctAnswer: "Elementlarning qatlamlar tartibini (ustma-ustligini) belgilaydi"
  },
  {
    id: 21,
    category: "JavaScript",
    question: "O'zgarmas qiymatlarni e'lon qilish uchun qaysi kalit so'z ishlatiladi?",
    options: ["let", "var", "const", "immutable"],
    correctAnswer: "const"
  },
  {
    id: 22,
    category: "JavaScript",
    question: "'5' == 5 ifodasi qanday natija beradi?",
    options: ["true", "false", "undefined", "null"],
    correctAnswer: "true"
  },
  {
    id: 23,
    category: "JavaScript",
    question: "'5' === 5 ifodasi qanday natija beradi?",
    options: ["true", "false", "Error", "NaN"],
    correctAnswer: "false"
  },
  {
    id: 24,
    category: "JavaScript",
    question: "Massiv oxiriga element qo'shish uchun qaysi metod ishlatiladi?",
    options: ["pop()", "push()", "shift()", "unshift()"],
    correctAnswer: "push()"
  },
  {
    id: 25,
    category: "JavaScript",
    question: "Qaysi ma'lumot turi JavaScript-da mavjud emas?",
    options: ["String", "Boolean", "Float", "Symbol"],
    correctAnswer: "Float"
  },
  {
    id: 26,
    category: "React",
    question: "React-da ma'lumotlarni komponentdan komponentga uzatish uchun nima ishlatiladi?",
    options: ["state", "props", "context", "redux"],
    correctAnswer: "props"
  },
  {
    id: 27,
    category: "React",
    question: "Komponentning hayotiy siklini (Lifecycle) boshqarish uchun qaysi Hook ishlatiladi?",
    options: ["useState", "useContext", "useEffect", "useReducer"],
    correctAnswer: "useEffect"
  },
  {
    id: 28,
    category: "React",
    question: "DOM elementiga to'g'ridan-to'g'ri ulanish (reference) uchun qaysi Hook kerak?",
    options: ["useRef", "useMemo", "useCallback", "useState"],
    correctAnswer: "useRef"
  },
  {
    id: 29,
    category: "React",
    question: "React-da ro'yxatlarni render qilganda har bir elementga qaysi atribut berilishi shart?",
    options: ["id", "key", "index", "class"],
    correctAnswer: "key"
  },
  {
    id: 30,
    category: "React",
    question: "React qayta render bo'lish samaradorligini oshirish uchun qaysi virtual texnologiyadan foydalanadi?",
    options: ["Virtual DOM", "Shadow DOM", "Real DOM", "Light DOM"],
    correctAnswer: "Virtual DOM"
  },
  {
    id: 31,
    category: "TypeScript",
    question: "TypeScript-da hech qanday qiymat qaytarmaydigan funksiyaning turi nima bo'ladi?",
    options: ["null", "undefined", "void", "any"],
    correctAnswer: "void"
  },
  {
    id: 32,
    category: "TypeScript",
    question: "Istalgan turdagi ma'lumotni qabul qila oladigan va qat'iy tekshiruvni chetlab o'tadigan tur qaysi?",
    options: ["unknown", "any", "never", "all"],
    correctAnswer: "any"
  },
  {
    id: 33,
    category: "TypeScript",
    question: "Obyekt tarkibini (shape) belgilash uchun qaysi kalit so'z ishlatiladi?",
    options: ["interface", "class", "module", "struct"],
    correctAnswer: "interface"
  },
  {
    id: 34,
    category: "Next.js",
    question: "Next.js dasturning qaysi qismida (tomonida) sahifalarni tayyorlab bera oladi?",
    options: ["Faqat Client-side", "Faqat Server-side", "Ham Client, ham Server-side (SSR/SSG)", "Faqat Database-side"],
    correctAnswer: "Ham Client, ham Server-side (SSR/SSG)"
  },
  {
    id: 35,
    category: "Next.js",
    question: "App Router tizimida sahifa fayli qanday nomlanishi kerak?",
    options: ["index.js", "page.jsx", "component.js", "route.ts"],
    correctAnswer: "page.jsx"
  },
  {
    id: 36,
    category: "JavaScript",
    question: "JSON matnini JavaScript obyektiga o'tkazish uchun nima ishlatiladi?",
    options: ["JSON.stringify()", "JSON.parse()", "JSON.object()", "JSON.toJS()"],
    correctAnswer: "JSON.parse()"
  },
  {
    id: 37,
    category: "CSS",
    question: "CSS Grid tizimida ustunlar soni va o'lchamini belgilash uchun nima ishlatiladi?",
    options: ["grid-template-columns", "grid-rows", "flex-direction", "grid-align"],
    correctAnswer: "grid-template-columns"
  },
  {
    id: 38,
    category: "HTML",
    question: "Matnni qalin (bold) ko'rinishga keltirish uchun qaysi semantik teg to'g'ri hisoblanadi?",
    options: ["<bold>", "<i>", "<strong>", "<p>"],
    correctAnswer: "<strong>"
  },
  {
    id: 39,
    category: "React",
    question: "Qaysi holatda React komponenti majburiy qayta render bo'ladi?",
    options: ["Faqat props o'zgarganda", "Faqat state o'zgarganda", "State yoki props qiymatlari o'zgarganda", "Faqat URL o'zgarganda"],
    correctAnswer: "State yoki props qiymatlari o'zgarganda"
  },
  {
    id: 40,
    category: "Next.js",
    question: "Komponentni brauzer (client) muhitida ishlashga majburlash uchun fayl tepasiga nima yoziladi?",
    options: ['"use client"', '"use server"', '"use browser"', '"use react"'],
    correctAnswer: '"use client"'
  },
  {
    id: 41,
    category: "HTML",
    question: "HTML5-da audio fayllarni qo'shish uchun qaysi teg ishlatiladi?",
    options: ["<sound>", "<audio>", "<music>", "<voice>"],
    correctAnswer: "<audio>"
  },
  {
    id: 42,
    category: "HTML",
    question: "Kattalashtirganda ham sifati yo'qolmaydigan veb-grafika formati qaysi?",
    options: ["PNG", "JPEG", "SVG", "GIF"],
    correctAnswer: "SVG"
  },
  {
    id: 43,
    category: "HTML",
    question: "Veb-sahifaning tavsifi va kalit so'zlarini (SEO uchun) qaysi teg ichida yozamiz?",
    options: ["<meta>", "<title>", "<link>", "<script>"],
    correctAnswer: "<meta>"
  },
  {
    id: 44,
    category: "HTML",
    question: "Forma ichidagi ma'lumotlarni tozalab (boshlang'ich holatga) tashlaydigan tugma turi qaysi?",
    options: ["type='clear'", "type='reset'", "type='delete'", "type='remove'"],
    correctAnswer: "type='reset'"
  },
  {
    id: 45,
    category: "HTML",
    question: "Qaysi HTML elementi sahifaga boshqa bir mustaqil veb-sahifani joylashtirish (embed) uchun ishlatiladi?",
    options: ["<embed>", "<object>", "<iframe>", "<frame>"],
    correctAnswer: "<iframe>"
  },
  {
    id: 46,
    category: "CSS",
    question: "Element atrofidagi burchaklarni silliqlash (yumaloq qilish) uchun qaysi xossa ishlatiladi?",
    options: ["border-smooth", "border-radius", "box-shadow", "border-curve"],
    correctAnswer: "border-radius"
  },
  {
    id: 47,
    category: "CSS",
    question: "CSS-da eng yuqori ustunlikka (priority) ega bo'lgan buyruq qaysi?",
    options: ["!important", "id selektor", "inline style", "class selektor"],
    correctAnswer: "!important"
  },
  {
    id: 48,
    category: "CSS",
    question: "Responsiv dizaynda qurilma ekran o'lchamiga qarab qoida yozish uchun nima ishlatiladi?",
    options: ["@import", "@media", "@keyframes", "@support"],
    correctAnswer: "@media"
  },
  {
    id: 49,
    category: "CSS",
    question: "CSS animatsiyalarining harakat bosqichlarini belgilash uchun qaysi kalit so'z ishlatiladi?",
    options: ["@transition", "@keyframes", "@animate", "@motion"],
    correctAnswer: "@keyframes"
  },
  {
    id: 50,
    category: "CSS",
    question: "Flexbox-da elementlarni asosiy o'q (main axis) bo'ylab tekislash uchun qaysi xossa ishlatiladi?",
    options: ["align-items", "justify-content", "flex-direction", "align-content"],
    correctAnswer: "justify-content"
  },
  {
    id: 51,
    category: "JavaScript",
    question: "O'zgaruvchi turini aniqlash uchun qaysi operator ishlatiladi?",
    options: ["typeof", "instanceof", "checktype", "valueof"],
    correctAnswer: "typeof"
  },
  {
    id: 52,
    category: "JavaScript",
    question: "Qaysi sikl operatori shart to'g'ri yoki noto'g'riligidan qat'iy nazar kamida 1 marta ishlaydi?",
    options: ["while", "for", "do...while", "for...in"],
    correctAnswer: "do...while"
  },
  {
    id: 53,
    category: "JavaScript",
    question: "Asinxron kodlar bilan ishlashda chiroyli va qulay sintaksis taqdim etuvchi kalit so'zlar juftligi qaysi?",
    options: ["then/catch", "async/await", "try/catch", "promise/resolve"],
    correctAnswer: "async/await"
  },
  {
    id: 54,
    category: "JavaScript",
    question: "Ikkita massivni bitta massivga birlashtirish uchun ES6-ning qaysi operatoridan foydalaniladi?",
    options: ["Rest operator (...)", "Spread operator (...)", "Split operator", "Merge operator"],
    correctAnswer: "Spread operator (...)"
  },
  {
    id: 55,
    category: "JavaScript",
    question: "JavaScript-da funksiya ichidan o'z-o'zini qayta chaqirish hodisasi nima deyiladi?",
    options: ["Closure", "Recursion", "Hoisting", "Callback"],
    correctAnswer: "Recursion"
  },
  {
    id: 56,
    category: "React",
    question: "Komponent render bo'layotganda eski qiymatni saqlab qolib, hisoblashni optimallashtiradigan Hook qaysi?",
    options: ["useCallback", "useMemo", "useRef", "useReducer"],
    correctAnswer: "useMemo"
  },
  {
    id: 57,
    category: "React",
    question: "Global holatni (state) barcha komponentlarga 'props drilling'siz yetkazish texnologiyasi nima?",
    options: ["Context API", "Redux", "React Router", "State Lifting"],
    correctAnswer: "Context API"
  },
  {
    id: 58,
    category: "React",
    question: "React-da JSX sintaksisi yakuniy natijada nimaga aylanadi?",
    options: ["Toza HTML matniga", "React.createElement() chaqiruvlariga", "Sass kodiga", "Dinamik massivlarga"],
    correctAnswer: "React.createElement() chaqiruvlariga"
  },
  {
    id: 59,
    category: "React",
    question: "Quyidagilardan qaysi biri React-da 'StrictMode' vazifasiga kirmaydi?",
    options: ["Xavfli hayotiy sikllarni aniqlash", "Eski API-lar haqida ogohlantirish", "Dastur dizaynini dark mode-ga o'tkazish", "Potensial muammolarni topish uchun komponentlarni 2 marta render qilish"],
    correctAnswer: "Dastur dizaynini dark mode-ga o'tkazish"
  },
  {
    id: 60,
    category: "React",
    question: "Komponent unmount (ekrandan yo'qolish) jarayonini useEffect-da qanday ushlaymiz?",
    options: ["useEffect oxiriga [] qo'yish orqali", "useEffect ichidan funksiya qaytarish (return) orqali", "Ikkinchi argumentga 'unmount' yozish orqali", "useEffect-ni o'chirish orqali"],
    correctAnswer: "useEffect ichidan funksiya qaytarish (return) orqali"
  },
  {
    id: 61,
    category: "TypeScript",
    question: "TypeScript-da obyekt turlarini kengaytirish (merging) uchun qaysi mexanizm faqat o'ziga xos?",
    options: ["type", "interface", "enum", "generic"],
    correctAnswer: "interface"
  },
  {
    id: 62,
    category: "TypeScript",
    question: "Cheklangan nomlangan o'zgarmaslar to'plamini yaratish uchun qaysi kalit so'z ishlatiladi?",
    options: ["interface", "type", "enum", "const"],
    correctAnswer: "enum"
  },
  {
    id: 63,
    category: "TypeScript",
    question: "Parametrlarga asoslangan, har qanday tur bilan moslashuvchan ishlovchi funksiya/klasslar nima deyiladi?",
    options: ["Generics", "Interfaces", "Tuples", "Union Types"],
    correctAnswer: "Generics"
  },
  {
    id: 64,
    category: "Next.js",
    question: "Next.js dasturini ishlab chiqarishga (production) tayyorlab, build qilish buyrug'i qaysi?",
    options: ["npm run dev", "npm run build", "npm run start", "npm run export"],
    correctAnswer: "npm run build"
  },
  {
    id: 65,
    category: "Next.js",
    question: "Next.js-da dinamik routerlar qanday papka nomi bilan ochiladi? (Masalan, post id uchun)",
    options: [":id", "post-id", "[id]", "{id}"],
    correctAnswer: "[id]"
  },
  {
    id: 66,
    category: "HTML",
    question: "HTML formalarida parollarni kiritish maydoni turi qanday bo'ladi?",
    options: ["type='text'", "type='hidden'", "type='password'", "type='secret'"],
    correctAnswer: "type='password'"
  },
  {
    id: 67,
    category: "CSS",
    question: "Elementning fon rasmini takrorlanmaydigan qilish uchun qaysi xossa yoziladi?",
    options: ["background-size: cover", "background-repeat: no-repeat", "background-position: center", "display: block"],
    correctAnswer: "background-repeat: no-repeat"
  },
  {
    id: 68,
    category: "JavaScript",
    question: "NaN nima degani?",
    options: ["Null and None", "Not a Number", "New Array Number", "Number and Null"],
    correctAnswer: "Not a Number"
  },
  {
    id: 69,
    category: "React",
    question: "React komponenti nomlanishida qaysi qoidaga amal qilinishi shart?",
    options: ["Kichik harf bilan boshlanishi kerak", "Katta harf bilan boshlanishi kerak (PascalCase)", "Istalgancha nomlash mumkin", "Faqat raqam bilan tugashi kerak"],
    correctAnswer: "Katta harf bilan boshlanishi kerak (PascalCase)"
  },
  {
    id: 70,
    category: "Next.js",
    question: "Next.js-da rasm yuklashni avtomatik optimallashtiruvchi komponent qaysi?",
    options: ["<img>", "<Picture>", "<Image>", "<NextImage>"],
    correctAnswer: "<Image>"
  },
  {
    id: 71,
    category: "HTML",
    question: "Matnni pastki chiziq (underline) bilan yozish uchun qaysi teg ishlatiladi?",
    options: ["<i>", "<u>", "<s>", "<strike>"],
    correctAnswer: "<u>"
  },
  {
    id: 72,
    category: "CSS",
    question: "Elementning ichki va tashqi chegaralari orasidagi chiziq nima deyiladi?",
    options: ["padding", "margin", "border", "outline"],
    correctAnswer: "border"
  },
  {
    id: 73,
    category: "JavaScript",
    question: "JavaScript-da massiv uzunligini bilish uchun qaysi xossadan foydalaniladi?",
    options: ["size", "count", "length", "index"],
    correctAnswer: "length"
  },
  {
    id: 74,
    category: "React",
    question: "Custom Hook yaratganda uning nomi majburiy ravishda qaysi so'z bilan boshlanishi kerak?",
    options: ["get...", "make...", "use...", "react..."],
    correctAnswer: "use..."
  },
  {
    id: 75,
    category: "TypeScript",
    question: "TypeScript-da qat'iy o'lchamli va har bir elementi ma'lum turga ega massiv nima deyiladi?",
    options: ["Tuple", "Interface", "Enum", "Any"],
    correctAnswer: "Tuple"
  },
  {
    id: 76,
    category: "Next.js",
    question: "Next.js-da sahifalararo o'tishni tezlashtiruvchi va refresh-siz ishlovchi komponent qaysi?",
    options: ["<a>", "<Navigate>", "<Link>", "<Route>"],
    correctAnswer: "<Link>"
  },
  {
    id: 77,
    category: "HTML",
    question: "Veb-sayt iqtiboslari yoki uzoqroq ko'chirmalarni ajratib ko'rsatish uchun qaysi teg ishlatiladi?",
    options: ["<quote>", "<blockquote>", "<cite>", "<p>"],
    correctAnswer: "<blockquote>"
  },
  {
    id: 78,
    category: "CSS",
    question: "Sichqoncha element ustiga kelgandagi holatni (hover) ushlab turuvchi element nima deyiladi?",
    options: ["Pseudo-element", "Pseudo-class", "Media query", "Selector"],
    correctAnswer: "Pseudo-class"
  },
  {
    id: 79,
    category: "JavaScript",
    question: "JavaScript qaysi yili yaratilgan?",
    options: ["1991", "1995", "2000", "2005"],
    correctAnswer: "1995"
  },
  {
    id: 80,
    category: "React",
    question: "useState funksiyasi o'zidan nima qaytaradi?",
    options: ["Faqat qiymatni", "Faqat o'zgartiruvchi funksiyani", "2 ta elementdan iborat massivni", "Obyektni"],
    correctAnswer: "2 ta elementdan iborat massivni"
  },
  {
    id: 81,
    category: "TypeScript",
    question: "Ikki yoki undan ortiq turni birlashtirish belgisi (|) nima deyiladi?",
    options: ["Intersection", "Union", "Generic", "Tuple"],
    correctAnswer: "Union"
  },
  {
    id: 82,
    category: "Next.js",
    question: "Veb-sayt qidiruv tizimlari (Google) tomonidan oson topilishi (SEO) uchun Next.js-ning qaysi rejimi eng foydali?",
    options: ["Client Side Rendering (CSR)", "Server Side Rendering (SSR / SSG)", "Single Page Application", "No Rendering"],
    correctAnswer: "Server Side Rendering (SSR / SSG)"
  },
  {
    id: 83,
    category: "HTML",
    question: "Drop-down (ochiladigan ro'yxat) yaratish uchun qaysi teglar juftligi kerak?",
    options: ["<input> va <datalist>", "<select> va <option>", "<ul > va <li>", "<form> va <list>"],
    correctAnswer: "<select> va <option>"
  },
  {
    id: 84,
    category: "CSS",
    question: "Element ichidagi barcha matnlarni bosh harfga (UPPERCASE) o'tkazish xossasi qaysi?",
    options: ["text-style: uppercase", "text-transform: uppercase", "font-weight: bold", "font-case: upper"],
    correctAnswer: "text-transform: uppercase"
  },
  {
    id: 85,
    category: "JavaScript",
    question: "Massivning birinchi elementini o'chirib tashlaydigan metod qaysi?",
    options: ["pop()", "shift()", "push()", "unshift()"],
    correctAnswer: "shift()"
  },
  {
    id: 86,
    category: "React",
    question: "Quyidagilardan qaysi biri React Hook-larining asosiy qoidasiga kiradi?",
    options: ["Faqat sikllar ichida chaqirilishi kerak", "Faqat eng yuqori darajada (top-level) chaqirilishi kerak, shartlar ichida emas", "Faqat klass komponentlarda ishlatiladi", "Oddiy JS funksiyalari ichida ishlatiladi"],
    correctAnswer: "Faqat eng yuqori darajada (top-level) chaqirilishi kerak, shartlar ichida emas"
  },
  {
    id: 87,
    category: "TypeScript",
    question: "O'zgaruvchiga ma'lum tur majburlab tayinlanganda (type casting) qaysi kalit so'z ishlatiladi?",
    options: ["as", "is", "of", "type"],
    correctAnswer: "as"
  },
  {
    id: 88,
    category: "Next.js",
    question: "Next.js-da API route-lar (backend qismi) qanday nomlangan faylda yoziladi?",
    options: ["api.js", "server.js", "route.js (yoki route.ts)", "endpoint.ts"],
    correctAnswer: "route.js (yoki route.ts)"
  },
  {
    id: 89,
    category: "HTML",
    question: "HTML-da bitta satr pastga tushirish (break) tegi qaysi?",
    options: ["<lb>", "<br>", "<break>", "<hr>"],
    correctAnswer: "<br>"
  },
  {
    id: 90,
    category: "CSS",
    question: "Flexbox-da elementlarni ustun (vertikal) shakliga keltirish uchun nima yoziladi?",
    options: ["flex-direction: column", "flex-direction: row", "display: grid", "align-items: center"],
    correctAnswer: "flex-direction: column"
  },
  {
    id: 91,
    category: "JavaScript",
    question: "JavaScript-da 'strict mode'ni yoqish uchun fayl tepasiga nima yoziladi?",
    options: ['"use strict"', '"strict mode"', '"enable strict"', '"js strict"'],
    correctAnswer: '"use strict"'
  },
  {
    id: 92,
    category: "React",
    question: "Yangi context obyekti yaratish uchun qaysi funksiya chaqiriladi?",
    options: ["useContext()", "React.createContext()", "React.setContext()", "useReducer()"],
    correctAnswer: "React.createContext()"
  },
  {
    id: 93,
    category: "TypeScript",
    question: "Obyekt kalitlari va qiymat turlarini dinamik xaritaga solish (dictionary) uchun qaysi foydali tur mavjud?",
    options: ["Record<Key, Value>", "Map<Key, Value>", "Dictionary<T>", "Array<T>"],
    correctAnswer: "Record<Key, Value>"
  },
  {
    id: 94,
    category: "Next.js",
    question: "Next.js dasturida shriftlarni yuklash va optimallashtirish qaysi paket orqali qilinadi?",
    options: ["next/font", "next/style", "google/fonts", "next/theme"],
    correctAnswer: "next/font"
  },
  {
    id: 95,
    category: "HTML",
    question: "Qaysi atribut tugma yoki kiritish maydonini vaqtincha faolsizlantirib qo'yadi?",
    options: ["readonly", "disabled", "hidden", "stop"],
    correctAnswer: "disabled"
  },
  {
    id: 96,
    category: "CSS",
    question: "Sichqoncha ko'rsatkichini 'qo'lcha' (pointer) ko'rinishiga keltirish xossasi qaysi?",
    options: ["mouse: hand", "cursor: pointer", "pointer: click", "cursor: hand"],
    correctAnswer: "cursor: pointer"
  },
  {
    id: 97,
    category: "JavaScript",
    question: "Belgilangan vaqt o'tgandan keyin funksiyani faqat 1 marta bajaruvchi global metod qaysi?",
    options: ["setInterval", "setTimeout", "delay", "clearTimeout"],
    correctAnswer: "setTimeout"
  },
  {
    id: 98,
    category: "React",
    question: "Murakkab holatlar (state) mantig'ini boshqarishda useState o'rniga qaysi Hook tavsiya etiladi?",
    options: ["useMemo", "useRef", "useReducer", "useCallback"],
    correctAnswer: "useReducer"
  },
  {
    id: 99,
    category: "TypeScript",
    question: "Mavjud turning hamma xossalarini ixtiyoriy (optional, ?) qilib beruvchi Utility Type qaysi?",
    options: ["Required<T>", "Partial<T>", "Readonly<T>", "Pick<T>"],
    correctAnswer: "Partial<T>"
  },
  {
    id: 100,
    category: "Next.js",
    question: "Next.js-da sahifa yuklanayotgan vaqtda avtomatik chiqadigan UI fayli qanday nomlanadi?",
    options: ["page.js", "error.js", "loading.jsx", "layout.js"],
    correctAnswer: "loading.jsx"
  },
  // ---------------- 101-200 SAVOLLAR (quizData DAVOMI) ----------------
  {
    id: 101,
    category: "HTML",
    question: "Matnni o'zgaruvchan shriftli (monospaced) kod ko'rinishida chiqarish tegi qaysi?",
    options: ["<text>", "<p>", "<code>", "<pre>"],
    correctAnswer: "<code>"
  },
  {
    id: 102,
    category: "CSS",
    question: "Element ichidagi matnni satr oxiridan majburiy kesib pastga tushirish xossasi qaysi?",
    options: ["word-wrap: break-word", "text-align: justify", "white-space: nowrap", "overflow: hidden"],
    correctAnswer: "word-wrap: break-word"
  },
  {
    id: 103,
    category: "JavaScript",
    question: "Obyektning barcha kalitlarini (keys) massiv ko'rinishida qaytaruvchi metod qaysi?",
    options: ["Object.values()", "Object.keys()", "Object.entries()", "Object.map()"],
    correctAnswer: "Object.keys()"
  },
  {
    id: 104,
    category: "React",
    question: "React-da bir xil mantiqqa ega komponentlarni qayta ishlatish uchun yaratiladigan funksiya nima deyiladi?",
    options: ["HOC (Higher-Order Component) / Custom Hook", "Reducer", "Context Provider", "State Element"],
    correctAnswer: "HOC (Higher-Order Component) / Custom Hook"
  },
  {
    id: 105,
    category: "TypeScript",
    question: "TypeScript-da class xossasini faqat shu class ichida ishlatish uchun qaysi modifikator yoziladi?",
    options: ["public", "protected", "private", "readonly"],
    correctAnswer: "private"
  },
  {
    id: 106,
    category: "Next.js",
    question: "Next.js-da ekrandan tashqaridagi Link komponentlarini oldindan yuklab qo'yish xossasi nima deyiladi?",
    options: ["prefetching", "lazy loading", "hydration", "caching"],
    correctAnswer: "prefetching"
  },
  {
    id: 107,
    category: "HTML",
    question: "HTML5-da qidiruv maydonini yaratish uchun input turi qanday bo'lishi kerak?",
    options: ["type='find'", "type='search'", "type='query'", "type='text'"],
    correctAnswer: "type='search'"
  },
  {
    id: 108,
    category: "CSS",
    question: "Elementning shaffofligini (opacity) belgilashda to'liq ko'rinadigan qiymat qaysi?",
    options: ["0", "0.5", "1", "100"],
    correctAnswer: "1"
  },
  {
    id: 109,
    category: "JavaScript",
    question: "Massiv elementlarini bitta yakuniy qiymatgacha yig'ib (kombinatsiya qilib) beruvchi metod qaysi?",
    options: ["map()", "filter()", "reduce()", "forEach()"],
    correctAnswer: "reduce()"
  },
  {
    id: 110,
    category: "React",
    question: "React elementlari ekranga chizilib bo'lingandan keyin sinxron ishlaydigan xavfsizroq Hook qaysi?",
    options: ["useEffect", "useLayoutEffect", "useInsertionEffect", "useMemo"],
    correctAnswer: "useLayoutEffect"
  },
  {
    id: 111,
    category: "TypeScript",
    question: "Ikki turning barcha xossalarini birlashtirib yangi tur yaratish belgisi (&) nima deyiladi?",
    options: ["Union", "Intersection", "Generic", "Assertion"],
    correctAnswer: "Intersection"
  },
  {
    id: 112,
    category: "Next.js",
    question: "Next.js-da sahifa xatolikka uchraganda avtomatik ishga tushadigan UI fayli qaysi?",
    options: ["not-found.js", "error.jsx", "loading.js", "page.js"],
    correctAnswer: "error.jsx"
  },
  {
    id: 113,
    category: "HTML",
    question: "Inline (satrli) elementni ko'rsating.",
    options: ["<div>", "<span>", "<p>", "<section>"],
    correctAnswer: "<span>"
  },
  {
    id: 114,
    category: "CSS",
    question: "Sichqoncha bilan elementni bosib turgandagi holatni qaysi pseudo-class boshqaradi?",
    options: [":hover", ":focus", ":active", ":visited"],
    correctAnswer: ":active"
  },
  {
    id: 115,
    category: "JavaScript",
    question: "Bajarilishi noma'lum vaqt oladigan operatsiyalar natijasini kutish obyekti nima deyiladi?",
    options: ["Callback", "Promise", "Closure", "Event Loop"],
    correctAnswer: "Promise"
  },
  {
    id: 116,
    category: "React",
    question: "useCallback Hook-i aslida nmani keshlab (memoize qilib) saqlaydi?",
    options: ["Funksiya qaytargan qiymatni", "Funksiyaning o'zini (reference)", "Komponent renderini", "Obyektni"],
    correctAnswer: "Funksiyaning o'zini (reference)"
  },
  {
    id: 117,
    category: "TypeScript",
    question: "Faqat o'qish uchun mo'ljallangan va qiymatini o'zgartirib bo'lmaydigan xossa qanday belgilanadi?",
    options: ["constant", "readonly", "private", "immutable"],
    correctAnswer: "readonly"
  },
  {
    id: 118,
    category: "Next.js",
    question: "Veb-saytning sarlavhasi va meta ma'lumotlarini dynamic o'zgartirish uchun Next.js-da nima ishlatiladi?",
    options: ["Metadata obyekti (generateMetadata)", "<head> tegi", "useEffect", "document.title"],
    correctAnswer: "Metadata obyekti (generateMetadata)"
  },
  {
    id: 119,
    category: "HTML",
    question: "Block (blokli) elementni ko'rsating.",
    options: ["<a>", "<strong>", "<div>", "<img>"],
    correctAnswer: "<div>"
  },
  {
    id: 120,
    category: "CSS",
    question: "Elementning soyasini yaratish uchun qaysi xossa ishlatiladi?",
    options: ["text-shadow", "box-shadow", "element-shadow", "border-shadow"],
    correctAnswer: "box-shadow"
  },
  {
    id: 121,
    category: "JavaScript",
    question: "Qaysi metod satrdagi ma'lum bir bo'lakni qirqib olish uchun ishlatiladi?",
    options: ["slice()", "split()", "push()", "join()"],
    correctAnswer: "slice()"
  },
  {
    id: 122,
    category: "React",
    question: "React-da input elementlari qiymati state orqali boshqarilsa, u nima deyiladi?",
    options: ["Uncontrolled component", "Controlled component", "Dynamic input", "State input"],
    correctAnswer: "Controlled component"
  },
  {
    id: 123,
    category: "TypeScript",
    question: "Hech qachon sodir bo'lmaydigan yoki oxiriga yetmaydigan qiymat turi qaysi?",
    options: ["void", "any", "never", "unknown"],
    correctAnswer: "never"
  },
  {
    id: 124,
    category: "Next.js",
    question: "Next.js-da dynamic route-lar ichida barcha ichki manzillarni tutib olish (Catch-all) belgisi qaysi?",
    options: ["[id]", "[...slug]", "[[...slug]]", "*"],
    correctAnswer: "[...slug]"
  },
  {
    id: 125,
    category: "HTML",
    question: "Matn maydoniga ko'rsatma (namuna) matn qo'yish atributi qaysi?",
    options: ["value", "text", "placeholder", "hint"],
    correctAnswer: "placeholder"
  },
  {
    id: 126,
    category: "CSS",
    question: "Flexbox-da elementlarning satrga sig'may qolganda pastga tushishini ta'minlovchi xossa qaysi?",
    options: ["flex-direction", "flex-wrap: wrap", "justify-content", "align-content"],
    correctAnswer: "flex-wrap: wrap"
  },
  {
    id: 127,
    category: "JavaScript",
    question: "Ikkita obyektni xossalarini bitta yangi obyektga nusxalashning eng qulay ES6 usuli qaysi?",
    options: ["Object.assign()", "{...obj1, ...obj2}", "Object.append()", "obj1 + obj2"],
    correctAnswer: "{...obj1, ...obj2}"
  },
  {
    id: 128,
    category: "React",
    question: "Context qiymatidan foydalanish uchun komponent ichida qaysi Hook chaqiriladi?",
    options: ["useContext", "createContext", "useReducer", "useState"],
    correctAnswer: "useContext"
  },
  {
    id: 129,
    category: "TypeScript",
    question: "Obyekt turi e'lon qilinayotganda ixtiyoriy (bo'lishi ham bo'lmasligi ham mumkin bo'lgan) xossa qanday yoziladi?",
    options: ["xossa!", "xossa?", "optional xossa", "xossa: any"],
    correctAnswer: "xossa?"
  },
  {
    id: 130,
    category: "Next.js",
    question: "Static sahifalarni ma'lum vaqt oralig'ida fonda qayta yangilab turish texnologiyasi nima deyiladi?",
    options: ["SSR", "ISR (Incremental Static Regeneration)", "SSG", "SPA"],
    correctAnswer: "ISR (Incremental Static Regeneration)"
  },
  {
    id: 131,
    category: "HTML",
    question: "HTML formalarida fayl yuklash uchun input turi qanday bo'ladi?",
    options: ["type='src'", "type='upload'", "type='file'", "type='folder'"],
    correctAnswer: "type='file'"
  },
  {
    id: 132,
    category: "CSS",
    question: "Element ichidagi kontent sig'may qolganda skroll (aylantirish) chiqarish xossasi qaysi?",
    options: ["overflow: scroll", "display: block", "position: absolute", "visibility: visible"],
    correctAnswer: "overflow: scroll"
  },
  {
    id: 133,
    category: "JavaScript",
    question: "Qaysi kalit so'z xatoliklarni ushlash va qayta ishlash (error handling) blokida ishlatiladi?",
    options: ["if/else", "try/catch", "async/await", "lock/unlock"],
    correctAnswer: "try/catch"
  },
  {
    id: 134,
    category: "React",
    question: "React-da virtual xotiradagi DOM o'zgarishlarini real DOM-ga o'tkazish jarayoni nima deyiladi?",
    options: ["Hydration", "Reconciliation", "Compiling", "Slicing"],
    correctAnswer: "Reconciliation"
  },
  {
    id: 135,
    category: "TypeScript",
    question: "'any' turidan farqli o'laroq, qiymat turi aniq bo'lguncha uning ustida amal bajarishga yo'l qo'ymaydigan xavfsiz tur qaysi?",
    options: ["unknown", "never", "void", "defined"],
    correctAnswer: "unknown"
  },
  {
    id: 136,
    category: "Next.js",
    question: "Next.js App Router-da butun loyiha uchun umumiy bo'lgan asosiy skelet (HTML va Body qismi) qaysi faylda bo'ladi?",
    options: ["page.js", "layout.jsx (Root Layout)", "template.js", "app.js"],
    correctAnswer: "layout.jsx (Root Layout)"
  },
  {
    id: 137,
    category: "HTML",
    question: "Sahifaning mantiqiy eng pastki (zirvak) qismini ifodalovchi semantik teg qaysi?",
    options: ["<bottom>", "<end>", "<footer>", "<section>"],
    correctAnswer: "<footer>"
  },
  {
    id: 138,
    category: "CSS",
    question: "Shriftning qalinligini (bold) belgilash uchun qaysi xossa ishlatiladi?",
    options: ["font-style", "font-weight", "text-thickness", "font-size"],
    correctAnswer: "font-weight"
  },
  {
    id: 139,
    category: "JavaScript",
    question: "Massiv ichida ma'lum bir element bor yoki yo'qligini tekshirib, true/false qaytaruvchi metod qaysi?",
    options: ["find()", "includes()", "indexOf()", "some()"],
    correctAnswer: "includes()"
  },
  {
    id: 140,
    category: "React",
    question: "Eski holat (state) qiymatiga tayanib yangi qiymat o'rnatilganda useState-da qanday usul to'g'ri hisoblanadi?",
    options: ["setScore(score + 1)", "setScore((prev) => prev + 1)", "score = score + 1", "setScore(current)"],
    correctAnswer: "setScore((prev) => prev + 1)"
  },
  {
    id: 141,
    category: "TypeScript",
    question: "TypeScript fayllarini JavaScript-ga o'giruvchi komplyator buyrug'i qaysi?",
    options: ["npm run dev", "tsc", "ts-node", "node"],
    correctAnswer: "tsc"
  },
  {
    id: 142,
    category: "Next.js",
    question: "Next.js ichki serverida middleware (oraliq dastur) fayli qayerga joylashtirilishi kerak?",
    options: ["/app papkasi ichiga", "Loyihaning ildiz (root) qismiga", "/public ichiga", "/api ichiga"],
    correctAnswer: "Loyihaning ildiz (root) qismiga"
  },
  {
    id: 143,
    category: "HTML",
    question: "Navigatsiya havolalari blokini ifodalovchi semantik element qaysi?",
    options: ["<nav>", "<links>", "<menu>", "<navbar>"],
    correctAnswer: "<nav>"
  },
  {
    id: 144,
    category: "CSS",
    question: "Grid tizimida elementlar orasidagi masofani (bo'shliqni) belgilash xossasi qaysi?",
    options: ["space", "gap", "margin", "padding"],
    correctAnswer: "gap"
  },
  {
    id: 145,
    category: "JavaScript",
    question: "Satr formatidagi raqamni (masalan '10') butun songa o'tkazuvchi funksiya qaysi?",
    options: ["Number.parseFloat()", "parseInt()", "Math.round()", "String()"],
    correctAnswer: "parseInt()"
  },
  {
    id: 146,
    category: "React",
    question: "Farzand komponentda xatolik yuz berganda butun dastur o'chib qolishini oldini oluvchi maxsus komponent turi nima?",
    options: ["Error Boundary", "Suspense", "StrictMode", "SafetyComponent"],
    correctAnswer: "Error Boundary"
  },
  {
    id: 147,
    category: "TypeScript",
    question: "Mavjud turdan faqat kerakli kalitlarni tanlab olib yangi tur yaratuvchi Utility Type qaysi?",
    options: ["Omit<T, K>", "Pick<T, K>", "Partial<T>", "Exclude<T, U>"],
    correctAnswer: "Pick<T, K>"
  },
  {
    id: 148,
    category: "Next.js",
    question: "Faqat bir marta generatsiya qilinadigan va o'zgarmaydigan sahifalar Next.js-da nima deb ataladi?",
    options: ["Dynamic Pages", "Static Pages (SSG)", "Server Pages", "Hydrated Pages"],
    correctAnswer: "Static Pages (SSG)"
  },
  {
    id: 149,
    category: "HTML",
    question: "Matn ichidagi muhim joylarni sariq rang bilan ajratib (highlight) ko'rsatuvchi teg qaysi?",
    options: ["<yellow>", "<strong>", "<mark>", "<highlight>"],
    correctAnswer: "<mark>"
  },
  {
    id: 150,
    category: "CSS",
    question: "Elementning bo'yini brauzer oynasining to'liq balandligiga tenglashtirish o'lchov birligi qaysi?",
    options: ["100%", "100vh", "100vw", "100em"],
    correctAnswer: "100vh"
  },
  {
    id: 151,
    category: "JavaScript",
    question: "Har qanday takrorlanuvchi elementlardan faqat unikal (unikal qiymatli) to'plam yaratuvchi obyekt turi qaysi?",
    options: ["Map", "Set", "Array", "Dictionary"],
    correctAnswer: "Set"
  },
  {
    id: 152,
    category: "React",
    question: "Asinxron yuklanayotgan komponent tayyor bo'lguncha 'Loading...' UI ko'rsatib turuvchi React komponenti qaysi?",
    options: ["Error Boundary", "Fallback", "Suspense", "Lazy"],
    correctAnswer: "Suspense"
  },
  {
    id: 153,
    category: "TypeScript",
    question: "Mavjud turdan ko'rsatilgan xossalarni olib tashlab (o'chirib) yangi tur yaratuvchi Utility Type qaysi?",
    options: ["Pick<T, K>", "Omit<T, K>", "Partial<T>", "Extract<T, U>"],
    correctAnswer: "Omit<T, K>"
  },
  {
    id: 154,
    category: "Next.js",
    question: "Next.js-da uchinchi tomon scriptlarini (masalan, Google Analytics) xavfsiz yuklash komponenti qaysi?",
    options: ["<script>", "<NextScript>", "<Script>", "<Analytics>"],
    correctAnswer: "<Script>"
  },
  {
    id: 155,
    category: "HTML",
    question: "Rasm ustiga sichqoncha olib borilganda chiquvchi eslatma matn atributi qaysi?",
    options: ["alt", "title", "src", "hover"],
    correctAnswer: "title"
  },
  {
    id: 156,
    category: "CSS",
    question: "Element orqasidagi fonni xira (blur) qilish uchun qaysi CSS xossasi ishlatiladi?",
    options: ["filter", "backdrop-filter", "background-blur", "opacity"],
    correctAnswer: "backdrop-filter"
  },
  {
    id: 157,
    category: "JavaScript",
    question: "Tashqi funksiya o'zgaruvchilarini ichki funksiya eslab qolishi va ishlata olish xususiyati nima deyiladi?",
    options: ["Hoisting", "Closure", "Recursion", "Scope Link"],
    correctAnswer: "Closure"
  },
  {
    id: 158,
    category: "React",
    question: "Faqat bir marta, komponent birinchi marta ekranga chiqqanda ishlaydigan useEffect-ning dependency massivi qanday bo'ladi?",
    options: ["Hech narsa yozilmaydi (massivsiz)", "Bo'sh massiv keltiriladi []", "[true]", "[null]"],
    correctAnswer: "Bo'sh massiv keltiriladi []"
  },
  {
    id: 159,
    category: "TypeScript",
    question: "TypeScript sozlamalari va qoidalari qaysi faylda boshqariladi?",
    options: ["package.json", "tsconfig.json", "webpack.config.js", "types.d.ts"],
    correctAnswer: "tsconfig.json"
  },
  {
    id: 160,
    category: "Next.js",
    question: "Next.js App Router-da muayyan papka ichidagi sahifaga tegishli shaxsiy 404 xatolik UI fayli qanday nomlanadi?",
    options: ["404.js", "error.js", "not-found.jsx", "missing.js"],
    correctAnswer: "not-found.jsx"
  },
  {
    id: 161,
    category: "HTML",
    question: "Veb-sahifadagi matnli paragraflarni ifodalash uchun qaysi teg ishlatiladi?",
    options: ["<text>", "<p>", "<para>", "<span>"],
    correctAnswer: "<p>"
  },
  {
    id: 162,
    category: "CSS",
    question: "Element ichidagi matnni to'liq o'ng tomonga tekislash qiymati qaysi?",
    options: ["text-align: left", "text-align: center", "text-align: right", "text-align: justify"],
    correctAnswer: "text-align: right"
  },
  {
    id: 163,
    category: "JavaScript",
    question: "O'zgaruvchilar va funksiyalarni e'lon qilinishidan oldin kod tepasiga 'ko'tarilish' effekti nima deyiladi?",
    options: ["Hoisting", "Closure", "Bubbling", "Capturing"],
    correctAnswer: "Hoisting"
  },
  {
    id: 164,
    category: "React",
    question: "Ko'p marta qayta render bo'ladigan oddiy komponent ishini optimallashtirish uchun uni qaysi funksiya bilan o'raymiz?",
    options: ["useMemo", "React.memo()", "useCallback", "useRef"],
    correctAnswer: "React.memo()"
  },
  {
    id: 165,
    category: "TypeScript",
    question: "Faqat e'lon qilingan dastlabki qiymatlaridan kelib chiqib, o'zgaruvchi turini avtomatik aniqlash mexanizmi nima?",
    options: ["Type Inference", "Type Assertion", "Type Casting", "Generics"],
    correctAnswer: "Type Inference"
  },
  {
    id: 166,
    category: "Next.js",
    question: "Next.js-da qidiruv tizimi botlari (SEO) uchun sayt xaritasini yaratuvchi maxsus dynamic fayl qanday nomlanadi?",
    options: ["robots.txt", "sitemap.js (yoki sitemap.ts)", "seo.config.js", "map.xml"],
    correctAnswer: "sitemap.js (yoki sitemap.ts)"
  },
  {
    id: 167,
    category: "HTML",
    question: "Kursiv (yotiq) matn hosil qilish uchun qaysi semantik teg to'g'ri hisoblanadi?",
    options: ["<i>", "<italic>", "<em>", "<under>"],
    correctAnswer: "<em>"
  },
  {
    id: 168,
    category: "CSS",
    question: "Elementning minimal balandligini belgilovchi CSS xossasi qaysi?",
    options: ["height", "max-height", "min-height", "auto-height"],
    correctAnswer: "min-height"
  },
  {
    id: 169,
    category: "JavaScript",
    question: "Hodisa (event) eng chuqurdagi elementdan boshlanib tepaga qarab otilib chiqishi nima deyiladi?",
    options: ["Event Capturing", "Event Bubbling", "Event Tunneling", "Event Propagation"],
    correctAnswer: "Event Bubbling"
  },
  {
    id: 170,
    category: "React",
    question: "React-da bir xil darajadagi ikki komponent o'rtasida ma'lumot almashish uchun state qayerga ko'tariladi?",
    options: ["Global oynaga (window)", "Ularning umumiy ota (parent) komponentiga", "LocalStorage-ga", "Hech qayerga"],
    correctAnswer: "Ularning umumiy ota (parent) komponentiga"
  },
  {
    id: 171,
    category: "TypeScript",
    question: "Mavjud turning hamma xossalarini majburiy (required) qilib beruvchi Utility Type qaysi?",
    options: ["Partial<T>", "Required<T>", "Readonly<T>", "NonNullable<T>"],
    correctAnswer: "Required<T>"
  },
  {
    id: 172,
    category: "Next.js",
    question: "Next.js App Router-da URL-dagi query parametrlarni (masalan ?search=react) o'qish uchun qaysi Hook ishlatiladi?",
    options: ["useParams()", "useSearchParams()", "usePathname()", "useRouter()"],
    correctAnswer: "useSearchParams()"
  },
  {
    id: 173,
    category: "HTML",
    question: "HTML-da uzun chiziq (horizontal rule) tashlash tegi qaysi?",
    options: ["<line>", "<br>", "<hr>", "<border>"],
    correctAnswer: "<hr>"
  },
  {
    id: 174,
    category: "CSS",
    question: "Element joylashuvini o'zgartirmasdan uni biroz surish yoki aylantirish uchun qaysi xossa qulay?",
    options: ["position", "transform", "transition", "animation"],
    correctAnswer: "transform"
  },
  {
    id: 175,
    category: "JavaScript",
    question: "Forma yuborilganda brauzer sahifasining qayta yangilanib ketishini to'xtatuvchi metod qaysi?",
    options: ["e.stopPropagation()", "e.preventDefault()", "e.clear()", "return false"],
    correctAnswer: "e.preventDefault()"
  },
  {
    id: 176,
    category: "React",
    question: "React-da JSX ichida JavaScript kodlarini yoki o'zgaruvchilarni yozish uchun qaysi qavslardan foydalaniladi?",
    options: ["()", "[]", "{}", "<>"],
    correctAnswer: "{}"
  },
  {
    id: 177,
    category: "TypeScript",
    question: "Noma'lum obyektdagi xossalarga murojaat qilganda xatolikni oldini oluvchi xavfsiz zanjir operatori qaysi?",
    options: ["obj.prop", "obj?.prop", "obj!!prop", "obj&&prop"],
    correctAnswer: "obj?.prop"
  },
  {
    id: 178,
    category: "Next.js",
    question: "Next.js App Router tizimida joriy sahifaning URL yo'lini (path) olish uchun qaysi Hook ishlatiladi?",
    options: ["useRouter()", "useSearchParams()", "usePathname()", "useParams()"],
    correctAnswer: "usePathname()"
  },
  {
    id: 179,
    category: "HTML",
    question: "Jadval qatorini (table row) ifodalovchi HTML tegi qaysi?",
    options: ["<td>", "<th>", "<tr>", "<table>"],
    correctAnswer: "<tr>"
  },
  {
    id: 180,
    category: "CSS",
    question: "Flexbox-da elementlarni yordamchi o'q (cross axis - vertikal) bo'ylab tekislash xossasi qaysi?",
    options: ["justify-content", "align-items", "flex-direction", "justify-items"],
    correctAnswer: "align-items"
  },
  {
    id: 181,
    category: "JavaScript",
    question: "Obyektdan nusxa olganda uning ichki obyektlarini ham to'liq yangi xotiraga nusxalash (deep clone) uchun zamonaviy global metod qaysi?",
    options: ["Object.assign()", "{...obj}", "structuredClone(obj)", "JSON.stringify()"],
    correctAnswer: "structuredClone(obj)"
  },
  {
    id: 182,
    category: "React",
    question: "Komponentning ichiga ochilgan kontentlarni (ya'ni <Comp>Kontent</Comp>) tutib olish props nomi nima?",
    options: ["innerHTML", "children", "content", "subComponents"],
    correctAnswer: "children"
  },
  {
    id: 183,
    category: "TypeScript",
    question: "O'zgaruvchi faqat belgilangan aniq string qiymatlarini qabul qila olish xususiyati nima deyiladi?",
    options: ["Literal Types", "Enum Types", "Any Types", "String Assertions"],
    correctAnswer: "Literal Types"
  },
  {
    id: 184,
    category: "Next.js",
    question: "Next.js-da dynamic router parametrlarini (masalan, /post/[id] dagi id ni) olish uchun qaysi Hook ishlatiladi?",
    options: ["useSearchParams()", "usePathname()", "useParams()", "useRouter()"],
    correctAnswer: "useParams()"
  },
  {
    id: 185,
    category: "HTML",
    question: "Jadvalning oddiy ma'lumot katakchasini (table data) ifodalovchi teg qaysi?",
    options: ["<tr>", "<th>", "<td>", "<cell>"],
    correctAnswer: "<td>"
  },
  {
    id: 186,
    category: "CSS",
    question: "Elementning ko'rinish silliqligini, o'zgarish vaqtini (duration) boshqarish xossasi qaysi?",
    options: ["animation", "transform", "transition", "display"],
    correctAnswer: "transition"
  },
  {
    id: 187,
    category: "JavaScript",
    question: "Ketma-ket chaqirilayotgan funksiyalarni kechiktirib, faqat eng oxirgisini bajarish (masalan input qidiruvda) texnikasi nima deyiladi?",
    options: ["Throttling", "Debouncing", "Closure", "Hoisting"],
    correctAnswer: "Debouncing"
  },
  {
    id: 188,
    category: "React",
    question: "React-da bir xil turdagi elementlar ro'yxatini render qilganda key atributi berilmasa nima sodir bo'ladi?",
    options: ["Dastur butunlay to'xtaydi", "React konsolda ogohlantirish (warning) beradi va ishni davom ettiradi", "Elementlar ko'rinmay qoladi", "Hech narsa bo'lmaydi"],
    correctAnswer: "React konsolda ogohlantirish (warning) beradi va ishni davom ettiradi"
  },
  {
    id: 189,
    category: "TypeScript",
    question: "TypeScript-da massiv e'lon qilishning to'g'ri sintaksisini ko'rsating.",
    options: ["let arr: Array<number> = [1,2]", "let arr: number[] = [1,2]", "Ikkala javob ham to'g'ri", "let arr: [number] = [1,2]"],
    correctAnswer: "Ikkala javob ham to'g'ri"
  },
  {
    id: 190,
    category: "Next.js",
    question: "Next.js dasturlarida sayt qidiruv botlarini boshqarish qoidalari qaysi maxsus faylda dynamic yoziladi?",
    options: ["robots.js (yoki robots.ts)", "sitemap.js", "seo.json", "index.js"],
    correctAnswer: "robots.js (yoki robots.ts)"
  },
  {
    id: 191,
    category: "HTML",
    question: "Tartiblanmagan (nuqtalik) ro'yxat yaratish uchun qaysi teg ishlatiladi?",
    options: ["<ol>", "<ul>", "<li>", "<list>"],
    correctAnswer: "<ul>"
  },
  {
    id: 192,
    category: "CSS",
    question: "Elementni uning ota elementiga (parent) nisbatan mutloq markazga olishning eng qisqa zamonaviy yo'li qaysi?",
    options: ["margin: auto", "display: grid; place-items: center;", "float: center", "position: absolute; left: 50%"],
    correctAnswer: "display: grid; place-items: center;"
  },
  {
    id: 193,
    category: "JavaScript",
    question: "JavaScript-da asinxron so'rovlar yuborish (API bilan ishlash) uchun o'rnatilgan global zamonaviy metod qaysi?",
    options: ["XMLHttpRequest()", "fetch()", "axios()", "ajax()"],
    correctAnswer: "fetch()"
  },
  {
    id: 194,
    category: "React",
    question: "React-da fragment yaratish (ortiqcha div-larsiz elementlarni o'rash) uchun qaysi sintaksis ishlatiladi?",
    options: ["<fragment></fragment>", "<></>", "<div></div>", "[]"],
    correctAnswer: "<></>"
  },
  {
    id: 195,
    category: "TypeScript",
    question: "Obyektdagi ma'lum bir xossa turini uning kaliti orqali aniqlash (Indexed Access Type, masalan T['id']) nima deyiladi?",
    options: ["Lookup Types", "Union Types", "Tuple Types", "Mapped Types"],
    correctAnswer: "Lookup Types"
  },
  {
    id: 196,
    category: "Next.js",
    question: "Next.js loyihasida global CSS fayli (masalan globals.css) odatda qayerda import qilinadi?",
    options: ["Faqat page.js ichida", "Root Layout (layout.js) ichida", "next.config.js ichida", "Hech qayerda, brauzer o'zi taniydi"],
    correctAnswer: "Root Layout (layout.js) ichida"
  },
  {
    id: 197,
    category: "HTML",
    question: "Sayt foydalanuvchilaridan ma'lumot qabul qilish uchun qaysi umumiy teg ishlatiladi?",
    options: ["<form>", "<input>", "<select>", "Barcha javoblar to'g'ri"],
    correctAnswer: "Barcha javoblar to'g'ri"
  },
  {
    id: 198,
    category: "CSS",
    question: "Sichqoncha bilan elementni bosganda uning atrofida chiquvchi ko'k chiziq (asosan inputlarda focus bo'lganda) nima deyiladi?",
    options: ["border", "outline", "shadow", "margin"],
    correctAnswer: "outline"
  },
  {
    id: 199,
    category: "JavaScript",
    question: "Massiv elementlarini belgilangan belgi (masalan chiziqcha) orqali birlashtirib, bitta String qilib beruvchi metod qaysi?",
    options: ["split()", "join()", "concat()", "slice()"],
    correctAnswer: "join()"
  },
  {
    id: 200,
    category: "React",
    question: "React loyihasini yaratish va uning dastlabki skeletini tezkor yig'ib berish uchun hozirda qaysi zamonaviy build tool eng ommabop?",
    options: ["Webpack", "Vite", "CRA (Create React App)", "Gulp"],
    correctAnswer: "Vite"
  }
];

export default quizData;