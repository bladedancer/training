const sdk = require('axway-flow-sdk');
const { include, exclude } = require('./action');

const flownodes = sdk.init(module);

// The unique name of your flow-node.  You can define multiple flow-nodes in this
// file, but one is typical.
flownodes.add('gm-objectfilter', {
	name: 'Filter',
	icon: 'icon.svg',
	description: 'Filter the object fields.'
});

// Include Method
flownodes
	.method('include', {
		name: 'Include',
		description: 'Include the selected fields.'
	})
	.parameter('source', {
		description: 'The source object to filter.',
		type: 'object'
	})
	.parameter('fields', {
		description: 'The the fields to include.',
		type: 'array',
		items: {
			type: 'string'
		}
	})
	.output('next', {
		name: 'Next',
		context: '$.filtered',
		schema: {
			type: 'object'
		}
	})
	.output('error', {
		name: 'Error',
		context: '$.error',
		schema: {
			type: 'string'
		}
	})
	.action(include);

// Exclude Method
flownodes
	.method('exclude', {
		name: 'Exclude',
		description: 'Include the selected fields.'
	})
	.parameter('source', {
		description: 'The source object to filter.',
		type: 'object'
	})
	.parameter('fields', {
		description: 'The the fields to exclude.',
	})
	.output('next', {
		name: 'Next',
		context: '$.filtered',
		schema: {
			type: 'object'
		}
	})
	.output('error', {
		name: 'Error',
		context: '$.error',
		schema: {
			type: 'string'
		}
	})
	.action(exclude);

exports = module.exports = flownodes;
