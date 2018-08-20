var path = require('path')
// 获取绝对路径
function getAbsolutePath(addr) {
  if(!/\/src\//.test(addr)) {
    addr = '../src/' + addr;
  }
  console.log(path.resolve(__dirname, addr))
  return path.resolve(__dirname, addr);
}
module.exports = {
     // Support React Native Web
     // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
    'react-native': 'react-native-web',
    //routers
    'routerConfig': getAbsolutePath('routers/index.js'),
}