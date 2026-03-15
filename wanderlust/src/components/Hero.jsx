export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-12 px-16"
      style={{ background: 'linear-gradient(147deg, #0f2027 0%, #203a43 50%, #2c5364 100%)' }}
    >
      {/* Main content */}
      <div className="max-w-2xl">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8">
          <span
            className="text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full border"
            style={{ color: '#f9a826', borderColor: '#f9a826', backgroundColor: 'rgba(249,168,38,0.1)' }}
          >
            ✈ Your Journey Awaits
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-black tracking-tight leading-tight mb-6"
          style={{ fontSize: '4.5rem', lineHeight: 1.05 }}
        >
          <span className="text-white">Explore The </span>
          <span style={{ color: '#f9a826' }}>World</span>
          <br />
          <span className="text-white">With Confidence</span>
        </h1>

        {/* Subtext */}
        <p
          className="text-lg leading-relaxed mb-10"
          style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '520px' }}
        >
          Handcrafted travel experiences to 120+ destinations across the globe.
          Expert guides, seamless logistics, and memories that last a lifetime.
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center gap-5">
          <button
            className="font-semibold rounded-full px-8 py-4 text-base transition-transform duration-200 hover:scale-105"
            style={{
              backgroundColor: '#f9a826',
              color: '#1a1a2e',
              boxShadow: '0 8px 32px rgba(249,168,38,0.4)',
            }}
          >
            Start Exploring
          </button>
          <button
            className="font-semibold text-base flex items-center gap-2 transition-opacity duration-200 hover:opacity-80"
            style={{ color: 'rgba(255,255,255,0.9)', background: 'none', border: 'none' }}
          >
            <span
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
            >
              ▶
            </span>
            Watch Stories
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div
        className="absolute bottom-0 left-16 right-16 translate-y-1/2 bg-white rounded-2xl shadow-xl px-6 py-5 flex items-center gap-4"
      >
        {/* Where to */}
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Where to?</p>
          <input
            type="text"
            placeholder="Search destinations..."
            className="w-full text-sm font-medium text-gray-700 outline-none placeholder-gray-400"
          />
        </div>

        <div className="w-px h-10 bg-gray-200" />

        {/* Check In */}
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Check In</p>
          <input
            type="text"
            placeholder="Add dates"
            className="w-full text-sm font-medium text-gray-700 outline-none placeholder-gray-400"
          />
        </div>

        <div className="w-px h-10 bg-gray-200" />

        {/* Check Out */}
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Check Out</p>
          <input
            type="text"
            placeholder="Add dates"
            className="w-full text-sm font-medium text-gray-700 outline-none placeholder-gray-400"
          />
        </div>

        <div className="w-px h-10 bg-gray-200" />

        {/* Travelers */}
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Travelers</p>
          <input
            type="text"
            placeholder="Add guests"
            className="w-full text-sm font-medium text-gray-700 outline-none placeholder-gray-400"
          />
        </div>

        {/* Search Button */}
        <button
          className="flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-90 whitespace-nowrap ml-2"
          style={{ backgroundColor: '#1a1a2e' }}
        >
          🔍 Search
        </button>
      </div>
    </section>
  )
}
