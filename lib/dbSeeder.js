// Module dependencies

const   mongoose = require('mongoose'),

        Customer = require('../models/customer'),

        State = require('../models/state'),

        dbConfig = require('./configLoader').databaseConfig,

        connectionString = `mongodb://${dbConfig.host}/${dbConfig.database}`,

        connection = null;

 

class DBSeeder {

 

    init() {

        mongoose.connection.db.listCollections({name: 'customers'})

                .next((err, collinfo) => {

                    if (!collinfo) {

                        console.log('Starting dbSeeder...');

                        this.seed();

                    }

                });

    }

 

    seed() {

 

        console.log('Seeding data....');

 

        //Customers

        var customerNames =

        [

            "Aarav,Acharya,Male,gmail.com",

            "Anaisha,Basu,Female,gmail.com",

            "Akanksh,Bedi,Male,gmail.com",

            "Anant,Jain,Male,gmail.com",

            "Idhant,Jha,Male,gmail.com",

            "Ishank,Varma,Male,gmail.com",

            "Jay,Yadav,Male,gmail.com",

            "Kahaan,Banerjee,Male,gmail.com",

            "Ananya,Deshpande,Female,gmail.com",

            "Ishana,Gandhi,Female,gmail.com",

            "Kevin,Ghosh,Male,gmail.com",

            "Krisha,Joshi,Female,gmail.com",

            "Mahika,Naidu,Female,gmail.com",

            "Laksh,Seth,Male,gmail.com",

            "Nimit,Agarwal,Male,gmail.com",

            "Raj,Dave,Male,gmail.com",

            "Ranbir,Ahuja,Male,gmail.com",

            "Tina,Chowdhury,Female,gmail.com",

            "Navya,Chwala,Female,gmail.com",

            "Shrishti,Ganguly,Female,gmail.com",

            "Raunak,Kulkarni,Male,gmail.com",

            "Yash,Das,Male,gmail.com",

            "Taara,Deshmukh,Female,gmail.com",

            "Vivaan,Gupta,Male,gmail.com"

        ];

        var addresses =

        [

            "40, Khetwadi Back Road",

            "1112 A, 43 Chiranjiv Tower",

            "19b, Shreepal Nagar Bldg, Off Saibaba Nagar",

            "Lansdowne House, 18 Lansdowne Rd, Council Hall",

            "I-36 B Basement, Part 2",

            "33/1, Gangappa Cplx, Dvg Road, Gandhi Bazar",

            "105, Shiyapura, Raopura",

            "1607 S-284, Part 1, Greater Kailash",

            "3a &5b, Rajmohan Street, Near Krishna Cinema, C R Avenue",

            "246, Nagdevi Street, Mandvi",

            "F 64, Arya Samaj Road",

            "8 Ganesh Niwas, Near Charai Telephone Exc",

            "7/5,magdi Rd,blr-23, Magadi Road",

            "124, Daulat Nagar, S.v Rd, Near Gopalpuri",

            "D/10/8, Bhadran Nagar, S V Rd, Nr Patel Dairy",

            "8a-2, Brindavan Soc, Thane",

            "Unit No 105b, Sdf-iv",

            "30,Tankiwala Cmpd, Jairaj Bhai Lane",

            "C/2, Dhanlaxmi Coop Hsg Soc L",

            "1402, Prasad Chambers, Opera House",

            "E 296, Part 1, Greater Kailash",

            "Raopura, Shiyapura",

            "B-3, Sector 10, Shanti Nagar, Mira Road",

            "2/3 J.s.s Rd, C.p.tank"

        ];

 

        var citiesStates =

        [

            "Ahmedabad,GJ,Gujarat",

            "Surat,GJ,Gujarat",

            "Vadodara,GJ,Gujarat",

            "Rajkot,GJ,Gujarat",

            "Bhavnagar,GJ,Gujarat",

            "Jamnagar,GJ,Gujarat",

            "Gandhinagar,GJ,Gujarat",

            "Junagadh,GJ,Gujarat",

            "Gandhidham,GJ,Gujarat",

            "Anand,GJ,Gujarat",

            "Navsari,GJ,Gujarat",

            "Morbi,GJ,Gujarat",

            "Nadiad,GJ,Gujarat",

            "Surendranagar,GJ,Gujarat",

            "Bharuch,GJ,Gujarat",

            "Mehsana,GJ,Gujarat",

            "Bhuj,GJ,Gujarat",

            "Porbandar,GJ,Gujarat",

            "Palanpur,GJ,Gujarat",

            "Valsad,GJ,Gujarat",

            "Vapi,GJ,Gujarat",

            "Gondal,GJ,Gujarat",

            "Veraval,GJ,Gujarat",

            "Godhra,GJ,Gujarat"

        ];

 

        var citiesIds = [5, 9, 44, 5, 36, 17, 16, 9, 36, 14, 14, 6, 9, 24, 44, 36, 25, 19, 5, 14, 5, 23, 38, 17];

 

 

        var zip = 85229;

 

        var orders =

        [

        { "product": "Basket", "price": 29.99, "quantity": 1 },

        { "product": "Yarn", "price": 9.99, "quantity": 1 },

        { "product": "Needes", "price": 5.99, "quantity": 1 },

        { "product": "Speakers", "price": 499.99, "quantity": 1 },

        { "product": "iPod", "price": 399.99, "quantity": 1 },

        { "product": "Table", "price": 329.99, "quantity": 1 },

        { "product": "Chair", "price": 129.99, "quantity": 4 },

        { "product": "Lamp", "price": 89.99, "quantity": 5 },

        { "product": "Call of Duty", "price": 59.99, "quantity": 1 },

        { "product": "Controller", "price": 49.99, "quantity": 1 },

        { "product": "Gears of War", "price": 49.99, "quantity": 1 },

        { "product": "Lego City", "price": 49.99, "quantity": 1 },

        { "product": "Baseball", "price": 9.99, "quantity": 5 },

        { "product": "Bat", "price": 19.99, "quantity": 1 }

        ];

 

        Customer.remove({});

 

        var l = customerNames.length,

            i,

            j,

            firstOrder,

            lastOrder,

            tempOrder,

            n = orders.length;

 

        for (i = 0; i < l; i++) {

            var nameGenderHost = customerNames[i].split(',');

            var cityState = citiesStates[i].split(',');

            var state = { 'id': citiesIds[i], 'abbreviation': cityState[1], 'name': cityState[2] };

            var customer = new Customer({

                'firstName': nameGenderHost[0],

                'lastName': nameGenderHost[1],

                'email': nameGenderHost[0] + '.' + nameGenderHost[1] + '@' + nameGenderHost[3],

                'address': addresses[i],

                'city': cityState[0],

                'state': state,

                'stateId': citiesIds[i],

                'zip': zip + i,

                'gender': nameGenderHost[2],

                'orderCount': 0

            });

            firstOrder = Math.floor(Math.random() * orders.length);

            lastOrder = Math.floor(Math.random() * orders.length);

            if (firstOrder > lastOrder) {

                tempOrder = firstOrder;

                firstOrder = lastOrder;

                lastOrder = tempOrder;

            }

 

            customer.orders = [];

            //console.log('firstOrder: ' + firstOrder + ", lastOrder: " + lastOrder);

            for (j = firstOrder; j <= lastOrder && j < n; j++) {

                var today = new Date();

                var tomorrow = new Date();

                tomorrow.setDate(today.getDate() + (Math.random() * 100));

 

                var o = {

                    "product": orders[j].product,

                    "price": orders[j].price,

                    "quantity": orders[j].quantity,

                    "date": tomorrow

                };

                customer.orders.push(o);

            }

            customer.orderCount = customer.orders.length;

 

            customer.save((err, cust) => {

                if (err) {

                    console.log(err);

                } else {

                    console.log('inserted customer: ' + cust.firstName + ' ' + cust.lastName);

                }

            });

        }

 

        //States

        var states = [

        { "name": "Andaman and Nicobar Islands", "abbreviation": "AN" },

        { "name": "Andhra Pradesh", "abbreviation": "AP" },

        { "name": "Arunachal Pradesh", "abbreviation": "AR" },

        { "name": "Assam", "abbreviation": "AS" },

        { "name": "Bihar", "abbreviation": "BR" },

        { "name": "Chandigarh", "abbreviation": "CH" },

        { "name": "Chhattisgarh", "abbreviation": "CT" },

        { "name": "Dadra and Nagar Haveli", "abbreviation": "DN" },

        { "name": "Daman and Diu", "abbreviation": "DD" },

        { "name": "Delhi", "abbreviation": "DL" },

        { "name": "Goa", "abbreviation": "GA" },

        { "name": "Gujarat", "abbreviation": "GJ" },

        { "name": "Haryana", "abbreviation": "HR" },

        { "name": "Himachal Pradesh", "abbreviation": "HP" },

        { "name": "Jammu and Kashmir", "abbreviation": "JK" },

        { "name": "Jharkhand", "abbreviation": "JH" },

        { "name": "Karnataka", "abbreviation": "KA" },

        { "name": "Kerala", "abbreviation": "KL" },

        { "name": "Lakshadweep", "abbreviation": "LD" },

        { "name": "Madhya Pradesh", "abbreviation": "MP" },

        { "name": "Maharashtra", "abbreviation": "MH" },

        { "name": "Manipur", "abbreviation": "MN" },

        { "name": "Meghalaya", "abbreviation": "ML" },

        { "name": "Mizoram", "abbreviation": "MZ" },

        { "name": "Nagaland", "abbreviation": "NL" },

        { "name": "Odisha", "abbreviation": "OR" },

        { "name": "Puducherry", "abbreviation": "PY" },

        { "name": "Punjab", "abbreviation": "PB" },

        { "name": "Rajasthan", "abbreviation": "RJ" },

        { "name": "Sikkim", "abbreviation": "SK" },

        { "name": "Tamil Nadu", "abbreviation": "TN" },

        { "name": "Telangana", "abbreviation": "TG" },

        { "name": "Tripura", "abbreviation": "TR" },

        { "name": "Uttar Pradesh", "abbreviation": "UP" },

        { "name": "Uttarakhand", "abbreviation": "UT" },

        { "name": "West Bengal", "abbreviation": "WB" },

        { "name": "Kerala", "abbreviation": "KL" },

        { "name": "Lakshadweep", "abbreviation": "LD" },

        { "name": "Madhya Pradesh", "abbreviation": "MP" },

        { "name": "Maharashtra", "abbreviation": "MH" },

        { "name": "Manipur", "abbreviation": "MN" },

        { "name": "Meghalaya", "abbreviation": "ML" },

        { "name": "Mizoram", "abbreviation": "MZ" },

        { "name": "Nagaland", "abbreviation": "NL" },

        { "name": "Odisha", "abbreviation": "OR" },

        { "name": "Puducherry", "abbreviation": "PY" },

        { "name": "Punjab", "abbreviation": "PB" },

        { "name": "Rajasthan", "abbreviation": "RJ" },

        { "name": "Sikkim", "abbreviation": "SK" },

        { "name": "Tamil Nadu", "abbreviation": "TN" }

        ];

 

        var l = states.length,

            i;

 

        State.remove({});

 

        for (i = 0; i < l; i++) {

            var state = new State ({ 'id': i + 1, 'name': states[i].name, 'abbreviation': states[i].abbreviation });

            state.save();

        }

    }

}

 

module.exports = new DBSeeder();