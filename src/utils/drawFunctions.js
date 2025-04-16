export const drawGrid = (ctx, canvas) => {
    const gridSize = 20;
    ctx.strokeStyle = '#e0e0e0';
    ctx.lineWidth = 0.5;

    for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
    }

    for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }
};

export const drawAxes = (ctx, canvas) => {
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 1;

    // Ось X
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.stroke();

    // Ось Y
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.stroke();
};

export const drawMathFunction = (ctx, canvas, selectedFunction, phase, drawLimit = canvas.width) => {
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);

    for (let x = 0; x < drawLimit; x++) {
        let y;
        const normalizedX = (x - canvas.width / 2) * 0.05;

        switch (selectedFunction) {
            case 'sin':
                y = canvas.height / 2 + Math.sin((x + phase) * 0.05) * 50;
                break;
            case 'cos':
                y = canvas.height / 2 + Math.cos((x + phase) * 0.05) * 50;
                break;
            case 'tan':
                y = canvas.height / 2 + Math.tan((x + phase) * 0.05) * 10;
                break;
            case 'cot':
                y = canvas.height / 2 + (1 / Math.tan((x + phase) * 0.05)) * 50;
                break;
            case 'sec':
                y = canvas.height / 2 + (1 / Math.cos((x + phase) * 0.05)) * 50;
                break;
            case 'csc':
                y = canvas.height / 2 + (1 / Math.sin((x + phase) * 0.05)) * 50;
                break;
            case 'quadratic':
                y = canvas.height / 2 - Math.pow(normalizedX, 2) * 10;
                break;
            case 'cubic':
                y = canvas.height / 2 - Math.pow(normalizedX, 3) * 0.1;
                break;
            case 'exp':
                y = canvas.height / 2 - Math.exp(normalizedX) * 10;
                break;
            case 'log':
                y = canvas.height / 2 - Math.log(normalizedX + 1) * 50;
                break;
            case 'abs':
                y = canvas.height / 2 - Math.abs(normalizedX) * 50;
                break;
            case 'gauss':
                y = canvas.height / 2 - Math.exp(-Math.pow(normalizedX, 2)) * 200;
                break;
            default:
                y = canvas.height / 2;
        }

        if (isFinite(y)) {
            ctx.lineTo(x, y);
        } else {
            ctx.moveTo(x, canvas.height / 2);
        }
    }

    ctx.strokeStyle = '#007BFF';
    ctx.lineWidth = 2;
    ctx.stroke();
};

