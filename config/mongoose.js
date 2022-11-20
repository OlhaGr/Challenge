const mongoose = require('mongoose')

const db = 'mongodb+srv://OlhaHr:Oh777@cluster33.drq0ifa.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})


.then(res => console.log("connect in DB"))
.catch(err => console.log(err))

