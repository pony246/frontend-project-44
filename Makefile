.PHONY: install

install:
	npm ci
brain-games:
	node bin/brain-games.js

publish:
	npm version patch
	npm publish

.PHONY: lint
lint:
	npx eslint .