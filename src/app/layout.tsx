import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./assets/scss/tailwind.scss";
import "./assets/css/material.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "EarnEZ - Turn Your Phone Into a Passive Income Generator",
  description:
    "Turn your Android phone into an automatic income stream with EarnEZ. Earn €0.01-0.03 per SMS test message. No effort required, fast payouts, and complete privacy protection.",
  icons: {
    icon: "./favicon.ico", // or './icon.ico'
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" dir="ltr">
      <body
        className={` ${manrope.variable} font-manrope text-base text-slate-900 dark:text-white dark:bg-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}

// import type { Metadata } from "next";
// import { Manrope } from "next/font/google";
// import "./assets/scss/tailwind.scss";
// import "./assets/css/material.css";

// const manrope = Manrope({
//   subsets: ["latin"],
//   variable: "--font-manrope",
// });

// export const metadata: Metadata = {
//   title: "EarnEZ - Turn Your Phone Into a Passive Income Generator",
//   description:
//     "Turn your Android phone into an automatic income stream with EarnEZ. Earn €0.01-0.03 per SMS test message. No effort required, fast payouts, and complete privacy protection.",
//   icons: {
//     icon: [
//       { url: "/favicon.ico" },
//       { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
//       { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
//     ],
//     apple: [{ url: "/apple-touch-icon.png" }],
//   },
//   manifest: "/site.webmanifest",
//   themeColor: "#1C1C28", // Your dark background color from the docs
//   viewport: {
//     width: "device-width",
//     initialScale: 1,
//     maximumScale: 1,
//   },
//   robots: {
//     index: true,
//     follow: true,
//   },
//   openGraph: {
//     title: "EarnEZ - Turn Your Phone Into a Passive Income Generator",
//     description:
//       "Turn your Android phone into an automatic income stream with EarnEZ. Earn €0.01-0.03 per SMS test message. No effort required, fast payouts, and complete privacy protection.",
//     type: "website",
//     siteName: "EarnEZ",
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" className="dark scroll-smooth" dir="ltr">
//       <body
//         className={`${manrope.variable} font-manrope text-base text-slate-900 dark:text-white dark:bg-slate-900`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }
