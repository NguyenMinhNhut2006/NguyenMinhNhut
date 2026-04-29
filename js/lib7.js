function them() {

    // Tạo 1 div có class "row" để chứa các sản phẩm
    const myRow = document.createElement("div");
    myRow.setAttribute("class", "row");

    // Hàm tạo 1 sản phẩm
    function createProduct(name, price, imgSrc) {

        // Div cha của 1 sản phẩm
        const myDiv = document.createElement("div");
        myDiv.classList.add("product-item");

        // Div chứa hình ảnh
        const imgDiv = document.createElement("div");
        imgDiv.classList.add("product-image");

        // Tạo thẻ img và gán đường dẫn ảnh
        const img = document.createElement("img");
        img.src = imgSrc;

        // Đưa img vào div hình ảnh
        imgDiv.appendChild(img);

        // Div chứa thông tin sản phẩm
        const infoDiv = document.createElement("div");
        infoDiv.classList.add("product-info");

        // Tạo thẻ p hiển thị tên
        const pName = document.createElement("p");
        pName.textContent = name;

        // Tạo thẻ p hiển thị giá
        const pPrice = document.createElement("p");
        pPrice.textContent = price;

        // Tạo link "Xem chi tiết"
        const link = document.createElement("a");
        link.href = "#";
        link.textContent = "Xem chi tiết";

        // Đưa tên, giá, link vào infoDiv
        infoDiv.append(pName, pPrice, link);

        // Đưa ảnh và info vào div sản phẩm
        myDiv.append(imgDiv, infoDiv);

        // Trả về 1 sản phẩm hoàn chỉnh
        return myDiv;
    }

    // Tạo sản phẩm mẫu
    const product1 = createProduct("hoa hồng", "200.000đ", "img/hong.jpg");
    const product2 = createProduct(" hoa sen", "400.000đ", "img/sen.jpg");

    // Thêm các sản phẩm vào row
    myRow.append(product1, product2);

    // Lấy container ngoài HTML
    const container = document.querySelector(".container");

    // Đưa row vào container để hiển thị ra màn hình
    container.appendChild(myRow);
}
/*function createProduct(name, price, imgSrc) {
    const myDiv = document.createElement("div");
    myDiv.classList.add("product-item");

    const imgDiv = document.createElement("div");
    imgDiv.classList.add("product-image");

    const img = document.createElement("img");
    img.src = imgSrc;

    imgDiv.appendChild(img);

    const infoDiv = document.createElement("div");
    infoDiv.classList.add("product-info");

    const pName = document.createElement("p");
    pName.textContent = name;

    const pPrice = document.createElement("p");
    pPrice.textContent = price;

    const link = document.createElement("a");
    link.href = "#";
    link.textContent = "Xem chi tiết";

    infoDiv.append(pName, pPrice, link);
    myDiv.append(imgDiv, infoDiv);

    return myDiv;
}


const productList = [
    {
        id: "001",
        name: "Hạt giống hoa Pháp",
        price: "250000",
        img: "../assets/images/hinh.jpg",
        link: "#"
    }
];

// hiển thị danh sách
function loadAllProducts() {
    productList.forEach(function(product) {
        const item = createProduct(
            product.name,
            product.price,
            product.img
        );
        document.body.appendChild(item);
    });
}

// gọi function
loadAllProducts(); */