

import PageContainer from "@/components/pagecontainer/PageContainer";
// import INPUT from "@/components/shared/input/INPUT";
import { enLang } from "@/locales/en/translation";



function page(  props  ) {
  return (
    <PageContainer>
      <SlugHeader title={props.params.slug} />
      <SlugBody title={props.searchParams.info}/>
      {/* <MailMeMore /> */}
    </PageContainer>
  );
}

export default page;

const SlugHeader = ({title}) => {
  return (
    <>
      <div className="flex items-center justify-center w-1/3 p-4 text-3xl text-white capitalize rounded-md shadow-xl bg-slate-800">
      {title}
      </div>
    </>
  );
};
const SlugBody = ({title}) => {
  return (
    <>
      <div className="flex items-center justify-center w-1/2 p-4 text-white capitalize rounded-md shadow-xl h-fit bg-slate-800 ">
      {title}
      </div>
    </>
  );
};
// const MailMeMore = () => {
//   return (
//     <>
//       <div className="flex items-center justify-center w-1/3 p-4 rounded-md shadow-xl bg-slate-800">
//         <INPUT
//           title={enLang.moreMAiltitle}
//           moreMAilbtn={enLang.moreMAilbtn}
//           moreMAilemail={enLang.moreMAilemail}
//           moreMAilplaceholder={enLang.moreMAilplaceholder}
//         />
//       </div>
//     </>
//   );
// };
