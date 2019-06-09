let User = require('../models/UserModel')



module.exports = {


        create:(req,res)=>{

            let user = new User({

                FirstName: req.body.FirstName,
                LastName: req.body.LastName,
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
        },

        read: async (req,res)=>{

                const users = await User.find();

                if(!users)
                        res.json({success:false,result:"No user found"})
                else
                        res.json({success:true,result:users})

        },

        update: async (req,res)=>{

                const id = req.params.id;
                User.findById(id)
                        .then(user=>{

                                if(!user)  res.json({success:false, result:"user does not exist"});

                                user.FirstName = req.body.FirstName,
                                user.LastName = req.body.LastName,
                                user.Email = req.body.Email,
                                user.Password = req.body.Password,
                                user.Age = req.body.Age,
                                user.Team = req.body.Team
                                
                                user.save()
                                        .then(result=>{
                                                res.json({success:true,result:result})
                                        })
                                        .catch(err=>{

                                                res.json({success:false,result:err})
                                        })
                        })

        },
        

        delete: (req,res)=>{

                const id = req.params.id;

                User.findByIdAndDelete(id)
                        .then(user=>{

                                res.json({success:true,result:user})
                        })
                        .catch(err=>{
                                res.json({success:false,result:err})
                        })


        }


}