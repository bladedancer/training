function invoke(arrow, params, cb) {
	var salutation = arrow.config.helloworld.salutation;

	if (!params.username) {
		return cb.error(null, {
			error: 'Invalid name'
		});
	}

	var body = salutation + ' ' + params.username;
	cb.next(null, body);
}

exports = module.exports = invoke
