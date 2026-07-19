import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const PostSchema = new mongoose.Schema({}, { collection: 'posts', strict: false });
const Post = mongoose.models.Post || mongoose.model('Post', PostSchema);

async function run() {
  const URI = process.env.MONGODB_URI;
  try {
    await mongoose.connect(URI);
    console.log('Connected to MongoDB.');
    const result = await Post.deleteMany({});
    console.log('Cleared existing posts from DB. Count:', result.deletedCount);
  } catch (error) {
    console.error(error);
  } finally {
    await mongoose.disconnect();
  }
}

run();
