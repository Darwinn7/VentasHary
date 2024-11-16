document.addEventListener('DOMContentLoaded', () => {
    const salesList = document.getElementById('sales-list');

    const renderSales = () => {
        const sales = JSON.parse(localStorage.getItem('sales')) || [];
        salesList.innerHTML = '';
        sales.forEach((sale, index) => {
            const card = document.createElement('div');
            card.classList.add('bg-gray-800', 'p-6', 'rounded-lg', 'shadow-lg');

            const cardTitle = document.createElement('h5');
            cardTitle.classList.add('text-xl', 'font-bold', 'text-green-500', 'mb-2');
            cardTitle.textContent = sale.customer;

            const cardText = document.createElement('p');
            cardText.classList.add('text-gray-300', 'mb-4');
            cardText.innerHTML = `
                <strong>Producto:</strong> ${sale.product}<br>
                <strong>Valor Producto:</strong> $${sale.productValue}<br>
                <strong>Valor Venta:</strong> $${sale.saleValue}<br>
                <strong>Fecha de Pago:</strong> ${sale.paymentDate}<br>
                <strong>Abonos:</strong> ${sale.installments}
            `;

            const deleteButton = document.createElement('button');
            deleteButton.classList.add('bg-red-500', 'hover:bg-red-600', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded-md', 'mr-2');
            deleteButton.textContent = 'Eliminar';
            deleteButton.addEventListener('click', () => {
                sales.splice(index, 1);
                localStorage.setItem('sales', JSON.stringify(sales));
                renderSales();
            });

            const abonoButton = document.createElement('button');
            abonoButton.classList.add('bg-green-500', 'hover:bg-green-600', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded-md');
            abonoButton.textContent = 'Hacer Abono';
            abonoButton.addEventListener('click', () => {
                const abono = prompt('Ingrese el monto del abono:');
                if (abono !== null && !isNaN(abono) && abono > 0) {
                    sale.installments += parseFloat(abono);
                    localStorage.setItem('sales', JSON.stringify(sales));
                    renderSales();
                } else {
                    alert('Monto de abono inválido.');
                }
            });

            card.appendChild(cardTitle);
            card.appendChild(cardText);
            card.appendChild(deleteButton);
            card.appendChild(abonoButton);
            salesList.appendChild(card);
        });
    };

    renderSales();
});