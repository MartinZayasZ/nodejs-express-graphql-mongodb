import mongoose from "mongoose";

export async function connect() {

    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect('mongodb://localhost/admin', {
            useNewUrlParser: true,
            auth: {
                "authSource": "admin"
            },
            user: "mongo",
            pass: "password",
        })
        console.log('>>> DB is connected')
    }
    catch(e) {
        console.log('Something goes wrong!')
        console.log(e)
    }
    
}


