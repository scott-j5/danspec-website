import { compliance } from '../data'
import { ShieldCheckIcon } from './Icons'

export function Compliance() {
  return (
    <section className="compliance" aria-label="Compliance">
      <div className="shell compliance-inner">
        <span className="overline muted">Compliance</span>
        <ul>
          {compliance.map((item) => (
            <li key={item}>
              <ShieldCheckIcon />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
