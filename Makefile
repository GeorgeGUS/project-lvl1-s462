install:
	npm install

start:
	npx babel-node src/bin/brain-games.js
	npx babel-node src/bin/brain-even.js
	npx babel-node src/bin/brain-calc.js
	npx babel-node src/bin/brain-gcd.js

lint:
	npx eslint .

publish:
	npm publish