// 'use client';
import { Roboto } from "next/font/google";
import { Lateef } from "next/font/google";
import { Cairo } from "next/font/google";
import { Tajawal } from "next/font/google";


export const roboto = Roboto({
    weight: ["400", "700"],
    style: ["normal", "italic"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-roboto-mono",
    fallback: ["system-ui", "arial"],
  });
  export const lateef = Lateef({
    weight: ["400", "700"],
    style: ["normal"],
    subsets: ["arabic"],
    display: "swap",
    variable: "--font-lateef",
    fallback: ["system-ui", "arial"],
  });
  export const cairo = Cairo({
    weight: ["400", "700"],
    style: ["normal"],
    subsets: ["arabic"],
    display: 'swap', adjustFontFallback: false,
    variable: "--font-cairo",
    fallback: ["system-ui", "arial"],
  });
  export const tajawal = Tajawal({
    weight: ["400", "700"],
    style: ["normal"],
    subsets: ["arabic"],
    display: 'swap', adjustFontFallback: false,
    variable: "--font-tajawal",
    fallback: ["system-ui", "arial"],
  });





import { Inter } from 'next/font/google';
import { useServerInsertedHTML } from 'next/navigation';

const heading = Inter({
  subsets: ['latin'],
  variable: '--font-family-heading',
  fallback: ['--font-family-sans'],
  weight: ['400', '500'],
  display: 'swap',
});

// export default function Fonts() {
//   useServerInsertedHTML(() => {
//     return (
//       <style
//         dangerouslySetInnerHTML={{
//           __html: `
//           :root {
//             --font-family-sans: '-apple-system', 'BlinkMacSystemFont',
//               ${sans.style.fontFamily}, 'system-ui', 'Segoe UI', 'Roboto',
//               'Ubuntu', 'sans-serif';

//             --font-family-heading: ${heading.style.fontFamily};
//           }
//         `,
//         }}
//       />
//     );
//   });

//   return null;
// }