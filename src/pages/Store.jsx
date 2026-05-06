import styles from './Store.module.css';

export default function Store({ showRanks, onShowRanks, onBack }) {
  if (showRanks) {
    return <StoreRanks onBack={onBack} />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.hint}>选择便利店品牌</div>
      <button className={styles.brandBtn} onClick={onShowRanks}>
        <span className={styles.brandIcon}>🏪</span>
        <div><div className={styles.brandName}>全家 FamilyMart</div><div className={styles.brandSub}>距离你 200m</div></div>
      </button>
      <button className={styles.brandBtn} onClick={onShowRanks}>
        <span className={styles.brandIcon}>🟢</span>
        <div><div className={styles.brandName}>7-Eleven</div><div className={styles.brandSub}>距离你 350m</div></div>
      </button>
      <button className={styles.brandBtn} onClick={onShowRanks}>
        <span className={styles.brandIcon}>📗</span>
        <div><div className={styles.brandName}>罗森 Lawson</div><div className={styles.brandSub}>距离你 500m</div></div>
      </button>

      <div className={styles.divider}>
        <div className={styles.dividerLabel}>或者粘贴外卖订单</div>
        <div className={styles.orderRow}>
          <input className={styles.orderInput} placeholder="从美团/饿了么复制订单文本…" />
          <button className={styles.parseBtn} onClick={() => alert('🔍 解析中…\n已识别：鱼香肉丝饭 + 可乐')}>解析</button>
        </div>
      </div>
    </div>
  );
}

function StoreRanks({ onBack }) {
  return (
    <div className={styles.container}>
      <div className={styles.hint}>全家 · 早餐推荐</div>
      <div className={`${styles.rankCard} ${styles.rankGreen}`} onClick={() => alert('一键记录到早餐 ✅')}>
        <span className={styles.rankIcon}>🟢</span>
        <div className={styles.rankInfo}>
          <div className={styles.rankName}>茶叶蛋 + 无糖豆浆 + 全麦三明治</div>
          <div className={styles.rankSub}>高蛋白 · 低脂 · 推荐</div>
        </div>
        <div>
          <div className={styles.rankCal} style={{ color: '#00B894' }}>380</div>
          <span className={`${styles.rankTag} ${styles.tagGreen}`}>推荐</span>
        </div>
      </div>
      <div className={`${styles.rankCard} ${styles.rankYellow}`} onClick={() => alert('热量适中，钠偏高')}>
        <span className={styles.rankIcon}>🟡</span>
        <div className={styles.rankInfo}>
          <div className={styles.rankName}>金枪鱼饭团 + 纯牛奶</div>
          <div className={styles.rankSub}>钠含量偏高，适量食用</div>
        </div>
        <div>
          <div className={styles.rankCal} style={{ color: '#FFC107' }}>450</div>
          <span className={`${styles.rankTag} ${styles.tagYellow}`}>适量</span>
        </div>
      </div>
      <div className={`${styles.rankCard} ${styles.rankRed}`} onClick={() => alert('💡 建议选择红榜替代')}>
        <span className={styles.rankIcon}>🔴</span>
        <div className={styles.rankInfo}>
          <div className={styles.rankName}>肉松面包 + 含糖奶茶</div>
          <div className={styles.rankSub}>高糖高油 · 减脂期慎选</div>
        </div>
        <div>
          <div className={styles.rankCal} style={{ color: '#FF4757' }}>620</div>
          <span className={`${styles.rankTag} ${styles.tagRed}`}>慎选</span>
        </div>
      </div>
      <div className={styles.backLink} onClick={onBack}>← 返回品牌列表</div>
    </div>
  );
}
