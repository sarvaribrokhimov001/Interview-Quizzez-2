const questions = [
  {
    id: 1,
    category: "HTML",
    question: "HTML nima?"
  },
  {
    id: 2,
    category: "HTML",
    question: "HTML va HTML5 o'rtasidagi asosiy farq nima?"
  },
  {
    id: 3,
    category: "HTML",
    question: "Semantic teglar nima?"
  },
  {
    id: 4,
    category: "HTML",
    question: "<div> va <span> o'rtasidagi farq nima?"
  },
  {
    id: 5,
    category: "HTML",
    question: "DOCTYPE nima uchun kerak?"
  },
  {
    id: 6,
    category: "HTML",
    question: "id va class atributlari o'rtasidagi farq nima?"
  },
  {
    id: 7,
    category: "HTML",
    question: "Meta teglar nima vazifani bajaradi?"
  },
  {
    id: 8,
    category: "HTML",
    question: "SEO uchun muhim HTML teglarini ayting."
  },
  {
    id: 9,
    category: "HTML",
    question: "Form elementi nima vazifani bajaradi?"
  },
  {
    id: 10,
    category: "HTML",
    question: "label tegi nima uchun ishlatiladi?"
  },
  {
    id: 11,
    category: "CSS",
    question: "CSS nima?"
  },
  {
    id: 12,
    category: "CSS",
    question: "Inline, Internal va External CSS farqi nima?"
  },
  {
    id: 13,
    category: "CSS",
    question: "CSS Selector nima?"
  },
  {
    id: 14,
    category: "CSS",
    question: "Specificity nima?"
  },
  {
    id: 15,
    category: "CSS",
    question: "display:block va display:inline farqi nima?"
  },
  {
    id: 16,
    category: "CSS",
    question: "display:inline-block nima?"
  },
  {
    id: 17,
    category: "CSS",
    question: "display:none va visibility:hidden farqi nima?"
  },
  {
    id: 18,
    category: "CSS",
    question: "Flexbox nima?"
  },
  {
    id: 19,
    category: "CSS",
    question: "justify-content nima qiladi?"
  },
  {
    id: 20,
    category: "CSS",
    question: "align-items nima qiladi?"
  },
  {
    id: 21,
    category: "CSS",
    question: "CSS Grid nima?"
  },
  {
    id: 22,
    category: "CSS",
    question: "Position property turlari qaysilar?"
  },
  {
    id: 23,
    category: "CSS",
    question: "z-index nima?"
  },
  {
    id: 24,
    category: "CSS",
    question: "Media Query nima?"
  },
  {
    id: 25,
    category: "CSS",
    question: "Responsive Design nima?"
  },
  {
    id: 26,
    category: "JavaScript",
    question: "JavaScript nima?"
  },
  {
    id: 27,
    category: "JavaScript",
    question: "JavaScript va ECMAScript o'rtasidagi farq nima?"
  },
  {
    id: 28,
    category: "JavaScript",
    question: "Primitive data type lar qaysilar?"
  },
  {
    id: 29,
    category: "JavaScript",
    question: "Reference data type nima?"
  },
  {
    id: 30,
    category: "JavaScript",
    question: "let, const va var o'rtasidagi farq nima?"
  },
  {
    id: 31,
    category: "JavaScript",
    question: "Hoisting nima?"
  },
  {
    id: 32,
    category: "JavaScript",
    question: "Scope nima?"
  },
  {
    id: 33,
    category: "JavaScript",
    question: "Global Scope nima?"
  },
  {
    id: 34,
    category: "JavaScript",
    question: "Local Scope nima?"
  },
  {
    id: 35,
    category: "JavaScript",
    question: "Function Declaration nima?"
  },
  {
    id: 36,
    category: "JavaScript",
    question: "Function Expression nima?"
  },
  {
    id: 37,
    category: "JavaScript",
    question: "Arrow Function nima?"
  },
  {
    id: 38,
    category: "JavaScript",
    question: "Anonymous Function nima?"
  },
  {
    id: 39,
    category: "JavaScript",
    question: "Callback Function nima?"
  },
  {
    id: 40,
    category: "JavaScript",
    question: "Closure nima?"
  },
  {
    id: 41,
    category: "JavaScript",
    question: "Object nima?"
  },
  {
    id: 42,
    category: "JavaScript",
    question: "Array nima?"
  },
  {
    id: 43,
    category: "JavaScript",
    question: "for va for...of farqi nima?"
  },
  {
    id: 44,
    category: "JavaScript",
    question: "forEach() metodi nima qiladi?"
  },
  {
    id: 45,
    category: "JavaScript",
    question: "map() metodi nima qiladi?"
  },
  {
    id: 46,
    category: "JavaScript",
    question: "filter() metodi nima qiladi?"
  },
  {
    id: 47,
    category: "JavaScript",
    question: "find() metodi nima qiladi?"
  },
  {
    id: 48,
    category: "JavaScript",
    question: "reduce() metodi nima qiladi?"
  },
  {
    id: 49,
    category: "JavaScript",
    question: "Template Literal nima?"
  },
  {
    id: 50,
    category: "JavaScript",
    question: "Destructuring nima?"
  },
  {
    id: 51,
    category: "JavaScript",
    question: "Spread Operator (...) nima?"
  },
  {
    id: 52,
    category: "JavaScript",
    question: "Rest Operator (...) nima?"
  },
  {
    id: 53,
    category: "JavaScript",
    question: "Default Parameters nima?"
  },
  {
    id: 54,
    category: "JavaScript",
    question: "Optional Chaining (?.) nima?"
  },
  {
    id: 55,
    category: "JavaScript",
    question: "Nullish Coalescing (??) operatori nima?"
  },
  {
    id: 56,
    category: "JavaScript",
    question: "Promise nima?"
  },
  {
    id: 57,
    category: "JavaScript",
    question: "Promise ning holatlari qaysilar?"
  },
  {
    id: 58,
    category: "JavaScript",
    question: "async va await nima?"
  },
  {
    id: 59,
    category: "JavaScript",
    question: "Fetch API nima?"
  },
  {
    id: 60,
    category: "JavaScript",
    question: "JSON nima?"
  },
  {
    id: 61,
    category: "JavaScript",
    question: "JSON.stringify() nima qiladi?"
  },
  {
    id: 62,
    category: "JavaScript",
    question: "JSON.parse() nima qiladi?"
  },
  {
    id: 63,
    category: "JavaScript",
    question: "DOM nima?"
  },
  {
    id: 64,
    category: "JavaScript",
    question: "BOM nima?"
  },
  {
    id: 65,
    category: "JavaScript",
    question: "document.querySelector() nima qiladi?"
  },
  {
    id: 66,
    category: "JavaScript",
    question: "addEventListener() nima?"
  },
  {
    id: 67,
    category: "JavaScript",
    question: "Event Bubbling nima?"
  },
  {
    id: 68,
    category: "JavaScript",
    question: "Event Capturing nima?"
  },
  {
    id: 69,
    category: "JavaScript",
    question: "Event Delegation nima?"
  },
  {
    id: 70,
    category: "JavaScript",
    question: "localStorage nima?"
  },
  {
    id: 71,
    category: "JavaScript",
    question: "sessionStorage nima?"
  },
  {
    id: 72,
    category: "JavaScript",
    question: "Cookie nima?"
  },
  {
    id: 73,
    category: "JavaScript",
    question: "setTimeout() nima qiladi?"
  },
  {
    id: 74,
    category: "JavaScript",
    question: "setInterval() nima qiladi?"
  },
  {
    id: 75,
    category: "JavaScript",
    question: "Event Loop nima?"
  },
  {
    id: 76,
    category: "React",
    question: "React nima?"
  },
  {
    id: 77,
    category: "React",
    question: "SPA (Single Page Application) nima?"
  },
  {
    id: 78,
    category: "React",
    question: "JSX nima?"
  },
  {
    id: 79,
    category: "React",
    question: "React component nima?"
  },
  {
    id: 80,
    category: "React",
    question: "Functional component nima?"
  },
  {
    id: 81,
    category: "React",
    question: "Class component nima?"
  },
  {
    id: 82,
    category: "React",
    question: "Props nima?"
  },
  {
    id: 83,
    category: "React",
    question: "State nima?"
  },
  {
    id: 84,
    category: "React",
    question: "useState nima?"
  },
  {
    id: 85,
    category: "React",
    question: "useEffect nima?"
  },
  {
    id: 86,
    category: "React",
    question: "useRef nima?"
  },
  {
    id: 87,
    category: "React",
    question: "useMemo nima?"
  },
  {
    id: 88,
    category: "React",
    question: "useCallback nima?"
  },
  {
    id: 89,
    category: "React",
    question: "Controlled component nima?"
  },
  {
    id: 90,
    category: "React",
    question: "Uncontrolled component nima?"
  },
  {
    id: 91,
    category: "React",
    question: "Conditional rendering nima?"
  },
  {
    id: 92,
    category: "React",
    question: "List va key nima uchun kerak?"
  },
  {
    id: 93,
    category: "React",
    question: "React Router nima?"
  },
  {
    id: 94,
    category: "React",
    question: "useNavigate nima?"
  },
  {
    id: 95,
    category: "React",
    question: "Context API nima?"
  },
  {
    id: 96,
    category: "React",
    question: "Redux nima?"
  },
  {
    id: 97,
    category: "React",
    question: "Virtual DOM nima?"
  },
  {
    id: 98,
    category: "React",
    question: "Reconciliation nima?"
  },
  {
    id: 99,
    category: "React",
    question: "Fragment nima?"
  },
  {
    id: 100,
    category: "React",
    question: "React lifecycle nima?"
  },
  {
    id: 101,
    category: "JavaScript",
    question: "Debouncing nima?"
  },
  {
    id: 102,
    category: "JavaScript",
    question: "Throttling nima?"
  },
  {
    id: 103,
    category: "JavaScript",
    question: "Debounce va throttle farqi nima?"
  },
  {
    id: 104,
    category: "JavaScript",
    question: "Strict mode nima?"
  },
  {
    id: 105,
    category: "JavaScript",
    question: "this keyword nima?"
  },
  {
    id: 106,
    category: "JavaScript",
    question: "call(), apply(), bind() farqi nima?"
  },
  {
    id: 107,
    category: "JavaScript",
    question: "Prototype nima?"
  },
  {
    id: 108,
    category: "JavaScript",
    question: "Prototypal inheritance nima?"
  },
  {
    id: 109,
    category: "JavaScript",
    question: "Event loop qanday ishlaydi?"
  },
  {
    id: 110,
    category: "JavaScript",
    question: "Microtask va macrotask farqi nima?"
  },
  {
    id: 111,
    category: "TypeScript",
    question: "TypeScript nima?"
  },
  {
    id: 112,
    category: "TypeScript",
    question: "Type va Interface farqi nima?"
  },
  {
    id: 113,
    category: "TypeScript",
    question: "Union type nima?"
  },
  {
    id: 114,
    category: "TypeScript",
    question: "Any type nima?"
  },
  {
    id: 115,
    category: "TypeScript",
    question: "Generic nima?"
  },
  {
    id: 116,
    category: "TypeScript",
    question: "Enum nima?"
  },
  {
    id: 117,
    category: "TypeScript",
    question: "Type assertion nima?"
  },
  {
    id: 118,
    category: "TypeScript",
    question: "Optional property nima?"
  },
  {
    id: 119,
    category: "TypeScript",
    question: "Never type nima?"
  },
  {
    id: 120,
    category: "TypeScript",
    question: "Unknown type nima?"
  },

  {
    id: 121,
    category: "React",
    question: "useReducer nima?"
  },
  {
    id: 122,
    category: "React",
    question: "React.memo nima?"
  },
  {
    id: 123,
    category: "React",
    question: "Hydration nima?"
  },
  {
    id: 124,
    category: "React",
    question: "SSR nima?"
  },
  {
    id: 125,
    category: "React",
    question: "CSR nima?"
  },
  {
    id: 126,
    category: "React",
    question: "Next.js nima?"
  },
  {
    id: 127,
    category: "React",
    question: "getServerSideProps nima?"
  },
  {
    id: 128,
    category: "React",
    question: "getStaticProps nima?"
  },
  {
    id: 129,
    category: "React",
    question: "useRouter nima?"
  },
  {
    id: 130,
    category: "React",
    question: "Error Boundary nima?"
  },
  {
    id: 131,
    category: "HTML",
    question: "iframe nima?"
  },
  {
    id: 132,
    category: "HTML",
    question: "audio va video teglar nima?"
  },
  {
    id: 133,
    category: "HTML",
    question: "canvas nima?"
  },
  {
    id: 134,
    category: "HTML",
    question: "SVG nima?"
  },
  {
    id: 135,
    category: "HTML",
    question: "autocomplete attribute nima?"
  },
  {
    id: 136,
    category: "CSS",
    question: "SCSS nima?"
  },
  {
    id: 137,
    category: "CSS",
    question: "SASS va SCSS farqi nima?"
  },
  {
    id: 138,
    category: "CSS",
    question: "Mixin nima?"
  },
  {
    id: 139,
    category: "CSS",
    question: "Nested CSS nima?"
  },
  {
    id: 140,
    category: "CSS",
    question: "Variables CSS da nima?"
  },
  {
    id: 141,
    category: "Tailwind",
    question: "Tailwind CSS nima?"
  },
  {
    id: 142,
    category: "Tailwind",
    question: "Utility-first CSS nima?"
  },
  {
    id: 143,
    category: "Tailwind",
    question: "Tailwind config nima?"
  },
  {
    id: 144,
    category: "Tailwind",
    question: "Responsive classes qanday ishlaydi?"
  },
  {
    id: 145,
    category: "Tailwind",
    question: "Dark mode Tailwindda qanday ishlaydi?"
  },
  {
    id: 146,
    category: "JavaScript",
    question: "Map vs forEach farqi nima?"
  },
  {
    id: 147,
    category: "JavaScript",
    question: "Shallow copy nima?"
  },
  {
    id: 148,
    category: "JavaScript",
    question: "Deep copy nima?"
  },
  {
    id: 149,
    category: "JavaScript",
    question: "Garbage collection nima?"
  },
  {
    id: 150,
    category: "JavaScript",
    question: "Memory leak nima?"
  },
  {
    id: 151,
    category: "JavaScript",
    question: "IIFE nima?"
  },
  {
    id: 152,
    category: "JavaScript",
    question: "Higher Order Function nima?"
  },
  {
    id: 153,
    category: "JavaScript",
    question: "Pure function nima?"
  },
  {
    id: 154,
    category: "JavaScript",
    question: "Immutability nima?"
  },
  {
    id: 155,
    category: "JavaScript",
    question: "Object.assign() nima qiladi?"
  },
  {
    id: 156,
    category: "JavaScript",
    question: "Array.from() nima qiladi?"
  },
  {
    id: 157,
    category: "JavaScript",
    question: "Set nima?"
  },
  {
    id: 158,
    category: "JavaScript",
    question: "Map object nima?"
  },
  {
    id: 159,
    category: "JavaScript",
    question: "WeakMap nima?"
  },
  {
    id: 160,
    category: "JavaScript",
    question: "WeakSet nima?"
  },
  {
    id: 161,
    category: "TypeScript",
    question: "Tuple nima?"
  },
  {
    id: 162,
    category: "TypeScript",
    question: "Type inference nima?"
  },
  {
    id: 163,
    category: "TypeScript",
    question: "Type narrowing nima?"
  },
  {
    id: 164,
    category: "TypeScript",
    question: "Intersection type nima?"
  },
  {
    id: 165,
    category: "TypeScript",
    question: "Module nima?"
  },
  {
    id: 166,
    category: "TypeScript",
    question: "Namespace nima?"
  },
  {
    id: 167,
    category: "TypeScript",
    question: "Readonly nima?"
  },
  {
    id: 168,
    category: "TypeScript",
    question: "Utility types nima?"
  },
  {
    id: 169,
    category: "TypeScript",
    question: "Partial type nima?"
  },
  {
    id: 170,
    category: "TypeScript",
    question: "Pick type nima?"
  },
  {
    id: 171,
    category: "React",
    question: "React DOM nima?"
  },
  {
    id: 172,
    category: "React",
    question: "React Fiber nima?"
  },
  {
    id: 173,
    category: "React",
    question: "StrictMode nima?"
  },
  {
    id: 174,
    category: "React",
    question: "Props drilling nima?"
  },
  {
    id: 175,
    category: "React",
    question: "Lifting state up nima?"
  },
  {
    id: 176,
    category: "React",
    question: "useLayoutEffect nima?"
  },
  {
    id: 177,
    category: "React",
    question: "useTransition nima?"
  },
  {
    id: 178,
    category: "React",
    question: "Suspense nima?"
  },
  {
    id: 179,
    category: "React",
    question: "Lazy loading nima?"
  },
  {
    id: 180,
    category: "React",
    question: "React key nima uchun kerak?"
  },
  {
    id: 181,
    category: "HTML",
    question: "Data attribute nima?"
  },
  {
    id: 182,
    category: "HTML",
    question: "Progress tag nima?"
  },
  {
    id: 183,
    category: "HTML",
    question: "Meter tag nima?"
  },
  {
    id: 184,
    category: "HTML",
    question: "Details va summary nima?"
  },
  {
    id: 185,
    category: "HTML",
    question: "Fieldset nima?"
  },
  {
    id: 186,
    category: "CSS",
    question: "Box model nima?"
  },
  {
    id: 187,
    category: "CSS",
    question: "Margin va padding farqi nima?"
  },
  {
    id: 188,
    category: "CSS",
    question: "CSS inheritance nima?"
  },
  {
    id: 189,
    category: "CSS",
    question: "Pseudo class nima?"
  },
  {
    id: 190,
    category: "CSS",
    question: "Pseudo element nima?"
  },
  {
    id: 191,
    category: "Tailwind",
    question: "Tailwind spacing system nima?"
  },
  {
    id: 192,
    category: "Tailwind",
    question: "Tailwind flex classes nima qiladi?"
  },
  {
    id: 193,
    category: "Tailwind",
    question: "Tailwind grid system nima?"
  },
  {
    id: 194,
    category: "Tailwind",
    question: "Tailwind hover state nima?"
  },
  {
    id: 195,
    category: "Tailwind",
    question: "Tailwind plugins nima?"
  },
  {
    id: 196,
    category: "Next.js",
    question: "Next.js App Router nima?"
  },
  {
    id: 197,
    category: "Next.js",
    question: "Next.js Pages Router nima?"
  },
  {
    id: 198,
    category: "Next.js",
    question: "Server Components nima?"
  },
  {
    id: 199,
    category: "Next.js",
    question: "Client Components nima?"
  },
  {
    id: 200,
    category: "Next.js",
    question: "Next.js API Routes nima?"  
  }
];
export default questions;