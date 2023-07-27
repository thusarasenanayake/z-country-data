#!/usr/bin/env sh

node scripts/fetcher

./node_modules/.bin/vite  build
./node_modules/.bin/terser  ./dist/z-country-data.js --output ./dist/z-country-data.js
ls -hsl dist


