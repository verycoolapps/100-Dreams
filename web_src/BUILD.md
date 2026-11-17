# Web runtime source

`web/runtime.bundle.js` is built from this folder. It contains Three.js r160 and three-mesh-bvh 0.7.3, so generated worlds run offline.

    npm i three@0.160.1 three-mesh-bvh@0.7.3 esbuild@0.19.12
    npx esbuild web_src/main.js --bundle --format=iife --minify --target=es2020 --loader:.json=json --outfile=web/runtime.bundle.js

Modules: engine/ (render, world, player, actors, audio), games/ (engine, 18 mechanics, quiz, randomizer), ui.js, main.js.
The 100-game catalog lives in web/games.json and is shared with the Python validator.
