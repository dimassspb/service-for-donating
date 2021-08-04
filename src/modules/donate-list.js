export class DonateList {
  #divContainer;
  constructor(donates) {
    this.donates = donates;
    donates = [{ date: '', amount: null }];
    this.#divContainer = document.createElement('div');
    this.#divContainer.className = 'donates-container';
  }


  // updateDonates(updatedDonates) {
  //   const divEl = documet.querySelector('.donates-container__donates');
  //   divEl.innerHTML = '';
  //   updatedDonates.forEach((donate) => {
  //     const div = document.createElement('div');
  //     div.className = 'donate-item';
  //     div.textContent = `${donate.date} - `;
  //     const b = document.createElement('b');
  //     b.textContent = `${donate.amount}$`;
  //     div.append(b);
  //     divEl.append(div);
  //   });
  //   this.#divContainer.append(h2, divEl);
  //   return this.#divContainer;
  // }


  render() {
    const h2 = document.createElement('h2');
    h2.className = 'donates-container__title';
    h2.textContent = 'Список донатов';

    const divEl = document.createElement('div');
    divEl.className = 'donates-container__donates';
    this.donates.forEach((donate) => {
      // divEl.innerHTML = `
      // <div class="donate-item">${donate.date} - <b>${donate.amount}</b>$</b></div>
      // `;
      // console.log(donate);
      // const arr = [
      //   'January',
      //   'February',
      //   'March',
      //   'April',
      //   'May',
      //   'June',
      //   'July',
      //   'August',
      //   'September',
      //   'October',
      //   'November',
      //   'December',
      // ];
      // let month = donate.date.getMonth();
      // for (let i = 0; i < arr.length; i++) {
      //   if (i === month) {
      //     month = arr[i];
      //   }
      // }
      // let date = donate.date.getDate();
      // let year = donate.date.getFullYear();

      // donate.date.setHours(donate.date.getHours()); // offset from local time
      // let h = donate.date.getHours() % 12 || 12; // show midnight & noon as 12
      // const result =
      //   (h < 10 ? '0' : '') +
      //   h +
      //   (donate.date.getMinutes() < 10 ? ':0' : ':') +
      //   donate.date.getMinutes() +
      //   (donate.date.getSeconds() < 10 ? ':0' : ':') +
      //   donate.date.getSeconds() +
      //   (donate.date.getHours() < 12 ? ' AM' : ' PM');

      const div = document.createElement('div');
      div.className = 'donate-item';
      // div.textContent = `${month} ${date}th ${year} ${result} - `;
      div.textContent = `${donate.date} - `;
      const b = document.createElement('b');
      b.textContent = `${donate.amount}$`;
      div.append(b);
      divEl.append(div);
    });
    this.#divContainer.append(h2, divEl);
    return this.#divContainer;
  }
}
