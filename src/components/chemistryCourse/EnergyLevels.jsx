import React, { useEffect, useRef } from 'react';
import '@/styles/index.scss';

const EnergyLevels = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw energy levels
        ctx.strokeStyle = '#264653';
        for (let i = 1; i <= 3; i++) {
            ctx.beginPath();
            ctx.arc(150, 100, i * 30, 0, Math.PI * 2);
            ctx.stroke();
        }

        // Draw nucleus
        ctx.fillStyle = '#e63946';
        ctx.beginPath();
        ctx.arc(150, 100, 10, 0, Math.PI * 2);
        ctx.fill();

        // Draw electron
        ctx.fillStyle = '#1d3557';
        ctx.beginPath();
        ctx.arc(180, 100, 5, 0, Math.PI * 2);
        ctx.fill();
    }, []);

    return (
        <div className="chem-law">
            <h2 className="chem-law__title">Енергетичні рівні та іонізація</h2>
            <p className="chem-law__description">
                Атом має кілька енергетичних рівнів. Електрон може переходити на
                вищий рівень або залишати атом при іонізації.
            </p>
            <canvas
                ref={canvasRef}
                width={300}
                height={200}
                className="chem-law__canvas"
            />
        </div>
    );
};

export default EnergyLevels;
