
const vm2 = new Vue({
    el: '#Products',
    data: {
        menu: food,
        burgers: []
    },
    methods:{
        getBurgers: function(){
            return this.burgers;

        }
    }


})
'use strict';
const socket = io();

const vm = new Vue({
    el: '#Contact',
    data: {
        orders: {},
        theOrder: {orderId: "", details: {x:0, y:0}, orderItems:[], customerInfo:[]},
        orderNum: 0,
        payment: "",
        name: "",
        email: "",
        male: "",
        female: "",
        nonbinary: "",
        undisclosed: ""

    },

    methods: {
        markDone: function(name, email, payment, male, female, nonbinary, undisclosed) {
            let myElement = document.getElementById("orderInfo");
            document.getElementById("orderInfo").innerHTML = "";
            let nameItem = document.createElement("p");
            nameItem.appendChild(document.createTextNode('Name: ' + name))
            let emailItem = document.createElement("p");
            emailItem.appendChild(document.createTextNode('E-mail: ' + email))
            let paymentItem = document.createElement("p");
            paymentItem.appendChild(document.createTextNode('Payment method: ' + payment))
            let genderItem = document.createElement("p");
            let orderConfirmation = document.createElement("h2");
            orderConfirmation.appendChild(document.createTextNode('Order Confirmation'))
            let customerHeader = document.createElement("h3");
            customerHeader.appendChild(document.createTextNode('Customer Information'))
            let productConfirmation = document.createElement("h3");
            productConfirmation.appendChild(document.createTextNode('Order summary'))


            myElement.appendChild(orderConfirmation);
            myElement.appendChild(customerHeader);
            myElement.appendChild(nameItem);
            myElement.appendChild(emailItem);
            myElement.appendChild(paymentItem);

            if(male){
                genderItem.appendChild(document.createTextNode('Male'))
                myElement.appendChild(genderItem);
            }
            if(female){
                genderItem.appendChild(document.createTextNode('Female'))
                myElement.appendChild(genderItem);
            }
            if(nonbinary){
                genderItem.appendChild(document.createTextNode('Non-Binary'))
                myElement.appendChild(genderItem);
            }
            if(undisclosed){
                genderItem.appendChild(document.createTextNode('Undisclosed'))
                myElement.appendChild(genderItem);
            }


            let burgers = vm2.getBurgers();
            myElement.appendChild(productConfirmation);
            for(x in burgers){
                let burgerItem = document.createElement("p");
                burgerItem.appendChild(document.createTextNode(burgers[x]))
                myElement.appendChild(burgerItem);
            }
            this.addOrder();
        },
        getNext: function() {
            /* This function returns the next available key (order number) in
             * the orders object, it works under the assumptions that all keys
             * are integers. */
            /*
            let lastOrder = Object.keys(this.orders).reduce(function(last, next) {
                return Math.max(last, next);
            }, 0);
            */
            this.orderNum+=1;
            return this.orderNum;
        },
        addOrder: function(event) {

            /* When you click in the map, a click event object is sent as parameter
             * to the function designated in v-on:click (i.e. this one).
             * The click event object contains among other things different
             * coordinates that we need when calculating where in the map the click
             * actually happened. */


            let burgers = vm2.getBurgers();
            console.log(burgers)

            for(x in burgers){
                this.theOrder.orderItems.push(burgers[x])
                console.log('adding burger ' + burgers[x])
            }
            this.theOrder.orderId = this.getNext();
            socket.emit('addOrder', {
                orderId: this.theOrder.orderId,
                details: {x :this.theOrder.details.x, y: this.theOrder.details.y
                    /*
                    x: event.clientX - 10 - offset.x,
                    y: event.clientY - 10 - offset.y,
*/
                },
                orderItems: this.theOrder.orderItems,
                customerInfo: [this.name, this.email, this.payment ,this.gender]
            });


            orders: this.theOrder;
            console.log(this.theOrder.orderId)
            console.log('Customer info being sent: ' + this.gender)
            this.theOrder.orderItems = [];
            this.theOrder.customerInfo = [];

        },
        displayOrder: function(event) {

            /* When you click in the map, a click event object is sent as parameter
             * to the function designated in v-on:click (i.e. this one).
             * The click event object contains among other things different
             * coordinates that we need when calculating where in the map the click
             * actually happened. */

            let offset = {
                x: event.currentTarget.getBoundingClientRect().left,
                y: event.currentTarget.getBoundingClientRect().top,
            };

            this.theOrder = {
                orderId: 'T',
                details: {
                    x: event.clientX - 10 - offset.x,
                    y: event.clientY - 10 - offset.y,
                },

                orderItems: this.theOrder.orderItems,

            };
        }
        }
    })






