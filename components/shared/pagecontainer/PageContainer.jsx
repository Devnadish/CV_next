function PageContainer({ children }) {
    return (
        //     <main
        //         id='pagecontainer'
        //         className='relative flex h-full w-full
        //    flex-col items-center justify-start
        //     gap-4  overflow-auto bg-muted  px-8 '
        //     >
        //         {children}
        //     </main>
        <main
            id='pagecontainer'
            className='flex h-full w-full flex-col items-center justify-start gap-4 overflow-auto bg-muted px-8'
        >
            {children}
        </main>
    );
}

export default PageContainer;
