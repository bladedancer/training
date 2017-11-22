function filter(req, include, cb) {
	if (!req.params.source || typeof req.params.source !== 'object') {
		return cb.error(null, 'Invalid source, object required.');
	} else if (!req.params.fields || !Array.isArray(req.params.fields)) {
		return cb.error(null, 'Invalid fields, array required.');
	}

	const obj = Object.keys(req.params.source).reduce(
		(acc, cur) => {
			const val = JSON.parse(JSON.stringify(req.params.source[cur]));

			if ((include && req.params.fields.includes(cur))
				|| (!include && !req.params.fields.includes(cur))) {
				acc[cur] = val;
			}
			return acc;
		},
		{}
	);
	cb.next(null, obj);
}

function include(req, cb) {
	filter(req, true, cb);
}

function exclude(req, cb) {
	filter(req, false, cb);
}

exports = module.exports = {
	include,
	exclude
};
