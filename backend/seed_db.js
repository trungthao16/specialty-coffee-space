import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Category from './models/Category.js';
import Post from './models/Post.js';
import { mockPosts } from './mockData.js';

dotenv.config();

async function run() {
  const URI = process.env.MONGODB_URI;
  if (!URI) {
    console.error('MONGODB_URI not found in env');
    process.exit(1);
  }

  try {
    await mongoose.connect(URI);
    console.log('Connected to MongoDB.');

    // 1. Ensure blog category exists in the database
    let category = await Category.findOne({ slug: 'tin-tuc-chia-se' });
    if (!category) {
      category = await Category.create({
        name: 'Tin tức & Chia sẻ',
        slug: 'tin-tuc-chia-se',
        description: 'Thông tin, kiến thức về cà phê specialty',
        type: 'post',
      });
      console.log('Created "Tin tức & Chia sẻ" category.');
    } else {
      console.log('Found existing category:', category.name);
    }

    // 2. Clear existing posts
    const deleteResult = await Post.deleteMany({});
    console.log(`Cleared existing posts from DB. Count: ${deleteResult.deletedCount}`);

    // 3. Map posts to set their category field to the category document's ObjectId
    const postsToInsert = mockPosts.map(post => {
      const { _id, ...rest } = post;
      return {
        ...rest,
        category: category._id, // Assign the correct ObjectId from DB
      };
    });

    const insertResult = await Post.insertMany(postsToInsert);
    console.log(`Successfully seeded ${insertResult.length} SEO-optimized posts into database with correct category references!`);
  } catch (error) {
    console.error('Error during seeding:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected.');
  }
}

run();
