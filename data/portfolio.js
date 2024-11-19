const portfolioItems = [
  {
    title: 'Комплектация квартиры в ЖК "Рублёвка"',
    prevu: '',
    description: '',
    prevu_image: '/uploads/i01.png',
    link: 'v01',
    video: '/uploads/v01.mp4',
    date: '13.11.2024',
  },
  {
    title: 'Комплектация в ЖК "Сердце Столицы"',
    prevu: '',
    description: '',
    prevu_image: '/uploads/i02.png',
    link: 'v02',
    video: '/uploads/v02.mp4',
    date: '24.10.2024',
  },
  {
    title: 'Комплектация квартиры на ул. Тогоева',
    prevu: '',
    description: '',
    prevu_image: '/uploads/i03.png',
    link: 'v03',
    video: '/uploads/v03.mp4',
    date: '11.10.2024',
  },
  {
    title: 'Комплектация квартиры в ЖК "Рублёвка"',
    prevu: '',
    description: '',
    prevu_image: '/uploads/i04.png',
    link: 'v04',
    video: '/uploads/v04.mp4',
    date: '13.11.2024',
  },
  {
    title: 'Комплектация в ЖК "Грин Парк"',
    prevu: '',
    description: '',
    prevu_image: '/uploads/i05.png',
    link: 'v05',
    video: '/uploads/v05.mp4',
    date: '05.09.2024',
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