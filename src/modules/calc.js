const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block'),
        calcType = document.querySelector('.calc-type'),
        calcSquare = document.querySelector('.calc-square'),
        calcCount = document.querySelector('.calc-count'),
        calcDay = document.querySelector('.calc-day'),
        totalValue = document.getElementById('total');

    const bruteForceNumbers = (total, count = 0) => {
        let time = 1,//ms
            step = Math.ceil((total / (time * 1000)) * 11);

        if (count < total) {
            count += +step;
        }

        if (count < total) {
            setTimeout(requestAnimationFrame(() => {
                bruteForceNumbers(total, count);
            }), time);
        } else {
            totalValue.textContent = Math.round(total);
            return;
        }
        totalValue.textContent = count;
    };

    const countSum = () => {
        let countValue = 1,
            dayValue = 1,
            total = 0;

        const typeValue = calcType.options[calcType.selectedIndex].value,
            squareValue = +calcSquare.value;

        if (calcCount.value > 1) {
            countValue += (calcCount.value - 1) / 10;
        }

        if (calcDay.value && calcDay.value < 5) {
            dayValue *= 2;
        } else if (calcDay.value && calcDay.value < 10) {
            dayValue *= 1.5;
        }

        if (typeValue && squareValue) {
            total = price * typeValue * squareValue * countValue * dayValue;
            requestAnimationFrame(() => {
                bruteForceNumbers(total);
            });
        }

    };

    calcBlock.addEventListener('change', (event) => {
        const target = event.target;
        // eslint-disable-next-line max-len
        if (target.matches('.calc-type') || target.matches('.calc-square') || target.matches('.calc-count') || target.matches('.calc-day')) {
            countSum();
        }

        // if (target.matches('.calc-square')) {
        //      calcSquare.value = calcSquare.value.replace(/\D/g, '');
        // }
        // if (target.matches('.calc-count')) {

        // }
        // if (target.matches('.calc-day')) {
        //     calcDay.value = calcDay.value.replace(/\D/g, '');
        // }
    });
};

export default calc;