const config = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'type-enum': [
			2,
			'always',
			[
				'build',
				'chore',
				'comment',
				'design',
				'docs',
				'feat',
				'fix',
				'perf',
				'refactor',
				'remove',
				'rename',
				'revert',
				'style',
				'test',
			],
		],
	},
};

export default config;
