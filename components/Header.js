'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark'
    setTheme(savedTheme)
    document.documentElement.className = savedTheme === 'light' ? 'light-mode' : ''
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.className = newTheme === 'light' ? 'light-mode' : ''
  }

  return (
    <header>
      <nav className="container">
        <Link href="#home" className="logo-wrapper">
          <Image src="/logo.png" alt="Quantum Flex AI Logo" width={45} height={45} />
          <span className="logo-text">QUANTUM FLEX AI</span>
        </Link>

        <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <li><Link href="#home">Home</Link></li>
          <li><Link href="#products">Products</Link></li>
          <li><Link href="#services">Services</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>

        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggleTheme} title="Toggle theme">
            <span>{theme === 'dark' ? '🌙' : '☀️'}</span>
          </button>
          <button 
            className="mobile-menu-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  )
}