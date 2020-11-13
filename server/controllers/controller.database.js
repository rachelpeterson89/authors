const {Author} = require('../models/model.database');

module.exports = {
    index:(req, res) => {
        Author.find()
            .then(data => res.json({results:data}) )
            .catch(err => res.json(err.errors))
    },
    create:(req, res) => {
        Author.create(req.body)
            .then(data => res.json({results:data}) )
            .catch(err => res.json(err.errors))
    },
    show:(req, res) => {
        Author.findOne({_id: req.params.id})
            .then(data => res.json({results:data}) )
            .catch(err => res.json(err.errors))
    },
    update:(req, res) => {
        Author.updateOne({_id: req.params.id}, req.body, {runValidators: true})
            .then(data => res.redirect(`/api/Author/${req.params.id}`) )
            .catch(err => res.json(err.errors))
    },
    destroy:(req, res) => {
        Author.deleteOne({_id: req.params.id})
            .then(data => res.json({results:data}) )
            .catch(err => res.json(err.errors))
    }
}