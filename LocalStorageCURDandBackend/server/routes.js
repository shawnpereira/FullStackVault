const express = require("express");
const router = express.Router();

const Work = require("./model.js");

// POST
router.post("/", async (req, res) => {
  try {
    const newTitle = {
      title: req.body.title,
    };
    const title = await Work.create(newTitle);
    return res.status(201).send(title);
  } catch (error) {
    console.error(error.message);
    return res.status(500).send({ message: error.message });
  }
});
// GET

router.get("/", async (request, response) => {
  try {
    const work = await Work.find({});

    return response.status(200).json({
      count: work.length, // so this will display the number of tasks present

      display: work, // this will display tasks so we have just structured it properly
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});
//
//Get only one task
//
//
router.get("/:id", async (request, response) => {
  try {
    // to test add 65ecc788df735ba00f9c3c46 front of work/
    //65ecc788df735ba00f9c3c46 is a id of existing work copied from database of a task for testing purpose
    const { id } = request.params;

    const work = await Work.findById(id);

    return response.status(200).json(work);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// PUT
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Work.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).json({ message: "Work not found" });
    }

    return res.status(200).send({ message: "Work updated successfully" });
  } catch (error) {
    console.error(error.message);
    return res.status(500).send({ message: error.message });
  }
});
//delete
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Work.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: "Work not found" });
    }

    return response.status(200).send({ message: "Work deleted successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});
module.exports = router;
