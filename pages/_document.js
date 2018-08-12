import Document, { Head, Main, NextScript } from 'next/document';


export default class MyDocument extends Document {
  render() {
    console.log('Document')
    return (
      <html>
        <Head>
          {
           <link rel="stylesheet" href="/_next/static/style.css" />
          }
        </Head>
        <body>
          <Main/>
          <NextScript />
        </body>
      </html>
    );
  };
};