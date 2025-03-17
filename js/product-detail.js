
const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);

/////////
document.addEventListener("DOMContentLoaded", function () {
    const qtyInput = document.getElementById("qty");
    const increaseBtn = document.getElementById("increase");
    const decreaseBtn = document.getElementById("decrease");

    increaseBtn.addEventListener("click", function () {
        let currentQty = parseInt(qtyInput.value);
        qtyInput.value = currentQty + 1;
    });

    decreaseBtn.addEventListener("click", function () {
        let currentQty = parseInt(qtyInput.value);
        if (currentQty > 1) {
            qtyInput.value = currentQty - 1;
        }
    });
});



/////
document.addEventListener("DOMContentLoaded", function () {
    const selectedProductId = localStorage.getItem("selectedProduct");
    console.log("Selected Product ID:", selectedProductId); // Debugging

    if (selectedProductId) {
        fetch("/js/demo.json") // Ensure the path is correct
            .then(response => response.json())
            .then(products => {
                console.log("Products data:", products); // Debugging
                const product = products.find(p => p.id === selectedProductId);
                if (product) {
                    // Update Product Details
                    document.getElementById("products-name").textContent = product.name;
                    document.getElementById("sold-by").textContent = product.sold_by;
                    document.getElementById("old-price").textContent = product.old_price;
                    document.getElementById("stock").textContent = product.stock;
                    document.querySelector(".img-showcase img").src = product.image;

                    // Update Specification Details
                    document.getElementById("part-number").textContent = product.part_number;
                    document.getElementById("weight").textContent = product.weight;
                    document.getElementById("dimensions").textContent = product.dimensions;
                    document.getElementById("car-make").textContent = product.car_make;
                    document.getElementById("car-model").textContent = product.car_model;
                    document.getElementById("car-sub-model").textContent = product.car_sub_model;
                    document.getElementById("parts-brand").textContent = product.parts_brand;
                    document.getElementById("net-quantity").textContent = product.net_quantity;
                    document.getElementById("parts-category").textContent = product.parts_category;

                    // Update Compatibility List
                    const compatibilityList = document.querySelector(".compatibility ul");
                    compatibilityList.innerHTML = ""; // Clear existing items
                    product.compatibility.forEach(item => {
                        let li = document.createElement("li");
                        li.textContent = item;
                        compatibilityList.appendChild(li);
                    });

                    // Update Description
                    document.querySelector("#tab2 p").textContent = product.description;

                    // Update Manufacturer Details
                    const manufacturerList = document.querySelector("#tab2 ul");
                    manufacturerList.innerHTML = `
                        <li>Manufacturer Name: ${product.manufacturer.name}</li>
                        <li>Manufacturer Address: ${product.manufacturer.address}</li>
                    `;

                } else {
                    console.error("Product not found in JSON");
                }
            })
            .catch(error => console.error("Error loading product details:", error));
    }
});


