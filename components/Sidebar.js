import styles from "../styles/sidebar.module.css";
import Link from 'next/link'

export default function Sidebar() {
  return (
    <>
      <div className={styles.contain}>
        <div className={styles.sidebar}>
          <div className={styles.profile}>
            <span className={styles.userProfile}>
              <i class="bi bi-person-circle"></i>
            </span>
            <span className={styles.userName}> امیرحسین ملکی </span>
            <span className={styles.userEmail}>amirmalki@gmail.com</span>
          </div>
          <ul className={styles.menu}>
            <div className={styles.menuTitle}> منو اصلی</div>
            <Link href="/Create">
              <li className={styles.list}>
                <span className={styles.listItemIcon}>
                  <i class="bi bi-file-earmark-plus-fill"></i>
                </span>
                <span className={styles.listItem}>ایجاد سوال</span>
              </li>
            </Link>
            <li className={styles.list}>
              <span className={styles.listItemIcon}>
                <i class="bi bi-stack"></i>
              </span>
              <span className={styles.listItem}>بانک سوالات</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
