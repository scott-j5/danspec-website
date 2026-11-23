import { images, regionPoints, towns } from '../data'
import { ArrowIcon } from './Icons'
import { SectionKicker } from './Capabilities'

export function Region() {
  return (
    <section className="section" id="region">
      <div className="shell region-layout">
        <div>
          <SectionKicker index="04" label="Where we work" />
          <h2>Regional by choice, not by default.</h2>
          <p className="section-copy">
            Our yard is in Echuca and our crews live within an hour of it. That is why we can
            mobilise in a morning, why our supervisors know the local roads, and why the same
            people who build the job come back to look after it.
          </p>
          <ul className="ticks region-ticks">
            {regionPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <a className="text-link" href="#contact">
            Check availability in your shire <ArrowIcon />
          </a>
        </div>
        <div className="footprint">
          <img
            src={images.aggregate}
            alt="Macro detail of blue-metal aggregate and an excavator bucket"
          />
          <div className="footprint-body">
            <div className="footprint-head">
              <span className="overline muted">Operating footprint</span>
              <span className="radius">100+km radius</span>
            </div>
            <ul>
              {towns.map((town) => (
                <li key={town}>{town}</li>
              ))}
            </ul>
            <p>
              Outside these areas? We take on programs across Victoria where the scope suits our
              plant and crew.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
