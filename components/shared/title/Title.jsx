"use client"
// import { useTranslation } from 'next-i18next';
import Btn from "@/components/shared/btn/Btn";
function Title({title,icon,withBtn=false}) {
  // const { t } = useTranslation('enSection2');
    return (
      <div className="w-full items-center justify-between flex h-auto p-3 font-tajawal font-semibold overflow-hidden text-sm text-white rounded-lg shadow-xl bg-zinc-800 hover:opacity-90 hover:shadow-lg" >
        {/* <h1>{t('S2L1')}</h1> */}
        <h1 className="font-tajawal">{title}</h1>
        {icon}
        {withBtn && <Btn>more</Btn>}
      </div>
    );
  }
  export default Title