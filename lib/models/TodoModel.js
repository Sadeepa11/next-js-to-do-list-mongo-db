import mongoose from 'mongoose';

// Define the schema
const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});

// Check if the model already exists to avoid overwriting it
const TodoModel = mongoose.models.Todo || mongoose.model('Todo', TodoSchema);

export default TodoModel;
