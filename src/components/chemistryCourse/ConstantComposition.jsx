import React, { useEffect, useRef } from 'react';
import '@/styles/index.scss';

const ConstantComposition = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Позиції для атомів
        const atoms = [
            { label: 'H', x: 50, y: 70, delay: 0 },
            { label: 'H', x: 90, y: 70, delay: 30 },
            { label: 'O', x: 130, y: 70, delay: 60 },
            { label: '→', x: 170, y: 70, delay: 90 },
            {
                label: 'H₂O',
                x: 210,
                y: 70,
                delay: 120,
                color: '#e76f51',
                font: 'bold 20px Arial',
            },
        ];

        let frame = 0;

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.font = '18px Arial';

            atoms.forEach((atom) => {
                if (frame >= atom.delay) {
                    ctx.fillStyle = atom.color || '#2a9d8f';
                    ctx.font = atom.font || '18px Arial';
                    ctx.fillText(atom.label, atom.x, atom.y);
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
            <h2 className="chem-law__title">Закон постійного складу</h2>
            <p className="chem-law__description">
                Незалежно від способу добування вода завжди має один і той самий
                склад: два атоми водню і один атом кисню.
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

export default ConstantComposition;
