'use strict';

const tableName = 'Items'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(tableName, [
      {
        categoryId: 1,
        name: 'Atlas concorde',
        url: 'https://www.atlasconcorde.com/ru',
        logo: '/uploads/keramika/ac.png',
        img: '/uploads/keramika/atlas-concorde.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 1,
        name: 'Italon ceramica',
        url: 'https://www.italonceramica.ru/ru/',
        logo: '/uploads/keramika/italon.png',
        img: '/uploads/keramika/italon-ceramica.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 1,
        name: 'Global tile',
        url: 'https://global-tile.ru/',
        logo: '/uploads/keramika/global.png',
        img: '/uploads/keramika/global-tile.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 1,
        name: 'Ennface',
        url: 'https://ennface.ru/',
        logo: '/uploads/keramika/ennface.png',
        img: '/uploads/keramika/ennface.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 1,
        name: 'Imola',
        url: 'https://imolaceramica.com/ru/',
        logo: '/uploads/keramika/imola.png',
        img: '/uploads/keramika/imola.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 1,
        name: 'Vitra',
        url: 'https://www.vitra-russia.ru/',
        logo: '/uploads/keramika/vitra.png',
        img: '/uploads/keramika/vitra.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 1,
        name: 'Pamesa',
        url: 'https://www.pamesa.com/',
        logo: '/uploads/keramika/pamesa.png',
        img: '/uploads/keramika/pamesa.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 1,
        name: 'Lafaenza',
        url: 'https://lafaenzaceramica.com/ru/',
        logo: '/uploads/keramika/lafaenza.png',
        img: '/uploads/keramika/lafaenza.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 1,
        name: 'Laminam',
        url: 'https://www.laminamrus.com/catalog/',
        logo: '/uploads/keramika/laminam.png',
        img: '/uploads/keramika/laminam.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 1,
        name: 'Absolut',
        url: 'https://absolutgroup.com/en/',
        logo: '/uploads/keramika/absolut.png',
        img: '/uploads/keramika/absolut.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 1,
        name: 'Kerama Marazzi',
        url: 'https://kerama-marazzi.com/',
        logo: '/uploads/keramika/kerama-marazzi.png',
        img: '/uploads/keramika/kerama-marazzi.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 1,
        name: 'Absolut Gres',
        url: 'https://absolut-gres.ru/',
        logo: '/uploads/keramika/absolut-gres.png',
        img: '/uploads/keramika/absolut-gres.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 1,
        name: 'Coliseum',
        url: 'https://www.coliseumgres.ru/ru/',
        logo: '/uploads/keramika/coliseum.png',
        img: '/uploads/keramika/coliseum.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {})

    await queryInterface.bulkInsert(tableName, [
      {
        categoryId: 2,
        name: 'Finex',
        url: 'https://finexfloors.ru/',
        logo: '/uploads/pokrytia/finex.png',
        img: '/uploads/pokrytia/finex.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 2,
        name: 'Cbmtm',
        url: 'https://cbmtm.ru/',
        logo: '/uploads/pokrytia/cbmtm.png',
        img: '/uploads/pokrytia/cbmtm.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 2,
        name: 'Adelar',
        url: 'https://www.adelarfloors.ru/',
        logo: '/uploads/pokrytia/adelar.png',
        img: '/uploads/pokrytia/adelar.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {})

    await queryInterface.bulkInsert(tableName, [
      {
        categoryId: 3,
        name: 'Maytoni',
        url: 'https://maytoni.ru/',
        logo: '/uploads/svet/maytoni.png',
        img: '/uploads/svet/maytoni.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 3,
        name: 'donolux',
        url: 'https://donolux.ru/',
        logo: '/uploads/svet/donolux.png',
        img: '/uploads/svet/donolux.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 3,
        name: 'artelamp',
        url: 'https://artelamp.ru/',
        logo: '/uploads/svet/artelamp.png',
        img: '/uploads/svet/artelamp.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 3,
        name: 'stluce',
        url: 'https://stluce.ru/',
        logo: '/uploads/svet/stluce.png',
        img: '/uploads/svet/stluce.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 3,
        name: 'cloyd',
        url: 'https://cloyd.shop/',
        logo: '/uploads/svet/cloyd.png',
        img: '/uploads/svet/cloyd.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 3,
        name: 'crystallux',
        url: 'https://crystallux.ru/',
        logo: '/uploads/svet/crystallux.png',
        img: '/uploads/svet/crystallux.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 3,
        name: 'loftit',
        url: 'https://loftit.ru/',
        logo: '/uploads/svet/loftit.png',
        img: '/uploads/svet/loftit.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 3,
        name: 'odeon-light',
        url: 'https://odeon-light.com/',
        logo: '/uploads/svet/odeon-light.png',
        img: '/uploads/svet/odeon-light.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 3,
        name: 'novotech',
        url: 'https://novotech-shop.ru/',
        logo: '/uploads/svet/novotech.png',
        img: '/uploads/svet/novotech.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 3,
        name: 'kinklight',
        url: 'https://kinklight.ru/',
        logo: '/uploads/svet/kinklight.png',
        img: '/uploads/svet/kinklight.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 3,
        name: 'newport-light',
        url: 'https://newport-light.ru/',
        logo: '/uploads/svet/newport-light.png',
        img: '/uploads/svet/newport-light.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 3,
        name: 'lightstar',
        url: 'https://lightstar.ru/',
        logo: '/uploads/svet/lightstar.png',
        img: '/uploads/svet/lightstar.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 3,
        name: 'favourite-design',
        url: 'https://favourite-design.ru/',
        logo: '/uploads/svet/favourite-design.png',
        img: '/uploads/svet/favourite-design.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 3,
        name: 'escada-home',
        url: 'https://escada-home.ru/',
        logo: '/uploads/svet/escada-home.png',
        img: '/uploads/svet/escada-home.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 3,
        name: 'eurosvet',
        url: 'https://eurosvet.ru/',
        logo: '/uploads/svet/eurosvet.png',
        img: '/uploads/svet/eurosvet.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {})

    await queryInterface.bulkInsert(tableName, [
      {
        categoryId: 4,
        name: 'Oboi palitra',
        url: 'https://oboi-palitra.ru/',
        logo: '/uploads/oboi/oboi-palitra.png',
        img: '/uploads/oboi/oboi-palitra.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 4,
        name: 'Affresco',
        url: 'https://affresco.ru/',
        logo: '/uploads/oboi/affresco.png',
        img: '/uploads/oboi/affresco.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {})

    await queryInterface.bulkInsert(tableName, [
      {
        categoryId: 5,
        name: 'evroplast',
        url: 'https://evroplast.ru/',
        logo: '/uploads/lepnina/evroplast.png',
        img: '/uploads/lepnina/evroplast.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 5,
        name: 'oracdecor',
        url: 'https://oracdecor.ru/',
        logo: '/uploads/lepnina/oracdecor.png',
        img: '/uploads/lepnina/oracdecor.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 5,
        name: 'dikart',
        url: 'https://dikart.ru/catalog/',
        logo: '/uploads/lepnina/dikart.png',
        img: '/uploads/lepnina/dikart.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 5,
        name: 'decor-dizayn',
        url: 'https://decor-dizayn.ru/',
        logo: '/uploads/lepnina/decor-dizayn.png',
        img: '/uploads/lepnina/decor-dizayn.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 5,
        name: 'decomaster',
        url: 'https://decomaster.su/',
        logo: '/uploads/lepnina/decomaster.png',
        img: '/uploads/lepnina/decomaster.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 5,
        name: 'bellodeco',
        url: 'https://bellodeco.ru/',
        logo: '/uploads/lepnina/bellodeco.png',
        img: '/uploads/lepnina/bellodeco.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 5,
        name: 'paoloarte',
        url: 'https://paoloarte.ru/',
        logo: '/uploads/lepnina/paoloarte.png',
        img: '/uploads/lepnina/paoloarte.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 5,
        name: 'Перфект',
        url: 'https://xn----7sbocaosbtbtfo4a1a.xn--p1ai/',
        logo: '/uploads/lepnina/perfekt.png',
        img: '/uploads/lepnina/perfekt.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {})

    await queryInterface.bulkInsert(tableName, [
      {
        categoryId: 6,
        name: 'Donel',
        url: 'https://donel.su/',
        logo: '/uploads/vykluchateli/donel.png',
        img: '/uploads/vykluchateli/donel.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 6,
        name: 'Werkel',
        url: 'https://werkel.ru/',
        logo: '/uploads/vykluchateli/werkel.png',
        img: '/uploads/vykluchateli/werkel.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 6,
        name: 'Schneider',
        url: 'https://schneider-russia.com/',
        logo: '/uploads/vykluchateli/schneider.png',
        img: '/uploads/vykluchateli/schneider.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 6,
        name: 'Bticino',
        url: 'https://bticino.pro/',
        logo: '/uploads/vykluchateli/bticino.png',
        img: '/uploads/vykluchateli/bticino.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {})

    await queryInterface.bulkInsert(tableName, [
      {
        categoryId: 7,
        name: 'laconistiq',
        url: 'https://www.gessi.com/en',
        logo: '/uploads/santehnika/gessi.png',
        img: '/uploads/santehnika/gessi.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 7,
        name: 'salini',
        url: 'https://salini-srl.com/',
        logo: '/uploads/santehnika/salini.png',
        img: '/uploads/santehnika/salini.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 7,
        name: 'bossini',
        url: 'https://www.bossini.it/ru',
        logo: '/uploads/santehnika/bossini.png',
        img: '/uploads/santehnika/bossini.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 7,
        name: 'hansgrohe',
        url: 'https://www.hansgrohe.ru/',
        logo: '/uploads/santehnika/hansgrohe.png',
        img: '/uploads/santehnika/hansgrohe.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 7,
        name: 'tece',
        url: 'https://www.tece.com/ru',
        logo: '/uploads/santehnika/tece.png',
        img: '/uploads/santehnika/tece.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 7,
        name: 'villeroy-boch',
        url: 'https://www.villeroy-boch.com/',
        logo: '/uploads/santehnika/villeroy-boch.png',
        img: '/uploads/santehnika/villeroy-boch.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 7,
        name: 'laufen',
        url: 'https://laufen-russia.ru/',
        logo: '/uploads/santehnika/laufen.png',
        img: '/uploads/santehnika/laufen.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 7,
        name: 'azzurraceramica',
        url: 'https://www.azzurraceramica.com/',
        logo: '/uploads/santehnika/azzurraceramica.png',
        img: '/uploads/santehnika/azzurraceramica.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 7,
        name: 'toto',
        url: 'https://ru.toto.com/',
        logo: '/uploads/santehnika/toto.png',
        img: '/uploads/santehnika/toto.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 7,
        name: 'boheme',
        url: 'https://boheme.su/',
        logo: '/uploads/santehnika/boheme.png',
        img: '/uploads/santehnika/boheme.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 7,
        name: 'abber',
        url: 'https://abber-shop.ru/',
        logo: '/uploads/santehnika/abber.png',
        img: '/uploads/santehnika/abber.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 7,
        name: 'grohe',
        url: 'https://grohe-russia.shop/',
        logo: '/uploads/santehnika/grohe.png',
        img: '/uploads/santehnika/grohe.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 7,
        name: 'remer',
        url: 'https://remer.shop/',
        logo: '/uploads/santehnika/remer.png',
        img: '/uploads/santehnika/remer.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {})

    await queryInterface.bulkInsert(tableName, [
      {
        categoryId: 8,
        name: 'laconistiq',
        url: 'https://laconistiq.ru/',
        logo: '/uploads/profilya/laconistiq.png',
        img: '/uploads/profilya/laconistiq.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        categoryId: 8,
        name: 'decoprofile',
        url: 'https://decoprofile.ru/',
        logo: '/uploads/profilya/decoprofile.png',
        img: '/uploads/profilya/decoprofile.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(tableName, null, {});
  }
};
