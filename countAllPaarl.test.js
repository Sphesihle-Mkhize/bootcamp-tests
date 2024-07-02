function countAllPaarl(registrationNumbers) {
    const regNumbersArray = registrationNumbers.split(',');
    const paarlNumbers = regNumbersArray.filter(regNumber => regNumber.trim().startsWith('CJ'));
    return paarlNumbers.length;
}
