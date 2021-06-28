const {Client} = require("@googlemaps/google-maps-services-js");

exports.test = (req, res) => {
  console.log(req.body);
  const client = new Client({});

  client.directions({
    params: {
      origin: "NASA Ames",
      destination: "NASA Ames",
      waypoints: req.body,
      key: "AIzaSyCUwbUSTvJiXetmMztzm2NdWhubUQq1WPM",
    },
    timeout: 1000, // milliseconds
  })
  .then((r) => {
    console.log(r);
    res.send(r.data.routes[0]);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving tutorials."
    });
  });
};