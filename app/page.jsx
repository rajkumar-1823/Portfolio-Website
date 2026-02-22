import skillsData from '../public/skills.json';
import projectsData from '../public/projects.json';
import ParticlesBackground from './components/ParticlesBackground';

// JSON-LD structured data for SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Rajkumar',
  jobTitle: 'Junior Software Developer',
  url: 'https://rajkumar-portfolio.vercel.app',
  email: 'rajkumarcse18@gmail.com',
  telephone: '+91 9360749095',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Virudhunagar',
    addressRegion: 'TamilNadu',
    addressCountry: 'IN',
  },
  worksFor: {
    '@type': 'Organization',
    name: 'Skillmin Technology',
  },
  alumniOf: [
    {
      '@type': 'EducationalOrganization',
      name: 'P.S.R Engineering College',
    },
    {
      '@type': 'EducationalOrganization',
      name: 'Arasan Ganesan Polytechnic College',
    },
  ],
  knowsAbout: [
    'JavaScript', 'React', 'Node.js', 'Express.js', 'MongoDB',
    'Java', 'Python', 'MERN Stack', 'HTML', 'CSS', 'Git',
    'Kafka', 'Next.js', 'Full-Stack Web Development',
  ],
  sameAs: [
    'https://www.linkedin.com/in/rajkumar-dev18/',
    'https://github.com/rajkumar-1823',
  ],
};

