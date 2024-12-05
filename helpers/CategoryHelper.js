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

  async addCategory(data) {
    await categoryModel.create(data)
    this.categories = null
  }

  async editCategory(id, data) {
    await categoryModel.update(data, { where: { id } })
    this.categories = null
  }

  async removeCategory(id, data) {
    await categoryModel.destroy({ where: { id } });
    this.categories = null
  }
}

module.exports = new CategoryHelper();