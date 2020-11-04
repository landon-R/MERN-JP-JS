const { Schema, model } = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');

//ROLES VALIDOS
const rolesValidos = {
  values: ['ADMIN_ROLE', 'USER_ROLE'],
  message: '{values} no es un role valido'
}

 
const userSchema = new Schema(
  {
    userName: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true, min: 6 },
    estado: { type: Boolean, default: true },
    role: { type: String, default: 'USER_ROLE', enum: rolesValidos },
  },
  { timestamps: true }
);

//PAGINATE
userSchema.plugin(mongoosePaginate)

//FUNCION PARA NO MOSTRAR  PASSWORD
userSchema.methods.toJSON = function() {
  let user = this
  let userObject = user.toObject()
  delete userObject.password
  return userObject
}

module.exports = model("User", userSchema);
