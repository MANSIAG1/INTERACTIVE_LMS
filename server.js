import {config} from 'dotenv';
config();

import { v2 } from 'cloudinary';
import app from './app.js';
import connectToDB from './config/db.Connection.js'
import Razorpay from 'razorpay';

// Cloudinary configuration
v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  // Razorpay configuration
export const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});


const PORT=process.env.PORT || 5000;

app.listen(PORT,async()=>{
    await connectToDB();
    console.log(`App is runing at http:localhost:${PORT}`);
})