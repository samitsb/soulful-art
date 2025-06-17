import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  email:String,
  phoneNumber:Number,
  password:String,
  role:String,
  firstName:String,
  lastName:String  
});

const User = mongoose.model('User', userSchema);
export default User;