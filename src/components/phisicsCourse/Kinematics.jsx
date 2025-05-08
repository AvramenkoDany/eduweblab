import React, { useState } from 'react';
import '@/styles/index.scss';

const Kinematics = () => {
    const [v0, setV0] = useState(0);
    const [a, setA] = useState(0);
    const [t, setT] = useState(0);
    const [s, setS] = useState(null);

    const calculate = () => {
        const result = v0 * t + 0.5 * a * t * t;
        setS(result.toFixed(2));
    };

    return (
        <div className="section">
            <h2>Кінематика (рух з прискоренням)</h2>
            <input
                type="number"
                placeholder="v₀ (м/с)"
                onChange={(e) => setV0(Number(e.target.value))}
            />
            <input
                type="number"
                placeholder="a (м/с²)"
                onChange={(e) => setA(Number(e.target.value))}
            />
            <input
                type="number"
                placeholder="t (с)"
                onChange={(e) => setT(Number(e.target.value))}
            />
            <button onClick={calculate}>Обчислити шлях</button>
            {s !== null && <p>Шлях: {s} м</p>}
            <p>
                Кінематика вивчає рух тіл без урахування причин. Основна
                формула: <b>S = v₀t + ½at²</b>. Застосовується до будь-якого
                прискореного руху.
            </p>
        </div>
    );
};

export default Kinematics;
