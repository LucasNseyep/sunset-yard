import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello there! I'm Lucas (put a little french on that) and I build things.</p>
        <p>A bit about me:</p>
        <ul
          class="nav justify-content-center  "
        >
          <li>I was born and grew up in Beijing, China</li>
          <li>I studied materials science at Imperial College London</li>
          <li>Early professional experiences at Google and Shopify</li>
          <li>Now I'm <Link href="https://www.joinodin.com/">democratising private market investing</Link> by writing code, and designing and automating processes</li>
        </ul>

        <p>Personal Projects and Learning:</p>
        <ul
          class="nav justify-content-center  "
        >
          <li>I'm building a cloud identification computer vision model while teaching myself machine learning. Learn more <Link href="https://github.com/LucasNseyep/belle-weder">here</Link>.</li>
          <li>I'm teaching myself TypeScript, React, and Next - hence the blog :)</li>
          <li>One more project that's in stealth - stay tuned . . .</li>
        </ul>

        <p>Books:</p>
        <ul
          class="nav justify-content-center  "
        >
          <li>Reading: <em>1984</em>,<em>Flash Crash</em>, <em>Will it make the boat go faster?</em></li>
          <li>The one I revisit: <em>Who moved my cheese?</em>, <em>Steal like an artist</em>, <em>Show your work</em>, <em>Tools of Titans</em>, <em>Build</em>, <em>Steve Jobs</em></li>
          <li>Past reads: <em>Born a crime</em>, <em>The man who solved the market</em>, <em>Surely you're joking, Mr. Feyneman!</em>, <em>The Code</em>, <em>A man for all Markets</em></li>
        </ul>

                <p>Quotes I'm pondering and beliefs I'm building:</p>
        <ul
          class="nav justify-content-center  "
        >
          <li>Belief comes before ability</li>
          <li>Those at the edge come to control the center</li>
          <li>There is no speed limit apart from the speed of light</li>
          <li>Action expresses priority</li>
          <li>Do things differently for the sake of being different</li>
          <li>Bad boys move in silence</li>
          <li>You can't necessarily be the smartest, but you can always be the most knowledgeable</li>
          <li>Tell me how you spend your time and I'll tell you what you'll amount to</li>
          <li>Other people just around the corner are on this shit every single day. Are you?</li>
          <li>Make friends with the imminent dead.</li>
          <li>Intensity is the price of excellence.</li>
        </ul>

        <p>
          Oh and if you've scrolled down this far: first of all thank you very much, second of all this is actually a <b>blog where I talk about interesting companies and products</b> I've come accross that were saddly sunsetted.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Posts</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
