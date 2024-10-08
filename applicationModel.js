const fs = require('fs');

//Typically the model will access a database of some type, but this is omitted in this example for simplicity
class applicationModel {
	constructor() {
        this.initialize();
        this.cart = []; // Initialize the cart array
    }

	//initialize the bookList with books
	  initialize() {
        this.product = JSON.parse(fs.readFileSync('./application/data/applicationData.json'));
    }

    getAllProds() {
        return this.product;
    }

    getProdById(id) {
		console.log(id);
        const product = this.getAllProds().find(item => item.id == id);

        if (product.id < this.product.length)
            product.nextId = product.id + 1;
        else
            product.nextId = 1;

        return product;
    }

    getProductsBySearch(search) {
        search = search.toLowerCase();
        this.searchResults = [];

        this.product.forEach(item => {
            if (item.shortDescription.toLowerCase().includes(search) || item.longDescription.toLowerCase().includes(search)) {
                this.searchResults.push(item);
            }
        });

        return this.searchResults;
    }

    getProdsByFilter(filter) {
        filter = filter.toLowerCase();
        this.filtered = [];

        this.product.forEach(item => {
            if (item.tags.some(tag => tag.toLowerCase() === filter)) {
                this.filtered.push(item);
            }
        });

        return this.filtered;
    }

    getAllFilters() {
        const filters = [];
        this.product.forEach(product => {
            product.tags.forEach(tag => {
                const filter = filters.find(f => f.filter === tag);
                if (filter) {
                    filter.count += 1;
                } else {
                    filters.push({ filter: tag, count: 1 });
                }
            });
        });
        return filters;
    }
    getCart() {
        // Implement the logic to retrieve the cart data
        // You can return a default empty array or load the cart data from a JSON file or database
        return this.cart || [];
      }
    
      addToCart(productId) {
        const product = this.getAllProds().find(item => item.id == productId);
        if (product) {
            const cartItem = {
                id: product.id,
                name: product.name,
                price: product.price
            };
            this.cart.push(cartItem);
            return this.cart;
        } else {
            // Handle the case when the product is not found
            return this.cart;
        }
    }

removeFromCart(productId) {
    this.cart = this.cart.filter(item => item.id !== productId);
    return this.cart;
}
}

module.exports = applicationModel; 