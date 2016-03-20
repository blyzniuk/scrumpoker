'use strict';

const Story = require('./story.model');
const RESPONSES = require('../../shared/responses');

class StoryController{
	add(req, res) {
		const modelInstance = new Story(req.body);
		return modelInstance.save()
			.then((result) => {
				res.status(RESPONSES.STATUS.CREATED).json(result);
			})
			.catch((err) => {
				res.send(err);
			});
	}

	getById(req, res) {
		return Story.findById(req.params.id)
			.then((result) => {
				res.status(RESPONSES.STATUS.OK).json(result);
			})
			.catch((err) => {
				res.status(RESPONSES.STATUS.NOT_FOUND).json(err);
			});
	}

	update(req, res) {
		return Story.findById(req.params.id)
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
		return Story.remove({_id: req.params.id})
			.then((result)=> {
				res.json(result);
			})
			.catch((err) => {
				res.send(err);
			});
	}
}

module.exports = StoryController;

 