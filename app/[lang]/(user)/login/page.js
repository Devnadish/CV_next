import PageContainer from '@/components/shared/pagecontainer/PageContainer';
import React from 'react';

function page() {
    return (
        <PageContainer>
            <div className='relative flex w-full items-center justify-center sm:mx-auto sm:max-w-sm'>
                <BackGround></BackGround>

                <div className='relative rounded-3xl bg-primary-foreground px-4 py-4 shadow-lg sm:rounded-3xl sm:p-4'>
                    <div className='mx-auto max-w-sm'>
                        <div className='mt-3 text-2xl font-semibold'>
                            <h1>Login Please</h1>
                        </div>

                        <div className='divide-y divide-gray-200'>
                            <div className='space-y-4 py-8 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7'>
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
        <div className='transhtmlForm absolute inset-0 -rotate-6 skew-y-0 rounded-3xl bg-gradient-to-r from-green-300 to-green-600 p-4 shadow-lg'></div>
    );
}
