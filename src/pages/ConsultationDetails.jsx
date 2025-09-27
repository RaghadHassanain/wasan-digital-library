import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { fakeConsultations } from '../data/fakeData';
import Header from '../components/Header';

const ConsultationDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const consultation = fakeConsultations.find(c => c.id === id);

  const handleLogout = () => {
    localStorage.removeItem('auth_user');
    navigate('/');
  };

  const handleBackToLibrary = () => {
    navigate('/library');
  };

  if (!consultation) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <Header onLogout={handleLogout} showLogout={true} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="bg-gradient-to-br from-white to-slate-50/30 dark:from-slate-800 dark:to-slate-700/50 rounded-3xl shadow-xl p-12 border border-slate-200/50 dark:border-slate-600/50 max-w-md mx-auto">
              <div className="w-24 h-24 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-slate-400 dark:text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
                الاستشارة غير موجودة
              </h1>
              <p className="text-slate-600 dark:text-slate-300 mb-8">لم يتم العثور على الاستشارة المطلوبة</p>
              <button
                onClick={handleBackToLibrary}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-medium shadow-lg hover:shadow-blue-500/25 transform hover:scale-105"
              >
                <div className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2 rtl:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  {t('consultation.backToLibrary')}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <Header onLogout={handleLogout} showLogout={true} />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <button
            onClick={handleBackToLibrary}
            className="mb-6 inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-medium shadow-lg hover:shadow-blue-500/25 transform hover:scale-105"
          >
            <svg className="w-5 h-5 mr-2 rtl:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {t('consultation.backToLibrary')}
          </button>
        </div>

        <div className="bg-gradient-to-br from-white to-slate-50/30 dark:from-slate-800 dark:to-slate-700/50 rounded-3xl shadow-2xl p-8 border border-slate-200/50 dark:border-slate-600/50 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-blue-300/30 dark:from-blue-800/20 dark:to-blue-700/20 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-slate-200/30 to-slate-300/30 dark:from-slate-600/20 dark:to-slate-500/20 rounded-full translate-y-12 -translate-x-12"></div>
          
          <div className="relative z-10">
            <div className="mb-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-200">
                  {consultation.title}
                </h1>
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900/50 dark:to-blue-800/50 text-blue-800 dark:text-blue-200 border border-blue-200 dark:border-blue-700">
                  {consultation.category}
                </span>
              </div>
              <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm">
                <svg className="w-4 h-4 mr-2 rtl:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {consultation.created_at}
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-3 rtl:ml-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  {t('consultation.question')}
                </h2>
                <div className="bg-gradient-to-br from-slate-50 to-slate-100/50 dark:from-slate-700/50 dark:to-slate-600/50 rounded-2xl p-6 border border-slate-200/50 dark:border-slate-600/50">
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
                    {consultation.question}
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center mr-3 rtl:ml-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  {t('consultation.answer')}
                </h2>
                <div className="bg-gradient-to-br from-emerald-50 to-green-50/50 dark:from-emerald-900/20 dark:to-green-900/20 rounded-2xl p-6 border border-emerald-200/50 dark:border-emerald-700/50">
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
                    {consultation.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationDetails;
