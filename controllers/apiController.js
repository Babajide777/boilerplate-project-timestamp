let theDate = {};
const getUnixDate = (req, res) => {
  let { dateSent } = req.params;

  if (dateSent.includes("-")) {
    theDate["unix"] = new Date(dateSent).getTime();
    theDate["utc"] = new Date(dateSent).toUTCString();
  } else {
    dateSent = parseInt(dateSent);

    theDate["unix"] = new Date(dateSent).getTime();
    theDate["utc"] = new Date(dateSent).toUTCString();
  }

  if (!theDate["unix"] || !theDate["utc"]) {
    res.json({ error: "Invalid Date" });
  }

  res.json(theDate);
};

module.exports = { getUnixDate };
