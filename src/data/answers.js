const answers = [
  {
    id: 1,
    category: "HTML",
    answer: "HTML (HyperText Markup Language) web sahifaning strukturasi va tarkibini yaratish uchun ishlatiladigan belgilash tilidir."
  },
  {
    id: 2,
    category: "HTML",
    answer: "HTML5 yangi semantic teglar, audio, video, canvas, localStorage va boshqa zamonaviy imkoniyatlarni qo'shgan."
  },
  {
    id: 3,
    category: "HTML",
    answer: "Semantic teglar elementning ma'nosini bildiradi. Masalan: header, nav, main, section, article, footer."
  },
  {
    id: 4,
    category: "HTML",
    answer: "div block element hisoblanadi, span esa inline element hisoblanadi."
  },
  {
    id: 5,
    category: "HTML",
    answer: "DOCTYPE brauzerga hujjat HTML5 standartida yozilganini bildiradi."
  },
  {
    id: 6,
    category: "HTML",
    answer: "id yagona element uchun ishlatiladi, class esa bir nechta elementlarga berilishi mumkin."
  },
  {
    id: 7,
    category: "HTML",
    answer: "Meta teglar sahifa haqida ma'lumot beradi. Masalan charset, description va viewport."
  },
  {
    id: 8,
    category: "HTML",
    answer: "title, meta description, header, main, article va alt atributi SEO uchun muhim hisoblanadi."
  },
  {
    id: 9,
    category: "HTML",
    answer: "Form foydalanuvchidan ma'lumot olish uchun ishlatiladi."
  },
  {
    id: 10,
    category: "HTML",
    answer: "label input bilan bog'lanib foydalanuvchi uchun qulaylik va accessibility yaratadi."
  },
  {
    id: 11,
    category: "CSS",
    answer: "CSS (Cascading Style Sheets) web sahifani bezash va dizayn berish uchun ishlatiladi."
  },
  {
    id: 12,
    category: "CSS",
    answer: "Inline CSS element ichida yoziladi, Internal CSS style tegida yoziladi, External CSS esa alohida .css faylda saqlanadi."
  },
  {
    id: 13,
    category: "CSS",
    answer: "Selector qaysi elementga style berilishini aniqlaydi."
  },
  {
    id: 14,
    category: "CSS",
    answer: "Specificity bir nechta selector mavjud bo'lganda qaysi biri ustunligini aniqlaydi."
  },
  {
    id: 15,
    category: "CSS",
    answer: "Block element yangi qatordan boshlanadi, inline esa faqat o'zining hajmini egallaydi."
  },
  {
    id: 16,
    category: "CSS",
    answer: "inline-block inline kabi joylashadi, lekin width va height berish mumkin."
  },
  {
    id: 17,
    category: "CSS",
    answer: "display:none elementni butunlay yashiradi. visibility:hidden esa joyini saqlagan holda yashiradi."
  },
  {
    id: 18,
    category: "CSS",
    answer: "Flexbox elementlarni bir o'lchamli (qator yoki ustun) joylashtirish tizimidir."
  },
  {
    id: 19,
    category: "CSS",
    answer: "justify-content elementlarni asosiy o'q bo'yicha joylashtiradi."
  },
  {
    id: 20,
    category: "CSS",
    answer: "align-items elementlarni ikkinchi o'q bo'yicha tekislaydi."
  },
  {
    id: 21,
    category: "CSS",
    answer: "CSS Grid ikki o'lchamli layout yaratish tizimidir."
  },
  {
    id: 22,
    category: "CSS",
    answer: "static, relative, absolute, fixed va sticky position turlari mavjud."
  },
  {
    id: 23,
    category: "CSS",
    answer: "z-index elementlarning ustma-ust joylashish tartibini belgilaydi."
  },
  {
    id: 24,
    category: "CSS",
    answer: "Media Query ekran o'lchamiga qarab turli style qo'llash imkonini beradi."
  },
  {
    id: 25,
    category: "CSS",
    answer: "Responsive Design saytni telefon, planshet va kompyuter ekranlariga moslashtirish usulidir."
  },
{
    id:26,
    category:"JavaScript",
    answer:"JavaScript web sahifaga interaktivlik qo'shish uchun ishlatiladigan dasturlash tilidir."
},
{
    id:27,
    category:"JavaScript",
    answer:"ECMAScript JavaScript standartidir. JavaScript esa shu standart asosida yaratilgan til hisoblanadi."
},
{
    id:28,
    category:"JavaScript",
    answer:"String, Number, Boolean, Null, Undefined, Symbol va BigInt primitive data type hisoblanadi."
},
{
    id:29,
    category:"JavaScript",
    answer:"Object, Array, Function va boshqa murakkab ma'lumotlar Reference Data Type hisoblanadi."
},
{
    id:30,
    category:"JavaScript",
    answer:"var eski usul bo'lib function scope ishlatadi. let va const block scope ishlatadi. const qayta qiymat olmaydi."
},
{
    id:31,
    category:"JavaScript",
    answer:"Hoisting — o'zgaruvchi va funksiyalarni kod bajarilishidan oldin xotiraga ko'tarish jarayonidir."
},
{
    id:32,
    category:"JavaScript",
    answer:"Scope — o'zgaruvchining qayerdan foydalanish mumkinligini bildiradi."
},
{
    id:33,
    category:"JavaScript",
    answer:"Global Scope da e'lon qilingan o'zgaruvchidan istalgan joyda foydalanish mumkin."
},
{
    id:34,
    category:"JavaScript",
    answer:"Local Scope faqat ma'lum blok yoki funksiya ichida ishlaydi."
},
{
    id:35,
    category:"JavaScript",
    answer:"Function Declaration function kalit so'zi orqali yaratiladigan oddiy funksiyadir."
},
{
    id:36,
    category:"JavaScript",
    answer:"Function Expression o'zgaruvchiga funksiyani saqlash orqali yaratiladi."
},
{
    id:37,
    category:"JavaScript",
    answer:"Arrow Function ES6 da qo'shilgan qisqa yoziladigan funksiyadir va this bilan ishlashi oddiy funksiyadan farq qiladi."
},
{
    id:38,
    category:"JavaScript",
    answer:"Anonymous Function nomga ega bo'lmagan funksiyadir."
},
{
    id:39,
    category:"JavaScript",
    answer:"Callback Function boshqa funksiyaga argument sifatida uzatiladigan funksiyadir."
},
{
    id:40,
    category:"JavaScript",
    answer:"Closure — ichki funksiyaning tashqi funksiyadagi o'zgaruvchilarga murojaat qila olish xususiyatidir."
},
{
    id:41,
    category:"JavaScript",
    answer:"Object kalit-qiymat (key-value) ko'rinishida ma'lumot saqlaydi."
},
{
    id:42,
    category:"JavaScript",
    answer:"Array tartiblangan ma'lumotlar to'plamidir."
},
{
    id:43,
    category:"JavaScript",
    answer:"for indeks bilan ishlaydi, for...of esa elementlarning o'zini qaytaradi."
},
{
    id:44,
    category:"JavaScript",
    answer:"forEach() massiv elementlarini birma-bir aylanish uchun ishlatiladi va yangi array qaytarmaydi."
},
{
    id:45,
    category:"JavaScript",
    answer:"map() massivni aylantirib yangi array hosil qiladi."
},
{
    id:46,
    category:"JavaScript",
    answer:"filter() shartga mos elementlardan yangi massiv hosil qiladi."
},
{
    id:47,
    category:"JavaScript",
    answer:"find() shartga mos kelgan birinchi elementni qaytaradi."
},
{
    id:48,
    category:"JavaScript",
    answer:"reduce() massiv elementlarini bitta qiymatga yig'ish uchun ishlatiladi."
},
{
    id:49,
    category:"JavaScript",
    answer:"Template Literal backtick (` `) yordamida yoziladi va ${} orqali qiymatlarni joylashtirish imkonini beradi."
},
{
    id:50,
    category:"JavaScript",
    answer:"Destructuring object va array ichidagi qiymatlarni qulay ajratib olish usulidir."
},
{
    id:51,
    category:"JavaScript",
    answer:"Spread Operator (...) array yoki object elementlarini yoyish uchun ishlatiladi."
},
{
    id:52,
    category:"JavaScript",
    answer:"Rest Operator (...) bir nechta qiymatlarni bitta array ko'rinishida yig'adi."
},
{
    id:53,
    category:"JavaScript",
    answer:"Default Parameters funksiya parametriga standart qiymat berish imkonini beradi."
},
{
    id:54,
    category:"JavaScript",
    answer:"Optional Chaining (?.) mavjud bo'lmagan property ga murojaat qilganda xato bermaydi."
},
{
    id:55,
    category:"JavaScript",
    answer:"Nullish Coalescing (??) faqat null yoki undefined bo'lsa, o'ng tomondagi qiymatni qaytaradi."
},
{
    id:56,
    category:"JavaScript",
    answer:"Promise asinxron operatsiya natijasini ifodalovchi obyektdir."
},
{
    id:57,
    category:"JavaScript",
    answer:"Promise uchta holatga ega: Pending, Fulfilled va Rejected."
},
{
    id:58,
    category:"JavaScript",
    answer:"async funksiyani asinxron qiladi, await esa Promise bajarilishini kutadi."
},
{
    id:59,
    category:"JavaScript",
    answer:"Fetch API server bilan HTTP so'rov yuborish uchun ishlatiladi."
},
{
    id:60,
    category:"JavaScript",
    answer:"JSON — ma'lumot almashish uchun ishlatiladigan yengil format."
},
{
    id:61,
    category:"JavaScript",
    answer:"JSON.stringify() objectni JSON satriga aylantiradi."
},
{
    id:62,
    category:"JavaScript",
    answer:"JSON.parse() JSON satrini JavaScript obyektiga aylantiradi."
},
{
    id:63,
    category:"JavaScript",
    answer:"DOM — HTML hujjatining dastur orqali boshqariladigan daraxt ko'rinishidir."
},
{
    id:64,
    category:"JavaScript",
    answer:"BOM — Browser Object Model bo'lib, brauzer obyektlari bilan ishlash imkonini beradi."
},
{
    id:65,
    category:"JavaScript",
    answer:"document.querySelector() CSS selector orqali birinchi mos elementni tanlaydi."
},
{
    id:66,
    category:"JavaScript",
    answer:"addEventListener() elementga hodisa (event) biriktirish uchun ishlatiladi."
},
{
    id:67,
    category:"JavaScript",
    answer:"Event Bubbling hodisaning ichki elementdan tashqi elementga tarqalishidir."
},
{
    id:68,
    category:"JavaScript",
    answer:"Event Capturing hodisaning tashqi elementdan ichki elementga o'tishidir."
},
{
    id:69,
    category:"JavaScript",
    answer:"Event Delegation ota elementga bitta event qo'shib, ichki elementlarni boshqarish usulidir."
},
{
    id:70,
    category:"JavaScript",
    answer:"localStorage ma'lumotni brauzerda muddatsiz saqlaydi."
},
{
    id:71,
    category:"JavaScript",
    answer:"sessionStorage ma'lumotni brauzer oynasi yopilguncha saqlaydi."
},
{
    id:72,
    category:"JavaScript",
    answer:"Cookie foydalanuvchi haqidagi kichik hajmdagi ma'lumotni brauzerda saqlaydi."
},
{
    id:73,
    category:"JavaScript",
    answer:"setTimeout() berilgan vaqtdan keyin funksiyani bir marta ishga tushiradi."
},
{
    id:74,
    category:"JavaScript",
    answer:"setInterval() funksiyani ma'lum vaqt oralig'ida takrorlab bajaradi."
},
{
    id:75,
    category:"JavaScript",
    answer:"Event Loop Call Stack va Callback Queue ni boshqarib, JavaScriptning asinxron ishlashini ta'minlaydi."
},
{
    id:76,
    category:"React",
    answer:"React — user interface yaratish uchun ishlatiladigan JavaScript library."
},
{
    id:77,
    category:"React",
    answer:"SPA — Single Page Application bo‘lib, sahifa reload qilinmasdan ishlaydi."
},
{
    id:78,
    category:"React",
    answer:"JSX — JavaScript ichida HTMLga o‘xshash kod yozish imkonini beruvchi syntax."
},
{
    id:79,
    category:"React",
    answer:"Component — UI ning qayta ishlatiladigan bo‘lagi."
},
{
    id:80,
    category:"React",
    answer:"Functional component — oddiy JavaScript function orqali yozilgan React component."
},
{
    id:81,
    category:"React",
    answer:"Class component — ES6 class orqali yaratilgan React component turi."
},
{
    id:82,
    category:"React",
    answer:"Props — parent componentdan child componentga ma'lumot uzatish uchun ishlatiladi."
},
{
    id:83,
    category:"React",
    answer:"State — component ichidagi o‘zgaruvchan ma'lumot."
},
{
    id:84,
    category:"React",
    answer:"useState — functional componentda state yaratish uchun ishlatiladigan hook."
},
{
    id:85,
    category:"React",
    answer:"useEffect — side effectlarni (API call, DOM update) boshqarish uchun ishlatiladi."
},
{
    id:86,
    category:"React",
    answer:"useRef — DOM element yoki qiymatni saqlab turish uchun ishlatiladi."
},
{
    id:87,
    category:"React",
    answer:"useMemo — hisoblashni optimizatsiya qilib, natijani cache qiladi."
},
{
    id:88,
    category:"React",
    answer:"useCallback — funksiyani cache qilib, qayta renderni kamaytiradi."
},
{
    id:89,
    category:"React",
    answer:"Controlled component — form elementlari React state orqali boshqariladigan komponent."
},
{
    id:90,
    category:"React",
    answer:"Uncontrolled component — form elementlari DOM orqali boshqariladigan komponent."
},
{
    id:91,
    category:"React",
    answer:"Conditional rendering — shart asosida UI ni ko‘rsatish yoki yashirish."
},
{
    id:92,
    category:"React",
    answer:"List va key Reactda ro‘yxat render qilish va har bir elementni identifikatsiya qilish uchun kerak."
},
{
    id:93,
    category:"React",
    answer:"React Router — sahifalar orasida navigatsiya qilish uchun ishlatiladi."
},
{
    id:94,
    category:"React",
    answer:"useNavigate — kod orqali route o‘zgartirish uchun hook."
},
{
    id:95,
    category:"React",
    answer:"Context API — global state boshqarish uchun ishlatiladi."
},
{
    id:96,
    category:"React",
    answer:"Redux — katta ilovalarda state management qilish uchun library."
},
{
    id:97,
    category:"React",
    answer:"Virtual DOM — real DOM ning yengil nusxasi bo‘lib, performance uchun ishlatiladi."
},
{
    id:98,
    category:"React",
    answer:"Reconciliation — React eski va yangi Virtual DOM ni solishtirish jarayoni."
},
{
    id:99,
    category:"React",
    answer:"Fragment — qo‘shimcha div ishlatmasdan bir nechta elementni guruhlash."
},
{
    id:100,
    category:"React",
    answer:"React lifecycle — componentning yaratish, update va yo‘q qilish bosqichlari."
},
{
  id: 101,
  category: "JavaScript",
  answer: "Debouncing — funksiyani faqat oxirgi harakatdan keyin ma'lum vaqt o‘tgach ishga tushirish usuli."
},
{
  id: 102,
  category: "JavaScript",
  answer: "Throttling — funksiyani ma'lum vaqt oralig‘ida faqat bir marta bajarish usuli."
},
{
  id: 103,
  category: "JavaScript",
  answer: "Debounce oxirgi actiondan keyin ishlaydi, throttle esa vaqt oralig‘ida cheklab ishlaydi."
},
{
  id: 104,
  category: "JavaScript",
  answer: "Strict mode JavaScriptda xatolarni kamaytirish va xavfsiz kod yozish rejimidir."
},
{
  id: 105,
  category: "JavaScript",
  answer: "`this` — funksiyaning qaysi objectga tegishli ekanini bildiradi."
},
{
  id: 106,
  category: "JavaScript",
  answer: "call va apply darhol chaqiradi, bind esa yangi funksiya qaytaradi."
},
{
  id: 107,
  category: "JavaScript",
  answer: "Prototype — objectlar o‘z xususiyatlarini meros qilib oladigan mexanizm."
},
{
  id: 108,
  category: "JavaScript",
  answer: "Prototypal inheritance — object boshqa objectdan meros olish tizimi."
},
{
  id: 109,
  category: "JavaScript",
  answer: "Event loop async kodlarni call stack va queue orqali boshqaradi."
},
{
  id: 110,
  category: "JavaScript",
  answer: "Microtask (Promise) macrotaskdan oldin bajariladi."
},

{
  id: 111,
  category: "TypeScript",
  answer: "TypeScript — JavaScriptga type qo‘shilgan kuchli til."
},
{
  id: 112,
  category: "TypeScript",
  answer: "Interface object strukturani, type esa umumiy tiplarni belgilaydi."
},
{
  id: 113,
  category: "TypeScript",
  answer: "Union type bir nechta type qabul qilish imkonini beradi."
},
{
  id: 114,
  category: "TypeScript",
  answer: "Any type har qanday qiymatni qabul qiladi (type safety yo‘q)."
},
{
  id: 115,
  category: "TypeScript",
  answer: "Generic qayta ishlatiladigan type yaratish imkonini beradi."
},
{
  id: 116,
  category: "TypeScript",
  answer: "Enum — oldindan belgilangan qiymatlar to‘plami."
},
{
  id: 117,
  category: "TypeScript",
  answer: "Type assertion — compilerga type ni aniq ko‘rsatish."
},
{
  id: 118,
  category: "TypeScript",
  answer: "Optional property '?' bilan belgilanadi va majburiy emas."
},
{
  id: 119,
  category: "TypeScript",
  answer: "Never type hech qachon qaytmaydigan funksiyalar uchun."
},
{
  id: 120,
  category: "TypeScript",
  answer: "Unknown type xavfsiz any hisoblanadi."
},

{
  id: 121,
  category: "React",
  answer: "useReducer — murakkab state logikasini boshqarish hooki."
},
{
  id: 122,
  category: "React",
  answer: "React.memo componentni unnecessary renderdan saqlaydi."
},
{
  id: 123,
  category: "React",
  answer: "Hydration — SSR HTMLni React bilan faollashtirish jarayoni."
},
{
  id: 124,
  category: "React",
  answer: "SSR — serverda render qilish usuli."
},
{
  id: 125,
  category: "React",
  answer: "CSR — browserda render qilish usuli."
},
{
  id: 126,
  category: "React",
  answer: "Next.js — React framework SSR va routing bilan."
},
{
  id: 127,
  category: "React",
  answer: "getServerSideProps — har requestda serverda data olish."
},
{
  id: 128,
  category: "React",
  answer: "getStaticProps — build vaqtida data olish."
},
{
  id: 129,
  category: "React",
  answer: "useRouter routing bilan ishlash hooki."
},
{
  id: 130,
  category: "React",
  answer: "Error Boundary Reactda xatolarni ushlab qoladi."
},

{
  id: 131,
  category: "HTML",
  answer: "iframe boshqa web sahifani ichiga joylash uchun ishlatiladi."
},
{
  id: 132,
  category: "HTML",
  answer: "audio/video media fayllarni qo‘shish uchun ishlatiladi."
},
{
  id: 133,
  category: "HTML",
  answer: "canvas grafik chizish uchun ishlatiladi."
},
{
  id: 134,
  category: "HTML",
  answer: "SVG vector grafiklar uchun ishlatiladi."
},
{
  id: 135,
  category: "HTML",
  answer: "autocomplete form inputni avtomatik to‘ldirish uchun ishlatiladi."
},

{
  id: 136,
  category: "CSS",
  answer: "SCSS — CSS ni kengaytirilgan yozuv turi."
},
{
  id: 137,
  category: "CSS",
  answer: "SASS SCSSdan eski syntax, SCSS esa CSSga yaqin yozuv."
},
{
  id: 138,
  category: "CSS",
  answer: "Mixin qayta ishlatiladigan CSS kod blokidir."
},
{
  id: 139,
  category: "CSS",
  answer: "Nested CSS ichma-ich style yozish imkonini beradi."
},
{
  id: 140,
  category: "CSS",
  answer: "CSS variables dynamic qiymatlar saqlash uchun ishlatiladi."
},

{
  id: 141,
  category: "Tailwind",
  answer: "Tailwind — utility class asosidagi CSS framework."
},
{
  id: 142,
  category: "Tailwind",
  answer: "Utility-first — kichik classlar orqali style berish usuli."
},
{
  id: 143,
  category: "Tailwind",
  answer: "Tailwind config framework sozlamalarini boshqaradi."
},
{
  id: 144,
  category: "Tailwind",
  answer: "Responsive classes sm, md, lg orqali ishlaydi."
},
{
  id: 145,
  category: "Tailwind",
  answer: "Dark mode class yoki media query orqali ishlaydi."
},

{
  id: 146,
  category: "JavaScript",
  answer: "map yangi array qaytaradi, forEach esa qaytarmaydi."
},
{
  id: 147,
  category: "JavaScript",
  answer: "Shallow copy faqat birinchi qatlamni nusxalaydi."
},
{
  id: 148,
  category: "JavaScript",
  answer: "Deep copy barcha ichki objectlarni ham nusxalaydi."
},
{
  id: 149,
  category: "JavaScript",
  answer: "Garbage collection ishlatilmagan memoryni tozalaydi."
},
{
  id: 150,
  category: "JavaScript",
  answer: "Memory leak — ishlatilmayotgan memory tozalanmay qolishi."
},
{
  id: 151,
  category: "JavaScript",
  answer: "IIFE — darhol chaqiriladigan funksiya (Immediately Invoked Function Expression)."
},
{
  id: 152,
  category: "JavaScript",
  answer: "Higher Order Function — funksiyani argument sifatida qabul qiladigan yoki funksiya qaytaradigan funksiya."
},
{
  id: 153,
  category: "JavaScript",
  answer: "Pure function — har doim bir xil input uchun bir xil output qaytaradigan funksiya."
},
{
  id: 154,
  category: "JavaScript",
  answer: "Immutability — ma'lumotni o‘zgartirmasdan yangi copy yaratish prinsipi."
},
{
  id: 155,
  category: "JavaScript",
  answer: "Object.assign() objectlarni birlashtirish yoki copy qilish uchun ishlatiladi."
},
{
  id: 156,
  category: "JavaScript",
  answer: "Array.from() iterable objectdan array yaratadi."
},
{
  id: 157,
  category: "JavaScript",
  answer: "Set — unique qiymatlar saqlaydigan collection."
},
{
  id: 158,
  category: "JavaScript",
  answer: "Map — key-value saqlovchi, har qanday type key bo‘lishi mumkin bo‘lgan object."
},
{
  id: 159,
  category: "JavaScript",
  answer: "WeakMap — garbage collectionga moslashgan Map turi."
},
{
  id: 160,
  category: "JavaScript",
  answer: "WeakSet — faqat objectlarni saqlaydigan Weak collection."
},

{
  id: 161,
  category: "TypeScript",
  answer: "Tuple — har xil type ketma-ket saqlanadigan array."
},
{
  id: 162,
  category: "TypeScript",
  answer: "Type inference — TypeScript avtomatik type aniqlashi."
},
{
  id: 163,
  category: "TypeScript",
  answer: "Type narrowing — umumiy typeni aniqroq typega qisqartirish."
},
{
  id: 164,
  category: "TypeScript",
  answer: "Intersection type — bir nechta typelarni birlashtirish (&)."
},
{
  id: 165,
  category: "TypeScript",
  answer: "Module — kodni alohida fayllarga bo‘lish tizimi."
},
{
  id: 166,
  category: "TypeScript",
  answer: "Namespace — kodni logik guruhlash usuli."
},
{
  id: 167,
  category: "TypeScript",
  answer: "Readonly — qiymatni o‘zgartirib bo‘lmaydigan qilib qo‘yadi."
},
{
  id: 168,
  category: "TypeScript",
  answer: "Utility types — tayyor type helperlar (Partial, Pick va boshqalar)."
},
{
  id: 169,
  category: "TypeScript",
  answer: "Partial — barcha propertylarni optional qiladi."
},
{
  id: 170,
  category: "TypeScript",
  answer: "Pick — objectdan faqat kerakli propertylarni tanlab oladi."
},

{
  id: 171,
  category: "React",
  answer: "React DOM — React komponentlarini real DOMga render qiladi."
},
{
  id: 172,
  category: "React",
  answer: "React Fiber — React rendering engine arxitekturasi."
},
{
  id: 173,
  category: "React",
  answer: "StrictMode — developmentda xatolarni aniqlash uchun rejim."
},
{
  id: 174,
  category: "React",
  answer: "Props drilling — ma'lumotni ko‘p component orqali uzatish muammosi."
},
{
  id: 175,
  category: "React",
  answer: "Lifting state up — state ni parent componentga ko‘tarish."
},
{
  id: 176,
  category: "React",
  answer: "useLayoutEffect — DOM updatedan oldin ishlaydigan effect."
},
{
  id: 177,
  category: "React",
  answer: "useTransition — UI ni bloklamasdan update qilish hooki."
},
{
  id: 178,
  category: "React",
  answer: "Suspense — lazy component loadingni boshqaradi."
},
{
  id: 179,
  category: "React",
  answer: "Lazy loading — componentni kerak bo‘lganda yuklash."
},
{
  id: 180,
  category: "React",
  answer: "Key Reactga elementlarni aniqlash va optimizatsiya uchun kerak."
},

{
  id: 181,
  category: "HTML",
  answer: "Data attribute — HTML elementga custom ma'lumot saqlash uchun ishlatiladi."
},
{
  id: 182,
  category: "HTML",
  answer: "Progress tag — jarayon progressini ko‘rsatadi."
},
{
  id: 183,
  category: "HTML",
  answer: "Meter tag — o‘lchov qiymatini ko‘rsatadi."
},
{
  id: 184,
  category: "HTML",
  answer: "Details/summary — collapsible content yaratadi."
},
{
  id: 185,
  category: "HTML",
  answer: "Fieldset — form elementlarini guruhlash uchun ishlatiladi."
},

{
  id: 186,
  category: "CSS",
  answer: "Box model — content, padding, border, margin strukturasidir."
},
{
  id: 187,
  category: "CSS",
  answer: "Margin tashqi bo‘shliq, padding ichki bo‘shliqdir."
},
{
  id: 188,
  category: "CSS",
  answer: "CSS inheritance — parent style childga o‘tishi."
},
{
  id: 189,
  category: "CSS",
  answer: "Pseudo class — element holatiga qarab style berish (:hover)."
},
{
  id: 190,
  category: "CSS",
  answer: "Pseudo element — element ichki qismini style qilish (::before)."
},

{
  id: 191,
  category: "Tailwind",
  answer: "Spacing system margin/padding uchun oldindan belgilangan qiymatlar."
},
{
  id: 192,
  category: "Tailwind",
  answer: "Flex classes layoutni flex qilib boshqaradi."
},
{
  id: 193,
  category: "Tailwind",
  answer: "Grid system 2D layout yaratish uchun ishlatiladi."
},
{
  id: 194,
  category: "Tailwind",
  answer: "Hover state mouse ustiga borganda style o‘zgarishi."
},
{
  id: 195,
  category: "Tailwind",
  answer: "Plugins Tailwind funksiyalarini kengaytiradi."
},

{
  id: 196,
  category: "Next.js",
  answer: "App Router yangi routing tizimi (app/ folder asosida)."
},
{
  id: 197,
  category: "Next.js",
  answer: "Pages Router eski routing tizimi (pages/ folder)."
},
{
  id: 198,
  category: "Next.js",
  answer: "Server Components serverda render bo‘ladigan componentlar."
},
{
  id: 199,
  category: "Next.js",
  answer: "Client Components browserda ishlaydigan componentlar."
},
{
  id: 200,
  category: "Next.js",
  answer: "API Routes Next.js ichida backend endpoint yaratish imkonini beradi."
}
];

export default answers;