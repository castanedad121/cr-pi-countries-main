const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const PORT = 3001;
const uploadCountries = require('./src/utils/uploadCountries');

conn.sync({ force: true }).then(() => {
server.listen(PORT, async () => {
  console.log(`Server listening on port ${PORT}`);
  uploadCountries();
  console.log('Full loading');

})
}).catch(error => console.error(error))
