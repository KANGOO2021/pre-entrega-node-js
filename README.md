# Microservicio de Productos

## Descripción

Es como un Microservicio en Node.js que interactúa con la API de **FakeStore** para gestionar productos. Permite consultar, crear y eliminar productos desde la terminal usando comandos simples.

---

## Funcionalidades

- **GET products**: Lista todos los productos.  
- **GET products/<id>**: Obtiene un producto específico por ID.  
- **POST products <title> <price> <category>**: Crea un nuevo producto.  
- **DELETE products/<id>**: Elimina un producto por ID.  
- Validaciones de parámetros y manejo de errores.  
- Mensajes claros de ayuda y comandos desconocidos.

---

## Ejemplos de Uso

### Consultar todos los productos
```bash
npm run start GET products
```

### Consultar producto por ID
```bash
npm run start GET products/3
```

### Crear un nuevo producto
```bash
npm run start POST products "Camiseta-T-Rex" 300 remeras
```

### Eliminar un producto
```bash
npm run start DELETE products/7
```


---

## Enlaces

- Repositorio GitHub: [https://github.com/KANGOO2021/pre-entrega-node-js](https://github.com/KANGOO2021/pre-entrega-node-js)

---
