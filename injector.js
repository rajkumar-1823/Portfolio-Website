const fs = require('fs');

let page = fs.readFileSync('app/page.jsx', 'utf8');

// 1. Replace Skills - anchor exactly to `<div className="row" id="skillsContainer">`
page = page.replace(
    /<div className="row" id="skillsContainer">[\s\S]*?<\/div>\s*<\/div>/,
    `<div className="row flex flex-wrap justify-center gap-6" id="skillsContainer">
            {skillsData.map((skill, index) => (
              <div className="bar p-4 bg-gray-800 rounded-xl shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:-translate-y-2 m-2 flex flex-col items-center justify-center w-32 h-32 hover:scale-110" key={index}>
                <div className="info flex flex-col items-center gap-3">
                  <img src={skill.icon} alt={skill.name} className="w-14 h-14 object-contain animate-float" />
                  <span className="text-white font-bold text-sm tracking-wide text-center">{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
    </div>`
);

// 2. Replace Projects - anchor exactly to `<section className="work" id="work">` block content
page = page.replace(
    /(<section className="work" id="work">\s*<h2 className="heading"><i className="fas fa-laptop-code"><\/i> Projects <span>Made<\/span><\/h2>\s*)<div className="box-container">[\s\S]*?<div className="viewall">[\s\S]*?<\/div>/,
    `$1<div className="box-container flex flex-wrap justify-center gap-10 p-4">
    {projectsData.slice(0, 10).filter(project => project.category !== "android").map((project, index) => (
      <div className="box tilt w-80 bg-gray-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-blue-500/40 transition-all duration-500 transform hover:scale-105 m-4 group flex flex-col border border-gray-800" key={index}>
        <div className="relative overflow-hidden h-48 border-b-4 border-blue-600">
          <img draggable="false" src={\`/assets/images/projects/\${project.image}.png\`} alt={project.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
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

<div className="viewall w-full flex justify-center mt-12 mb-8">
  <a href="/projects" className="btn px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white rounded-full font-extrabold text-lg tracking-wider transition-all transform hover:scale-110 shadow-xl hover:shadow-cyan-500/50 flex items-center gap-3"><span>View All Projects</span>
    <i className="fas fa-arrow-right animate-bounce"></i>
  </a>
</div>`
);

fs.writeFileSync('app/page.jsx', page);


// Now inject projects page
let projectsPage = fs.readFileSync('app/projects/page.jsx', 'utf8');

projectsPage = projectsPage.replace(
    /<div className="box-container">\s*{\/\*[\s\S]*?<\/div>  \*\/}\s*<\/div>/,
    `<div className="box-container flex flex-wrap justify-center gap-10 p-6">
    {projectsData.map((project, index) => (
      <div className="box tilt w-80 bg-gray-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-blue-500/40 transition-all duration-500 transform m-4 group flex flex-col border border-gray-800" key={index}>
        <div className="relative overflow-hidden h-48 border-b-4 border-blue-600">
          <img draggable="false" src={\`/assets/images/projects/\${project.image}.png\`} alt={project.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
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
</div>`
);

fs.writeFileSync('app/projects/page.jsx', projectsPage);

console.log("Injected UI Elements Securely!");
