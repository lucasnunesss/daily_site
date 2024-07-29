const mongoose = require('mongoose');


async function connectDB(){
  try {
    await mongoose.connect(process.env.DB);
    console.log('foi')
  } catch (error) {
    handleError(error);
  }
}

const empSchema = new mongoose.Schema({
  name: {
    type: Array,
    required: true,
  },
  category: {
    type: String,
    required: true
  }

})


const Nome = mongoose.model('Artist', empSchema)
module.exports = {connectDB, Nome}