'use client';
import { useState, useEffect } from 'react';

export default function InternetStatus() {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        const checkOnlineStatus = () => {
            setIsOnline(navigator.onLine);
        };

        const intervalId = setInterval(checkOnlineStatus, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    if (!isOnline) {
        return (
            <div className='flex h-screen w-full items-start justify-center'>
                <div className='w-full rounded bg-destructive px-4 py-2 text-center  text-foreground'>
                    <h1 className='text-2xl'>
                        You are offline. Please check your internet
                        connectivity.
                    </h1>
                </div>
            </div>
        );
    }

    return (
        <div>
            <h1>Welcome Back!</h1>
        </div>
    );
}

// import { useEffect, useState } from 'react';
// import axios from 'axios';

// export default function InternetStatus({ isOnlineError, setIsOnlineError }) {
//     const [isOnline, setIsOnline] = useState(true);

//     useEffect(() => {
//         const checkInternet = async () => {
//             try {
//                 // await axios.get('https://www.google.com')
//                 await axios.get('https://www.googleapis.com'); // replace with a reliable server
//                 setIsOnline(true);
//             } catch (error) {
//                 setIsOnline(false);
//             }
//         };

//         checkInternet();

//         const intervalId = setInterval(checkInternet, 5000); // check every 5 seconds

//         return () => {
//             clearInterval(intervalId);
//         };
//     }, []);

//     if (!isOnline) {
//         return (
//             <div className='flex h-screen w-full  items-start justify-center'>
//                 <div className='w-full rounded bg-destructive px-4 py-2 text-center   text-foreground'>
//                     <h1 className='text-2xl'>
//                         You are offline check You Inteenet connectivity Pleas...
//                     </h1>
//                     {/* {setIsOnlineError(false)} */}
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div>
//             <h1>Welcome Back..!</h1>
//         </div>
//     );
// }
