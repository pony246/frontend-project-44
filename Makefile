.PHONY: install

install:
	npm ci
brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

brain-calc:
	node bin/brain-calc.js

publish:
	npm version patch
	npm publish

.PHONY: lint
lint:
	npx eslint .