const reviews = [
  {
    quote:
      'Wanderlust transformed our honeymoon into a dream we\'ll never forget. Every detail was meticulously planned — from the sunset caldera view to the private wine tasting. Simply magical.',
    name: 'Sarah & James M.',
    sub: 'Santorini, Greece · Honeymoon',
  },
  {
    quote:
      'The Amazon expedition was beyond anything I imagined. Our guide\'s knowledge of the ecosystem was extraordinary, and the night canoe through flooded forest? Absolutely unforgettable.',
    name: 'Marco L.',
    sub: 'Amazon, Brazil · Adventure',
  },
  {
    quote:
      'Third trip with Wanderlust and they keep exceeding expectations. The fjords cruise was flawless — premium ship, incredible food, and we caught the Northern Lights on night three!',
    name: 'Priya K.',
    sub: 'Norway · Fjords Cruise',
  },
]

export default function Testimonials() {
  return (
    <section
      className="py-20 px-16"
      style={{ background: 'linear-gradient(157deg, #1a1a2e 0%, #2c5364 100%)' }}
    >
      {/* Section header */}
      <div className="text-center mb-12">
        <p
          className="text-xs font-bold uppercase tracking-widest mb-3"
          style={{ color: '#f9a826' }}
        >
          💬 REVIEWS
        </p>
        <h2 className="font-black text-4xl mb-3 text-white">
          What Travelers Say
        </h2>
        <p className="text-base max-w-md mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }}>
          Real stories from real adventurers who trusted us with their most
          precious moments.
        </p>
      </div>

      {/* Review cards */}
      <div className="grid grid-cols-3 gap-7">
        {reviews.map((review) => (
          <div
            key={review.name}
            className="rounded-2xl p-8 flex flex-col gap-5"
            style={{
              backgroundColor: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            {/* Stars */}
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ color: '#f9a826' }} className="text-lg">
                  ★
                </span>
              ))}
            </div>

            {/* Quote */}
            <p
              className="text-sm leading-relaxed flex-1"
              style={{ color: 'rgba(255,255,255,0.8)' }}
            >
              "{review.quote}"
            </p>

            {/* Reviewer */}
            <div>
              <p className="font-bold text-white text-sm">{review.name}</p>
              <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.5)' }}>
                {review.sub}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
