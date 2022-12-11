const StudentModel = require('../Student Model/StudentModel')

const UserModel = require('../User model/UserModel')

const {isValidObjectId,isValidRequestBody,isvalidNumber,isValidEnum,isValid} = require('../Validation/validation')


const Createstudent = async function (req, res) {
    try{  
      const userId = req.params.UserId
      const data = req.body
  
      if (!userId)
          return res.status(400).send({ status: false, message: 'userId is required' })
  
          if (!isValidObjectId(userId))

          return res.status(400).send({ status: false, message: " UserId is inValid" })
  
          const checkUser = await UserModel.findOne({ _id: userId })

        if (!checkUser)

          return res.status(400).send({ status: false, message: "user not found" })
  
        if (!isValidRequestBody(data))

          return res.status(400).send({ status: false, message: "Enter data to create Student" })

          let { StudentName, marks, subject ,isDeleted } = data

        if(!isValid(StudentName)){

           return res.status(400).send({status : false , message : "Please enter a valid student name"})
         }

        if(!isvalidNumber(marks)){

          return res.status(400).send({status : false , message : "please enter a valid marks"})
         }

        if(!isValidEnum(subject)){

         return res.status(400).send({status : false , message : "Please enter subject properly"})

         }

        let checkname = await StudentModel.findOne({StudentName : StudentName , subject : subject})

        if(checkname){

          let marksadd = await StudentModel.findOneAndUpdate(
            { StudentName : StudentName , subject : subject},
            { "$set": { "marks" : checkname.marks + data.marks},},
            { new: true }
        )
        return res.status(200).send({ status: true, message: marksadd })
          
        }

        let student = await StudentModel.create(data);

        res.status(201).send({ status: true, message: "User created Successfully", data: student });
      

    }
    
   catch (err) {

   return res.status(500).send({ status: false, message: err.message })

    }
}



module.exports.Createstudent = Createstudent