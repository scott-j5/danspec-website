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
          <div className="footer-certs">
            <a
              href="https://www.iso.org/iso-9001-quality-management.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="footer-logo" src="/ISO%209001-2015_HALF.svg" alt="ISO 9001:2015" />
            </a>
            <a
              href="https://www.iso.org/iso-14001-environmental-management.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="footer-logo" src="/ISO%2014001-2015_HALF.svg" alt="ISO 14001:2015" />
            </a>
            <a
              href="https://www.iso.org/iso-45001-occupational-health-and-safety.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="footer-logo" src="/ISO%2045001_HALF.svg" alt="ISO 45001:2018" />
            </a>
            <a href="https://www.jasanz.org/" target="_blank" rel="noopener noreferrer">
              <img className="footer-logo" src="/jasanz.svg" alt="JAS-ANZ" />
            </a>
          </div>
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
          © {new Date().getFullYear()} Danspec Civil ABN 22 436 789 718. Danspec
          Investments Pty Ltd ACN 147 630 957. Commercial.
        </p>
        <p>
          We acknowledge the Traditional Owners of the lands on which we work and pay our respects
          to Elders past and present.
        </p>
      </div>
    </footer>
  )
}
