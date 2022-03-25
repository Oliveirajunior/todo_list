const { Task } = require('../models')

module.exports = {
  async index(req, res) {
    try {
      const result = await Task.findAll({ order: [['id', 'ASC']] })
      return res.json(result)
    } catch (err) {
      next(err)
    }
  },
  async select(req, res) {
    try {
      const { id } = req.params
      const result = await Task.findByPk(id)
      return res.json(result)
    } catch (err) {
      next(err)
    }
  },
  async create(req, res) {
    try {
      const { description } = req.body
      const result = await Task.create({ description })
      return res.json(result)
    } catch (err) {
      next(err)
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params
      const { description } = req.body
      const result = await Task.update({ description }, { where: { id } })
      return res.json(result)
    } catch (err) {
      next(err)
    }
  },
  async delete(req, res) {
    try {
      const { id } = req.params
      const result = await Task.destroy({ where: { id } })
      return res.json(result)
    } catch (err) {
      next(err)
    }
  }
}
