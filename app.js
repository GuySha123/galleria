import {pictures} from './data/pictures.js';

// Search Function
function searchPictures(){
    const searchField = document.getElementById('search-field');
    const searchTerm = searchField.value.trim();
    const searchResult = pictures.filter(pic => {
        return pic.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
    });

    displayPictures(searchResult);
}
document.getElementById(`search-btn`).addEventListener('click', searchPictures);


// Count Products
function countTotalPicturs(){
    const total = document.getElementById(`total-products`);
    total.innerHTML = pictures.length;
    return pictures.length;
}

// Display Picturs
function displayPictures(productData) {
    const container = document.getElementById('products-container');
    let html = '';
    let stockStatus = false;

    productData.forEach(product => {

        if(product.inStock === true){
            stockStatus = '';
        }else{
            stockStatus = 'Not Available';
        }

        html += `<div class="card m-1" style="width: 18rem;">
                    <img src="${product.getImage()}" class="card-img-top">
                        <div class="card-body text-center">
                        <h5 class="card-title">${product.getName()}</h5>
                        <p class="card-text text-center">${product.getArtist()}</p>
                        <p class="card-text text-center">${product.getPrice()}</p>
                        <span class ="text-danger">${stockStatus}</span>
                        </div>
                </div>`;
    })
    container.innerHTML = html;
    countTotalPicturs()
}

displayPictures(pictures);