const moment = require("moment");
const validate = (req, res, next) => {
  const { created_at } = req.body;

  const currentTime = moment();
  const momentcreated_at = moment(created_at);

  const differenceInSeconds = Math.abs(
    momentcreated_at.diff(currentTime) / 1000
  );

  //   console.log(`Difference in seconds: ${differenceInSeconds}`);
  if (differenceInSeconds < 60) next();
  else res.send({ error: "The code has expired" });
};

module.exports = { validate };
