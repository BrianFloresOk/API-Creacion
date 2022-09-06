const { Genre } = require('../../database/models')

module.exports = {
    list: async (req, res) => {
        try {
            let allGenres = await Genre.findAll()
            if(allGenres) {
                res.status(200).json({
                    meta: {
                        status: 200,
                        total: allGenres.length,
                        url: 'api/genres'
                    },
                    data: allGenres
                })
            } else {
                res.status(400).json({
                    meta: {
                        status: 400,
                        msg: "Ocurrió un error"
                    }
                })
            }
        } catch (error) {
            throw new Error(error)
        }

    },
    detail: async (req, res) => {
        let genreId = req.params.id
        try {
            let genreDetail = await Genre.findByPk(genreId, {
                include: ["movies"]
            })
            if (genreDetail) {
                res.status(200).json({
                    meta: {
                        status: 200,
                        url: "api/genres/"+genreId
                    },
                    data: genreDetail
                })
            } else {
                res.status(400).json({
                    meta: {
                        status: 400,
                        msg: "Ocurrió un error"
                    }
                })
            }
        } catch (error) {
            throw new Error(error)
        }
    }
}