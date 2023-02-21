const Jobs=require("../models/job")

const getJournals=async(req,res)=>{
try {
    const jobs = await Jobs.find({createdBy: req.user.userId});
    res.status(200).json({noOfJobs: jobs.length,jobs});
    
} catch (error) {
    console.log(error);
    res.json({error})

}

}

const  getsingleJournal=async(req,res)=>{  
const {jobId}=req.params;
try {
const job= await Jobs.findOne({ createdBy: req.user.userId, _id:jobId})
if(!job){
    return res.status(404).json({success:false, message: `job with the ${jobId} was not found`})
} 

 res.status(200).json({job})
    
} catch (error) {
    console.log(error);
    res.json({error})
}

}

const createJournal=async(req,res)=>{
// company ,position, createdBy
const {company, position}=req.body
req.body.createdBy=req.user.userId;
console.log(req.body, req.user);
if(!company || !position){
    return res.status(400).json({success:false,message:"please provide neccesary information"})
}

try {
    const job= await Jobs.create(req.body);
    res.status(201).json({success:true, job})
} catch (error) {
    console.log(error);
    res.json({error});
    
}
}
const updateJournals= async(req,res)=>{ 
    
  const {jobId}=req.params;
  const {company,position}=req.body;

try {
    const job= await  Jobs.findOneAndUpdate({createdBy: req.user.userId,  _id:jobId},req.body,{new:true,runValidators:true,})
    res.status(200).json({success:true,message:"job has been updated",job})
} catch (error) {
    console.log(error);
    res.json({error})
}

}

const  deleteJournal= async(req,res)=>{
    const {jobId}=req.params;
    try {
    const job= await Jobs.findOneAndRemove({ createdBy:req.user.userId, _id:jobId})
    if(!job){
        return res.status(404).json({success:false, message: `job with the ${jobId} was not found`})
    }
     res.status(200).json({job})
        
    } catch (error) {
        console.log(error);
        res.json({error})
    }
    
    }


module.exports ={
    getJournals,
    getsingleJournal,
        createJournal,
        updateJournals,
        deleteJournal
}