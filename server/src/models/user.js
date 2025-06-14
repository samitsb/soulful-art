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
const user = mongoose.model('user', userSchema);
export default user;