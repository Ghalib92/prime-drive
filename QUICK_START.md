# Quick Start Guide - Prime Drive Website

## ✅ What's Been Created

All 11 pages for your vehicle company website are now ready:

### Main Pages

- ✅ **Home** - Landing page with hero banner and featured content
- ✅ **Cars** - Filterable car inventory with search
- ✅ **Car Detail** - Individual car page with order modal
- ✅ **Hire** - Rental fleet with vehicle types
- ✅ **Vehicle Detail** - Individual vehicle page with booking
- ✅ **Events** - Upcoming tours and events with search
- ✅ **Event Detail** - Individual event page with booking
- ✅ **Sell** - Form to list vehicles for sale
- ✅ **About** - Company information and team
- ✅ **Contact** - Contact information and inquiry form
- ✅ **404** - Friendly not-found page

### Components & Features

- ✅ Navigation bar with active page indicators
- ✅ Footer with company info and social links
- ✅ React Router setup with all routes
- ✅ Responsive design (desktop, tablet, mobile)
- ✅ Sample data for cars, vehicles, and events
- ✅ Form modals for orders and bookings
- ✅ Filter functionality for cars
- ✅ Search functionality for events
- ✅ Professional CSS styling

## 🚀 Getting Started

### 1. Start the Development Server

```bash
cd /home/mohaa/Dev/my_projects/car-website/prime-drive
npm run dev
```

This will start the Vite dev server. You'll see output like:

```
  VITE v8.0.8  ready in XXX ms

  ➜  Local:   http://localhost:5173/
  ➜  press h to show help
```

### 2. Open in Browser

