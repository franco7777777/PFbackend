const { Router } = require("express")

const {
  usertransaction,
  userCreate,
  userGet,
  userDelete,
  userUpdate,
} = require("./../controllers/userController")

const {
  flightsGet,
  flightsUpdate,
  flightsDelete,
  flightsCreate,
} = require("../controllers/flightController")

const {
  flights2Get,
  flights2Update,
  flights2Delete,
  flights2Create,
} = require("../controllers/flightController2")

const {
  flightsAvailableGet,
  flightsAvailableUpdate,
  flightsAvailableDelete,
  flightsAvailableCreate,
} = require("../controllers/flightsAvailableController")

const login = require("../controllers/loginController")
const {
  packageGet,
  packageCreate,
} = require("../controllers/packageController")

const router = Router()

router.get("/login", login)

router.get("/package", packageGet)
router.post("/package", packageCreate)

router.get("/user", userGet)
router.post("/user", userCreate)
router.put("/user/:id", userUpdate)
router.delete("/user/:id", userDelete)

router.post("/transaction/:id", usertransaction)

router.get("/flights", flightsGet)
router.post("/flights", flightsCreate)
router.put("/flights/:id", flightsUpdate)
router.delete("/flights/:id", flightsDelete)

router.get("/flights2", flights2Get)
router.post("/flights2", flights2Create)
router.put("/flights2/:id", flights2Update)
router.delete("/flights2/:id", flights2Delete)

router.get("/flightsAvailable", flightsAvailableGet)
router.post("/flightsAvailable", flightsAvailableCreate)
router.put("/flightsAvailable/:id", flightsAvailableUpdate)
router.delete("/flightsAvailable/:id", flightsAvailableDelete)

module.exports = router
