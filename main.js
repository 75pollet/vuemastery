var app = new Vue({
    el: "#app",
    data: {
        product: "Socks",
        description: "Footwear",
        image: "images/sock.jpeg",
        link: "https://www.vuemastery.com/courses/intro-to-vue-js/attribute-binding",
        inventory: false,
        onSale: true,
        details: ["20% cotton", "30% polyester", "100% awesome"],
        variants: [
            {
                variantId: 1234,
                variantColor: "Pink",
                variantImage: "images/sock.jpeg"

            },
            {
                variantId: 3456,
                variantColor: "Green",
                variantImage: "images/sock2.jpeg"
            }
        ],
        sizes: ["Small - S", "Medium - M", "Large - L", "Extra Large - XL"],
        cart: 0
    },
    methods: {
        addToCart(){
            this.cart += 1
        },
        updateProduct(variantImage){
            this.image = variantImage
        },
        reduceNumber(){
            this.cart -= 1
        }
    }
})