import { type FormEvent, useState } from 'react'
import { depot, depotHref, email, images, phone, phoneHref, workTypes } from '../data'
import { ArrowIcon, ClockIcon, MailIcon, PhoneIcon, PinIcon } from './Icons'

type FormState = {
  name: string
  company: string
  email: string
  phone: string
  workType: string
  location: string
  scope: string
}

const emptyForm: FormState = {
  name: '',
  company: '',
  email: '',
  phone: '',
  workType: '',
  location: '',
  scope: '',
}

const details = [
  { icon: PhoneIcon, label: 'Office', value: phone, href: phoneHref },
  { icon: MailIcon, label: 'Email', value: email, href: `mailto:${email}` },
  { icon: PinIcon, label: 'Depot', value: depot, href: depotHref },
  { icon: ClockIcon, label: 'Hours', value: 'Mon–Fri, 7:00am–5:00pm' },
]

export function Contact() {
  const [form, setForm] = useState<FormState>(emptyForm)
  const [sent, setSent] = useState(false)

  function update(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }))
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <section className="contact" id="contact">
      <div className="shell contact-layout">
        <div>
          <p className="kicker light">
            <span className="overline accent">/ 05</span>
            <span className="kicker-rule" />
            <span>Request a quote</span>
          </p>
          <h2>
            Tell us what
            <br />
            you need built.
          </h2>
          <p className="contact-copy">
            Send through the scope, the location and the timeframe. Our estimating team replies
            within two business days — sooner if the program is already funded.
          </p>

          {sent ? (
            <div className="form-success" role="status">
              <h3>Enquiry received.</h3>
              <p>
                Thanks {form.name.split(' ')[0]}. We’ll come back within two business days with a
                straight answer on scope and availability.
              </p>
              <button
                type="button"
                className="btn btn-accent clip"
                onClick={() => {
                  setSent(false)
                  setForm(emptyForm)
                }}
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <form className="quote-form" onSubmit={onSubmit}>
              <label>
                Name *
                <input
                  required
                  name="name"
                  autoComplete="name"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={(event) => update('name', event.target.value)}
                />
              </label>
              <label>
                Company
                <input
                  name="company"
                  autoComplete="organization"
                  placeholder="Business or council"
                  value={form.company}
                  onChange={(event) => update('company', event.target.value)}
                />
              </label>
              <label>
                Email *
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="you@company.com.au"
                  value={form.email}
                  onChange={(event) => update('email', event.target.value)}
                />
              </label>
              <label>
                Phone
                <input
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  placeholder="04XX XXX XXX"
                  value={form.phone}
                  onChange={(event) => update('phone', event.target.value)}
                />
              </label>
              <label>
                Work type
                <select
                  name="workType"
                  value={form.workType}
                  onChange={(event) => update('workType', event.target.value)}
                >
                  <option value="">Select a category</option>
                  {workTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Location
                <input
                  name="location"
                  placeholder="Town or site address"
                  value={form.location}
                  onChange={(event) => update('location', event.target.value)}
                />
              </label>
              <label className="full">
                Scope *
                <textarea
                  required
                  name="scope"
                  rows={3}
                  placeholder="What needs building, roughly how big, and when it needs to be finished."
                  value={form.scope}
                  onChange={(event) => update('scope', event.target.value)}
                />
              </label>
              <div className="form-submit full">
                <button className="btn btn-accent clip" type="submit">
                  Send enquiry <ArrowIcon />
                </button>
                <p>No obligation — just a straight answer on scope and availability.</p>
              </div>
            </form>
          )}
        </div>

        <aside>
          <figure>
            <img
              src={images.drainage}
              alt="Concrete culvert sections being set into a stormwater trench"
            />
            <figcaption>Echuca yard</figcaption>
          </figure>
          <ul className="contact-details">
            {details.map((item) => {
              const Icon = item.icon
              return (
                <li key={item.label}>
                  <Icon />
                  <div>
                    <span>{item.label}</span>
                    {item.href ? <a href={item.href}>{item.value}</a> : <p>{item.value}</p>}
                  </div>
                </li>
              )
            })}
          </ul>
        </aside>
      </div>
    </section>
  )
}
