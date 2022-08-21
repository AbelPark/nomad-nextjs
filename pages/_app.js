import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <h1>hello</h1>
      <style jsx global>{`
        h1 {
          border: 2px solid red;
        }
      `}</style>
    </Layout>
  );
}
