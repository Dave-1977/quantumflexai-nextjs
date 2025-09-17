import Link from 'next/link'

export default function Products() {
  return (
    <section className="section" id="products">
      <div className="container">
        <h2 className="section-title">Our Products</h2>
        <p className="section-subtitle">Innovative solutions transforming industries</p>

        <div className="products-grid">
          {/* PlantReach */}
          <div className="product-card featured">
            <div className="product-icon">🏭</div>
            <h3>PlantReach</h3>
            <p>The ultimate manufacturing communication platform designed for modern factories</p>
            <ul className="product-features">
              <li>Real-time messaging for factory floors</li>
              <li>Advanced shift management & scheduling</li>
              <li>Multi-tenant SaaS architecture</li>
              <li>Enterprise-grade security & compliance</li>
              <li>AI-powered production analytics</li>
              <li>Mobile app for floor workers</li>
            </ul>
            <span className="product-status active">In Development</span>
            <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
              <Link href="#contact" className="btn btn-primary" style={{ width: '100%' }}>
                Request Demo
              </Link>
            </div>
          </div>

          {/* Humanoids */}
          <div className="product-card">
            <div className="product-icon">🤖</div>
            <h3>Quantum Humanoids</h3>
            <p>Next-generation AI-powered humanoid robots for industrial automation</p>
            <ul className="product-features">
              <li>Advanced AI decision making</li>
              <li>Human-robot collaboration</li>
              <li>24/7 autonomous operation</li>
              <li>Safety-first design</li>
              <li>Real-time learning capabilities</li>
              <li>Integration with PlantReach</li>
            </ul>
            <span className="product-status coming-soon">Coming Soon 2026</span>
            <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}