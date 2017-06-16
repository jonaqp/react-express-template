const Server = require('./src/server/index');
const port = (process.env.PORT || 8081);
const app = Server.app();

app.listen(port);
console.log(`Listening at http://localhost:${port}`);
