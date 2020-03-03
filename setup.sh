#!/bin/bash

npm install
cd ../

git clone https://github.com/mathigon/core.js
cd core.js
npm install
npm link
cd ../

git clone https://github.com/mathigon/fermat.js
cd fermat.js
npm install
npm link
npm link @mathigon/core
cd ../

git clone https://github.com/mathigon/hilbert.js
cd hilbert.js
npm install
npm link
npm link @mathigon/core
npm link @mathigon/fermat
cd ../

git clone https://github.com/mathigon/boost.js
cd boost.js
npm install
npm link
npm link @mathigon/core
npm link @mathigon/fermat
cd ../

git clone https://github.com/mathigon/parser
cd parser
npm install
npm link
npm link @mathigon/core
npm link @mathigon/hilbert
cd ../

cd textbooks
npm install
npm link
npm link @mathigon/core
npm link @mathigon/fermat
npm link @mathigon/hilbert
npm link @mathigon/boost
npm link @mathigon/parser
