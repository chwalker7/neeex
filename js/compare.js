// Before/after comparison slider (no dependencies)
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.compare').forEach((box) => {
        const range = box.querySelector('input[type="range"]');
        const update = () => box.style.setProperty('--pos', range.value + '%');
        range.addEventListener('input', update);
        update();
    });
});
