import React, { useEffect, useRef } from 'react';
import '@/styles/index.scss';

const description = (
    <div className="chem-law">
        <h2 className="chem-law__title">Закон діючих мас</h2>
        <p className="chem-law__description">
            <strong>Опис:</strong> Швидкість реакції пропорційна добутку
            концентрацій реагентів. Анімація показує рух стрілок реагентів
            (сині) і продуктів (червоні), що перетворюються одне в одного.
        </p>
        <p className="chem-law__description">
            <strong>Автори:</strong> Катон Гульдберг (1836–1902) і Петер Вааге
            (1833–1900), норвезькі хіміки.
        </p>
        <p className="chem-law__description">
            <strong>Історія:</strong> Сформульовано в 1864 році, стало основою
            хімічної кінетики.
        </p>
        <p className="chem-law__description">
            <strong>Для чого використовувалося:</strong> Для прогнозування
            швидкості реакцій у хімічній промисловості, наприклад, при синтезі
            аміаку чи нафтохімії.
        </p>
        <p className="chem-law__description">
            <strong>Як придумали:</strong> Гульдберг і Вааге експериментували з
            реакціями, вимірюючи швидкості за різних концентрацій, і встановили
            математичну залежність.
        </p>
    </div>
);

function random(min, max) {
    return Math.random() * (max - min) + min;
}

const LawOfMassAction = () => {
    const canvasRef = useRef(null);
    const animationRef = useRef();
    const arrowsRef = useRef([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Ініціалізація стрілок
        const arrows = [];
        for (let i = 0; i < 20; i++) {
            arrows.push({
                x: random(100, 300),
                y: random(200, 400),
                type: i % 2 === 0 ? 'reactant' : 'product',
                angle: random(0, 2 * Math.PI),
                speed: random(0.5, 1),
            });
        }
        arrowsRef.current = arrows;

        function drawArrow(ctx, x, y, angle, color) {
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(angle);
            ctx.beginPath();
            ctx.moveTo(0, -5);
            ctx.lineTo(0, 5);
            ctx.lineTo(15, 0);
            ctx.closePath();
            ctx.fillStyle = color;
            ctx.fill();
            ctx.restore();
        }

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

            // Стрілки
            arrowsRef.current.forEach((arrow) => {
                const color = arrow.type === 'reactant' ? '#0077ff' : '#ff2222';
                drawArrow(ctx, arrow.x, arrow.y, arrow.angle, color);

                arrow.x += Math.cos(arrow.angle) * arrow.speed;
                arrow.y += Math.sin(arrow.angle) * arrow.speed;

                // Якщо вийшла за межі реакційного простору — повернути в центр
                if (
                    arrow.x < 100 ||
                    arrow.x > 300 ||
                    arrow.y < 200 ||
                    arrow.y > 400
                ) {
                    arrow.x = random(100, 300);
                    arrow.y = random(200, 400);
                    arrow.angle = random(0, 2 * Math.PI);
                    arrow.speed = random(0.5, 1);
                }

                // Іноді змінює тип (реагент <-> продукт)
                if (Math.random() < 0.01) {
                    arrow.type =
                        arrow.type === 'reactant' ? 'product' : 'reactant';
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

export default LawOfMassAction;
