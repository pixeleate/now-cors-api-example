const { router, post } = require("microrouter");
const { json, send } = require("micro");

const email = async (req, res) => {
  console.log('Hello NOW');
  const body = await json(req);
  send(res, 200, body);
};

module.exports = router(post("/email", email));
