// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {},
    'postcss-px-to-viewport':{
      viewportwidth:750,
      viewportheight:1334,
      unitPercision:5,
      viewportUnit:'vw',
      selectorBlackList:['ignore','tab-bar','tab-bar-item'],
      minPixelValue:1,
      mediaQuery:false
    }
  }
}
