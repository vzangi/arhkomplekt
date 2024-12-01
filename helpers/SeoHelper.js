const seoModel = require('../models').Seo

class SeoHelper {
  // Кэш SEO данных
  seos = {}

  // Поучение SEO страницы
  async getPageSeo(page) {
    // Пытаюсь взять SEO из кэша
    let seo = this.seos[page]

    // Если в кэше нет страницы
    if (!seo) {

      // Пытаюсь найти SEO в базе
      seo = await seoModel.findOne({
        where: { page },
        raw: true
      });

      // Если в базе нет SEO для этой страницы
      if (!seo) {

        // Беру SEO главной страницы
        seo = await this.getPageSeo('/');

        // Если нет SEO главной страницы, то возвращаю пустой объект
        if (!seo) seo = {}
      }

      // добавляю в кэш найденное SEO
      this.seos[page] = seo;
    }
    return seo;
  }

  async get() {
    return await seoModel.findAll({
      attributes: ['id', 'page', 'title', 'description', 'keywords'],
      raw: true
    });
  }

  async add(data) {
    await seoModel.create(data)
  }

  async edit(id, data) {
    await seoModel.update(data, {
      where: { id }
    });
    this.clearSeoCache();
  }

  async remove(id) {
    await seoModel.destroy({
      where: { id }
    })
  }

  // Очистка кэша SEO
  clearSeoCache() {
    this.seos = {}
  }
}

module.exports = new SeoHelper();