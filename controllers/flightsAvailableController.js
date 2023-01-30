const FlightsAvailable = require("../models/fligthsAvailable")

const flightsAvailableGet = async (req, res) => {
  try {
    const resultado = await FlightsAvailable.find().lean()
    return res.json(resultado)
  } catch (error) {
    console.log("error at get FlightsAvailable", error)
  }
}

const flightsAvailableCreate = async (req, res) => {
  try {
    const newFlightsAvailable = new FlightsAvailable(req.body)
    await newFlightsAvailable.save()
    return res.send("FlightsAvailable created")
  } catch (error) {
    return res.send(console.log("error FlightsAvailable creacion", error))
  }
}

const flightsAvailableDelete = async (req, res) => {
  try {
    const { id } = req.params
    await FlightsAvailable.findByIdAndDelete(id)
    return res.json("FlightsAvailable deleted")
  } catch (error) {
    return res.send("error at delete FlightsAvailable", error)
  }
}

const flightsAvailableUpdate = async (req, res) => {
  try {
    const { id } = req.params
    await FlightsAvailable.findByIdAndUpdate(id, req.body)
    return res.send("listo")
  } catch (error) {
    return res.send("error at update FlightsAvailable", error)
  }
}

module.exports = {
  flightsAvailableGet,
  flightsAvailableUpdate,
  flightsAvailableDelete,
  flightsAvailableCreate,
}
