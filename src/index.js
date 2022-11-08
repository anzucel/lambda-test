const app = require("./app");
const server = require("http").Server(app);
const db = require('./database/database');
const relations = require('./database/relations')

async function connect() {
  await db.authenticate();
  await db.sync({ force: false });
  await relations.createRelations(db.models);
  console.log('Connection to database successful'); 
}

async function main() {
  //Database
  await connect();

  //Express App
  await server.listen(process.env.PORT);
  console.log(`Server on port ${process.env.PORT}: Connected`);
}

main();