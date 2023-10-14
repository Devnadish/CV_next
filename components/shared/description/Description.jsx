"";

function Description({ des }) {
  return (
    <div className="flex flex-col justify-center w-full transition-all duration-300 p-4 capitalize ">
      <h5 className="text-accent-foreground font-tajawal  transition-all duration-5000 text-md line-clamp-2 hover:line-clamp-none">
        {des}
      </h5>
      {/* <input type="checkbox" /> */}
    </div>
  );
}
export default Description;

// function Description({ des }) {
//   return (
//     <div className="flex flex-col justify-center w-full transition-all duration-300 p-4 capitalize ">
//       <h5 className="text-accent-foreground font-tajawal  transition-all duration-5000 text-md line-clamp-2 hover:line-clamp-none">
//         {des}
//       </h5>
//     </div>
//   );
// }
// export default Description;
