import { SanityCodegenConfig } from 'sanity-codegen';

// ref: https://www.sanity.io/plugins/sanity-codegen

const config: SanityCodegenConfig = {
  schemaPath: './sanity/schemas',
  outputPath: './types/sanity.ts',

  // NOTE: The CLI ships with a pre-configured babel config that shims out
  // the Sanity parts system. This babel config does not read from any
  // `.babelrc` or `babel.config.js`. You can only configure extra babel
  // options here.
  // babelOptions: require('./.babelrc.json'), // (optional)
};

export default config;