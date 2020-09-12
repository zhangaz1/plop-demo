const { NodePlopAPI } = require('plop');

module.exports = function(plop) {
	plop.setHelper('upperCase', (text) => text.toUpperCase());

	plop.setPartial('partialComment', '// partial comments');

	plop.setGenerator('basics', {
		description: 'this is a skeleton plopfile',
		prompts: [],
		actions: [],
	});

	plop.setGenerator('controller', {
		description: 'application controller logic',
		prompts: [{
			type: 'input',
			name: 'name',
			message: 'controller name please',
		}],
		actions: [{
			type: 'add',
			path: 'src/{{name}}.ts',
			templateFile: 'plop-templates/controller.ts.hbs',
		}],
	});


};