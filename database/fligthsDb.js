const Flights = require("../models/flights")
const Flights2 = require("../models/flights2")

const fligthsDb = async () => {
  try {
    const resultado = await Flights.find().lean()
    if (!resultado.length) {
      flightsDetails.forEach(async e => {
        const create = new Flights({
          destination: e[0],
          airport: e[1],
          flightId: e[2],
          departs: e[3],
          status: e[4],
          gate: e[5],
          date: e[6],
        })
        await create.save()
      })
    }
    const resultado2 = await Flights2.find().lean()
    if (!resultado2.length) {
      flightsDetails2.forEach(async e => {
        const create = new Flights2({
          destination: e[0],
          airport: e[1],
          flightId: e[2],
          departs: e[3],
          status: e[4],
          gate: e[5],
          date: e[6],
        })
        await create.save()
      })
    }
  } catch (error) {
    console.log("error at create flights database", error)
  }
}

const flightsDetails = [
  ["Brasil", "Delta", 2622, "5:05 PM", "On Time", "B11", "26/10/2022"],
  ["Brasil", "Frontier", 1699, "5:57 PM", "On Time", "A14", "26/10/2022"],
  [
    "Puerto Rico",
    "Allegiant",
    1510,
    "12:30 PM",
    "On Time",
    "A21",
    "26/10/2022",
  ],
  ["Puerto Rico", "American", 3949, "5:00 PM", "On Time", "B28", "26/10/2022"],
  ["Chile", "American", 110, "10:50 AM", "On Time", "B1", "26/10/2022"],
  ["Chile", "American", 2317, "6:05 PM", "On Time", "B2", "26/10/2022"],
  ["Bolivia", "American", 559, "10:10 AM", "On Time", "B25", "26/10/2022"],
  ["Paraguay", "American", 4913, "1:25 PM", "On Time", "B18", "26/10/2022"],
  ["Bolivia", "Delta", 1328, "4:30 PM", "On Time", "B17", "26/10/2022"],
  ["Uruguay", "Delta", 5141, "3:30 PM", "On Time", "B20", "26/10/2022"],
  ["Uruguay", "Delta", 5129, "5:56 PM", "On Time", "B24", "26/10/2022"],
  ["Mexico", "O'Hare United", 3556, "6:00 AM", "On Time", "A8", "26/10/2022"],
  [
    "Mexico",
    "O'Hare American",
    3356,
    "12:20 PM",
    "On Time",
    "B24",
    "26/10/2022",
  ],
  ["Mexico", "O'Hare United", 4698, "1:32 PM", "On Time", "A13", "26/10/2022"],
  [
    "Mexico",
    "O'Hare American",
    4174,
    "1:50 PM",
    "On Time",
    "B28",
    "26/10/2022",
  ],
  ["Mexico", "O'Hare United", 4649, "6:08 PM", "On Time", "A11", "26/10/2022"],
  [
    "Mexico",
    "O'Hare American",
    5961,
    "6:45 PM",
    "On Time",
    "B18",
    "26/10/2022",
  ],
  [
    "Mexico",
    "Midway Southwest",
    702,
    "5:50 AM",
    "On Time",
    "A11",
    "26/10/2022",
  ],
  [
    "Mexico",
    "Midway Southwest",
    506,
    "12:05 PM",
    "On Time",
    "A11",
    "26/10/2022",
  ],
  [
    "Mexico",
    "Midway Southwest",
    1419,
    "2:15 PM",
    "On Time",
    "B6",
    "26/10/2022",
  ],
  ["Mexico", "Midway Southwest", 947, "4:10 PM", "On Time", "B6", "26/10/2022"],
  [
    "Mexico",
    "Midway Southwest",
    1955,
    "7:10 PM",
    "On Time",
    "A11",
    "26/10/2022",
  ],
  ["Canada", "Worth American", 1502, "1:49 PM", "On Time", "B22", "26/10/2022"],
  ["Canada", "Worth American", 2166, "5:20 PM", "On Time", "B22", "26/10/2022"],
  ["Peru", "Frontier", 647, "9:04 AM", "On Time", "A15", "26/10/2022"],
  ["Peru", "United", 479, "3:29 PM", "On Time", "A11", "26/10/2022"],
  ["Peru", "Frontier", 649, "4:27 PM", "On Time", "A14", "26/10/2022"],
  ["Colombia", "Delta", 4755, "2:09 PM", "On Time", "B19", "26/10/2022"],
  ["Colombia", "Delta", 4756, "5:45 PM", "On Time", "B23", "26/10/2022"],
  ["Venezuela", "Allegiant", 381, "5:00 PM", "On Time", "A19", "26/10/2022"],
]

const flightsDetails2 = [
  ["Brasil", "Delta", 2585, "11:11 AM", "On Time", "B11", "26/10/2022"],
  ["Brasil", "Delta", 2280, "1:35 PM", "On Time", "B11", "26/10/2022"],
  ["Brasil", "Delta", 2842, "3:15 PM", "On Time", "B6", "26/10/2022"],
  ["Puerto Rico", "American", 4245, "7:28 AM", "On Time", "B22", "26/10/2022"],
  ["Puerto Rico", "Delta", 4650, "7:34 AM", "On Time", "B15", "26/10/2022"],
  ["Chile", "American", 699, "5:00 AM", "On Time", "A11", "26/10/2022"],
  ["Bolivia", "American", 2137, "7:00 AM", "On Time", "B10", "26/10/2022"],
  ["Paraguay", "Delta", 4508, "4:00 PM", "On Time", "B18", "26/10/2022"],
  ["Uruguay", "Delta", 5556, "7:51 AM", "On Time", "B20", "26/10/2022"],
  ["Uruguay", "Delta", 5543, "11:03 AM", "On Time", "B20", "26/10/2022"],
  ["Uruguay", "Delta", 3332, "12:35 PM", "On Time", "B28", "26/10/2022"],
  [
    "Mexico",
    "O'Hare American",
    3941,
    "7:05 AM",
    "On Time",
    "B28",
    "26/10/2022",
  ],
  ["Mexico", "O'Hare United", 3440, "7:15 AM", "On Time", "A11", "26/10/2022"],
  ["Mexico", "O'Hare United", 3754, "11:18 AM", "On Time", "A11", "26/10/2022"],
  ["Canada", "Worth American", 1970, "6:00 AM", "On Time", "B22", "26/10/2022"],
  ["Canada", "Worth American", 1486, "9:02 AM", "On Time", "B24", "26/10/2022"],
  ["Peru", "Allegiant", 367, "7:00 AM", "On Time", "A21", "26/10/2022"],
  ["Peru", "Delta", 518, "7:00 AM", "On Time", "B17", "26/10/2022"],
  ["Peru", "United", 749, "8:14 AM", "On Time", "A13", "26/10/2022"],
  ["Colombia", "Delta", 5027, "6:05 AM", "On Time", "B23", "26/10/2022"],
  ["Colombia", "Delta", 4800, "10:25 AM", "On Time", "B19", "26/10/2022"],
  ["Venezuela", "Delta", 2260, "7:20 AM", "On Time", "B2", "26/10/2022"],
]

module.exports = fligthsDb
