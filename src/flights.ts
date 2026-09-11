export interface Flight {
  id: string
  airline: string
  from: string
  fromCode: string
  to: string
  toCode: string
  depart: string
  arrive: string
  durationMinutes: number
  price: number
  calmScore: number
}

export const FLIGHTS: Flight[] = [
  {
    id: 'FA101',
    airline: 'FlyAngel Air',
    from: 'San Francisco',
    fromCode: 'SFO',
    to: 'New York',
    toCode: 'JFK',
    depart: '08:15',
    arrive: '16:45',
    durationMinutes: 330,
    price: 289,
    calmScore: 92,
  },
  {
    id: 'FA204',
    airline: 'Seraph Jet',
    from: 'San Francisco',
    fromCode: 'SFO',
    to: 'New York',
    toCode: 'JFK',
    depart: '13:40',
    arrive: '22:05',
    durationMinutes: 325,
    price: 342,
    calmScore: 78,
  },
  {
    id: 'FA318',
    airline: 'FlyAngel Air',
    from: 'Los Angeles',
    fromCode: 'LAX',
    to: 'Chicago',
    toCode: 'ORD',
    depart: '07:00',
    arrive: '13:10',
    durationMinutes: 250,
    price: 199,
    calmScore: 88,
  },
  {
    id: 'FA422',
    airline: 'Halo Wings',
    from: 'Seattle',
    fromCode: 'SEA',
    to: 'Denver',
    toCode: 'DEN',
    depart: '10:25',
    arrive: '13:55',
    durationMinutes: 150,
    price: 154,
    calmScore: 95,
  },
  {
    id: 'FA537',
    airline: 'Seraph Jet',
    from: 'Boston',
    fromCode: 'BOS',
    to: 'Miami',
    toCode: 'MIA',
    depart: '15:50',
    arrive: '19:30',
    durationMinutes: 220,
    price: 231,
    calmScore: 71,
  },
  {
    id: 'FA640',
    airline: 'Halo Wings',
    from: 'Los Angeles',
    fromCode: 'LAX',
    to: 'Chicago',
    toCode: 'ORD',
    depart: '18:05',
    arrive: '00:20',
    durationMinutes: 255,
    price: 176,
    calmScore: 83,
  },
]

export function formatDuration(minutes: number): string {
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  return `${h}h ${m.toString().padStart(2, '0')}m`
}
