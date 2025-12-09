// questions.js
// Structure: QUESTIONS[category][levelName] = array of { q, options, answerIndex }

const QUESTIONS = {
  webdev: {
    easy: [
      { q: "What does HTML stand for?", options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks Text Mark Language", "Hyper Transfer Markup Language"], answer: 0 },
      { q: "Which tag inserts an image?", options: ["<img>", "<image>", "<src>", "<picture>"], answer: 0 },
      { q: "CSS property for text color is?", options: ["color", "font-color", "text-color", "fontStyle"], answer: 0 },
      { q: "Which is a JavaScript file extension?", options: [".js", ".css", ".html", ".json"], answer: 0 },
      { q: "Which tag makes text bold?", options: ["<b>", "<i>", "<u>", "<em>"], answer: 0 },
      { q: "Anchor tag is <a> used for?", options: ["Links", "Images", "Tables", "Forms"], answer: 0 },
      { q: "Which CSS selects by id?", options: ["#id", ".class", "element", "*"], answer: 0 },
      { q: "HTML element for lists?", options: ["<ul>", "<div>", "<span>", "<table>"], answer: 0 },
      { q: "CSS for margin controls?", options: ["margin", "padding", "border", "gap"], answer: 0 },
      { q: "JS: console.log outputs to?", options: ["Console", "Screen", "File", "Network"], answer: 0 }
    ],
    medium: [
      { q: "Which attribute loads script asynchronously?", options: ["async", "defer", "load", "await"], answer: 0 },
      { q: "Flexbox property to align items horizontally?", options: ["justify-content", "align-items", "flex-direction", "order"], answer: 0 },
      { q: "Which method adds a child node in JS?", options: ["appendChild", "addNode", "createChild", "pushChild"], answer: 0 },
      { q: "Which HTTP method reads data?", options: ["GET", "POST", "PUT", "DELETE"], answer: 0 },
      { q: "Which CSS unit is relative to font-size?", options: ["em", "px", "cm", "%"], answer: 0 },
      { q: "React uses which concept?", options: ["Components", "Services", "Controllers", "Buckets"], answer: 0 },
      { q: "What does DOM stand for?", options: ["Document Object Model", "Data Object Model", "Document Oriented Model", "Display Object Manipulation"], answer: 0 },
      { q: "Which HTML5 API for storage?", options: ["localStorage", "sessionFile", "cookieStore", "dataAPI"], answer: 0 },
      { q: "Which is CSS preprocessor?", options: ["Sass", "HTML", "JS", "JSON"], answer: 0 },
      { q: "Which tag should NOT be nested inside <p>?", options: ["<div>", "<span>", "<a>", "<strong>"], answer: 0 }
    ],
    hard: [
      { q: "Which header controls CORS origin?", options: ["Access-Control-Allow-Origin", "CORS-Allowed", "Allow-Origin", "Origin-Policy"], answer: 0 },
      { q: "Which is a progressive web app feature?", options: ["Service Worker", "Server Side Rendering", "Frames", "Applets"], answer: 0 },
      { q: "Which CSS property creates stacking context?", options: ["z-index (with position)", "display", "float", "visibility"], answer: 0 },
      { q: "Node.js is built on which engine?", options: ["V8", "SpiderMonkey", "Chakra", "Java VM"], answer: 0 },
      { q: "Which SQL used by typical full stack apps?", options: ["MySQL", "XML", "CSV", "TXT"], answer: 0 },
      { q: "Which tool bundles JS modules?", options: ["Webpack", "NPM", "Babel", "ESLint"], answer: 0 },
      { q: "Which HTTP status means 'Created'?", options: ["201", "200", "404", "500"], answer: 0 },
      { q: "Which is not RESTful?", options: ["Using verbs in resource names", "Statelessness", "Uniform interface", "Cacheable responses"], answer: 0 },
      { q: "Which CSS function manipulates colors?", options: ["rgba()", "url()", "calc()", "var()"], answer: 0 },
      { q: "Which JS pattern avoids global variables?", options: ["IIFE", "Globalize", "Pollution", "Windowify"], answer: 0 }
    ],
    expert: [
      { q: "Which algorithm is commonly used by React for reconciliation?", options: ["Diffing algorithm", "Binary search", "Dijkstra", "Quicksort"], answer: 0 },
      { q: "Tree shaking removes what?", options: ["Unused code", "Comments", "Whitespace", "Images"], answer: 0 },
      { q: "Which header is used for caching control?", options: ["Cache-Control", "Content-Type", "ETag", "Pragma"], answer: 0 },
      { q: "Which HTTP/2 feature improves performance?", options: ["Multiplexing", "Cookies", "Frameset", "Meta refresh"], answer: 0 },
      { q: "Which testing library is used for React?", options: ["Jest", "Mocha", "Jasmine", "Tap"], answer: 0 },
      { q: "Which pattern handles async errors in Node?", options: ["Try/catch with async/await", "Callbacks only", "Synchronous loops", "Blocking IO"], answer: 0 },
      { q: "Which CSS selector targets nth child?", options: [":nth-child()", ":child()", ":nth()", ":nth-of-type"], answer: 0 },
      { q: "Which tool helps find bundle size?", options: ["source-map-explorer", "eslint", "prettier", "stylelint"], answer: 0 },
      { q: "Which is true for CSP (Content Security Policy)?", options: ["It restricts resource loading", "It speeds up JS", "It changes CSS", "It removes cookies"], answer: 0 },
      { q: "Which storage gives indexing and querying in browser DB?", options: ["IndexedDB", "localStorage", "cookies", "sessionStorage"], answer: 0 }
    ],
    master: [
      { q: "Which technique reduces Time To First Byte (TTFB)?", options: ["Edge caching / CDN", "Bigger images", "More plugins", "Disable caching"], answer: 0 },
      { q: "Which protocol improves security & performance together?", options: ["HTTP/2 or HTTP/3", "FTP", "Telnet", "Gopher"], answer: 0 },
      { q: "Which is a meta-framework for performance in React?", options: ["Next.js", "jQuery", "Backbone", "Dojo"], answer: 0 },
      { q: "Which design pattern helps SSR hydration?", options: ["Isomorphic / Universal rendering", "Singleton", "Factory", "Facade"], answer: 0 },
      { q: "Which algorithm helps for layout in browsers?", options: ["Layout engine (e.g., Blink) algorithms", "Greedy", "Binary search", "DFS"], answer: 0 },
      { q: "Which compression reduces payload size effectively?", options: ["Brotli", "rot13", "gzip-old", "none"], answer: 0 },
      { q: "Which metric measures perceived load speed?", options: ["Largest Contentful Paint (LCP)", "TTFB only", "Number of requests", "Server uptime"], answer: 0 },
      { q: "Which technique avoids Cumulative Layout Shift?", options: ["Dimension placeholders for images", "Random heights", "No images", "Hidden content"], answer: 0 },
      { q: "Which is true about service workers?", options: ["Run on HTTPS and intercept network requests", "Run on HTTP only", "Are server processes", "Require special language"], answer: 0 },
      { q: "Which tool helps with performance profiling?", options: ["Chrome DevTools Performance tab", "Notepad", "Paint", "Calculator"], answer: 0 }
    ]
  },

  math: {
    easy: [
      { q: "5 + 3 = ?", options: ["7","8","9","6"], answer: 1 },
      { q: "10 - 4 = ?", options: ["6","5","7","4"], answer: 0 },
      { q: "2 × 3 = ?", options: ["5","6","8","7"], answer: 1 },
      { q: "12 ÷ 3 = ?", options: ["4","5","6","3"], answer: 0 },
      { q: "What is 0 + 0 ?", options: ["1","0","2","-1"], answer: 1 },
      { q: "Which is a prime number?", options: ["4","6","7","8"], answer: 2 },
      { q: "Square of 4?", options: ["8","12","16","20"], answer: 2 },
      { q: "Cube of 2?", options: ["4","6","8","10"], answer: 2 },
      { q: "10% of 200?", options: ["10","20","30","40"], answer: 1 },
      { q: "Half of 50?", options: ["20","25","30","35"], answer: 1 }
    ],
    medium: [
      { q: "LCM of 4 and 6?", options: ["12","10","8","6"], answer: 0 },
      { q: "HCF of 12 and 18?", options: ["6","3","4","2"], answer: 0 },
      { q: "12² = ?", options: ["144","132","156","120"], answer: 0 },
      { q: "√81 = ?", options: ["9","8","7","6"], answer: 0 },
      { q: "What is 7 × 8?", options: ["56","49","63","54"], answer: 0 },
      { q: "Which is an irrational number?", options: ["√2","4","9","16"], answer: 0 },
      { q: "If x+2=5 then x=?", options: ["2","3","1","4"], answer: 1 },
      { q: "2^5 = ?", options: ["64","32","16","8"], answer: 1 },
      { q: "Area of circle πr² for r=2?", options: ["12.56","6.28","18.84","3.14"], answer: 0 },
      { q: "If 3x=12 x=?", options: ["2","5","4","6"], answer: 2 }
    ],
    hard: [
      { q: "Derivative of x² ?", options: ["2x","x","x²","1"], answer: 0 },
      { q: "Integral of 2x dx ?", options: ["x² + C","2x + C","x + C","x³ + C"], answer: 0 },
      { q: "Solve 2x+3=11", options: ["4","5","3","6"], answer: 0 },
      { q: "log10(100) = ?", options: ["2","10","100","1"], answer: 0 },
      { q: "Sum of first 5 natural numbers?", options: ["15","10","20","5"], answer: 0 },
      { q: "Which is a prime between 50 and 60?", options: ["53","55","57","51"], answer: 0 },
      { q: "Factor of x² - 9?", options: ["(x-3)(x+3)","(x+3)(x+3)","(x-9)(x+1)","(x-1)(x+9)"], answer: 0 },
      { q: "Area of triangle base 4 height 3?", options: ["6","12","7","9"], answer: 0 },
      { q: "Mean of 2,4,6,8?", options: ["5","6","4","7"], answer: 0 },
      { q: "Probability of heads in fair coin?", options: ["1/2","1/3","1/4","2/3"], answer: 0 }
    ],
    expert: [
      { q: "Solve for x: x^2 - 5x + 6 = 0", options: ["2 and 3","1 and 6","-2 and -3","3 and 5"], answer: 0 },
      { q: "Derivative of sin(x)?", options: ["cos(x)","-cos(x)","sin(x)","-sin(x)"], answer: 0 },
      { q: "Limit of (1+1/n)^n as n→∞ ?", options: ["e","1","0","∞"], answer: 0 },
      { q: "Which is a prime: 97?", options: ["Yes","No","Maybe","Unknown"], answer: 0 },
      { q: "Area under y=x from 0 to 1?", options: ["1/2","1","1/3","2"], answer: 0 },
      { q: "Which is a factorial: 4! = ?", options: ["24","12","6","48"], answer: 0 },
      { q: "Which is a complex number form?", options: ["a + bi","a/b","a*b","a^b"], answer: 0 },
      { q: "Which is true about matrices A and B, AB vs BA?", options: ["Not always equal","Always equal","Never equal","Equal if dims differ"], answer: 0 },
      { q: "If f(x)=x^3 derivative is?", options: ["3x^2","x^3","x^2","3x"], answer: 0 },
      { q: "Sum of angles in triangle?", options: ["180°","360°","90°","270°"], answer: 0 }
    ],
    master: [
      { q: "Which is solution of x^2 + 1 = 0 ?", options: ["i and -i","1 and -1","0 and 1","none"], answer: 0 },
      { q: "Which integral technique: ∫ e^x sin x dx uses?", options: ["Integration by parts twice","Substitution only","Trick only","No method"], answer: 0 },
      { q: "Eigenvalues belong to which object?", options: ["Matrix","Vector","Scalar only","Function only"], answer: 0 },
      { q: "Taylor series represents?", options: ["Function as power series","Random numbers","Matrix product","None"], answer: 0 },
      { q: "Which is prime test for large numbers?", options: ["Probabilistic tests (Miller-Rabin)","Counting only","Brute force only","No test"], answer: 0 },
      { q: "What is convergence radius related to?", options: ["Power series","Matrices","Graphs","Sets"], answer: 0 },
      { q: "Which transform used in PDEs?", options: ["Fourier Transform","CSS Transform","Image Transform","None"], answer: 0 },
      { q: "Which is an advanced probability distribution?", options: ["Poisson","Uniform","Deterministic","None"], answer: 0 },
      { q: "Laplace transform domain variable usually?", options: ["s","t","x","y"], answer: 0 },
      { q: "Which helps solve linear systems numerically?", options: ["LU decomposition","Random guess","Brute force","Graphing"], answer: 0 }
    ]
  },

  gk: {
    easy: [
      { q: "Capital of India?", options:["New Delhi","Mumbai","Kolkata","Chennai"], answer: 0 },
      { q: "National bird of India?", options:["Peacock","Sparrow","Eagle","Crow"], answer: 0 },
      { q: "Which planet is known as Red Planet?", options:["Mars","Earth","Jupiter","Venus"], answer: 0 },
      { q: "Which ocean is largest?", options:["Pacific","Atlantic","Indian","Arctic"], answer: 0 },
      { q: "Currency of USA?", options:["Dollar","Euro","Rupee","Yen"], answer: 0 },
      { q: "Sun rises from?", options:["East","West","North","South"], answer: 0 },
      { q: "Which is a continent?", options:["Asia","Greenland","Siberia","Antarctica? (this is continent; but keep Asia)"], answer: 0 },
      { q: "Which animal is king of jungle?", options:["Lion","Tiger","Elephant","Giraffe"], answer: 0 },
      { q: "Which season follows winter?", options:["Spring","Summer","Monsoon","Autumn"], answer: 0 },
      { q: "Which gas do we breathe out?", options:["CO2","O2","H2","N2"], answer: 0 }
    ],
    medium: [
      { q: "Who discovered gravity (apple)?", options:["Newton","Einstein","Galileo","Tesla"], answer: 0 },
      { q: "Which country gifted Statue of Liberty?", options:["France","UK","Germany","Spain"], answer: 0 },
      { q: "Longest river in world?", options:["Nile","Amazon","Yangtze","Ganges"], answer: 0 },
      { q: "Which is the smallest country?", options:["Vatican City","Malta","Monaco","Nauru"], answer: 0 },
      { q: "Which vitamin synthesized by sunlight?", options:["Vitamin D","Vitamin C","Vitamin A","Vitamin B"], answer: 0 },
      { q: "UN founded in which year?", options:["1945","1919","1939","1950"], answer: 0 },
      { q: "Which country is largest by area?", options:["Russia","Canada","China","USA"], answer: 0 },
      { q: "Which metal is liquid at room temp?", options:["Mercury","Iron","Gold","Silver"], answer: 0 },
      { q: "Which city is known as Big Apple?", options:["New York","Los Angeles","London","Paris"], answer: 0 },
      { q: "Which instrument measures earthquakes?", options:["Seismograph","Thermometer","Barometer","Hygrometer"], answer: 0 }
    ],
    hard: [
      { q: "Which war ended in 1945?", options:["World War II","World War I","Cold War","Napoleonic War"], answer: 0 },
      { q: "Which amendment gives free speech in US?", options:["First Amendment","Second Amendment","Fourth","Eighth"], answer: 0 },
      { q: "Which planet has most moons?", options:["Saturn","Jupiter","Mars","Earth"], answer: 0 },
      { q: "Which chemical formula is water?", options:["H2O","CO2","O2","CH4"], answer: 0 },
      { q: "Which country first landed on Moon?", options:["USA","USSR","China","India"], answer: 0 },
      { q: "Nobel prize is awarded for which fields?", options:["Physics, Chemistry, Peace, Medicine, Literature, Economics","Only Physics","Only Peace","Only Chemistry"], answer: 0 },
      { q: "Which is the tallest mountain (above sea level)?", options:["Mount Everest","K2","Kangchenjunga","Lhotse"], answer: 0 },
      { q: "Which organ pumps blood?", options:["Heart","Liver","Lungs","Brain"], answer: 0 },
      { q: "Which is the world's largest democracy?", options:["India","USA","Brazil","Japan"], answer: 0 },
      { q: "Which discovery by Fleming?", options:["Penicillin","Insulin","X-rays","DNA"], answer: 0 }
    ],
    expert: [
      { q: "Which year did India gain independence?", options:["1947","1950","1930","1945"], answer: 0 },
      { q: "Who wrote 'Ramayana' ?", options:["Valmiki","Tulsidas","Vyasa","Kalidasa"], answer: 0 },
      { q: "Which city hosted 2012 Olympics?", options:["London","Beijing","Rio","Tokyo"], answer: 0 },
      { q: "Which gas is used in neon lights?", options:["Neon","Argon","Helium","Xenon"], answer: 0 },
      { q: "Who is the father of computing?", options:["Charles Babbage","Alan Turing","Tim Berners-Lee","Bill Gates"], answer: 0 },
      { q: "Which treaty ended WWI?", options:["Treaty of Versailles","Treaty of Paris","Treaty of Tokyo","Treaty of London"], answer: 0 },
      { q: "Which city is the capital of Japan?", options:["Tokyo","Kyoto","Osaka","Sapporo"], answer: 0 },
      { q: "Which is largest desert?", options:["Sahara","Gobi","Kalahari","Mojave"], answer: 0 },
      { q: "Which element has atomic number 1?", options:["Hydrogen","Helium","Oxygen","Carbon"], answer: 0 },
      { q: "Which continent is Australia part of?", options:["Australia","Asia","Oceania","Antarctica"], answer: 0 }
    ],
    master: [
      { q: "Which scientist proposed general relativity?", options:["Einstein","Newton","Galileo","Bohr"], answer: 0 },
      { q: "Which is the deepest ocean trench?", options:["Mariana Trench","Tonga Trench","Java Trench","Kermadec Trench"], answer: 0 },
      { q: "Which is a supranational organization?", options:["European Union","League of Nations","NATO","ASEAN"], answer: 0 },
      { q: "Which is a BRICS country?", options:["India","Spain","Portugal","Norway"], answer: 0 },
      { q: "Which is largest economy by GDP nominal (approx)?", options:["USA","India","China","Japan"], answer: 0 },
      { q: "Which hypothesis deals with prime distribution?", options:["Riemann Hypothesis","Pythagoras","Fermat","Goldbach"], answer: 0 },
      { q: "Which art movement is associated with Picasso?", options:["Cubism","Impressionism","Baroque","Romanticism"], answer: 0 },
      { q: "Which currency is used in Japan?", options:["Yen","Won","Dollar","Euro"], answer: 0 },
      { q: "What does UNESCO focus on?", options:["Education, Science & Culture","Sports only","Only Education","Only Science"], answer: 0 },
      { q: "Which country launched the Hubble Telescope?", options:["USA","Russia","China","India"], answer: 0 }
    ]
  }
};
