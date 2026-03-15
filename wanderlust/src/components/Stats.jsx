const stats = [
  { value: '120', suffix: '+', label: 'Destinations' },
  { value: '50k', suffix: '+', label: 'Happy Travelers' },
  { value: '4.9', suffix: '★', label: 'Average Rating' },
  { value: '15', suffix: 'y', label: 'Years of Experience' },
]

export default function Stats() {
  return (
    <section className="py-16" style={{ backgroundColor: '#f8f9ff' }}>
      <div className="max-w-5xl mx-auto px-16">
        <div className="grid grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="flex items-baseline justify-center gap-0.5 mb-2">
                <span
                  className="font-black"
                  style={{ color: '#1a1a2e', fontSize: '3rem', lineHeight: 1 }}
                >
                  {stat.value}
                </span>
                <span
                  className="font-black text-3xl"
                  style={{ color: '#f9a826' }}
                >
                  {stat.suffix}
                </span>
              </div>
              <p className="text-sm font-medium" style={{ color: '#888' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
