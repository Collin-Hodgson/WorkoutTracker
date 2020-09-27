const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workout", (req, res) => {
  Workout.create({})
    .then((Workout) => {
      res.json(Workout);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/api/workout/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
    // "runValidators" will ensure new exercises meet our schema requirements
    { new: true, runValidators: true }
  )
    .then((Workout) => {
      res.json(Workout);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/api/workout", (req, res) => {
  Workout.find()
    .then((Workouts) => {
      res.json(Workouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/api/workout/range", (req, res) => {
  Workout.find({})
    .limit(7)
    .then((Workouts) => {
      console.log(Workouts);
      res.json(Workouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.delete("/api/workout", ({ body }, res) => {
  Workout.findByIdAndDelete(body.id)
    .then(() => {
      res.json(true);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
