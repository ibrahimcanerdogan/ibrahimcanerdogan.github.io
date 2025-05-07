import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-32">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6 leading-relaxed bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            İbrahim Can Erdoğan
          </h1>
          <p className="text-2xl text-gray-300">
            Android Engineer
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* About Section */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 mb-8 shadow-xl border border-gray-700/50">
            <h2 className="text-2xl font-semibold mb-6 text-blue-400">Hakkımda</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Balıkesir Üniversitesi Endüstri Mühendisliği mezunu, kendini Android Yazılım Geliştirme alanında uzmanlaşmış bir profesyonel olarak tanıtan biriyim. Kotlin ve Java dillerinde yetkin olup, gelişmiş Android uygulamaları geliştirme ve proje mimarilerini iyileştirme konusunda kanıtlanmış bir geçmişe sahibim.
              </p>
              <p>
                Stajlarım ve profesyonel rollerim, Türkiye'nin önde gelen teknoloji firmalarında gerçekleşti. Şu anda, Ebebek'te Android geliştirme sürecine katkıda bulunmaktayım ve sürekli olarak becerilerimi ve bilgimi geliştirmeye çalışıyorum. Teknolojiye olan tutkumla, aynı zamanda iOS teknolojisini de keşfetmekte ve her projede en iyi sonuçları sunmaya kararlıyım.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-700/50">
              <p className="text-gray-300">
                <span className="text-blue-400 font-semibold">İletişim:</span>
                <a 
                  href="mailto:ibrahimcan.erdogann@gmail.com" 
                  className="ml-2 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  ibrahimcan.erdogann@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-700/50">
            <h2 className="text-2xl font-semibold mb-6 text-blue-400">Yetenekler</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-purple-400">Programlama Dilleri</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    Kotlin (İleri Seviye)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    Java (İleri Seviye)
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-purple-400">Android Geliştirme</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    Android SDK & NDK
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    Jetpack Components
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    Material Design
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    Jetpack Compose
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-purple-400">Mimari & Tasarım</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    MVVM Architecture
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    Clean Architecture
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    SOLID Prensipleri
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    Dependency Injection
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-purple-400">Araçlar & Teknolojiler</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    Git & GitHub
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    Firebase
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-4 rounded-full mr-2"></span>
                    RESTful API & Retrofit
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    Coroutines & Flow
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
