export interface EventItem {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  price: number;
  seatsAvailable: number;
  seatsTotal: number;
  itinerary: string[];
  organizer: string;
}

export const events: EventItem[] = [
  {
    id: 1,
    title: "Maasai Mara Safari Adventure",
    date: "2026-05-15",
    location: "Maasai Mara National Reserve",
    description:
      "Experience the incredible wildlife of Maasai Mara with guided tours and accommodation.",
    image: "/eventss/event1.jpeg",
    price: 45000,
    seatsAvailable: 8,
    seatsTotal: 16,
    itinerary: [
      "Day 1: Departure and arrival at Mara",
      "Day 2-4: Game drives and wildlife viewing",
      "Day 5: Return journey",
    ],
    organizer: "Prime Drive Tours",
  },
  {
    id: 2,
    title: "Mount Kenya Climbing Expedition",
    date: "2026-06-10",
    location: "Mount Kenya",
    description:
      "Challenge yourself with a guided climb to the peak of Mount Kenya.",
    image: "/eventss/event2.jpeg",
    price: 38000,
    seatsAvailable: 5,
    seatsTotal: 12,
    itinerary: [
      "Day 1: Acclimatization at base camp",
      "Day 2-3: Climbing to Point Lenana",
      "Day 4: Summit attempt and descent",
    ],
    organizer: "Prime Drive Adventures",
  },
  {
    id: 3,
    title: "Beach Holiday - Mombasa Escape",
    date: "2026-07-01",
    location: "Mombasa Beach",
    description:
      "Relax and unwind at the beautiful beaches of Mombasa with water sports and local cuisine.",
    image: "/eventss/event3.jpeg",
    price: 25000,
    seatsAvailable: 15,
    seatsTotal: 50,
    itinerary: [
      "Day 1: Travel to Mombasa",
      "Day 2-4: Beach activities and water sports",
      "Day 5: Snorkeling and reef exploration",
    ],
    organizer: "Prime Drive Vacations",
  },
  {
    id: 4,
    title: "Lake Naivasha Weekend Getaway",
    date: "2026-05-25",
    location: "Lake Naivasha",
    description:
      "Short weekend escape to Lake Naivasha with fishing, boating, and nature walks.",
    image: "/eventss/event4.jpeg",
    price: 12000,
    seatsAvailable: 20,
    seatsTotal: 35,
    itinerary: [
      "Friday Evening: Departure from city",
      "Saturday: Water activities and boat rides",
      "Sunday: Nature walks and return",
    ],
    organizer: "Prime Drive Weekends",
  },
  {
    id: 5,
    title: "Amboseli National Park Photo Safari",
    date: "2026-08-12",
    location: "Amboseli National Park",
    description:
      "Professional photography safari to capture Kilimanjaro and incredible elephant herds.",
    image: "/eventss/event5.jpeg",
    price: 52000,
    seatsAvailable: 3,
    seatsTotal: 8,
    itinerary: [
      "Day 1: Arrival and setup",
      "Day 2-4: Photography drives and training",
      "Day 5: Departure with portfolio",
    ],
    organizer: "Prime Drive Photography",
  },
  {
    id: 6,
    title: "Cultural Tour - Maasai Village Experience",
    date: "2026-06-22",
    location: "Traditional Maasai Village",
    description:
      "Immerse yourself in the Maasai culture with visits to traditional villages and craft markets.",
    image: "/eventss/event6.jpeg",
    price: 15000,
    seatsAvailable: 12,
    seatsTotal: 25,
    itinerary: [
      "Morning: Village visit and interaction",
      "Afternoon: Craft market and shopping",
      "Evening: Traditional meal and dancing",
    ],
    organizer: "Prime Drive Cultural Tours",
  },
];
