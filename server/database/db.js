import mongoose from 'mongoose'



const URL = 'mongodb+srv://Dhew:123@cluster0.kfnsc.mongodb.net/Cluster0?retryWrites=true&w=majority'


const Connection = async () => {
    try {
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
        console.log("Connected")
    } catch (error) {
        console.log("Error1")
    }
}

export default Connection