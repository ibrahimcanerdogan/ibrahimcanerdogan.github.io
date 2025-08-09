"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'tr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation data
const translations = {
  en: {
    // Hero Section
    'hero.title': 'Ibrahim Can Erdogan',
    'hero.subtitle': 'Senior Android Engineer',
    'hero.experience': 'Years Experience',
    'hero.projects': 'Projects',
    'hero.certificates': 'Certificates',
    'hero.courses': 'Courses',
    'hero.viewResume': 'View Resume',
    'hero.downloadResume': 'Download Resume',
    'hero.scrollDown': 'Scroll Down',

    // About Section
    'about.title': 'About Me 📝',
    'about.description1': 'I am a graduate of Balıkesir University Industrial Engineering, who has specialized in Android Software Development. I have proven experience in developing advanced Android applications and improving project architectures in Kotlin and Java languages.',
    'about.description2': 'My internships and professional roles took place at leading technology companies in Turkey. I am currently contributing to the Android development process at Ebebek and continuously working to improve my skills and knowledge. With my passion for technology, I am also exploring iOS technology and determined to deliver the best results in every project.',
    'about.contact': 'Contact:',
    'about.email': 'ibrahimcanerdogan@outlook.com',

    // Experience Section
    'experience.title': 'Experience 💼',
    'experience.current': 'Current',
    'experience.months': 'months',
    'experience.remote': 'Remote',
    'experience.responsibilities': 'Responsibilities and Achievements',
    'experience.ebebek.current': 'Working as Android Software Specialist in ebebek mobile application',
    'experience.ebebek.security': 'Resolving security vulnerabilities found in SOCRadar security scan reports',
    'experience.ebebek.payment': 'Craftgate and One-Stop Shop payment technology integration',
    'experience.ebebek.wallet': 'Integration of ebebek wallet feature into the application',
    'experience.logo.conversion': 'Converting Java project to Kotlin',
    'experience.logo.architecture': 'Coroutines and MVVM architecture implementation',
    'experience.logo.projects': 'Worked on Warehouse Management System and LOGO Mobile Sales projects',
    'experience.logo.testing': 'Unit testing with MockK',
    'experience.logo.clean': 'Coding with Clean Code Principles and MVVM Architecture',
    'experience.logo.tracking': 'Mobile application tracking with Bitbucket, Jira and Sonar',
    'experience.logo.wms': 'LOGO Warehouse Management System (WMS) project development with Kotlin using MVVM Architecture',
    'experience.logo.tools': 'Data & View Binding, Navigation, Room, Coroutines, Dagger-Hilt usage',
    'experience.logo.testing2': 'Unit testing with MockK, Mockito, Junit, Truth and Espresso',
    'experience.ebebek.intern': 'Completed internship at ebebek headquarters working with IT manager',
    'experience.ebebek.ekamp': 'Successfully completed e-kamp process',
    'experience.yapikredi': 'Participated in online education program for personal and professional development',
    'experience.yapikredi.products': 'Opportunity to learn banking products and services through online simulation',
    'experience.yapikredi.winner': 'Won first place with our team\'s "Yapi Kredi HAL" application presentation',
    'experience.qnb': 'Online Finance 101 internship program to closely learn business units of banking sector',
    'experience.qnb.basic': 'Basic banking education',
    'experience.qnb.career': 'Career planning through career design workshop',
    'experience.qnb.certificate': 'Successfully completed program with certificate',

    // Experience Dates
    'experience.ebebek.current.date': 'April 2023 - Ongoing',
    'experience.logo.android.date': 'January 2023 - April 2023',
    'experience.logo.jr.date': 'April 2022 - January 2023',
    'experience.logo.intern.date': 'February 2022 - April 2022',
    'experience.ebebek.intern.date': 'November 2021 - February 2022',
    'experience.yapikredi.date': 'August 2021 - September 2021',
    'experience.qnb.date': 'December 2021',

    // Cities
    'cities.istanbul': 'Istanbul',
    'cities.izmir': 'Izmir',
    'cities.akhisar': 'Akhisar',
    'cities.manisa': 'Manisa',
    'cities.balikesir': 'Balikesir',
    'cities.turkey': 'Turkey',

    // Certificates Section
    'certificates.title': 'Certificates 🏆',
    'certificates.neo.title': 'Agility: Agility in Business Life',
    'certificates.neo.company': 'Neo Skola',
    'certificates.neo.date': 'Publication: March 2025',
    'certificates.udemy.title': 'Jetpack Compose Android App Development Course | 2024',
    'certificates.udemy.company': 'Udemy',
    'certificates.udemy.date': '2024 - Ongoing',
    'certificates.meta.title': 'Meta Android Developer',
    'certificates.meta.company': 'Meta',
    'certificates.meta.date': 'Publication: February 2024',
    'certificates.qualification': 'Qualification ID',

    // Courses Section
    'courses.title': 'My Udemy Courses 📚',
    'courses.compose.title': 'Jetpack Compose: Advanced App Development Guide',
    'courses.compose.date': '2025 - Ongoing',
    'courses.compose.description': 'Collection of sample applications developed with Jetpack Compose. Projects containing modern Android development techniques and best practices.',
    'courses.compose.content': 'Course Content:',
    'courses.compose.topic1': 'Jetpack Compose Fundamentals: Advanced UI design and layout management',
    'courses.compose.topic2': 'Advanced UI Design: Animations, touch interactions and modern user experience',
    'courses.compose.topic3': 'Data Management and State Management: Data flows, ViewModels and state management techniques',
    'courses.compose.topic4': 'App Development Strategies: Performance optimization, code quality and best practices',
    'courses.compose.topic5': 'Real World Projects: Practical applications and scenario-based work',
    'courses.compose.skills': 'Skills:',
    'courses.mlkit.title': 'Android App Development with Google Machine Learning',
    'courses.mlkit.date': '2021 - Ongoing',
    'courses.mlkit.description': 'With the rapid development of mobile applications today, artificial intelligence and machine learning technologies have gained great importance. These technologies play an important role in providing users with a richer and smarter experience. This is where the Google ML Kit library comes into play.',
    'courses.mlkit.skills': 'Skills:',

    // Projects Section
    'projects.title': 'My Projects 🚀',
    'projects.compose.title': 'Awesome Jetpack Compose App Samples',
    'projects.compose.date': '2024 - Ongoing',
    'projects.compose.description': 'Collection of sample applications developed with Jetpack Compose. Contains modern UI designs and best practices.',
    'projects.mlkit.title': 'Google ML Kit Android Apps',
    'projects.mlkit.date': '2021 - Ongoing',
    'projects.mlkit.description': 'AI-powered Android applications developed using Google ML Kit. Includes image processing, text recognition and object detection features.',
    'projects.boruto.title': 'JetBorutoKtorServerApp',
    'projects.boruto.date': '2024 - Ongoing',
    'projects.boruto.description': 'Boruto characters application developed with Jetpack Compose and backend service written with Ktor. Full-stack Android development example.',
    'projects.ecotrack.title': 'EcoTrack',
    'projects.ecotrack.date': '2025 - Ongoing',
    'projects.ecotrack.description': 'Web application developed for sustainable living, helping to track and reduce carbon footprint.',
    'projects.calculator.title': 'NextCalculator',
    'projects.calculator.date': '2025 - Ongoing',
    'projects.calculator.description': 'Modern and user-friendly calculator application developed with Next.js. Includes Material Design 3 and modern UI/UX practices.',
    'projects.liveDemo': 'Live Demo',

    // Skills Section
    'skills.title': 'My Skills 🛠️',
    'skills.languages': 'Programming Languages',
    'skills.android': 'Android Development',
    'skills.tools': 'Tools & Technologies',

    // Contact Section
    'contact.title': 'Get in Touch 📬',
    'contact.info.title': 'Contact Information 📞',
    'contact.social.title': 'Social Media 🌐',
    'contact.form.title': 'Send Message ✉️',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send',
    'contact.form.sending': 'Sending...',
    'contact.form.success': 'Your message has been sent successfully!',
    'contact.form.error': 'An error occurred. Please try again later or contact via email: ibrahimcanerdogan@outlook.com',

    // YouTube Section
    'youtube.title': 'My YouTube Videos 🎥',
    'youtube.video1.title': 'Jetpack Compose Android App Development',
    'youtube.video1.description': 'Learn Jetpack Compose fundamentals and advanced features comprehensively for developing modern Android applications.',
    'youtube.video2.title': 'Complete Kotlin Fundamentals in One Video [2024]',
    'youtube.video2.description': 'Learn Kotlin basic concepts in one video before starting your Android development journey.',
    'youtube.video3.title': 'Complete Bank Retrofit API Development in One Video | Jetpack Compose',
    'youtube.video3.description': 'Step-by-step implementation of real bank API integration using Jetpack Compose and Retrofit.',

    // Footer
    'footer.copyright': '© 2025 Ibrahim Can Erdogan. All rights reserved.',

    // Language Switch
    'language.en': 'English',
    'language.tr': 'Turkish',
  },
  tr: {
    // Hero Section
    'hero.title': 'İbrahim Can Erdoğan',
    'hero.subtitle': 'Senior Android Engineer',
    'hero.experience': 'Yıl Deneyim',
    'hero.projects': 'Proje',
    'hero.certificates': 'Sertifika',
    'hero.courses': 'Kurs',
    'hero.viewResume': 'Özgeçmişime Göz At',
    'hero.downloadResume': 'Özgeçmişimi İndir',
    'hero.scrollDown': 'Aşağı Kaydır',

    // About Section
    'about.title': 'Hakkımda 📝',
    'about.description1': 'Balıkesir Üniversitesi Endüstri Mühendisliği mezunu, kendini Android Yazılım Geliştirme alanında uzmanlaşmış bir profesyonel olarak tanıtan biriyim. Kotlin ve Java dillerinde yetkin olup, gelişmiş Android uygulamaları geliştirme ve proje mimarilerini iyileştirme konusunda kanıtlanmış bir geçmişe sahibim.',
    'about.description2': 'Stajlarım ve profesyonel rollerim, Türkiye\'nin önde gelen teknoloji firmalarında gerçekleşti. Şu anda, Ebebek\'te Android geliştirme sürecine katkıda bulunmaktayım ve sürekli olarak becerilerimi ve bilgimi geliştirmeye çalışıyorum. Teknolojiye olan tutkumla, aynı zamanda iOS teknolojisini de keşfetmekte ve her projede en iyi sonuçları sunmaya kararlıyım.',
    'about.contact': 'İletişim:',
    'about.email': 'ibrahimcanerdogan@outlook.com',

    // Experience Section
    'experience.title': 'Deneyim 💼',
    'experience.current': 'Devam Ediyor',
    'experience.months': 'ay',
    'experience.remote': 'Uzaktan',
    'experience.responsibilities': 'Sorumluluklar ve Başarılar',
    'experience.ebebek.current': 'ebebek mobil uygulamasında Android Software Specialist olarak görev yapıyorum',
    'experience.ebebek.security': 'SOCRadar güvenlik tarama raporları sonucunda bulunan güvenlik açıklarının giderilmesi',
    'experience.ebebek.payment': 'Craftgate ve One-Stop Shop ödeme teknolojisi entegrasyonu',
    'experience.ebebek.wallet': 'ebebek cüzdan özelliğinin uygulamaya entegrasyonu',
    'experience.logo.conversion': 'Java projesini Kotlin\'e dönüştürme',
    'experience.logo.architecture': 'Coroutines ve MVVM mimarisi implementasyonu',
    'experience.logo.projects': 'Depo Yönetim Sistemi ve LOGO Mobile Sales projelerinde görev aldım',
    'experience.logo.testing': 'MockK ile birim testleri geliştirme',
    'experience.logo.clean': 'Clean Code Prensipleri ve MVVM Mimarisi ile kodlama',
    'experience.logo.tracking': 'Bitbucket, Jira ve Sonar ile mobil uygulama takibi',
    'experience.logo.wms': 'LOGO Warehouse Management System (WMS) projesinde MVVM Mimarisi ile Kotlin geliştirme',
    'experience.logo.tools': 'Data & View Binding, Navigation, Room, Coroutines, Dagger-Hilt kullanımı',
    'experience.logo.testing2': 'MockK, Mockito, Junit, Truth ve Espresso ile birim testleri',
    'experience.ebebek.intern': 'ebebek merkez ofisinde IT yöneticisi ile çalışarak staj yaptım',
    'experience.ebebek.ekamp': 'e-kamp sürecini başarıyla tamamladım',
    'experience.yapikredi': 'Kişisel ve profesyonel gelişim için online eğitim programına katıldım',
    'experience.yapikredi.products': 'Online simülasyon ile bankacılık ürün ve hizmetlerini tanıma fırsatı',
    'experience.yapikredi.winner': 'Ekibimle hazırladığımız "Yapı Kredi HAL" uygulama sunumu ile birinci olduk',
    'experience.qnb': 'Online Finance 101 staj programı ile bankacılık sektörünün iş birimlerini yakından tanıma fırsatı',
    'experience.qnb.basic': 'Temel bankacılık eğitimi',
    'experience.qnb.career': 'Kariyer tasarım atölyesi ile kariyer yolculuğunu planlama',
    'experience.qnb.certificate': 'Başarı sertifikası ile programı tamamlama',

    // Experience Dates
    'experience.ebebek.current.date': 'Nisan 2023 - Devam Ediyor',
    'experience.logo.android.date': 'Ocak 2023 - Nisan 2023',
    'experience.logo.jr.date': 'Nisan 2022 - Ocak 2023',
    'experience.logo.intern.date': 'Şubat 2022 - Nisan 2022',
    'experience.ebebek.intern.date': 'Kasım 2021 - Şubat 2022',
    'experience.yapikredi.date': 'Ağustos 2021 - Eylül 2021',
    'experience.qnb.date': 'Aralık 2021',

    // Cities
    'cities.istanbul': 'İstanbul',
    'cities.izmir': 'İzmir',
    'cities.akhisar': 'Akhisar',
    'cities.manisa': 'Manisa',
    'cities.balikesir': 'Balıkesir',
    'cities.turkey': 'Türkiye',

    // Certificates Section
    'certificates.title': 'Sertifikalar 🏆',
    'certificates.neo.title': 'Agility: İş Hayatında Çeviklik',
    'certificates.neo.company': 'Neo Skola',
    'certificates.neo.date': 'Publication: March 2025',
    'certificates.udemy.title': 'Jetpack Compose ile Android Uygulama Geliştirme Kursu | 2024',
    'certificates.udemy.company': 'Udemy',
    'certificates.udemy.date': '2024 - Ongoing',
    'certificates.meta.title': 'Meta Android Developer',
    'certificates.meta.company': 'Meta',
    'certificates.meta.date': 'Publication: February 2024',
    'certificates.qualification': 'Yeterlilik Kimliği',

    // Courses Section
    'courses.title': 'Udemy Kurslarım 📚',
    'courses.compose.title': 'Jetpack Compose: İleri Seviye Uygulama Geliştirme Rehberi',
    'courses.compose.date': '2025 - Ongoing',
    'courses.compose.description': 'Jetpack Compose ile geliştirilmiş örnek uygulamalar koleksiyonu. Modern Android geliştirme tekniklerini ve best practice\'leri içeren projeler.',
    'courses.compose.content': 'Kursun İçeriği:',
    'courses.compose.topic1': 'Jetpack Compose Temelleri: Gelişmiş UI tasarımı ve layout yönetimi',
    'courses.compose.topic2': 'Gelişmiş UI Tasarımı: Animasyonlar, dokunmatik etkileşimler ve modern kullanıcı deneyimi',
    'courses.compose.topic3': 'Veri Yönetimi ve State Yönetimi: Veri akışları, ViewModel\'ler ve state yönetimi teknikleri',
    'courses.compose.topic4': 'Uygulama Geliştirme Stratejileri: Performans optimizasyonu, kod kalitesi ve best practices',
    'courses.compose.topic5': 'Gerçek Dünya Projeleri: Pratik uygulamalar ve senaryolar üzerinde çalışmalar',
    'courses.compose.skills': 'Yetenekler:',
    'courses.mlkit.title': 'Android App Development with Google Machine Learning',
    'courses.mlkit.date': '2021 - Ongoing',
    'courses.mlkit.description': 'With the rapid development of mobile applications today, artificial intelligence and machine learning technologies have gained great importance. These technologies play an important role in providing users with a richer and smarter experience. This is where the Google ML Kit library comes into play.',
    'courses.mlkit.skills': 'Yetenekler:',

    // Projects Section
    'projects.title': 'Projelerim 🚀',
    'projects.compose.title': 'Awesome Jetpack Compose App Samples',
    'projects.compose.date': '2024 - Ongoing',
    'projects.compose.description': 'Jetpack Compose ile geliştirilmiş örnek uygulamalar koleksiyonu. Modern UI tasarımları ve best practice\'ler içerir.',
    'projects.mlkit.title': 'Google ML Kit Android Apps',
    'projects.mlkit.date': '2021 - Ongoing',
    'projects.mlkit.description': 'Google ML Kit kullanarak geliştirilmiş yapay zeka destekli Android uygulamaları. Görüntü işleme, metin tanıma ve nesne algılama özellikleri içerir.',
    'projects.boruto.title': 'JetBorutoKtorServerApp',
    'projects.boruto.date': '2024 - Ongoing',
    'projects.boruto.description': 'Jetpack Compose ile geliştirilmiş Boruto karakterleri uygulaması ve Ktor ile yazılmış backend servisi. Full-stack Android geliştirme örneği.',
    'projects.ecotrack.title': 'EcoTrack',
    'projects.ecotrack.date': '2025 - Ongoing',
    'projects.ecotrack.description': 'Sürdürülebilir yaşam için geliştirilmiş, karbon ayak izini takip etmeye ve azaltmaya yardımcı olan bir web uygulaması.',
    'projects.calculator.title': 'NextCalculator',
    'projects.calculator.date': '2025 - Ongoing',
    'projects.calculator.description': 'Next.js ile geliştirilmiş modern ve kullanıcı dostu bir hesap makinesi uygulaması. Material Design 3 ve modern UI/UX pratikleri içerir.',
    'projects.liveDemo': 'Canlı Demo',

    // Skills Section
    'skills.title': 'Yeteneklerim 🛠️',
    'skills.languages': 'Programlama Dilleri',
    'skills.android': 'Android Geliştirme',
    'skills.tools': 'Araçlar & Teknolojiler',

    // Contact Section
    'contact.title': 'İletişime Geç 📬',
    'contact.info.title': 'İletişim Bilgileri 📞',
    'contact.social.title': 'Sosyal Medya 🌐',
    'contact.form.title': 'Mesaj Gönder ✉️',
    'contact.form.name': 'İsim',
    'contact.form.email': 'E-posta',
    'contact.form.message': 'Mesaj',
    'contact.form.send': 'Gönder',
    'contact.form.sending': 'Gönderiliyor...',
    'contact.form.success': 'Mesajınız başarıyla gönderildi!',
    'contact.form.error': 'Bir hata oluştu. Lütfen daha sonra tekrar deneyin veya e-posta ile iletişime geçin: ibrahimcanerdogan@outlook.com',

    // YouTube Section
    'youtube.title': 'YouTube Videolarım 🎥',
    'youtube.video1.title': 'Jetpack Compose ile Android Uygulama Geliştirme',
    'youtube.video1.description': 'Modern Android uygulamaları geliştirmek için Jetpack Compose\'un temel ve ileri seviye özelliklerini kapsamlı bir şekilde öğrenin.',
    'youtube.video2.title': 'Tek Videoda Detaylı Kotlin Temelleri [2024]',
    'youtube.video2.description': 'Android geliştirme yolculuğunuza başlamadan önce Kotlin\'in temel kavramlarını tek videoda öğrenin.',
    'youtube.video3.title': 'Tek Videoda Banka Retrofit API Geliştirme | Jetpack Compose',
    'youtube.video3.description': 'Jetpack Compose ve Retrofit kullanarak gerçek bir banka API\'si entegrasyonunu adım adım uygulayın.',

    // Footer
    'footer.copyright': '© 2025 İbrahim Can Erdoğan. Tüm hakları saklıdır.',

    // Language Switch
    'language.en': 'English',
    'language.tr': 'Türkçe',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('tr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 