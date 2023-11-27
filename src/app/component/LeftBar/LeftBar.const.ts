import { MenuItem } from '@/app/component/MenuList/MenuList.types';

export const mockMenuListItems: MenuItem[] = [
  {
    name: 'Домой',
    value: 'home',
    linkToImage: '/images/home.svg',
  },
  {
    name: 'Шорты',
    value: 'shorts',
    linkToImage: '/images/shorts.svg',
  },
  {
    name: 'Подписки',
    value: 'subs',
    linkToImage: '/images/subs.svg',
  },
];

export const mockMenuItemsMyActivity: MenuItem[] = [
  {
    name: 'Библиотека',
    value: 'lib',
    linkToImage: '/images/manyNews.svg',
  },
  {
    name: 'История',
    value: 'history',
    linkToImage: '/images/history.svg',
  },
  {
    name: 'Твои Новости',
    value: 'yourNews',
    linkToImage: '/images/news.svg',
  },
  {
    name: 'Смотреть Позже',
    value: 'seeLater',
    linkToImage: '/images/seeLater.svg',
  },
  {
    name: 'Загруженные',
    value: 'downloads',
    linkToImage: '/images/download.svg',
  },
];
