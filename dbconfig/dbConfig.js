import mongoose from 'mongoose';
import consoleLog from '@/lib/consoleLog';

const dbConnect = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        consoleLog(`MongoDB Connected `);
    } catch (error) {
        consoleLog(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default dbConnect;
