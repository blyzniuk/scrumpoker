"use strict";

const Example = require('./example.model');
const RESPONSES = require('../../shared/responses.js');

class ExampleController{
	getAll(req, res) {
		return Example.find(req.params)
			.then((result) => {
				res.status(RESPONSES.STATUS.OK).json(result);
			})
			.catch((err) => {
				res.status(RESPONSES.STATUS.NOT_FOUND).json(err);
			});
	}

	add(req, res) {
		const modelInstance = new Example(req.body);
		return modelInstance.save()
			.then((result) => {
				res.status(RESPONSES.STATUS.CREATED).json(result);
			})
			.catch((err) => {
				res.send(err);
			});
	}

	getById(req, res) {
		return Example.findById(req.params.id)
			.then((result) => {
				res.status(RESPONSES.STATUS.OK).json(result);
			})
			.catch((err) => {
				res.status(RESPONSES.STATUS.NOT_FOUND).json(err);
			});
	}

	update(req, res) {
		return Example.findById(req.params.id)
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
		return Example.remove({_id: req.params.id})
			.then((result)=> {
				res.json(result);
			})
			.catch((err) => {
				res.send(err);
			});
	}
}

module.exports = ExampleController;

 