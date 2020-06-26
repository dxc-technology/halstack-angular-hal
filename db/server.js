/* eslint-disable no-underscore-dangle */
// server.js
const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router("./db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use((req, res, next) => {
  next();
});
server.use(jsonServer.bodyParser);

server.use(router);

const data = {};

  //Aquí es donde manipulamos la respuesta (req es la petición que se hizo y res es la respuesta que vamos a devolver)
router.render = (req, res) => {
  if (res.locals.data) {
    if(!this.data){
      this.data = JSON.parse(JSON.stringify(res.locals.data));
    }
    if (req.originalUrl.includes("sort")) {//Si la petición incluye el parametro de sort, tenemos que ordenar
      const propertyToSort = req.query._sort;//Cogemos de la url property a ordenar
      const order = propertyToSort.charAt(0) === "-" ? "desc" : "asc";//Aqui sabemos si ordenamos ASC o DESC
      res.locals.data._links.item = this.data._links.item.sort( //Hacemos la ordenación de los items de la respuesta (res.locals.data[0]._links._item)
        sortArray(
          propertyToSort.charAt(0) === "-" ? propertyToSort.slice(1) : propertyToSort,
          order
        )
      );
    }
    if (req.originalUrl.includes("start") && req.originalUrl.includes("num")) {
      let pageNumber = req.query._start;
      let itemsPerPage = req.query._num;
      let start = pageNumber * itemsPerPage - itemsPerPage;    
      let end = pageNumber * itemsPerPage;
      res.locals.data._links.item = this.data._links.item.slice(start,end);
    }

  }
  res.jsonp(res.locals.data);
};
const port = 3000;
server.listen(port, () => {
  console.log("JSON Server is running, in port: " + port);
});

function sortArray(key, order) { //FUnción de ordenación
  return (element1, element2) => {
    /*
     * return < 0 element1 comes first than element2
     * return 0 leave element1 and element2 unchanged respect to each other
     * return > 0 element2 comes first than element1
     * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
     */
    if (!element1.summary[key] || !element2.summary[key]) {
      return 0;
    }
    const varA =
      typeof element1.summary[key] === "string"
        ? element1.summary[key].toUpperCase()
        : element1.summary[key];
    const varB =
      typeof element2.summary[key] === "string"
        ? element2.summary[key].toUpperCase()
        : element2.summary[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return order === "desc" ? comparison * -1 : comparison;
  };
}

module.exports = server