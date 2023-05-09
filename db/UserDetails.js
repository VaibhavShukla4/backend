const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  sex: { type: String, enum: ["Male", "Female", "Other"] },
  mobile: {
    type: String,
    validate: {
      validator: function (value) {
        return /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/.test(value);
      },
      message: "Please enter a valid Indian mobile number",
    },
  },
  emergencyContact: {
    type: String,
    validate: {
      validator: function (value) {
        return /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/.test(value);
      },
      message: "Please enter a valid Indian mobile number",
    },
  },
  idType: {
    type: String,
    enum: ["Aadhar", "PAN"],
  },
  govtId: {
    type: String,
    validate: [
      {
        validator: function (value) {
          return this.idType === "Aadhar" && /^\d{12}$/.test(value);
        },
        message: "Govt Id should be a valid 12-digit numeric string for Aadhar",
      },
      // {
      //   validator: function (value) {
      //     return this.idType === "PAN" && /^[A-Za-z0-9]{10}$/.test(value);
      //   },
      //   message:
      //     "Govt Id should be a valid 10-digit alpha-numeric string for PAN",
      // },
    ],
  },
  guardianName: String,
  guardianSex: { type: String, enum: ["Male", "Female", "Other"] },
  email: {
    type: String,
    validate: {
      validator: function (value) {
        const emailRegex =
          /^[\w-]+(\.[\w-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,})$/;
        return emailRegex.test(value);
      },
      message: "Please enter a valid email address",
    },
  },
  address: String,
  state: String,
  city: String,
  country: String,
  pincode: Number,
  occupation: String,
  religion: {
    type: String,
    enum: [
      "Christianity",
      "Islam",
      "Hinduism",
      "Buddhism",
      "Sikhism",
      "Judaism",
      "Other",
    ],
  },
  maritalStatus: {
    type: String,
    enum: ["Single", "Married", "Divorced", "Widowed", "Separated"],
  },
  bloodGroup: {
    type: String,
    enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
  },
  nationality: String,
});

module.exports = mongoose.model("userdetails", userSchema);
