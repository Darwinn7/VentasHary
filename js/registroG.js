document.addEventListener('DOMContentLoaded', () => {
    const salesForm = document.getElementById('sales-form');

    salesForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const customerName = document.getElementById('customer-name').value;
        const productName = document.getElementById('product-name').value;
        const productValue = document.getElementById('product-value').value;
        const saleValue = document.getElementById('sale-value').value;
        const paymentDate = document.getElementById('payment-date').value;
        const installments = document.getElementById('installments').value;
        const sale = {
            customer: customerName,
            product: productName,
            productValue: parseFloat(productValue),
            saleValue: parseFloat(saleValue),
            paymentDate: paymentDate,
            installments: parseInt(installments)
        };
        let sales = JSON.parse(localStorage.getItem('sales')) || [];
        sales.push(sale);
        localStorage.setItem('sales', JSON.stringify(sales));
        salesForm.reset();
        alert('Venta registrada exitosamente');
        window.location.href = 'visualizarG.html';
    });
});