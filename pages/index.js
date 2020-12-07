import Link from 'next/link';
import Head from 'next/head';

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="title">
        Read{' '}
        <Link href="/authors/me"><a>this page</a></Link>
        <footer>
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </footer>
      </h1>
    </>
  );
};
