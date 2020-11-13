const mongoose = require('mongoose');

const database = "database";

mongoose.connect(`mongodb://localhost/${database}`, {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(res => console.log("You are now in the mainframe!"))
    .catch(err => console.log(`Something went wrong...${err}`))