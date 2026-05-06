import styles from './Body.module.css';

export default function Body() {
  return (
    <div className={styles.container}>
      {/* Radar Chart */}
      <div className={`${styles.card} ${styles.radarCard}`}>
        <div className={styles.radarTitle}>🔵 本月 &nbsp; 🟢 上月</div>
        <div style={{ width: 200, height: 200, margin: '0 auto' }}>
          <svg viewBox="0 0 200 200" style={{ width: '100%', height: '100%' }}>
            <polygon points="100,15 180,72 150,170 50,170 20,72" fill="none" stroke="#EEE" strokeWidth="1" />
            <polygon points="100,51 160,86 138,148 62,148 40,86" fill="none" stroke="#EEE" strokeWidth="1" />
            <polygon points="100,87 140,100 125,126 75,126 60,100" fill="none" stroke="#EEE" strokeWidth="1" />
            <polygon points="100,35 155,78 130,140 70,140 45,78" fill="rgba(74,144,217,0.15)" stroke="#4A90D9" strokeWidth="2" />
            <polygon points="100,55 145,82 120,130 80,130 55,82" fill="rgba(0,184,148,0.12)" stroke="#00B894" strokeWidth="2" strokeDasharray="4,3" />
            <text x="100" y="10" textAnchor="middle" fontSize="10" fill="#6C757D">体脂</text>
            <text x="190" y="75" textAnchor="start" fontSize="10" fill="#6C757D">肌肉</text>
            <text x="155" y="175" textAnchor="middle" fontSize="10" fill="#6C757D">水分</text>
            <text x="45" y="175" textAnchor="middle" fontSize="10" fill="#6C757D">骨量</text>
            <text x="10" y="75" textAnchor="end" fontSize="10" fill="#6C757D">代谢</text>
          </svg>
        </div>
        <div className={styles.legend}>
          <span className={styles.legendBlue}>● 体脂 ↓1.2%</span>
          <span style={{ color: '#FFC107' }}>● 肌肉 ↓0.5%</span>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className={styles.card} style={{ padding: '12px 16px' }}>
        <div className={styles.metricsGrid}>
          {[['72.1','体重 kg'],['21.5','体脂 %'],['54.3','肌肉 kg'],
            ['23.8','BMI'],['1,680','基础代谢'],['8','内脏脂肪']].map((m,i) => (
            <div key={i}>
              <div className={styles.metricVal}>{m[0]}</div>
              <div className={styles.metricLabel}>{m[1]}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Device */}
      <div className={`${styles.card} ${styles.deviceCard}`} onClick={() => alert('蓝牙扫描中…')}>
        <div>
          <div className={styles.deviceName}>📡 蓝牙设备</div>
          <div className={styles.deviceSub}>体脂秤已连接 · 云康宝</div>
        </div>
        <span className={styles.syncBtn}>🔄 同步</span>
      </div>

      {/* Weight Trend */}
      <div className={`${styles.card} ${styles.chartCard}`}>
        <div className={styles.chartHeader}>
          <span className={styles.chartTitle}>📈 体重趋势</span>
          <span className={styles.chartToggle}>月</span>
        </div>
        <div className={styles.chartBars}>
          {[40,45,38,50,42,35,30,28,25,22,18,15].map((h,i) => {
            const c = i < 5 ? '#4A90D9' : '#00B894';
            const o = i < 5 ? 0.5 + i * 0.05 : 1;
            return <div key={i} style={{ flex: 1, height: h, background: c, borderRadius: '4px 4px 0 0', opacity: o }}></div>;
          })}
        </div>
        <div className={styles.chartDates}>
          <span>4/24</span><span>4/28</span><span>5/2</span><span>5/6</span>
        </div>
      </div>
    </div>
  );
}
