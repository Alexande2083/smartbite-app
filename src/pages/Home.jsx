import { useState } from 'react';
import styles from './Home.module.css';

export default function Home({ showRecognition, onCameraDone, onConfirmRecord, onGoFasting }) {
  return (
    <div className={styles.container}>
      <AdviceSection onGoFasting={onGoFasting} />
      <CalorieRing />
      <NutritionRow />
      <ProgressSection />
      <TimelineSection />
      <SnapSection />
      <QuickActionsSection />
    </div>
  );
}

function AdviceSection({ onGoFasting }) {
  return (
    <div className={styles.adviceScroll}>
      <div className={`${styles.adviceCard} ${styles.adviceYellow}`}>
        <div className={styles.adviceIcon}>💡</div>
        <div className={styles.adviceText}>
          <div className={styles.adviceMain}>午餐蛋白质充足！</div>
          <div className={styles.adviceSub}>晚餐建议多吃蔬菜补充纤维，少吃主食。</div>
          <span className={`${styles.badge} ${styles.badgeYellow}`}>👍 知道了</span>
        </div>
      </div>
      <div className={`${styles.adviceCard} ${styles.adviceRed}`}>
        <div className={styles.adviceIcon}>🍚</div>
        <div className={styles.adviceText}>
          <div className={styles.adviceMain}>午餐超出预算 280 大卡</div>
          <div className={styles.adviceSub}>选一个补救方案：</div>
          <div style={{ display: 'flex', gap: 8, marginTop: 8, flexWrap: 'wrap' }}>
            <span className={`${styles.badge} ${styles.badgeRed}`} onClick={() => alert('✅ 已采纳晚餐减量')}>🥗 晚餐减量</span>
            <span className={`${styles.badge} ${styles.badgeRed}`} onClick={onGoFasting}>⏳ 明日轻断食</span>
            <span className={`${styles.badge} ${styles.badgeRed}`} onClick={() => alert('✅ 已采纳运动补救')}>🏃 运动补救</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function CalorieRing() {
  const current = 1430, target = 1680;
  const r = 70, circ = 2 * Math.PI * r;
  const ratio = current / target;
  const offset = circ * (1 - Math.min(ratio, 1));
  const surplus = target - current;
  return (
    <div className={styles.card}>
      <div className={styles.ringContainer}>
        <div className={styles.ringWrapper}>
          <svg width="160" height="160" viewBox="0 0 160 160">
            <circle cx="80" cy="80" r={r} fill="none" stroke="#F0F0F0" strokeWidth="12" />
            <circle cx="80" cy="80" r={r} fill="none" stroke="#FF6B35" strokeWidth="12"
              strokeDasharray={circ} strokeDashoffset={offset} strokeLinecap="round"
              transform="rotate(-90 80 80)" style={{ transition: 'stroke-dashoffset 1s' }} />
          </svg>
          <div className={styles.ringCenter}>
            <div className={styles.calNum}>{current.toLocaleString()}</div>
            <div className={styles.calLabel}>已摄入</div>
            <div className={styles.calBudget}>/ {target.toLocaleString()} 大卡</div>
            <div className={styles.calSurplus}>✅ 余量 {surplus}</div>
          </div>
        </div>
      </div>
      <NutritionRow />
    </div>
  );
}

function NutritionRow() {
  const items = [
    { label: '碳水', cur: 190, max: 220, color: '#4A90D9' },
    { label: '蛋白质', cur: 55, max: 80, color: '#00B894' },
    { label: '脂肪', cur: 38, max: 50, color: '#FFC107' },
  ];
  return (
    <div className={styles.nutritionRow}>
      {items.map(n => (
        <div key={n.label} className={styles.nutriItem}>
          <div className={styles.nutriValue}>{n.cur}<span className={styles.nutriSub}>/{n.max}g</span></div>
          <div className={styles.nutriBar} style={{ background: n.color }}></div>
          <div className={styles.nutriLabel}>{n.label}</div>
        </div>
      ))}
    </div>
  );
}

function ProgressSection() {
  const items = [
    { label: '🏃 运动', pct: 75, val: '300/400', cls: 'barGreen' },
    { label: '📱 步数', pct: 83, val: '8,342', cls: 'barGreen' },
    { label: '🔥 缺口', pct: 50, val: '50/500', cls: 'barOrange' },
  ];
  return (
    <div className={styles.card} style={{ padding: '12px 16px' }}>
      {items.map((it, i) =>
        <div key={i} className={styles.deficitRow}>
          <span className={styles.deficitLabel}>{it.label}</span>
          <div className={styles.barTrack}>
            <div className={`${styles.barFill} ${styles[it.cls]}`} style={{ width: it.pct + '%' }}></div>
          </div>
          <span className={styles.deficitVal}>{it.val}</span>
        </div>
      )}
    </div>
  );
}

function TimelineSection() {
  const items = [
    ['☕', '#FFF3ED', '全麦三明治 + 美式', '💡 蛋白质偏低，建议加个蛋', '350', '08:00'],
    ['📷', '#E8F8F5', '兰州拉面 + 蛋', '🍃 已识别 · 过水已扣', '460', '12:30'],
    ['🏃', '#EBF5FF', '跑步 30min', '消耗 280 大卡', '-280', '15:00'],
    ['🥜', '#FFF8E1', '坚果一小把', '约 90 大卡', '90', '17:00'],
  ];
  return (
    <div className={styles.card} style={{ padding: '12px 16px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
        <span className={styles.cardTitle} style={{ marginBottom: 0 }}>📋 今日记录</span>
        <span style={{ fontSize: 12, color: '#6C757D', cursor: 'pointer' }}>查看全部 →</span>
      </div>
      {items.map((r, i) => (
        <div key={i} className={styles.timelineItem}>
          <div className={styles.iconCircle} style={{ background: r[1] }}>{r[0]}</div>
          <div className={styles.timelineInfo}>
            <div className={styles.timelineName}>{r[2]}</div>
            <div className={styles.timelineDetail}>{r[3]}</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div className={styles.timelineCal} style={r[4].startsWith('-') ? { color: '#00B894' } : {}}>{r[4]}</div>
            <div className={styles.timelineTime}>{r[5]}</div>
          </div>
        </div>
      ))}
      <div className={styles.timelineEmpty}>➕ 点击记录晚餐</div>
    </div>
  );
}

function SnapSection() {
  return (
    <div className={`${styles.card} ${styles.snapCard}`}>
      <div>
        <div style={{ fontSize: 12, color: '#6C757D', marginBottom: 4 }}>身体快照</div>
        <div className={styles.snapWeight}>72.1 <span className={styles.snapChange}>↓0.4</span></div>
        <div className={styles.snapSub}>体脂 21.5%</div>
      </div>
      <div style={{ display: 'flex', gap: 16 }}>
        <div className={styles.snapBadge}>
          <div className={styles.snapBadgeVal} style={{ color: '#00B894' }}>✅</div>
          <div className={styles.snapBadgeLabel}>今日</div>
        </div>
        <div className={styles.snapBadge}>
          <div className={styles.snapBadgeVal} style={{ color: '#FF6B35' }}>7天🔥</div>
          <div className={styles.snapBadgeLabel}>连续</div>
        </div>
      </div>
    </div>
  );
}

function QuickActionsSection() {
  const btns = [
    ['📷', '拍照'],
    ['🎤', '说话'],
    ['🏪', '便利店'],
    ['🏠', '合餐'],
  ];
  return (
    <div className={styles.quickActions}>
      {btns.map((b, i) =>
        <button key={i} className={styles.quickBtn}>
          <span className={styles.quickIcon}>{b[0]}</span>
          <span className={styles.quickLabel}>{b[1]}</span>
        </button>
      )}
    </div>
  );
}
