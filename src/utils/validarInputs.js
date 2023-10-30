export const validarCorreos = (correo) => {
  const regexCorreo = new RegExp(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i);
  return regexCorreo.test(correo);
};

export const validarNombres = (nombre) => {
  const regexNombre = new RegExp(/^[A-Za-záéíóúÁÉÍÓÚüÜñÑ\s'-]+$/);
  return regexNombre.test(nombre);
};

export const validarContrasenas = (contrasena) => {
  const regexContrasena = new RegExp(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]{8,}$/);
  return regexContrasena.test(contrasena);
};

export const validarTextos = (mensajes) => {
  if (mensajes === null || mensajes.trim() === "") {
    return false;
  }
  const regexMensaje = new RegExp(/^[\s\S]*$/);
  return regexMensaje.test(mensajes);
};

export const validarCantidades = (monto) => {
  const regexMontos = new RegExp(/^\d+(\.\d{1,2})?$/);
  return regexMontos.test(monto);
};

export const Alertas = {
  nombre: {
    vacio: "El campo Nombre no puede estar vacío",
    valido: "Nombre válido",
    invalido: "Nombre inválido",
  },
  correo: {
    vacio: "El campo Correo Electrónico no puede estar vacío",
    valido: "Correo Electrónico válido",
    invalido: "Correo Electrónico inválido",
  },
  asunto: {
    vacio: "El campo Asunto no puede estar vacío",
    valido: "Asunto válido",
    invalido: "Asunto inválido",
  },
  mensaje: {
    vacio: "El campo Mensaje no puede estar vacío",
    valido: "Mensaje válido",
    invalido: "Mensaje inválido",
  },
};
