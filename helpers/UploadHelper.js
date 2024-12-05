const fs = require('fs');

class UploadHelper {

  base = './public/'

  async getFiles(path) {

    const folder = `${this.base}uploads/${this.getDirs(path).join('/')}`;

    console.log(folder)

    if (!fs.existsSync(folder)) throw new Error('Path not found');

    const names = fs.readdirSync(folder, {
      withFileTypes: true
    });

    const data = {}

    data.folders = names
      .filter(d => d.isDirectory())
      .map(d => d.name);

    data.files = names
      .filter(d => !d.isDirectory() && d.name != '.gitignore')
      .map(d => d.name);

    return data
  }

  getDirs(path, remove = '/uploads') {
    return decodeURIComponent(path)
      .replace(remove, '')
      .split('/')
      .filter(d => d != '');
  }

  makeDir(path) {
    fs.mkdirSync(this.base + path);
  }

  removeDir(path) {
    fs.rmSync(this.base + path, { recursive: true, force: true });
    return path
      .split('/')
      .slice(0, -1)
      .join('/')
  }

  async uploadFile(dir, file) {
    await file.mv(`${this.base}${dir}/${file.name}`)
  }

  removeFile(file) {
    fs.rmSync(`${this.base}${file}`)
    return file
      .split('/')
      .slice(0, -1)
      .join('/')
  }

}

module.exports = new UploadHelper();