Open [http://localhost:5173](http://localhost:5173) in your browser to see the site.

### 3. Navigate the Site

- Click the logo to go home
- Use the navigation menu to visit different pages
- Try the filters on the Cars page
- Click on a car to see its detail page
- Try the order/booking modals
- Fill out forms and submit (they show success messages)

## 📋 Project Structure

```
prime-drive/
├── src/
│   ├── pages/          # 11 page components
│   ├── components/     # Navigation & Footer
│   ├── data/          # Sample cars, vehicles, events
│   ├── styles/        # CSS files
│   ├── App.tsx        # Main app with routing
│   ├── main.tsx       # Entry point
│   └── index.css      # Global styles
├── PAGES_OVERVIEW.md  # Detailed documentation
└── README.md          # Original readme
```

## 📱 Testing Different Devices

### Desktop

- Open browser DevTools (F12)
- View at 1200px+ width

### Tablet

- Set viewport to 768px width

### Mobile

- Set viewport to 400-480px width
- Navigation collapses, layout adjusts

## 🎨 Customizing Content

### Update Contact Information

Edit [src/pages/Contact.tsx](src/pages/Contact.tsx):

```typescript
// Line 37-41: Update phone numbers
<a href="tel:+254712345678">+254 712 345 678</a>

// Add your actual contact details
```

### Update Company Info

Edit [src/pages/About.tsx](src/pages/About.tsx):

- Change company story
- Update team member names
- Modify values and features

### Update Footer Links

Edit [src/components/Footer.tsx](src/components/Footer.tsx):

- Update social media links
- Change company details

### Replace Images

1. Put your images in `public/` folder (or use external URLs)
2. Search for `https://via.placeholder.com` in pages
3. Replace with your image URLs

## 🔧 Common Customizations

### Change Color Scheme

Colors are defined in [src/styles/pages.css](src/styles/pages.css):

```css
/* Primary color */
color: #667eea;

/* Secondary color */
color: #764ba2;

/* Change gradient backgrounds */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Modify Sample Data

Edit these files to add/remove items:

- [src/data/cars.ts](src/data/cars.ts) - Car inventory
- [src/data/vehicles.ts](src/data/vehicles.ts) - Rental vehicles
- [src/data/events.ts](src/data/events.ts) - Events/tours

### Add New Pages

1. Create `src/pages/NewPage.tsx`
2. Add import and route in [src/App.tsx](src/App.tsx):

```typescript
import NewPage from './pages/NewPage';

<Route path="/new-page" element={<NewPage />} />
```

3. Add link in [src/components/Navigation.tsx](src/components/Navigation.tsx)

## 🧪 Testing Features

### Order Modal (Cars)

1. Go to **/cars**
2. Click on any car card
3. Click "Order This Car"
4. Fill form and submit
5. See success message

### Booking Modal (Events)

1. Go to **/events**
2. Click "View Details" on any event
3. Click "Book a Spot"
4. Fill booking form
5. See confirmation

### Filtering

1. Go to **/cars**
2. Use price slider, type, and make filters
3. Results update automatically

### Search

1. Go to **/events**
2. Type in search to filter events
3. Results update in real-time

## 🛠️ Build & Deploy

### Build for Production

```bash
npm run build
```

Creates optimized files in `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

Test the production build locally.

### Deploy to Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Deploy to Netlify

```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

## 📝 File Overview

### Pages (11 files)

- `Home.tsx` (6.6 KB) - Landing page
- `Cars.tsx` (4.5 KB) - Car listing with filters
- `CarDetail.tsx` (5.5 KB) - Single car with order modal
- `Hire.tsx` (4.0 KB) - Fleet rental page
- `HireDetail.tsx` (6.5 KB) - Vehicle detail with booking
- `Events.tsx` (3.3 KB) - Events with search
- `EventDetail.tsx` (7.0 KB) - Event detail with booking
- `Sell.tsx` (10 KB) - Car seller form
- `About.tsx` (8.4 KB) - Company information
- `Contact.tsx` (7.7 KB) - Contact page
- `NotFound.tsx` (1.5 KB) - 404 page

### Components (2 files)

- `Navigation.tsx` - Top navigation bar
- `Footer.tsx` - Footer with links

### Data (3 files)

- `cars.ts` - 6 sample cars
- `vehicles.ts` - 6 rental vehicles
- `events.ts` - 6 sample events

### Styling (3 files)

- `pages.css` (20.5 KB) - All page styles
- `components.css` (4.0 KB) - Nav & footer
- `app.css` (142 B) - App layout

## 🔗 All Routes

```
/                    → Home
/cars                → Car listings
/cars/1 to /cars/6   → Individual cars
/hire                → Fleet rental
/hire/1 to /hire/6   → Individual vehicles
/events              → Events listing
/events/1 to /events/6 → Individual events
/sell                → Sell form
/about               → Company info
/contact             → Contact form
/*                   → 404 page
```

## 📞 Next Steps

1. **Customize content** - Update company info, contact details
2. **Add your images** - Replace placeholder images
3. **Update branding** - Adjust colors if needed
4. **Add features** - Implement real API calls
5. **Set up backend** - Connect to database
6. **Add payments** - Integrate payment processing
7. **Deploy** - Push to production

## ✨ Features Ready to Build Upon

- ✅ User authentication framework ready
- ✅ Form handling infrastructure in place
- ✅ Modals for complex interactions
- ✅ Search and filter patterns
- ✅ Responsive design system
- ✅ TypeScript types for data
- ✅ Professional styling

## 🐛 Troubleshooting

### Dev server not starting?

```bash
# Clear node_modules and reinstall
rm -rf node_modules pnpm-lock.yaml
npm install
npm run dev
```

### CSS not loading?

```bash
# Make sure styles are imported in App.tsx
# Check console for import errors
```

### Components not showing?

- Check page paths in navigation
- Verify route paths in App.tsx
- Check browser console for errors

## 📚 Learn More

- [React Documentation](https://react.dev)
- [React Router Docs](https://reactrouter.com)
- [Vite Documentation](https://vitejs.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

---

**You're all set! Start the dev server and begin building your vehicle company website! 🚗✨**
