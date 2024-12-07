const categoryModel = require('../models').Category;
const itemModel = require('../models').Item;
const sitemap = require('./SitemapHelper');

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
    await categoryModel.create(data);
    this.clearCategoriesCache();
  }

  async editCategory(id, data) {
    await categoryModel.update(data, { where: { id } });
    this.clearCategoriesCache();
  }

  async removeCategory(id, data) {
    await categoryModel.destroy({ where: { id } });
    this.clearCategoriesCache();
  }

  async getCategoryById(id) {
    return await categoryModel.findByPk(id);
  }

  async getItemsByCategoryid(categoryId) {
    return await itemModel.findAll({
      where: { categoryId }
    });
  }

  async addItem(data) {
    const item = await itemModel.create(data);
    this.clearCategoriesCache();
    return item;
  }

  async editItem(id, data) {
    await itemModel.update(data, {
      where: { id }
    });
    this.clearCategoriesCache();
    return await itemModel.findByPk(id);
  }

  async removeItem(id) {
    const item = await itemModel.findByPk(id);
    const categoryId = item.categoryId;
    await itemModel.destroy({ where: { id }});
    this.clearCategoriesCache();
    return categoryId;
  }

  clearCategoriesCache() {
    this.categories = null;
    sitemap.regenerate();
  }
}

module.exports = new CategoryHelper();