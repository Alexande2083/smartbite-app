import styles from './TabBar.module.css';

const TABS = [
  { id: 'home', icon: '📊', label: '首页' },
  { id: 'camera', icon: '📷', label: '拍照' },
  { id: 'chat', icon: '🤖', label: 'AI助手' },
  { id: 'body', icon: '📈', label: '数据' },
  { id: 'settings', icon: '👤', label: '我的' },
];

export default function TabBar({ active, onTabChange }) {
  return (
    <div className={styles.tabBar}>
      {TABS.map(tab => (
        <button
          key={tab.id}
          className={`${styles.tabItem} ${active === tab.id ? styles.active : ''}`}
          onClick={() => onTabChange(tab.id)}
        >
          <span className={styles.tabIcon}>{tab.icon}</span>
          <span className={styles.tabLabel}>{tab.label}</span>
        </button>
      ))}
    </div>
  );
}
