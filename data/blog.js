const meropriyatia = [
  {
    title: 'Бизнес завтрак',
    prevu: 'с презентацией новинок брендов Donel и Bticino',
    description: 'В нашем шоуруме прошла презентация новинок брендов Donel и Bticino',
    prevu_image: '/uploads/blog/biznes_lanch_1.png',
    link: 'biznes-zavtrak-donel-bticino',
    video: '/uploads/biznes_lanch_2_donel.mp4',
    date: '15.10.2024',
  },
  {
    title: 'Бизнес завтрак',
    prevu: 'с презентацией новинок бренда Maytony',
    description: 'В нашем шоуруме прошла презентация новинок бренда Maytony',
    prevu_image: '/uploads/blog/biznes_lanch_2.png',
    link: 'biznes-zavtrak-maytony',
    video: '/uploads/biznes_lanch_1_maytony.mp4',
    date: '20.10.2024',
  },
];


const blogCategories = [
  {
    id: 1,
    name: 'Новости',
    items: [],
  },
  {
    id: 2,
    name: 'Отзывы клиентов',
    items: [],
  },
  {
    id: 3,
    name: 'Мероприятия',
    items: meropriyatia,
  },
  {
    id: 4,
    name: 'Статьи',
    items: [],
  },
];

function findPostByLink(link) {
  for (let category of blogCategories) {
    const finded = category.items.find(item => item.link == link);
    if (finded) return { blogItem: finded, category };
  }
  return null;
}

module.exports = {
  blogCategories,
  findPostByLink,
}