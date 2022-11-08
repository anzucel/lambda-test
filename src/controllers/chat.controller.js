chat = {
    getTest: async (req, res, next) => {
        //Add code here
        res.status(200).json({
            status: 200,
            message: "GET Chat test works!"
        });
    },
    postTest: async (req, res, next) => {
        //Add code here
        res.status(200).json({
            status: 200,
            message: "POST Chat test works!"
        });
    }
  };
  
  module.exports = chat;
  