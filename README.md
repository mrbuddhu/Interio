# 🏠 Interio - Interior Design Platform

> **⚠️ IMPORTANT: This is a SCRAPED VERSION**  
> Real client data has been scraped and integrated into this platform for demonstration purposes.

## 📋 Project Summary

**Interio** is a comprehensive interior design and renovation platform that showcases real client projects and services. This application demonstrates a professional interior design business with:

### 🎯 **Core Features**
- **Real Client Projects** - Showcasing actual renovation work from scraped client data
- **Multi-Step Estimate System** - Professional project estimation workflow
- **User Authentication** - Secure sign-up and login system
- **Service Showcase** - Kitchen, bathroom, living room, and outdoor renovations
- **Responsive Design** - Mobile and desktop optimized

### 🏗️ **Technical Stack**
- **Frontend:** Next.js 14, React 18, TypeScript
- **Styling:** Tailwind CSS, Radix UI components
- **Authentication:** NextAuth.js with Prisma adapter
- **Database:** SQLite with Prisma ORM
- **Images:** Real interior design photos from Unsplash
- **Deployment:** Production-ready build system

### 📊 **Scraped Data Integration**
This platform includes:
- **Real client testimonials** and project reviews
- **Actual renovation project examples** with real photos
- **Genuine service offerings** based on real interior design businesses
- **Authentic pricing structures** and project timelines
- **Real contractor information** and service areas

### 🚀 **Key Pages**
1. **Homepage** - Professional landing with hero section and project showcase
2. **Services** - Comprehensive renovation services with real examples
3. **Estimate Flow** - Multi-step project estimation system
4. **Authentication** - User registration and login
5. **Portfolio** - Real project gallery from scraped client data

### 🎨 **Design Features**
- **Emerald green branding** - Professional interior design aesthetic
- **High-quality images** - Real renovation project photos
- **Modern UI/UX** - Clean, professional interface
- **Mobile responsive** - Works perfectly on all devices

### 🔧 **Development Setup**
```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Run database migrations
npx prisma migrate dev

# Start development server
npm run dev

# Build for production
npm run build
npm start
```

### 📱 **Environment Variables**
```env
DATABASE_URL="file:./dev.db"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"
```

### 🌐 **Live Demo**
- **Local:** http://localhost:3000
- **Production:** Ready for deployment to Vercel/Netlify

### 📈 **Business Features**
- **Lead Generation** - Estimate request forms
- **Project Management** - Client project tracking
- **Service Catalog** - Comprehensive renovation offerings
- **Client Portal** - User dashboard for project updates

### ⚠️ **Data Disclaimer**
This application contains **scraped real client data** including:
- Client testimonials and reviews
- Project photos and descriptions
- Service pricing and timelines
- Contractor information

All data has been collected and integrated for demonstration purposes to showcase a realistic interior design business platform.

### 🎯 **Launch Ready**
- ✅ Production build optimized
- ✅ Real images integrated
- ✅ Authentication system working
- ✅ Database configured
- ✅ Responsive design complete
- ✅ Professional UI/UX

---

**Built with ❤️ for the interior design industry**

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
