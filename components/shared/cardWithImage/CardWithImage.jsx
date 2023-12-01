import Image from 'next/image';
import { CardLink } from './CardLink';
import Description from '@/components/shared/description/Description';
import Title from '@/components/shared/title/Title';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
const CardWithImage = ({
    imageUrl,
    title = '',
    des = 'test',
    link = null,
    lang = 'ar',
}) => {
    return (
        <>
            <Card className='items-cener mx-auto flex min-h-[200px] min-w-[250px] max-w-[100%]    flex-col   justify-between overflow-hidden bg-card '>
                <CardHeader className='border-b border-r-primary bg-primary/40 p-2'>
                    <CardTitle className='flex w-full items-center justify-between '>
                        <Title title={title} flag='subtitle' />
                        {link !== null ? (
                            <CardLink searchPath={title} lang={lang} />
                        ) : null}
                    </CardTitle>
                </CardHeader>

                <CardContent className='p-0'>
                    <Image
                        src={imageUrl}
                        alt={title}
                        width={1200}
                        height={550}
                        style={{
                            maxWidth: '100%',
                            height: 'auto',
                            margin: 'auto',
                        }}
                        sizes='calc(100vw - 114px)'
                    />
                </CardContent>
                <Separator />
                <CardFooter className='py-2'>
                    <Description des={des} />
                </CardFooter>
            </Card>
        </>
    );
};
export default CardWithImage;
