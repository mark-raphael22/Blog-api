const  router =require('express').Router();

const {
    getJournals,
    getsingleJournal,
        createJournal,
        updateJournals,
        deleteJournal
}=require("../Controller/journal")

router.route("/").get(getJournals).post(createJournal);
router.route("/:jobId").get(getsingleJournal).patch(updateJournals).delete(deleteJournal);

module.exports = router