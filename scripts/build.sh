#!/usr/bin/env sh

node scripts/fetcher

./node_modules/.bin/babel  src/ --out-dir lib/ --env-name production --copy-files
