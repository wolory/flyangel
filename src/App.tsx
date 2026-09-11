import { useMemo, useState } from 'react'
import { FLIGHTS, formatDuration, type Flight } from './flights'
import './App.css'

type SortKey = 'calm' | 'price' | 'duration'

const SORTS: { key: SortKey; label: string }[] = [
  { key: 'calm', label: 'Calmest' },
  { key: 'price', label: 'Cheapest' },
  { key: 'duration', label: 'Fastest' },
]

function App() {
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState<SortKey>('calm')
  const [booked, setBooked] = useState<Flight | null>(null)

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    const matched = FLIGHTS.filter((f) => {
      if (!q) return true
      return [f.from, f.to, f.fromCode, f.toCode, f.airline]
        .join(' ')
        .toLowerCase()
        .includes(q)
    })
    return [...matched].sort((a, b) => {
      if (sort === 'price') return a.price - b.price
      if (sort === 'duration') return a.durationMinutes - b.durationMinutes
      return b.calmScore - a.calmScore
    })
  }, [query, sort])

  return (
    <div className="app">
      <div className="aurora" aria-hidden="true" />
      <header className="hero">
        <div className="brand">
          <img src="/angel.svg" alt="" className="brand-mark" />
          <span className="brand-name">FlyAngel</span>
        </div>
        <h1>Find a calmer way to fly.</h1>
        <p className="tagline">
          Your guardian companion ranks flights by a Calm Score so every trip
          starts with a little more peace of mind.
        </p>
      </header>

      <main className="panel">
        <div className="controls">
          <label className="search">
            <span className="visually-hidden">Search flights</span>
            <input
              type="search"
              placeholder="Search by city, airport code, or airline…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoComplete="off"
            />
          </label>
          <div className="sorts" role="group" aria-label="Sort results">
            {SORTS.map((s) => (
              <button
                key={s.key}
                type="button"
                className={s.key === sort ? 'sort active' : 'sort'}
                onClick={() => setSort(s.key)}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        <p className="result-count">
          {results.length} flight{results.length === 1 ? '' : 's'} found
        </p>

        <ul className="flights">
          {results.map((f) => (
            <li key={f.id} className="flight">
              <div className="route">
                <div className="endpoint">
                  <span className="code">{f.fromCode}</span>
                  <span className="city">{f.from}</span>
                  <span className="time">{f.depart}</span>
                </div>
                <div className="path">
                  <span className="line" />
                  <span className="duration">{formatDuration(f.durationMinutes)}</span>
                </div>
                <div className="endpoint end">
                  <span className="code">{f.toCode}</span>
                  <span className="city">{f.to}</span>
                  <span className="time">{f.arrive}</span>
                </div>
              </div>
              <div className="meta">
                <span className="airline">{f.airline}</span>
                <span
                  className="calm"
                  title="Calm Score — higher means a smoother, less stressful trip"
                >
                  <span className="dot" /> Calm {f.calmScore}
                </span>
              </div>
              <div className="action">
                <span className="price">${f.price}</span>
                <button
                  type="button"
                  className="book"
                  onClick={() => setBooked(f)}
                >
                  Book
                </button>
              </div>
            </li>
          ))}
          {results.length === 0 && (
            <li className="empty">
              No flights match “{query}”. Try another city or airport code.
            </li>
          )}
        </ul>
      </main>

      {booked && (
        <div
          className="modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="confirm-title"
          onClick={() => setBooked(null)}
        >
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <img src="/angel.svg" alt="" className="modal-mark" />
            <h2 id="confirm-title">You're booked!</h2>
            <p className="confirm-route">
              {booked.fromCode} → {booked.toCode} · {booked.airline}
            </p>
            <p className="confirm-detail">
              Departs {booked.depart}, arrives {booked.arrive} · Calm Score{' '}
              {booked.calmScore}
            </p>
            <p className="confirm-code">
              Confirmation <strong>{booked.id}-{booked.calmScore}</strong>
            </p>
            <button
              type="button"
              className="book"
              onClick={() => setBooked(null)}
            >
              Safe travels
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
