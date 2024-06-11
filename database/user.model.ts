// import { Schema, models, model, Document } from "mongoose";
// // Create typeScript interface
// export interface IUser extends Document {}
// // Create Schema interface for the database
// const UserSchema = new Schema({});

// // Turn to a model
// const User = models.User || model("User", UserSchema);

// // Export
// export default User;

// Import dependencies from mongoose
import { Schema, models, model, Document } from "mongoose";
// Create typeScript interface
export interface IUser extends Document {
  ClerkId: string;
  name: string;
  username: string;
  email: string;
  password?: string;
  bio?: string;
  picture: string;
  location?: string;
  portfolioWebsite?: string;
  reputation?: number;
  saved: Schema.Types.ObjectId[];
  joinedAt: Date;
}

// Create Schema interface for the database
const userSchema = new Schema({
  ClerkId: { type: String, required: true },
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  bio: { type: String },
  picture: { type: String, required: true },
  location: { type: String },
  portfolioWebsite: { type: String },
  reputation: { type: Number, default: 0 },
  saved: [{ type: Schema.Types.ObjectId, ref: "Question" }],
  joinedAt: { type: Date, default: Date.now },
});

// Turn to a model
const User = models.User || model("User", userSchema);

// Export
export default User;
