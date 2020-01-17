# Makefile

install:
	npm install --save-dev @babel/core @babel/cli @babel/node @babel/preset-env @babel/register

install_eslint:
		npm install --save-dev eslint eslint-config-airbnb-base eslint-plugin-babel babel-eslint eslint-plugin-import

start-server:
		nodemon --exec babel-node -- src/bin/launch.js

publish:
		npm publish --dry-run

lint:
		npx eslint src/.

test:
		npx jest
