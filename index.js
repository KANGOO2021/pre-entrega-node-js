// Capturamos los argumentos
const [, , method, resource, ...params] = process.argv;

// Validación de argumentos
if (!method || !resource) {
  console.error("❌ Error: Debes ingresar un método y un recurso válidos.");
  console.info("👉 Ejemplo: npm run start GET products o products/3");
  process.exit(1);
}

// Normalizamos método y recurso
const methodUpper = method.toUpperCase();
const resourceLower = resource.toLowerCase();

// URL base de la API
const BASE_URL = "https://fakestoreapi.com/products";

try {
  // GET - Todos los productos
  if (methodUpper === "GET" && resourceLower === "products") {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    console.log(data);
  }

  // GET - Producto por ID
  else if (methodUpper === "GET" && resourceLower.startsWith("products/")) {
    const id = parseInt(resourceLower.split("/")[1]);
    if (isNaN(id) || id <= 0) {
      console.error("⚠️ ID inválido. Usa un número mayor a 0.");
      process.exit(1);
    }

    const response = await fetch(`${BASE_URL}/${id}`);
    const data = await response.json();
    console.log("📦 Producto encontrado:");
    console.log(data);
  }

  // Comando desconocido
  else {
    console.error("❌ Comando no reconocido o incompleto.");
    console.info("👉 Ejemplo: npm run start GET products/5");
  }
} catch (error) {
  console.error("💥 Error al procesar la solicitud:", error.message);
}

