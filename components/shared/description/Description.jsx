function Description({ des }) {
    return (
        <div className='flex w-full flex-col justify-center p-4 capitalize transition-all duration-300 '>
            <h5 className='font-tajawal text-md  line-clamp-2 text-accent-foreground transition-all duration-5000 hover:line-clamp-none'>
                {des}
            </h5>
        </div>
    );
}
export default Description;
