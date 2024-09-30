import mongoose from 'mongoose';

const ClienteSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  foto: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  proyectos: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Proyecto'
  }]
});

const Cliente = mongoose.model('Cliente', ClienteSchema);

export default Cliente;