export default function Home() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/*  navbar starts  */}
      <header role="banner">
        <a href="/" className="logo" aria-label="Rajkumar — Home">
          <i className="fab fa-node-js" aria-hidden="true"></i> Rajkumar
        </a>

        <button
          id="menu"
          className="fas fa-bars"
          aria-label="Toggle navigation menu"
          aria-expanded="false"
          aria-controls="main-nav"
        ></button>
        <nav className="navbar" id="main-nav" aria-label="Main navigation">
          <ul>
            <li><a className="active" href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      {/*  navbar ends  */}

      <main id="main-content">

        {/*  hero section starts  */}
        <section className="home" id="home" aria-label="Hero">
          <ParticlesBackground />

          <div className="content">
            <h1 data-reveal="left">Hi There,<br /> I&apos;m Rajkumar</h1>
            <p data-reveal="left" data-reveal-delay="200">i am into <span className="typing-text"></span></p>
            <a href="#about" className="btn" data-reveal="bottom" data-reveal-delay="400">
              <span>About Me</span>
              <i className="fas fa-arrow-circle-down" aria-hidden="true"></i>
            </a>
            <div className="socials" data-reveal="bottom" data-reveal-delay="600">
              <ul className="social-icons">
                <li>
                  <a className="linkedin" aria-label="LinkedIn" href="https://www.linkedin.com/in/rajkumar-dev18/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a className="github" aria-label="GitHub" href="https://github.com/rajkumar-1823" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="image" data-reveal="right" data-reveal-delay="400">
            <img draggable="false" className="tilt" src="./assets/images/hero.png" alt="Rajkumar — Full-Stack Web Developer" />
          </div>
        </section>
        {/*  hero section ends  */}


        {/*  about section starts  */}
        <section className="about" id="about" aria-label="About Me">
          <h2 className="heading" data-reveal="top"><i className="fas fa-user-alt" aria-hidden="true"></i> About <span>Me</span></h2>

          <div className="row">

            <div className="image" data-reveal="left">
              <img draggable="false" className="tilt" src="./assets/images/profile2.png" alt="Profile photo of Rajkumar" />
            </div>
            <div className="content">
              <h3 data-reveal="right">I&apos;m Rajkumar</h3>
              <span className="tag" data-reveal="right" data-reveal-delay="100">Web Developer</span>

              <p data-reveal="right" data-reveal-delay="200">
                I am a passionate Web Developer currently working as a Junior Software Developer
                at Skillmin Technology. With a strong foundation in Java, Python, and full-stack
                web development, I specialize in building efficient, scalable, and user-friendly
                applications using the MERN Stack. I thrive in collaborative environments and
                love turning ideas into impactful digital solutions.
              </p>

              <div className="box-container" data-reveal="right" data-reveal-delay="300">
                <div className="box">
                  <p><span>email : </span> rajkumarcse18@gmail.com</p>
                  <p><span>place : </span> Virudhunagar, TamilNadu</p>
                </div>
              </div>

              <div className="resumebtn" data-reveal="bottom" data-reveal-delay="400">
                <a href="#" target="_blank" rel="noopener noreferrer" className="btn">
                  <span>Resume</span>
                  <i className="fas fa-chevron-right" aria-hidden="true"></i>
                </a>
              </div>

            </div>
          </div>
        </section>
        {/*  about section ends  */}

        {/*  skills section starts  */}
        <section className="skills" id="skills" aria-label="Skills and Abilities">

          <h2 className="heading" data-reveal="top"><i className="fas fa-laptop-code" aria-hidden="true"></i> Skills &amp; <span>Abilities</span></h2>

          <div className="container">
            <div className="row" id="skillsContainer" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem' }}>
              {skillsData.map((skill, index) => (
                <div className="bar" key={index} data-reveal="zoom" data-reveal-delay={`${Math.min((index % 8) * 100, 800)}`}
                  style={{
                    padding: '1rem',
                    borderRadius: '0.75rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '8rem',
                    height: '8rem',
                    transition: 'all 0.3s ease',
                  }}>
                  <div className="info" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
                    <img src={skill.icon} alt={`${skill.name} icon`} style={{ width: '3.5rem', height: '3.5rem', objectFit: 'contain' }} className="animate-float" />
                    <span style={{ fontWeight: 'bold', fontSize: '0.85rem', textAlign: 'center' }}>{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/*  skills section ends  */}

        {/*  education section starts  */}
        <section className="education" id="education" aria-label="Education">

          <h2 className="heading" data-reveal="top"><i className="fas fa-graduation-cap" aria-hidden="true"></i> My <span>Education</span></h2>

          <p className="qoute" data-reveal="fade">Education is not the learning of facts, but the training of the mind to think.</p>

          <div className="box-container">

            <div className="box" data-reveal="left">
              <div className="image">
                <img draggable="false" src="./assets/images/educat/college.jpg" alt="P.S.R Engineering College campus" />
              </div>
              <div className="content">
                <h3>B.E - Computer Science Engineering</h3>
                <p>P.S.R Engineering College | CGPA - 7.79</p>
                <h4>2022 - 2025 | Completed</h4>
              </div>
            </div>

            <div className="box" data-reveal="right" data-reveal-delay="200">
              <div className="image">
                <img draggable="false" src="./assets/images/educat/school.jpg" alt="Arasan Ganesan Polytechnic College campus" />
              </div>
              <div className="content">
                <h3>Diploma - Mechanical Engineering</h3>
                <p>Arasan Ganesan Polytechnic College | Percentage - 78</p>
                <h4>2017 - 2020 | Completed</h4>
              </div>
            </div>

          </div>
        </section>
        {/*  education section ends  */}


        {/*  work project section starts  */}
        <section className="work" id="work" aria-label="Projects">

          <h2 className="heading" data-reveal="top"><i className="fas fa-laptop-code" aria-hidden="true"></i> Projects <span>Made</span></h2>

          <div className="box-container">
            {projectsData.map((project, index) => (
              <div className="box tilt" key={index} data-reveal="bottom" data-reveal-delay={`${Math.min(index * 200, 800)}`}>
                <img draggable="false" src={`/assets/images/projects/${project.image}.png`} alt={`Screenshot of ${project.name} project`} />
                <div className="content">
                  <div className="tag">
                    <h3>{project.name}</h3>
                  </div>
                  <div className="desc">
                    <p>{project.desc}</p>
                    <div className="btns">
                      <a href={project.links.view} className="btn" target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} live demo`}>
                        <i className="fas fa-eye" aria-hidden="true"></i> View
                      </a>
                      <a href={project.links.code} className="btn" target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} source code`}>
                        Code <i className="fas fa-code" aria-hidden="true"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </section>
        {/*  work project section ends  */}

        {/*  experience section starts  */}
        <section className="experience" id="experience" aria-label="Professional Experience">

          <h2 className="heading" data-reveal="top"><i className="fas fa-briefcase" aria-hidden="true"></i> Experience </h2>

          <div className="timeline" data-reveal="fade" role="list" aria-label="Career timeline">

            <div className="container right" data-reveal="right" data-reveal-delay="200" role="listitem">
              <div className="content">
                <div className="tag">
                  <h3>Skillmin Technology</h3>
                </div>
                <div className="desc">
                  <p><strong>Junior Software Developer</strong></p>
                  <p>July 2025 - Present</p>
                </div>
              </div>
            </div>

            <div className="container left" data-reveal="left" data-reveal-delay="400" role="listitem">
              <div className="content">
                <div className="tag">
                  <h3>Phoenix Softech</h3>
                </div>
                <div className="desc">
                  <p><strong>MERN Stack Intern</strong></p>
                  <p>July 2024</p>
                </div>
              </div>
            </div>

            <div className="container right" data-reveal="right" data-reveal-delay="600" role="listitem">
              <div className="content">
                <div className="tag">
                  <h3>Cognifyz Technologies</h3>
                </div>
                <div className="desc">
                  <p><strong>Web Development Intern</strong></p>
                  <p>June 2024</p>
                </div>
              </div>
            </div>

          </div>

        </section>
        {/*  experience section ends  */}

        {/*  contact section starts  */}
        <section className="contact" id="contact" aria-label="Contact">

          <h2 className="heading" data-reveal="top"><i className="fas fa-headset" aria-hidden="true"></i> Get in <span>Touch</span></h2>

          <div className="container" data-reveal="bottom" data-reveal-delay="200">
            <div className="content">
              <div className="image-box" data-reveal="left" data-reveal-delay="300">
                <img draggable="false" src="./assets/images/contact1.png" alt="Contact illustration" />
              </div>
              <form id="contact-form" data-reveal="right" data-reveal-delay="400" aria-label="Contact form">

                <div className="form-group">
                  <div className="field">
                    <label htmlFor="contact-name" className="sr-only">Name</label>
                    <input id="contact-name" type="text" name="name" placeholder="Name" required autoComplete="name" />
                    <i className='fas fa-user' aria-hidden="true"></i>
                  </div>
                  <div className="field">
                    <label htmlFor="contact-email" className="sr-only">Email</label>
                    <input id="contact-email" type="email" name="email" placeholder="Email" required autoComplete="email" />
                    <i className='fas fa-envelope' aria-hidden="true"></i>
                  </div>
                  <div className="field">
                    <label htmlFor="contact-phone" className="sr-only">Phone</label>
                    <input id="contact-phone" type="tel" name="phone" placeholder="Phone" autoComplete="tel" />
                    <i className='fas fa-phone-alt' aria-hidden="true"></i>
                  </div>
                  <div className="message">
                    <label htmlFor="contact-message" className="sr-only">Message</label>
                    <textarea id="contact-message" placeholder="Message" name="message" required></textarea>
                    <i className="fas fa-comment-dots" aria-hidden="true"></i>
                  </div>
                </div>
                <div className="button-area">
                  <button type="submit">
                    Submit <i className="fa fa-paper-plane" aria-hidden="true"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
        {/*  contact section ends  */}

      </main>

      {/*  footer section starts  */}
      <footer className="footer" role="contentinfo">

        <div className="box-container" data-reveal="bottom">

          <div className="box">
            <h3>Rajkumar&apos;s Portfolio</h3>
            <p>Thank you for visiting my personal portfolio website. Connect with me over socials. <br /> <br /> Keep Rising 🚀</p>
          </div>

          <div className="box">
            <h3>quick links</h3>
            <a href="#home"><i className="fas fa-chevron-circle-right" aria-hidden="true"></i> home</a>
            <a href="#about"><i className="fas fa-chevron-circle-right" aria-hidden="true"></i> about</a>
            <a href="#skills"><i className="fas fa-chevron-circle-right" aria-hidden="true"></i> skills</a>
            <a href="#education"><i className="fas fa-chevron-circle-right" aria-hidden="true"></i> education</a>
            <a href="#work"><i className="fas fa-chevron-circle-right" aria-hidden="true"></i> work</a>
            <a href="#experience"><i className="fas fa-chevron-circle-right" aria-hidden="true"></i> experience</a>
          </div>

          <div className="box">
            <h3>contact info</h3>
            <p> <i className="fas fa-phone" aria-hidden="true"></i> +91 9360749095</p>
            <p> <i className="fas fa-envelope" aria-hidden="true"></i> rajkumarcse18@gmail.com</p>
            <p> <i className="fas fa-map-marked-alt" aria-hidden="true"></i> Virudhunagar, TamilNadu</p>
            <div className="share">
              <a href="https://www.linkedin.com/in/rajkumar-dev18/" className="fab fa-linkedin" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"></a>
              <a href="https://github.com/rajkumar-1823" className="fab fa-github" aria-label="GitHub" target="_blank" rel="noopener noreferrer"></a>
              <a href="mailto:rajkumarcse18@gmail.com" className="fas fa-envelope" aria-label="Send email"></a>
            </div>
          </div>
        </div>

        <p className="credit">Designed with <i className="fa fa-heart pulse" aria-hidden="true"></i> by <a href="https://www.linkedin.com/in/rajkumar-dev18/" target="_blank" rel="noopener noreferrer"> Rajkumar</a></p>

      </footer>
      {/*  footer section ends  */}


      {/*  scroll top btn  */}
      <a href="#home" aria-label="Scroll to top" className="fas fa-angle-up" id="scroll-top" suppressHydrationWarning></a>

      {/*  ==== ALL MAJOR JAVASCRIPT CDNS STARTS ====  */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossOrigin="anonymous" referrerPolicy="no-referrer"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.5/typed.min.js" integrity="sha512-1KbKusm/hAtkX5FScVR5G36wodIMnVd/aP04af06iyQTkD17szAMGNmxfNH+tEuFp3Og/P5G32L1qEC47CZbUQ==" crossOrigin="anonymous" referrerPolicy="no-referrer"></script>
      <script src="./assets/js/particles.min.js"></script>
      <script src="./assets/js/app.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.7.0/vanilla-tilt.min.js" integrity="sha512-SttpKhJqONuBVxbRcuH0wezjuX+BoFoli0yPsnrAADcHsQMW8rkR84ItFHGIkPvhnlRnE2FaifDOUw+EltbuHg==" crossOrigin="anonymous" referrerPolicy="no-referrer"></script>
      <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"></script>
      {/*  ==== ALL MAJOR JAVASCRIPT CDNS ENDS ====  */}

      <script src="./assets/js/script.js"></script>

    </>
  );
}
