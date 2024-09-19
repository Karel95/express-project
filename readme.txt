
npm i express

node index.js



https://youtu.be/JmJ1WUoUIK4?si=6YGVrgK1ncptJrFH
1:57:35 / 4:00:29 • Middlewares



Los métodos HTTPS son los mismos que los de HTTP, ya que HTTPS es simplemente la versión segura de HTTP. 
Aquí te dejo los métodos más comunes:

GET: Solicita datos de un servidor. Se usa principalmente para obtener información y no para modificarla.
Ejemplo: Obtener una lista de productos.

POST: Envia datos al servidor para crear un nuevo recurso o realizar alguna acción. Suele ser usado para 
formularios y agregar nuevos elementos.
Ejemplo: Crear un nuevo usuario en una base de datos.

PUT: Envía datos al servidor para reemplazar un recurso existente por completo.
Ejemplo: Actualizar todos los detalles de un perfil de usuario.

PATCH: Envía datos al servidor para actualizar parcialmente un recurso.
Ejemplo: Cambiar solo el nombre o el correo de un perfil de usuario.

DELETE: Elimina un recurso del servidor.
Ejemplo: Borrar un comentario en un post.

HEAD: Es similar a GET, pero no devuelve el cuerpo de la respuesta, solo los encabezados.
Ejemplo: Comprobar si un recurso está disponible sin descargarlo.

OPTIONS: Devuelve los métodos HTTP permitidos para un recurso en particular.
Ejemplo: Consultar qué métodos están permitidos para una API.

TRACE: Muestra el camino completo de la solicitud hasta el servidor, útil para pruebas de diagnóstico.
Ejemplo: Diagnosticar problemas de red.

CONNECT: Utilizado para establecer un túnel de comunicación, comúnmente usado para conexiones seguras HTTPS.

Estos métodos están estandarizados en el protocolo HTTP/1.1 y también son usados en HTTPS, garantizando la 
misma funcionalidad, pero con cifrado para la seguridad de los datos.

