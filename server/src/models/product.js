import mongoose from "mongoose";
import { Schema } from "mongoose";



const ProductSchema = new Schema({
  // --- Basic Product Information ---
  name: {
    type: String,
    required: true, // Product name is essential
    trim: true,      // Remove leading/trailing whitespace
    maxlength: 100   // Keep names concise
  },
  slug: { // URL-friendly name for cleaner URLs
    type: String,
    unique: true,
    lowercase: true,
    index: true
  },
  description: {
    type: String,
    required: true,
    trim: true,
    minlength: 20 // Ensure some detail
  },
  price: {
    type: Number,
    required: true,
    min: 0 // Price cannot be negative
  },

  // --- Art/Sculpture Specifics ---
  artist: {
    type: Schema.ObjectId, // Reference to the artist (assuming you have a User/Artist model)
    ref: 'User', // OR 'Artist' if you have a dedicated Artist model
    required: true
  },
  category: { // e.g., 'painting', 'sculpture', 'photography'
    type: String,
    required: true,
    enum: ['painting', 'sculpture', 'drawing', 'photography', 'print', 'other'], // Simplified categories
    trim: true
  },
  medium: { // e.g., 'Oil', 'Bronze', 'Digital'
    type: String,
    required: true,
    trim: true
  },
  dimensions: { // Simple string for dimensions (e.g., "24x36 inches", "10x15x8 cm")
    type: String,
    trim: true,
    default: 'Dimensions not specified'
  },
  // We'll omit 'weight' for simplicity in this model, but you can add it back if needed.

  // --- Images ---
  mainImage: { // Primary product image URL
    type: String,
    required: true    
  },
  images: [{ // Array of additional image URLs
    type: String
    
  }],

  // --- Inventory & Availability ---
  stock: {
    type: Number,
    required: true,
    min: 0,
    default: 1 // Often 1 for unique art pieces
  },
  isAvailable: {
    type: Boolean,
    default: true
  },

  // --- Timestamps ---
  createdAt: {
    type: Date,
    default: Date.now,
    select: false // Hide by default in query results
  }
});

// --- Mongoose Middleware ---

// Generate slug from name before saving
ProductSchema.pre('save', function(next) {
  if (this.isModified('name') || !this.slug) {
    this.slug = this.name.toLowerCase()
                         .replace(/[^a-z0-9]+/g, '-')
                         .replace(/^-|-$/g, '');
  }
  next();
});

// Automatically populate artist details on find queries
ProductSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'artist',
    select: 'name profilePicture' // Only get artist's name and profile picture
  });
  next();
});


const Product = mongoose.model('Product', ProductSchema);

export default Product;