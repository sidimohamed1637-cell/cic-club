/**
 * إعدادات وبيانات نادي الإبداع والابتكار (CIC)
 * ألوان الشعار: الأزرق التقني (#0072B1 و #00A8E8)، الأسود (#0b0f19)، والأبيض (#ffffff)
 */

export const CLUB_CONFIG = {
  // المعلومات الأساسية للنادي
  name: "نادي الإبداع والابتكار",
  shortName: "CIC",
  englishName: "Creativity & Innovation Club",
  slogan: "فضاء طلابي لتطوير المهارات الهندسية، الروبوتات والأنظمة الذكية",
  faculty: "كلية العلوم والتكنولوجيا",
  university: "جامعة تامنغست",
  academicYear: "2026 / 2027",
  
  // البريد الإلكتروني الرسمي وأرقام التواصل
  email: "creativityinnovationclubtam@gmail.com",
  phone: "", // سيتوفر قريباً
  whatsappNumber: "", // سيتوفر قريباً عند تفعيل الخط الرسمي
  address: "كلية العلوم والتكنولوجيا، القطب الجامعي، تامنغست",

  // الروابط الرسمية وشبكات التواصل الاجتماعي
  socialLinks: {
    facebook: "https://www.facebook.com/share/19guWubGZ1/",
    instagram: "", // قيد التجهيز - سيتوفر قريباً
    whatsapp: "", // سيتوفر قريباً
    linkedin: "",
    discord: "",
  },

  // مسارات الشعارات والصور (المحفوظة في مجلد public/images)
  images: {
    clubLogo: "./images/club_logo.jpg",
    facultyLogo: "./images/faculty_logo.jpg",
    universityLogo: "./images/university_logo.jpg",
    presidentPhoto: "./images/president.jpg",
    vicePresidentPhoto: "./images/vice_president.jpg",
    mediaOfficerPhoto: "./images/media_officer.jpg",
    activitiesOfficerPhoto: "./images/activities_officer.jpg",
    financeOfficerPhoto: "./images/finance_officer.jpg",
    memberPlaceholder: "./images/member_placeholder.jpg",
  },

  // وثائق النادي الرسمية
  documents: {
    fileName: "البطاقة_التقنية_لنادي_الإبداع_والابتكار_CIC.pdf",
    pdfUrl: "./documents/البطاقة_التقنية_لنادي_الإبداع_والابتكار_CIC.pdf",
    description: "البطاقة التقنية والتعريفية الرسمية للنادي متضمنة الرؤية، الأهداف، المحاور التكوينية، وشروط العضوية المعتمدة."
  },

  // المحاور التقنية الأساسية (واقعية وبسيطة)
  features: [
    {
      id: "embedded",
      title: "الإلكترونيات والأنظمة المدمجة",
      description: "برمجة المتحكمات الدقيقة (Arduino, ESP32, STM32) والتعامل مع الحساسات والدوائر الإلكترونية عملياً.",
      icon: "Cpu",
      badge: "عتاد وهندسة"
    },
    {
      id: "robotics",
      title: "الروبوتات والميكاترونيكس",
      description: "تصميم وتركيب الروبوتات المتحركة والأذرع الآلية وبرمجة خوارزميات التوجيه وتفادي العقبات.",
      icon: "Bot",
      badge: "روبوتيكس"
    },
    {
      id: "programming",
      title: "البرمجة وتطوير البرمجيات",
      description: "تطوير المهارات البرمجية بلغات مثل C++ و Python وربط العتاد بواجهات الاستخدام والأنظمة الذكية.",
      icon: "Code2",
      badge: "برمجيات"
    },
    {
      id: "pcb",
      title: "تصميم الدوائر المطبوعة (PCB)",
      description: "رسم المخططات الإلكترونية وتصميم لوحات PCB وتجهيزها للتنفيذ والاختبار المخبري.",
      icon: "Layers",
      badge: "تصميم وتصنيع"
    }
  ],

  // بطاقة الأستاذ المشرف
  supervisor: {
    name: "د. أستاذ جامعي مشرف",
    role: "الأستاذ المشرف على النادي",
    department: "كلية العلوم والتكنولوجيا - جامعة تامنغست",
    description: "مرافقة وتأطير علمي وأكاديمي لنشاطات النادي ومشاريع الطلبة.",
    image: "./images/member_placeholder.jpg"
  },

  // أعضاء المكتب التنفيذي
  executiveBoard: [
    {
      id: 1,
      name: "رئيس النادي",
      role: "رئيس نادي الإبداع والابتكار",
      specialty: "هندسة كهربائية وإلكترونيات",
      image: "./images/president.jpg",
      badge: "الرئاسة"
    },
    {
      id: 2,
      name: "نائب الرئيس",
      role: "نائب رئيس النادي",
      specialty: "هندسة إلكتروميكانيكية",
      image: "./images/vice_president.jpg",
      badge: "الإدارة"
    },
    {
      id: 3,
      name: "الأمين العام",
      role: "الأمانة العامة والشؤون الإدارية",
      specialty: "إعلام آلي وهندسة برمجيات",
      image: "./images/member_placeholder.jpg",
      badge: "الأمانة العامة"
    },
    {
      id: 4,
      name: "مسؤول الإعلام والاتصال",
      role: "خلية الإعلام والتصميم",
      specialty: "تطوير ويب وإعلام رقمي",
      image: "./images/media_officer.jpg",
      badge: "الإعلام"
    },
    {
      id: 5,
      name: "مسؤول الأنشطة والمشاريع",
      role: "منسق الورشات التقنية",
      specialty: "أنظمة مدمجة وإلكترونيات",
      image: "./images/activities_officer.jpg",
      badge: "الأنشطة"
    },
    {
      id: 6,
      name: "مسؤول المالية والعتاد",
      role: "إدارة الوسائل واللوجستيك",
      specialty: "هندسة ميكانيكية وعتاد",
      image: "./images/finance_officer.jpg",
      badge: "اللوجستيك"
    }
  ],

  // دورات أولية بسيطة قابلة للإدارة والتعديل من لوحة الأدمن
  initialCourses: [
    {
      id: "c1",
      title: "أساسيات برمجة الأردوينو وبناء الروبوتات",
      description: "دورة تطبيقية للتعرف على المتحكمات الدقيقة، المستشعرات التناظرية والرقمية، وبرمجة محركات السيرفو والـ DC.",
      instructor: "مؤطرو خلية الروبوتيكس",
      duration: "4 أسابيع",
      date: "يومي السبت والأربعاء",
      seats: 25,
      category: "روبوتات وإلكترونيات",
      status: "open",
      tags: ["Arduino", "Robotics", "C++"]
    },
    {
      id: "c2",
      title: "إنترنت الأشياء (IoT) والأنظمة المدمجة مع ESP32",
      description: "ربط العتاد بالشبكة والتحكم بالأجهزة ومراقبة الحساسات عن بعد عبر بروتوكولات الاتصال الحديثة.",
      instructor: "مؤطرو الأنظمة المدمجة",
      duration: "3 أسابيع",
      date: "يومي الأحد والثلاثاء",
      seats: 20,
      category: "IoT والشبكات",
      status: "open",
      tags: ["ESP32", "IoT", "Sensors"]
    }
  ]
};
