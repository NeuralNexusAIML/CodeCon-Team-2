const applymodel = require('../Models/Userapplications');

module.exports.Applyforthisjob = async (req,res)=>{
    console.log(req.body);
    const orgname=req.body.orgname;
    const email=req.body.email;
    const phoneno=req.body.phoneno;
    const job=req.body.job;
    const exp=req.body.exp;
    const city=req.body.city;
    const country=req.body.country;
    const resume=req.body.resume;
    const entry = new applymodel({orgname:orgname,email,phoneno,job,exp,city,country,resume})
    const success =await entry.save()
    if (success){
        return res.send({code:200,message:'succesfully added',id:entry._id})
    }else{
        return res.send({code:500,message:'Error, question not added'})
    }
}


