import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'store.ts',
  plugins: [typescript()],
  output: [{
    file: 'dist/idb-localstorage-iife.js',
    format: 'iife',
    name: 'idbLocalStorage'
  }, {
    file: 'dist/idb-localstorage-cjs.js',
    format: 'cjs'
  }, {
    file: 'dist/idb-localstorage.mjs',
    format: 'es'
  }, {
    file: 'dist/idb-localstorage-amd.js',
    format: 'amd',
  }]
};
