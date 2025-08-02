import React from 'react';

interface ContactProps {
  isDarkTheme: boolean;
  formRef: React.RefObject<HTMLFormElement>;
  formStatus: 'idle' | 'sending' | 'success' | 'error';
  formMessage: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

const Contact: React.FC<ContactProps> = ({ isDarkTheme, formRef, formStatus, formMessage, handleSubmit }) => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">İletişime Geç</span>
          <span className="ml-2">📧</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div 
              className={`${isDarkTheme ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 border ${isDarkTheme ? 'border-gray-700' : 'border-gray-200'} relative z-40`}
              onClick={(e) => e.stopPropagation()}
              onMouseDown={(e) => e.stopPropagation()}
              onMouseUp={(e) => e.stopPropagation()}
            >
              <h3 className={`text-xl font-semibold mb-4 ${isDarkTheme ? 'text-blue-400' : 'text-blue-600'}`}>İletişim Bilgileri 📞</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <svg className={`w-6 h-6 ${isDarkTheme ? 'text-purple-400' : 'text-purple-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a 
                    href="mailto:ibrahimcanerdogan@outlook.com" 
                    className={`${isDarkTheme ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'} transition-colors cursor-pointer`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    ibrahimcanerdogan@outlook.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className={`w-6 h-6 ${isDarkTheme ? 'text-purple-400' : 'text-purple-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className={`${isDarkTheme ? 'text-gray-300' : 'text-gray-700'} cursor-default`}>İstanbul, Türkiye</span>
                </div>
              </div>
            </div>

            <div 
              className={`${isDarkTheme ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 border ${isDarkTheme ? 'border-gray-700' : 'border-gray-200'}`}
              onClick={(e) => e.stopPropagation()}
              onMouseDown={(e) => e.stopPropagation()}
              onMouseUp={(e) => e.stopPropagation()}
            >
              <h3 className={`text-xl font-semibold mb-4 ${isDarkTheme ? 'text-blue-400' : 'text-blue-600'}`}>Sosyal Medya 🌐</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/ibrahimcanerdogan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${isDarkTheme ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors cursor-pointer`}
                  aria-label="GitHub"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/ibrahimcanerdogan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${isDarkTheme ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://medium.com/@ibrahimcanerdogan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${isDarkTheme ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
                  aria-label="Medium"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@ibrahimcanerdogan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${isDarkTheme ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
                  aria-label="YouTube"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a
                  href="https://www.udemy.com/user/ibrahim-can-erdogan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${isDarkTheme ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
                  aria-label="Udemy"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 0L5.81 3.573v3.574l6.189-3.574 6.191 3.574V3.573zM5.81 10.148v8.144c0 1.85.589 3.243 1.741 4.234S10.177 24 11.973 24s3.269-.482 4.448-1.474c1.179-.991 1.768-2.439 1.768-4.314v-8.064h-3.242v7.85c0 2.036-1.002 3.055-2.974 3.055-1.971 0-2.974-1.02-2.974-3.055v-7.85H5.81z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`${isDarkTheme ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 border ${isDarkTheme ? 'border-gray-700' : 'border-gray-200'}`}>
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Mesaj Gönder ✉️</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className={`block text-sm font-medium ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
                  İsim
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={`w-full px-4 py-2 ${isDarkTheme ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300'} border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}
                  required
                  disabled={formStatus === 'sending'}
                />
              </div>
              <div>
                <label htmlFor="email" className={`block text-sm font-medium ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
                  E-posta
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`w-full px-4 py-2 ${isDarkTheme ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300'} border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}
                  required
                  disabled={formStatus === 'sending'}
                />
              </div>
              <div>
                <label htmlFor="message" className={`block text-sm font-medium ${isDarkTheme ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
                  Mesaj
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className={`w-full px-4 py-2 ${isDarkTheme ? 'bg-gray-700 border-gray-600' : 'bg-gray-100 border-gray-300'} border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}
                  required
                  disabled={formStatus === 'sending'}
                ></textarea>
              </div>
              {formMessage && (
                <div className={`p-3 rounded-lg ${
                  formStatus === 'success' ? 'bg-green-500/20 text-green-300' : 
                  formStatus === 'error' ? 'bg-red-500/20 text-red-300' : ''
                }`}>
                  {formMessage}
                </div>
              )}
              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className={`w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 ${
                  formStatus === 'sending' ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {formStatus === 'sending' ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Gönderiliyor...
                  </span>
                ) : 'Gönder'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 