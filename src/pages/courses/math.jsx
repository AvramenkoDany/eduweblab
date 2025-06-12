import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import mathDescriptions from '@/api/courses/math/mathDescription';
import { drawGrid, drawAxes, drawMathFunction } from '@/utils/drawFunctions';
import '@/styles/index.scss';

const MathPage = () => {
    const { t } = useTranslation();
    const canvasRef = useRef(null);
    const [selectedFunction, setSelectedFunction] = useState('sin');

    const functionDescriptions = mathDescriptions(t);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        let animationFrameId;
        let phase = 0;
        let drawProgress = 0;
        const step = 4; // крок "малювання" (чим менше — повільніше, плавніше)

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawGrid(ctx, canvas);
            drawAxes(ctx, canvas);
            drawMathFunction(
                ctx,
                canvas,
                selectedFunction,
                phase,
                drawProgress,
            );

            phase += 1; // швидкість руху
            drawProgress += step;

            if (drawProgress > canvas.width) {
                drawProgress = 0; // почати малювання спочатку
                phase = 0; // обнулити фазу
            }

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => cancelAnimationFrame(animationFrameId);
    }, [selectedFunction]);

    return (
        <div className="html-page">
            <h1 className="html-page__title">{t('mathPage.title')}</h1>
            <p className="html-page__description">
                {t('mathPage.description')}
            </p>

            <div className="html-page__controls">
                <span className="html-page__label">
                    {t('mathPage.selectFunction')}:
                </span>
                <div className="html-page__radio-group">
                    {Object.keys(functionDescriptions).map((func) => (
                        <label key={func} className="html-page__radio">
                            <input
                                type="radio"
                                name="function"
                                value={func}
                                checked={selectedFunction === func}
                                onChange={(e) =>
                                    setSelectedFunction(e.target.value)
                                }
                                className="html-page__radio-input"
                            />
                            <span className="html-page__radio-button">
                                {t(`math.functions.${func}`)}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            <p className="html-page__function-description">
                {functionDescriptions[selectedFunction]}
            </p>

            <div className="html-page__canvas-wrapper">
                <canvas
                    ref={canvasRef}
                    width="800"
                    height="400"
                    className="html-page__canvas"
                />
            </div>
        </div>
    );
};

export default MathPage;
