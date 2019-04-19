import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import timestamp from 'mongoose-timestamp';

const { ObjectId } = mongoose.Types;

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  avatar: String,
  accountId: ObjectId
});

userSchema.plugin(uniqueValidator);
userSchema.plugin(timestamp);

const userModel = mongoose.model('userModel', userSchema);

export default userModel;
