import React, { useEffect, useRef } from 'react';
import '@/styles/index.scss';

const description = (
    <div className="chem-law">
        <h2 className="chem-law__title">Закон Гесса</h2>
        <p className="chem-law__description">
            <strong>Опис:</strong> Тепловий ефект реакції залежить лише від
            початкового і кінцевого стану. Анімація показує злиття реагентів із
            утворенням продуктів і спалахами тепла.
        </p>
        <p className="chem-law__description">
            <strong>Автор:</strong> Жермен Анрі Гесс (1802–1850),
            швейцарсько-російський хімік.
        </p>
        <p className="chem-law__description">
            <strong>Історія:</strong> Сформульовано в 1840 році, стало основою
            термохімії.
        </p>
        <p className="chem-law__description">
            <strong>Для чого використовувалося:</strong> Для розрахунку теплових
            ефектів реакцій, що важко виміряти, наприклад, у паливній
            промисловості та хімії вибухівки.
        </p>
        <p className="chem-law__description">
            <strong>Як придумали:</strong> Гесс експериментував із тепловими
            ефектами реакцій, помітивши, що сума теплот проміжних етапів
            дорівнює загальному ефекту.
        </p>
    </div>
);

function random(min, max) {
    return Math.random() * (max - min) + min;
}

const Hess = () => {
    const canvasRef = useRef(null);
    const animationRef = useRef();
    const particlesRef = useRef([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Ініціалізація частинок реакції
        const particles = [];
        for (let i = 0; i < 20; i++) {
            particles.push({
                x: random(100, 300),
                y: random(200, 400),
                type: i % 2 === 0 ? 'reactant' : 'product',
                life: random(50, 100),
            });
        }
        particlesRef.current = particles;

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Реакційний простір
            ctx.save();
            ctx.fillStyle = '#fff';
            ctx.strokeStyle = '#000';
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.rect(100, 200, 200, 200);
            ctx.fill();
            ctx.stroke();
            ctx.restore();

            // Частинки і спалахи
            particlesRef.current.forEach((p) => {
                // Реагенти — сині, продукти — червоні
                ctx.beginPath();
                ctx.fillStyle = p.type === 'reactant' ? '#0077ff' : '#ff2222';
                ctx.arc(p.x, p.y, 8, 0, 2 * Math.PI);
                ctx.fill();

                // Рух частинок
                p.x += random(-1, 1);
                p.y += random(-1, 1);
                p.life -= 1;

                // Якщо продукт — спалах (жовтий круг)
                if (p.type === 'product' && p.life > 45 && p.life < 55) {
                    ctx.save();
                    ctx.globalAlpha = 0.5;
                    ctx.beginPath();
                    ctx.fillStyle = 'yellow';
                    ctx.arc(p.x, p.y, 20, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.restore();
                }

                // Перезапуск частинки
                if (
                    p.life < 0 ||
                    p.x < 100 ||
                    p.x > 300 ||
                    p.y < 200 ||
                    p.y > 400
                ) {
                    p.x = random(100, 300);
                    p.y = random(200, 400);
                    p.type = random() < 0.5 ? 'reactant' : 'product';
                    p.life = random(50, 100);
                }
            });

            animationRef.current = requestAnimationFrame(animate);
        }

        animate();

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

export default Hess;
