import { depot, depotHref, email, LOGO, phone, phoneHref } from '../data'
import { ArrowIcon } from './Icons'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <img className="footer-logo" src={LOGO} alt="Danspec Civil Pty Ltd" />
          <p>
            Civil construction across Northern &amp; Central Victoria. Roads, drainage and
            pavements, subdivision works and utility infrastructure since 2010.
          </p>
        </div>
        <div>
          <h3>Capabilities</h3>
          <ul>
            <li>
              <a href="#capabilities">Roads &amp; pavements</a>
            </li>
            <li>
              <a href="#capabilities">Drainage &amp; stormwater</a>
            </li>
            <li>
              <a href="#capabilities">Subdivision civil works</a>
            </li>
            <li>
              <a href="#capabilities">Utility infrastructure</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Company</h3>
          <ul>
            <li>
              <a href="#projects">Recent projects</a>
            </li>
            <li>
              <a href="#method">How we work</a>
            </li>
            <li>
              <a href="#region">Where we work</a>
            </li>
            <li>
              <a href="#contact">Request a quote</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li>
              <a href={phoneHref}>{phone}</a>
            </li>
            <li>
              <a href={`mailto:${email}`}>{email}</a>
            </li>
            <li>
              <a href={depotHref} target="_blank" rel="noopener noreferrer">{depot}</a>
            </li>
          </ul>
          <a className="btn btn-accent clip footer-cta" href="#contact">
            Start a project <ArrowIcon />
          </a>
        </div>
      </div>
      <div className="shell footer-base">
        <p>
          © {new Date().getFullYear()} Danspec Civil Pty Ltd. ABN 00 000 000 000. Commercial &amp;
          civil licence CDB-U 00000.
        </p>
        <p>
          We acknowledge the Traditional Owners of the lands on which we work and pay our respects
          to Elders past and present.
        </p>
      </div>
    </footer>
  )
}
