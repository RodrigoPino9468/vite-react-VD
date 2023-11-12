export const validarCorreos = (Correo) => {
  if (Correo === null || Correo.trim() === "") {
    return null;
  }
  const regexCorreo = new RegExp(
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i
  );
  return regexCorreo.test(Correo);
};

export const validarUsuarios = (Usuario) => {
  if (Usuario === null || Usuario.trim === "") {
    return false;
  }
  const regexUsuario = new RegExp(/^[a-zA-Z0-9_-]{3,16}$/);
  return regexUsuario.test(Usuario);
};

export const validarNombres = (Nombre) => {
  if (Nombre === null || Nombre.trim() === "") {
    return null;
  }
  const regexNombre = new RegExp(/^[A-Za-záéíóúÁÉÍÓÚüÜñÑ\s'-]+$/);
  return regexNombre.test(Nombre);
};

export const validarContrasenas = (Contrasena) => {
  if (Contrasena === null || Contrasena.trim() === "") {
    return null;
  }
  const regexContrasena = new RegExp(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]{8,}$/);
  return regexContrasena.test(Contrasena);
};

export const validarTextos = (Texto) => {
  if (Texto === null || Texto.trim() === "") {
    return null;
  }
  const regexMensaje = new RegExp(/^[\s\S]*$/);
  return regexMensaje.test(Texto);
};

export const validarCantidades = (Cantidad) => {
  if (Cantidad === null || Cantidad.trim() === "") {
    return null;
  }
  const regexCantidades = new RegExp(/^\d+(\.\d{1,2})?$/);
  return regexCantidades.test(Cantidad);
};

export const Alertas = {
  username: {
    vacio: "El campo Username no puede estar vacío",
    valido: "Username válido",
    invalido: "Username inválido",
  },
  password: {
    vacio: "El campo Password no puede estar vacío",
    valido: "Password válido",
    invalido: "Password inválido",
  },
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
