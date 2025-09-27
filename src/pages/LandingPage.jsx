import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LoginModal from '../components/LoginModal';
import LanguageSwitcher from '../components/LanguageSwitcher';

const LandingPage = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative flex flex-col min-h-screen">
        {/* Hero Section */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-6xl mx-auto w-full">
            <div className="text-center">

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                المكتبة القانونية
                <span className="block text-2xl sm:text-3xl md:text-4xl text-blue-300 mt-2">
                  الادارة التنفيذية للشؤون القانونية
                </span>
              </h1>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 max-w-5xl mx-auto">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white border-opacity-20">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2">استشارات موثوقة</h3>
                  <p className="text-blue-200 text-xs sm:text-sm">معلومات قانونية دقيقة ومحدثة</p>
                </div>

                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white border-opacity-20">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2">وصول سريع</h3>
                  <p className="text-blue-200 text-xs sm:text-sm">البحث والوصول للمعلومات بسهولة</p>
                </div>

                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white border-opacity-20">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2">أمان وحماية</h3>
                  <p className="text-blue-200 text-xs sm:text-sm">بيانات محمية وآمنة</p>
                </div>
              </div>

              {/* Login Button */}
              <button
                onClick={() => setIsLoginModalOpen(true)}
                className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-xl hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 font-semibold text-base sm:text-lg shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105"
              >
                تسجيل الدخول
                <svg className="w-4 h-4 sm:w-5 sm:h-5 inline-block mr-2 rtl:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-auto py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-blue-200 text-xs sm:text-sm">
              © 2025 المكتبة القانونية للإدارة التنفيذية للشؤون القانونية. جميع الحقوق محفوظة.
            </p>
          </div>
        </footer>
      </main>

      {/* Login Modal */}
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </div>
  );
};

export default LandingPage;
