import { principles, steps } from '../data'
import { ClipboardIcon, HelmetIcon, LeafIcon } from './Icons'
import { SectionKicker } from './Capabilities'

const icons = [HelmetIcon, ClipboardIcon, LeafIcon]

export function Method() {
  return (
    <section className="section section-muted" id="method">
      <div className="shell method-layout">
        <div className="method-sticky">
          <SectionKicker index="03" label="How we work" />
          <h2>
            A program you
            <br />
            can hold us to.
          </h2>
          <p className="section-copy">
            Civil work is judged long after the crew leaves: by how the pavement performs after
            three winters, and by whether the paperwork stands up. Both are built in from day one.
          </p>
        </div>
        <div>
          <ol className="steps">
            {steps.map((step, index) => (
              <li key={step.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="principle-grid">
            {principles.map((item, index) => {
              const Icon = icons[index]
              return (
                <article key={item.title}>
                  <Icon />
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
