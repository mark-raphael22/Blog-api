//CRUD

const getJournals=async(req,res)=>{
    res.send("get all journal")

}

const  getsingleJournal=async(req,res)=>{
    res.send("get single jornal")
}

const createJournal=async(req,res)=>{
    res.send("create journal")
}

const updateJournals= async(req,res)=>{
    res.send("update journal")
}

const  deleteJournal= async(req,res)=>{
    res.send("delete journal")
};

module.exports ={
    getJournals,
    getsingleJournal,
        createJournal,
        updateJournals,
        deleteJournal
}