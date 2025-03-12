// fakeData.js

// 1. E-commerce Users
const fakeUsers = [
  {
    id: "user1",
    firstName: "Alex",
    lastName: "Thompson",
    email: "alex.thompson@example.com",
    password: "hashedPw123",
    createdAt: "2025-01-10T09:15:00Z",
    address: {
      street: "789 Pine St",
      city: "Seattle",
      state: "WA",
      zipCode: "98101",
      country: "USA",
    },
    phone: "+1-555-0789",
  },
  {
    id: "user2",
    firstName: "Maria",
    lastName: "Gonzalez",
    email: "maria.gonzalez@example.com",
    password: "hashedPw456",
    createdAt: "2025-02-20T14:30:00Z",
    address: {
      street: "321 Elm St",
      city: "Austin",
      state: "TX",
      zipCode: "73301",
      country: "USA",
    },
    phone: "+1-555-0321",
  },
];

// 2. E-commerce Products
const fakeProducts = [
  {
    id: "prod1",
    name: "4K Smart TV",
    description: "55-inch LED television",
    price: 599.99,
    stock: 45,
    categoryId: "cat1",
    specs: { resolution: "3840x2160" },
    createdAt: "2024-12-15T10:00:00Z",
  },
  {
    id: "prod2",
    name: "Gaming Laptop",
    description: "High-performance laptop",
    price: 1299.99,
    stock: 25,
    categoryId: "cat2",
    specs: { cpu: "Intel i7" },
    createdAt: "2025-01-05T13:00:00Z",
  },
];

// 3. E-commerce Categories
const fakeCategories = [
  {
    id: "cat1",
    name: "Electronics",
    description: "Electronic devices",
    createdAt: "2024-11-01T08:00:00Z",
  },
  {
    id: "cat2",
    name: "Computers",
    description: "Computer hardware",
    createdAt: "2024-11-01T08:00:00Z",
  },
];

// 4. E-commerce Orders
const fakeOrders = [
  {
    id: "order1",
    userId: "user1",
    products: [{ productId: "prod1", quantity: 1, priceAtTime: 599.99 }],
    totalAmount: 599.99,
    status: "shipped",
    createdAt: "2025-03-01T16:45:00Z",
  },
  {
    id: "order2",
    userId: "user2",
    products: [{ productId: "prod2", quantity: 1, priceAtTime: 1299.99 }],
    totalAmount: 1299.99,
    status: "pending",
    createdAt: "2025-03-10T09:30:00Z",
  },
];

// 5. E-commerce Reviews
const fakeReviews = [
  {
    id: "rev1",
    userId: "user1",
    productId: "prod1",
    rating: 5,
    comment: "Amazing picture!",
    createdAt: "2025-03-05T11:20:00Z",
  },
  {
    id: "rev2",
    userId: "user2",
    productId: "prod2",
    rating: 4,
    comment: "Great performance",
    createdAt: "2025-03-11T08:15:00Z",
  },
];

// 6. E-commerce Payments
const fakePayments = [
  {
    id: "pay1",
    userId: "user1",
    type: "credit_card",
    lastFour: "5678",
    expiryDate: "2028-06-30",
    createdAt: "2025-01-15T12:00:00Z",
  },
  {
    id: "pay2",
    userId: "user2",
    type: "debit_card",
    lastFour: "9012",
    expiryDate: "2027-09-30",
    createdAt: "2025-02-25T15:45:00Z",
  },
];

// 7. E-commerce Cart Items
const fakeCartItems = [
  {
    id: "cart1",
    userId: "user1",
    productId: "prod2",
    quantity: 1,
    addedAt: "2025-03-11T10:00:00Z",
  },
  {
    id: "cart2",
    userId: "user2",
    productId: "prod1",
    quantity: 2,
    addedAt: "2025-03-10T14:20:00Z",
  },
];

