import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Lang = 'ja' | 'en';

const T = {
  ja: {
    name: 'お名前',
    namePh: '山田 太郎',
    nameErr: 'お名前をご入力ください',
    company: '会社名',
    companyPh: '株式会社○○（任意）',
    email: 'メールアドレス',
    emailPh: 'example@company.com',
    emailErr: '正しいメールアドレスをご入力ください',
    phone: '電話番号',
    phonePh: '098-XXX-XXXX（任意）',
    service: 'お問い合わせ種別',
    servicePh: '選択してください',
    message: 'お問い合わせ内容',
    messagePh: 'ご要望・ご質問などをご記入ください',
    messageErr: 'お問い合わせ内容をご入力ください',
    submit: '送信する',
    submitting: '送信中...',
    successTitle: 'お問い合わせを受け付けました',
    successBody: '内容を確認の上、担当者より2営業日以内にご連絡いたします。',
    required: '必須',
    optional: '任意',
    services: [
      'コーポレートサイト制作',
      'ECサイト構築（Shopify）',
      'マッチングプラットフォーム開発',
      'アプリ開発',
      'SEO対策・運用保守',
      'その他',
    ],
  },
  en: {
    name: 'Name',
    namePh: 'John Smith',
    nameErr: 'Please enter your name',
    company: 'Company',
    companyPh: 'Acme Corp (optional)',
    email: 'Email',
    emailPh: 'example@company.com',
    emailErr: 'Please enter a valid email address',
    phone: 'Phone',
    phonePh: '+1 555-XXX-XXXX (optional)',
    service: 'Service',
    servicePh: 'Select a service',
    message: 'Message',
    messagePh: 'Tell us about your project or question',
    messageErr: 'Please enter your message',
    submit: 'Send Message',
    submitting: 'Sending...',
    successTitle: 'Message sent!',
    successBody: 'We received your inquiry and will reply within 2 business days.',
    required: 'Required',
    optional: 'Optional',
    services: [
      'Corporate Website',
      'E-Commerce (Shopify)',
      'Matching Platform',
      'App Development',
      'SEO & Maintenance',
      'Other',
    ],
  },
} as const;

function getLang(): Lang {
  if (typeof window === 'undefined') return 'ja';
  return (localStorage.getItem('aozora-lang') as Lang) ?? 'ja';
}

type FormState = 'idle' | 'submitting' | 'success';

interface FieldErrors {
  name?: string;
  email?: string;
  message?: string;
}

// Animation variants
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const fieldVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.52, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const errorVariants = {
  hidden: { opacity: 0, height: 0, marginTop: 0 },
  visible: { opacity: 1, height: 'auto', marginTop: 4, transition: { duration: 0.25 } },
  exit:    { opacity: 0, height: 0, marginTop: 0, transition: { duration: 0.18 } },
};

