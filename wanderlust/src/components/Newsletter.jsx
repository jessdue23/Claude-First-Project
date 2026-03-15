export default function Newsletter() {
  return (
    <div className="mx-16 my-16">
      <section
        className="rounded-3xl py-20 px-16 text-center"
        style={{ background: 'linear-gradient(167deg, #f9a826 0%, #f06a25 100%)' }}
      >
        <h2
          className="font-black text-4xl mb-4 text-white"
        >
          Get Travel Inspiration
        </h2>
        <p
          className="text-base mb-10 max-w-md mx-auto"
          style={{ color: 'rgba(255,255,255,0.85)' }}
        >
          Join 50,000+ explorers who receive weekly destination guides, travel
          tips, and exclusive deals straight to their inbox.
        </p>

        {/* Input row */}
        <div className="flex items-center justify-center gap-3 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 bg-white rounded-full px-6 py-3 text-sm font-medium outline-none text-gray-700 placeholder-gray-400 shadow-sm"
          />
          <button
            className="rounded-full px-7 py-3 text-sm font-bold text-white whitespace-nowrap transition-opacity duration-200 hover:opacity-90 shadow-md"
            style={{ backgroundColor: '#1a1a2e' }}
          >
            Subscribe Free
          </button>
        </div>

        <p className="text-xs mt-4" style={{ color: 'rgba(255,255,255,0.7)' }}>
          No spam, unsubscribe anytime. We respect your privacy.
        </p>
      </section>
    </div>
  )
}
