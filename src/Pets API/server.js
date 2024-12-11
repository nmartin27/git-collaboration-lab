// const dotenv = require("dotenv");
// dotenv.config();
// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const Pet = require("./models/pets.js");
// const cors = require('cors');
// app.use(cors());

// mongoose.connect(process.env.MONGODB_URI);

// mongoose.connection.on("connected", () => {
//   console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
// });

// app.use(express.json());

// // Routes go here

// app.post("/pets", async (req, res) => {
//   const createdPet = await Pet.create(req.body);
//   res.json(createdPet);
// });

// app.get("/pets", async (req, res) => {
//   const foundPets = await Pet.find();
//   res.json(foundPets);
// });

// app.delete("/pets/:petsId", async (req, res) => {
//   const deletePet = await Pet.findByIdAndDelete(req.params.petsId);
//   res.json(deletePet);
// });

// app.put("/pets/:petId", async (req, res) => {
//   const updatePet = await Pet.findByIdAndUpdate(
//     req.params.petId,
//     req.body,
//     {new:true}
//   );
//   res.json(updatePet);
// });

// // app.get('/'. async (req, res) => {
// //     const apiResponse = await fetch (`http://localhost:3000/`)
// //     const data = await apiResponse.json(
// //         res.json(data)
// //     )
// // })

// app.listen(3000, () => {
//   console.log("The express app is ready!");
// });
