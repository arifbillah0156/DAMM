import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import 'swiper/css';          // Required for Swiper default styles
import 'swiper/css/navigation'; // If using navigation buttons

export const metadata = {
  title: "DAMM",
  description:
    "Darul Azhar Model Madrasah",
  // icons: "/Images/Studio Architect.jpeg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-gray-900 merriweather-regular noto-sans-bengali-damm">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
