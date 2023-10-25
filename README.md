# Sitio Web Vida Independiente

## Descargar Repo

```CMD
git clone https://github.com/RodrigoPino9468/vite-react-VD.git
npm install
npm run dev
npm run build
```

## Desplegar Proyecto

```CMD
cd vite-react-VD
docker build -t sitio-web-fvic .
docker run -p 3000:80 --name Prueba1 -d sitio-web-fvic
```

## Estructura del directorio del proyecto

```
src/
├── Application.jsx
├── assets
│   ├── borrador.txt
│   └── main.css
├── components
│   ├── Error404.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── Layout.jsx
│   └── Navbar.jsx
├── data
│   ├── api-rick-y-morty.js
│   └── datos.js
└── pages
    ├── Contacto
    │   └── index.jsx
    ├── Donaciones
    │   ├── D_DonarOnline.jsx
    │   ├── D_OpcionesDonaciones.jsx
    │   ├── D_Transferencias.jsx
    │   └── index.jsx
    ├── Inicio
    │   ├── index.jsx
    │   └── SubComponents
    │       ├── Carousel.jsx
    │       └── Modulo.jsx
    ├── Noticias
    │   ├── index.jsx
    │   ├── N_Noticia.jsx
    │   ├── N_Noticiero.jsx
    │   └── SubComponents
    │       └── CardNoticia.jsx
    ├── Programas
    │   ├── index.jsx
    │   ├── P_EmprendimientoInclusivo.jsx
    │   ├── P_ListaProgramas.jsx
    │   ├── P_MujeresConDiscapacidad.jsx
    │   ├── P_Vida.jsx
    │   └── SubComponents
    │       └── CardPrograma.jsx
    ├── QuienesSomos
    │   ├── index.jsx
    │   └── SubComponents
    │       ├── Colaborador.jsx
    │       ├── CuerpoQuinesSomos.jsx
    │       ├── ElementoCuerpo.jsx
    │       └── Emblema.jsx
    ├── Recursos
    │   └── index.jsx
    └── Servicios
        ├── index.jsx
        └── SubComponents
            ├── ModalServicios.jsx
            └── Servicio.jsx
```

- Components/
  > Aqui se guardan los componentes mas reutilizables de todo el codigo como el footer, navbar, entre otros que se necesite en varios modulos de la misma forma.
- Pages/
  > Todas los modulos de la pagina web estan divididas segun la ruta de la pagina la cual se organizo en directorios con el nombre del modulo. Por ejemplo, el modulo de Inicio tienen su configuracion y estructura dentro del directorio de Inicio.
- Index.jsx
  > Todos los archivos **index.jsx** dentro de cada directorio estan organizados para preveer la posibilidad de subrutas dentro de cada modulo, por lo cual, el ruteador de aquellos modulos que tengan subrutas estaran establecidos en el archivo **index.jsx**.
- SubRutas:
  > Las subrutas que tenga cada modulo seran reprentadas por la letra inicial del modulo en mayuscula definiendo una semantica a seguir para definir las rutas en su ruteador.
- SubComponentes:
  > Aqui se guardaran todos los componentes que tengas que usar en las paginas de ese modulo, a menos que esos componentes se usen en otros modulos.
