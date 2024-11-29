const categoryModel = require('../models').Category;

class CategoryHelper {
  categories = null;

  async getCategories() {
    if (!this.categories) {
      this.categories = await categoryModel.findAll({ 
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

module.exports = new CategoryHelper();