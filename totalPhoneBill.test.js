
function totalPhoneBill(data) {
const totalCost = (data.split(',').reduce((total, item) => {
    return total + (item.trim() === 'call' ? 2.75 : 0.65);
}, 0)).toFixed(2);

return `R${totalCost}`;
}