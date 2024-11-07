const portfolioItems = [
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

function findItemByLink(link) {
  const finded = portfolioItems.find(item => item.link == link);
  if (finded) return { finded };
  return null;
}

module.exports = {
  portfolioItems,
  findItemByLink,
}