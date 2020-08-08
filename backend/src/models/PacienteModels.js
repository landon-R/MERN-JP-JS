const {Schema, model} =  require('mongoose')


const pacientesSchema = new Schema({
    nombre: {
        type: String,
        trim: true
    },
    propietario: {
        type: String,
        trim: true
    },
    fecha: {
        type: String,
        trim: true
    },
    hora: {
        type: String,
        trim: true
    },
    sintomas: {
        type: String,
        trim: true
    },
    telefono: {
        type: String,
        trim: true
    }
},{
    timestamps: true
})

module.exports = model('Paciente', pacientesSchema )