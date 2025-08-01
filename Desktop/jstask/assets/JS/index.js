
let products = [
  {
    id: 1,
    name: "iPhone ",
    price: 2500,
    category: "smartphone",
    description: "Apple şirkətinin yeni nəsil telefonu",
    stock: 10,
    is_active: true,
  },
  {
    id: 2,
    name: "Samsung",
    price: 3500,
    category: "smartphone",
    description: "Samsung şirkətinin yeni nəsil telefonu",
    stock: 10,
    is_active: true,
  },
  {
    id: 3,
    name: "Xiaomi",
    price: 3000,
    category: "smartphone",
    description: "Xiaomi şirkətinin yeni nəsil telefonu",
    stock: 10,
    is_active: true,
  },
];

let id = 1000;

let name = "";
let price = "";
let category = "";
let description = "";
let stock = "";

//no1
function getName() {
  const value = prompt("Mehsulun  adini qeyd et");
  if (value && value.trim().length && value.trim().length >= 2) {
    name = value;
  } else {
    getName();
  }
}

function getPrice() {
  const value = prompt("Mehsulun  qiymetini qeyd et");
  if (value && !isNaN(value)) {
    price = value;
  } else {
    getPrice();
  }
}

function getCategory() {
  const value = prompt("Mehsulun  aid oldugu kateqoriyani qeyd et");
  if (value && value.trim().length && value.trim().length >= 2) {
    category = value;
  } else {
    getCategory();
  }
}

function getDescription() {
  const value = prompt("Serh et");
  if (value && value.trim().length && value.trim().length >= 5) {
    description = value;
  } else {
    getDescription();
  }
}

function getStock() {
  const value = prompt("Stokda olan mehsulun sayin qeyd et");
  if (value && !isNaN(value)) {
    stock = value;
  } else {
    getStock();
  }
}

const getData = () => {
  getName();
  getPrice();
  getCategory();
  getDescription();
  getStock();
  if (name && price && category && description && stock) {
    addProducts();
  }
};

const addProducts = () => {
  const newProducts = {
    id: id + 1,
    name,
    price,
    category,
    description,
    stock,
    is_active: true,
  };
  products.push(newProducts);
  console.log("mehsul elave olundu", newProducts);
};

//no2
const editProducts = (id) => {
  const existingProducts = products.find((item) => item.id === id);
  if (existingProducts) {
    const updatedList = products.map((item) => {
      if (item.id === existingProducts.id) {
        return {
          ...existingProducts,
          price: 5500,
        };
      } else {
        return item;
      }
    });
    console.log(updatedList);
  }
};

//no3
const deleteProducts = (id) => {
  const isDelete = confirm("Mehsul silinsinmi?");
  if (isDelete) {
    const updatedList = products.filter((item) => item.id !== id);
    products = updatedList;
    console.log("silindi", updatedList);
  }
};

//no4
const listProducts = () => {
  if (products.length) {
    console.log(products);
  } else {
    console.log("Boshdur!");
  }
};

//no5
const getProductsDetail = (id) => {
  const findProducts = products.find((item) => item.id === id);
  if (findProducts) {
    console.log(findProducts);
  } else {
    console.log("Axtardiginiz mehsul tapilmadi");
  }
};

//no6
const searchProducts = () => {
  const searchValue = prompt("Axtardiginiz mehsulu qeyd edin");
  if (searchValue && searchValue.trim().length) {
    const findProducts = products.filter((item) =>
      item.name
        .toLocaleLowerCase("az")
        .includes(searchValue.toLocaleLowerCase("az"))
    );
    if (findProducts) {
      console.log(findProducts);
    }
  }
};

//no7
const sortProducts = (type = "asc") => {
  if ((type = "asc")) {
    const updateList = products.sort((a, b) => a.price - b.price);
    console.log(updateList);
  }
};

//no8
const productIsActive = (id) => {
  const existingProducts = products.find((item) => item.id === id);
  if (existingProducts) {
    const updatedList = products.map((item) => {
      if (item.id === existingProducts.id) {
        return {
          ...existingProducts,
          is_active: false,
        };
      } else {
        return item;
      }
    });
    console.log(updatedList);
  }
};

// getData()
//editProducts(3);
//deleteProducts(5)
//listProducts()
//getProductsDetail(4)
//searchProducts()
//sortProducts();
//productIsActive(2)













