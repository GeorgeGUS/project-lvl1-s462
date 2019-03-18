install:
	npm install

start:
	npx babel-node src/bin/brain-games.js

lint:
	npx eslint *.js

publish:
	npm publish