import React, { useEffect, useRef } from 'react';
import '@/styles/index.scss';

const MolecularStructures = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        let frame = 0;
        const centerO = { x: 100, y: 70 };
        const startH1 = { x: 20, y: 20 };
        const startH2 = { x: 200, y: 20 };
        const targetH1 = { x: 60, y: 90 };
        const targetH2 = { x: 140, y: 90 };

        const steps = 100;

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw O atom
            ctx.fillStyle = '#457b9d';
            ctx.beginPath();
            ctx.arc(centerO.x, centerO.y, 20, 0, Math.PI * 2);
            ctx.fill();

            // Interpolate H atoms positions
            const lerp = (start, end, t) => start + (end - start) * t;
            const progress = Math.min(frame / steps, 1);

            const h1x = lerp(startH1.x, targetH1.x, progress);
            const h1y = lerp(startH1.y, targetH1.y, progress);
            const h2x = lerp(startH2.x, targetH2.x, progress);
            const h2y = lerp(startH2.y, targetH2.y, progress);

            ctx.fillStyle = '#a8dadc';
            ctx.beginPath();
            ctx.arc(h1x, h1y, 10, 0, Math.PI * 2); // H1
            ctx.fill();

            ctx.beginPath();
            ctx.arc(h2x, h2y, 10, 0, Math.PI * 2); // H2
            ctx.fill();

            frame++;
            if (frame <= steps) {
                requestAnimationFrame(animate);
            }
        };

        animate();
    }, []);

    return (
        <div className="chem-law">
            <h2 className="chem-law__title">Молекулярні структури</h2>
            <p className="chem-law__description">
                Візуалізація утворення молекул. Наприклад, вода (H₂O)
                складається з двох атомів водню та одного атома кисню.
            </p>
            <canvas
                ref={canvasRef}
                width={300}
                height={150}
                className="chem-law__canvas"
            />
        </div>
    );
};

export default MolecularStructures;
