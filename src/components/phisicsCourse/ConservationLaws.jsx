import React, { useState } from 'react';
import '@/styles/index.scss';

const ConservationLaws = () => {
    const [mass, setMass] = useState(1);
    const [v, setV] = useState(0);
    const [h, setH] = useState(0);
    const g = 9.81;

    const Ek = 0.5 * mass * v * v;
    const Ep = mass * g * h;
    const E_total = Ek + Ep;

    return (
        <div className="section">
            <h2>Закони збереження</h2>
            <input
                type="number"
                placeholder="Маса m (кг)"
                onChange={(e) => setMass(Number(e.target.value))}
            />
            <input
                type="number"
                placeholder="Швидкість v (м/с)"
                onChange={(e) => setV(Number(e.target.value))}
            />
            <input
                type="number"
                placeholder="Висота h (м)"
                onChange={(e) => setH(Number(e.target.value))}
            />
            <p>Кінетична енергія: {Ek.toFixed(2)} Дж</p>
            <p>Потенційна енергія: {Ep.toFixed(2)} Дж</p>
            <p>Повна енергія: {E_total.toFixed(2)} Дж</p>

            <p>
                Закони збереження стверджують, що <b>енергія</b> та{' '}
                <b>імпульс</b> не зникають, а переходять з одного виду в інший.
                Це основа всієї фізики з 18 ст.
            </p>
        </div>
    );
};

export default ConservationLaws;
