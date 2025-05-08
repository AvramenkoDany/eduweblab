import React, { useEffect, useRef } from 'react';
import '@/styles/index.scss';

const MultipleProportions = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const equations = [
            { text: 'C + O → CO', x: 50, y: 50, delay: 30 },
            { text: 'C + 2O → CO₂', x: 50, y: 90, delay: 90 },
        ];

        let frame = 0;

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.font = '18px Arial';

            equations.forEach((eq) => {
                if (frame >= eq.delay) {
                    ctx.fillStyle = '#2a9d8f';
                    ctx.fillText(eq.text, eq.x, eq.y);
                }
            });

            frame++;
            if (frame <= 150) {
                requestAnimationFrame(animate);
            }
        }

        animate();
    }, []);

    return (
        <div className="chem-law">
            <h2 className="chem-law__title">Закон кратних відношень</h2>
            <p className="chem-law__description">
                Один і той самий елемент може утворювати кілька сполук з іншим
                елементом у різних кратних пропорціях.
            </p>
            <canvas
                ref={canvasRef}
                width={400}
                height={120}
                className="chem-law__canvas"
            />
        </div>
    );
};

export default MultipleProportions;
