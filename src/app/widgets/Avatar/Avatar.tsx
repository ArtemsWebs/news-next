import styles from './avatar.module.scss';
interface AvatarProps {
  userName: string;
}
export default function Avatar({ userName }: AvatarProps) {
  const userNameArr = userName && userName.split(' ');
  return (
    <div className={styles.avatarWrapper}>
      {userName && <div>{`${userName[0][0]} ${userName[1][0]}`}</div>}
    </div>
  );
}
