


var vm = new Vue({
    el: '#app',
    data: {
        a: 1,
        b: 2,
        c: 3,
        bool: false
    }
});


setTimeout(() => {
    vm.c = 'c'
},1000)
