import mongoose from "mongoose";


// const   dbConnect=async () =>{
//     try {
//       await mongoose.connect(process.env.MONGO_URL);
//       console.log("server is connected");
//     } catch (error) {
//     //   console.log("Something goes wrong?");
//       console.log(error);
//     }
// }

// export default dbConnect


const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,

    });

    console.log(`MongoDB Connected `);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default dbConnect;





//  async function  dbConnect(){
//     try {
//       await mongoose.connect(process.env.MONGO_URL , { useNewUrlParser: true, useUnifiedTopology: true });
//       const connection = mongoose.connection;
//       // mongoose.connection.removeAllListeners();
//       console.log("khalid MOngoDB Connected Successfully");


//       connection.on("Connected", () => {
//         console.log("MOngoDB Connected Successfully");
//       });
//       connection.on("error", (err) => {
//         console.log("MOngoDB Error !! " + err);
//       });
//     } catch (error) {
//       console.log("Something goes wrong?");
//       console.log(error);
//       process.exit();
//     }
// }




