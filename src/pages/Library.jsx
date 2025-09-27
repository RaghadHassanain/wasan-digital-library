import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { fakeConsultations } from '../data/fakeData';
import Header from '../components/Header';

const Library = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('auth_user');
    navigate('/');
  };

  const handleViewDetails = (id) => {
    navigate(`/consultation/${id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <Header onLogout={handleLogout} showLogout={true} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-white via-slate-50 to-indigo-50/30 dark:from-slate-800 dark:via-slate-700 dark:to-indigo-900/20 rounded-3xl shadow-2xl p-8 border border-slate-200/50 dark:border-slate-600/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-blue-300/30 dark:from-blue-800/20 dark:to-blue-700/20 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-slate-200/30 to-slate-300/30 dark:from-slate-600/20 dark:to-slate-500/20 rounded-full translate-y-12 -translate-x-12"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                    {t('library.consultations')}
                  </h1>
                  <p className="text-xl text-slate-600 dark:text-slate-300 font-medium">
                    استكشف مكتبة الاستشارات القانونية الشاملة
                  </p>
                </div>
                <div className="hidden md:block">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl"></div>
                    <svg className="w-10 h-10 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Consultations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fakeConsultations.map((consultation, index) => (
            <div
              key={consultation.id}
              className="bg-gradient-to-br from-white to-slate-50/30 dark:from-slate-800 dark:to-slate-700/50 rounded-2xl shadow-xl p-6 border border-slate-200/50 dark:border-slate-600/50 hover:shadow-2xl transition-all duration-300 group cursor-pointer transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden"
              onClick={() => handleViewDetails(consultation.id)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-100/30 to-blue-200/30 dark:from-blue-900/20 dark:to-blue-800/20 rounded-full -translate-y-8 translate-x-8"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-slate-100/30 to-slate-200/30 dark:from-slate-600/20 dark:to-slate-500/20 rounded-full translate-y-6 -translate-x-6"></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-2 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors line-clamp-2">
                      {consultation.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-3 line-clamp-2">
                      {consultation.question}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center ml-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900/50 dark:to-blue-800/50 text-blue-800 dark:text-blue-200 border border-blue-200 dark:border-blue-700">
                      {consultation.category}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      {consultation.created_at}
                    </span>
                  </div>
                    <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                    <span>عرض التفاصيل</span>
                    <svg className="w-4 h-4 mr-1 rtl:ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Library;
