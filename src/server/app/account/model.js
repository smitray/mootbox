import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import timestamp from 'mongoose-timestamp';

const accountSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    default: null
  },
  email: {
    type: String,
    unique: true
  },
  status: {
    type: String,
    default: 'unverified'
  },
  accType: {
    type: String,
    default: 'user'
  },
  socialId: {
    type: String,
    default: null
  },
  socialToken: {
    type: String,
    default: null
  }
});

accountSchema.plugin(uniqueValidator);
accountSchema.plugin(timestamp);

const accountModel = mongoose.model('accountModel', accountSchema);

export default accountModel;
