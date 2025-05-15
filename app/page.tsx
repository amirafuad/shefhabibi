import Image from "next/image"
import "./globals.css"



export const metadata = {
  title: "Shef Habibi - Coming Soon",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Home() {
  return (
      <div className="page-wrapper">
        {/* Main content */}
        <div className="container">
          <div className="logoSection">
            <Image src="/logo.png" alt="Shef Habibi Logo" width={458} height={324} priority className="logo" />
            <p className="subtitle">
              Like our kabsa, it takes time to perfect. Our website is coming soon!
            </p>
          </div>

          <div className="contact">
            <div className="wa-inline"> 
              <a href="https://wa.me/6281212571218" target="_blank" rel="noopener noreferrer" className="whatsapp">
                Tap to pre-order via WhatsApp at 0812 1257 1218
              </a>
            </div>
          </div>

          <div className="socials">
            <a href="https://www.instagram.com/shefhabibi" target="_blank" rel="noopener noreferrer">
              <Image src="/instagram.png" alt="Instagram" width={30} height={30} />
            </a>
            <a href="https://www.facebook.com/ShefHabibi" target="_blank" rel="noopener noreferrer">
              <Image src="/facebook.png" alt="Facebook" width={30} height={30} />
            </a>
            <a href="https://www.tiktok.com/@shefhabibi" target="_blank" rel="noopener noreferrer">
              <Image src="/tiktok.png" alt="TikTok" width={30} height={30} />
            </a>
          </div>
        </div>

        {/* ✅ Footer moved outside container */}
        <footer className="footer">
          © {new Date().getFullYear()} Shef Habibi. All rights reserved.
        </footer>
      </div>
    
  )
}
