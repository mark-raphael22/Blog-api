const  router =require('express').Router();

const {
    getJournals,
    getsingleJournal,
        createJournal,
        updateJournals,
        deleteJournal
}=require("../Controller/journal")

router.route("/").get(getJournals).post(createJournal);
router.route("/:journalId").get(getsingleJournal).patch(updateJournals).delete(deleteJournal);

module.exports = router