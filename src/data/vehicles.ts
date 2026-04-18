export interface Vehicle {
  id: number;
  name: string;
  type: "Bus" | "Matatu";
  capacity: number;
  seatingType: string;
  pricePerDay: number;
  images: string[];
  description: string;
  features: string[];
  availability: boolean;
}

export const vehicles: Vehicle[] = [
  {
    id: 1,
    name: "Luxury Coach",
    type: "Bus",
    capacity: 50,
    seatingType: "Reclining Seats",
    pricePerDay: 15000,
    images: ["/cars/bus.jpeg", "/cars/bus2.jpeg", "/cars/bus3.jpeg"],
    description:
      "Premium long-distance coach with full air conditioning, entertainment system, and onboard restroom. Ideal for corporate outings, school trips, and upcountry tours.",
    features: [
      "Air Conditioning",
      "WiFi Onboard",
      "Onboard Restroom",
      "USB Charging Ports",
      "Privacy Shades",
      "Overhead Storage",
    ],
    availability: true,
  },
  {
    id: 2,
    name: "City Bus",
    type: "Bus",
    capacity: 60,
    seatingType: "Standard Seats",
    pricePerDay: 12000,
    images: ["/cars/bus5.jpeg", "/cars/bus6.jpeg", "/cars/bus7.jpeg"],
    description:
      "Durable and spacious city bus built for large group travel. Perfect for corporate events, university trips, and group tours around Kenya.",
    features: [
      "Air Conditioning",
      "Sound System",
      "First Aid Kit",
      "Fire Extinguisher",
      "Luggage Compartment",
      "Wheelchair Accessible",
    ],
    availability: true,
  },
  {
    id: 3,
    name: "Matatu Deluxe",
    type: "Matatu",
    capacity: 14,
    seatingType: "Cushioned Seats",
    pricePerDay: 3500,
    images: ["/cars/matatu.jpeg", "/cars/matatu1.jpeg", "/cars/matatu3.jpeg"],
    description:
      "Comfortable and well-maintained matatu for short-distance travel and local tours. Great for small group outings, airport transfers, and city excursions.",
    features: [
      "Air Conditioning",
      "Reverse Camera",
      "Bluetooth Audio",
      "Cup Holders",
      "USB Charging",
      "Tinted Windows",
    ],
    availability: true,
  },
  {
    id: 4,
    name: "VIP Executive Coach",
    type: "Bus",
    capacity: 35,
    seatingType: "Executive Reclining Seats",
    pricePerDay: 20000,
    images: ["/cars/bus2.jpeg", "/cars/bus.jpeg", "/cars/bus6.jpeg"],
    description:
      "Ultra-luxury coach designed for high-profile events and premium travel experiences. Features individual entertainment screens and a dedicated refreshment bar.",
    features: [
      "Premium WiFi",
      "Individual LED Screens",
      "Onboard Restroom",
      "Premium Sound System",
      "Ambient Lighting",
      "Refreshment Bar",
    ],
    availability: false,
  },
  {
    id: 5,
    name: "Safari Matatu",
    type: "Matatu",
    capacity: 16,
    seatingType: "High-Back Seats",
    pricePerDay: 4500,
    images: ["/cars/matatu4.jpeg", "/cars/matatu6.jpeg", "/cars/matatu7.jpeg"],
    description:
      "Adventure-ready matatu with large windows and all-terrain capability. The top choice for safari trips, wildlife tours, and upcountry getaways.",
    features: [
      "All-Terrain Capability",
      "Panoramic Windows",
      "Cooler Box",
      "First Aid Kit",
      "GPS Navigation",
      "Roof Luggage Rack",
    ],
    availability: true,
  },
  {
    id: 6,
    name: "Event Coach",
    type: "Bus",
    capacity: 45,
    seatingType: "Comfortable Reclining Seats",
    pricePerDay: 14000,
    images: ["/cars/bus3.jpeg", "/cars/bus5.jpeg", "/cars/bus7.jpeg"],
    description:
      "The go-to vehicle for weddings, conferences, and corporate gatherings. Fully branded on request and equipped with a professional sound system.",
    features: [
      "Professional Sound System",
      "Mood Lighting",
      "Climate Control",
      "Large Luggage Storage",
      "Custom Branding Available",
      "Experienced Driver",
    ],
    availability: true,
  },
  {
    id: 7,
    name: "Airport Transfer Matatu",
    type: "Matatu",
    capacity: 14,
    seatingType: "Leather Seats",
    pricePerDay: 5000,
    images: ["/cars/matatu8.jpeg", "/cars/matatu4.jpeg", "/cars/matatu1.jpeg"],
    description:
      "Premium leather-seated matatu tailored for airport transfers and VIP shuttles. Punctual, comfortable, and always professionally driven.",
    features: [
      "Leather Seats",
      "Air Conditioning",
      "Flight Tracking",
      "Meet & Greet Service",
      "Free Waiting Time",
      "24/7 Availability",
    ],
    availability: true,
  },
];
