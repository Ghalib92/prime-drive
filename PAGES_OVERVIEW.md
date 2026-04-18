# Prime Drive - Vehicle Sales, Rental & Travel Platform

A complete website for a vehicle company that sells cars, rents buses/matatus, and organizes travel events.

## 📁 Project Structure

```
src/
├── pages/                    # All page components
│   ├── Home.tsx             # Landing page with hero banner and featured content
│   ├── Cars.tsx             # Car listings with filtering
│   ├── CarDetail.tsx        # Single car detail page with order modal
│   ├── Hire.tsx             # Fleet rental page with tabs
│   ├── HireDetail.tsx       # Single vehicle detail with booking modal
│   ├── Events.tsx           # Upcoming events/tours with search
│   ├── EventDetail.tsx      # Single event detail with booking
│   ├── Sell.tsx             # Form for sellers to list their cars
│   ├── About.tsx            # Company information & team
│   ├── Contact.tsx          # Contact page with form & info
│   └── NotFound.tsx         # 404 page
├── components/              # Reusable components
│   ├── Navigation.tsx       # Top navigation bar
│   └── Footer.tsx           # Footer with links
├── data/                    # Sample data
│   ├── cars.ts             # Sample car inventory
│   ├── vehicles.ts         # Sample rental vehicles
│   └── events.ts           # Sample events/tours
├── styles/                  # Stylesheets
│   ├── pages.css           # All page styles
│   ├── components.css      # Navigation & footer styles
│   └── app.css             # App layout
├── App.tsx                  # Main app with routing
├── index.css               # Global styles
└── main.tsx                # Entry point
```

## 🚀 Features

### Pages Implemented

#### 1. **Home Page** (`/`)

- Hero banner with CTAs ("Browse Cars", "Hire a Bus", "See Events")
- Featured cars section with 3 highlighted vehicles
- Rental fleet preview with vehicle types
- Upcoming adventures section with event previews
- Call-to-action sections for selling and contact

#### 2. **Cars Listing** (`/cars`)

- Filterable grid of all cars
- Filters: Price range, Car type, Make
- Each car card shows: photo, price, specs, quick view link
- Search results counter
- Responsive grid layout

#### 3. **Car Detail** (`/cars/:id`)

- Full car gallery
- Complete specifications grid
- Detailed description
- Features & amenities list
- "Order This Car" button triggering a modal
- Order modal with form (name, email, phone, contact method, message)
- Contact information section

#### 4. **Hire / Fleet Page** (`/hire`)

- Professional buses and matatus for rent
- Vehicle type filter tabs (All, Buses, Matatus)
- Vehicle cards with:
  - Capacity, seating type, daily price
  - Features list with visual indicators
  - View Details and Hire buttons
  - Availability badge
- Availability status displayed

#### 5. **Vehicle Detail** (`/hire/:id`)

- Full vehicle information
- Passenger capacity specs
- Key amenities and features list
- "Book This Vehicle" button with booking modal
- Booking form with dates, passenger count, event type
- "Why Choose Prime Drive" benefits section
- Professional design with all vehicle details

#### 6. **Events Listing** (`/events`)

- Upcoming adventures/tours
- Search functionality to find events by name, location
- Event cards with: image, date, location, price, seats available
- View Details link for each event
- Custom events CTA

#### 7. **Event Detail** (`/events/:id`)

- Full event information and itinerary
- Key event details: date, location, seats available
- Days until event calculation
- Detailed itinerary steps
- Important information section
- "Book a Spot" button (disabled if sold out)
- Booking modal with:
  - Passenger count selection
  - Passport number (optional)
  - Special requests
  - Terms acceptance

#### 8. **Sell Your Car** (`/sell`)

- Comprehensive form for car sellers
- Sections:
  - Personal information (name, email, phone, city)
  - Vehicle details (make, model, year, type, mileage, fuel, transmission)
  - Vehicle condition & service history
  - Photos upload
  - Agreement checkboxes
