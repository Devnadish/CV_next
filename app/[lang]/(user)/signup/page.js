// "use client";
import PageContainer from '@/components/shared/pagecontainer/PageContainer';
import React from 'react';

function UserPassword() {
    return (
        <div className='relative'>
            <input
                autoComplete='off'
                id='password'
                name='password'
                type='password'
                className='focus:borer-rose-600 peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none'
                placeholder='Password'
            />
            <label
                htmlFor='password'
                className='peer-placeholder-shown:text-gray-440 absolute -top-3.5 left-0 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600'
            >
                Password
            </label>
        </div>
    );
}

function page() {
    return (
        <PageContainer>
            <div className='relative w-auto p-4 sm:mx-auto sm:max-w-sm'>
                <BackGround />

                <div className='relative mt-4 rounded-3xl bg-primary-foreground p-4 shadow-lg '>
                    <div className='mx-auto'>
                        <div>
                            <h1 className='flex items-center justify-center text-2xl font-semibold'>
                                SingUp Please
                            </h1>
                        </div>
                        <div className='divide-y divide-gray-200'>
                            <div className='space-y-4 py-3 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7'>
                                <Username></Username>
                                <UserEmail></UserEmail>
                                <UserPassword></UserPassword>
                                <div className='relative'>
                                    <button className='rounded-md bg-blue-500 px-2 py-1  text-foreground'>
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageContainer>
    );
}

export default page;

function BackGround() {
    return (
        <div className='absolute inset-0 mt-4 -rotate-6 skew-y-0 transform rounded-3xl bg-gradient-to-r from-blue-300 to-blue-600 p-4 shadow-lg'></div>
    );
}

function Username() {
    return (
        <div className='relative'>
            <input
                autoComplete='off'
                id='username'
                name='username'
                type='text'
                className='focus:borer-rose-600 peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none'
                placeholder='username'
            />
            <label
                htmlFor='username'
                className='peer-placeholder-shown:text-gray-440 absolute -top-3.5 left-0 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600'
            >
                Name
            </label>
        </div>
    );
}

function UserEmail() {
    return (
        <div className='relative'>
            <input
                autoComplete='off'
                id='email'
                name='email'
                type='text'
                className='focus:borer-rose-600 peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none'
                placeholder='Email address'
            />
            <label
                htmlFor='email'
                className='peer-placeholder-shown:text-gray-440 absolute -top-3.5 left-0 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600'
            >
                Email Address
            </label>
        </div>
    );
}
