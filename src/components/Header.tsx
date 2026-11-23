import { useState } from 'react'
import { LOGO, email, nav, phone, phoneHref } from '../data'
import { ArrowIcon, CloseIcon, MenuIcon } from './Icons'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="utility-bar">
        <div className="shell utility-inner">
          <span>Civil construction · Northern &amp; Central Victoria</span>
          <div className="utility-links">
            <a href={phoneHref}>{phone}</a>
            <a href={`mailto:${email}`}>{email}</a>
          </div>
        </div>
      </div>
      <div className="nav-bar">
        <div className="shell nav-inner">
          <a href="#top" className="logo-link" aria-label="Danspec Civil home">
            <img src={LOGO} alt="Danspec Civil Pty Ltd" />
          </a>
          <nav className="desktop-nav" aria-label="Primary">
            {nav.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="nav-actions">
            <a className="btn btn-primary clip" href="#contact">
              Request a quote <ArrowIcon />
            </a>
            <button
              className="menu-toggle"
              type="button"
              aria-expanded={open}
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
        <nav className={`mobile-nav${open ? ' is-open' : ''}`} aria-label="Mobile">
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
              <ArrowIcon />
            </a>
          ))}
          <a className="btn btn-primary clip" href="#contact" onClick={() => setOpen(false)}>
            Request a quote <ArrowIcon />
          </a>
        </nav>
      </div>
    </header>
  )
}
