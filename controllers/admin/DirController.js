const uploadHelper = require('../../helpers/UploadHelper');

class DirController {
  async dir(req, res) {
    try {
      const { path } = req
      const folder = path.replace('/dir', '');
      res.locals.dirs = uploadHelper.getDirs(folder)
      res.locals.items = await uploadHelper.getFiles(folder);
      res.json({
        dirs: res.locals.dirs,
        items: res.locals.items
      })
    } catch (e) {
      res.json({
        dirs:[],
        items: {}
      })
    }
  }
}

module.exports = new DirController()