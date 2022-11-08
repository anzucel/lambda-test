feed = {
    getTest: async (req, res, next) => {
        //Add code here
        res.status(200).json({
            status: 200,
            message: "GET Feed test works!"
        });
    },
    postTest: async (req, res, next) => {
        //Add code here
        res.status(200).json({
            status: 200,
            message: "POST Feed test works!"
        });
    }
  };
  
  module.exports = feed;
  