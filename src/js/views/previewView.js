import View from "./View.js";
import icons from 'url:../../img/icons.svg';

class previewView extends View {
    _parentElement = '';

    _generateMarkup() {
        const id = window.location.hash.slice(1);

        return `
                <li class="preview">
                  <a class="preview__link ${this._data.id === id ? 'preview__link--active' : ''}" href="#${this._data.id}">
                   <figure class="preview__fig">
                      <img src="${this._data.image}" alt="Test" />
                    </figure>
                    <div class="preview__data">
                      <h4 class="preview__title">${this._data.title}</h4>
                      <p class="preview__publisher">${this._data.publisher}</p>
                      <div class="preview__user-generated ${this._data.key ? '' : 'hidden'}">
                        <svg>
                          <use href="${icons}#icon-user"></use>
                        </svg>
                      </div>
                    </div>
                  </a>
                </li> 
            `
    }

}

export default new previewView();




// import View from './view';
// export default class PreviewView extends View {
//     _generateMarkup() {
//         return this._data.map(this._generateMarkupPreview).join();
//     }
//     _generateMarkupPreview(result) {
//         const id = window.location.hash.slice(1);
//         return `
//            <li class="preview">
//             <a class="preview__link ${result.id === id ? 'preview__link--active' : ''}" href="#${result.id}">
//               <figure class="preview__fig">
//                 <img src="${result.image}" alt="Test" />
//               </figure>
//               <div class="preview__data">
//                 <h4 class="preview__title">${result.title}</h4>
//                 <p class="preview__publisher">${result.publisher}</p>
//
//               </div>
//             </a>
//           </li>
//     `;
//     }
// }
// import PreviewView from './previewView';