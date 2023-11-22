import { countLanguage } from './helper';

function Infomation(props) {
    return (
        <div className='mx-auto flex h-8 w-full items-center justify-evenly'>
            <p className='text-md flex-grow bg-blue-600 px-4 text-white'>
                Blogs : {props.posts.length}
            </p>
            <p className='text-md flex-grow bg-blue-600 px-4 text-white'>
                English Blogs : {countLanguage(props.posts, 'en')}
            </p>
            <p className='text-md flex-grow bg-blue-600 px-4 text-white'>
                Arabic Blogs : {countLanguage(props.posts, 'ar')}
            </p>
        </div>
    );
}
export default Infomation;
