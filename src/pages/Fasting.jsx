import styles from './Fasting.module.css';

export default function Fasting({ onBack }) {
  return (
    <div className={styles.container}>
      <div className={styles.fastingTitle}>🔴 禁食中</div>

      <div className={styles.ringWrap}>
        <svg width="200" height="200" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="85" fill="none" stroke="#F0F0F0" strokeWidth="10" />
          <circle cx="100" cy="100" r="85" fill="none" stroke="#FF4757" strokeWidth="10"
            strokeDasharray="534" strokeDashoffset="200" strokeLinecap="round" />
        </svg>
        <div className={styles.ringCenter}>
          <div className={styles.status}>⏳ 禁食中</div>
          <div className={styles.elapsed}>6.5 <span style={{ fontSize: 14 }}>h</span></div>
          <div className={styles.total}>/ 16 h</div>
          <div className={styles.nextMeal}>距下一餐 <strong>2h 30min</strong></div>
        </div>
      </div>

      <div className={styles.statsRow}>
        <div className={styles.statCard}>
          <div className={styles.statVal}>16:8</div>
          <div className={styles.statLabel}>当前模式</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statVal}><span style={{ color: '#00B894' }}>6</span>/7</div>
          <div className={styles.statLabel}>本周执行</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statVal}>87.5%</div>
          <div className={styles.statLabel}>完成率</div>
        </div>
      </div>

      <div className={styles.recipeCard} onClick={() => alert('展开食谱详情')}>
        <div className={styles.recipeHeader}>
          <div>
            <div className={styles.recipeTitle}>🍽️ 今日推荐午餐</div>
            <div className={styles.recipeSub}>低GI高蛋白搭配</div>
          </div>
          <span className={styles.recipeArrow}>查看 →</span>
        </div>
        <div className={styles.recipeTags}>
          <span className={styles.recipeTag}>🥗 鸡胸肉沙拉</span>
          <span className={styles.recipeTag}>🍚 杂粮饭</span>
          <span className={styles.recipeTag}>🥚 水煮蛋×2</span>
        </div>
        <div className={styles.recipeCal}>≈ 380 <span className={styles.recipeCalSub}>大卡</span></div>
      </div>

      <div className={styles.tipCard}>
        <div className={styles.tipIcon}>💡</div>
        <div>
          <div className={styles.tipMain}>提前 30 分钟进食</div>
          <div className={styles.tipSub}>明天可以适应更早的节奏，有助于调整生物钟</div>
        </div>
      </div>
    </div>
  );
}
