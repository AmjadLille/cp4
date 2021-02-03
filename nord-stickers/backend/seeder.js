import dotenv from 'dotenv';
import users from './data/users.js';
import stickers from './data/stickers.js';
import User from './models/userModel.js';
import Sticker from './models/stickerModel.js';
import Order from './models/orderModel.js';
import connectDB from './config/db.js';

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Sticker.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleStickers = stickers.map((sticker) => {
      return { ...sticker, user: adminUser };
    });

    await Sticker.insertMany(sampleStickers);
    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`${errer}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Sticker.deleteMany();
    await User.deleteMany();

    console.log('Data Destroyed!');
    process.exit();
  } catch (error) {
    console.error(`${errer}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
