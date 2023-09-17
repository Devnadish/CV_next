export default function Description({ des }) {
    return (
      <div className="flex flex-col justify-center w-full p-4 shadow-xl">
        <h5 className="font-tajawal text-black/80 dark:text-blue-100 text-md ">
          {des}
        </h5>
      </div>
    );
  }
