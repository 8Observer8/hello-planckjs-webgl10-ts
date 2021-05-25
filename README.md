This example shows how to use Planck.js with TypeScript in Debug and Release modes: [hello-planckjs-webgl10-ts](https://github.com/8Observer8/hello-planckjs-webgl10-ts)

You should install these modules globally:

- npm i typescript -g
- npm i browserify -g
- npm i uglify-js -g

Install all packages from `package.json` using the command: `npm i`

Comment/Uncomment Debug/Release in `index.html` and `main.ts` (see comments in these files).

Use these commands to build the example:

- `npm run debug` - to set breakpoint in code editors and to publish on PlayGround (like Plunker), for example: [Hello Planck.js. WebGL 1.0, TypeScript](https://plnkr.co/edit/MyJOyvRtIDAhpKA5?preview)
- `npm run release` - to bundle in `bundle.min.js` for production
