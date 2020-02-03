#!/bin/bash

lessc ./src/less/index.less ./public/css/index.css
lessc ./src/less/themes/redindex.less ./public/css/red.css
lessc ./src/less/themes/blueindex.less ./public/css/blue.css
lessc ./src/less/themes/greenindex.less ./public/css/green.css
lessc ./src/less/themes/darkredindex.less ./public/css/darkred.css
lessc ./src/less/themes/darkblueindex.less ./public/css/darkblue.css
lessc ./src/less/themes/darkgreenindex.less ./public/css/darkgreen.css
echo ""
echo "end of script"
$SHELL