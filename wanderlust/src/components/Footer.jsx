const footerLinks = {
  Destinations: ['Europe', 'Asia Pacific', 'Americas', 'Middle East', 'Africa'],
  Company: ['About Us', 'Careers', 'Press', 'Blog', 'Partners'],
  Support: ['Help Center', 'Cancellation', 'Safety Info', 'Accessibility', 'Contact Us'],
}

const socialIcons = [
  { label: '𝕏', title: 'X (Twitter)' },
  { label: 'f', title: 'Facebook' },
  { label: 'in', title: 'LinkedIn' },
  { label: '▶', title: 'YouTube' },
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0d0d1a' }} className="py-16 px-16">
      {/* Top grid */}
      <div className="grid grid-cols-4 gap-12 mb-12">
        {/* Col 1: Brand */}
        <div>
          <div className="text-2xl font-extrabold tracking-tight mb-4">
            <span className="text-white">Wander</span>
            <span style={{ color: '#f9a826' }}>lust</span>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Crafting unforgettable journeys since 2011. Your trusted partner for
            extraordinary travel experiences across the globe.
          </p>
        </div>

        {/* Cols 2–4: Link groups */}
        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading}>
            <h4
              className="font-bold text-sm tracking-wide mb-5 text-white"
            >
              {heading}
            </h4>
            <ul className="flex flex-col gap-3">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm transition-colors duration-200 hover:text-white"
                    style={{ color: 'rgba(255,255,255,0.5)' }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div
        className="flex items-center justify-between pt-6"
        style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
      >
        <p className="text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>
          © 2026 Wanderlust. All rights reserved.
        </p>

        {/* Social icons */}
        <div className="flex items-center gap-3">
          {socialIcons.map((icon) => (
            <button
              key={icon.title}
              title={icon.title}
              className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white transition-colors duration-200 hover:bg-white/20"
              style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
            >
              {icon.label}
            </button>
          ))}
        </div>
      </div>
    </footer>
  )
}
