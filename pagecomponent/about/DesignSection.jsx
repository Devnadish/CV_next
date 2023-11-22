import { FaPalette } from '@react-icons/all-files/fa/FaPalette';
import Title from '@/components/shared/title/Title';
import { getDictionary } from '@/lib/dictionary';
import { sectionStyle } from '@/styles/homeSectionStyle';
import { design } from './utl';
import SkillBox from '@/pagecomponent/about/SkillBox';

async function DesignSection({ lang }) {
    const {
        page: {
            about: { skills },
        },
    } = await getDictionary(lang);
    const baseUrl = '/assets/about/';
    const data = design();
    return (
        <>
            <div className={sectionStyle}>
                <Title
                    title={skills.desigtitle}
                    icon={<FaPalette className='text-3xl text-orange-600' />}
                />
                <div className='grid grid-cols-2 place-items-center gap-6 md:grid-cols-4'>
                    {data.data.map((skill) => {
                        return (
                            <SkillBox
                                key={skill.id}
                                imgz={baseUrl + skill.imgx}
                                txt={skill.pres}
                                colorx={['bg-orange-600']}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default DesignSection;
