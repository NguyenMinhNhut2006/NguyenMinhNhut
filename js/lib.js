const productDatabase = [
    { id: 1,  name: "liệu IT đã hết thời",        price: 400000,  img: "../assets/images/sachit1.jpg",        desc: "" },
    { id: 2,  name: "CÔng nghệ tương lai",        price: 450000,  img: "../assets/images/sachit2.jpg",        desc: "." },
    { id: 3,  name: "Tìm hiểu máy tính điện tử",        price: 500000,  img: "../assets/images/sachit3.jpg",        desc: "." },
    { id: 4,  name: "Lập trình wed",        price: 550000,  img: "../assets/images/sachit4.jpg",        desc: "." },
    { id: 5,  name: "javascript",        price: 600000, img: "../assets/images/sachit5.jpg",        desc: "" },
    { id: 6,  name: "Mạng máy tính hệ thống bảo mật",        price: 650000, img: "../assets/images/sachit6.jpg",        desc: "" },
];

function addProduct(imgSrc, name, price, productId) {
    // Tạo khung chứa cha
    const myDiv = document.createElement("div");
    myDiv.setAttribute("class", "product-item col-sm-3");

    // Khung 1 – Hình ảnh
    const myDiv1 = document.createElement("div");
    myDiv1.setAttribute("class", "product-image");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", imgSrc);
    productImg.setAttribute("alt", name);
    productImg.style.width = "100%";

    myDiv1.appendChild(productImg);

    // Khung 2 – Thông tin
    const myDiv2 = document.createElement("div");
    myDiv2.setAttribute("class", "product-info");

    const productName = document.createElement("p");
    productName.setAttribute("class", "product-name");
    productName.innerText = name;

    const productPrice = document.createElement("p");
    productPrice.setAttribute("class", "product-price");
    productPrice.innerText = price.toLocaleString("vi-VN");

    const productBtn = document.createElement("a");
    productBtn.setAttribute("class", "btn-detail");
    productBtn.setAttribute("href", "../html/detail.html?id=" + productId);
    productBtn.innerText = "Xem chi tiết";

    myDiv2.appendChild(productName);
    myDiv2.appendChild(productPrice);
    myDiv2.appendChild(productBtn);

    myDiv.appendChild(myDiv1);
    myDiv.appendChild(myDiv2);

    document.getElementById("product-list").appendChild(myDiv);
}

function addProduct_v2(products) {
    products.forEach(function(product) {
        addProduct(product.img, product.name, product.price, product.id);
    });
}