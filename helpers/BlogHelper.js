const blogCategoryModel = require('../models').BlogCategory;
const blogItemModel = require('../models').BlogItem;

class BlogHelper {
  categories = null;

  async getCategories() {
    if (!this.categories) {
      this.refreshBlogCategories();
    }
    return this.categories;
  }

  async refreshBlogCategories() {
    this.categories = await blogCategoryModel.findAll({
      raw: false,
      include: ['items']
    });
  }

  async findPostByLink(link) {
    const item = await blogItemModel.findOne({
      where: { link },
      include: ['BlogCategory']
    });
    return item;
  }

  async getBlogCategories() {
    return await blogCategoryModel.findAll({ raw: false });
  }

  async addBlogCategory(data) {
    await blogCategoryModel.create(data);
    this.refreshBlogCategories();
  }

  async editBlogCategory(id, data) {
    await blogCategoryModel.update(data, { where: { id } });
    this.refreshBlogCategories();
  }

  async removeBlogCategory(id) {
    await blogCategoryModel.destroy({ where: { id } });
    this.refreshBlogCategories();
  }

  async getCategoryById(id) {
    return await blogCategoryModel.findOne({ where: { id } });
  }

  async getItemsOfCategory(blogCategoryId) {
    const items = await blogItemModel.findAll({
      where: {
        blogCategoryId
      },
    });
    return items;
  }

  async addBlogItem(data) {
    const item = await blogItemModel.create(data);
    this.refreshBlogCategories();
    return await blogItemModel.findByPk(item.id)
  }

  async editBlogItem(id, data) {
    await blogItemModel.update(data, { where: { id } });
    this.refreshBlogCategories();
    return await blogItemModel.findByPk(id)
  }

  async removeBlogItem(id) {
    const item = await blogItemModel.findByPk(id);
    const blogCategoryId = item.blogCategoryId;
    await blogItemModel.destroy({ where: { id } });
    this.refreshBlogCategories();
    return blogCategoryId;
  }
}

module.exports = new BlogHelper();