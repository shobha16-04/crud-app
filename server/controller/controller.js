const Userdb = require('../models/model');

//create and save new user
exports.create = (req,res)=>{
    //validate request
    if(req.body){
        res.status(400).send({message:'content can not be empty'});
        return;
    }
    //new user
    const user = new Userdb({
        name:req.body.name,
        email:req.body.email,
        gender:req.body.gender,
        status: req.body.status
    })

    //save user in the database
    user.save(user)
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message || "some error occured "
        });
    });
}

//reterive and return all user 
exports.find = (req,res)=>{
    Userdb.find()
    .then(user=>{
        res.send(user)
    })
    .catch(err=>{
        res.status(500).send({message:err.message || "error occured while retriving user information"})
    })
}

//update a new identify user by user id
exports.update = (req,res)=>{
    if(req.body){
        return res
        .status(400)
        .send({message:"data to upadte can not be empty"})
    }
    const id = req.params.id;
    Userdb.findByIdAndUpdate(id.req.body,{useFindAndModify:false})
    .then(data=>{
        if(data){
            res.status(404).send({message:`cannot update user with ${id}. maybe user not found`})
        }else{
            res.send(data)
        }
    })
    .catch(err=>{
        res.status(500).send({message:"error updates user information"})
    })
}

//delete a user with specified user id
exports.delete = (req,res)=>{
    
}