import React, { useState, useEffect } from 'react';
import { 
  ArrowUpRight, 
  Search, 
  Filter, 
  CheckCircle2, 
  Zap, 
  Globe, 
  TrendingUp, 
  Users, 
  ShieldCheck, 
  Sparkles, 
  Send, 
  ChevronRight, 
  X, 
  Menu, 
  Briefcase, 
  Layers, 
  Target, 
  Laptop,
  Check,
  AlertCircle,
  Flame,
  Lightbulb,
  RefreshCw,
  Trophy,
  Rocket,
  Quote,
  Heart,
  BookOpen,
  UserCheck,
  Award,
  HelpCircle,
  Newspaper,
  Compass,
  CheckSquare,
  Plus,
  PlayCircle
} from 'lucide-react';

// --- DATA DEFINITIONS ---

const MOTIVATIONAL_QUOTES = [
  "Перші гроші починаються з перших навичок.",
  "Твій час — ресурс. Навчися використовувати його правильно.",
  "Хочеш результат? Почни діяти.",
  "Не шукай легких грошей. Шукай можливості зростати.",
  "Бійся не помилок, а відсутності розвитку.",
  "Дисципліна б'є талант, коли талант не працює.",
  "Твоя фінансова свобода — це сума щоденних маленьких рішень.",
  "Найкраща інвестиція у 15-20 років — це навички, які дають трафік і результат."
];

const BOXERS_MOTIVATION = [
  {
    name: "Олександр Усик",
    role: "Абсолютний чемпіон світу з боксу",
    topic: "Дисципліна, віра в себе та постійна праця",
    quote: "Неважливо, скільки людей у тебе не вірять. Головне — скільки праці ти вкладаєш щодня, коли ніхто не бачить.",
    source: "Інтерв'ю після перемоги над Ентоні Джошуа",
    img: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Віталій Кличко",
    role: "Вічний чемпіон світу WBC, підприємець",
    topic: "Характер, наполегливість та перемога над труднощами",
    quote: "Перемагає не той, хто не падає, а той, хто встає й продовжує йти вперед після кожного удару.",
    source: "Офіційні виступи та автобіографічні матеріали",
    img: "https://images.unsplash.com/photo-1517649763962-0c623266010b?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Володимир Кличко",
    role: "Олімпійський чемпіон, Ph.D., бізнес-дослідник",
    topic: "Самоконтроль, амбіції та досягнення цілей",
    quote: "Виклики — це не перешкоди, це паливо для вашого самовдосконалення та професійного зростання.",
    source: "Книга «Challenge Management»",
    img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop"
  }
];

const MONEY_MINDSET_CARDS = [
  {
    en: "NO RISK — NO MONEY.",
    highlight: "NO MONEY",
    ua: "Без ризику немає прибутку.",
    desc: "Сміливість вийти із зони комфорту та спробувати нову сферу — це перший крок до фінансових результатів."
  },
  {
    en: "NO ACTION — NO RESULT.",
    highlight: "NO RESULT",
    ua: "Без дій немає результату.",
    desc: "Теорія без практики не вартує нічого. Тільки реальні дії дають досвід та гроші."
  },
  {
    en: "THINK BIG. START SMALL.",
    highlight: "START SMALL",
    ua: "Мрій про велике. Починай з малого.",
    desc: "Не чекай ідеального моменту. Виконай перше просте завдання у SMM чи дизайні вже сьогодні."
  },
  {
    en: "MONEY LOVES ACTION.",
    highlight: "ACTION",
    ua: "Гроші люблять активність.",
    desc: "Ті, хто діють швидко та адаптуються, завжди отримують кращі можливості на ринку."
  },
  {
    en: "BUILD SKILLS. BUILD FREEDOM.",
    highlight: "BUILD FREEDOM",
    ua: "Створюй навички. Створюй свободу.",
    desc: "Твої вміння залучати трафік або створювати контент — це твоя незалежність від офісного графіка."
  },
  {
    en: "STOP DREAMING. START BUILDING.",
    highlight: "START BUILDING",
    ua: "Досить мріяти. Починай будувати.",
    desc: "Перетвори свої ідеї на практичний кейс для портфоліо."
  },
  {
    en: "YOUR FUTURE IS YOUR BUSINESS.",
    highlight: "YOUR BUSINESS",
    ua: "Твоє майбутнє — це твоя власна справа.",
    desc: "Стався до свого часу та розвитку як до найважливішого стартапу."
  },
  {
    en: "DISCIPLINE CREATES FREEDOM.",
    highlight: "DISCIPLINE",
    ua: "Дисципліна створює свободу.",
    desc: "Щоденна фокусна робота над навичками дає свободу вибору проєктів та доходу."
  }
];

const ENTREPRENEURS = [
  {
    name: "Стів Джобс",
    company: "Співзасновник Apple",
    quote: "Єдиний спосіб робити велику роботу — це любити те, що ти робиш. Якщо ви ще не знайшли це, шукайте.",
    lesson: "Інновації, увага до деталей та безкомпромісна віра у власну справу.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Ілон Маск",
    company: "Засновник Tesla & SpaceX",
    quote: "Якщо щось достатньо важливе, ви повинні зробити це, навіть якщо шанси не на вашу користь.",
    lesson: "Масштабні амбіції, відсутність страху перед складними завданнями та працездатність.",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Джефф Безос",
    company: "Засновник Amazon",
    quote: "Якщо ви не готові до критики, то не робіть нічого нового або цікавого.",
    lesson: "Довгострокове мислення, орієнтація на клієнта та експерименти.",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Річард Бренсон",
    company: "Засновник Virgin Group",
    quote: "Якщо хтось пропонує вам дивовижну можливість, але ви не впевнені, що зможете це зробити, кажіть «так» — а потім вчіться.",
    lesson: "Підприємницька сміливість, гнучкість та вміння хапатися за шанс.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop"
  }
];

const DIRECTIONS = [
  {
    id: 'traffic',
    title: 'Traffic Management',
    desc: 'Навчись залучати цільову аудиторію та працювати з арбітражем трафіку у реальних бізнес-проєктах.',
    icon: TrendingUp,
    badge: 'Гарячий тренд',
    details: 'У цьому напрямку ти дізнаєшся, як налаштовувати таргетовану та контекстну рекламу, аналізувати метрики (ROI, CTR, CPA) та працювати з рекламними кабінетами Meta, Google, TikTok.'
  },
  {
    id: 'smm',
    title: 'SMM & Community',
    desc: 'Розвиток соціальних мереж, побудова ком’юніті, створення стратегій залучення та бренд-комунікації.',
    icon: Users,
    badge: 'Низький поріг входу',
    details: 'Включає створення контент-планів, написання текстів, модерацію спільнот у Telegram, Instagram та Discord, організацію інтерактивів та конкурсів.'
  },
  {
    id: 'content',
    title: 'Content Creator',
    desc: 'Створення коротких відео (Reels, TikTok, Shorts), монтаж, сторітелінг та вірусний контент-маркетинг.',
    icon: Sparkles,
    badge: 'Творчий старт',
    details: 'Опануй навички швидкого відеомонтажу на телефоні чи ПК (CapCut, Premiere Pro), генерації ідей, роботи з генеративним AI для створення візуалів.'
  },
  {
    id: 'affiliate',
    title: 'Affiliate Marketing',
    desc: 'Партнерський маркетинг: просування продуктів за комісійну винагороду від продажів чи лідів.',
    icon: Globe,
    badge: 'Високий дохід',
    details: 'Робота з CPA-мережами, вибір оферів, створення посадкових сторінок (лендингів) та вибудовування воронок продажів.'
  },
  {
    id: 'design',
    title: 'Digital & Graphic Design',
    desc: 'Створення банерів для реклами, креативів, обкладок, базова верстка лендингів та UX/UI елементів.',
    icon: Layers,
    badge: 'Затребувано',
    details: 'Робота у Figma та Photoshop: створення рекламних креативів із високим CTR, оформлення соціальних мереж, створення презентацій.'
  },
  {
    id: 'assistant',
    title: 'Digital Assistant',
    desc: 'Допомога digital-командам: пошук інформації, первинний аналіз, ведення таблиць та комунікація.',
    icon: Laptop,
    badge: 'Старт з 0',
    details: 'Ідеальний спосіб зазирнути всередину реального digital-агентства або медіабайдингової команди. Виконай базові доручення та вчись у досвідчених фахівців.'
  }
];

