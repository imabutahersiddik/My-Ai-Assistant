import '../styles/globals.css';
import RootLayout from '../layout'; // Adjust the path as necessary

function MyApp({ Component, pageProps }) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default MyApp;