// 8. E-commerce Promotions
const fakePromotions = [
  {
    id: "promo1",
    code: "SPRING25",
    discount: 25,
    startDate: "2025-03-01T00:00:00Z",
    endDate: "2025-03-31T23:59:59Z",
    active: true,
  },
  {
    id: "promo2",
    code: "WELCOME10",
    discount: 10,
    startDate: "2025-01-01T00:00:00Z",
    endDate: "2025-12-31T23:59:59Z",
    active: true,
  },
];

// 9. E-commerce Shipping
const fakeShipping = [
  {
    id: "ship1",
    orderId: "order1",
    carrier: "UPS",
    trackingNumber: "1Z9999W999999999",
    status: "delivered",
    estimatedDelivery: "2025-03-05T18:00:00Z",
  },
  {
    id: "ship2",
    orderId: "order2",
    carrier: "FedEx",
    trackingNumber: "789012345678",
    status: "in_transit",
    estimatedDelivery: "2025-03-15T18:00:00Z",
  },
];

// 10. E-commerce Wishlist
const fakeWishlist = [
  {
    id: "wish1",
    userId: "user1",
    productId: "prod2",
    addedAt: "2025-02-28T13:30:00Z",
  },
  {
    id: "wish2",
    userId: "user2",
    productId: "prod1",
    addedAt: "2025-03-09T16:00:00Z",
  },
];

// 11. Social Media Users
const fakeSocialUsers = [
  {
    id: "social1",
    username: "coolcat99",
    fullName: "Emma Watson",
    email: "emma.watson@example.com",
    followers: 1250,
    following: 380,
    bio: "Adventurer!",
    joinedAt: "2024-10-15T08:30:00Z",
  },
  {
    id: "social2",
    username: "techguru",
    fullName: "Liam Chen",
    email: "liam.chen@example.com",
    followers: 5000,
    following: 150,
    bio: "Tech enthusiast",
    joinedAt: "2025-01-20T14:00:00Z",
  },
];

// 12. Educational Courses
const fakeCourses = [
  {
    id: "course1",
    title: "Intro to Python",
    instructor: "Dr. Sarah Jones",
    duration: "6 weeks",
    level: "Beginner",
    enrolled: 250,
    rating: 4.8,
    createdAt: "2025-02-01T10:00:00Z",
  },
  {
    id: "course2",
    title: "Advanced ML",
    instructor: "Prof. Michael Brown",
    duration: "12 weeks",
    level: "Advanced",
    enrolled: 120,
    rating: 4.9,
    createdAt: "2025-03-01T09:00:00Z",
  },
];

// 13. Healthcare Patients
const fakePatients = [
  {
    id: "pat1",
    name: "John Miller",
    dob: "1985-06-15",
    gender: "Male",
    bloodType: "O+",
    lastVisit: "2025-03-05T14:30:00Z",
    conditions: ["Hypertension"],
  },
  {
    id: "pat2",
    name: "Alice Rodriguez",
    dob: "1992-11-22",
    gender: "Female",
    bloodType: "A-",
    lastVisit: "2025-02-28T10:15:00Z",
    conditions: ["Asthma"],
  },
];

// 14. Gaming Profiles
const fakeGamers = [
  {
    id: "gamer1",
    gamertag: "ShadowStriker",
    level: 45,
    achievements: 23,
    totalPlaytime: 156,
    favoriteGame: "CyberQuest",
    lastLogin: "2025-03-10T20:45:00Z",
  },
  {
    id: "gamer2",
    gamertag: "PixelPanda",
    level: 32,
    achievements: 15,
    totalPlaytime: 89,
    favoriteGame: "StarForge",
    lastLogin: "2025-03-11T15:30:00Z",
  },
];

// 15. Job Listings
const fakeJobs = [
  {
    id: "job1",
    title: "Software Engineer",
    company: "TechCorp",
    location: "Remote",
    salaryRange: "$80,000 - $120,000",
    type: "Full-time",
    postedAt: "2025-03-01T09:00:00Z",
  },
  {
    id: "job2",
    title: "Graphic Designer",
    company: "CreativeLabs",
    location: "New York, NY",
    salaryRange: "$50,000 - $75,000",
    type: "Part-time",
    postedAt: "2025-03-05T14:00:00Z",
  },
];

