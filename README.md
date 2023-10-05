# Sitio Web Vida Independiente



### Construccion 
```CMD
cd vite-react-VD
docker build -t sitio-web-fvic .
docker run -p 3000:80 --name Prueba1 -d sitio-web-fvic
```

### Correr el contenedor

``` CMD
docker run -d -p 8080:80 sitio-web-fvic
```
