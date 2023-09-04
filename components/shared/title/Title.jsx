"use client"
// import { useTranslation } from 'next-i18next';
function Title({title,icon}) {
  // const { t } = useTranslation('enSection2');
    return (
      <div className="w-auto h-auto p-3 font-cairo overflow-hidden text-sm text-white rounded-lg shadow-xl bg-zinc-800 hover:opacity-90 hover:shadow-lg" >
        {/* <h1>{t('S2L1')}</h1> */}
        <h1>{title}</h1>
        {icon}
      </div>
    );
  }
  export default Title