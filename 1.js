const cels = +(prompt('Введите температуру в градусах Цельсия'));
alert(`Цельсий: ${cels}, Фаренгейт: ${changeTemp(cels)}`);

function changeTemp() {
    let far = (9 / 5) * cels + 32;
    return Math.round(far);
}
