const sdk = require('axway-flow-sdk');
const action = require('./action');

const flownodes = sdk.init(module);

// The unique name of your flow-node.  You can define multiple flow-nodes in this
// file, but one is typical.
flownodes.add('gm-objectfilter', {
	name: 'Gm-objectfilter',
	// file support for: svg, png, gif, bmp, jpg, and tiff
	icon: 'icon.svg',
	description: 'TODO'
})
	// Add a method to your flow-node.
	.method('todo', {
		name: 'TODO',
		description: 'TODO'
	})
	// Add parameter(s) to your method.
	.parameter('todo', {
		description: 'TODO',
		type: 'string'
	})
	// Once all parameters for the method are defined, add output(s) to your method.
	.output('next', {
		name: 'Next',
		description: 'TODO',
		context: '$.todo',
		schema: {
			type: 'string'
		}
	})
	// Provide the actual javascript implementation.  ES6+ supported through babel.
	.action(action);

exports = module.exports = flownodes;
