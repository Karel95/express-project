
//ExpressJS
const express = require("express");
const app = express();

//routes
const index = require('./routes/index');
const routes = require('./routes/routes');

//morgan
const morgan = require("morgan");
app.use(morgan('dev'));

//path
const path = require('path');

//app.get('/'): Define una rutas GET para el endpoint /.
app.get("/", (req, res) => {
  //res.send(): Envía una respuesta al cliente.
  res.sendFile("./static/index.html", {
    root: __dirname, // directorio donde se encuentran los archivos estáticos
  });
});
app.get("/products", (req, res) => {
  //validate data
  //query a database
  //process data
  res.send({
    product: "product",
    price: 19.99,
    description: "Este es un producto de prueba",
    size: [1, 2, 3],
    address: {
      street: "Calle 123",
      number: 456,
      city: "Ciudad XYZ",
      country: "País ABC"
    }
  });
});

app.get("/isAlive", (req, res) => {
  res.sendStatus(204);
});

//:params
app.get("/hello/:user", (req, res) => {
  console.log(req.params)
  res.send('Hello, ' + req.params.user);
});
app.get("/hello/:name/lastname/:lastname", (req, res) => {
  console.log(req.params)
  res.send('Hello, ' + req.params.name + ' ' + req.params.lastname);
});
app.get("/users/:user", (req, res) => {
  console.log(req.params)
  if (req.params.user === 'Karl') {
    return res.send('Hello, ' + req.params.user);
  } else {
    res.send('Usuario no identificado.');
  }
});
app.get("/add/:x/:y", (req, res) => {
  console.log(req.params)
  const {x, y} = req.params
  let result = parseInt(x) + parseInt(y)
  res.send(`Result: ${result}`);
});

//?query
//%20     espacio
//&       y
app.get("/hello/:user", (req, res) => {
  console.log(req.query)
  res.send('Hello, ' + req.params.user + req.query);
});
app.get('/search', (req, res) => {
  console.log(req.query)
  if (req.query.q === 'javascript') {
    return res.send('Hello, JavaScript!');
  } else {
    res.send('No encontrado');
  }
});

//text() para que Express pueda procesar texto:
app.use(express.text());
//json() para que Express pueda procesar json:
app.use(express.json());
//urlencoded() para que Express pueda procesar info proveniente de un formulario:
app.use(express.urlencoded({extended: false}));

//Metodos http
app.post("/users", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.put("/products", (req, res) => {
  res.send("Actualizando producto...");
});

app.delete("/products", (req, res) => {
  res.send("Eliminando producto...");
});

app.patch("/products", (req, res) => {
  res.send("Actualizando producto...");
});
app.all("/all", (req, res) => {
  res.send("Metodo de Express, no recomendado.");
});

//Middleware
// app.use((req, res) => {
//   res.status(404).send("Page not found..!");
// });

//logger
app.use((req, res, next) => {
  console.log(`Route: ${req.url}, method: ${req.method}, path: ${req.params.path}`);
  next();
});

//isAuthenticated
app.use((req, res, next) => {
  if (req.query.login === '95@karl.dev') {
    next();
  } else {
    next();
    // res.send('no autorizado')
  }
});

//router
app.use(index)
routes(app)

//static files
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));
app.use('/static',express.static('./static'))
app.use('/public',express.static('./public'))

//app.listen(): Levanta el servidor en el puerto especificado.
app.listen(3000, () => {
  console.log(`Server listening on port ${3000}.`);
});
