import mongoose from 'mongoose'
async function connect(){
   const res = await mongoose.connect('mongodb://localhost:27017/soulfulartdb');
   if(res) console.log("connected to mongodb successfully");
}
export default connect;