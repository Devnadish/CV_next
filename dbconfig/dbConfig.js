import mongoose from "mongoose";


export async function  connect(){
    try {

        mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        const connection =mongoose.connection
        connection.on('Connected',()=>{
            console.log('MOngoDB Connected Successfully')
        })
        connection.on('error',(err)=>{console.log('MOngoDB Error !! ' + err )});
        process.exit();
    } catch (error) {
        console.log("Something goes wrong?")
        console.log(error)
    }

}