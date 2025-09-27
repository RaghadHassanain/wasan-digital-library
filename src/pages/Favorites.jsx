import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const Favorites = () => {
  const navigate = useNavigate();
  const [favorites] = useState([
    {
      id: "c-001",
      title: "عدم تجديد عقد العمل",
      question: "إشارة الى تقدم الموظف ... بطلب عدم تجديد عقد العمل بتاريخ 06 أغسطس 2025م على أن يكون اخر يوم عمل له 15 سبتمبر 2025م (مرفق), حيث ان فترة الاشعار اقل من ستين يوم و ذلك استناداً إلى عقد العمل الموقع مع الموظف (مرفق العقد). و بناء على لائحة تنظيم العمل بالمادة 31 البند 2 \"انتهاء مدة العقد, مالم يتجدد العقد وفقاً لاحكام النظام\" , وقد تم استلام الموظف طلب تجديد العقد بتاريخ 26 يونيو 2025م (مرفق) وذلك باعتماد المدير المباشر بتجديد عقد العمل.\n\nنود الاستشارة بشأن نظامية قبول طلب الموظف بعدم تجديد عقد العمل لعدم الالتزام بفترة الاشعار أو تعديل سبب الانهاء إلى استقالة.",
      answer: "إشارة الى بريدكم أدناه ، بشأن تقدم الموظف… بطلب عدم تجديد عقد العمل بتاريخ 06 أغسطس 2025م على أن يكون آخر يوم عمل له 15 سبتمبر 2025م, و أن فترة الإشعار أقل من ستين يوم وفقًا لعقد العمل الموقع مع الموظف , وأنه قد تم استلام الموظف طلب تجديد العقد بتاريخ 26 يونيو 2025م وذلك باعتماد المدير المباشر بتجديد عقد العمل. تلى ذلك قيام الموظف بإشعار الصندوق برغبته بعدم عدم تجديد عقد العمل وذلك بتاريخ 6-8-2025 ، وطلبكم الرأي القانوني بشأن نظامية قبول طلب الموظف بعدم تجديد عقد العمل لعدم الالتزام بفترة الاشعار أو تعديل سبب الإنهاء الى استقالة.\n\nوبالرجوع الى عقد العمل للموظف وحيث نص على أن مدة العقد تبدأ بتاريخ 16-9-2024 و تنتهي بتاريخ 15-9-2025 ، كما أشار العقد في أولًا منه الفقرة 1.4 على أن مدة العقد (سنة) تتجدد تلقائيًا لمدة أو لمدد مماثلة ، ما لم يشعر أحد الطرفين الآخر برغبته في التجديد قبل ثلاثين يومًا من تاريخ انتهاء العقد . ويتضح أن العقد نص على أن مدة إشعار الطرف الآخر بعدم الرغبة في التجديد هي 30 يوم للطرفين وليس 60 يومًا.\n\nوبالاطلاع على ( المرفق) المتعلق بتجديد العقد يتبين أن المدير المباشر قام باعتماد تجديده و أن الموظف استلم طلب التجديد بتاريخ 26-6-2025 ولم يفصح عن رغبته في القبول و إنما بسبب انتهاء الوقت المحدد تم الاعتماد تلقائيًا من النظام .\n\nوبنا على ما سبق يتضح أن الموظف لم يفصح عن رغبته في القبول و إنما تم الاعتماد تلقائيًا بسبب انتهاء الوقت المحدد في النظام وبالتالي لم تلتقي إرادة الطرفين على تجديد العقد، وبما أن الموظف قام بإشعار الصندوق بعدم رغبته في التجديد خلال الفترة الزمنية المشار اليها في العقد المبرم بين الطرفين و قبل 30 يوم من تاريخ انتهاء العقد فتكون فترة الإخطار وفقا للمتفق عليه بين الطرفين.\n\nعليه و بحسب ما تم تزويدنا به من مستندات بهذا الشأن ترى الشؤون القانونية أن إشعار الموظف بعدم رغبته في تجديد العقد صحيح و ضمن الفترة المشار اليها في العقد المبرم بين الطرفين مع مراعاة حقوق الموظف المنصوص عليها في نظام العمل بهذا الشأن .",
      category: "عمل",
      created_at: "2025-09-01"
    },
    {
      id: "c-003",
      title: "إجازة أمومة",
      question: "كم مدة إجازة الأمومة حسب النظام؟",
      answer: "النظام يمنح 10 أسابيع مدفوعة الأجر، يمكن توزيعها قبل وبعد الولادة.",
      category: "عمل",
      created_at: "2025-09-10"
    }
  ]);

  const handleLogout = () => {
    localStorage.removeItem('auth_user');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <Header onLogout={handleLogout} showLogout={true} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-white via-slate-50 to-indigo-50/30 dark:from-slate-800 dark:via-slate-700 dark:to-indigo-900/20 rounded-3xl shadow-2xl p-8 border border-slate-200/50 dark:border-slate-600/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-rose-200/30 to-pink-200/30 dark:from-rose-800/20 dark:to-pink-800/20 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-rose-200/30 to-pink-200/30 dark:from-rose-600/20 dark:to-pink-500/20 rounded-full translate-y-12 -translate-x-12"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                    المفضلة
                  </h1>
                  <p className="text-xl text-slate-600 dark:text-slate-300 font-medium">
                    استشاراتك المفضلة والمحفوظة
                  </p>
                </div>
                <div className="hidden md:block">
                  <div className="w-20 h-20 bg-gradient-to-br from-rose-500 to-pink-600 rounded-3xl flex items-center justify-center shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl"></div>
                    <svg className="w-10 h-10 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Favorites List */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-white to-slate-50/30 dark:from-slate-800 dark:to-slate-700/50 rounded-2xl shadow-xl p-6 border border-slate-200/50 dark:border-slate-600/50 mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                  الاستشارات القانونية المفضلة
                </h2>
                <p className="text-slate-600 dark:text-slate-300">
                  لديك <span className="font-bold text-rose-600 dark:text-rose-400">{favorites.length}</span> استشارة في المفضلة
                </p>
              </div>
              
              {favorites.length > 0 && (
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <div className="w-3 h-3 bg-gradient-to-r from-rose-500 to-pink-600 rounded-full"></div>
                    <span className="text-sm text-slate-600 dark:text-slate-300">المفضلة</span>
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">
                    آخر تحديث: اليوم
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {favorites.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favorites.map((consultation, index) => (
                <div
                  key={consultation.id}
                  className="bg-gradient-to-br from-white to-slate-50/30 dark:from-slate-800 dark:to-slate-700/50 rounded-2xl shadow-xl p-6 border border-slate-200/50 dark:border-slate-600/50 hover:shadow-2xl transition-all duration-300 group cursor-pointer transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden"
                  onClick={() => navigate(`/consultation/${consultation.id}`)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-rose-100/30 to-pink-100/30 dark:from-rose-900/20 dark:to-pink-900/20 rounded-full -translate-y-8 translate-x-8"></div>
                  <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-rose-100/30 to-pink-100/30 dark:from-rose-600/20 dark:to-pink-500/20 rounded-full translate-y-6 -translate-x-6"></div>
                  
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
                      <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl flex items-center justify-center ml-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-rose-100 to-pink-100 dark:from-rose-900/50 dark:to-pink-900/50 text-rose-800 dark:text-rose-200 border border-rose-200 dark:border-rose-700">
                          {consultation.category}
                        </span>
                        <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                          {consultation.created_at}
                        </span>
                      </div>
                      <div className="flex items-center text-rose-600 dark:text-rose-400 text-sm font-medium group-hover:text-rose-700 dark:group-hover:text-rose-300 transition-colors">
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
          ) : (
            <div className="text-center py-16">
              <div className="bg-gradient-to-br from-white to-slate-50/30 dark:from-slate-800 dark:to-slate-700/50 rounded-3xl shadow-xl p-12 border border-slate-200/50 dark:border-slate-600/50 max-w-md mx-auto">
                <div className="w-24 h-24 bg-gradient-to-br from-rose-100 to-pink-100 dark:from-rose-900/50 dark:to-pink-900/50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-rose-500 dark:text-rose-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-2">لا توجد استشارات مفضلة</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-8">ابدأ بإضافة استشارات إلى مفضلتك لسهولة الوصول إليها لاحقاً</p>
                <button
                  onClick={() => navigate('/library')}
                  className="px-8 py-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-xl hover:from-rose-600 hover:to-pink-700 transition-all duration-300 font-medium shadow-lg hover:shadow-rose-500/25 transform hover:scale-105"
                >
                  <div className="flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2 rtl:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    تصفح الاستشارات القانونية
                  </div>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
