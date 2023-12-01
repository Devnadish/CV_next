import ShowHint from '@/components/shared/hint/ShowHint';
import React from 'react';
import { PageContainer } from '../about/export';
import {
    TabletSmartphone,
    Layout,
    Smile,
    Palette,
    Figma,
    Paintbrush2,
} from 'lucide-react';

const services = [
    {
        id: 1,
        icon: <Smile size={50} className='text-yellow-400' />,
        txt: 'At [Your Business Name], we specialize in creating captivating website introductions that leave a lasting impression. Our expert team combines creative storytelling with cutting-edge design to craft engaging and memorable intros. We also offer comprehensive consultation services to optimize your web presence. Let us help you make a powerful impact and achieve online success.',
        link: '',
        title: 'Consultation Services',
    },
    {
        id: 2,
        icon: <TabletSmartphone size={50} className='text-gray-400' />,
        txt: 'As a mobile app developer, I leverage my expertise in both iOS and Android platforms to build high-performance  nd feature-rich mobile applications. From concept to deployment, I ensure seamless functionality, elegant design, and ntuitive user interfaces that captivate users. Whether its a cross-platform solution, I use the latest technologies and industry best practices to create engaging mobile experiences.',
        link: '',
        title: 'Mobile App Development:',
    },
    {
        id: 3,
        icon: <Layout size={50} className='text-green-400' />,
        txt: 'With my skills in web app development, I craft robust and scalable solutions that empower businesses to thrive in the digital landscape. Using cutting-edge technologies like HTML5, CSS3, and JavaScript frameworks, I create dynamic and responsive web applications that deliver exceptional performance across devices. From e-commerce platforms to enterprise solutions, I tailor each web app to meet specific business requirements and ensure a seamless user experience.',
        link: '',
        title: 'Web App Development:',
    },
    {
        id: 5,
        icon: <Paintbrush2 size={50} className='text-blue-400' />,
        txt: 'As a web designer, I combine creativity and technical expertise to design visually stunning and user-friendly websites. By understanding client goals and target audience, I create captivating layouts, choose appealing color schemes, and optimize user flow for optimal engagement. With a focus on responsive design and intuitive navigation, I ensure that websites are accessible across devices and provide an immersive browsing experience.',
        link: '',
        title: 'Web Designing:',
    },
    {
        id: 7,
        icon: <Figma size={50} className='text-red-400' />,
        txt: 'UI/UX plays a crucial role in delivering exceptional digital experiences. With my expertise in UI/UX design principles and user-centered design approach, I create interfaces that are both aesthetically pleasing and highly functional. By conducting thorough user research, prototyping, and usability testing, I ensure that every interaction is intuitive and delightful for users. My goal is to enhance user satisfaction and drive engagement through seamless and visually appealing interfaces.',
        link: '',
        title: 'UI/UX Design:',
    },
    {
        id: 8,
        icon: <Palette size={50} className='text-orange-800' />,
        txt: 'At [Your Business Name], we specialize in creating visually stunning and user-centric UI designs that enhance your digital presence. Our team combines creativity and expertise to craft interfaces that captivate and engage users. We also offer comprehensive visual identity solutions to establish a strong and consistent brand image. From logos to color schemes, we help create a memorable and impactful brand presence.',
        link: '',
        title: 'Visual Identity',
    },
];

function page() {
    return (
        <PageContainer>
            <p>
                Unleash Your Online Potential: Our Services for Digital Success
            </p>
            <div className='mx-auto mt-8  grid w-full grid-cols-1 place-items-center gap-4 p-4  md:grid-cols-2 lg:grid-cols-3'>
                {services.map((service) => {
                    return (
                        <div key={service.id}>
                            <ShowHint
                                icon={service.icon}
                                txt={service.txt}
                                link={service.link}
                                title={service.title}
                            />
                        </div>
                    );
                })}
            </div>
        </PageContainer>
    );
}

export default page;
