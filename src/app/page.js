import styles from './page.module.css'

import dynamic from 'next/dynamic';

const Clock = dynamic(() => import('./components/Clock'), { ssr: false });

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Alex Tenczar</h1>
      <div>
        <p>
          Hi, I&apos;m Alex &ndash; a Full Stack Developer. I graduated with my Master in Science in Information technology from the <a target="_blank" rel="noopener noreferrer" href="https://www.unh.edu/">University of New Hampshire</a>. In my free time I often find myself building web applications around modern SEO, accessibility, and security practices. When I&apos;m not building something, I enjoy travelling and taking photos. I&apos;m currently working as a contract developer for various Universities Across the United States.
        </p>
      </div>
      <a target="_blank" rel="noopener noreferrer" href="https://www.notion.so/alextenczar/Resume-Alex-Tenczar-5d53c29076404671bcf568ec745feb03?pvs=4">Resume</a><br />
      <div>
      </div>
      <div>
        <h2>Get In Touch:</h2>
        <a target="_blank" rel="noopener noreferrer" href="https://hcn2tnwe8l1.typeform.com/to/YlJlLq5w">EMAIL</a><br></br>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/alexander-tenczar">Linkedin</a><br />
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/alextenczar">Github</a><br />
        <a target="_blank" rel="noopener noreferrer" href="https://vsco.co/alextenczar/gallery">Photography</a><br />
      </div>

      <span><span className={styles.locationDot}></span><p style={{ display: 'inline-block' }}>New Hampshire, USA</p><Clock timezone="America/New_York" /></span>
    </main>
  )
}
