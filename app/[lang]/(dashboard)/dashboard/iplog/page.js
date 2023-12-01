import {
    getAllIp,
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
    ChevronsUpDown,
} from './export';
async function page() {
    const ips = await getAllIp();

    return (
        <div className='mt-4 text-center'>
            <p className='ml-4'>{`vistor Count =  ${ips.length}`}</p>
            <div className='m-auto mt-10 flex w-full flex-col flex-wrap items-center justify-between gap-4 p-4 md:flex-row'>
                {ips.map((ip) => {
                    return (
                        <div
                            className='flex flex-col   rounded-md bg-primary '
                            key={ip.id}
                        >
                            <DataShow ip={ip} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default page;

const DataShow = ({ ip }) => {
    return (
        <>
            <Collapsible>
                <CollapsibleTrigger>
                    <div className='flex  min-w-[300px] items-center justify-between gap-4'>
                        <ChevronsUpDown className='h-4 w-4' />
                        <p>{ip.country} </p>
                        <p> {ip.ip}</p>
                        <p className=' w-10 bg-destructive p-1'>{ip.counter}</p>
                    </div>
                </CollapsibleTrigger>
                <CollapsibleContent>
                    <p>{ip.city}</p>
                    <p>{ip.region}</p>
                    <p>{ip.loc}</p>
                    <p>{ip.org}</p>
                    <p>{ip.timezone}</p>
                </CollapsibleContent>
            </Collapsible>
        </>
    );
};
