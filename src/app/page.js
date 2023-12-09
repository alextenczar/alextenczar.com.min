import Weather from './components/Weather';
import Options from './components/Options';
import styles from './page.module.css'
import dynamic from 'next/dynamic';
const Clock = dynamic(() => import('./components/Clock'), { ssr: false });
import HoverImage from './components/HoverImage';

export const metadata = {
  metadataBase: new URL('https://alextenczar.com'),
  alternates: {
    canonical: '/',
  },
}

export default function Home() {
  let local = 'New Hampshire, USA'
  let encodedLocal = encodeURIComponent(local)

  return (
    <main className={styles.main}>
      <h1>Alex Tenczar</h1>

      <div id="about">
        <p>
          Hi, I&apos;m Alex &ndash; a full stack developer. I graduated with my master&apos;s degree in information technology from the <a target="_blank" rel="noopener noreferrer" href="https://www.unh.edu/">University of New Hampshire</a>. In my free time I often find myself building web applications around modern SEO, accessibility, and security practices. When I&apos;m not building something, I enjoy travelling and&nbsp;<a id="photo-link" target="_blank" rel="noopener noreferrer" href="https://vsco.co/alextenczar/gallery">taking photos</a>. I&apos;m currently working as a contract developer for a few universities in the United States.
        </p>
      </div>
      <a target="_blank" rel="noopener noreferrer" href="https://www.notion.so/alextenczar/Resume-Alex-Tenczar-5d53c29076404671bcf568ec745feb03?pvs=4">My Resume</a><br />
      <div>
      </div>
      <div id="contact">
        <h2>Connect with me on</h2>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/alexander-tenczar">LinkedIn</a>, <a target="_blank" rel="noopener noreferrer" href="https://github.com/alextenczar">GitHub</a><span>, or send me an </span><a target="_blank" rel="noopener noreferrer" href="https://hcn2tnwe8l1.typeform.com/to/YlJlLq5w">email</a>.
      </div>
      <HoverImage imageUrl="/photography-hover.webp" altText="Photography Gif" targetElementId="photo-link"></HoverImage>
    </main >
  )
}
