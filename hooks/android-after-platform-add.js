const fs = require('fs');
const path = require('path');

module.exports = function (context) {

  try {

    // remove freshly installed inappbrowser-fork dependency
    let packageJsonPath =  path.resolve(process.cwd(), "package.json");
    let packageJsonData = fs.readFileSync(packageJsonPath, 'utf8');
    const packageJsonObj = JSON.parse(packageJsonData);
    delete packageJsonObj.devDependencies['cordova-plugin-inappbrowser'];
    packageJsonData = JSON.stringify(packageJsonObj, null, 2);
    fs.writeFileSync(packageJsonPath, packageJsonData, 'utf8');

  } catch (error) {
    console.log('Error changing name of application:', error);
  }
}