// 16. Blog Posts
const fakePosts = [
  {
    id: "post1",
    title: "The Future of AI",
    author: "Jane Doe",
    category: "Technology",
    wordCount: 850,
    publishedAt: "2025-03-08T11:00:00Z",
    views: 3400,
  },
  {
    id: "post2",
    title: "Healthy Living Tips",
    author: "Mark Wilson",
    category: "Lifestyle",
    wordCount: 620,
    publishedAt: "2025-03-10T09:30:00Z",
    views: 2100,
  },
];

// 17. Event Bookings
const fakeEvents = [
  {
    id: "event1",
    name: "Tech Conference 2025",
    venue: "SF Convention Center",
    date: "2025-06-15T09:00:00Z",
    ticketPrice: 299.99,
    capacity: 1000,
    registered: 750,
  },
  {
    id: "event2",
    name: "Online Yoga Workshop",
    venue: "Virtual",
    date: "2025-04-10T18:00:00Z",
    ticketPrice: 19.99,
    capacity: 200,
    registered: 180,
  },
];

// 18. Weather Records
const fakeWeather = [
  {
    id: "weather1",
    location: "London, UK",
    date: "2025-03-11T00:00:00Z",
    temperature: 8,
    humidity: 85,
    condition: "Rainy",
    windSpeed: 15,
  },
  {
    id: "weather2",
    location: "Sydney, AU",
    date: "2025-03-11T00:00:00Z",
    temperature: 25,
    humidity: 60,
    condition: "Sunny",
    windSpeed: 10,
  },
];

// 19. Fitness Goals
const fakeFitness = [
  {
    id: "fit1",
    userId: "social1",
    goal: "Run 5K",
    targetDate: "2025-05-01T00:00:00Z",
    progress: 60,
    createdAt: "2025-02-15T08:00:00Z",
  },
  {
    id: "fit2",
    userId: "social2",
    goal: "Bench Press 100kg",
    targetDate: "2025-06-30T00:00:00Z",
    progress: 45,
    createdAt: "2025-03-01T10:00:00Z",
  },
];

// 20. Music Tracks
const fakeTracks = [
  {
    id: "track1",
    title: "Dreams in Blue",
    artist: "SkyVibes",
    genre: "Electronic",
    duration: 210,
    releaseDate: "2025-02-20T00:00:00Z",
    streams: 125000,
  },
  {
    id: "track2",
    title: "Mountain Echoes",
    artist: "AcousticSoul",
    genre: "Folk",
    duration: 180,
    releaseDate: "2025-03-05T00:00:00Z",
    streams: 87000,
  },
];

// 21. News Articles
const fakeNews = [
  {
    id: "news1",
    headline: "New Space Mission Announced",
    source: "Global Times",
    publishedAt: "2025-03-10T07:00:00Z",
    category: "Science",
    views: 45000,
  },
  {
    id: "news2",
    headline: "Stock Market Hits Record High",
    source: "Finance Daily",
    publishedAt: "2025-03-11T09:00:00Z",
    category: "Business",
    views: 32000,
  },
];

// 22. Recipes
const fakeRecipes = [
  {
    id: "rec1",
    name: "Spaghetti Carbonara",
    cuisine: "Italian",
    prepTime: 20,
    ingredients: ["pasta", "eggs", "bacon"],
    createdAt: "2025-02-15T12:00:00Z",
  },
  {
    id: "rec2",
    name: "Chicken Curry",
    cuisine: "Indian",
    prepTime: 45,
    ingredients: ["chicken", "curry powder", "coconut milk"],
    createdAt: "2025-03-01T14:00:00Z",
  },
];

// 23. Travel Destinations
const fakeDestinations = [
  {
    id: "dest1",
    name: "Paris",
    country: "France",
    rating: 4.7,
    popularAttraction: "Eiffel Tower",
    bestSeason: "Spring",
  },
  {
    id: "dest2",
    name: "Tokyo",
    country: "Japan",
    rating: 4.9,
    popularAttraction: "Shibuya Crossing",
    bestSeason: "Autumn",
  },
];

