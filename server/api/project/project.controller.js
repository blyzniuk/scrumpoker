"use strict";

const Project = require('./project.model.js');
const RESPONSES = require('../../shared/responses.js');

class ProjectController{
	getAll(req, res) {
		return Project.find(req.params)
			.then((result) => {
				res.status(RESPONSES.STATUS.OK).json(result);
			})
			.catch((err) => {
				res.status(RESPONSES.STATUS.NOT_FOUND).json(err);
			});
	}

	add(req, res) {
		const modelInstance = new Project(req.body);
		return modelInstance.save()
			.then((result) => {
				res.status(RESPONSES.STATUS.CREATED).json(result);
			})
			.catch((err) => {
				res.send(err);
			});
	}

	getById(req, res) {
		return Project.findById(req.params.id)
			.then((result) => {
				res.status(RESPONSES.STATUS.OK).json(result);
			})
			.catch((err) => {
				res.status(RESPONSES.STATUS.NOT_FOUND).json(err);
			});
	}

	update(req, res) {
		return Project.findById(req.params.id)
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
		return Project.remove({_id: req.params.id})
			.then((result)=> {
				res.json(result);
			})
			.catch((err) => {
				res.send(err);
			});
	}
}

module.exports = ProjectController;

 