export default function ContactForm() {
  const [lang, setLang] = useState<Lang>(getLang);
  const t = T[lang];

  useEffect(() => {
    const handler = (e: Event) => setLang((e as CustomEvent<Lang>).detail);
    document.addEventListener('aozora-lang', handler);
    return () => document.removeEventListener('aozora-lang', handler);
  }, []);

  const [state, setState] = useState<FormState>('idle');
  const [errors, setErrors] = useState<FieldErrors>({});

  const nameRef    = useRef<HTMLInputElement>(null);
  const companyRef = useRef<HTMLInputElement>(null);
  const emailRef   = useRef<HTMLInputElement>(null);
  const phoneRef   = useRef<HTMLInputElement>(null);
  const serviceRef = useRef<HTMLSelectElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  function validate(): FieldErrors {
    const errs: FieldErrors = {};
    if (!nameRef.current?.value.trim()) errs.name = t.nameErr;
    if (!emailRef.current?.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailRef.current.value))
      errs.email = t.emailErr;
    if (!messageRef.current?.value.trim()) errs.message = t.messageErr;
    return errs;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setState('submitting');
    await new Promise((r) => setTimeout(r, 900));
    setState('success');
  }

  if (state === 'success') {
    return (
      <motion.div
        initial={{ scale: 0.88, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 180, damping: 18 }}
        className="flex flex-col items-center justify-center gap-6 py-16 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 220, damping: 14, delay: 0.15 }}
          className="h-16 w-16 rounded-full bg-cyan/15 grid place-items-center"
        >
          <svg className="h-8 w-8 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </motion.div>
        <div>
          <h3 className="text-cloud font-bold text-xl mb-2">{t.successTitle}</h3>
          <p className="text-cloud/60 text-sm leading-relaxed max-w-sm">{t.successBody}</p>
        </div>
        <a
          href="/"
          className="inline-flex items-center gap-2 text-cyan text-sm font-medium hover:text-accent transition-colors"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {lang === 'ja' ? 'トップへ戻る' : 'Back to Home'}
        </a>
      </motion.div>
    );
  }

  const inputBase =
    'w-full bg-white/60 border border-accent/30 rounded-sm px-4 py-3 text-cloud text-sm placeholder:text-cloud/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/25 transition-colors duration-200';
  const inputError = 'border-red-400/70 focus:border-red-400 focus:ring-red-400/20';

  return (
    <motion.form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Name + Company */}
      <motion.div variants={fieldVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-cloud/70 text-xs font-semibold mb-1.5 tracking-wide uppercase">
            {t.name}
            <span className="ml-2 text-[10px] font-normal text-cyan normal-case tracking-normal">{t.required}</span>
          </label>
          <input
            ref={nameRef}
            type="text"
            autoComplete="name"
            placeholder={t.namePh}
            className={`${inputBase} ${errors.name ? inputError : ''}`}
            onChange={() => errors.name && setErrors((e) => ({ ...e, name: undefined }))}
          />
          <AnimatePresence>
            {errors.name && (
              <motion.p
                variants={errorVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="text-red-400 text-xs overflow-hidden"
              >
                {errors.name}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <div>
          <label className="block text-cloud/70 text-xs font-semibold mb-1.5 tracking-wide uppercase">
            {t.company}
            <span className="ml-2 text-[10px] font-normal text-cloud/35 normal-case tracking-normal">{t.optional}</span>
          </label>
          <input
            ref={companyRef}
            type="text"
            autoComplete="organization"
            placeholder={t.companyPh}
            className={inputBase}
          />
        </div>
      </motion.div>

      {/* Email + Phone */}
      <motion.div variants={fieldVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-cloud/70 text-xs font-semibold mb-1.5 tracking-wide uppercase">
            {t.email}
            <span className="ml-2 text-[10px] font-normal text-cyan normal-case tracking-normal">{t.required}</span>
          </label>
          <input
            ref={emailRef}
            type="email"
            autoComplete="email"
            placeholder={t.emailPh}
            className={`${inputBase} ${errors.email ? inputError : ''}`}
            onChange={() => errors.email && setErrors((e) => ({ ...e, email: undefined }))}
          />
          <AnimatePresence>
            {errors.email && (
              <motion.p
                variants={errorVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="text-red-400 text-xs overflow-hidden"
              >
                {errors.email}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <div>
          <label className="block text-cloud/70 text-xs font-semibold mb-1.5 tracking-wide uppercase">
            {t.phone}
            <span className="ml-2 text-[10px] font-normal text-cloud/35 normal-case tracking-normal">{t.optional}</span>
          </label>
          <input
            ref={phoneRef}
            type="tel"
            autoComplete="tel"
            placeholder={t.phonePh}
            className={inputBase}
          />
        </div>
      </motion.div>

      {/* Service */}
      <motion.div variants={fieldVariants}>
        <label className="block text-cloud/70 text-xs font-semibold mb-1.5 tracking-wide uppercase">
          {t.service}
          <span className="ml-2 text-[10px] font-normal text-cloud/35 normal-case tracking-normal">{t.optional}</span>
        </label>
        <div className="relative">
          <select
            ref={serviceRef}
            defaultValue=""
            className={`${inputBase} appearance-none pr-10 cursor-pointer`}
          >
            <option value="" disabled className="bg-space text-cloud/50">{t.servicePh}</option>
            {t.services.map((s) => (
              <option key={s} value={s} className="bg-space text-cloud">{s}</option>
            ))}
          </select>
          <svg
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-cloud/40"
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </motion.div>

      {/* Message */}
      <motion.div variants={fieldVariants}>
        <label className="block text-cloud/70 text-xs font-semibold mb-1.5 tracking-wide uppercase">
          {t.message}
          <span className="ml-2 text-[10px] font-normal text-cyan normal-case tracking-normal">{t.required}</span>
        </label>
        <textarea
          ref={messageRef}
          rows={6}
          placeholder={t.messagePh}
          className={`${inputBase} resize-y min-h-[140px] ${errors.message ? inputError : ''}`}
          onChange={() => errors.message && setErrors((e) => ({ ...e, message: undefined }))}
        />
        <AnimatePresence>
          {errors.message && (
            <motion.p
              variants={errorVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="text-red-400 text-xs overflow-hidden"
            >
              {errors.message}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Submit */}
      <motion.div variants={fieldVariants}>
        <motion.button
          type="submit"
          disabled={state === 'submitting'}
          whileHover={state !== 'submitting' ? { scale: 1.02, y: -1 } : {}}
          whileTap={state !== 'submitting' ? { scale: 0.97 } : {}}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-sm bg-azure text-space px-8 py-3.5 text-sm font-semibold disabled:opacity-60 disabled:cursor-not-allowed shadow-[0_2px_14px_rgba(255,198,79,0.35)] hover:shadow-[0_4px_22px_rgba(255,198,79,0.45)] transition-shadow duration-200"
        >
          {state === 'submitting' ? (
            <>
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              {t.submitting}
            </>
          ) : (
            <>
              <svg className="h-4 w-4" viewBox="0 0 43.64 33.21" fill="currentColor">
                <path d="M38.32,0h-33A5.34,5.34,0,0,0,0,5.34V27.88a5.34,5.34,0,0,0,5.34,5.33h33a5.33,5.33,0,0,0,5.33-5.33V5.35A5.33,5.33,0,0,0,38.32,0Zm2.9,27.88a2.9,2.9,0,0,1-2.9,2.9h-33a2.9,2.9,0,0,1-2.9-2.9V5.35a2.9,2.9,0,0,1,2.9-2.9h33a2.9,2.9,0,0,1,2.9,2.9V27.88Z" />
                <path d="M27.53,16.33,38.2,6.75a1.22,1.22,0,1,0-1.63-1.81L21.84,18.15,19,15.59a0,0,0,0,1,0,0l-.2-.17L7.07,4.93A1.22,1.22,0,0,0,5.45,6.75l10.8,9.66L5.49,26.48a1.22,1.22,0,0,0,.84,2.11,1.23,1.23,0,0,0,.83-.32L18.08,18.05l3,2.65a1.2,1.2,0,0,0,.81.3,1.22,1.22,0,0,0,.82-.31l3-2.73L36.57,28.27a1.18,1.18,0,0,0,.83.34,1.22,1.22,0,0,0,.84-2.11Z" />
              </svg>
              {t.submit}
            </>
          )}
        </motion.button>
      </motion.div>
    </motion.form>
  );
}
