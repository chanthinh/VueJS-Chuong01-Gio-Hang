var vueInstance = new Vue({
    el: '#app',
    data: {
        title: 'Áo thun nam thể thao hàng VNXK vải dày mịn - Vải Đốm',
        url: 'https://shopee.vn/%C3%81o-Thun-Xanh-D%C6%B0%C6%A1ng-gi%C3%A1-R%E1%BA%BB-D%C3%A0nh-Cho-c%E1%BA%A3-nh%C3%A0-%C4%90i-Ch%C6%A1i-i.118127317.2758818810',
        target: '_blank',
        price: 20000,
        sale: 0.3,
        selectedProduct: 2,
        listProductDetail: [
            {
                image: './images/red.jpg',
                quantity: 0,
                textColor: 'Màu Đỏ'
            },
            {
                image: './images/blue.jpg',
                quantity: 8,
                textColor: 'Màu Xanh'
            },
            {
                image: './images/black.jpg',
                quantity: 2,
                textColor: 'Màu Đen'
            }
        ]
    },
    methods: {

    },
    computed: {
        formatOriginalPrice() {
            var number = this.price
            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number)
        },
        formatFinalPrice() {
            var number = this.price - this.price * this.sale
            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number)
        },
        getProduct() {
            let index = this.selectedProduct
            return this.listProductDetail[index]
        }
    }
})