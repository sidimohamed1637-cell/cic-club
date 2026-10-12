import { initializeApp, getApps } from "firebase/app";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  signOut as fbSignOut, 
  onAuthStateChanged 
} from "firebase/auth";
import { 
  getFirestore, 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  orderBy, 
  deleteDoc, 
  updateDoc,
  doc, 
  setDoc,
  getDoc,
  serverTimestamp 
} from "firebase/firestore";
import { 
  getStorage, 
  ref, 
  uploadBytesResumable, 
  getDownloadURL 
} from "firebase/storage";
import { CLUB_CONFIG } from "./config/clubConfig";

// Firebase Configuration from environment variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || ""
};

// Check if valid Firebase configuration is present
const hasLiveConfig = Boolean(
  firebaseConfig.apiKey && 
  firebaseConfig.apiKey !== "YOUR_API_KEY" && 
  firebaseConfig.projectId &&
  firebaseConfig.projectId !== "YOUR_PROJECT_ID"
);

let app = null;
let auth = null;
let db = null;
let storage = null;

if (hasLiveConfig) {
  try {
    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
    auth = getAuth(app);
    db = getFirestore(app);
    storage = getStorage(app);
    // تقليل مدة إعادة المحاولة عند حدوث مشكلة في Storage لتجنب تعليق الصفحة
    if (storage) {
      storage.maxUploadRetryTime = 8000;
      storage.maxOperationRetryTime = 8000;
    }
  } catch (error) {
    console.warn("Firebase live init failed, fallback active:", error);
  }
}

export const isLiveFirebase = Boolean(hasLiveConfig && app);

// ==========================================
// LOCAL STORAGE MOCK ENGINE (FALLBACK LAYER)
// Enables full offline local testing & GitHub Pages preview
// ==========================================
const LOCAL_STORAGE_MEMBERS_KEY = "sti_club_members";
const LOCAL_STORAGE_COURSES_KEY = "sti_club_courses";
const LOCAL_STORAGE_REGISTRATIONS_KEY = "sti_club_registrations";
const LOCAL_STORAGE_ADMIN_SESSION_KEY = "sti_club_admin_session";
const LOCAL_STORAGE_SUPERVISOR_KEY = "cic_club_supervisor";
const LOCAL_STORAGE_BOARD_KEY = "cic_club_board_members";

// Default supervisor
const getLocalSupervisor = () => {
  const data = localStorage.getItem(LOCAL_STORAGE_SUPERVISOR_KEY);
  if (!data) {
    localStorage.setItem(LOCAL_STORAGE_SUPERVISOR_KEY, JSON.stringify(CLUB_CONFIG.supervisor));
    return CLUB_CONFIG.supervisor;
  }
  return JSON.parse(data);
};

// Default executive board
const getLocalBoardMembers = () => {
  const data = localStorage.getItem(LOCAL_STORAGE_BOARD_KEY);
  if (!data) {
    localStorage.setItem(LOCAL_STORAGE_BOARD_KEY, JSON.stringify(CLUB_CONFIG.executiveBoard));
    return CLUB_CONFIG.executiveBoard;
  }
  return JSON.parse(data);
};

// Default demo courses
const getLocalCourses = () => {
  const data = localStorage.getItem(LOCAL_STORAGE_COURSES_KEY);
  if (!data) {
    localStorage.setItem(LOCAL_STORAGE_COURSES_KEY, JSON.stringify(CLUB_CONFIG.initialCourses));
    return CLUB_CONFIG.initialCourses;
  }
  return JSON.parse(data);
};

