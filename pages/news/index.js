import Link from "next/link";
const News = () => {
  return (
    <>
      <h1>News file</h1>
      <main>
        <ul>
          <li>
            <Link href="/news/1">India registers a dominet victory against the Pakistan</Link>
          </li>
          <li><Link href='/news/2'>Israil start the air strikes on gaza strip</Link></li>
        </ul>
      </main>
    </>
  );
};

export default News;
