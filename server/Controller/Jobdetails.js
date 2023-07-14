const jobmodel = require('../Models/Addjobdetails');

module.exports.Addnewjobdetails = async (req,res)=>{
    console.log(req.body);
    const title=req.body.title;
    const orgname=req.body.orgname;
    const location=req.body.location;
    const time=req.body.time;
    const capacity=req.body.capacity;
    const skills=req.body.skills;
    const desc=req.body.desc;
    const exp=req.body.exp;

    const entry = new jobmodel({title:title,orgname,location,time,capacity,skills,desc,exp})
    const success =await entry.save()
    if (success){
        return res.send({code:200,message:'succesfully added',id:entry._id})
    }else{
        return res.send({code:500,message:'Error, question not added'})
    }
}

module.exports.GetCompanyJobs = async(req,res)=>{

    const __data = jobmodel.find(orgname)
}

module.exports.Viewalljobs = async(req,res)=>{
    const __data = await jobmodel.find({});
    if (__data){
        return res.send({code:200,message:'success',data:__data})
    }else{
        return res.send({code:400,message:'error'})
    }
}

module.exports.Applyforthis = async (req,res)=>{
    const __data =await jobmodel.findById(req.params.id)
    
    if  (__data){
        return res.send({code:200,message:'success',data:__data})
    }else{
        return res.send({code:400,message:'error'})
    }
}