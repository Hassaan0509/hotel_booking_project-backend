import mongoose from "mongoose";

// creating a schema
const HotelandParkingschema = new mongoose.Schema({
  hotel_name: {
    type: String,
    required: true
  },
  hotel_title: {
    type: String,
    required: true
  },
  hotel_rating: {
    type: Number,
    required: true
  },
  hotel_description: {
    type: String,
    required: true
  },
  hotel_photos: [
    {
      type: String
    }
  ],
  rooms: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room",
    },
  ],
  hotel_city: {
    type: String,
    required: true,
  },
  hotel_country: {
    type: String,
    required: true,
  },
  hotel_address: {
    type: String,
    required: true,
  },
  parking_name: {
    type: String,
    required: true,
  },
  parking_title: {
    type: String,
    required: true,
  },
  parking_total_slots: {
    type: Number,
    required: true,
  },
  parking_booked_slots: {
    type: Number,
  },
  parking_description: {
    type: String,
    required: true,
  },
  parking_photos: [
    {
      type: String,
    }
  ],
});

// createing a new collection
const HotelandParking = mongoose.model(
  "Hotel And Parking",
  HotelandParkingschema
);

// export this module
export default HotelandParking;
