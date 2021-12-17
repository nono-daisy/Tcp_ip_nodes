var Vm = new Vue({
    el:'#app',
    data:{
        product: 'Socks!',
        image:"vmSocks-green-onWhite.jpg" ,
        altText:'A pair of socks',
        inventory:true,
        details: ["80% Cotton","20%polyester","Gender-neural"],
        variants:
        [
            {
                variantId: 2234,
                varaintColor:"green",
            },
            {
                variantId: 2235,
                varaintColor:"blue"
            }
        ]
         

    }
})