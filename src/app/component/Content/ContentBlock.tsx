'use client';
import styles from './contentBlock.module.scss';
import LeftBar from '@/app/component/LeftBar/LeftBar';
import NewsContentBlock from '@/app/component/Content/NewsContentBlock';
import { useParams, useSearchParams } from 'next/navigation';
export default function ContentBlock({}) {
  const params = useSearchParams();
  return (
    <div className={styles.contentBlockWrapper}>
      <LeftBar />
      <NewsContentBlock
        searchFilters={{ categories: params.get('category') }}
      />
    </div>
  );
}
