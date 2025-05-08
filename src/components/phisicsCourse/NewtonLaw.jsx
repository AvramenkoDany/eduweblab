import React, { useState } from 'react';
import '@/styles/index.scss';

const NewtonLaw = () => {
    const [mass, setMass] = useState(0);
    const [force, setForce] = useState(0);
    const [acceleration, setAcceleration] = useState(null);

    const calculate = () => {
        if (mass > 0) {
            setAcceleration((force / mass).toFixed(2));
        } else {
            setAcceleration('Помилка: маса має бути > 0');
        }
    };

    return (
        <div className="section">
            <h2>Закон Ньютона</h2>
            <input
                type="number"
                placeholder="Сила F (Н)"
                onChange={(e) => setForce(Number(e.target.value))}
            />
            <input
                type="number"
                placeholder="Маса m (кг)"
                onChange={(e) => setMass(Number(e.target.value))}
            />
            <button onClick={calculate}>Обчислити прискорення</button>
            {acceleration !== null && <p>Прискорення: {acceleration} м/с²</p>}
            <p>
                Ісаак Ньютон сформулював цей закон у 1687 році. Формула:{' '}
                <b>F = m × a</b>, де F — сила, m — маса, a — прискорення. Закон
                описує, як тіло змінює швидкість під дією сили.
            </p>
        </div>
    );
};

export default NewtonLaw;
