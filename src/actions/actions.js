import Product from '../model/product';

export function addProduct (event) {


	let priceField = event.currentTarget.parentNode.previousElementSibling;
	let price = parseFloat(priceField.innerHTML);
	let productNameField = priceField.previousElementSibling;
	let productName = productNameField.innerHTML;
	let productIdField = productNameField.previousElementSibling; 
	let productId = productIdField.innerHTML;
	let product = new Product(productId,productName,price);

	return {type:"ADD",product:product};
}


export function reduceProduct (event) {


	let amountField = event.currentTarget.parentNode.previousElementSibling;
	let amount = amountField.innerHTML;
	let priceField = amountField.previousElementSibling;
	let price = parseFloat(priceField.innerHTML)/amount;
	let productNameField = priceField.previousElementSibling;
	let productName = productNameField.innerHTML;
	let productIdField = productNameField.previousElementSibling;
	let productId  = productIdField.innerHTML;
	let product = new Product(productId,productName,price);

	return {type:"DECREMENT",product:product};
}