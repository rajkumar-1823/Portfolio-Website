const fs = require('fs');

function htmlToJsx(html) {
    let jsx = html.replace(/\bclass=/g, 'className=').replace(/\bfor=/g, 'htmlFor=');
    jsx = jsx.replace(/oncontextmenu="return false"/g, '');
    jsx = jsx.replace(/\bstyle="([^"]*)"/g, 'style={{}}');

    const selfClosingTags = ['img', 'input', 'link', 'meta', 'hr', 'br', 'source'];
    selfClosingTags.forEach(tag => {
        const regex = new RegExp(`(<${tag}\\b[^>]*?)(?<!/)>`, 'gi');
        jsx = jsx.replace(regex, '$1 />');
    });

    jsx = jsx.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');
    jsx = jsx.replace(/<\/div>\s*<\/section>\s*{\/\*\s*experience section ends\s*\*\/}/gi, '</section>\n{/*  experience section ends  */}');

    // Fix crossOrigin and referrerPolicy globally
    jsx = jsx.replace(/crossorigin/gi, 'crossOrigin');
    jsx = jsx.replace(/referrerpolicy/gi, 'referrerPolicy');

    return jsx;
}

function processFile(inputFile, outputFile) {
    if (!fs.existsSync(inputFile)) return;
    const content = fs.readFileSync(inputFile, 'utf-8');
    const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (!bodyMatch) return;

    const bodyContent = htmlToJsx(bodyMatch[1]);

    const dir = outputFile.substring(0, outputFile.lastIndexOf('/'));
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    const componentName = outputFile.includes('experience') ? 'Experience' :
        outputFile.includes('projects') ? 'Projects' : 'Home';

    let imports = "";
    if (componentName === 'Home') {
        imports = `import skillsData from '../public/skills.json';\nimport projectsData from '../public/projects.json';\n\n`;
    } else if (componentName === 'Projects') {
        imports = `import projectsData from '../public/projects.json';\n\n`;
    }

    const fileContent = `${imports}export default function ${componentName}() {
  return (
    <>
      ${bodyContent}
    </>
  );
}
`;
    fs.writeFileSync(outputFile, fileContent);
}

processFile('index.html', 'app/page.jsx');
processFile('experience/index.html', 'app/experience/page.jsx');
processFile('projects/index.html', 'app/projects/page.jsx');
console.log('Conversion successful!');
