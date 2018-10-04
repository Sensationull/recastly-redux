npm install -g live-server
npm install -g babel-cli
babel . --out-dir compiled --presets=react --ignore=node_modules,compiled --source-maps inline -w &
live-server &
webpack -d --watch &
