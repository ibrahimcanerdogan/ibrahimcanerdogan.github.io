"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

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
    'hero.eyebrow': 'Android-first · Freelance mobile & web',
    'hero.subtitle': 'Senior Android Engineer',
    'hero.experience': 'Years Experience',
    'hero.projects': 'Projects',
    'hero.certificates': 'Certificates',
    'hero.courses': 'Courses',
    'hero.viewResume': 'View Resume',
    'hero.downloadResume': 'Download Resume',
    'hero.scrollDown': 'Scroll Down',
    'hero.intro':
      'I build polished Android products—clean architecture, Compose UI, and apps people use every day. Alongside that core focus, I take on freelance work: cross-platform mobile apps and modern websites when scope and timeline are a good match.',
    'hero.statsHint': 'A quick snapshot — scroll for the full story.',

    'nav.ariaLabel': 'Page sections',
    'nav.hero': 'Home',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.courses': 'Courses',
    'nav.certificates': 'Certificates',
    'nav.youtube': 'YouTube',
    'nav.contact': 'Contact',
    'nav.scrollToTop': 'Back to top',

    // About Section
    'about.title': 'About Me',
    'about.eyebrow': 'Profile',
    'about.highlight':
      'Shipping production Android apps—from architecture to UI polish—with Kotlin, Jetpack Compose, and maintainable design. I also deliver cross-platform mobile and web projects for clients as a freelancer.',
    'about.stackTitle': 'Core stack',
    'about.description1':
      'I hold a degree in Industrial Engineering from Balıkesir University and ship Android products end to end. I work in Kotlin and Java with a focus on maintainable architecture, Jetpack Compose, and reliable features in apps people use every day.',
    'about.description2':
      'My path includes internships and full-time roles at technology companies across Turkey. Today I contribute to the ebebek app—payments, security, and core product work—while keeping pace with the Android stack. I am also building familiarity with the Apple ecosystem to grow as a broader mobile engineer.',
    'about.freelance':
      'Freelance: Android stays my primary strength; I also build cross-platform mobile solutions and fast, maintainable websites (for example with Next.js). If you need a focused engineer for a product slice, integration, or a small site—reach out with your goals and timeline.',
    'about.contact': 'Contact:',
    'about.email': 'ibrahimcanerdogan@outlook.com',

    // Experience Section
    'experience.title': 'Experience',
    'experience.eyebrow': 'Career path',
    'experience.roadmapSubtitle':
      'A chronological roadmap of roles, teams, and the work that shaped my Android practice.',
    'experience.current': 'Current',
    'experience.months': 'months',
    'experience.expandRole': 'Show details',
    'experience.collapseRole': 'Hide details',
    'experience.remote': 'Remote',
    'experience.responsibilities': 'Responsibilities and Achievements',
    'experience.summaryHeading': 'Overview',
    'experience.summary.ebebek-android':
      'I own feature and integration work on the ebebek Android app—payments, wallet, security fixes, and day-to-day Kotlin product delivery.',
    'experience.summary.logo-android':
      'I modernized a legacy codebase by moving Java to Kotlin and establishing Coroutines with MVVM.',
    'experience.summary.logo-jr':
      'I shipped warehouse and field-sales Android features with MVVM, testing discipline, and structured delivery using Jira, Git, and Sonar.',
    'experience.summary.logo-intern':
      'I built Kotlin WMS and mobility solutions with Jetpack libraries, clean architecture habits, and solid automated testing.',
    'experience.summary.ebebek-it':
      'I supported IT at headquarters alongside the IT manager and completed the full e-kamp onboarding track.',
    'experience.summary.yapikredi':
      'I joined an online banking discovery program blending simulations, product learning, and a first-place team pitch.',
    'experience.summary.qnb':
      'I finished an introductory banking internship covering fundamentals, business units, career design, and certified completion.',
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
    'certificates.title': 'Certificates',
    'certificates.eyebrow': 'Credentials',
    'certificates.subtitle': 'Formal programs and platform certifications that back up hands-on Android work.',
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
    'courses.title': 'My Udemy Courses',
    'courses.eyebrow': 'Udemy',
    'courses.subtitle': 'Structured courses on Compose, Android UI, and on-device ML—linked to the same stack I use in production.',
    'courses.showMore': 'Show more',
    'courses.showLess': 'Show less',
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
    'courses.mlkit.description':
      'Practical Android projects with Google ML Kit—on-device vision APIs for OCR, faces, pose, barcodes, and objects, wired to Camera, dialogs, and Firebase.',
    'courses.mlkit.content': 'Course content:',
    'courses.mlkit.topic1':
      'ML Kit fundamentals: on-device vision on Android and when to use OCR, faces, pose, barcodes, and object APIs.',
    'courses.mlkit.topic2':
      'Camera-driven flows: capture frames, show recognized text, and scan barcodes with clear user feedback.',
    'courses.mlkit.topic3':
      'Face detection: locate faces and draw custom overlays with your own graphics code.',
    'courses.mlkit.topic4':
      'Pose & body: landmarks from camera or gallery, plus angle-style samples (e.g. arm and knee).',
    'courses.mlkit.topic5':
      'Labeling & tracking: class probabilities for images, object tracking in live preview, and polished UI patterns.',
    'courses.mlkit.skills': 'Skills:',

    // Projects Section
    'projects.title': 'My Projects',
    'projects.eyebrow': 'Portfolio',
    'projects.subtitle':
      'Android-first work samples plus web and tooling—Compose, ML Kit, Ktor, and Next.js—relevant to freelance mobile and site builds.',
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

    // YouTube Section
    'youtube.eyebrow': 'Video library',
    'youtube.title': 'My YouTube Videos',
    'youtube.subtitle':
      'Hands-on Android tutorials—Compose, Kotlin, and real-world API integration.',
    'youtube.channelCta': 'View channel',
    'youtube.video1.title': 'Jetpack Compose Android App Development',
    'youtube.video1.description': 'Learn Jetpack Compose fundamentals and advanced features comprehensively for developing modern Android applications.',
    'youtube.video2.title': 'Complete Kotlin Fundamentals in One Video [2024]',
    'youtube.video2.description': 'Learn Kotlin basic concepts in one video before starting your Android development journey.',
    'youtube.video3.title': 'Complete Bank Retrofit API Development in One Video | Jetpack Compose',
    'youtube.video3.description': 'Step-by-step implementation of real bank API integration using Jetpack Compose and Retrofit.',

    // Footer
    'footer.eyebrow': 'Connect',
    'footer.subtitle':
      'Android engineering, courses, and open source. Available for freelance cross-platform mobile and web—say hello with your project brief.',
    'footer.location': 'Istanbul, Türkiye',
    'footer.socialLabel': 'Elsewhere',
    'footer.copyright': '© 2026 Ibrahim Can Erdogan. All rights reserved.',

    // Language Switch
    'language.en': 'English',
    'language.tr': 'Turkish',
  },
  tr: {
    // Hero Section
    'hero.title': 'İbrahim Can Erdoğan',
    'hero.eyebrow': 'Android öncelikli · Freelance mobil ve web',
    'hero.subtitle': 'Senior Android Engineer',
    'hero.experience': 'Yıl Deneyim',
    'hero.projects': 'Proje',
    'hero.certificates': 'Sertifika',
    'hero.courses': 'Kurs',
    'hero.viewResume': 'Özgeçmişime Göz At',
    'hero.downloadResume': 'Özgeçmişimi İndir',
    'hero.scrollDown': 'Aşağı Kaydır',
    'hero.intro':
      'Temiz mimari, Jetpack Compose arayüzü ve insanların her gün kullandığı uygulamalar geliştiriyorum. Bu ana odağın yanında freelance olarak cross-platform mobil uygulamalar ve modern web siteleri üzerinde de proje bazlı çalışıyorum.',
    'hero.statsHint': 'Kısa bir özet — detaylar için aşağı kaydır.',

    'nav.ariaLabel': 'Sayfa bölümleri',
    'nav.hero': 'Giriş',
    'nav.about': 'Hakkımda',
    'nav.experience': 'Deneyim',
    'nav.projects': 'Projeler',
    'nav.courses': 'Kurslar',
    'nav.certificates': 'Sertifikalar',
    'nav.youtube': 'YouTube',
    'nav.contact': 'İletişim',
    'nav.scrollToTop': 'Yukarı çık',

    // About Section
    'about.title': 'Hakkımda',
    'about.eyebrow': 'Profil',
    'about.highlight':
      'Mimarından arayüz cilasına kadar Kotlin, Jetpack Compose ve sürdürülebilir tasarımla canlı ortamda Android uygulamaları geliştiriyorum. Müşteri projelerinde cross-platform mobil ve web tarafında da freelance teslimatlar yapıyorum.',
    'about.stackTitle': 'Öne çıkan stack',
    'about.description1':
      'Balıkesir Üniversitesi Endüstri Mühendisliği mezunuyum; Android tarafında uçtan uca ürün çıkarıyorum. Kotlin ve Java ile sürdürülebilir mimari, Jetpack Compose ve günlük kullanımda stabil çalışan özellikler üzerinde çalışıyorum.',
    'about.description2':
      'Kariyerimde Türkiye\'deki teknoloji şirketlerinde staj ve tam zamanlı deneyimlerim var. Şu anda ebebek uygulamasında ödeme, güvenlik ve ürün özellikleri gibi alanlara katkı veriyor; Android ekosistemini yakından takip ediyorum. Daha geniş bir mobil mühendis olmak için Apple ekosisteminde de kendimi geliştiriyorum.',
    'about.freelance':
      'Freelance: Güçlü tarafım Android; buna ek olarak cross-platform mobil çözümler ve hızlı, sürdürülebilir web siteleri (ör. Next.js) geliştiriyorum. Ürün parçası, entegrasyon veya küçük ölçekli bir site için hedef ve zaman çizelgenizle yazabilirsiniz.',
    'about.contact': 'İletişim:',
    'about.email': 'ibrahimcanerdogan@outlook.com',

    // Experience Section
    'experience.title': 'Deneyim',
    'experience.eyebrow': 'Kariyer yolu',
    'experience.roadmapSubtitle':
      'Android pratiğimi şekillendiren roller, ekipler ve işlerin kronolojik bir özeti.',
    'experience.current': 'Devam Ediyor',
    'experience.months': 'ay',
    'experience.expandRole': 'Detayı göster',
    'experience.collapseRole': 'Detayı gizle',
    'experience.remote': 'Uzaktan',
    'experience.responsibilities': 'Sorumluluklar ve Başarılar',
    'experience.summaryHeading': 'Özet',
    'experience.summary.ebebek-android':
      'ebebek Android uygulamasında ödeme, cüzdan, güvenlik ve günlük Kotlin ürün geliştirme süreçlerinde sürekli sorumluluk alıyorum.',
    'experience.summary.logo-android':
      'Java tabanlı kodu Kotlin’e taşıyarak ve Coroutines ile MVVM mimarisini yerleştirerek kod tabanını modernize ettim.',
    'experience.summary.logo-jr':
      'Depo ve saha satış uygulamalarında MVVM, test disiplini ve Jira, Git ile Sonar üzerinden düzenli teslimatla özellik geliştirdim.',
    'experience.summary.logo-intern':
      'Kotlin ile WMS ve mobil projelerde Jetpack bileşenleri, mimari disiplin ve otomasyonlu testlerle katkı verdim.',
    'experience.summary.ebebek-it':
      'Merkez ofiste IT ekibine destek stajı yaptım ve e-kamp hazırlık sürecini tamamladım.',
    'experience.summary.yapikredi':
      'Online bankacılık keşif programında simülasyonlar, ürün öğrenimi ve birinci biten takım sunumuyla yer aldım.',
    'experience.summary.qnb':
      'Temel bankacılık, iş birimleri ve kariyer atölyelerini kapsayan giriş stajını sertifikayla tamamladım.',
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
    'certificates.title': 'Sertifikalar',
    'certificates.eyebrow': 'Yeterlilikler',
    'certificates.subtitle': 'Saha deneyimini destekleyen programlar ve platform sertifikaları.',
    'certificates.neo.title': 'Agility: İş Hayatında Çeviklik',
    'certificates.neo.company': 'Neo Skola',
    'certificates.neo.date': 'Yayın: Mart 2025',
    'certificates.udemy.title': 'Jetpack Compose ile Android Uygulama Geliştirme Kursu | 2024',
    'certificates.udemy.company': 'Udemy',
    'certificates.udemy.date': '2024 - Devam ediyor',
    'certificates.meta.title': 'Meta Android Developer',
    'certificates.meta.company': 'Meta',
    'certificates.meta.date': 'Yayın: Şubat 2024',
    'certificates.qualification': 'Yeterlilik Kimliği',

    // Courses Section
    'courses.title': 'Udemy Kurslarım',
    'courses.eyebrow': 'Udemy',
    'courses.subtitle': 'Compose, Android arayüzü ve cihaz üzeri ML üzerine yapılandırılmış kurslar—üretimde kullandığım stack ile uyumlu.',
    'courses.showMore': 'Daha fazla',
    'courses.showLess': 'Daha az',
    'courses.compose.title': 'Jetpack Compose: İleri Seviye Uygulama Geliştirme Rehberi',
    'courses.compose.date': '2025 - Devam ediyor',
    'courses.compose.description': 'Jetpack Compose ile geliştirilmiş örnek uygulamalar koleksiyonu. Modern Android geliştirme tekniklerini ve best practice\'leri içeren projeler.',
    'courses.compose.content': 'Kursun İçeriği:',
    'courses.compose.topic1': 'Jetpack Compose Temelleri: Gelişmiş UI tasarımı ve layout yönetimi',
    'courses.compose.topic2': 'Gelişmiş UI Tasarımı: Animasyonlar, dokunmatik etkileşimler ve modern kullanıcı deneyimi',
    'courses.compose.topic3': 'Veri Yönetimi ve State Yönetimi: Veri akışları, ViewModel\'ler ve state yönetimi teknikleri',
    'courses.compose.topic4': 'Uygulama Geliştirme Stratejileri: Performans optimizasyonu, kod kalitesi ve best practices',
    'courses.compose.topic5': 'Gerçek Dünya Projeleri: Pratik uygulamalar ve senaryolar üzerinde çalışmalar',
    'courses.compose.skills': 'Yetenekler:',
    'courses.mlkit.title': 'Google Machine Learning ile Android Uygulama Geliştirme',
    'courses.mlkit.date': '2021 - Devam ediyor',
    'courses.mlkit.description':
      'Google ML Kit ile pratik Android örnekleri—OCR, yüz, duruş, barkod ve nesne API’leri; Kamera, diyaloglar ve Firebase ile entegre.',
    'courses.mlkit.content': 'Kursun içeriği:',
    'courses.mlkit.topic1':
      'ML Kit temelleri: Android’de cihaz üstü görü ve OCR, yüz, duruş, barkod, nesne API’lerinin kullanımı.',
    'courses.mlkit.topic2':
      'Kamera akışları: kare yakalama, tanınan metni gösterme ve barkod tarama; kullanıcıya net geri bildirim.',
    'courses.mlkit.topic3':
      'Yüz algılama: yüzleri bulma ve kendi çizim kodunuzla özel bindirmeler.',
    'courses.mlkit.topic4':
      'Duruş ve vücut: kamera veya galeriden landmark’lar; kol ve diz açısı tarzı örnekler.',
    'courses.mlkit.topic5':
      'Etiketleme ve takip: görüntü sınıfları ve olasılıklar, canlı önizlemede nesne takibi ve cilalı arayüz desenleri.',
    'courses.mlkit.skills': 'Yetenekler:',

    // Projects Section
    'projects.title': 'Projelerim',
    'projects.eyebrow': 'Portföy',
    'projects.subtitle':
      'Öncelik Android örnekleri; freelance mobil ve web teslimatlarıyla ilişkili Compose, ML Kit, Ktor ve Next.js çalışmaları.',
    'projects.compose.title': 'Awesome Jetpack Compose App Samples',
    'projects.compose.date': '2024 - Devam ediyor',
    'projects.compose.description': 'Jetpack Compose ile geliştirilmiş örnek uygulamalar koleksiyonu. Modern UI tasarımları ve best practice\'ler içerir.',
    'projects.mlkit.title': 'Google ML Kit Android Apps',
    'projects.mlkit.date': '2021 - Devam ediyor',
    'projects.mlkit.description': 'Google ML Kit kullanarak geliştirilmiş yapay zeka destekli Android uygulamaları. Görüntü işleme, metin tanıma ve nesne algılama özellikleri içerir.',
    'projects.boruto.title': 'JetBorutoKtorServerApp',
    'projects.boruto.date': '2024 - Devam ediyor',
    'projects.boruto.description': 'Jetpack Compose ile geliştirilmiş Boruto karakterleri uygulaması ve Ktor ile yazılmış backend servisi. Full-stack Android geliştirme örneği.',
    'projects.ecotrack.title': 'EcoTrack',
    'projects.ecotrack.date': '2025 - Devam ediyor',
    'projects.ecotrack.description': 'Sürdürülebilir yaşam için geliştirilmiş, karbon ayak izini takip etmeye ve azaltmaya yardımcı olan bir web uygulaması.',
    'projects.calculator.title': 'NextCalculator',
    'projects.calculator.date': '2025 - Devam ediyor',
    'projects.calculator.description': 'Next.js ile geliştirilmiş modern ve kullanıcı dostu bir hesap makinesi uygulaması. Material Design 3 ve modern UI/UX pratikleri içerir.',
    'projects.liveDemo': 'Canlı Demo',

    // YouTube Section
    'youtube.eyebrow': 'Video içerikleri',
    'youtube.title': 'YouTube Videolarım',
    'youtube.subtitle':
      'Compose, Kotlin ve gerçek dünya API entegrasyonu üzerine pratik Android eğitimleri.',
    'youtube.channelCta': 'Kanalı aç',
    'youtube.video1.title': 'Jetpack Compose ile Android Uygulama Geliştirme',
    'youtube.video1.description': 'Modern Android uygulamaları geliştirmek için Jetpack Compose\'un temel ve ileri seviye özelliklerini kapsamlı bir şekilde öğrenin.',
    'youtube.video2.title': 'Tek Videoda Detaylı Kotlin Temelleri [2024]',
    'youtube.video2.description': 'Android geliştirme yolculuğunuza başlamadan önce Kotlin\'in temel kavramlarını tek videoda öğrenin.',
    'youtube.video3.title': 'Tek Videoda Banka Retrofit API Geliştirme | Jetpack Compose',
    'youtube.video3.description': 'Jetpack Compose ve Retrofit kullanarak gerçek bir banka API\'si entegrasyonunu adım adım uygulayın.',

    // Footer
    'footer.eyebrow': 'İletişim',
    'footer.subtitle':
      'Android mühendisliği, kurslar ve açık kaynak. Cross-platform mobil ve web için freelance projelere açığım — kısa bir brief ile iletişime geçebilirsiniz.',
    'footer.location': 'İstanbul, Türkiye',
    'footer.socialLabel': 'Diğer platformlar',
    'footer.copyright': '© 2026 İbrahim Can Erdoğan. Tüm hakları saklıdır.',

    // Language Switch
    'language.en': 'English',
    'language.tr': 'Türkçe',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    document.documentElement.lang = language === 'tr' ? 'tr' : 'en';
  }, [language]);

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