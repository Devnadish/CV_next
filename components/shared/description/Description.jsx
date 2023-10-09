function Description({ des }) {
  return (
    <div className="flex flex-col justify-center w-full p-4 capitalize ">
      <h5 className="text-accent-foreground font-tajawal text-md line-clamp-2 hover:line-clamp-none">
        {des}
      </h5>
    </div>
  );
}
export default Description;