- Success message on submission
- Side panel with selling tips
- Step-by-step process guide

#### 9. **About Page** (`/about`)

- Company mission and vision
- Company story
- Core values (6 values with descriptions)
- Team members with photos and bios
- Fleet overview with statistics
- Why Choose Prime Drive features
- CTA buttons

#### 10. **Contact Page** (`/contact`)

- Multiple contact methods:
  - Phone numbers with links
  - Email addresses
  - WhatsApp link
  - Office address with map link
  - Business hours
- Contact form with:
  - Name, email, phone, subject
  - Message field
  - Contact preference checkbox
- FAQ section with 6 common questions
- Social media links

#### 11. **404 Not Found** (`/*`)

- Friendly error page
- Navigation suggestions (Home, Cars, Hire, Events)
- Car emoji graphic
- Contact support link

### Components

#### Navigation Bar

- Logo with icon and company name
- Menu links to all pages
- Active page indicator
- WhatsApp CTA button
- Sticky positioning
- Responsive hamburger menu (mobile)

#### Footer

- About section with social links
- Quick navigation links
- Company links (About, Contact, Terms, Privacy, FAQ)
- Contact information
- Social media links
- Copyright notice

## 📦 Sample Data

### Cars (6 vehicles)

- Toyota Corolla, Honda Civic, Nissan X-Trail, Hyundai Accent, Isuzu D-Max, Volkswagen Golf

### Vehicles (6 rental vehicles)

- Luxury Coaches, City Buses, Matatus with different capacities and features

### Events (6 upcoming events)

- Maasai Mara Safari, Mount Kenya Climbing, Mombasa Beach, Lake Naivasha, Amboseli Photo Safari, Cultural Tours

## 🎨 Design Features

- **Color Scheme**: Purple gradient (#667eea → #764ba2) with professional whites and grays
- **Typography**: Clean sans-serif fonts with proper hierarchy
- **Responsive Design**: Mobile-first approach with breakpoints at 768px and 480px
- **Interactive Elements**:
  - Hover effects on cards and buttons
  - Modals for forms
  - Form validation
  - Loading states
- **Accessibility**: Semantic HTML, proper alt text, keyboard navigation

## 🛠️ Technologies Used

- **React 19.2.4** - UI framework
- **React Router 7.14.1** - Client-side routing
- **TypeScript** - Type safety
- **Vite** - Build tool
- **CSS3** - Styling with flexbox and grid

## 🚀 Running the Project

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📱 Responsive Breakpoints

- **Desktop**: Full width with all features
- **Tablet** (768px): Adjusted layout, single-column for filters
- **Mobile** (480px): Stack all elements, mobile-optimized navigation

## 🔄 Routing Overview

```
/                    → Home page
/cars                → Car listings with filters
/cars/:id            → Individual car detail
/hire                → Fleet rental page
/hire/:id            → Individual vehicle detail
/events              → Events listing with search
/events/:id          → Individual event detail
/sell                → Sell your car form
/about               → About company
/contact             → Contact information & form
/*                   → 404 Not Found page
```

## 📋 Form Features

All forms include:

- Input validation
- Visual feedback on focus
- Success messages
- Pre-filled data where applicable
- Modal overlays for order/booking flows
- Clear error messaging

## 🎯 Next Steps & Customization

To customize this for your actual business:

1. **Update Contact Information** - Replace phone numbers, email, WhatsApp in Contact page and Footer
2. **Add Real Images** - Replace placeholder images with actual product photos
3. **Database Integration** - Connect to a backend API for real data
4. **Payment Integration** - Add payment processing for cars and events
5. **Authentication** - Add user accounts and order history
6. **Admin Dashboard** - Create admin panel for managing inventory
7. **Email Notifications** - Set up automated confirmation emails
8. **Analytics** - Add tracking for user behavior
9. **SEO** - Add meta tags and structured data
10. **Deployment** - Deploy to hosting platform (Vercel, Netlify, AWS, etc.)

## 📄 License

This project is ready to use and modify for your vehicle business.
