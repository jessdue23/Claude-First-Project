const packages = [
  {
    title: 'Amazon Rainforest Expedition',
    category: 'Adventure',
    rating: 4.9,
    reviews: 234,
    price: '$1,849',
    duration: '12 Days',
    description: 'Dive deep into the world\'s largest rainforest with expert guides.',
    image: 'https://www.figma.com/api/mcp/asset/63008ebe-c0c2-4133-91ef-900e9686baf5',
  },
  {
    title: 'Golden Triangle India',
    category: 'Cultural',
    rating: 4.8,
    reviews: 189,
    price: '$1,299',
    duration: '9 Days',
    description: 'Discover Delhi, Agra and Jaipur — the iconic trio showcasing India\'s rich heritage.',
    image: 'https://www.figma.com/api/mcp/asset/f2f2db74-51b1-4f47-bf14-5c67d121769a',
  },
  {
    title: 'Norwegian Fjords Cruise',
    category: 'Scenic',
    rating: 5.0,
    reviews: 312,
    price: '$3,199',
    duration: '14 Days',
    description: 'Sail through breathtaking fjords, witness the Northern Lights.',
    image: 'https://www.figma.com/api/mcp/asset/6ca9c11d-a0be-46b8-992b-9684f6849943',
  },
]

function StarRating({ rating, reviews }) {
  return (
    <div className="flex items-center gap-1.5">
      <span className="text-sm font-bold" style={{ color: '#f9a826' }}>★ {rating}</span>
      <span className="text-xs" style={{ color: '#888' }}>({reviews})</span>
    </div>
  )
}

export default function Packages() {
  return (
    <section className="py-20 px-16" style={{ backgroundColor: '#f8f9ff' }}>
      {/* Section header */}
      <div className="text-center mb-12">
        <p
          className="text-xs font-bold uppercase tracking-widest mb-3"
          style={{ color: '#f9a826' }}
        >
          🎒 FEATURED PACKAGES
        </p>
        <h2
          className="font-black text-4xl mb-3"
          style={{ color: '#1a1a2e' }}
        >
          Most Booked Trips
        </h2>
        <p className="text-base max-w-md mx-auto" style={{ color: '#666' }}>
          Our most popular travel packages, loved by thousands of adventurers worldwide.
        </p>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-3 gap-7">
        {packages.map((pkg) => (
          <div
            key={pkg.title}
            className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
          >
            {/* Image */}
            <div className="h-56 overflow-hidden flex-shrink-0">
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              {/* Category badge + rating */}
              <div className="flex items-center justify-between mb-3">
                <span
                  className="text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full"
                  style={{ backgroundColor: 'rgba(249,168,38,0.12)', color: '#f9a826' }}
                >
                  {pkg.category}
                </span>
                <StarRating rating={pkg.rating} reviews={pkg.reviews} />
              </div>

              {/* Title */}
              <h3 className="font-bold text-lg mb-2" style={{ color: '#1a1a2e' }}>
                {pkg.title}
              </h3>

              {/* Description */}
              <p className="text-sm flex-1 leading-relaxed" style={{ color: '#888' }}>
                {pkg.description}
              </p>

              {/* Divider */}
              <div className="border-t border-gray-100 mt-4 pt-4">
                {/* Price + Duration */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xl font-black" style={{ color: '#1a1a2e' }}>
                      {pkg.price}
                    </span>
                    <span className="text-xs ml-1" style={{ color: '#888' }}>
                      / person
                    </span>
                  </div>
                  <span className="text-sm font-medium" style={{ color: '#666' }}>
                    ⏱ {pkg.duration}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