// 24. Movie Listings
const fakeMovies = [
  {
    id: "mov1",
    title: "Space Odyssey 3000",
    genre: "Sci-Fi",
    duration: 142,
    releaseDate: "2025-02-28T00:00:00Z",
    rating: 8.5,
  },
  {
    id: "mov2",
    title: "The Last Laugh",
    genre: "Comedy",
    duration: 95,
    releaseDate: "2025-03-15T00:00:00Z",
    rating: 7.8,
  },
];

// 25. Book Records
const fakeBooks = [
  {
    id: "book1",
    title: "Code Unleashed",
    author: "Emma Code",
    genre: "Tech",
    pages: 320,
    publishedAt: "2025-01-10T00:00:00Z",
  },
  {
    id: "book2",
    title: "Mystery of the Lost Key",
    author: "John Riddle",
    genre: "Mystery",
    pages: 280,
    publishedAt: "2025-03-01T00:00:00Z",
  },
];

// 26. Sports Teams
const fakeTeams = [
  {
    id: "team1",
    name: "Thunder Hawks",
    sport: "Basketball",
    location: "Chicago",
    wins: 15,
    losses: 3,
    founded: "2010",
  },
  {
    id: "team2",
    name: "Lightning Strikers",
    sport: "Soccer",
    location: "Madrid",
    wins: 12,
    losses: 5,
    founded: "2005",
  },
];

// 27. Restaurant Menus
const fakeMenus = [
  {
    id: "menu1",
    restaurant: "Pizza Palace",
    item: "Margherita Pizza",
    price: 12.99,
    category: "Main",
    available: true,
  },
  {
    id: "menu2",
    restaurant: "Sushi Haven",
    item: "California Roll",
    price: 8.99,
    category: "Sushi",
    available: true,
  },
];

// 28. Charity Donations
const fakeDonations = [
  {
    id: "don1",
    donorId: "user1",
    amount: 50.0,
    charity: "Clean Water Fund",
    donatedAt: "2025-03-05T10:00:00Z",
  },
  {
    id: "don2",
    donorId: "user2",
    amount: 100.0,
    charity: "Education for All",
    donatedAt: "2025-03-10T15:00:00Z",
  },
];

// 29. Task Manager Entries
const fakeTasks = [
  {
    id: "task1",
    userId: "user1",
    title: "Finish Report",
    dueDate: "2025-03-15T17:00:00Z",
    status: "In Progress",
  },
  {
    id: "task2",
    userId: "user2",
    title: "Team Meeting",
    dueDate: "2025-03-12T14:00:00Z",
    status: "Pending",
  },
];

// 30. Stock Market Data
const fakeStocks = [
  {
    id: "stock1",
    symbol: "TSC",
    company: "TechStar Corp",
    price: 145.67,
    change: 2.34,
    updatedAt: "2025-03-11T12:00:00Z",
  },
  {
    id: "stock2",
    symbol: "FNB",
    company: "Food & Beverage Inc",
    price: 78.9,
    change: -0.45,
    updatedAt: "2025-03-11T12:00:00Z",
  },
];

// Export all 30 categories
export const users = fakeUsers;
export const products = fakeProducts;
export const categories = fakeCategories;
export const orders = fakeOrders;
export const reviews = fakeReviews;
export const payments = fakePayments;
export const cartItems = fakeCartItems;
export const promotions = fakePromotions;
export const shipping = fakeShipping;
export const wishlist = fakeWishlist;
export const socialUsers = fakeSocialUsers;
export const courses = fakeCourses;
export const patients = fakePatients;
export const gamers = fakeGamers;
export const jobs = fakeJobs;
export const posts = fakePosts;
export const events = fakeEvents;
export const weather = fakeWeather;
export const fitness = fakeFitness;
export const tracks = fakeTracks;
export const news = fakeNews;
export const recipes = fakeRecipes;
export const destinations = fakeDestinations;
export const movies = fakeMovies;
export const books = fakeBooks;
export const teams = fakeTeams;
export const menus = fakeMenus;
export const donations = fakeDonations;
export const tasks = fakeTasks;
export const stocks = fakeStocks;
