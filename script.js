// script.js
document.getElementById('calculate-btn').addEventListener('click', function () {
    // Get input values
    const basicPay = parseFloat(document.getElementById('basic-pay').value);
    const gradePay = parseFloat(document.getElementById('grade-pay').value);
    const daPercentage = parseFloat(document.getElementById('da').value);
    const hraPercentage = parseFloat(document.getElementById('hra').value);
  
    // Validate inputs
    if (isNaN(basicPay) || isNaN(gradePay) || isNaN(daPercentage) || isNaN(hraPercentage)) {
      alert('Please enter valid numbers in all fields.');
      return;
    }
  
    // Calculate allowances
    const da = (basicPay + gradePay) * (daPercentage / 100);
    const hra = (basicPay + gradePay) * (hraPercentage / 100);
  
    // Calculate total salary
    const totalSalary = (basicPay + gradePay + da + hra).toFixed(2);
  
    // Display result
    document.getElementById('total-salary').textContent = totalSalary;
  });