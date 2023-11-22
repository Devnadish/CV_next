export function Spinner({ page }) {
    return (
        <div className='flex items-center gap-4'>
            Loading page ... {page}
            <div
                className='inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-foreground/20  motion-reduce:animate-[spin_1.5s_linear_infinite]'
                role='status'
            >
                <span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 text-foreground ![clip:rect(0,0,0,0)]'>
                    Loading... {page}
                </span>
            </div>
        </div>
    );
}
