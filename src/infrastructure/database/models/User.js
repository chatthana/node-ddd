import { Schema } from 'mongoose';

const UserBlueprint = Schema({
  firstname: String,
  lastname: String,
  email: String,
  hashedPassword: String,
  age: Number
}, {
  versionKey: false
});

export default UserBlueprint;