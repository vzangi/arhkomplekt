const uploadHelper = require('../../helpers/UploadHelper');

class SeoController {
  async index(req, res) {
    try {
      const { path } = req
      res.locals.dirs = uploadHelper.getDirs(path)
      res.locals.items = await uploadHelper.getFiles(path);
      res.render('pages/admin/uploads');
    } catch (e) {
      res.redirect('/admin/uploads');
    }
  }

  async add(req, res) {
  }

  async remove(req, res) {
  }

  async makeDir(req, res) {
    const { subdir, name } = req.body
    const path = subdir + '/' + name
    uploadHelper.makeDir(path)
    res.redirect(`/admin/${subdir}`);
  }

  async removeDir(req, res) {
    const { name } = req.body
    const baseDir = uploadHelper.removeDir(name)
    res.redirect('/admin/' + baseDir);
  }

  async uploadFile(req, res) {
    const { file } = req.files
    const { subdir } = req.body
    await uploadHelper.uploadFile(subdir, file);
    res.redirect('/admin/' + subdir);
  }

  async removeFile(req, res) {
    const { name } = req.body
    const subdir = uploadHelper.removeFile(name)
    res.redirect('/admin/' + subdir);
  }
}

module.exports = new SeoController()