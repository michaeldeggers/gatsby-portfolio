/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import wrapWithProvider from './src/utils/wrap-with-provider';
import './src/styles/global.css';

export const wrapRootElement = wrapWithProvider;