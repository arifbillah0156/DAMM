import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import 'swiper/css';
import 'swiper/css/navigation';
import ElectricCursor from "@/components/Others/ElectricCursor";


export const metadata = {
  title: "Darul Azhar Model Madrasah (Main Campus)",
  description: "Darul Azhar Model Madrasah (DAMM), An ideal Islamic educational institution focused on modern and religious education.",
  keywords: [
    "Darul Azhar",
    "Model Madrasah",
    "Islamic School",
    "Bangladesh Madrasah",
    "DAMM",
    "Education",
    "Main Campus"
  ],
  authors: [{ name: "Darul Azhar", url: "https://www.darulazharbd.com/" }],
  creator: "Darul Azhar",
  publisher: "Darul Azhar Model Madrasah",
  metadataBase: new URL("https://www.darulazharbd.com/"),
  openGraph: {
    title: "Darul Azhar Model Madrasah",
    description: "A modern Islamic institution combining traditional and contemporary education.",
    url: "https://www.darulazharbd.com/",
    siteName: "Darul Azhar Model Madrasah",
    images: [
      {
        url: "/Images/DAMM Logo.png",
        width: 1200,
        height: 630,
        alt: "Darul Azhar Model Madrasah",
      },
    ],
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-adsense-account" content="ca-pub-9013512537152543"></meta>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          rel="stylesheet"
        />
        {/* Google AdSense Script */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9013512537152543"
          crossorigin="anonymous"></script>
      </head>
      <body className="bg-white text-gray-900 merriweather-regular noto-sans-bengali-damm">
        <Navbar />
        <ElectricCursor />
        {children}
        <Footer />
      </body>
    </html>
  );
}