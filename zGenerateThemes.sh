#!/bin/bash

lessc ./src/less/themes/redindex.less ./src/css/red.css
lessc ./src/less/themes/blueindex.less ./src/css/blue.css
lessc ./src/less/themes/greenindex.less ./src/css/green.css
lessc ./src/less/themes/darkredindex.less ./src/css/darkred.css
lessc ./src/less/themes/darkblueindex.less ./src/css/darkblue.css
lessc ./src/less/themes/darkgreenindex.less ./src/css/darkgreen.css
echo ""
echo "end of script"
$SHELL