const blogCategoryModel = require('../models').BlogCategory;
const blogItemModel = require('../models').BlogItem;

class BlogHelper {
  categories = null;

  async getCategories() {
    if (!this.categories) {
      this.categories = await blogCategoryModel.findAll({ 
        raw: false, 
        include: ['items'] 
      });
    }
    return this.categories;
  }

  async findPostByLink(link) {
    const item = await blogItemModel.findOne({ 
      where: { link },
      include: ['BlogCategory']
    });
    return item;
  }
}

module.exports = new BlogHelper();