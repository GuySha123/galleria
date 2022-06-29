class Picture{
    constructor(getPrice, getName, getImage, getArtist, getInStock){
        this.price = getPrice;
        this.name = getName;
        this.image = getImage;
        this.artist = getArtist;
        this.inStock = getInStock
    }

    getPrice(){
        return `$${this.price}`;
    }

    getName(){
        return this.name;
    }

    getImage(){
        const IMG_PATH = './public/products-pictures/';
        return `${IMG_PATH}${this.image}`;
    }

    getArtist(){
        return this.artist;
    }

    getInStock(){
        return this.inStock;
    }
}


const pictures = [
    new Picture(
        200,
        'Sleeples Night',
        'product-no1.jpg',
        '@heyerlein',
        true
    ),
    new Picture(
        360,
        'Just Us',
        'product-no2.jpg',
        '@neviayue',
        true
    ),
    new Picture(
        295,
        'Beyond',
        'product-no3.jpg',
        '@nasa',
        true
    ),
    new Picture(
        522,
        'Together Alone',
        'product-no4.jpg',
        '@thefeistychihuahua',
        false
    ),
];

export {pictures};