// Default sample demo members
const getLocalMembers = () => {
  const data = localStorage.getItem(LOCAL_STORAGE_MEMBERS_KEY);
  if (!data) {
    const demoMembers = [
      {
        id: "demo-1",
        fullName: "محمد بن علي العربي",
        email: "mohamed.arabi@univ-tam.dz",
        whatsapp: "0655123456",
        major: "هندسة إلكترونية وأنظمة مدمجة",
        studyYear: "سنة ثانية ماستر (Master 2)",
        schoolCertUrl: "./images/member_placeholder.jpg",
        schoolCertName: "شهادة_مدرسية_محمد.pdf",
        studentCardUrl: "./images/member_placeholder.jpg",
        studentCardName: "بطاقة_طالب_محمد.jpg",
        status: "مقبول",
        createdAt: new Date().toISOString()
      },
      {
        id: "demo-2",
        fullName: "فاطمة الزهراء قاسمي",
        email: "fatima.kacemi@gmail.com",
        whatsapp: "0540987654",
        major: "إعلام آلي وهندسة البرمجيات",
        studyYear: "سنة ثالثة ليسانس (L3)",
        schoolCertUrl: "./images/member_placeholder.jpg",
        schoolCertName: "شهادة_مدرسية_فاطمة.pdf",
        studentCardUrl: "./images/member_placeholder.jpg",
        studentCardName: "بطاقة_طالب_فاطمة.jpg",
        status: "قيد المراجعة",
        createdAt: new Date(Date.now() - 86400000).toISOString()
      }
    ];
    localStorage.setItem(LOCAL_STORAGE_MEMBERS_KEY, JSON.stringify(demoMembers));
    return demoMembers;
  }
  return JSON.parse(data);
};

// Default sample demo course registrations
const getLocalRegistrations = () => {
  const data = localStorage.getItem(LOCAL_STORAGE_REGISTRATIONS_KEY);
  if (!data) {
    const demoRegs = [
      {
        id: "reg-1",
        courseId: "c1",
        courseTitle: "أساسيات برمجة الأردوينو وبناء الروبوتات",
        fullName: "حمزة مسعودي",
        email: "hamza.m@univ-tam.dz",
        whatsapp: "0661223344",
        major: "هندسة إلكترونية وأنظمة مدمجة",
        studyYear: "سنة ثالثة ليسانس (L3)",
        createdAt: new Date().toISOString()
      },
      {
        id: "reg-2",
        courseId: "c1",
        courseTitle: "أساسيات برمجة الأردوينو وبناء الروبوتات",
        fullName: "ياسمين بن الشيخ",
        email: "yasmine.b@univ-tam.dz",
        whatsapp: "0550112233",
        major: "إعلام آلي وهندسة البرمجيات",
        studyYear: "سنة أولى ماستر (M1)",
        createdAt: new Date(Date.now() - 3600000).toISOString()
      },
      {
        id: "reg-3",
        courseId: "c1",
        courseTitle: "أساسيات برمجة الأردوينو وبناء الروبوتات",
        fullName: "عبد القادر تواتي",
        email: "kader.touati@gmail.com",
        whatsapp: "0770998877",
        major: "هندسة كهربائية",
        studyYear: "سنة ثانية ليسانس (L2)",
        createdAt: new Date(Date.now() - 7200000).toISOString()
      },
      {
        id: "reg-4",
        courseId: "c2",
        courseTitle: "إنترنت الأشياء (IoT) والأنظمة المدمجة مع ESP32",
        fullName: "أمين قدور",
        email: "amine.kaddour@gmail.com",
        whatsapp: "0665443322",
        major: "ميكاترونيكس وروبوتات",
        studyYear: "سنة ثانية ماستر (M2)",
        createdAt: new Date(Date.now() - 86400000).toISOString()
      },
      {
        id: "reg-5",
        courseId: "c2",
        courseTitle: "إنترنت الأشياء (IoT) والأنظمة المدمجة مع ESP32",
        fullName: "مريم لعريبي",
        email: "meriem.laaribi@univ-tam.dz",
        whatsapp: "0541223344",
        major: "إعلام آلي وهندسة البرمجيات",
        studyYear: "سنة ثالثة ليسانس (L3)",
        createdAt: new Date(Date.now() - 90000000).toISOString()
      }
    ];
    localStorage.setItem(LOCAL_STORAGE_REGISTRATIONS_KEY, JSON.stringify(demoRegs));
    return demoRegs;
  }
  return JSON.parse(data);
};

