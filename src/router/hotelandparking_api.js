import express from "express";
import { addhotelandparking, getAllhotelandparkings, gethotelandparkingbyCity, updateHotelAndParking, deleteHotelAndParking,getHotelAndParkingBySearch } from "../controller/hotelandparking.js"


const Router = express.Router();


// Add Hotel And Parking
Router.post('/addhotelandparking', addhotelandparking);
// Get All Hotel And Parking
Router.get('/getallhotelandparkings', getAllhotelandparkings);
// Get Hotel And Parking By Specific City
Router.get('/gethotel/:city', gethotelandparkingbyCity);
// Search Hotel And Parking By Search Query
Router.get('/search', getHotelAndParkingBySearch);
// Update Hotel And Parking
Router.patch('/updatehotelandparking/:id', updateHotelAndParking);
// Delete Hotel And Parking
Router.delete('/deletehotelandparking/:id', deleteHotelAndParking);

// Exporting Router
export default Router;
