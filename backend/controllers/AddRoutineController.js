const {Nome} = require("../models/user")
const addRoutine = async(req, res) => {
   const tasks = JSON.parse(req.body.tasks)
   try{
      const newUser = new Nome({
         name: [...tasks.tasks],
         category: "a"
      })

      await newUser.save()
   } catch(e){
      console.log(e)
   }


   console.log(tasks.tasks)
 
   res.json({ message: 'Dados recebidos com sucesso' });
}

module.exports = addRoutine