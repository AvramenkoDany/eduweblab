import React, { useState, useEffect } from 'react';
import '@/styles/index.scss';

const HarmonicMotion = () => {
    const [A, setA] = useState(50);
    const [omega, setOmega] = useState(1);
    const [phi, setPhi] = useState(0);
    const [x, setX] = useState(0);
    const [t, setT] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setT((prev) => prev + 0.05);
        }, 50);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setX(A * Math.cos(omega * t + phi));
    }, [t, A, omega, phi]);

    return (
        <div className="section">
            <h2>Гармонічні коливання</h2>
            <label>Амплітуда A:</label>
            <input
                type="number"
                value={A}
                onChange={(e) => setA(Number(e.target.value))}
            />
            <label>Частота ω:</label>
            <input
                type="number"
                value={omega}
                onChange={(e) => setOmega(Number(e.target.value))}
            />
            <label>Фаза φ:</label>
            <input
                type="number"
                value={phi}
                onChange={(e) => setPhi(Number(e.target.value))}
            />
            <div style={{ marginTop: '20px' }}>
                <div
                    style={{
                        position: 'relative',
                        height: '20px',
                        background: '#eee',
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            left: `${50 + x}px`,
                            transition: 'left 50ms linear',
                            width: '20px',
                            height: '20px',
                            background: 'blue',
                            borderRadius: '50%',
                        }}
                    />
                </div>
            </div>
            <p>
                Гармонічні коливання — це періодичні рухи, подібні до синусоїди.
                Вперше описані Робертом Гуком у 17 ст. Формула:
                <b>x(t) = A · sin(ωt + φ)</b>, де A — амплітуда, ω — кутова
                частота.
            </p>
        </div>
    );
};

export default HarmonicMotion;
