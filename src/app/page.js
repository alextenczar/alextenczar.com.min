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
  let local = 'Kanazawa, Japan'
  let encodedLocal = encodeURIComponent(local)

  return (
    <main className={styles.main}>
      <h1>Alex Tenczar</h1>

      <div id="about">
        <p>
          Hi, I&apos;m Alex &ndash; a full stack developer. I graduated with my master&apos;s degree in information technology from the <a target="_blank" rel="noopener noreferrer" href="https://www.unh.edu/">University of New Hampshire</a>. In my free time I often find myself building web applications around modern SEO, accessibility, and security practices. When I&apos;m not building something, I enjoy travelling and&nbsp;<a id="photo-link" target="_blank" rel="noopener noreferrer" href="https://vsco.co/alextenczar/gallery">taking photos</a>. I currently live in Japan and work as a contract developer for universities in the United States.
        </p>
      </div>
      <a target="_blank" rel="noopener noreferrer" href="https://www.notion.so/alextenczar/Resume-Alex-Tenczar-5d53c29076404671bcf568ec745feb03?pvs=4">My Resume</a><br />
      <div>
      </div>
      <div id="contact">
        <h2>Connect with me on</h2>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/alexander-tenczar">LinkedIn</a>, <a target="_blank" rel="noopener noreferrer" href="https://github.com/alextenczar">GitHub</a><span>, or send me an </span><a target="_blank" rel="noopener noreferrer" href="https://hcn2tnwe8l1.typeform.com/to/YlJlLq5w">email</a>.
      </div>

      <span><a target="_blank" rel="noopener noreferrer" className='local' href={`https://www.google.com/maps/search/${encodedLocal}`}>{local}<span className='locationDot'></span></a></span>
      <br></br><Weather lat='36.56132540' lon='136.65620510' tempUnit='f' />
      <br></br><Clock timezone="Asia/Tokyo" timeFormat='12hr' />

      <HoverImage imageUrl="/photography-hover.webp" altText="Photography Gif" targetElementId="photo-link"></HoverImage>
      <footer className={styles.footer}>
        <Options />
      </footer>
    </main >
  )
}
