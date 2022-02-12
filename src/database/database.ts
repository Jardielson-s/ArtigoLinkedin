import mongoose from 'mongoose';

const url = process.env.URL_MONGO || 'mongodb://localhost:27017/admin';
mongoose.connect(url,{
});

export default mongoose;