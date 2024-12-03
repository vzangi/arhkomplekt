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
    await blogCategoryModel.update(data, { where: { id }});
      this.refreshBlogCategories();
  }

  async removeBlogCategory(id) {
    await blogCategoryModel.destroy({
      where: { id }
    });
      this.refreshBlogCategories();
  }
}

module.exports = new BlogHelper();