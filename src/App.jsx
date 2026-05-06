import { useState, useCallback } from 'react';
import TabBar from './components/TabBar.jsx';
import Home from './pages/Home.jsx';
import Camera from './pages/Camera.jsx';
import Chat from './pages/Chat.jsx';
import Body from './pages/Body.jsx';
import Store from './pages/Store.jsx';
import Fasting from './pages/Fasting.jsx';
import Settings from './pages/Settings.jsx';

function getTopBar(page) {
  const bars = {
    home: { left: '📅 5月6日·周三' },
    camera: { left: '📷 拍照识别', rightAction: () => alert('相册选择'), rightLabel: '🖼️ 相册' },
    chat: { left: '🤖 AI健康助手' },
    body: { left: '📈 身体数据', rightAction: () => alert('同步中…'), rightLabel: '🔄 同步' },
    store: { left: '🏪 便利店助手' },
    fasting: { left: '⏳ 轻断食', rightLabel: '🔴 禁食中', rightColor: '#FF4757' },
    settings: { left: '👤 我的' },
  };
  return bars[page] || bars.home;
}

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [showRecognition, setShowRecognition] = useState(false);
  const [showFasting, setShowFasting] = useState(false);
  const [showStoreRanks, setShowStoreRanks] = useState(false);

  const page = showFasting ? 'fasting' : activeTab;
  const bar = getTopBar(page);

  const rightContent = bar.rightAction ? (
    <span style={{ fontSize: 12, cursor: 'pointer', color: bar.rightColor || '#6C757D' }} onClick={bar.rightAction}>
      {bar.rightLabel}
    </span>
  ) : page === 'home' ? (
    <><span>🔥</span><span style={{ color: '#FF6B35', fontWeight: 700 }}>+250</span>
    <span style={{ background: '#FF6B35', color: 'white', fontSize: 10, padding: '2px 8px', borderRadius: 10, fontWeight: 600 }}>🏆×5</span></>
  ) : bar.rightLabel ? (
    <span style={{ fontSize: 12, color: bar.rightColor || '#6C757D' }}>{bar.rightLabel}</span>
  ) : null;

  const handleTabChange = useCallback((tab) => {
    setActiveTab(tab);
    setShowRecognition(false);
    setShowFasting(false);
    setShowStoreRanks(false);
  }, []);

  const handleCameraDone = useCallback(() => {
    setShowRecognition(true);
  }, []);

  const handleConfirmRecord = useCallback(() => {
    setShowRecognition(false);
    setActiveTab('home');
    alert('✅ 已记录到午餐！');
  }, []);

  const handleGoFasting = useCallback(() => {
    setShowFasting(true);
  }, []);

  const handleBackFromFasting = useCallback(() => {
    setShowFasting(false);
  }, []);

  const handleShowStoreRanks = useCallback(() => {
    setShowStoreRanks(true);
  }, []);

  const handleBackFromStoreRanks = useCallback(() => {
    setShowStoreRanks(false);
  }, []);

  const contentStyle = {
    flex: 1,
    overflowY: 'auto',
    overflowX: 'hidden',
    padding: '0 16px 8px',
  };

  return (
    <div style={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: '#F8F9FA',
      position: 'relative',
    }}>
      {/* Status Bar */}
      <div style={{
        height: 44,
        padding: '12px 20px 0',
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: 12,
        fontWeight: 600,
        color: '#1A1A2E',
        background: '#F8F9FA',
        flexShrink: 0,
      }}>
        <span style={{ fontSize: 15, fontWeight: 700 }}>12:08</span>
        <span>📶📶🔋</span>
      </div>

      {/* Top Bar */}
      <div style={{
        height: 48,
        padding: '0 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexShrink: 0,
        background: '#F8F9FA',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: '#1A1A2E', fontWeight: 600 }}>
          {(page === 'fasting' || showStoreRanks) && (
            <span style={{ fontSize: 22, cursor: 'pointer', marginRight: 4 }}
              onClick={page === 'fasting' ? handleBackFromFasting : handleBackFromStoreRanks}>←</span>
          )}
          {bar.left}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 13, color: '#6C757D' }}>
          {rightContent}
        </div>
      </div>

      {/* Content */}
      <div style={contentStyle}>
        {page === 'fasting' ? (
          <Fasting onBack={handleBackFromFasting} />
        ) : activeTab === 'home' ? (
          <Home showRecognition={showRecognition} onCameraDone={handleCameraDone}
            onConfirmRecord={handleConfirmRecord} onGoFasting={handleGoFasting} />
        ) : activeTab === 'camera' ? (
          showRecognition ? (
            <div>
              <Camera onCameraDone={handleCameraDone} showResult={true} onConfirm={handleConfirmRecord} />
            </div>
          ) : (
            <Camera onCameraDone={handleCameraDone} showResult={false} onConfirm={handleConfirmRecord} />
          )
        ) : activeTab === 'chat' ? (
          <Chat />
        ) : activeTab === 'body' ? (
          <Body />
        ) : activeTab === 'store' ? (
          <Store showRanks={showStoreRanks} onShowRanks={handleShowStoreRanks} onBack={handleBackFromStoreRanks} />
        ) : activeTab === 'settings' ? (
          <Settings onGoFasting={handleGoFasting} />
        ) : null}
      </div>

      {/* Tab Bar */}
      {!showFasting && (
        <TabBar active={activeTab} onTabChange={handleTabChange} />
      )}
    </div>
  );
}
