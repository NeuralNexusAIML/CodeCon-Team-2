const express = require('express');
const app = express();
const port=8000;
const bodyparser = require('body-parser');
const cors=require('cors');
const user = require('./Controller/Userdetails')
const job = require('./Controller/Jobdetails')
const apply = require('./Controller/Applydetails')

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

app.use(cors())

app.post('/register',user.registerdetails);

app.post('/login',user.checkLoginDetails);

app.post('/addjobdetails',job.Addnewjobdetails);

app.post('/applyforjob',apply.Applyforthisjob);

app.get('/myjobs',job.GetCompanyJobs);

app.get('/viewjobs',job.Viewalljobs);

app.get('/job/:id',job.Applyforthis);




app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(`server running at port ${port}`);
    }

})