import mongoose from "mongoose";

// Define the user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    // Additional validation rules can be added here
  },
  email: {
    type: String,
    required: true,
    unique: true,
    // Additional validation rules can be added here
  },
  password: {
    type: String,
    required: true,
    // Additional validation rules can be added here
  }
}, { timestamps: true });

// Create the User model
const User = mongoose.model('User', userSchema);

// Export the User model
export default User;
