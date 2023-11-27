import { NewsT } from '@/app/component/News/News.type';
import exp from 'constants';
import { getBrowserLocale } from '@/app/utils/utils';

type Articles = {
  status: string;
  totalResult: number;
  articles: NewsT[];
};

const mockNews = [
  {
    source: {},
    author: 'Sheena Vasani',
    title: 'Microsoft’s Xbox Wireless Headset is half off at Walmart',
    description:
      'Microsoft’s Xbox Wireless Headset is on sale for just $49.99 at Walmart. That’s a 50 percent discount and a new all-time low price.',
    url: 'https://www.theverge.com/2023/7/5/23784551/microsoft-xbox-wireless-headset-gaming-deal-sale',
    urlToImage:
      'https://cdn.vox-cdn.com/thumbor/uj-bwMLsz5zgwYxWrhhhvAzsWJo=/0x0:2050x1367/1200x628/filters:focal(1025x684:1026x685)/cdn.vox-cdn.com/uploads/chorus_asset/file/22363686/cfaulkner_210311_4469_00010.jpg',
    publishedAt: '2023-07-05T18:01:42Z',
    content:
      'Microsofts Xbox Wireless Headset is half off at Walmart\r\n' +
      'Microsofts Xbox Wireless Headset is half off at Walmart\r\n' +
      ' / Microsofts Xbox headset offers a lot of bang for your buck, especially today, as i… [+1312 chars]',
  },
];
const defaultLang = getBrowserLocale()[0];
export async function getData(
  country = 'ru',
  category = 'technology',
  language = 'ru',
): Promise<Articles> {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&language=${language}&apiKey=` +
      process.env.NEWS_API_KEY,
  );
  return res.json();
}

export async function getTopData(
  country = 'ru',
  category = 'technology',
  language = 'ru',
): Promise<Articles> {
  const defaultLang = getBrowserLocale()[0];
  const res = await fetch(
    'https://newsapi.org/v2/top-headlines?country=ru&category=technology&apiKey=' +
      process.env.NEWS_API_KEY,
  );
  return res.json();
}
