const { NodePlopAPI } = require('plop');

module.exports = function(plop) {
	plop.setHelper('upperCase', (text) => text.toUpperCase());

	plop.setPartial('partialComment', '// partial comments');

	plop.setActionType('doTheThing', (answer, config, plop) => {
		console.log('do the thing...', config);
		return 'doTheThing: success';
	});

	plop.setActionType('doTheAsyncThing', (answers, config, plop) => {
		return new Promise((resolve) => {
			setTimeout(() => {
				console.log('doTheAsyncThing...', config);
				resolve('doTheAsyncTing success!');
			}, 200);
		})
	});

	plop.setGenerator('doAction', {
		description: 'call set actions',
		prompts: [],
		actions: [{
			type: 'doTheThing',
			configProp: 'avaliable from the config param',
		}, {
			type: 'doTheAsyncThing',
			speed: 'slow',
		}],
	});

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