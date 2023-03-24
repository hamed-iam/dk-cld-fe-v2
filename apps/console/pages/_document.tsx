/* eslint-disable react/display-name */
// ? this is the reference of code for antd ssr and it seem to work, needs more testing https://github.com/vercel/next.js/pull/44015/files#diff-94faec492176ae2f396da10c6159c337f7cf23e28aac6a62f5229b285555096b
// ? related doc https://beta.nextjs.org/docs/styling/css-in-js
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';

export default class CustomDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const originalRenderPage = ctx.renderPage;
    const cache = createCache();
    const sheet = new ServerStyleSheet();

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) =>
          sheet.collectStyles(
            <StyleProvider cache={cache}>
              <App {...props} />
            </StyleProvider>
          ),
        enhanceComponent: (Component) => Component,
      });

    const initialProps = await Document.getInitialProps(ctx);
    const styles = sheet.getStyleElement();

    // return { ...intialProps, styles };
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {...styles}
          {/* hacky code, `extractStyle` does not currently support returning JSX or related data. */}
          <script
            dangerouslySetInnerHTML={{
              __html: `</script>${extractStyle(cache)}<script>`,
            }}
          />
        </>
      ),
    };
  }

  render() {
    return (
      <Html>
        <Head>{this.props.styles}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
