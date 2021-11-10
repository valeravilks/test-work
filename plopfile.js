const config = require('config');
const clientPrefix = config.get('plop.client-prefix');

const PatternTypes = {
	ATOM: 'atom',
	MOLECULE: 'molecule',
	ORGANISM: 'organism'
}

const SubFolderTypes = {
	BASE: 'base',
	CUSTOM: 'custom',
	DEFAULT: 'default',
	SAMPLE: 'sample'
}

module.exports = plop => {
	const requireValue = (value) => (/.+/.test(value)) ? true : 'this is a required input';

	// create a generator for atomic element
	plop.setGenerator('Element', {
		description: 'Creates an Atomic component',
		prompts: [
			{
				type: 'list',
				name: 'patternType',
				message: 'Component Pattern Type?',
				choices: [PatternTypes.ATOM, PatternTypes.MOLECULE, PatternTypes.ORGANISM],
				default: PatternTypes.ORGANISM,
				validate: value => requireValue(value),
			},
			{
				type: 'list',
				name: 'elementSubFolderType',
				message:
					'Component Sub Folder Type? (Should be custom in most cases)',
				choices: [SubFolderTypes.BASE, SubFolderTypes.CUSTOM, SubFolderTypes.DEFAULT, SubFolderTypes.SAMPLE],
				validate: value => requireValue(value),
				when: prevAnswers => {
					// Show element type question only for the Organism.
					const { patternType } = prevAnswers;
					return patternType === PatternTypes.ORGANISM ? true : false;
				},
				default: SubFolderTypes.CUSTOM,
			},
			{
				type: 'input',
				name: 'elementName',
				message: 'Element name?',
				validate: value => requireValue(value),
			},
			{
				type: 'confirm',
				name: 'addJsFile',
				message: 'Add a Javascript file for the component?',
				default: false,
			},
			{
				type: 'input',
				name: 'jsModuleName',
				message:
					'Javascript Module name?(Please press Enter for the default name)',
				validate: value => requireValue(value),
				when: prevAnswers => {
					const { addJsFile } = prevAnswers;
					return addJsFile;
				},
				default: prevAnswers => {
					const { elementSubFolderType, elementName } = prevAnswers;
					// Convert element name to camelCase
					const nameInCamelCase = elementName
						.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (word, index) =>
							index === 0 && !elementSubFolderType
								? word.toLowerCase()
								: word.toUpperCase(),
						)
						.replace(/\s+/g, '');
					const prefix = elementSubFolderType === SubFolderTypes.CUSTOM ? clientPrefix : elementSubFolderType;
					return `${
						prefix
							? prefix
							: ''
					}${nameInCamelCase}`;
				},
			},
			{
				type: 'confirm',
				name: 'isBlock',
				message: 'Add to block type template?',
				default: true,
				when: function(prevAnswers) {
					const { patternType } = prevAnswers;
					return patternType === PatternTypes.ORGANISM ? true : false;
				},
			},
		],

		actions: data => {
			const { patternType, elementSubFolderType, addJsFile, isBlock } = data;
			let subFolderName = '';
			let patternName = '';
			let prefix = '';

			// Set 'base', 'custom', 'default' prefixes and subfolder.
			if (patternType === PatternTypes.ORGANISM) {
				prefix = `${elementSubFolderType}-`;
				subFolderName = `${elementSubFolderType}/`;
				if (elementSubFolderType === SubFolderTypes.CUSTOM) {
					prefix = `${clientPrefix}-`;
				}
			}

			// Set pattern full name with numbers
			switch (patternType) {
				case PatternTypes.ATOM:
					patternName = `01-${patternType}s`;
					break;
				case PatternTypes.MOLECULE:
					patternName = `02-${patternType}s`;
					break;
				case PatternTypes.ORGANISM:
					patternName = `03-${patternType}s`;
					break;
			}

			// Run actions
			let actions = [
				{
					type: 'add',
					path: `src/patterns/${patternName}/${subFolderName}${prefix}{{dashCase elementName}}/_${prefix}{{dashCase elementName}}.scss`,
					templateFile: `internals/scripts/plop-templates/scss-${patternType}.txt`,
					abortOnFail: true,
					data: {
						prefix
					}
				},
				{
					type: 'add',
					path: `src/patterns/${patternName}/${subFolderName}${prefix}{{dashCase elementName}}/${prefix}{{dashCase elementName}}.twig`,
					templateFile: `internals/scripts/plop-templates/twig-${patternType}.txt`,
					abortOnFail: true,
					data: {
						prefix
					}
				},
				{
					type: 'modify',
					path: 'src/patterns/_all.scss',
					pattern: /(\/\/IMPORT FROM PLOP)/gi,
					template: `$1\n@import '../patterns/${patternName}/${subFolderName}${prefix}{{dashCase elementName}}/${prefix}{{dashCase elementName}}';`,
				},
			];

			// Add organism to repeater block if chosen
			if (isBlock) {
				actions = actions.concat([
					{
						type: 'modify',
						path:
							'src/patterns/03-organisms/base/base-block-repeater/base-block-repeater-import-list.twig',
						pattern: /({# IMPORT FROM PLOP #})/gi,
						template: `$1\n\t{% elseif section.acf_fc_layout == '${prefix.replace(
							'-',
							'_',
						)}{{snakeCase elementName}}' %} \n\t\t{% include '${patternName}/${subFolderName}${prefix}{{dashCase elementName}}/${prefix}{{dashCase elementName}}.twig' %}\n`,
					},
				]);
			}

			// Add js file in script.js
			if (addJsFile) {
				actions = actions.concat([
					{
						type: 'add',
						path: `src/patterns/${patternName}/${subFolderName}${prefix}{{dashCase elementName}}/${prefix}{{dashCase elementName}}.js`,
						templateFile: `internals/scripts/plop-templates/js.txt`,
						abortOnFail: true,
					},
					{
						type: 'modify',
						path: 'src/js/scripts.js',
						pattern: /(\/\/IMPORT FROM PLOP)/gi,
						template: `$1\nimport {{ camelCase jsModuleName }} from '../patterns/${patternName}/${subFolderName}${prefix}{{dashCase elementName}}/${prefix}{{dashCase elementName}}';`,
					},
				]);
			}
			return actions;
		},
	});
};
