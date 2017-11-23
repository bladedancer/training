var Arrow = require('arrow');

var User = Arrow.Model.extend('testuser',{
	fields: {
		first_name: {type:String},
		last_name: {type:String},
		email: {type:String}
	},
	connector: 'appc.arrowdb'
});

module.exports = User;