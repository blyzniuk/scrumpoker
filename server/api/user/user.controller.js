"use strict";

const User = require('./user.model.js');
const RESPONSES = require('../../shared/responses.js');

class UserController{
	getAll(req, res) {
		return User.find(req.params)
			.then((result) => {
				res.status(RESPONSES.STATUS.OK).json(result);
			})
			.catch((err) => {
				res.status(RESPONSES.STATUS.NOT_FOUND).json(err);
			});
	}

	add(req, res) {
		const modelInstance = new User(req.body);
		return modelInstance.save()
			.then((result) => {
				res.status(RESPONSES.STATUS.CREATED).json(result);
			})
			.catch((err) => {
				res.send(err);
			});
	}

	getById(req, res) {
		return User.findById(req.params.id)
			.then((result) => {
				res.status(RESPONSES.STATUS.OK).json(result);
			})
			.catch((err) => {
				res.status(RESPONSES.STATUS.NOT_FOUND).json(err);
			});
	}

	update(req, res) {
		return User.findById(req.params.id)
			.then((modelInstance) => {
				const updatedInstance = _lodash.extend(modelInstance, req.body);
				return updatedInstance.save();
			})
			.then((result) => {
				res.status(RESPONSES.STATUS.OK).json(result);
			})
			.catch((err) => {
				res.status(RESPONSES.STATUS.NOT_FOUND).json(err);
			});
	}

	delete(req, res) {
		return User.remove({_id: req.params.id})
			.then((result)=> {
				res.json(result);
			})
			.catch((err) => {
				res.send(err);
			});
	}
}

module.exports = UserController;

 