// Helper: ضغط الصور تلقائياً وتحويلها لـ Data URL خفيف الحجم (< 150KB) ليعمل مجاناً دون الحاجة لـ Blaze
const compressFileToDataUrl = (file, maxWidth = 1024, quality = 0.7) => {
  return new Promise((resolve) => {
    if (!file) {
      resolve('');
      return;
    }
    // إذا كان ملف PDF
    if (!file.type || !file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => resolve('');
      reader.readAsDataURL(file);
      return;
    }

    // إذا كانت صورة يتم تصغيرها وضغطها
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        let width = img.width;
        let height = img.height;
        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        const compressedDataUrl = canvas.toDataURL('image/jpeg', quality);
        resolve(compressedDataUrl);
      };
      img.onerror = () => resolve(e.target.result);
      img.src = e.target.result;
    };
    reader.onerror = () => resolve('');
    reader.readAsDataURL(file);
  });
};

const fileToDataUrl = (file) => compressFileToDataUrl(file);

// ==========================================
// UNIFIED DATA SERVICE API
// Transparently handles both Live Firebase & Local Fallback
// ==========================================

export const clubService = {
  // 1. Upload File (Firebase Storage or Compressed DataURL Fallback)
  async uploadFile(file, pathPrefix = "documents", onProgress) {
    if (isLiveFirebase && storage) {
      try {
        const fileName = `${Date.now()}_${file.name.replace(/[^a-zA-Z0-9._-]/g, "_")}`;
        const storageRef = ref(storage, `${pathPrefix}/${fileName}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        const uploadedResult = await new Promise((resolve, reject) => {
          let isDone = false;
          // مهلة 5 ثوانٍ فقط: إذا كان التخزين يطلب خطة مدفوعة Blaze نتجاوزه فوراً
          const timer = setTimeout(() => {
            if (!isDone) {
              isDone = true;
              try { uploadTask.cancel(); } catch (e) {}
              reject(new Error("STORAGE_TIMEOUT_OR_BLAZE_REQUIRED"));
            }
          }, 5000);

          uploadTask.on(
            "state_changed",
            (snapshot) => {
              const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              if (onProgress) onProgress(progress);
            },
            (error) => {
              if (!isDone) {
                isDone = true;
                clearTimeout(timer);
                reject(error);
              }
            },
            async () => {
              if (!isDone) {
                isDone = true;
                clearTimeout(timer);
                try {
                  const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
                  resolve({
                    url: downloadUrl,
                    name: file.name,
                    size: file.size
                  });
                } catch (err) {
                  reject(err);
                }
              }
            }
          );
        });

        return uploadedResult;
      } catch (err) {
        console.warn("Storage upload bypassed (Spark Free plan active): saving compressed file directly to Firestore.", err);
      }
    }

    // بديل ذكي ومجاني 100%: ضغط الصورة وحفظها مباشرة دون طلب بطاقة بنكية
    if (onProgress) onProgress(40);
    const compressedUrl = await compressFileToDataUrl(file);
    if (onProgress) onProgress(100);

    return {
      url: compressedUrl,
      name: file.name,
      size: file.size
    };
  },

  // 2. Submit Membership Application
  async submitMembership(memberData) {
    if (isLiveFirebase && db) {
      try {
        const docRef = await addDoc(collection(db, "members"), {
          ...memberData,
          status: "قيد المراجعة",
          createdAt: serverTimestamp()
        });
        return { id: docRef.id, ...memberData };
      } catch (err) {
        console.error("Firestore submitMembership error:", err);
        if (err.code === 'permission-denied') {
          throw new Error("تم رفض إذن حفظ الطلب في Firestore. يرجى مراجعة تبويب Rules في Firestore Database.");
        }
        throw new Error("تعذر حفظ الطلب في Firestore. يرجى التأكد من تفعيل Firestore Database في Firebase Console.");
      }
    } else {
      const members = getLocalMembers();
      const newMember = {
        id: "loc_" + Date.now(),
        ...memberData,
        status: "قيد المراجعة",
        createdAt: new Date().toISOString()
      };
      members.unshift(newMember);
      localStorage.setItem(LOCAL_STORAGE_MEMBERS_KEY, JSON.stringify(members));
      return newMember;
    }
  },

  // 3. Fetch All Members
  async getMembers() {
    if (isLiveFirebase && db) {
      try {
        const q = query(collection(db, "members"), orderBy("createdAt", "desc"));
        const snapshot = await getDocs(q);
        return snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
      } catch (err) {
        console.warn("Firestore getMembers failed, trying local fallback", err);
        return getLocalMembers();
      }
    } else {
      return getLocalMembers();
    }
  },

  // 4. Delete Member
  async deleteMember(memberId) {
    if (isLiveFirebase && db && !memberId.startsWith("loc_") && !memberId.startsWith("demo-")) {
      await deleteDoc(doc(db, "members", memberId));
    }
    const members = getLocalMembers().filter(m => m.id !== memberId);
    localStorage.setItem(LOCAL_STORAGE_MEMBERS_KEY, JSON.stringify(members));
    return true;
  },

  // 4b. Update Member Status (Accept / Reject / Pending)
  async updateMemberStatus(memberId, status) {
    if (isLiveFirebase && db && !memberId.startsWith("loc_") && !memberId.startsWith("demo-")) {
      await updateDoc(doc(db, "members", memberId), { status });
    }
    const members = getLocalMembers().map(m => m.id === memberId ? { ...m, status } : m);
    localStorage.setItem(LOCAL_STORAGE_MEMBERS_KEY, JSON.stringify(members));
    return true;
  },

  // 5. Fetch Courses
  async getCourses() {
    if (isLiveFirebase && db) {
      try {
        const snapshot = await getDocs(collection(db, "courses"));
        if (!snapshot.empty) {
          return snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
        }
      } catch (err) {
        console.warn("Firestore getCourses failed, using local", err);
      }
    }
    return getLocalCourses();
  },

  // 6. Add Course
  async addCourse(courseData) {
    if (isLiveFirebase && db) {
      const docRef = await addDoc(collection(db, "courses"), {
        ...courseData,
        createdAt: serverTimestamp()
      });
      return { id: docRef.id, ...courseData };
    } else {
      const courses = getLocalCourses();
      const newCourse = {
        id: "crs_" + Date.now(),
        ...courseData,
        createdAt: new Date().toISOString()
      };
      courses.unshift(newCourse);
      localStorage.setItem(LOCAL_STORAGE_COURSES_KEY, JSON.stringify(courses));
      return newCourse;
    }
  },

  // 7. Delete Course
  async deleteCourse(courseId) {
    if (isLiveFirebase && db && !courseId.startsWith("crs_") && !courseId.startsWith("c")) {
      try {
        await deleteDoc(doc(db, "courses", courseId));
      } catch (err) {
        console.warn(err);
      }
    }
    const courses = getLocalCourses().filter(c => c.id !== courseId);
    localStorage.setItem(LOCAL_STORAGE_COURSES_KEY, JSON.stringify(courses));
    return true;
  },

  // 7.b Update Course
  async updateCourse(courseId, updatedData) {
    if (isLiveFirebase && db && !courseId.startsWith("crs_") && !courseId.startsWith("c")) {
      try {
        await updateDoc(doc(db, "courses", courseId), {
          ...updatedData,
          updatedAt: serverTimestamp()
        });
      } catch (err) {
        console.warn(err);
      }
    }
    const courses = getLocalCourses().map(c => (c.id === courseId ? { ...c, ...updatedData } : c));
    localStorage.setItem(LOCAL_STORAGE_COURSES_KEY, JSON.stringify(courses));
    return courses.find(c => c.id === courseId);
  },

  // 8. Register Student in a Course
  async registerForCourse(registrationData) {
    if (isLiveFirebase && db) {
      const docRef = await addDoc(collection(db, "course_registrations"), {
        ...registrationData,
        createdAt: serverTimestamp()
      });
      return { id: docRef.id, ...registrationData };
    } else {
      const regs = JSON.parse(localStorage.getItem(LOCAL_STORAGE_REGISTRATIONS_KEY) || "[]");
      const newReg = {
        id: "reg_" + Date.now(),
        ...registrationData,
        createdAt: new Date().toISOString()
      };
      regs.unshift(newReg);
      localStorage.setItem(LOCAL_STORAGE_REGISTRATIONS_KEY, JSON.stringify(regs));
      return newReg;
    }
  },

  // 9. Get Course Registrations
  async getCourseRegistrations(courseId = null) {
    if (isLiveFirebase && db) {
      try {
        const snapshot = await getDocs(collection(db, "course_registrations"));
        const all = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
        return courseId ? all.filter(r => r.courseId === courseId) : all;
      } catch (err) {
        console.warn("Firestore getRegistrations failed", err);
      }
    }
    const regs = getLocalRegistrations();
    return courseId ? regs.filter(r => r.courseId === courseId) : regs;
  },

  // 10. Admin Authentication
  async adminLogin(usernameOrEmail, password) {
    const cleanUser = (usernameOrEmail || '').trim().toLowerCase();
    const cleanPass = (password || '').trim();

    if (isLiveFirebase && auth) {
      const emailToUse = cleanUser.includes('@') ? cleanUser : `${cleanUser}@sticlub.dz`;
      const userCredential = await signInWithEmailAndPassword(auth, emailToUse, cleanPass);
      sessionStorage.setItem(LOCAL_STORAGE_ADMIN_SESSION_KEY, JSON.stringify({ email: emailToUse, isLive: true }));
      return userCredential.user;
    } else {
      // Local fallback: Very simple and flexible (admin / admin or admin123456)
      const validUsers = ['admin', 'cic', 'admin@sticlub.dz', 'admin@admin.com', CLUB_CONFIG.email.toLowerCase()];
      const validPasswords = ['admin', 'admin123', 'admin123456', '123456', 'sti2024'];

      const isValid = (
        validUsers.includes(cleanUser) || 
        cleanUser.includes('admin') || 
        cleanUser.includes('cic')
      ) && (
        validPasswords.includes(cleanPass) || 
        cleanPass === 'admin' || 
        cleanPass.length >= 4
      );

      if (isValid) {
        const session = { 
          username: cleanUser, 
          email: cleanUser.includes('@') ? cleanUser : 'admin@cic.dz', 
          isLive: false, 
          loggedAt: Date.now() 
        };
        sessionStorage.setItem(LOCAL_STORAGE_ADMIN_SESSION_KEY, JSON.stringify(session));
        return { username: cleanUser, uid: "mock-admin-uid" };
      } else {
        throw new Error("بيانات الدخول غير صحيحة.");
      }
    }
  },

  // 11. Admin Logout
  async adminLogout() {
    if (isLiveFirebase && auth) {
      await fbSignOut(auth);
    }
    sessionStorage.removeItem(LOCAL_STORAGE_ADMIN_SESSION_KEY);
    return true;
  },

  // 12. Check Admin Session
  getAdminSession() {
    const session = sessionStorage.getItem(LOCAL_STORAGE_ADMIN_SESSION_KEY);
    return session ? JSON.parse(session) : null;
  },

  // 13. Get Supervisor Info
  async getSupervisor() {
    if (isLiveFirebase && db) {
      try {
        const docSnap = await getDoc(doc(db, "settings", "supervisor"));
        if (docSnap.exists()) {
          return docSnap.data();
        }
      } catch (err) {
        console.warn("Firestore getSupervisor failed, using local", err);
      }
    }
    return getLocalSupervisor();
  },

  // 14. Update Supervisor Info
  async updateSupervisor(supervisorData) {
    if (isLiveFirebase && db) {
      try {
        await setDoc(doc(db, "settings", "supervisor"), {
          ...supervisorData,
          updatedAt: serverTimestamp()
        }, { merge: true });
      } catch (err) {
        console.warn("Firestore updateSupervisor failed", err);
      }
    }
    localStorage.setItem(LOCAL_STORAGE_SUPERVISOR_KEY, JSON.stringify(supervisorData));
    return supervisorData;
  },

  // 15. Get Executive Board Members
  async getExecutiveBoard() {
    if (isLiveFirebase && db) {
      try {
        const snapshot = await getDocs(collection(db, "board_members"));
        if (!snapshot.empty) {
          return snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
        }
      } catch (err) {
        console.warn("Firestore getExecutiveBoard failed, using local", err);
      }
    }
    return getLocalBoardMembers();
  },

  // 16. Add Executive Member
  async addExecutiveMember(memberData) {
    if (isLiveFirebase && db) {
      try {
        const docRef = await addDoc(collection(db, "board_members"), {
          ...memberData,
          createdAt: serverTimestamp()
        });
        const created = { id: docRef.id, ...memberData };
        const local = getLocalBoardMembers();
        local.push(created);
        localStorage.setItem(LOCAL_STORAGE_BOARD_KEY, JSON.stringify(local));
        return created;
      } catch (err) {
        console.warn("Firestore addExecutiveMember failed", err);
      }
    }
    const members = getLocalBoardMembers();
    const newMember = {
      id: "board_" + Date.now(),
      ...memberData,
      createdAt: new Date().toISOString()
    };
    members.push(newMember);
    localStorage.setItem(LOCAL_STORAGE_BOARD_KEY, JSON.stringify(members));
    return newMember;
  },

  // 17. Update Executive Member
  async updateExecutiveMember(memberId, updatedData) {
    if (isLiveFirebase && db && !String(memberId).startsWith("board_") && typeof memberId === "string") {
      try {
        await updateDoc(doc(db, "board_members", memberId), {
          ...updatedData,
          updatedAt: serverTimestamp()
        });
      } catch (err) {
        console.warn("Firestore updateExecutiveMember failed", err);
      }
    }
    const members = getLocalBoardMembers().map(m => (String(m.id) === String(memberId) ? { ...m, ...updatedData } : m));
    localStorage.setItem(LOCAL_STORAGE_BOARD_KEY, JSON.stringify(members));
    return members.find(m => String(m.id) === String(memberId));
  },

  // 18. Delete Executive Member
  async deleteExecutiveMember(memberId) {
    if (isLiveFirebase && db && !String(memberId).startsWith("board_") && typeof memberId === "string") {
      try {
        await deleteDoc(doc(db, "board_members", memberId));
      } catch (err) {
        console.warn("Firestore deleteExecutiveMember failed", err);
      }
    }
    const members = getLocalBoardMembers().filter(m => String(m.id) !== String(memberId));
    localStorage.setItem(LOCAL_STORAGE_BOARD_KEY, JSON.stringify(members));
    return true;
  },

  // 19. Reset Board to Defaults
  async resetBoardToDefaults() {
    localStorage.setItem(LOCAL_STORAGE_SUPERVISOR_KEY, JSON.stringify(CLUB_CONFIG.supervisor));
    localStorage.setItem(LOCAL_STORAGE_BOARD_KEY, JSON.stringify(CLUB_CONFIG.executiveBoard));
    return {
      supervisor: CLUB_CONFIG.supervisor,
      executiveBoard: CLUB_CONFIG.executiveBoard
    };
  }
};

export { auth, db, storage };
export default app;
