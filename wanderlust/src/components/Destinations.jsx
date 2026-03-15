const destinations = {
  featured: {
    name: 'Santorini',
    country: 'Greece',
    price: '$2,499',
    badge: 'Trending',
    image: 'https://www.figma.com/api/mcp/asset/0cfb7b3a-20e6-412d-af66-f6d01202dd05',
  },
  grid: [
    {
      name: 'Kyoto',
      country: 'Japan',
      price: '$1,899',
      badge: null,
      image: 'https://www.figma.com/api/mcp/asset/19439308-d06e-4196-98e5-89f1ce51196b',
    },
    {
      name: 'Swiss Alps',
      country: 'Switzerland',
      price: '$2,799',
      badge: 'New',
      image: 'https://www.figma.com/api/mcp/asset/ce0c9c28-464d-452c-be06-eb941e499a64',
    },
    {
      name: 'Bali',
      country: 'Indonesia',
      price: '$1,299',
      badge: null,
      image: 'https://www.figma.com/api/mcp/asset/136ad9d0-5e5b-4667-b606-75c1d1cf84a0',
    },
    {
      name: 'Venice',
      country: 'Italy',
      price: '$2,199',
      badge: null,
      image: 'https://www.figma.com/api/mcp/asset/edc3448f-b96f-40ca-a101-a3130e0a8e38',
    },
  ],
}

function DestinationCard({ dest, className = '', style = {} }) {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden cursor-pointer group ${className}`}
      style={style}
    >
      <img
        src={dest.image}
        alt={`${dest.name}, ${dest.country}`}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)' }}
      />
      {/* Badge */}
      {dest.badge && (
        <div className="absolute top-4 right-4">
          <span
            className="text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full"
            style={{ backgroundColor: '#f9a826', color: '#1a1a2e' }}
          >
            {dest.badge}
          </span>
        </div>
      )}
      {/* Text overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="text-white font-black text-xl leading-tight">
          {dest.name}
        </p>
        <div className="flex items-center justify-between mt-1">
          <p className="text-white/70 text-sm">{dest.country}</p>
          <p className="text-sm font-bold" style={{ color: '#f9a826' }}>
            from {dest.price}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function Destinations() {
  return (
    <section className="bg-white py-20 px-16">
      {/* Section header */}
      <div className="text-center mb-12">
        <p
          className="text-xs font-bold uppercase tracking-widest mb-3"
          style={{ color: '#f9a826' }}
        >
          🌍 TOP PICKS
        </p>
        <h2
          className="font-black text-4xl mb-3"
          style={{ color: '#1a1a2e' }}
        >
          Popular Destinations
        </h2>
        <p className="text-base max-w-md mx-auto" style={{ color: '#666' }}>
          Explore our most sought-after locations, curated by expert travelers
          from around the world.
        </p>
      </div>

      {/* Destination grid */}
      <div className="flex gap-5" style={{ height: '660px' }}>
        {/* Left: featured tall card */}
        <div className="w-2/5 flex-shrink-0">
          <DestinationCard
            dest={destinations.featured}
            className="h-full"
          />
        </div>

        {/* Right: 2x2 grid */}
        <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-5">
          {destinations.grid.map((dest) => (
            <DestinationCard key={dest.name} dest={dest} className="h-full" />
          ))}
        </div>
      </div>
    </section>
  )
}
