var app = new Vue({
    el: "#app",
    data: {
        product: "Socks",
        description: "Footwear",
        image: "images/sock.jpeg",
        link: "https://www.vuemastery.com/courses/intro-to-vue-js/attribute-binding",
        inventory: 10,
        onSale: true,
        details: ["20% cotton", "30% polyester", "100% awesome"],
        variants: [
            {
                variantId: 1234,
                variantColor: "Pink"
            },
            {
                variantId: 3456,
                variantColor: "Purple"
            }
        ],
        sizes: ["Small - S", "Medium - M", "Large - L", "Extra Large - XL"]
    }
})