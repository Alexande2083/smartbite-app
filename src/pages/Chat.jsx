import { useState, useRef } from 'react';
import styles from './Chat.module.css';

const MSG = [
  { role: 'ai', text: '👋 你好！我是你的AI健康助手 😊<br>今天吃了什么？拍个照或者直接告诉我都行。' },
  { role: 'user', text: '早上吃了一个苹果和一杯牛奶' },
  { role: 'ai', text: '好的，我来帮你算算：', foods: [{ n: '🍎 苹果 (200g)', c: '≈104 大卡' }, { n: '🥛 牛奶 (250ml)', c: '≈120 大卡' }],
    total: '合计：224 大卡 ✅', btns: [{ l: '✅ 记上了', a: '已记录到早餐', p: true }, { l: '✏️ 修改', a: '手动修改', p: false }] },
  { role: 'user', text: '晚上饿了能吃点什么？' },
  { role: 'ai', text: '推荐几个低热量选择：', foods: [{ n: '🥛 无糖酸奶 (100g)', c: '≈62 大卡' }, { n: '🥜 杏仁 (20g)', c: '≈117 大卡' }, { n: '🥒 黄瓜 (1根)', c: '≈30 大卡' }],
    bottom: '都低于 120 大卡，放心吃 😊' },
];

export default function Chat() {
  const [msgs, setMsgs] = useState(MSG);
  const [input, setInput] = useState('');
  const inputRef = useRef(null);

  const handleSend = () => {
    if (!input.trim()) return;
    const text = input.trim();
    setInput('');
    setMsgs(prev => [...prev, { role: 'user', text }]);
    setTimeout(() => {
      setMsgs(prev => [...prev, {
        role: 'ai', text: `好的，我来查查 😊<br>"${text}" 约 200 大卡，要记录吗？`,
        btns: [{ l: '✅ 记上了', a: '已记录', p: true }]
      }]);
    }, 600);
  };

  return (
    <div className={styles.container}>
      <div className={styles.chatArea}>
        {msgs.map((m, i) => (
          <div key={i} className={`${styles.bubble} ${styles[m.role]}`}>
            <span dangerouslySetInnerHTML={{ __html: m.text }} />
            {m.foods && m.foods.map((f, j) => (
              <div key={j} className={styles.foodCard}>
                <span>{f.n}</span><span className={styles.cal}>{f.c}</span>
              </div>
            ))}
            {m.total && <div style={{ fontWeight: 700, marginTop: 6 }}>{m.total}</div>}
            {m.bottom && <div style={{ marginTop: 8, fontSize: 12, color: '#6C757D' }}>{m.bottom}</div>}
            {m.btns && (
              <div className={styles.actions}>
                {m.btns.map((b, j) => (
                  <button key={j} className={`${styles.btn} ${b.p ? styles.btnPrimary : styles.btnSecondary}`}
                    onClick={() => alert(b.a)}>{b.l}</button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className={styles.inputWrap}>
        <input ref={inputRef} value={input} onChange={e => setInput(e.target.value)}
          placeholder="输入你想说的…" onKeyDown={e => e.key === 'Enter' && handleSend()} />
        <button className={styles.voiceBtn} onClick={() => alert('🎤 录音中…')}>🎤</button>
        <button className={styles.sendBtn} onClick={handleSend}>➤</button>
      </div>
    </div>
  );
}
