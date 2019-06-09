let User = require('../models/UserModel')



module.exports = {


        create:(req,res)=>{

            let user = new User({

                FirstName: req.body.FirstName,
                LastName: req.body.lastName,
                Email: req.body.Email,
                Password: req.body.Password,
                Age: req.body.Age,
                Team: req.body.Team
            })

            user.save()
                .then(result=>{
                        res.json({success:true,result:result})
                })
                .catch(err=>{

                        res.json({success:false, result:err})
                })
        }


}