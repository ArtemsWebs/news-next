import styles from '@/app/component/Content/contentBlock.module.scss';
import { getData } from '@/app/component/Content/dataFetch';
import News from '@/app/component/News/News';

type SearchFilters = {
  category: string;
};

export default async function NewsContentBlock({
  searchFilter: SearchFilters,
}) {
  const data = await getData();
  return (
    <div className={styles.newsContentWrapper}>
      {data.articles?.map((news) => (
        <News key={news.description} news={news} />
      ))}
    </div>
  );
}