const INITIAL_JOBS = [
  {
    id: 1,
    title: 'Junior SMM / Assistant у Telegram-проєкт',
    category: 'smm',
    type: 'Remote',
    age: '16+',
    salary: '8,000 - 14,000 ₴ / міс',
    postedDate: 'Сьогодні',
    isDemo: false,
    description: 'Шукаємо активного підлітка чи молодого фахівця для публікацій дописів, відповідей у коментарях та допомоги контент-мейкеру.',
    requirements: ['Вільне володіння українською', 'Базове розуміння Telegram-каналів', 'Грамотність та відповідальність', 'Від 2-3 годин на день'],
    verified: true,
    company: 'NextGen Media'
  },
  {
    id: 2,
    title: 'Молодший Creator (TikTok / Short-form Video)',
    category: 'content',
    type: 'Project',
    age: '15+',
    salary: '300 - 600 ₴ / за відео',
    postedDate: 'Вчора',
    isDemo: false,
    description: 'Створення 3-5 коротких відео на день за готовими сценаріями або власними ідеями для молодіжного бренду одягу.',
    requirements: ['Наявність смартфона з гарною камерою', 'Вміння монтувати у CapCut', 'Відчуття трендів та гумору'],
    verified: true,
    company: 'Urban Wear Startup'
  },
  {
    id: 3,
    title: 'Junior Креативщик (Figma / Banner Design)',
    category: 'design',
    type: 'Part-time',
    age: '16+',
    salary: '10,000 - 18,000 ₴ / міс',
    postedDate: '2 дні тому',
    isDemo: false,
    description: 'Розробка статичних та анімованих рекламних тизерів/банерів для медіабайдингової команди.',
    requirements: ['Базове володіння Figma/Photoshop', 'Портфоліо з 3-5 навчальних робіт', 'Готовність вчитися робити конверсійні креативи'],
    verified: true,
    company: 'FlowTraffic Team'
  },
  {
    id: 4,
    title: 'Помічник трафік-менеджера (Google/Meta)',
    category: 'traffic',
    type: 'Remote / Internship',
    age: '17+',
    salary: 'Stipend + % від результату (від 10,000 ₴)',
    postedDate: '3 дні тому',
    isDemo: false,
    description: 'Збір аналітики, перевірка звітів, допомога у фармінгу та підготовці акаунтів для рекламних кампаній.',
    requirements: ['Аналітичний склад розуму', 'Впевнений користувач ПК та Excel/Sheets', 'Бажання розвиватися у Media Buying'],
    verified: true,
    company: 'LeadCraft Agency'
  },
  {
    id: 5,
    title: 'Модератор спільноти / Discord & Telegram',
    category: 'smm',
    type: 'Shift work',
    age: '15+',
    salary: '6,000 - 9,000 ₴ / міс',
    postedDate: '4 дні тому',
    isDemo: false,
    description: 'Підтримання порядку в чаті, відповіді на запитання користувачів, видалення спаму та підтримка дружньої атмосфери.',
    requirements: ['Онлайн у визначені зміни (вечірні/ранкові)', 'Стресостійкість', 'Знання правил безпеки в мережі'],
    verified: true,
    company: 'GameHub UA'
  },
  {
    id: 6,
    title: 'Scout / Помічник Affiliate-менеджера',
    category: 'affiliate',
    type: 'Flexible',
    age: '16+',
    salary: 'Бонус за залученого партнера (від 5,000 ₴)',
    postedDate: '5 днів тому',
    isDemo: true,
    description: 'Пошук нових вебмайстрів та блогерів для співпраці з партнерською мережею. [Демонстраційна вакансія]',
    requirements: ['Комунікабельність', 'Активні профілі в соцмережах', 'Вміння вести ділову переписку'],
    verified: true,
    company: 'Affiliate Connect (Demo)'
  }
];

const ACADEMY_COURSES = [
  {
    id: 'intro-digital',
    title: 'Основи digital-маркетингу',
    category: 'general',
    duration: '20 хв',
    level: 'Старт з 0',
    description: 'Зрозумій, як працюють продажі в інтернеті, що таке воронка конверсії та чому за трафік платять найбільше.',
    checklist: [
      'Вивчити різницю між органіка та платним трафіком',
      'Зрозуміти терміни: CPA, CTR, ROI, Conversion Rate',
      'Виконати тестове завдання: скласти схему воронки для Instagram-магазину'
    ]
  },
  {
    id: 'traffic-101',
    title: 'Як працює інтернет-трафік',
    category: 'traffic',
    duration: '35 хв',
    level: 'Новачок',
    description: 'Перші кроки у Media Buying. Як налаштовувати цільову аудиторію та тестувати креативи без ризику злити бюджет.',
    checklist: [
      'Розбратися з рекламним кабінетом Meta Ads Manager',
      'Навчитися визначати ЦА за віком, інтересами та гео',
      'Створити першу рекламну гіпотезу'
    ]
  },
  {
    id: 'smm-basics',
    title: 'Основи SMM & Контент-стратегії',
    category: 'smm',
    duration: '25 хв',
    level: 'Старт з 0',
    description: 'Як створювати дописи та контент-плани, що залучають увагу аудиторії та перетворюють підписників на покупців.',
    checklist: [
      'Скласти контент-план на 7 днів у Notion/Excel',
      'Опанувати формулу написання постів AIDA',
      'Навчитися писати чіпляючі заголовки'
    ]
  },
  {
    id: 'short-video',
    title: 'Монтаж коротких відео (TikTok & Reels)',
    category: 'content',
    duration: '30 хв',
    level: 'Старт з 0',
    description: 'Практичний гайд із швидкого монтажу в CapCut, вибору трендових звуків та створення вірусного сторітелінгу.',
    checklist: [
      'Встановити CapCut та вивчити основні гарячі клавіші/функції',
      'Змонтувати тестове відео з ефектом динамичного хука (перші 3 сек)',
      'Додати автоматичні субтитри та анімацію тексту'
    ]
  },
  {
    id: 'design-creatives',
    title: 'Основи дизайну рекламних банерів',
    category: 'design',
    duration: '40 хв',
    level: 'Новачок',
    description: 'Робота у Figma для створення рекламних креативів з високим CTR. Правила сітки, контрасту та контрастних шрифтів.',
    checklist: [
      'Встановити Figma та створити фрейм 1080x1080',
      'Застосувати правило контрасту та 3 основних кольорів',
      'Зробити 2 варіанти тизера для однієї товарної ніші'
    ]
  },
  {
    id: 'prep-job',
    title: 'Як підготуватися до першого підробітку',
    category: 'career',
    duration: '15 хв',
    level: 'Усім обовʼязково',
    description: 'Як написати перше повідомлення замовнику, оформити просте портфоліо без досвіду та уникнути шахраїв.',
    checklist: [
      'Скласти коротку самопрезентацію за шаблоном NO MONEY',
      'Зібрати свої навчальні роботи на Google Drive чи Notion',
      'Вивчити правила безпечних розрахунків'
    ]
  }
];

const NO_MONEY_NEWS = [
  {
    id: 1,
    title: 'Тренд 2026: AI-асистенти в SMM та трафіку',
    date: '7 Листопада 2026',
    desc: 'Як підлітку використовувати ChatGPT та Midjourney, щоб виконувати завдання у 3 рази швидше.'
  },
  {
    id: 2,
    title: 'Безпека в мережі: як не натрапити на скам',
    date: '5 Листопада 2026',
    desc: 'Запам’ятай: справжній роботодавець ніколи не вимагає грошей за "вхід у проєкт" чи "навчальні матеріали".'
  },
  {
    id: 3,
    title: 'Чому короткі відео (Shorts) залишаються #1 інструментом',
    date: '1 Листопада 2026',
    desc: 'Аналіз алгоритмів TikTok та Instagram: які ролики набирають 100k+ переглядів без бюджету.'
  }
];

