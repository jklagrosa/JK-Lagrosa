import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>JK Lagrosa • Front-End Web Developer, Philippines</title>
        <meta
          name="description"
          content="Hi, my name is JK Lagrosa, and I'm a Front-end web developer from the Philippines. I designed and developed websites and web applications with a focus on usability, accessibility, and performance. Using technologies such as HTML, CSS, JavaScript, TypeScript, React, Next.js, MongoDB, GraphQL, Bootstrap, and Sass. I'm passionate about building responsive, dynamic, SEO-friendly websites and web apps."
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
