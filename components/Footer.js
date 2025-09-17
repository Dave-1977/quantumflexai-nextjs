import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="logo-wrapper" style={{ justifyContent: 'center', marginBottom: '2rem' }}>
            <Image src="/logo.png" alt="Quantum Flex AI Logo" width={60} height={60} />
            <span className="logo-text" style={{ fontSize: '1.8rem' }}>QUANTUM FLEX AI</span>
          </div>

          <div className="footer-links">
            <Link href="#products">Products</Link>
            <Link href="#services">Services</Link>
            <Link href="#contact">Contact</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2025 Quantum Flex AI. All rights reserved. | Calgary, Alberta, Canada 🇨🇦</p>
          </div>
        </div>
      </div>
    </footer>
  )
}