
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
        payment: "",
        name: "",
        email: "",

        male: "",
        female: "",
        nonbinary: "",
        undisclosed: ""

    },
    created: function() {
        /* When the page is loaded, get the current orders stored on the server.
         * (the server's code is in app.js) */
        socket.on('initialize', function(data) {
            this.orders = data.orders;
        }.bind(this));

        /* Whenever an addOrder is emitted by a client (every open map.html is
         * a client), the server responds with a currentQueue message (this is
         * defined in app.js). The message's data payload is the entire updated
         * order object. Here we define what the client should do with it.
         * Spoiler: We replace the current local order object with the new one. */
        socket.on('currentQueue', function(data) {
            this.orders = data.orders;
        }.bind(this));
    },
    methods: {
        markDone: function(name, email, payment, male, female, nonbinary, undisclosed) {
            let myElement = document.getElementById("orderInfo");
            document.getElementById("orderInfo").innerHTML = "";
            let nameItem = document.createElement("li");
            nameItem.appendChild(document.createTextNode(name))
            let emailItem = document.createElement("li");
            emailItem.appendChild(document.createTextNode(email))
            let streetItem = document.createElement("li");
            streetItem.appendChild(document.createTextNode(street))
            let houseItem = document.createElement("li");
            houseItem.appendChild(document.createTextNode(house))
            let paymentItem = document.createElement("li");
            paymentItem.appendChild(document.createTextNode(payment))
            let genderItem = document.createElement("li");



            myElement.appendChild(nameItem);
            myElement.appendChild(emailItem);
            myElement.appendChild(streetItem);
            myElement.appendChild(houseItem);
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
            for(x in burgers){
                let burgerItem = document.createElement("li");
                burgerItem.appendChild(document.createTextNode(burgers[x]))
                myElement.appendChild(burgerItem);
            }
        },
        getNext: function() {
            /* This function returns the next available key (order number) in
             * the orders object, it works under the assumptions that all keys
             * are integers. */
            let lastOrder = Object.keys(this.orders).reduce(function(last, next) {
                return Math.max(last, next);
            }, 0);
            return lastOrder + 1;
        },
        addOrder: function(event) {
            /* When you click in the map, a click event object is sent as parameter
             * to the function designated in v-on:click (i.e. this one).
             * The click event object contains among other things different
             * coordinates that we need when calculating where in the map the click
             * actually happened. */
            let offset = {
                x: event.currentTarget.getBoundingClientRect().left,
                y: event.currentTarget.getBoundingClientRect().top,
            };
            socket.emit('addOrder', {
                orderId: this.getNext(),
                details: {
                    x: event.clientX - 10 - offset.x,
                    y: event.clientY - 10 - offset.y,
                },
                orderItems: ['Beans', 'Curry'],
            });
        },
        }
    })