export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home', 'motivation', 'academy', 'dashboard', 'community'
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedJob, setSelectedJob] = useState(null);
  const [selectedDirectionModal, setSelectedDirectionModal] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Saved Jobs & Academy Progress State
  const [savedJobs, setSavedJobs] = useState([]);
  const [completedCourses, setCompletedCourses] = useState([]);
  const [userGoals, setUserGoals] = useState([
    { id: 1, text: 'Опанувати базовий монтаж у CapCut', done: false },
    { id: 2, text: 'Створити перше портфоліо з 3 навчальних робіт', done: false }
  ]);
  const [newGoalText, setNewGoalText] = useState('');

  // Interactive Quiz State
  const [quizStep, setQuizStep] = useState(1);
  const [quizAnswers, setQuizAnswers] = useState({ interest: '', time: '', experience: '' });
  const [quizResult, setQuizResult] = useState(null);

  // Motivation page state
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [viewedQuotesCount, setViewedQuotesCount] = useState(1);
  const [activeMindset, setActiveMindset] = useState(null);

  // Application Form State
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    contact: '',
    direction: 'traffic',
    experience: 'no',
    about: '',
    agreedTerms: false,
    agreedSafety: false
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Toggle Save Job
  const toggleSaveJob = (jobId) => {
    setSavedJobs(prev => 
      prev.includes(jobId) ? prev.filter(id => id !== jobId) : [...prev, jobId]
    );
  };

  // Toggle Course Completion
  const toggleCourseComplete = (courseId) => {
    setCompletedCourses(prev => 
      prev.includes(courseId) ? prev.filter(id => id !== courseId) : [...prev, courseId]
    );
  };

  // Goals Handlers
  const toggleGoal = (id) => {
    setUserGoals(prev => prev.map(g => g.id === id ? { ...g, done: !g.done } : g));
  };

  const addGoal = (e) => {
    e.preventDefault();
    if (!newGoalText.trim()) return;
    setUserGoals(prev => [...prev, { id: Date.now(), text: newGoalText.trim(), done: false }]);
    setNewGoalText('');
  };

  // Form Submit Handler
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormError('');

    if (!formData.name.trim()) {
      setFormError('Будь ласка, введіть ваше ім’я.');
      return;
    }
    if (!formData.age || isNaN(formData.age) || Number(formData.age) < 14) {
      setFormError('Будь ласка, вкажіть коректний вік (від 14 років).');
      return;
    }
    if (!formData.contact.trim()) {
      setFormError('Будь ласка, вкажіть ваші контактні дані (Telegram або Email).');
      return;
    }
    if (!formData.agreedTerms || !formData.agreedSafety) {
      setFormError('Будь ласка, підтвердіть згоду на обробку даних та ознайомлення з правилами безпеки.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 1000);
  };

  // Quiz Process Handler
  const handleQuizAnswer = (key, value) => {
    const updated = { ...quizAnswers, [key]: value };
    setQuizAnswers(updated);
    
    if (quizStep < 3) {
      setQuizStep(prev => prev + 1);
    } else {
      // Calculate Result
      let recommendedDir = DIRECTIONS[0]; // fallback
      if (updated.interest === 'video') recommendedDir = DIRECTIONS.find(d => d.id === 'content');
      else if (updated.interest === 'design') recommendedDir = DIRECTIONS.find(d => d.id === 'design');
      else if (updated.interest === 'smm') recommendedDir = DIRECTIONS.find(d => d.id === 'smm');
      else if (updated.interest === 'traffic') recommendedDir = DIRECTIONS.find(d => d.id === 'traffic');
      else recommendedDir = DIRECTIONS.find(d => d.id === 'assistant');

      setQuizResult(recommendedDir);
      setQuizStep(4);
    }
  };

  const resetQuiz = () => {
    setQuizStep(1);
    setQuizAnswers({ interest: '', time: '', experience: '' });
    setQuizResult(null);
  };

  // Filter Jobs
  const filteredJobs = INITIAL_JOBS.filter(job => {
    const matchesCategory = selectedCategory === 'all' || job.category === selectedCategory;
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          job.company.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleNextQuote = () => {
    setQuoteIndex((prev) => (prev + 1) % MOTIVATIONAL_QUOTES.length);
    setViewedQuotesCount((prev) => prev + 1);
  };

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0B0D] text-slate-100 font-sans selection:bg-[#C6FF00] selection:text-black relative overflow-hidden">
      
      {/* BACKGROUND GRAPHICS & NEON GLOWS */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#C6FF00]/10 rounded-full blur-[140px]" />
        <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-[#C6FF00]/5 rounded-full blur-[180px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[160px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* HEADER / NAVIGATION */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#0A0B0D]/80 border-b border-white/10 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => { setCurrentPage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <div className="w-10 h-10 rounded-xl bg-[#C6FF00] flex items-center justify-center font-black text-black text-xl shadow-[0_0_20px_rgba(198,255,0,0.4)]">
              NM
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-2xl tracking-tighter text-white">
                NO MONEY<span className="text-[#C6FF00]">.</span>
              </span>
              <span className="text-[10px] tracking-widest uppercase text-zinc-400 font-mono">Digital Start Hub 2.0</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-zinc-300">
            <button 
              onClick={() => { setCurrentPage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
              className={`hover:text-[#C6FF00] transition-colors ${currentPage === 'home' ? 'text-[#C6FF00] font-bold' : ''}`}
            >
              Головна
            </button>
            <button onClick={() => scrollToSection('directions')} className="hover:text-[#C6FF00] transition-colors">Напрямки</button>
            <button onClick={() => scrollToSection('jobs')} className="hover:text-[#C6FF00] transition-colors">Вакансії</button>
            <button 
              onClick={() => { setCurrentPage('academy'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
              className={`hover:text-[#C6FF00] transition-colors flex items-center gap-1 ${currentPage === 'academy' ? 'text-[#C6FF00] font-bold' : ''}`}
            >
              <BookOpen className="w-4 h-4 text-[#C6FF00]" />
              <span>Academy</span>
            </button>
            <button 
              onClick={() => { setCurrentPage('motivation'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
              className={`hover:text-[#C6FF00] transition-colors flex items-center gap-1 ${currentPage === 'motivation' ? 'text-[#C6FF00] font-bold' : ''}`}
            >
              <Flame className="w-4 h-4 text-[#C6FF00]" />
              <span>Motivation</span>
            </button>
            <button 
              onClick={() => { setCurrentPage('community'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
              className={`hover:text-[#C6FF00] transition-colors ${currentPage === 'community' ? 'text-[#C6FF00] font-bold' : ''}`}
            >
              Спільнота
            </button>
          </nav>

          {/* CTA & Dashboard Header Button */}
          <div className="hidden md:flex items-center gap-3">
            <button 
              onClick={() => { setCurrentPage('dashboard'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className={`px-4 py-2.5 rounded-xl border border-white/10 text-xs font-bold font-mono transition-all flex items-center gap-2 ${
                currentPage === 'dashboard' 
                  ? 'bg-[#C6FF00]/10 border-[#C6FF00] text-[#C6FF00]' 
                  : 'bg-zinc-900 text-zinc-200 hover:border-white/30'
              }`}
            >
              <UserCheck className="w-4 h-4 text-[#C6FF00]" />
              <span>МІЙ NO MONEY</span>
              {savedJobs.length > 0 && (
                <span className="w-5 h-5 rounded-full bg-[#C6FF00] text-black font-extrabold flex items-center justify-center text-[10px]">
                  {savedJobs.length}
                </span>
              )}
            </button>

            <button 
              onClick={() => scrollToSection('apply')}
              className="px-4 py-2.5 rounded-xl bg-[#C6FF00] text-black font-semibold text-xs uppercase tracking-wider hover:bg-[#b2e600] transition-all shadow-[0_0_15px_rgba(198,255,0,0.3)] active:scale-95 flex items-center gap-1.5"
            >
              <span>Почекати підробіток</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="lg:hidden p-2 text-zinc-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0F1115] border-b border-white/10 px-6 py-6 space-y-4 text-base font-medium">
            <button onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }} className="block w-full text-left text-zinc-200 hover:text-[#C6FF00] py-1.5">Головна</button>
            <button onClick={() => { setCurrentPage('academy'); setMobileMenuOpen(false); }} className="block w-full text-left text-zinc-200 hover:text-[#C6FF00] py-1.5 font-bold flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#C6FF00]" /> Academy
            </button>
            <button onClick={() => { setCurrentPage('motivation'); setMobileMenuOpen(false); }} className="block w-full text-left text-[#C6FF00] font-bold py-1.5 flex items-center gap-2">
              <Flame className="w-4 h-4" /> Motivation
            </button>
            <button onClick={() => { setCurrentPage('dashboard'); setMobileMenuOpen(false); }} className="block w-full text-left text-zinc-200 hover:text-[#C6FF00] py-1.5 flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-[#C6FF00]" /> Мій NO MONEY ({savedJobs.length})
            </button>
            <button onClick={() => { setCurrentPage('community'); setMobileMenuOpen(false); }} className="block w-full text-left text-zinc-200 hover:text-[#C6FF00] py-1.5">Спільнота</button>
            <button onClick={() => scrollToSection('directions')} className="block w-full text-left text-zinc-200 hover:text-[#C6FF00] py-1.5">Напрямки</button>
            <button onClick={() => scrollToSection('jobs')} className="block w-full text-left text-zinc-200 hover:text-[#C6FF00] py-1.5">Вакансії</button>
            <button 
              onClick={() => scrollToSection('apply')}
              className="w-full mt-4 py-3 rounded-xl bg-[#C6FF00] text-black font-bold text-center block text-sm uppercase tracking-wider"
            >
              Знайти підробіток
            </button>
          </div>
        )}
      </header>

      {/* PAGE CONDITIONAL RENDERING */}
      {currentPage === 'motivation' && (
        
        /* ==================== MOTIVATION PAGE ==================== */
        <main className="relative z-10 space-y-24 pb-20">
          
          {/* 1. HERO SECTION - MOTIVATION */}
          <section className="pt-16 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-8">
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C6FF00]/10 border border-[#C6FF00]/30 text-xs font-mono text-[#C6FF00]">
              <Flame className="w-4 h-4 animate-bounce" />
              <span>NO MONEY MINDSET 🔥</span>
            </div>

            <div className="space-y-4 max-w-4xl mx-auto">
              <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter text-white uppercase leading-none">
                NO RISK<span className="text-[#C6FF00]">.</span><br />
                NO MONEY<span className="text-[#C6FF00]">.</span>
              </h1>
              
              <div className="text-2xl sm:text-3xl font-extrabold text-[#C6FF00] font-mono tracking-wider pt-2">
                NO ACTION. NO RESULTS.
              </div>
            </div>

            <p className="text-lg sm:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed">
              «Не чекай, поки можливості самі прийдуть до тебе. Вивчай нове, дій, помиляйся, роби висновки та будуй своє майбутнє».
            </p>

            <div className="pt-4 flex justify-center">
              <button 
                onClick={() => {
                  const el = document.getElementById('boxers');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 rounded-xl bg-[#C6FF00] text-black font-extrabold text-sm uppercase tracking-wider hover:bg-[#b2e600] transition-all shadow-[0_0_30px_rgba(198,255,0,0.4)] flex items-center gap-2"
              >
                <span>ЗАРЯДИТИСЯ НА ДІЇ</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </section>

          {/* 2. BOXING LEGENDS MOTIVATION 🥊 */}
          <section id="boxers" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10 space-y-12">
            
            <div className="text-center space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#C6FF00]">
                🥊 ХАРАКТЕР ТА ДИСЦИПЛІНА
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                МОТИВАЦІЯ ВІД ЛЕГЕНД БОКСУ
              </h2>
              <p className="text-zinc-400 max-w-xl mx-auto text-sm sm:text-base">
                Справжні висловлювання українських чемпіонів про дисципліну, ризик та волю до перемоги.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {BOXERS_MOTIVATION.map((boxer, i) => (
                <div 
                  key={i} 
                  className="rounded-3xl bg-zinc-900/80 border border-white/10 overflow-hidden hover:border-[#C6FF00]/50 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={boxer.img} 
                      alt={boxer.name} 
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 space-y-1">
                      <span className="text-[10px] font-mono uppercase bg-[#C6FF00] text-black font-extrabold px-2.5 py-1 rounded">
                        {boxer.topic}
                      </span>
                      <h3 className="text-2xl font-black text-white">{boxer.name}</h3>
                      <p className="text-xs text-zinc-300 font-mono">{boxer.role}</p>
                    </div>
                  </div>

                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-3">
                      <Quote className="w-8 h-8 text-[#C6FF00]/40" />
                      <p className="text-sm text-zinc-200 leading-relaxed italic">
                        «{boxer.quote}»
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/10 text-[11px] font-mono text-zinc-500">
                      Джерело: <span className="text-zinc-400">{boxer.source}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </section>

          {/* 3. MONEY MINDSET 💸 */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10 space-y-12">
            
            <div className="text-center space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#C6FF00]">
                💸 МИСЛЕННЯ УСПІХУ
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase">
                MONEY MINDSET
              </h2>
              <p className="text-zinc-400 max-w-xl mx-auto text-sm sm:text-base">
                Натисни на фразу, щоб розкрити український переклад та практичне пояснення принципу.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {MONEY_MINDSET_CARDS.map((card, idx) => {
                const isSelected = activeMindset === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setActiveMindset(isSelected ? null : idx)}
                    className={`cursor-pointer rounded-2xl p-6 border transition-all duration-300 space-y-4 relative overflow-hidden ${
                      isSelected 
                        ? 'bg-[#C6FF00]/10 border-[#C6FF00] shadow-[0_0_20px_rgba(198,255,0,0.2)]' 
                        : 'bg-zinc-900/70 border-white/10 hover:border-white/30'
                    }`}
                  >
                    <div className="text-xs font-mono text-zinc-500">0{idx + 1} // RULE</div>
                    
                    <h3 className="text-lg font-black tracking-tight text-white leading-tight">
                      {card.en.split(card.highlight)[0]}
                      <span className="text-[#C6FF00]">{card.highlight}</span>
                      {card.en.split(card.highlight)[1]}
                    </h3>

                    {isSelected ? (
                      <div className="pt-2 border-t border-white/10 space-y-2 animate-fadeIn">
                        <div className="text-xs font-bold text-[#C6FF00]">{card.ua}</div>
                        <p className="text-xs text-zinc-300 leading-relaxed">{card.desc}</p>
                      </div>
                    ) : (
                      <div className="text-[11px] font-mono text-zinc-500 flex items-center gap-1">
                        <span>Натисни для пояснення</span>
                        <ChevronRight className="w-3 h-3 text-[#C6FF00]" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </section>

          {/* 4. MINDSET OF ENTREPRENEURS 💼 */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10 space-y-12">
            
            <div className="text-center space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#C6FF00]">
                💼 БІЗНЕС-ДОСВІД
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase">
                MINDSET OF ENTREPRENEURS
              </h2>
              <p className="text-zinc-400 max-w-xl mx-auto text-sm sm:text-base">
                Підтверджені висловлювання лідерів глобальних компаній. Чого можна навчитися з їхнього досвіду?
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ENTREPRENEURS.map((ent, idx) => (
                <div 
                  key={idx} 
                  className="rounded-2xl bg-zinc-900/80 border border-white/10 p-6 space-y-5 hover:border-[#C6FF00]/40 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <img 
                        src={ent.img} 
                        alt={ent.name} 
                        className="w-14 h-14 rounded-full object-cover border border-[#C6FF00]/40"
                      />
                      <div>
                        <h3 className="text-base font-bold text-white">{ent.name}</h3>
                        <span className="text-xs text-zinc-400 font-mono">{ent.company}</span>
                      </div>
                    </div>

                    <p className="text-xs text-zinc-300 italic leading-relaxed">
                      «{ent.quote}»
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 space-y-1">
                    <div className="text-[10px] font-mono text-[#C6FF00] uppercase font-bold">Чого навчитися:</div>
                    <p className="text-xs text-zinc-400 leading-normal">{ent.lesson}</p>
                  </div>
                </div>
              ))}
            </div>

          </section>

          {/* 5. MONEY QUOTE GENERATOR ⚡ */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-white/10">
            <div className="rounded-3xl bg-gradient-to-b from-zinc-900 to-black border border-white/20 p-8 sm:p-12 text-center space-y-8 relative overflow-hidden shadow-2xl">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C6FF00]/10 border border-[#C6FF00]/30 text-xs font-mono text-[#C6FF00]">
                <Zap className="w-4 h-4" />
                <span>ТВОЯ МОТИВАЦІЯ НА СЬОГОДНІ ⚡</span>
              </div>

              <div className="min-h-[120px] flex items-center justify-center">
                <blockquote className="text-2xl sm:text-3xl font-extrabold text-white max-w-2xl leading-snug animate-fadeIn">
                  «{MOTIVATIONAL_QUOTES[quoteIndex]}»
                </blockquote>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4 border-t border-white/10">
                <button
                  onClick={handleNextQuote}
                  className="px-8 py-3.5 rounded-xl bg-[#C6FF00] text-black font-extrabold text-xs uppercase tracking-wider hover:bg-[#b2e600] transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(198,255,0,0.3)] active:scale-95"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>ІНША МОТИВАЦІЯ →</span>
                </button>

                <div className="text-xs font-mono text-zinc-400">
                  Переглянуто цитат: <strong className="text-[#C6FF00]">{viewedQuotesCount}</strong>
                </div>
              </div>

            </div>
          </section>

        </main>
      )}

      {currentPage === 'academy' && (
        
        /* ==================== NO MONEY ACADEMY ==================== */
        <main className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C6FF00]/10 border border-[#C6FF00]/30 text-xs font-mono text-[#C6FF00]">
              <BookOpen className="w-4 h-4" />
              <span>NO MONEY ACADEMY 2.0</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
              НАВЧАЙСЯ ТА РОЗВИВАЙСЯ
            </h1>
            <p className="text-zinc-400 text-base sm:text-lg">
              Короткі практичні інтенсиви для швидкого старту. Отримуй реальні навички для виконання перших завдань.
            </p>
          </div>

          <div className="bg-zinc-900/60 border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#C6FF00]/10 text-[#C6FF00] flex items-center justify-center font-bold text-lg">
                {completedCourses.length}/{ACADEMY_COURSES.length}
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Твій прогрес у навчаннях</h3>
                <p className="text-xs text-zinc-400">Пройди уроки та відзнач виконані чеклісти</p>
              </div>
            </div>
            <div className="w-full sm:w-48 bg-zinc-800 h-3 rounded-full overflow-hidden">
              <div 
                className="bg-[#C6FF00] h-full transition-all duration-500" 
                style={{ width: `${(completedCourses.length / ACADEMY_COURSES.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ACADEMY_COURSES.map((course) => {
              const isCompleted = completedCourses.includes(course.id);
              return (
                <div 
                  key={course.id}
                  className={`rounded-2xl border p-6 flex flex-col justify-between transition-all space-y-6 ${
                    isCompleted 
                      ? 'bg-emerald-950/20 border-emerald-500/40' 
                      : 'bg-zinc-900/80 border-white/10 hover:border-white/30'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#C6FF00]">
                        {course.level}
                      </span>
                      <span className="text-xs font-mono text-zinc-400">{course.duration}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white">{course.title}</h3>
                    <p className="text-xs text-zinc-300 leading-relaxed">{course.description}</p>

                    <div className="space-y-2 pt-2 border-t border-white/5">
                      <div className="text-[11px] font-mono text-zinc-400 uppercase">Практичний чекліст:</div>
                      <div className="space-y-1.5">
                        {course.checklist.map((item, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                            <span className="text-[#C6FF00] mt-0.5">•</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => toggleCourseComplete(course.id)}
                    className={`w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                      isCompleted 
                        ? 'bg-emerald-500 text-black' 
                        : 'bg-zinc-800 text-white hover:bg-[#C6FF00] hover:text-black'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{isCompleted ? 'УРОК ПРОЙДЕНО' : 'ПОЗНАЧИТИ ЯК ПРОЙДЕНИЙ'}</span>
                  </button>
                </div>
              );
            })}
          </div>

        </main>
      )}

      {currentPage === 'dashboard' && (
        
        /* ==================== DASHBOARD / МІЙ NO MONEY ==================== */
        <main className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
          
          <div className="space-y-2 border-b border-white/10 pb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C6FF00]/10 border border-[#C6FF00]/30 text-xs font-mono text-[#C6FF00]">
              <UserCheck className="w-3.5 h-3.5" />
              <span>ОСОБИСТИЙ КАБІНЕТ</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white">МІЙ NO MONEY DASHBOARD</h1>
            <p className="text-zinc-400 text-sm sm:text-base">Ваш персональний центр керування цілями, вакансіями та розвитком.</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            
            {/* Left Column: Stats & Goals */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Progress Overview */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="p-5 rounded-2xl bg-zinc-900/80 border border-white/10 space-y-1">
                  <span className="text-xs font-mono text-zinc-400">Збережені вакансії</span>
                  <div className="text-2xl font-black text-[#C6FF00] font-mono">{savedJobs.length}</div>
                </div>
                <div className="p-5 rounded-2xl bg-zinc-900/80 border border-white/10 space-y-1">
                  <span className="text-xs font-mono text-zinc-400">Пройдено уроків</span>
                  <div className="text-2xl font-black text-white font-mono">{completedCourses.length}</div>
                </div>
                <div className="p-5 rounded-2xl bg-zinc-900/80 border border-white/10 space-y-1 col-span-2 sm:col-span-1">
                  <span className="text-xs font-mono text-zinc-400">Виконано цілей</span>
                  <div className="text-2xl font-black text-emerald-400 font-mono">
                    {userGoals.filter(g => g.done).length}/{userGoals.length}
                  </div>
                </div>
              </div>

              {/* Goals Widget */}
              <div className="rounded-2xl bg-zinc-900/80 border border-white/10 p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Target className="w-5 h-5 text-[#C6FF00]" />
                    <span>MY GOALS (МОЇ ЦІЛІ)</span>
                  </h3>
                  <span className="text-xs font-mono text-zinc-400">Трекер навичок</span>
                </div>

                <form onSubmit={addGoal} className="flex gap-2">
                  <input 
                    type="text"
                    placeholder="Додати нову ціль (напр. 'Написати перше резюме')..."
                    value={newGoalText}
                    onChange={(e) => setNewGoalText(e.target.value)}
                    className="flex-1 bg-black/60 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#C6FF00]"
                  />
                  <button 
                    type="submit"
                    className="px-4 py-2.5 rounded-xl bg-[#C6FF00] text-black font-bold text-xs uppercase hover:bg-[#b2e600] flex items-center gap-1"
                  >
                    <Plus className="w-4 h-4" /> Додати
                  </button>
                </form>

                <div className="space-y-3">
                  {userGoals.map(goal => (
                    <div 
                      key={goal.id} 
                      onClick={() => toggleGoal(goal.id)}
                      className={`p-3.5 rounded-xl border flex items-center gap-3 cursor-pointer transition-all ${
                        goal.done 
                          ? 'bg-emerald-950/20 border-emerald-500/30 text-zinc-400 line-through' 
                          : 'bg-black/40 border-white/5 text-zinc-200 hover:border-white/20'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded flex items-center justify-center ${goal.done ? 'bg-emerald-500 text-black' : 'border border-white/20'}`}>
                        {goal.done && <Check className="w-3.5 h-3.5" />}
                      </div>
                      <span className="text-xs font-medium">{goal.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Saved Jobs List */}
              <div className="rounded-2xl bg-zinc-900/80 border border-white/10 p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Heart className="w-5 h-5 text-[#C6FF00]" />
                    <span>ЗБЕРЕЖЕНІ ВАКАНСІЇ</span>
                  </h3>
                  <span className="text-xs font-mono text-zinc-400">{savedJobs.length} збережено</span>
                </div>

                {savedJobs.length > 0 ? (
                  <div className="space-y-4">
                    {INITIAL_JOBS.filter(j => savedJobs.includes(j.id)).map(job => (
                      <div key={job.id} className="p-4 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between gap-4">
                        <div>
                          <h4 className="text-sm font-bold text-white">{job.title}</h4>
                          <span className="text-xs text-[#C6FF00] font-mono">{job.salary}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <button 
                            onClick={() => setSelectedJob(job)}
                            className="px-3 py-1.5 rounded-lg bg-zinc-800 text-xs font-bold text-white hover:bg-[#C6FF00] hover:text-black"
                          >
                            Перегляд
                          </button>
                          <button 
                            onClick={() => toggleSaveJob(job.id)}
                            className="p-1.5 text-red-400 hover:text-zinc-400"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-xs text-zinc-500 border border-dashed border-white/10 rounded-xl">
                    У вас поки немає збережених вакансій. Натискайте ❤️ на картках вакансій для збереження.
                  </div>
                )}
              </div>

            </div>

            {/* Right Column: News & Recommendations */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="rounded-2xl bg-zinc-900/80 border border-white/10 p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Newspaper className="w-5 h-5 text-[#C6FF00]" />
                    <span>NO MONEY NEWS</span>
                  </h3>
                  <span className="text-[10px] font-mono bg-[#C6FF00]/10 text-[#C6FF00] px-2 py-0.5 rounded">ВІД КОМАНДИ</span>
                </div>

                <div className="space-y-4">
                  {NO_MONEY_NEWS.map(news => (
                    <div key={news.id} className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2">
                      <span className="text-[10px] font-mono text-zinc-400">{news.date}</span>
                      <h4 className="text-sm font-bold text-white">{news.title}</h4>
                      <p className="text-xs text-zinc-400 leading-relaxed">{news.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </main>
      )}

      {currentPage === 'community' && (
        
        /* ==================== COMMUNITY & SAFETY ==================== */
        <main className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C6FF00]/10 border border-[#C6FF00]/30 text-xs font-mono text-[#C6FF00]">
              <Users className="w-4 h-4" />
              <span>СПІЛЬНОТА НОВОГО ПОКОЛІННЯ</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight">
              YOU ARE NOT ALONE.<br />
              <span className="text-[#C6FF00]">YOU ARE NO MONEY.</span>
            </h1>
            <p className="text-zinc-400 text-base sm:text-lg">
              Ти частина спільноти молодих людей, які разом вивчають digital, підтримують один одного та разом розвивають навички.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-zinc-900/80 border border-white/10 space-y-4">
              <ShieldCheck className="w-10 h-10 text-[#C6FF00]" />
              <h3 className="text-xl font-bold text-white">Безпека неповнолітніх</h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Ми суворо відсікаємо шахрайські схеми, спам та вимоги грошових внесків. Кожен замовник проходить верифікацію.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-zinc-900/80 border border-white/10 space-y-4">
              <UserCheck className="w-10 h-10 text-[#C6FF00]" />
              <h3 className="text-xl font-bold text-white">Підтримка менторів</h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Потребуєш допомоги у виборі напрямку чи перевірці першого креативу? Наша команда підкаже вірний шлях.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-zinc-900/80 border border-white/10 space-y-4">
              <Award className="w-10 h-10 text-[#C6FF00]" />
              <h3 className="text-xl font-bold text-white">Практика замість теорії</h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Ніяких пустих лекцій. Тільки конкретні кейси, завдання та підробіток для формування власного портфоліо.
              </p>
            </div>
          </div>

          {/* FAQ */}
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-2xl font-bold text-white text-center">Часті запитання (FAQ)</h2>
            <div className="space-y-4">
              {[
                { q: 'Чи потрібно щось платити за користування платформою?', a: 'Ні! NO MONEY абсолютно безкоштовний для всіх кандидатів. Ми не беремо жодних комісій чи плати за курси.' },
                { q: 'Мені 15 років. Чи можу я знайти підробіток?', a: 'Так, на платформі є вакансії з поміткою 15+ (наприклад, модерація чатів, створення коротких відео TikTok).' },
                { q: 'Що робити, якщо я взагалі нічого не вмію?', a: 'Переходь у розділ ACADEMY та проходь базові 15-хвилинні уроки з SMM, монтажу та дизайну.' }
              ].map((faq, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-zinc-900/60 border border-white/10 space-y-2">
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#C6FF00]" />
                    <span>{faq.q}</span>
                  </h4>
                  <p className="text-xs text-zinc-400 pl-6">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

        </main>
      )}

      {currentPage === 'home' && (
        
        /* ==================== HOME PAGE (MAIN NO MONEY 2.0) ==================== */
        <main>
          {/* 1. HERO SECTION - WOW EFFECT */}
          <section id="hero" className="relative pt-12 pb-24 md:pt-20 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-8 text-left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#C6FF00]">
                  <span className="w-2 h-2 rounded-full bg-[#C6FF00] animate-pulse" />
                  ПЛАТФОРМА #1 ДЛЯ СТАРТУ В DIGITAL
                </div>

                <div className="space-y-3">
                  <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter uppercase leading-[0.95] text-white">
                    NO MONEY<span className="text-[#C6FF00]">.</span><br />
                    NO EXCUSES<span className="text-[#C6FF00]">.</span>
                  </h1>
                  <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#C6FF00] font-mono">
                    JUST ACTION.
                  </h2>
                </div>

                <p className="text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed">
                  Твій старт у світі digital. Обирай напрямок, розвивай навички та знаходь можливості першого заробітку.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  <button 
                    onClick={() => scrollToSection('jobs')}
                    className="px-8 py-4 rounded-xl bg-[#C6FF00] text-black font-extrabold text-sm uppercase tracking-wider hover:bg-[#b2e600] transition-all shadow-[0_0_25px_rgba(198,255,0,0.35)] hover:shadow-[0_0_35px_rgba(198,255,0,0.5)] active:scale-98 flex items-center justify-center gap-2"
                  >
                    <span>ЗНАЙТИ ПІДРОБІТОК →</span>
                  </button>

                  <button 
                    onClick={() => scrollToSection('directions')}
                    className="px-8 py-4 rounded-xl bg-zinc-900 border border-white/20 text-white font-extrabold text-sm uppercase tracking-wider hover:bg-zinc-800 transition-all flex items-center justify-center gap-2"
                  >
                    <span>ОБРАТИ НАПРЯМОК →</span>
                  </button>
                </div>

                <div className="pt-8 grid grid-cols-3 gap-6 border-t border-white/10">
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">100%</div>
                    <div className="text-xs text-zinc-400 mt-1">Реальний досвід</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#C6FF00] font-mono">0₴</div>
                    <div className="text-xs text-zinc-400 mt-1">Вкладів не потрібно</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">15+</div>
                    <div className="text-xs text-zinc-400 mt-1">Віковий поріг</div>
                  </div>
                </div>
              </div>

              {/* Dynamic Interactive Card */}
              <div className="lg:col-span-5 relative">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#C6FF00]/40 to-emerald-500/20 rounded-3xl blur-2xl opacity-50" />
                  
                  <div className="relative rounded-2xl bg-zinc-900/90 border border-white/15 p-6 backdrop-blur-xl shadow-2xl space-y-6">
                    <div className="flex items-center justify-between pb-4 border-b border-white/10">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                        <span className="text-xs font-mono text-zinc-400 ml-2">nomoney.digital/dashboard</span>
                      </div>
                      <span className="text-xs font-mono bg-[#C6FF00]/10 text-[#C6FF00] px-2.5 py-1 rounded-full border border-[#C6FF00]/30">
                        LIVE FEED
                      </span>
                    </div>

                    <div className="space-y-4">
                      <div className="p-4 rounded-xl bg-black/50 border border-white/5 space-y-2">
                        <div className="flex justify-between text-xs text-zinc-400 font-mono">
                          <span>НОВІ ТАСКИ СЬОГОДНІ</span>
                          <span className="text-[#C6FF00]">+24 пропозиції</span>
                        </div>
                        <div className="text-sm font-semibold text-white">Traffic & SMM Tasks Available</div>
                        <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                          <div className="bg-[#C6FF00] h-full w-[84%]" />
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between hover:border-[#C6FF00]/40 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 rounded-lg bg-[#C6FF00]/10 text-[#C6FF00]">
                            <Zap className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-xs font-mono text-zinc-400">Швидкий підробіток</div>
                            <div className="text-sm font-bold text-white">Content Creator for Reels</div>
                          </div>
                        </div>
                        <span className="text-xs font-mono font-bold text-[#C6FF00] bg-[#C6FF00]/10 px-2 py-1 rounded">
                          500 ₴ / відео
                        </span>
                      </div>

                      <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center gap-3">
                        <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                        <div className="text-xs text-emerald-200">
                          <span className="font-bold">100% Безпека:</span> Тільки перевірені замовники та прозорі умови без спаму та скаму.
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 flex items-center justify-between text-xs text-zinc-400 font-mono">
                      <span>Спільнота: <strong className="text-white">1,400+ підлітків</strong></span>
                      <span className="flex items-center gap-1 text-[#C6FF00]">
                        <span className="w-2 h-2 rounded-full bg-[#C6FF00] animate-ping" />
                        Online
                      </span>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* 2. SMART QUIZ SECTION - НЕ ЗНАЄШ, ІЗ ЧОГО ПОЧАТИ? */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-white/10">
            <div className="rounded-3xl bg-zinc-900/90 border border-white/20 p-8 sm:p-12 space-y-8 text-center relative overflow-hidden shadow-2xl">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C6FF00]/10 border border-[#C6FF00]/30 text-xs font-mono text-[#C6FF00]">
                <Compass className="w-4 h-4" />
                <span>ПЕРСОНАЛЬНИЙ ПОШУК НАПРЯМКУ</span>
              </div>

              <div className="space-y-2 max-w-2xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-black text-white">НЕ ЗНАЄШ, ІЗ ЧОГО ПОЧАТИ?</h2>
                <p className="text-xs sm:text-sm text-zinc-400">
                  Дай відповідь на 3 запитання — ми допоможемо обрати твій ідеальний напрямок.
                </p>
              </div>

              {quizStep === 1 && (
                <div className="space-y-6 animate-fadeIn">
                  <span className="text-xs font-mono text-zinc-500 uppercase">Крок 1 з 3: Що тобі найцікавіше?</span>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { id: 'video', label: '🎬 Монтаж та створення коротких відео' },
                      { id: 'design', label: '🎨 Дизайн, банери та візуал' },
                      { id: 'smm', label: '📱 Соцмережі, дописи та чати' },
                      { id: 'traffic', label: '📈 Реклама, трафік та цифри' }
                    ].map(opt => (
                      <button 
                        key={opt.id}
                        onClick={() => handleQuizAnswer('interest', opt.id)}
                        className="p-4 rounded-xl bg-black/60 border border-white/10 text-xs font-bold text-white hover:border-[#C6FF00] hover:text-[#C6FF00] transition-all text-left"
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {quizStep === 2 && (
                <div className="space-y-6 animate-fadeIn">
                  <span className="text-xs font-mono text-zinc-500 uppercase">Крок 2 з 3: Скільки часу готовий приділяти?</span>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {[
                      { id: '1-2', label: '1-2 години на день' },
                      { id: '3-4', label: '3-4 години на день' },
                      { id: 'full', label: 'Гнучкий графік' }
                    ].map(opt => (
                      <button 
                        key={opt.id}
                        onClick={() => handleQuizAnswer('time', opt.id)}
                        className="p-4 rounded-xl bg-black/60 border border-white/10 text-xs font-bold text-white hover:border-[#C6FF00] hover:text-[#C6FF00] transition-all"
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {quizStep === 3 && (
                <div className="space-y-6 animate-fadeIn">
                  <span className="text-xs font-mono text-zinc-500 uppercase">Крок 3 з 3: Чи маєш ти вже досвід?</span>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { id: 'none', label: 'Абсолютний новачок (з 0)' },
                      { id: 'some', label: 'Пробував самостійно / є база' }
                    ].map(opt => (
                      <button 
                        key={opt.id}
                        onClick={() => handleQuizAnswer('experience', opt.id)}
                        className="p-4 rounded-xl bg-black/60 border border-white/10 text-xs font-bold text-white hover:border-[#C6FF00] hover:text-[#C6FF00] transition-all"
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {quizStep === 4 && quizResult && (
                <div className="space-y-6 animate-scaleUp p-6 rounded-2xl bg-emerald-950/30 border border-emerald-500/40">
                  <div className="text-xs font-mono text-[#C6FF00]">РЕКОМЕНДОВАНИЙ НАПРЯМОК ДЛЯ ТЕБЕ:</div>
                  <h3 className="text-2xl font-extrabold text-white">{quizResult.title}</h3>
                  <p className="text-xs text-zinc-300 leading-relaxed max-w-lg mx-auto">{quizResult.desc}</p>

                  <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
                    <button 
                      onClick={() => {
                        setSelectedCategory(quizResult.id);
                        scrollToSection('jobs');
                      }}
                      className="px-6 py-3 rounded-xl bg-[#C6FF00] text-black font-extrabold text-xs uppercase tracking-wider hover:bg-[#b2e600]"
                    >
                      Переглянути вакансії у цій сфері →
                    </button>
                    <button 
                      onClick={resetQuiz}
                      className="px-6 py-3 rounded-xl bg-zinc-800 text-white font-bold text-xs uppercase hover:bg-zinc-700"
                    >
                      Пройти тест знову
                    </button>
                  </div>
                </div>
              )}

            </div>
          </section>

          {/* 3. DIRECTIONS SECTION */}
          <section id="directions" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
            <div className="text-center space-y-4 mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#C6FF00]">
                ОБЕРИ СВІЙ ШЛЯХ
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                КЛЮЧОВІ НАПРЯМКИ РОБОТИ
              </h2>
              <p className="text-zinc-400 max-w-2xl mx-auto text-base sm:text-lg">
                Обирай сфери digital-маркетингу, які тобі найбільше до душі. Вхід можливий з нульовим досвідом!
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {DIRECTIONS.map((item) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={item.id}
                    className="group relative rounded-2xl bg-zinc-900/60 border border-white/10 p-7 hover:border-[#C6FF00]/50 hover:bg-zinc-900 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                  >
                    <div className="space-y-5">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-xl bg-[#C6FF00]/10 border border-[#C6FF00]/20 flex items-center justify-center text-[#C6FF00] group-hover:bg-[#C6FF00] group-hover:text-black transition-colors">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300">
                          {item.badge}
                        </span>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-[#C6FF00] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-zinc-400 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                      <button 
                        onClick={() => setSelectedDirectionModal(item)}
                        className="text-xs font-bold text-[#C6FF00] group-hover:underline flex items-center gap-1.5"
                      >
                        <span>ДЕТАЛЬНІШЕ</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                      <span className="text-[10px] text-zinc-400 font-mono uppercase">Новачку OK</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* 4. JOBS SECTION (WITH SAVED ❤️ FEATURE) */}
          <section id="jobs" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#C6FF00]">
                  АКТУАЛЬНІ ПРОЄКТИ
                </div>
                <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                  ВАКАНСІЇ ТА ПІДРОБІТОК
                </h2>
                <p className="text-zinc-400 max-w-xl text-sm sm:text-base">
                  Прозорі завдання, чесна оплата та можливість поєднувати з навчанням.
                </p>
              </div>

              <div className="w-full md:w-80 relative">
                <Search className="w-5 h-5 absolute left-3.5 top-1/2 transform -translate-y-1/2 text-zinc-400" />
                <input 
                  type="text"
                  placeholder="Пошук вакансій чи навичок..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-zinc-900 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-zinc-400 focus:outline-none focus:border-[#C6FF00] transition-colors"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-xl text-xs font-mono uppercase whitespace-nowrap transition-all ${
                  selectedCategory === 'all' 
                    ? 'bg-[#C6FF00] text-black font-bold shadow-[0_0_15px_rgba(198,255,0,0.3)]' 
                    : 'bg-zinc-900 text-zinc-400 hover:text-white border border-white/5'
                }`}
              >
                Всі вакансії ({INITIAL_JOBS.length})
              </button>
              {DIRECTIONS.map(dir => (
                <button
                  key={dir.id}
                  onClick={() => setSelectedCategory(dir.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono uppercase whitespace-nowrap transition-all ${
                    selectedCategory === dir.id 
                      ? 'bg-[#C6FF00] text-black font-bold shadow-[0_0_15px_rgba(198,255,0,0.3)]' 
                      : 'bg-zinc-900 text-zinc-400 hover:text-white border border-white/5'
                  }`}
                >
                  {dir.title}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => {
                  const isSaved = savedJobs.includes(job.id);
                  return (
                    <div 
                      key={job.id} 
                      className="rounded-2xl bg-zinc-900/80 border border-white/10 p-6 flex flex-col justify-between hover:border-white/25 transition-all space-y-6 relative overflow-hidden"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono text-zinc-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                          {job.postedDate}
                        </span>
                        
                        <button 
                          onClick={() => toggleSaveJob(job.id)}
                          className={`p-2 rounded-xl border transition-all ${
                            isSaved 
                              ? 'bg-red-500/20 border-red-500 text-red-400' 
                              : 'bg-black/40 border-white/10 text-zinc-400 hover:text-white'
                          }`}
                          title="Зберегти в обране"
                        >
                          <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                        </button>
                      </div>

                      <div className="space-y-4">
                        <div className="space-y-1">
                          <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">{job.company}</span>
                          <h3 className="text-lg font-bold text-white line-clamp-1">{job.title}</h3>
                        </div>

                        <div className="flex flex-wrap gap-2 text-[11px] font-mono">
                          <span className="px-2.5 py-1 rounded-lg bg-white/5 text-zinc-300 border border-white/5">
                            {job.type}
                          </span>
                          <span className="px-2.5 py-1 rounded-lg bg-white/5 text-[#C6FF00] border border-white/5">
                            Вік: {job.age}
                          </span>
                        </div>

                        <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3">
                          {job.description}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-white/10 space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono text-zinc-400">Оплата:</span>
                          <span className="text-sm font-bold font-mono text-[#C6FF00]">{job.salary}</span>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <button 
                            onClick={() => setSelectedJob(job)}
                            className="py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs transition-all text-center"
                          >
                            Детальніше
                          </button>
                          <button 
                            onClick={() => {
                              setSelectedJob(job);
                            }}
                            className="py-2.5 rounded-xl bg-[#C6FF00] hover:bg-[#b2e600] text-black font-extrabold text-xs transition-all text-center"
                          >
                            Відгукнутися
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="col-span-full text-center py-16 bg-zinc-900/40 rounded-2xl border border-white/5">
                  <AlertCircle className="w-10 h-10 text-zinc-500 mx-auto mb-3" />
                  <div className="text-base text-zinc-300 font-semibold">Вакансій за вашим запитом не знайдено</div>
                  <div className="text-xs text-zinc-500 mt-1">Спробуйте змінити категорії або запит у пошуку</div>
                </div>
              )}
            </div>
          </section>

          {/* 5. WHY NO MONEY SECTION */}
          <section id="why-us" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
            <div className="text-center space-y-4 mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#C6FF00]">
                WHY NO MONEY?
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                ЧОМУ СМЕЛИВО ОБИРАЮТЬ NO MONEY?
              </h2>
              <p className="text-zinc-400 max-w-2xl mx-auto text-base">
                Ми створюємо прозорий трамплін у світ онлайн-професій без фейкових обіцянок "мільйонів за годину".
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  num: '01',
                  title: 'FIRST STEP',
                  desc: 'Можливості для новачків. Перші практичні завдання, де цінують бажання вчитися, а не дипломи.'
                },
                {
                  num: '02',
                  title: 'REAL SKILLS',
                  desc: 'Практичні навички для digital. Отримуй реальний практичний досвід, який стане основою резюме.'
                },
                {
                  num: '03',
                  title: 'NEW OPPORTUNITIES',
                  desc: 'Пошук перших реальних проєктів у сфері трафіку, SMM та монтажу з прозорою оплатою.'
                },
                {
                  num: '04',
                  title: 'NO MONEY COMMUNITY',
                  desc: 'Спільнота молоді, які разом розвиваються, обмінюються досвідом та створюють стартапи.'
                }
              ].map((block, idx) => (
                <div 
                  key={idx}
                  className="rounded-2xl bg-zinc-900/60 border border-white/10 p-8 relative overflow-hidden group hover:border-[#C6FF00]/50 transition-all"
                >
                  <div className="text-5xl font-black font-mono text-zinc-800 group-hover:text-[#C6FF00]/20 transition-colors mb-6">
                    {block.num}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{block.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{block.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 6. APPLICATION FORM SECTION */}
          <section id="apply" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-white/10">
            <div className="rounded-3xl bg-zinc-900/90 border border-white/15 p-6 sm:p-12 space-y-8 backdrop-blur-xl relative">
              
              <div className="text-center space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C6FF00]/10 border border-[#C6FF00]/30 text-xs font-mono text-[#C6FF00]">
                  ГОТОВИЙ ПОЧАТИ?
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white">ЗАПОВНИ КОРОТКУ АНКЕТУ</h2>
                <p className="text-zinc-400 text-sm sm:text-base max-w-lg mx-auto">
                  Заповни коротку анкету та зроби перший крок у digital. Ми зв’яжемося протягом 24 годин.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 bg-emerald-500 text-black rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold text-white">Заявку успішно надіслано!</h3>
                  <p className="text-sm text-emerald-200 max-w-md mx-auto">
                    Дякуємо! Ми отримали твоє повідомлення. Перевіряй свої сповіщення в Telegram або на пошті найближчим часом.
                  </p>
                  <button 
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-emerald-500 text-black font-bold text-xs uppercase tracking-wider hover:bg-emerald-400 transition-colors"
                  >
                    Надіслати ще одну анкету
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  {formError && (
                    <div className="p-4 rounded-xl bg-red-950/80 border border-red-500/50 text-red-200 text-xs font-medium flex items-center gap-3">
                      <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                      <span>{formError}</span>
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-zinc-300 uppercase">Ім’я *</label>
                      <input 
                        type="text"
                        placeholder="Наприклад: Олексій"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#C6FF00] transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono text-zinc-300 uppercase">Вік *</label>
                      <input 
                        type="number"
                        placeholder="Скільки тобі років? (напр. 16)"
                        value={formData.age}
                        onChange={(e) => setFormData({...formData, age: e.target.value})}
                        className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#C6FF00] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-zinc-300 uppercase">Telegram або Email *</label>
                      <input 
                        type="text"
                        placeholder="@username або name@mail.com"
                        value={formData.contact}
                        onChange={(e) => setFormData({...formData, contact: e.target.value})}
                        className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#C6FF00] transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono text-zinc-300 uppercase">Напрямок, який цікавить</label>
                      <select 
                        value={formData.direction}
                        onChange={(e) => setFormData({...formData, direction: e.target.value})}
                        className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C6FF00] transition-colors"
                      >
                        <option value="traffic">Traffic Management</option>
                        <option value="smm">SMM & Community</option>
                        <option value="content">Content Creator (Video)</option>
                        <option value="affiliate">Affiliate Marketing</option>
                        <option value="design">Digital Design</option>
                        <option value="assistant">Digital Assistant</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-zinc-300 uppercase">Чи є досвід?</label>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() => setFormData({...formData, experience: 'no'})}
                        className={`py-3 px-4 rounded-xl border text-xs font-bold transition-all ${
                          formData.experience === 'no' 
                            ? 'bg-[#C6FF00] text-black border-[#C6FF00]' 
                            : 'bg-black/40 text-zinc-400 border-white/10'
                        }`}
                      >
                        Ні, я новачок (хочу вчитися)
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({...formData, experience: 'yes'})}
                        className={`py-3 px-4 rounded-xl border text-xs font-bold transition-all ${
                          formData.experience === 'yes' 
                            ? 'bg-[#C6FF00] text-black border-[#C6FF00]' 
                            : 'bg-black/40 text-zinc-400 border-white/10'
                        }`}
                      >
                        Так, є мінімальний досвід
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-zinc-300 uppercase">Коротко про себе</label>
                    <textarea 
                      rows={3}
                      placeholder="Розкажи про свої захоплення, скільки часу маєш та чому хочеш спробувати digital..."
                      value={formData.about}
                      onChange={(e) => setFormData({...formData, about: e.target.value})}
                      className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#C6FF00] transition-colors resize-none"
                    />
                  </div>

                  <div className="space-y-3 pt-2">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input 
                        type="checkbox"
                        checked={formData.agreedTerms}
                        onChange={(e) => setFormData({...formData, agreedTerms: e.target.checked})}
                        className="mt-1 rounded bg-black border-white/20 text-[#C6FF00] focus:ring-0"
                      />
                      <span className="text-xs text-zinc-400 leading-normal">
                        Я погоджуюся на обробку моїх персональних даних відповідно до законодавства України.
                      </span>
                    </label>

                    <label className="flex items-start gap-3 cursor-pointer">
                      <input 
                        type="checkbox"
                        checked={formData.agreedSafety}
                        onChange={(e) => setFormData({...formData, agreedSafety: e.target.checked})}
                        className="mt-1 rounded bg-black border-white/20 text-[#C6FF00] focus:ring-0"
                      />
                      <span className="text-xs text-zinc-400 leading-normal">
                        Я ознайомлений з <span className="text-white underline">правилами безпечної співпраці</span> (ніяких перерахунків власних коштів, спам-схем чи обходу вікових лімітів).
                      </span>
                    </label>
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-[#C6FF00] text-black font-extrabold text-sm uppercase tracking-wider hover:bg-[#b2e600] transition-all shadow-[0_0_25px_rgba(198,255,0,0.3)] active:scale-98 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>НАДСИЛАННЯ...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>НАДІСЛАТИ ЗАЯВКУ</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </section>
        </main>
      )}

      {/* FOOTER */}
      <footer className="bg-black border-t border-white/10 pt-16 pb-12 px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="grid md:grid-cols-12 gap-8 items-start">
            
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#C6FF00] flex items-center justify-center font-black text-black text-lg">
                  NM
                </div>
                <span className="font-extrabold text-2xl tracking-tighter text-white">
                  NO MONEY<span className="text-[#C6FF00]">.</span>
                </span>
              </div>
              <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
                Платформа для молоді та підлітків, які шукають свій перший легальний та безпечний підробіток у сфері інтернет-трафіку, SMM та створення контенту.
              </p>
            </div>

            <div className="md:col-span-3 space-y-3">
              <div className="text-xs font-mono text-[#C6FF00] uppercase tracking-wider">Навігація</div>
              <ul className="space-y-2 text-xs text-zinc-400">
                <li><button onClick={() => { setCurrentPage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white">Головна</button></li>
                <li><button onClick={() => { setCurrentPage('academy'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white">NO MONEY Academy</button></li>
                <li><button onClick={() => { setCurrentPage('motivation'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white font-bold text-[#C6FF00]">Motivation</button></li>
                <li><button onClick={() => { setCurrentPage('dashboard'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white">Особистий кабінет</button></li>
                <li><button onClick={() => { setCurrentPage('community'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white">Спільнота</button></li>
              </ul>
            </div>

            <div className="md:col-span-4 space-y-3">
              <div className="text-xs font-mono text-[#C6FF00] uppercase tracking-wider">Безпека та правила</div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Платформа категорично проти шахрайства, фінансових пірамід та сумнівних завдань. Всі проекти проходять верифікацію на відповідність віковим нормам.
              </p>
            </div>

          </div>

          {/* TEAM LEADERSHIP CREDIT - MANDATORY REQUIREMENT */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            
            <div className="flex items-center gap-8 bg-zinc-900/80 px-6 py-3 rounded-2xl border border-white/10">
              <div className="flex items-center gap-2">
                <span className="text-xs text-zinc-400 uppercase font-mono">CEO:</span>
                <span className="text-sm font-extrabold text-white tracking-wide font-mono">Arman</span>
              </div>
              <div className="h-4 w-[1px] bg-white/20" />
              <div className="flex items-center gap-2">
                <span className="text-xs text-zinc-400 uppercase font-mono">Помічник:</span>
                <span className="text-sm font-extrabold text-[#C6FF00] tracking-wide font-mono">Seva</span>
              </div>
            </div>

            <div className="text-xs font-mono text-zinc-400">
              © 2026 NO MONEY. All rights reserved.
            </div>

          </div>

        </div>
      </footer>

      {/* MODALS */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-zinc-900 border border-white/20 rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-6 relative animate-scaleUp">
            
            <button 
              onClick={() => setSelectedJob(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="text-xs font-mono text-[#C6FF00] uppercase">{selectedJob.company}</span>
              <h3 className="text-2xl font-bold text-white">{selectedJob.title}</h3>
              <div className="flex items-center gap-3 text-xs font-mono text-zinc-400 pt-1">
                <span>Формат: <strong className="text-white">{selectedJob.type}</strong></span>
                <span>•</span>
                <span>Вік: <strong className="text-[#C6FF00]">{selectedJob.age}</strong></span>
              </div>
            </div>

            <div className="space-y-4 text-sm text-zinc-300 border-t border-b border-white/10 py-4">
              <div>
                <strong className="text-xs font-mono text-zinc-400 uppercase block mb-1">Опис завдань:</strong>
                <p className="leading-relaxed">{selectedJob.description}</p>
              </div>

              <div>
                <strong className="text-xs font-mono text-zinc-400 uppercase block mb-2">Вимоги до кандидата:</strong>
                <ul className="space-y-1.5">
                  {selectedJob.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs">
                      <Check className="w-4 h-4 text-[#C6FF00]" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3.5 rounded-xl bg-black/50 border border-white/5 flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-400">Орієнтовний дохід:</span>
                <span className="text-base font-extrabold font-mono text-[#C6FF00]">{selectedJob.salary}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button 
                onClick={() => {
                  const jobName = selectedJob.title;
                  setSelectedJob(null);
                  scrollToSection('apply');
                  setFormData(prev => ({ ...prev, about: `Цікавить вакансія: ${jobName}` }));
                }}
                className="flex-1 py-3.5 rounded-xl bg-[#C6FF00] text-black font-extrabold text-xs uppercase tracking-wider hover:bg-[#b2e600] transition-colors flex items-center justify-center gap-2"
              >
                <span>Відгукнутися на вакансію</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}

      {selectedDirectionModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-white/20 rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 relative animate-scaleUp">
            
            <button 
              onClick={() => setSelectedDirectionModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 text-zinc-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="text-xs font-mono text-[#C6FF00] uppercase">Деталі напрямку</span>
              <h3 className="text-2xl font-bold text-white">{selectedDirectionModal.title}</h3>
            </div>

            <p className="text-sm text-zinc-300 leading-relaxed">
              {selectedDirectionModal.details}
            </p>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div className="text-xs font-mono text-zinc-400 uppercase">Що потрібно для старту:</div>
              <p className="text-xs text-zinc-300">
                Смартфон або ноутбук, 2-3 години вільного часу на день та велике бажання опанувати інтернет-професію.
              </p>
            </div>

            <button 
              onClick={() => {
                const dirId = selectedDirectionModal.id;
                setSelectedDirectionModal(null);
                scrollToSection('apply');
                setFormData(prev => ({ ...prev, direction: dirId }));
              }}
              className="w-full py-3.5 rounded-xl bg-[#C6FF00] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#b2e600] transition-colors"
            >
              Обрати цей напрямок у формі
            </button>

          </div>
        </div>
      )}

    </div>
  );
}