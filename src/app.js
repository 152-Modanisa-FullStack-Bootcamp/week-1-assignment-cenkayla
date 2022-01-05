import "./styles.css";
import axios from "axios";

axios
  .get("https://my-json-server.typicode.com/modanisatech/bootcamp-db/products")
  .then((response) => {
    // Firstly, log response to the console,
    console.log(response)
    // Inspect the response and see that it has data field

    // Assign data field of the response to
    // products variable below by destructuring
    // You can use alias
    const { data: products } = response;

    // Print names of all product to the console
    // by calling foreach  method (use arrow function)
    products.forEach(data => {
      console.log(data.name)
    });

    // Get all products that contain "Şal" in their name (use filter method)
    // map filtered products to new object having only image and name field
    // assign mapped items to mappedProducts variable
    const mappedProducts = products.filter(data => data.name.includes("Şal")).
    map(item => {
      return {
        name: item.name,
        image: item.image,
      } 
    })

    // Display the images and names of mappedProducts
    // You need to add them to the DOM
    // you need to use forEach method
    // You need to use flexbox
    // Position of image and text is up to you
    // You can use any style you wish
    const productsContainer = document.querySelector(".productsContainer")
    productsContainer.innerHTML = ""

    mappedProducts.forEach(item => {

      const product = `<div class="product"> 
        <h3>${item.name} </h3>  
        <img src="${item.image}" /> 
      </div > `;

      productsContainer.innerHTML += product
    })
  });