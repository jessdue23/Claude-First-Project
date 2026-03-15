export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-16 py-5">
      <div className="text-2xl font-extrabold tracking-tight">
        <span className="text-white">Wander</span>
        <span style={{ color: '#f9a826' }}>lust</span>
      </div>

      <div className="flex items-center gap-8">
        {['Destinations', 'Trips', 'Hotels', 'Experiences', 'Blog'].map((link) => (
          <a
            key={link}
            href="#"
            className="text-sm font-medium transition-colors duration-200 hover:text-white"
            style={{ color: 'rgba(255,255,255,0.8)' }}
          >
            {link}
          </a>
        ))}
        <button
          className="text-sm font-semibold rounded-full px-5 py-2 transition-opacity duration-200 hover:opacity-90"
          style={{ backgroundColor: '#f9a826', color: '#1a1a2e' }}
        >
          Book Now
        </button>
      </div>
    </nav>
  )
}
