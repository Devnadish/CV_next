function Title({ title, flag }) {
    let styleTitle =
        'flex items-center h-full center justify-between w-full  py-2 px-4  transition-all ease duration-500 ';
    switch (flag) {
        case 'subtitle':
            styleTitle = styleTitle + '    hover:scale-95  ';
            break;
        case 'title':
            styleTitle =
                styleTitle + ' bg-primary/20   hover:scale-95 round-,d ';
            break;
    }
    return (
        <div className={styleTitle}>
            <h1 className=' font-tajawal w-fit  text-[.8rem]  capitalize text-accent-foreground  md:text-[1rem]'>
                {title}
            </h1>
            {/* <div>{children}</div> */}
            {/* {icon}
      {withBtn && <Button>more</Button>} */}
        </div>
    );
}
export default Title;
