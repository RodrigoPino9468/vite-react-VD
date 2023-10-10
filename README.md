# Sitio Web Vida Independiente

### Descargar Repo
```CMD
git clone https://github.com/RodrigoPino9468/vite-react-VD.git
npm install
npm run dev
npm run build
```

### Desplegar Proyecto
```CMD
cd vite-react-VD
docker build -t sitio-web-fvic .
docker run -p 3000:80 --name Prueba1 -d sitio-web-fvic
```

