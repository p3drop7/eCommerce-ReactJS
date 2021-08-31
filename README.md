# Peter's Clothing Store

Peter's Clothing Store es un e-commerce creado en ReactJs para la venta de ropa, zapatos y accesorios.

Este proyecto cuenta con:

- Un Navbar con un Cart widget.
- Una vista principal con la lista de items completa, traída desde una base de datos en Firebase.
- Un filtro de caterogrías para mostrar los items que corresponden a esa categoría.
- Vistas de cada producto con su detalle, incluyendo una foto del item, nombre, descripción y precio.
- Un contador con control de stock para que el usuario pueda agregar al carrito no más del stock disponible.
- Una vista de los items agregados al carrito y botones para eliminar algún item.
- Una vista para confirmar la compra, ingresar los datos del comprador.
- Al final de la compra, se envía la orden a Firebase y este devuelve un ID de la orden para el usuario.

## Instalación

1. Forkear y clonar el repositorio

2. En la raíz del proyecto, correr el comando para instalar las dependencias: 

   ```
   npm install
   ```

3. Usar el siguiente comando para correr el proyecto, disponible en http://localhost:3000

   ```
   npm start
   ```
## Dependencias

- React Router Dom: para manejar la navegación entre categorías y detalles de productos.
- React-Bootstrap: para dar formato a algunos layouts, incluyendo cards de los items, el NavBar y spinners.
- Firebase: Usada como database de los productos. También se envían y guardan las órdenes en Firestore.
- React-Icons: para agregar íconos al proyecto.

## Preview de la App en funcionamiento:

![Peters Clothing Store](https://i.ibb.co/0fhfwZW/estore-readme.gif)

### Coded by:
Pedro Palencia
2021