const mongoose = require('mongoose');
const Shema = mongoose.Schema;

const empleadosSchema = new Shema({
    Nombre: {type: String},
    Email: {type: String},
    Telefono: {type: Number, integer: true},
    EstadoCivil: {type: String},
    Hijos: {type: String},
    Intereses: []
});

module.exports = mongoose.model('empleados', empleadosSchema);