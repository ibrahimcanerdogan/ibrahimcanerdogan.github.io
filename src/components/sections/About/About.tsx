import React from 'react';

interface AboutProps {
  isDarkTheme: boolean;
}

const About: React.FC<AboutProps> = ({ isDarkTheme }) => {
  return (
    <div className={`${isDarkTheme ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm rounded-2xl p-8 shadow-xl border ${isDarkTheme ? 'border-gray-700/50' : 'border-gray-200/50'}`}>
      <h2 className={`text-2xl font-semibold mb-6 ${isDarkTheme ? 'text-blue-400' : 'text-blue-600'}`}>Hakkımda 📝</h2>
      <div className={`space-y-4 ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
        <p>
          Balıkesir Üniversitesi Endüstri Mühendisliği mezunu, kendini Android Yazılım Geliştirme alanında uzmanlaşmış bir profesyonel olarak tanıtan biriyim. Kotlin ve Java dillerinde yetkin olup, gelişmiş Android uygulamaları geliştirme ve proje mimarilerini iyileştirme konusunda kanıtlanmış bir geçmişe sahibim.
        </p>
        <p>
          Stajlarım ve profesyonel rollerim, Türkiye'nin önde gelen teknoloji firmalarında gerçekleşti. Şu anda, Ebebek'te Android geliştirme sürecine katkıda bulunmaktayım ve sürekli olarak becerilerimi ve bilgimi geliştirmeye çalışıyorum. Teknolojiye olan tutkumla, aynı zamanda iOS teknolojisini de keşfetmekte ve her projede en iyi sonuçları sunmaya kararlıyım.
        </p>
      </div>
      <div className="mt-8 pt-6 border-t border-gray-700/50">
        <p className={`${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
          <span className={`${isDarkTheme ? 'text-blue-400' : 'text-blue-600'} font-semibold`}>İletişim:</span>
          <a 
            href="mailto:ibrahimcan.erdogann@gmail.com" 
            className={`ml-2 ${isDarkTheme ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-500'} transition-colors`}
          >
            ibrahimcan.erdogann@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default About; 