const { router, post } = require("microrouter");
const { json, send } = require("micro");
const cors = require('micro-cors')()

const email = async (req, res) => {
  console.log('Hello NOW');
  const body = await json(req);
  send(res, 200, body);
};

const handler = router(post("/email", email));

module.exports = cors(handler);
