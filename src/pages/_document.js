import Document, { Html, Head, Main, NextScript } from 'next/document';
import Footer from './components/footer';


class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="container mx-auto">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
