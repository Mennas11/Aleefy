
import './Stats.css'

const benefits = [
  {
    icon: 'fa-solid fa-paw',
    title: 'Made for Pets',
    description: 'Products selected with furry friends in mind.',
    color: '#f8c4c7',
  },
  {
    icon: 'fa-solid fa-heart',
    title: 'Picked with Love',
    description: 'Little things that make pets happier.',
    color: '#ffe39b',
  },
  {
    icon: 'fa-solid fa-basket-shopping',
    title: 'Everyday Essentials',
    description: 'Find their favorites all in one place.',
    color: '#c9e4f2',
  },
  {
    icon: 'fa-solid fa-star',
    title: 'For Every Paw',
    description: 'Because every pet deserves a little joy.',
    color: '#dce2c4',
  },
]

function Stats() {
  return (
    <section className="benefits-section">
      <div className="benefits-grid">
        {benefits.map((benefit) => (
          <div className="benefit-item" key={benefit.title}>
            <div
              className="benefit-icon"
              style={{ backgroundColor: benefit.color }}
            >
              <i className={benefit.icon}></i>
            </div>

            <div className="benefit-content">
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats
