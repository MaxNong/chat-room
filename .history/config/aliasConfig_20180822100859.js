var path = require('path')
// 获取绝对路径
function getAbsolutePath(addr) {
  if(!/\/src\//.test(addr)) {
    addr = '../src/' + addr;
  }
  return path.resolve(__dirname, addr);
}
module.exports = {
     // Support React Native Web
     // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
    'react-native': 'react-native-web',
    //指向sass模块
    '@': getAbsolutePath('assets/sass'),
    //routers
    'routerConfig': getAbsolutePath('routers/index.js'),
    //conponents
    'containers': getAbsolutePath('components/containers/index.js'),
    'sheet': getAbsolutePath('components/sheet/index.js'),
    'icon': getAbsolutePath('components/cssModules/index.js'),
}