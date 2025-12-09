## Proyecto de CH-React
**comisión 52190** | abril 2023

## Mami Vintage ##
Live del sitio: [Proyecto React: MamiVintage](https://polite-faloodeh-eab902.netlify.app)

[![Netlify Status](https://api.netlify.com/api/v1/badges/88e9f4a8-cb88-478f-855e-1ead33b6dd74/deploy-status)](https://app.netlify.com/sites/polite-faloodeh-eab902/deploys)

MamiVintage es una tienda de ropa de segunda mano, cuidadosamente seleccionada para ofrecer productos fuera de circulación de la mejor calidad.
* La tienda ofrece una primer vista de login/registro para acceder, ofreciendo las opciones de logeo mediante email y contraseña o Google Login
* La vista de home contiene la **PLP** (página de lista de productos), cada uno con un detalle mínimo, precio y opción de ver más detalles.
* Al clickear "ver más" se accede a la vista de detalle de producto (**PDP**), dentro de la cual se puede acceder a una información más detallada, talle, precio, seleccionar cantidad y variantes del producto (que puede ser distinto material o colores)
* Al agregar al carrito la cantidad deseada, ya no puede cambiarse esta, y se ofrece el link de **ir al carrito** 
* En el carrito hay dos opciones: ir al ***checkout*** (finalizar la compra) o **borrar un item** o **vaciar el carrito**.
* **Los items del carrito se guardan en el localStorage del navegador, por lo que la compra no se pierde al recargar la pagina.**
  * **Un usuario no logeado no puede: acceder a la PLP (ni a los detalles), ver el carrito ni ver el checkout.**

## Tecnologías usadas para la implementacióno: ##
* Vite
* ReactJS (Librería)
* Firebase / Firestore (base de datos)
* Librerías de estilos extra:
  * TailwindCss: Para facilitar la estructura, creando los contenedores básicos, márgenes, padding y tamaño de fuentes
  * SASS: Para dar estilos de una forma más ordenada y acorde a la componentización del proyecto
* Netlify (Deploy)

![](https://github.com/NataNoEsta/RJS52190/blob/master/proyecto/mamivintage/public/demo/login.png)
![](https://github.com/NataNoEsta/RJS52190/blob/master/proyecto/mamivintage/public/demo/registro.png)
![](https://github.com/NataNoEsta/RJS52190/blob/master/proyecto/mamivintage/public/demo/home-screenshot.jpeg)
![](https://github.com/NataNoEsta/RJS52190/blob/master/proyecto/mamivintage/public/demo/category-example-shot.png)
![](https://github.com/NataNoEsta/RJS52190/blob/master/proyecto/mamivintage/public/demo/item-detail.jpeg)
![](https://github.com/NataNoEsta/RJS52190/blob/master/proyecto/mamivintage/public/demo/cart-shot.jpeg)
![](https://github.com/NataNoEsta/RJS52190/blob/master/proyecto/mamivintage/public/demo/checkout.png)
