import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { fakeConsultations } from '../data/fakeData';

const Search = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredConsultations, setFilteredConsultations] = useState(fakeConsultations);

  const categories = ['all', 'عمل', 'ملكية فكرية', 'عقود', 'قانونية'];

  const handleSearch = () => {
    let filtered = fakeConsultations;

    if (searchTerm.trim()) {
      filtered = filtered.filter(consultation =>
        consultation.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        consultation.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        consultation.answer.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(consultation => consultation.category === selectedCategory);
    }

    setFilteredConsultations(filtered);
  };

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
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-200/30 to-green-200/30 dark:from-emerald-800/20 dark:to-green-800/20 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-slate-200/30 to-slate-300/30 dark:from-slate-600/20 dark:to-slate-500/20 rounded-full translate-y-12 -translate-x-12"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                    البحث المتقدم
                  </h1>
                  <p className="text-xl text-slate-600 dark:text-slate-300 font-medium">
                    ابحث في الاستشارات القانونية باستخدام فلاتر متقدمة
                  </p>
                </div>
                <div className="hidden md:block">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-3xl flex items-center justify-center shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl"></div>
                    <svg className="w-10 h-10 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search Form */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-white to-slate-50/30 dark:from-slate-800 dark:to-slate-700/50 rounded-2xl shadow-xl p-8 border border-slate-200/50 dark:border-slate-600/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald-100/50 to-green-100/50 dark:from-emerald-900/20 dark:to-green-900/20 rounded-full -translate-y-10 translate-x-10"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-emerald-100/50 to-green-100/50 dark:from-emerald-700/20 dark:to-green-600/20 rounded-full translate-y-8 -translate-x-8"></div>
            <div className="relative z-10">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-2">فلاتر البحث</h3>
                <p className="text-slate-600 dark:text-slate-300">استخدم الفلاتر أدناه للعثور على الاستشارات القانونية المناسبة</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center">
                    <svg className="w-4 h-4 mr-2 rtl:ml-2 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    كلمة البحث
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="ابحث في العناوين والأسئلة والأجوبة..."
                      className="w-full px-4 py-3 pl-10 pr-4 border border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                    />
                    <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center">
                    <svg className="w-4 h-4 mr-2 rtl:ml-2 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    التصنيف
                  </label>
                  <div className="relative">
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-4 py-3 pr-10 border border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 appearance-none"
                    >
                      {categories.map(category => (
                        <option key={category} value={category}>
                          {category === 'all' ? 'جميع التصنيفات' : category}
                        </option>
                      ))}
                    </select>
                    <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end">
            <button
              onClick={handleSearch}
              className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-xl hover:from-emerald-600 hover:to-green-700 transition-all duration-300 font-medium shadow-lg hover:shadow-emerald-500/25 transform hover:scale-105"
            >
                  <div className="flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2 rtl:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    بحث
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Search Results */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-white to-slate-50/30 dark:from-slate-800 dark:to-slate-700/50 rounded-2xl shadow-xl p-6 border border-slate-200/50 dark:border-slate-600/50 mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                  نتائج البحث
                </h2>
                <p className="text-slate-600 dark:text-slate-300">
                  تم العثور على <span className="font-bold text-emerald-600 dark:text-emerald-400">{filteredConsultations.length}</span> استشارة
                </p>
              </div>
              
              {filteredConsultations.length > 0 && (
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full"></div>
                    <span className="text-sm text-slate-600 dark:text-slate-300">نتائج البحث</span>
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">
                    {searchTerm && `البحث عن: "${searchTerm}"`}
                    {selectedCategory !== 'all' && ` • التصنيف: ${selectedCategory}`}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {filteredConsultations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredConsultations.map((consultation, index) => (
                <div
                  key={consultation.id}
                  className="bg-gradient-to-br from-white to-slate-50/30 dark:from-slate-800 dark:to-slate-700/50 rounded-2xl shadow-xl p-6 border border-slate-200/50 dark:border-slate-600/50 hover:shadow-2xl transition-all duration-300 group cursor-pointer transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden"
                  onClick={() => navigate(`/consultation/${consultation.id}`)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-emerald-100/30 to-green-100/30 dark:from-emerald-900/20 dark:to-green-900/20 rounded-full -translate-y-8 translate-x-8"></div>
                  <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-emerald-100/30 to-green-100/30 dark:from-emerald-600/20 dark:to-green-500/20 rounded-full translate-y-6 -translate-x-6"></div>
                  
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
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center ml-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-emerald-100 to-green-100 dark:from-emerald-900/50 dark:to-green-900/50 text-emerald-800 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-700">
                          {consultation.category}
                        </span>
                        <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                          {consultation.created_at}
                        </span>
                      </div>
                      <div className="flex items-center text-emerald-600 dark:text-emerald-400 text-sm font-medium group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors">
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
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-slate-400 dark:text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-600 dark:text-slate-300 mb-2">لا توجد نتائج</h3>
              <p className="text-slate-500 dark:text-slate-400 mb-6">جرب تغيير كلمات البحث أو الفلاتر</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setFilteredConsultations(fakeConsultations);
                }}
                className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-xl hover:from-emerald-600 hover:to-green-700 transition-all duration-300 font-medium shadow-lg"
              >
                إعادة تعيين البحث
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
