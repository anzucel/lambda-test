const database = require('../database/database');
const { models } = database;

users = {
  getTest: async (req, res, next) => {
    //Add code here
    res.status(200).json({
        status: 200,
        message: "GET Users test works!"
    });
  },
  postTest: async (req, res, next) => {
    console.log('postTest', req.body.name);
    let result = await models.country.create({
      name: "Guatemala",
      preffix: "GUA"
    });
    //Add code here 
    res.status(200).json({
        status: 200,
        message: result
    });
  },
};

module.exports = users; 
