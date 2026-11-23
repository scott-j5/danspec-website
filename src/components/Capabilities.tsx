import { disciplines, plantList } from '../data'
import { ArrowIcon } from './Icons'

export function Capabilities() {
  return (
    <section className="section" id="capabilities">
      <div className="shell">
        <div className="section-head split">
          <div>
            <SectionKicker index="01" label="Capabilities" />
            <h2>
              Multiple disciplines,
              <br />
              one standard of finish.
            </h2>
            <p className="section-copy">
              Most civil programs fail in the join between trades. We carry the earthworks, the
              pavement and the services under one contract — one program, one superintendent, one
              set of quality records.
            </p>
          </div>
          <a className="btn btn-outline" href="#contact">
            Discuss your program <ArrowIcon />
          </a>
        </div>

        <div className="discipline-grid">
          {disciplines.map((item) => (
            <article className="discipline-card" key={item.index}>
              <div className="media">
                <img src={item.image} alt={item.alt} />
                <span className="index-badge">{item.index}</span>
              </div>
              <div className="discipline-body">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <ul className="ticks">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="plant">
          <span className="overline muted">Also on the plant list</span>
          <div className="plant-grid">
            {plantList.map((item, index) => (
              <div key={item.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function SectionKicker({ index, label }: { index: string; label: string }) {
  return (
    <p className="kicker">
      <span className="overline accent">/ {index}</span>
      <span className="kicker-rule" />
      <span className="kicker-label">{label}</span>
    </p>
  )
}
