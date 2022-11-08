examples = {
    query: async (req, res, next) => {
        let name = req.query.name;
        res.status(200).json({
            status: 200,
            message: `¡Hola ${name}!`
        });
    },
    params: async (req, res, next) => {
        let name = req.params.name;
        res.status(200).json({
            status: 200,
            message: `¡Hola ${name}!`
        });
    },
    body: async (req, res, next) => {
        let name = req.body.name;
        res.status(200).json({
            status: 200,
            message: `¡Hola ${name}!`
        });
    },
    putTest: async (req, res, next) => {
        res.status(200).json({
            status: 200,
            message: "PUT test works!"
        });
    },
    deleteTest: async (req, res, next) => {
        res.status(200).json({
            status: 200,
            message: "DELETE test works!"
        });
    },
    esPar: async (req, res, next) => {
        try {
            let number = req.query.number;
            let par = number % 2;
            if (par == 0) {
                res.status(200).json({
                    status: 200,
                    message: `El número ${number} es par`
                });
            }
            else if (par == 1) {
                res.status(200).json({
                    status: 200,
                    message: `El número ${number} es impar`
                });
            }
            else {
                res.status(400).json({
                    status: 400,
                    message: `${number} no es un número`
                });
            }
        }
        catch {
            res.status(500).json({
                status: 500,
                message: 'Ocurrió un error'
            });
        }
    }
  };
  
  module.exports = examples;