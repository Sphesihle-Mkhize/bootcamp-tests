function countAllFromTown(registrationNumbers, town) {
    const regNumbersArray = registrationNumbers.split(',');
    const townNumbers = regNumbersArray.filter(regNumber => regNumber.trim().startsWith(town));
    return townNumbers.length;
}