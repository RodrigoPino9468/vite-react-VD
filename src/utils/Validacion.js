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
    return null;
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
