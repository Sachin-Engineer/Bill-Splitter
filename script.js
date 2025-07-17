const billAmountInput = document.querySelector('#bill-amount')
const noOfPeopleInput = document.querySelector('.no-of-people')
const customTipInput = document.querySelector('.custom-tip')
const generateBillBtn = document.querySelector('.generate-bill-btn')
const eachPersonBillOutput = document.querySelector('.each-person-bill span')
const totalBillOutput = document.querySelector('.total span')
const tipAmountOutput = document.querySelector('.tip-amount span')
const tipContainer = document.querySelector('.tip-container')
const resetBtn = document.querySelector('.reset-btn')

let tipPercentage = 0;

generateBillBtn.addEventListener('click', () => {
    const billAmount = parseInt(billAmountInput.value)
    const noOfPeople = parseInt(noOfPeopleInput.value)

    const tipAmount = billAmount * (tipPercentage / 100)
    const totalBill = billAmount + tipAmount
    const eachPersonBill = totalBill / noOfPeople;

    tipAmountOutput.textContent = `₹${tipAmount}`
    totalBillOutput.textContent = `₹${totalBill}`
    eachPersonBillOutput.textContent = `₹${eachPersonBill}`

    resetBtn.disabled = false
})

tipContainer.addEventListener('click', (e) => {
    if (tipContainer.classList.contains('disabled')) return
    if (e.target !== tipContainer) {
        [...tipContainer.children].forEach((tip) => tip.classList.remove('selected'))
        e.target.classList.add('selected')
        tipPercentage = parseInt(e.target.textContent)
        customTipInput.value = ''
    }
    if (tipPercentage && noOfPeopleInput.value) {
        generateBillBtn.disabled = false
    } else {
        generateBillBtn.disabled = true
    }
})

customTipInput.addEventListener('input', () => {
    tipPercentage = customTipInput.value;
    [...tipContainer.children].forEach((tip) => tip.classList.remove('selected'))
    if (tipPercentage && noOfPeopleInput.value) {
        generateBillBtn.disabled = false
    } else {
        generateBillBtn.disabled = true
    }
})

resetBtn.addEventListener('click', () => {
    billAmountInput.value = '';
    noOfPeopleInput.value = '';
    tipPercentage = 0;
    customTipInput.value = '';
    [...tipContainer.children].forEach((tip) => tip.classList.remove('selected'))
    tipAmountOutput.textContent = ''
    totalBillOutput.textContent = ''
    eachPersonBillOutput.textContent = ''

    resetBtn.disabled = true
    generateBillBtn.disabled = true
})

billAmountInput.addEventListener('input', () => {
    if (billAmountInput.value) {
        customTipInput.disabled = false
        noOfPeopleInput.disabled = false
        tipContainer.classList.remove('disabled')
    } else {
        customTipInput.disabled = true
        noOfPeopleInput.disabled = true
        tipContainer.classList.add('disabled')
    }
})

noOfPeopleInput.addEventListener('input', () => {
    if (tipPercentage && noOfPeopleInput.value) {
        generateBillBtn.disabled = false
    } else {
        generateBillBtn.disabled = true
    }
})


