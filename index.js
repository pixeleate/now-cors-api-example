const { router, post } = require("microrouter");
const { json, send } = require("micro");
const microCors = require('micro-cors');
const cors = microCors({ allowMethods: ['PUT', 'POST'] })

const email = async (req, res) => {
  const body = await json(req);
  send(res, 200, body);
};

const handler = cors(email)

module.exports = router(post("/email", handler));
