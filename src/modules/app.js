import { DonateForm } from './donate-form';
import { DonateList } from './donate-list';

class App {
  #donateForm;
  #donateList;
  constructor() {
    this.state = { donates: [], totalAmount: null };
    this.#donateForm = new DonateForm(); // this.state.totalAmount вместо ''
    // const donate = this.#donateForm.getData();
    // console.log(donate);
    this.#donateList = new DonateList(mockDonates); // mockDonates заменил на this.state.donates
  }
  
  // createNewDonate(newDonate) {
  //   this.state.donates.push(newDonate);
  //   this.#donateForm.updateTotalAmount();
  //   this.#donateList.updateDonates()
  // }

  run() {
    const donateFormHtml = this.#donateForm.render();
    const donateListHtml = this.#donateList.render();

    document.body.append(donateFormHtml, donateListHtml);
  }
}
const mockDonates = [
  { amount: 4, date: new Date() },
  { amount: 20, date: new Date() },
  { amount: 3, date: new Date() },
  { amount: 1, date: new Date() },
];
export default App;
