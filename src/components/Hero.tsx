import { images, stats } from '../data'
import { ArrowIcon, DownIcon } from './Icons'

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-media" aria-hidden="true">
        <img
          src={images.hero}
          alt=""
          className="hero-photo"
        />
      </div>
      <div className="shell hero-content">
        <p className="eyebrow">
          <span className="rule" />
          Civil construction · Est. 2010
        </p>
        <h1>
          We build the ground
          <br />
          the region <span>runs on.</span>
        </h1>
        <p className="lede">
          Roads, drainage and pavements. Subdivision projects and utility infrastructure.
          Delivered by a local crew who know the soil, the councils and the weather along the Murray.
        </p>
        <div className="hero-actions">
          <a className="btn btn-accent clip" href="#contact">
            Request a quote <ArrowIcon />
          </a>
          <a className="btn btn-ghost" href="#projects">
            See recent work <DownIcon />
          </a>
        </div>
        <dl className="stat-grid">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt>{stat.value}</dt>
              <dd>{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
      <p className="visually-hidden">
        Newly sealed regional road cutting through Victorian grassland at golden hour
      </p>
    </section>
  )
}
