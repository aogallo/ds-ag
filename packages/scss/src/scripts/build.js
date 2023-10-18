const fs = require('fs')

const path = require('path')

const sass = require('node-sass')

const compile = (sourcePath, fileName) => {
  const result = sass.renderSync({
    data: fs.readFileSync(
      path.resolve(sourcePath)
    ).toString(),
    outputStyle: 'expanded',
    includePaths: [path.resolve('src')]
  })

  fs.writeFileSync(path.resolve(fileName), result.css.toString())
}

const createComponents = () => {
  const allComponents = [];

  ['atoms', 'molecules', 'organisms'].forEach(source => {
    const allFiles = fs.readdirSync(`src/${source}`).map(file => {
      console.log('file', file)
      if (file !== '') {
        return ({
          input: `src/${source}/${file}`,
          output: `lib/${file.slice(0, -4)}css`
        })
      }
    })

    allComponents.push(...allFiles)
  });

  return allComponents
}

createComponents().forEach(component => {
  compile(component.input, component.output)
})

compile('src/global.scss', 'lib/global.css')

