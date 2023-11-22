import Image from 'next/image';
function Avatar({ src }) {
    if (src === '') {
        src = '/assets/noavatar.png';
    }
    return (
        <Image
            src={src}
            alt='me'
            width='35'
            height='35'
            className='m-2 rounded-full'
            //   placeholder="blur"
        />
    );
}

export default Avatar;
