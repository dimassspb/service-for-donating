export class DonateForm {
  #form;
  constructor(createNewDonate) {
    this.createNewDonate = createNewDonate;
    this.totalAmount = 0;
    this.#form = document.createElement('form');
    this.#form.className = 'donate-form';
  }

//   updateTotalAmount(newAmount) {
//     const totalAmountHtml = document.getElementById('total-amount');
//     this.totalAmount = this.totalAmount + newAmount;
//     totalAmountHtml.textContent = `${this.totalAmount}$`; // totalAmount + newAmount
//     return this.totalAmount;
//   }
// getData () {
//   this.#form.addEventListener('submit', () => {
//     const input = document.querySelector('.donate-form__donate-input');
//     console.log(input.value);
  
//   })
// }
  render() {
    const h1 = document.createElement('h1');
    h1.id = 'total-amount';
    h1.textContent = `${this.totalAmount}$`;

    const label = document.createElement('label');
    label.className = 'donate-form__input-label';
    label.textContent = 'Введите сумму в $';

    const input = document.createElement('input');
    input.className = 'donate-form__donate-input';
    input.name = 'amount';
    input.type = 'number';
    input.max = '100';
    input.min = '0';
    input.required = '';
    label.append(input);

    const button = document.createElement('button');
    button.className = 'donate-form__submit-button';
    button.type = 'submit';
    button.textContent = 'Задонатить';

    this.#form.append(h1, label, button);
    return this.#form;
  }
}

