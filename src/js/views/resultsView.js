import icons from 'url:../../img/icons.svg'
import View from './View.js';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMsg = 'No recipes found!!';
  _message = '';

  _generateMarkup(){
        return this._data.map(res => this._generateMarkupPreview(res)).join('');
    }

  _generateMarkupPreview(results) {
        return `
        <li class="preview">
            <a class="preview__link" href="#${results.id}">
              <figure class="preview__fig">
                <img src="${results.image}" alt=${results.title} />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${results.title}</h4>
                <p class="preview__publisher">${results.publisher}</p>
              </div>
            </a>
          </li>
        `
    }
}

export default new ResultsView();