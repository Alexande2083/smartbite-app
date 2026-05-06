import { useState } from 'react';
import styles from './Camera.module.css';

export default function Camera({ showResult = false, onCameraDone, onConfirm }) {
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState(showResult);

  const handleShutter = () => {
    setScanning(true);
    setTimeout(() => {
      setScanning(false);
      setResult(true);
      if (onCameraDone) onCameraDone();
    }, 1500);
  };

  if (result) {
    return <ResultView onConfirm={onConfirm} />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.cameraView}>
        <div className={styles.plateGuide}>🍽️</div>
        <div className={styles.hint}>📸 将餐盘完整放入框内</div>
        {scanning && (
          <>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', textAlign: 'center', color: 'white', zIndex: 2 }}>
              <div style={{ fontSize: 36, marginBottom: 12 }}>🔍</div>
              <div style={{ fontSize: 16 }}>火眼金睛分析中…</div>
              <div style={{ fontSize: 13, opacity: 0.7, marginTop: 4 }}>正在拆解菜品…</div>
            </div>
            <div className={styles.scanOverlay}></div>
          </>
        )}
      </div>
      <div className={styles.shutterWrap}>
        <div className={styles.shutterBtn} onClick={handleShutter}>
          <div className={styles.shutterInner}></div>
        </div>
        <div className={styles.cameraActions}>
          <span onClick={() => alert('🖼️ 相册选择')}>🖼️ 相册</span>
          <span onClick={() => alert('🔄 翻转摄像头')}>🔄 翻转</span>
        </div>
      </div>
    </div>
  );
}

function ResultView({ onConfirm }) {
  return (
    <div className={styles.container}>
      <div className={styles.recognitionCard}>
        <div className={styles.foodImg}>🍜</div>
        <div className={styles.recItem}>
          <div className={styles.recIcon}>🥘</div>
          <div className={styles.recInfo}>
            <div className={styles.recName}>兰州拉面</div>
            <div className={styles.recWeight}>约 400g · 标准碗</div>
            <div className={styles.recNutri}>蛋白 18g · 脂 8g · 碳水 52g</div>
          </div>
          <div className={styles.recStatus}>
            <div className={styles.recCal}>380</div>
            <span className={styles.recTag} onClick={() => alert('💧 去油弹窗')}>💧 过水</span>
          </div>
        </div>
        <div className={styles.recItem} style={{ borderBottom: 'none' }}>
          <div className={styles.recIcon}>🥚</div>
          <div className={styles.recInfo}>
            <div className={styles.recName}>煎蛋</div>
            <div className={styles.recWeight}>约 50g · 1 个</div>
            <div className={styles.recNutri}>蛋白 6g · 脂 5g · 碳水 1g</div>
          </div>
          <div className={styles.recStatus}><div className={styles.recCal}>80</div></div>
        </div>
      </div>
      <div className={styles.adviceCard}>
        <div className={styles.adviceIcon}>💡</div>
        <div>
          <div className={styles.adviceMain}>碳水偏高，建议晚餐减半主食</div>
          <div className={styles.adviceSub}>这顿饭碳水占比 65%，超过推荐值</div>
        </div>
      </div>
      <div className={styles.summaryCard}>
        <div>
          <div style={{ fontSize: 12, color: '#6C757D' }}>合计</div>
          <div className={styles.summaryCal}>460 <span className={styles.summarySub}>大卡</span></div>
        </div>
        <div className={styles.summaryNutri}>
          <span>碳水 53g</span>
          <span>蛋白 24g</span>
          <span>脂肪 13g</span>
        </div>
      </div>
      <div className={styles.btnRow}>
        <button className={`${styles.btnConfirm} ${styles.btnOutline}`} onClick={() => alert('💧 去油面板')}>💧 去油</button>
        <button className={`${styles.btnConfirm} ${styles.btnPrimary}`} onClick={onConfirm}>✅ 确认记录</button>
      </div>
      <div className={styles.calibrationLink} onClick={() => alert('📏 分量校准')}>📏 分量不准？校准 →</div>
    </div>
  );
}
