import projectsData from '../../public/projects.json';

export default function Projects() {
  return (
    <>


      {/*  navbar starts  */}
      <header>
        <a href="/" className="logo"><i className="fab fa-node-js"></i> Jigar</a>

        <div id="menu" className="fas fa-bars"></div>
        <nav className="navbar">
          <ul>
            <li><a href="/#home">Home</a></li>
            <li><a href="/#about">About</a></li>
            <li><a href="/#skills">Skills</a></li>
            <li><a href="/#education">Education</a></li>
            <li><a className="active" href="/#work">Work</a></li>
            <li><a href="/#experience">Experience</a></li>
            <li><a href="/#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      {/*  navbar ends  */}

      {/*  work project section starts  */}
      <section className="work" id="work">

        <h2 className="heading"><i className="fas fa-laptop-code"></i> Projects <span>Made</span></h2>

        <div id="filters" className="button-group">
          <button className="btn is-checked" data-filter="*">All Projects</button>
          <button className="btn" data-filter=".mern">MERN Stack</button>
          <button className="btn" data-filter=".lamp">LAMP Stack</button>
          <button className="btn" data-filter=".basicweb">Basic Web</button>
          <button className="btn" data-filter=".android">Android App</button>
        </div>

        <div className="box-container flex flex-wrap justify-center gap-10 p-6">
          {projectsData.map((project, index) => (
            <div className="box tilt w-80 bg-gray-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-blue-500/40 transition-all duration-500 transform m-4 group flex flex-col border border-gray-800" key={index}>
              <div className="relative overflow-hidden h-48 border-b-4 border-blue-600">
                <img draggable="false" src={`/assets/images/projects/${project.image}.png`} alt={project.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
              </div>
              <div className="content p-6 flex flex-col flex-1">
                <div className="tag mb-4">
                  <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">{project.name}</h3>
                </div>
                <div className="desc flex flex-col flex-1 justify-between">
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed line-clamp-3">{project.desc}</p>
                  <div className="btns flex gap-4 mt-auto">
                    <a href={project.links.view} className="btn flex-1 text-center py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold rounded-lg transition-all shadow-md transform hover:-translate-y-1" target="_blank"><i className="fas fa-eye mr-2"></i> View</a>
                    <a href={project.links.code} className="btn flex-1 text-center py-2.5 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-lg transition-all shadow-md transform hover:-translate-y-1 border border-gray-700" target="_blank">Code <i className="fas fa-code ml-2"></i></a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="backbtn">
          <a href="/#work" className="btn">
            <i className="fas fa-arrow-left"></i>
            <span>Back to Home</span>
          </a>
        </div>

      </section>
      {/*  work project section ends  */}

      {/*  scroll top btn  */}
      <a href="#work" className="fas fa-angle-up" id="scroll-top"></a>
      {/*  scroll back to top  */}


      {/*  ==== ALL MAJOR JAVASCRIPT CDNS STARTS ====  */}
      {/*  jquery cdn  */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossOrigin="anonymous" referrerPolicy="no-referrer"></script>

      {/*  vanilla tilt.js links  */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.7.0/vanilla-tilt.min.js" integrity="sha512-SttpKhJqONuBVxbRcuH0wezjuX+BoFoli0yPsnrAADcHsQMW8rkR84ItFHGIkPvhnlRnE2FaifDOUw+EltbuHg==" crossOrigin="anonymous" referrerPolicy="no-referrer"></script>

      {/*  scroll reveal anim  */}
      <script src="https://unpkg.com/scrollreveal"></script>

      {/*  isotope filter plugin cdn  */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.isotope/3.0.6/isotope.pkgd.min.js" integrity="sha512-Zq2BOxyhvnRFXu0+WE6ojpZLOU2jdnqbrM1hmVdGzyeCa1DgM3X5Q4A/Is9xA1IkbUeDd7755dNNI/PzSf2Pew==" crossOrigin="anonymous" referrerPolicy="no-referrer"></script>

      {/*  ==== ALL MAJOR JAVASCRIPT CDNS ENDS ====  */}

      <script src="./script.js"></script>


    </>
  );
}
