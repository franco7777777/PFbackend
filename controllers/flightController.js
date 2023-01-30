const Flights = require("../models/flights")

const flightsGet = async (req, res) => {
  try {
    const resultado = await Flights.find().lean()
    return res.json(resultado)
  } catch (error) {
    console.log("error at get Flights", error)
  }
}

const flightsCreate = async (req, res) => {
  try {
    const newFlights = new Flights(req.body)
    await newFlights.save()
    return res.send("Flights created")
  } catch (error) {
    return res.send(console.log("error Flights creacion", error))
  }
}

const flightsDelete = async (req, res) => {
  try {
    const { id } = req.params
    await Flights.findByIdAndDelete(id)
    return res.json("Flights deleted")
  } catch (error) {
    return res.send("error at delete Flights", error)
  }
}

const flightsUpdate = async (req, res) => {
  try {
    const { id } = req.params
    await Flights.findByIdAndUpdate(id, req.body)
    return res.send("listo")
  } catch (error) {
    return res.send("error at update Flights", error)
  }
}

module.exports = { flightsGet, flightsUpdate, flightsDelete, flightsCreate }
