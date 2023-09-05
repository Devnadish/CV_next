export function Description({ des }) {
  return (
    <div className="flex  w-full flex-col  justify-center p-4 shadow-xl bg-zinc-800">
      <h5 className="font-tajawal text-xs  text-blue-100 text-md line-clamp-2 hover:line-clamp-none">
        {des}
      </h5>
    </div>
  );
}
