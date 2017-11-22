exports = module.exports = function (req, cb) {
	const param = req.params.todo;
	if (!param) {
		// invoking the callback with an error will terminate the flow.
		return cb('invalid argument');
	}
	cb.next(null, 'todo');
};
