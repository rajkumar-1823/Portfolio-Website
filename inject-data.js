const fs = require('fs');

const pageJsxPath = 'app/page.jsx';
let content = fs.readFileSync(pageJsxPath, 'utf8');

// 1. Add imports at the top
if (!content.includes('import skillsData')) {
    content = content.replace("export default function Home() {", "import skillsData from '../public/skills.json';\nimport projectsData from '../public/projects.json';\n\nexport default function Home() {");
}

// 2. Fix Skills Section
const skillsHtml = `<div className="container">
          <div className="row" id="skillsContainer">

            {/*  <div className="bar">
              <div className="info">
                <img src="https://img.icons8.com/color/48/000000/adobe-xd.png"/>
                <span>AdobeXD</span>
              </div>
            </div>  */}

      </div>
</div>`;

const skillsReact = `<div className="container">
          <div className="row flex flex-wrap justify-center gap-4" id="skillsContainer">
            {skillsData.map((skill, index) => (
              <div className="bar p-4 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-pulse-slow m-2 flex flex-col items-center justify-center w-32 h-32" key={index}>
                <div className="info flex flex-col items-center gap-2">
                  <img src={skill.icon} alt={skill.name} className="w-12 h-12 object-contain animate-float" />
                  <span className="text-white font-semibold text-sm text-center">{skill.name}</span>
                </div>
              </div>
            ))}
      </div>
</div>`;

// 3. Fix Projects Section
const projectsHtml = `<div className="box-container">

    {/*  <div className="box tilt">
      <img draggable="false" src="./assets/images/projects/portfolio1.PNG" alt="" />
      <div className="content">
        <div className="tag">
        <h3>Portfolio Website</h3>
        </div>
        <div className="desc">
          <p>Personal portfolio website. Don't need much info about it, just scroll down. You're here only!</p>
          <div className="btns">
            <a href="#" className="btn" target="_blank"><i className="fas fa-eye"></i> View</a>
            <a href="https://github.com/jigar-sable/Portfolio-Website" className="btn" target="_blank">Code <i className="fas fa-code"></i></a>
          </div>
        </div>
      </div>
    </div>  */}

</div>

<div className="viewall">
  <a href="/projects" className="btn"><span>View All</span>
    <i className="fas fa-arrow-right"></i>
</a>
</div>`;

const projectsReact = `<div className="box-container flex flex-wrap justify-center gap-8">
    {projectsData.slice(0, 10).filter(project => project.category !== "android").map((project, index) => (
      <div className="box tilt w-80 bg-gray-900 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-float m-4 group" key={index}>
        <div className="relative overflow-hidden">
          <img draggable="false" src={\`/assets/images/projects/\${project.image}.png\`} alt={project.name} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
        </div>
        <div className="content p-6">
          <div className="tag mb-3">
          <h3 className="text-2xl font-bold text-white">{project.name}</h3>
          </div>
          <div className="desc">
            <p className="text-gray-400 text-sm mb-5 h-16 overflow-hidden">{project.desc}</p>
            <div className="btns flex gap-3">
              <a href={project.links.view} className="btn flex-1 text-center py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors" target="_blank"><i className="fas fa-eye mr-2"></i> View</a>
              <a href={project.links.code} className="btn flex-1 text-center py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors" target="_blank">Code <i className="fas fa-code ml-2"></i></a>
            </div>
          </div>
        </div>
      </div>
    ))}
</div>

<div className="viewall w-full flex justify-center mt-8">
  <a href="/projects" className="btn px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-bold transition-all transform hover:scale-110 shadow-lg flex items-center gap-2"><span>View All</span>
    <i className="fas fa-arrow-right"></i>
  </a>
</div>`;

// If syntax was broken, we better restore from index.html -> htmlToJsx
// But wait, the app/page.jsx is already mangled.
// Can I just checkout index.html and convert again? Yes!
