type IconProps = { className?: string }

export function ArrowIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  )
}

export function ShieldCheckIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

export function DownIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3v18" />
      <path d="m8 17 4 4 4-4" />
    </svg>
  )
}

export function MenuIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M2 4.5h14M2 9h14M2 13.5h14" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

export function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M4 4l10 10M14 4 4 14" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

export function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3.2 2.8h2.1l1 2.4-1.3 1a8.2 8.2 0 0 0 3.8 3.8l1-1.3 2.4 1v2.1A1.2 1.2 0 0 1 11 13 9.2 9.2 0 0 1 3 5a1.2 1.2 0 0 1 .2-2.2Z"
        stroke="currentColor"
        strokeWidth="1.3"
      />
    </svg>
  )
}

export function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="1.8" y="3.2" width="12.4" height="9.6" stroke="currentColor" strokeWidth="1.3" />
      <path d="m2.2 3.8 5.8 4.4 5.8-4.4" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  )
}

export function PinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M8 14s4.2-3.6 4.2-6.6A4.2 4.2 0 0 0 8 3.2a4.2 4.2 0 0 0-4.2 4.2C3.8 10.4 8 14 8 14Z"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <circle cx="8" cy="7.4" r="1.3" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  )
}

export function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="5.4" stroke="currentColor" strokeWidth="1.3" />
      <path d="M8 5.2V8l2 1.4" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  )
}

export function HelmetIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path
        d="M4 13.5V12a7 7 0 0 1 14 0v1.5M3 13.5h16v1.8a2.2 2.2 0 0 1-2.2 2.2H5.2A2.2 2.2 0 0 1 3 15.3v-1.8Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path d="M11 5V3.2" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}

export function ClipboardIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <rect x="4.5" y="4.5" width="13" height="14.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M8 4.5h6V3.2H8v1.3ZM7.5 10h7M7.5 13.5h5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}

export function LeafIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path
        d="M5 16.5C5 10 9.2 5.2 17.5 4.5 16.8 12.8 12 17 5.5 17"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path d="M8 13.2c1.6-1.4 3.4-3.2 5.2-5.4" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}
