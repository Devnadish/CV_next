function PageContainer({ children }) {
    return (
        <main
            id='pagecontainer'
            className='m-auto flex h-full  w-[97%] flex-col items-center justify-start gap-4  overflow-auto bg-accent '
        >
            {children}
        </main>
    );
}

export default PageContainer;
