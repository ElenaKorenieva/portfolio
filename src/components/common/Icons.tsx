type IconProps = {
  className?: string;
};

export function ArrowUpRightIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M7 17L17 7M17 7H8.5M17 7V15.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MailIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M4 7.5C4 6.67 4.67 6 5.5 6h13c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5h-13C4.67 18 4 17.33 4 16.5v-9Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M5 7l7 5 7-5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PhoneIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M6.88 4.52l2.1-.48a1.5 1.5 0 0 1 1.73.88l1.1 2.57a1.5 1.5 0 0 1-.35 1.67l-1.2 1.2a14.2 14.2 0 0 0 5.38 5.38l1.2-1.2a1.5 1.5 0 0 1 1.67-.35l2.57 1.1a1.5 1.5 0 0 1 .88 1.73l-.48 2.1A1.5 1.5 0 0 1 20 21C11.72 21 5 14.28 5 6a1.5 1.5 0 0 1 1.88-1.48Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GithubIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M9 19c-4 .9-4-2-5.5-2.5M14.5 21v-2.3c0-.7.08-1.03-.15-1.3 2.25-.25 4.65-1.1 4.65-4.98 0-1.1-.4-2-1.05-2.7.1-.26.46-1.3-.1-2.7 0 0-.86-.28-2.8 1.03A9.7 9.7 0 0 0 12 6.8c-.97 0-1.95.13-2.85.4-1.94-1.3-2.8-1.03-2.8-1.03-.56 1.4-.2 2.44-.1 2.7-.65.7-1.05 1.6-1.05 2.7 0 3.87 2.4 4.73 4.65 4.98-.23.27-.43.7-.43 1.4V21"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LinkedinIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M16 8a5 5 0 0 1 5 5v5h-4v-5a1 1 0 0 0-2 0v5h-4v-9h4v1.2A4.2 4.2 0 0 1 16 8ZM7 9H3v9h4V9ZM5 5.75A1.75 1.75 0 1 0 5 9.25a1.75 1.75 0 0 0 0-3.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}