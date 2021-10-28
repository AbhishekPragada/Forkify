import icons from 'url:../../img/icons.svg'
import View from './View.js';

class PaginationView extends View{
  _parentElement = document.querySelector('.pagination');

  _generateMarkup(){
    const numPages = this._data.results.length /this._data.resultsPerPage;
    console.log(numPages);
      
    // Page 1
    // Page 1 not other
    // Last page
    // Other page
  }
}

export default new PaginationView();