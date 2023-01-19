const mongoose = require('mongoose')


mongoose.set("strictQuery", false);

const connectionParams = {
    useNewUrlParser: true,
    useunifiedTopology: true,
}

mongoose.connect(`mongodb+srv://admin:admin12345@cluster0.et115mk.mongodb.net/?retryWrites=true&w=majority`,
    connectionParams
)
    .then(() => {
        console.log("Database Connection successfully....");
    })
    .catch(error => {
        // console.log(error);
        console.log("database connection failed")
    })
