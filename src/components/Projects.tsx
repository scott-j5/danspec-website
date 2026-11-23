import { projects } from '../data'
import { ArrowIcon } from './Icons'
import { SectionKicker } from './Capabilities'

export function Projects() {
  return (
    <section className="section" id="projects">
      <div className="shell">
        <div className="section-head">
          <SectionKicker index="02" label="Selected delivery" />
          <h2>Work you can drive on.</h2>
          <p className="section-copy">
            A sample of recent programs across central and north-east Victoria — council roads,
            private subdivisions and the drainage that keeps them working.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.title}>
              <div className="project-media">
                <img src={project.image} alt={project.alt} />
                <span>{project.tag}</span>
              </div>
              <p className="client">{project.client}</p>
              <h3>{project.title}</h3>
              <p>{project.body}</p>
              <dl>
                {project.metrics.map((metric) => (
                  <div key={metric.label}>
                    <dt>{metric.value}</dt>
                    <dd>{metric.label}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>

        <div className="tender-bar">
          <div>
            <h3>Need references for a tender?</h3>
            <p>
              We can provide project sheets, council referee contacts and current capacity
              statements for any of the programs above.
            </p>
          </div>
          <a className="btn btn-primary clip" href="#contact">
            Ask for project sheets <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  )
}
