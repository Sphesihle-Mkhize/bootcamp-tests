function mostProfitableDepartment(salesData) {
    let departmentSales = {};
    
    // Calculate total sales for each department
    salesData.forEach(sale => {
        if (departmentSales[sale.department]) {
            departmentSales[sale.department] += sale.sales;
        } else {
            departmentSales[sale.department] = sale.sales;
        }
    });
    
    // Find the department with the highest total sales
    let mostProfitable = '';
    let highestSales = 0;
    for (let department in departmentSales) {
        if (departmentSales[department] > highestSales) {
            highestSales = departmentSales[department];
            mostProfitable = department;
        }
    }
    
    return mostProfitable;
}

function mostProfitableDay(salesData) {
    let daySales = {};
    
    // Calculate total sales for each day
    salesData.forEach(sale => {
        if (daySales[sale.day]) {
            daySales[sale.day] += sale.sales;
        } else {
            daySales[sale.day] = sale.sales;
        }
    });
    
    // Find the day with the highest total sales
    let mostProfitable = '';
    let highestSales = 0;
    for (let day in daySales) {
        if (daySales[day] > highestSales) {
            highestSales = daySales[day];
            mostProfitable = day;
        }
    }
    
    return mostProfitable;
}
