import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const postSchema = new Schema({
  name: { type: 'String', required: true },
  title: { type: 'String', required: true },
  content: { type: 'String', required: true },
  slug: { type: 'String', required: true },
  cuid: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('Post', postSchema);


/*


const postSchema = new Schema({
  firstName: { type: 'String', required: true },
  lastName: { type: 'String', required: true },
  email: { type: 'String', required: true },
  phoneNumber: { type: 'String', required: true },
  status: { type: 'String', required: true },
  slug: { type: 'String', required: true },
  cuid: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('Contact', postSchema);
*/
