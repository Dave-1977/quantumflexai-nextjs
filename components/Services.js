export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">Expert solutions tailored to your needs</p>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">💻</div>
            <h3>Custom Software Development</h3>
            <p>Tailored software solutions built from the ground up to meet your unique business requirements. From web applications to enterprise systems.</p>
          </div>

          <div className="service-card">
            <div className="service-icon">🤖</div>
            <h3>AI & Machine Learning</h3>
            <p>Harness the power of artificial intelligence to automate processes, gain insights, and stay ahead of the competition with cutting-edge ML solutions.</p>
          </div>
        </div>
      </div>
    </section>
  )
}