import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { mockPosts } from './mockData.js';

dotenv.config();

const PostSchema = new mongoose.Schema({
  title: String,
  slug: String,
  excerpt: String,
  content: String,
  coverImage: String,
  author: String,
  category: {
    _id: String,
    name: String,
    slug: String,
    description: String,
    type: String
  },
  isPublished: Boolean,
  createdAt: Date
}, { collection: 'posts' });

const Post = mongoose.models.Post || mongoose.model('Post', PostSchema);

async function run() {
  const URI = process.env.MONGODB_URI;
  if (!URI) {
    console.error('MONGODB_URI not found in env');
    process.exit(1);
  }

  try {
    await mongoose.connect(URI);
    console.log('Connected to MongoDB.');

    // 1. Clear existing posts (to delete test posts "1", "2", etc.)
    const deleteResult = await Post.deleteMany({});
    console.log(`Cleared existing posts from DB. Count: ${deleteResult.deletedCount}`);

    // 2. Map posts to exclude _id (or keep it if it is a string) and save
    const postsToInsert = mockPosts.map(post => {
      const { _id, ...rest } = post;
      return rest;
    });

    const insertResult = await Post.insertMany(postsToInsert);
    console.log(`Successfully seeded ${insertResult.length} SEO-optimized posts into database!`);
  } catch (error) {
    console.error('Error during seeding:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected.');
  }
}

run();
