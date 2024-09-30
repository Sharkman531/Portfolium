import mongoose from 'mongoose';

const ProyectoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String, required: true },
  img: { type: String, required: true },
  technologies: { type: [String], required: true },
  section: { type: String, required: true },
  cliente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cliente'
  }
});

const Proyecto = mongoose.model('Proyecto', ProyectoSchema);

export default Proyecto;