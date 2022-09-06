const { Movie } = require('../../database/models')

module.exports = {
    create: async (req, res) => {
        const {title, rating, awards, release_date, genre_id, length} = req.body
        try {
            let newMovie = await Movie.create({
                title,
                rating,
                awards,
                length,
                release_date,
                genre_id
            })
            if(newMovie) {
                res.status(200).json({
                    meta: {
                        status: 200,
                        msg: "Pelicula " + newMovie.title + " se creó correctamente"
                    },
                    data: {
                        newMovie
                    }
                })
            } else {
                res.status(400).json({
                    meta: {
                        status: 400
                    },
                    data: {
                        msg: "Ocurrió un error",
                        msg2: "Intetá nuevamente"
                    }
                })
            }
        } catch (error) {
            res.json(error)
        }
    },
    delete: async (req, res) => {
        let movieId = req.params.id
        let movie = await Movie.findByPk(movieId)
        try {
            let movieDeleted = await Movie.destroy({
                where: {
                    id: movieId
                }
            })
            if (movieDeleted) {
                res.status(200).json({
                    meta: {
                        status: 200,
                        msg: "Se elemino la pelicula: " + movie.title
                    }
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
            res.json(error)
        }
    }
}