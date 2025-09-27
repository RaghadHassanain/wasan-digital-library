import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { fakeConsultations } from '../data/fakeData';

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  const authUser = JSON.parse(localStorage.getItem('auth_user') || '{}');
  const username = authUser.username || 'User';

  const handleLogout = () => {
    localStorage.removeItem('auth_user');
    navigate('/');
  };

  const stats = [
    {
      title: 'إجمالي الاستشارات',
      value: '1,247',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      change: '+12%',
      changeType: 'positive'
    },
    {
      title: 'الاستشارات الجديدة',
      value: '89',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      ),
      change: '+5%',
      changeType: 'positive'
    }
  ];

  const quickActions = [
    {
      title: 'تصفح الاستشارات',
      description: 'استكشف مكتبة الاستشارات القانونية الشاملة',
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      color: 'from-blue-500 to-indigo-600',
      action: () => navigate('/library')
    },
    {
      title: 'البحث المتقدم',
      description: 'ابحث في الاستشارات باستخدام فلاتر متقدمة',
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      color: 'from-emerald-500 to-green-600',
      action: () => navigate('/library')
    },
    {
      title: 'المفضلة',
      description: 'استشاراتك المفضلة والمحفوظة',
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      color: 'from-rose-500 to-pink-600',
      action: () => navigate('/library')
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <Header onLogout={handleLogout} showLogout={true} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8 sm:mb-12">
          <div className="bg-gradient-to-br from-white via-blue-50 to-indigo-50 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800 rounded-3xl shadow-2xl p-6 sm:p-8 border border-blue-200/50 dark:border-slate-600/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full -translate-y-12 sm:-translate-y-16 translate-x-12 sm:translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-tr from-slate-200/30 to-slate-300/30 rounded-full translate-y-8 sm:translate-y-12 -translate-x-8 sm:-translate-x-12"></div>
            <div className="relative z-10">
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                  مرحباً بك، {username}
                </h1>
                <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 font-medium">
                  في المكتبة الرقمية للاستشارات القانونية
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-200 mb-6 sm:mb-8">نظرة عامة</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Notice Card */}
            <div className="bg-gradient-to-br from-white to-amber-50/30 dark:from-slate-800 dark:to-amber-900/20 rounded-2xl shadow-xl p-4 sm:p-6 border border-amber-200/50 dark:border-amber-700/50 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-right group">
              <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <div className="text-white">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    <text x="12" y="16" textAnchor="middle" className="text-xs font-bold" fill="#ea580c">!</text>
                  </svg>
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-200 mb-2 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors">تنبيه مهم</h3>
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-medium">
                يجب الحفاظ على سرية جميع البيانات والمعلومات الحساسة
              </p>
            </div>

            {/* Stats Cards */}
            {stats.map((stat, index) => {
              const iconColors = [
                'from-purple-500 to-violet-600', // إجمالي الاستشارات - بنفسجي
                'from-yellow-500 to-amber-600'   // الاستشارات الجديدة - أصفر
              ];
              
              return (
                <div key={index} className="bg-gradient-to-br from-white to-blue-50/30 dark:from-slate-800 dark:to-slate-700 rounded-2xl shadow-xl p-4 sm:p-6 border border-blue-200/50 dark:border-slate-600/50 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-right group">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${iconColors[index]} rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <div className="text-white">
                      {stat.icon}
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-200 mb-2 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors">{stat.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-medium">{stat.value}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-200 mb-6 sm:mb-8">الإجراءات السريعة</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {quickActions.map((action, index) => (
              <button
                key={index}
                onClick={action.action}
                className="bg-gradient-to-br from-white to-blue-50/30 dark:from-slate-800 dark:to-slate-700 rounded-2xl shadow-xl p-4 sm:p-6 border border-blue-200/50 dark:border-slate-600/50 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-right group"
              >
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${action.color} rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {action.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-200 mb-2 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors">{action.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-medium">{action.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Latest Consultations */}
        <div className="mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-200">أحدث الاستشارات</h2>
            <button
              onClick={() => navigate('/library')}
              className="flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 font-medium shadow-lg hover:shadow-blue-500/25 text-sm sm:text-base"
            >
              <span>عرض الكل</span>
              <svg className="w-4 h-4 mr-2 rtl:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {fakeConsultations.map((consultation, index) => (
              <div
                key={consultation.id}
                className="bg-gradient-to-br from-white to-slate-50/30 dark:from-slate-800 dark:to-slate-700/50 rounded-2xl shadow-xl p-4 sm:p-6 border border-slate-200/50 dark:border-slate-600/50 hover:shadow-2xl transition-all duration-300 group cursor-pointer transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden"
                onClick={() => navigate(`/consultation/${consultation.id}`)}
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
    </div>
  );
};

export default Home;
