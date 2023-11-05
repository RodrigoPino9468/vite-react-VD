export const getPersonajes = async () => {
  const options = {
    method: "GET",
    headers: {},
  };

  const respuesta = await fetch("", options);
  const data = respuesta.json();
};
