// import { Price } from "./Price";
// import { Facility } from "./Facility";
// import { Category } from "./Category";
import { FcApproval } from '@react-icons/all-files/fc/FcApproval';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { FaShoppingBasket } from '@react-icons/all-files/fa/FaShoppingBasket';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
    CardDescription,
} from '@/components/ui/card';

export const Package = ({
    category = '',
    price = '',
    facility = '',
    cur = '',
    recommend = false,
    subtitle,
    hint = 'Recommended',
}) => {
    return (
        <>
            <div className='font-tajawal   destructive relative      mt-6  w-full  '>
                <Plane
                    category={category}
                    facility={facility}
                    price={price}
                    cur={cur}
                    recommend={recommend}
                    subtitle={subtitle}
                    hint={hint}
                />
            </div>
        </>
    );
};

const Plane = ({
    category,
    facility,
    price,
    cur,
    recommend,
    subtitle,
    hint,
}) => {
    return (
        <>
            <Card className='flex min-h-[420px]  flex-col justify-between'>
                <CardHeader className='p-2'>
                    {recommend && (
                        <div className='absolute  left-2 top-0 z-50 flex -translate-y-1/2 items-center justify-between gap-4 rounded-full bg-orange-500 px-3 py-2  text-sm font-semibold tracking-wider  text-foreground shadow-md '>
                            <p>{hint}</p>
                            <FcApproval className='h-6 w-6' />
                        </div>
                    )}
                    <CardTitle className=' px-4 py-2'>{category}</CardTitle>
                    <CardDescription className='text-sm text-card-foreground/80 '>
                        {subtitle}
                    </CardDescription>
                </CardHeader>
                <Separator className='h-1' />
                <CardContent className='mt-4 items-center justify-start  text-sm font-light'>
                    {facility?.map((el) => {
                        return (
                            <div
                                className='flex w-full items-center gap-4 px-2'
                                key={el.id}
                            >
                                <FcApproval />
                                <p>{el.title}</p>
                            </div>
                        );
                    })}
                </CardContent>

                <CardFooter className='flex w-full flex-col items-center justify-evenly  px-2 py-2 '>
                    <Separator className='h-1' />

                    <div className='flex w-full items-center justify-evenly  px-2 py-2 '>
                        <OrderNow />
                        <h1 className='px-2 text-center text-[2rem] font-extrabold '>
                            {price}
                            <span className='px-2 text-sm '>{cur}</span>
                        </h1>
                    </div>
                </CardFooter>
            </Card>
        </>
    );
};
const OrderNow = () => {
    return (
        <>
            <Button
                type='button'
                variant='secondary'
                className='flex items-center justify-between gap-4'
            >
                <FaShoppingBasket className='text-xl' />
                <span>Order Now</span>
            </Button>
        </>
    );
};
