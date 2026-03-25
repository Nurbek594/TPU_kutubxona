const books = [
  {
    slug: "malumotlar-tuzilmasi-va-algoritmlar",
    title: "Ma'lumotlar tuzilmasi va algoritmlar",
    author: "A. Karimov",
    category: "Dasturlash",
    year: 2024,
    pages: 420,
    language: "O'zbek",
    rating: 4.8,
    available: true,
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80",
    description:
      "Algoritmlar, massivlar, linked list, stack, queue va tree mavzularini chuqur o‘rgatuvchi zamonaviy darslik.",
    fullDescription:
      "Ushbu kitob dasturlashni chuqur o‘rganayotgan talabalar uchun mo‘ljallangan bo‘lib, ma’lumotlar tuzilmasi, algoritmik fikrlash, murakkablik tahlili va amaliy masalalarni yechish ko‘nikmalarini rivojlantiradi. Universitet talabalari uchun juda foydali manba hisoblanadi."
  },
  {
    slug: "suniy-intellekt-asoslari",
    title: "Sun'iy intellekt asoslari",
    author: "D. Rahmonov",
    category: "AI",
    year: 2025,
    pages: 390,
    language: "O'zbek",
    rating: 4.9,
    available: true,
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=80",
    description:
      "Machine learning, neural networks va AI tushunchalariga kirish beruvchi kitob.",
    fullDescription:
      "Kitob sun’iy intellekt sohasiga qiziqqan talabalar, yosh tadqiqotchilar va IT mutaxassislar uchun mo‘ljallangan. Unda mashinaviy o‘qitish, neyron tarmoqlar, data processing va AI’ning real hayotdagi qo‘llanilish holatlari keng yoritilgan."
  },
  {
    slug: "web-dasturlash-asoslari",
    title: "Web dasturlash asoslari",
    author: "S. Tursunov",
    category: "Frontend",
    year: 2023,
    pages: 315,
    language: "O'zbek",
    rating: 4.7,
    available: true,
    image:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=900&q=80",
    description:
      "HTML, CSS, JavaScript va zamonaviy web texnologiyalar bo‘yicha boshlang‘ich va o‘rta darajadagi qo‘llanma.",
    fullDescription:
      "Ushbu kitob web dasturlashga kirish uchun juda qulay manba. Frontend asoslari, sahifa tuzilishi, stillash, interaktivlik va foydalanuvchi interfeysi yaratish bo‘yicha amaliy tushunchalarni beradi."
  },
  {
    slug: "matematika-analiz",
    title: "Matematika analiz",
    author: "N. Yusupov",
    category: "Matematika",
    year: 2022,
    pages: 510,
    language: "O'zbek",
    rating: 4.6,
    available: false,
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=900&q=80",
    description:
      "Limit, hosila, integral va oliy matematika bo‘yicha fundamental darslik.",
    fullDescription:
      "Matematika analiz kursini mukammal o‘rganish uchun yozilgan mazkur kitob universitet talabalari uchun nazariy va amaliy jihatdan muhim manba hisoblanadi."
  },
  {
    slug: "tarmoqlar-va-xavfsizlik",
    title: "Tarmoqlar va xavfsizlik",
    author: "B. Sodiqov",
    category: "Tarmoq",
    year: 2025,
    pages: 360,
    language: "O'zbek",
    rating: 4.8,
    available: true,
    image:
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=900&q=80",
    description:
      "Kompyuter tarmoqlari, protokollar va axborot xavfsizligi asoslarini tushuntiradi.",
    fullDescription:
      "Mazkur kitob tarmoq administratsiyasi, axborot xavfsizligi va zamonaviy infratuzilma bilan ishlovchi talabalar uchun yozilgan. OSI modeli, TCP/IP, marshrutlash va kiberxavfsizlik asoslarini yoritadi."
  },
  {
    slug: "logistika-boshqaruvi",
    title: "Logistika boshqaruvi",
    author: "M. Ismoilov",
    category: "Logistika",
    year: 2024,
    pages: 280,
    language: "O'zbek",
    rating: 4.5,
    available: true,
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80",
    description:
      "Ta’minot zanjiri, transport va logistika boshqaruvi asoslari bo‘yicha qo‘llanma.",
    fullDescription:
      "Logistika va supply chain management yo‘nalishida o‘qiyotgan talabalar uchun mo‘ljallangan. Transport tizimi, ombor boshqaruvi va yetkazib berish jarayonlari haqida foydali ma’lumot beradi."
  }
];

module.exports = books;