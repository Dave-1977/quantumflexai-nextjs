'use client'
import Link from 'next/link'

export default function Hero() {
  const openSupportBot = () => {
    const botWindow = document.getElementById('botWindow')
    const botButton = document.getElementById('botButton')
    
    if (botWindow && !botWindow.classList.contains('active')) {
      botWindow.classList.add('active')
      if (botButton) botButton.textContent = '✕'
      const input = document.getElementById('botInput')
      if (input) input.focus()
    }
  }

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <h1>QUANTUM FLEX AI</h1>
          <p className="tagline">Revolutionizing Manufacturing with PlantReach & Next-Gen AI Solutions</p>
          <div className="cta-group">
            <Link href="#products" className="btn btn-primary">Explore PlantReach</Link>
            <button className="btn btn-secondary" onClick={openSupportBot}>Get Support</button>
          </div>
        </div>
      </div>
    </section>
  )
}