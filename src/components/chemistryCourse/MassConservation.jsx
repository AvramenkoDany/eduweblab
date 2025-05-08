import React, { useEffect, useRef } from 'react';
import '@/styles/index.scss';

const MassConservation = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const atomsBefore = ['H', 'H', 'O'];
        const atomsAfter = ['H₂O'];

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw before reaction
        ctx.font = '24px Arial';
        ctx.fillStyle = '#2a9d8f';
        ctx.fillText('До реакції:', 20, 30);
        atomsBefore.forEach((atom, i) => {
            ctx.fillText(atom, 30 + i * 40, 70);
        });

        // Arrow
        ctx.fillText('→', 180, 70);

        // After reaction
        ctx.fillStyle = '#e76f51';
        ctx.fillText('Після реакції:', 240, 30);
        atomsAfter.forEach((compound, i) => {
            ctx.fillText(compound, 250 + i * 60, 70);
        });
    }, []);

    return (
        <div className="chem-law">
            <h2 className="chem-law__title">Закон збереження маси</h2>
            <p className="chem-law__description">
                Під час хімічної реакції загальна маса реагентів дорівнює
                загальній масі продуктів, оскільки маса речовин зберігається.
                Кількість атомів кожного хімічного елемента залишається
                незмінною до і після реакції, що забезпечує баланс хімічного
                рівняння.
            </p>
            <canvas
                ref={canvasRef}
                width={600}
                height={120}
                className="chem-law__canvas"
            />
        </div>
    );
};

export default MassConservation;
