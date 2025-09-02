import React, { useEffect, useRef } from 'react';
import '@/styles/index.scss';

const description = (
    <div className="chem-law">
        <h2 className="chem-law__title">Закон Дюлонга-Пті</h2>
        <p className="chem-law__description">
            <strong>Опис:</strong> Молярна теплоємність твердих елементів
            приблизно однакова. Анімація показує розширення металевих стрижнів
            при нагріванні обертовим сонцем, а термометр відображає зміну
            температури.
        </p>
        <p className="chem-law__description">
            <strong>Автори:</strong> П’єр Луї Дюлонг (1785–1838) і Алексі Терез
            Пті (1791–1820), французькі хіміки.
        </p>
        <p className="chem-law__description">
            <strong>Історія:</strong> Сформульовано в 1819 році,
            використовувалося для визначення молярних мас.
        </p>
        <p className="chem-law__description">
            <strong>Для чого використовувалося:</strong> Для визначення атомних
            мас елементів, що допомогло у створенні періодичної таблиці та
            аналізі твердих речовин.
        </p>
        <p className="chem-law__description">
            <strong>Як придумали:</strong> Дюлонг і Пті вимірювали теплоємність
            різних металів, помітивши, що їхня молярна теплоємність близька до
            константи.
        </p>
    </div>
);

function random(min, max) {
    return Math.random() * (max - min) + min;
}

const DulongPetit = () => {
    const canvasRef = useRef(null);
    const animationRef = useRef();
    const rodsRef = useRef([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Ініціалізація металевих стрижнів
        const rods = [];
        for (let i = 0; i < 3; i++) {
            rods.push({
                x: 100 + i * 100,
                width: 50,
                heat: 0,
            });
        }
        rodsRef.current = rods;

        let frame = 0;

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Сонце (ліворуч вгорі)
            ctx.save();
            ctx.translate(50, 50);
            ctx.rotate(frame * 0.02);
            ctx.fillStyle = 'yellow';
            ctx.beginPath();
            ctx.arc(0, 0, 35, 0, 2 * Math.PI);
            ctx.fill();
            for (let i = 0; i < 8; i++) {
                let angle = (i * Math.PI) / 4;
                ctx.strokeStyle = 'rgba(255,255,0,0.6)';
                ctx.lineWidth = 5;
                ctx.beginPath();
                ctx.moveTo(40 * Math.cos(angle), 40 * Math.sin(angle));
                ctx.lineTo(70 * Math.cos(angle), 70 * Math.sin(angle));
                ctx.stroke();
            }
            ctx.restore();

            // Температура (термометр)
            const temp = 50 + 50 * Math.sin(frame * 0.01); // 0...100
            ctx.save();
            ctx.fillStyle = '#fff';
            ctx.strokeStyle = '#000';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.rect(350, 200, 20, 200);
            ctx.fill();
            ctx.stroke();
            ctx.fillStyle = '#ff0000';
            ctx.fillRect(355, 400 - temp, 10, temp);
            ctx.restore();

            // Металеві стрижні
            rodsRef.current.forEach((rod) => {
                ctx.save();
                ctx.fillStyle = '#aaa';
                ctx.strokeStyle = '#000';
                ctx.lineWidth = 2;
                const w = rod.width + temp / 5;
                ctx.beginPath();
                ctx.rect(rod.x, 300 - w / 2, 20, w);
                ctx.fill();
                ctx.stroke();
                ctx.restore();
                rod.heat = temp / 5;
            });

            frame++;
            animationRef.current = requestAnimationFrame(draw);
        }

        draw();

        return () => {
            cancelAnimationFrame(animationRef.current);
        };
    }, []);

    return (
        <div className="chem-law">
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                }}
            >
                <div>{description}</div>
                <canvas
                    ref={canvasRef}
                    width={400}
                    height={600}
                    style={{
                        border: '2px solid #333',
                        background: '#f0f0f0',
                        borderRadius: 20,
                    }}
                />
            </div>
        </div>
    );
};

export default DulongPetit;
