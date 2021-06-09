const axios = require("axios");

module.exports = async () => {
  const response = await axios.get("http://itsthisforthat.com/api.php?json");
  return response.data.this +  ' '  + response.data.that;
}