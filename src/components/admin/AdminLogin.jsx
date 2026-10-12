import React, { useState } from 'react';
import { clubService, isLiveFirebase } from '../../firebase';
import { CLUB_CONFIG } from '../../config/clubConfig';
import { 
  Lock, 
  Mail, 
  KeyRound, 
  AlertCircle, 
  Loader2, 
  ShieldCheck, 
  ArrowRight,
  Eye,
  EyeOff
} from 'lucide-react';

export default function AdminLogin({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!email.trim() || !password.trim()) {
      setErrorMessage('يرجى إدخال البريد الإلكتروني وكلمة المرور.');
      return;
    }

    try {
      setIsLoading(true);
      const user = await clubService.adminLogin(email.trim(), password);
      setIsLoading(false);
      onLoginSuccess(user);
    } catch (err) {
      setIsLoading(false);
      setErrorMessage(err.message || 'فشل تسجيل الدخول. يرجى التحقق من صحة البيانات.');
    }
  };

  const handleQuickDemoFill = () => {
    setEmail('admin@sticlub.dz');
    setPassword('admin123456');
    setErrorMessage('');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        
        {/* Back Link */}
        <div className="mb-5 flex justify-between items-center text-xs">
          <a
            href="#/"
            className="inline-flex items-center gap-1.5 text-slate-500 hover:text-slate-900 transition-colors"
          >
            <ArrowRight className="w-4 h-4" />
            <span>العودة للموقع العام</span>
          </a>

          <div className="inline-flex items-center gap-1.5 text-slate-500">
            <span className={`w-2 h-2 rounded-full ${isLiveFirebase ? 'bg-emerald-500' : 'bg-[#0072B1]'}`}></span>
            <span>{isLiveFirebase ? 'Firebase متصل' : 'وضع التجربة المحلي'}</span>
          </div>
        </div>

        {/* Login Box */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 text-right shadow-sm">
          
          <div className="text-center mb-6">
            <div className="w-14 h-14 mx-auto rounded-xl bg-slate-50 border border-slate-200 p-1 mb-3 shadow-xs">
              <img
                src={CLUB_CONFIG.images.clubLogo}
                alt={CLUB_CONFIG.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-50 text-[#0072B1] text-[10px] font-bold mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>البوابة الإدارية الخاصة</span>
            </span>

            <h1 className="text-xl font-bold text-slate-900">
              تسجيل دخول الأدمن
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              إدارة أعضاء ودورات نادي الإبداع والابتكار
            </p>
          </div>

          {errorMessage && (
            <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
              <span>{errorMessage}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                اسم المستخدم أو البريد الإلكتروني
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder=""
                  required
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0072B1] text-left dir-ltr pl-3 pr-9"
                />
                <Mail className="w-4 h-4 text-slate-400 absolute top-3 right-3 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                كلمة المرور
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder=""
                  required
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0072B1] text-left dir-ltr pl-9 pr-9"
                />
                <Lock className="w-4 h-4 text-slate-400 absolute top-3 right-3 pointer-events-none" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-3 left-3 text-slate-400 hover:text-slate-700"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="pt-1">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#0072B1] hover:bg-[#005a8e] text-white py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 disabled:opacity-50 transition-colors shadow-xs"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>جاري تسجيل الدخول...</span>
                  </>
                ) : (
                  <>
                    <KeyRound className="w-4 h-4" />
                    <span>الدخول للوحة التحكم</span>
                  </>
                )}
              </button>
            </div>
          </form>



        </div>

      </div>
    </div>
  );
}
