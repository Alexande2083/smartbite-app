import styles from './Settings.module.css';

const ITEMS = [
  ['🏆', '#FFF3ED', '成就墙', '5枚 · 1,850积分', () => alert('🏆 成就墙')],
  ['⏳', '#FFEAEA', '轻断食', '16:8模式 · 执行6/7天', null],  // onGoFasting handled by parent
  ['👤', '#EBF5FF', '个人资料', '身高174cm · 体重72.1kg', () => alert('个人资料编辑')],
  ['🎯', '#E8F8F5', '目标设定', '目标体重68kg · 进度40%', () => alert('目标设定')],
  ['🍽️', '#FFF8E1', '食物偏好', '川菜 · 湘菜 · 忌香菜', () => alert('食物偏好设置')],
  ['📡', '#F3E8FF', '设备管理', '体脂秤已连接 · 云康宝', () => alert('设备管理')],
  ['🔔', '#F0F0F0', '通知设置', '止损/断食/称重提醒', () => alert('通知设置')],
  ['📤', '#F0F0F0', '数据导出', 'JSON/CSV格式', () => alert('导出中…')],
];

export default function Settings({ onGoFasting }) {
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <div className={styles.avatar}>👤</div>
        <div className={styles.name}>小王</div>
        <div className={styles.subtitle}>🔥 连续打卡 7 天 · 🏆 5 枚勋章</div>
      </div>
      <div className={styles.card}>
        {ITEMS.map((it, i) => (
          <div key={i} className={styles.item}
            onClick={it[3] && it[3].includes('轻断食') ? onGoFasting : it[4]}>
            <div className={styles.itemLeft}>
              <div className={styles.iconWrap} style={{ background: it[1] }}>{it[0]}</div>
              <div>
                <div className={styles.itemMain}>{it[2]}</div>
                <div className={styles.itemSub}>{it[3]}</div>
              </div>
            </div>
            <span className={styles.arrow}>→</span>
          </div>
        ))}
      </div>
    </div>
  );
}
