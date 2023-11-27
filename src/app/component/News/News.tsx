import styles from './newsContainer.module.scss';
import { NewsT } from '@/app/component/News/News.type';
import Avatar from '@/app/widgets/Avatar/Avatar';
import { distanceDate } from '@/app/utils/dateServices/dateServices';
interface NewsProps {
  news: NewsT;
}
export default function News({ news }: NewsProps) {
  return (
    <div className={styles.newsContainer}>
      <img className={styles.newsContainerImageBlock} src={news.urlToImage} />

      <div className={styles.newsContainerDescription}>
        <Avatar userName={news.author} />
        <div>
          <p className="newsCardTitle">{news.title}</p>
          <p className="newsCardRegular">{news.description}</p>
          <p className="newsCardTime">{distanceDate(news.publishedAt)}</p>
        </div>
      </div>
    </div>
  );
}
