angular.module('starter.services', ['ionic'])
.factory('eventService', function(){
   var events = [
         {
           id: 0,
           date: 'Day 1:  6/3/2015 Wednesday',
           t1: '9:00am - 12:00pm',
           kp1: 'Ganapathi \& Vishwaksena Pooja, Punyahavachanam Dhana Pooja, Vaastu Homam \& Rakshogna Homam',
           note1: ['Devotees can offer Navaratnam inside Sanctum Sanctorum all day.'],

           t2: '4:00pm - 7:00pm',
           kp2: 'Raksha Bandhanam, Mahasankalpam, Ankurarpana Homam, Mahakumbha Aradhanam, Jaladhivasam & Deepa Lakshmi Pooja',
           note2: [' Jaladhivasam: Devotees will be able to offer water onto all Deities.', '108 (minimum) Sumangalies will perform Deep Lakshmi Pooja'],

           t3: '7:00pm - 9:00pm',
           kp3: 'Cultural Program ',
           note3: []
         },
         {
           id: 1,
           date: 'Day 1:  6/3/2015 Thursday',
           t1: '8:00am - 12:00pm',
           kp1: 'Panchagavya Snapanam for all Devatas, Gopura Chaayasnapanam, Sarvadevata Pradhaana Homam, Gopura Maanonmaana Pramaana, Shanti Homam, Dhaanyadhivasam & Gopurakalshasthapanam',
           note1: ['Devotees will be able to offer Dhaanyam to all Deities', 'All Gopura Kalashams will be taken in Procession for installation', 'Devotees can offer Navaratnam inside Sanctum Sanctorum all day' ],

           t2: '4:00pm - 7:00pm',
           kp2: 'Pushpadhivasam & Sayaadhivasam, Pradhana Homam for all Devatas, Nethronmeelanam, Dashadarshanam, Pushpaadhivaasam & Shayaadhivaasam',
           note2: ['Devotees will be able to offer flowers to all Deities'],

           t3: '7:00pm - 9:00pm',
           kp3: 'Cultural Program ',
           note3: []
         },
         {
           id: 2,
           date: 'Day 1:  6/3/2015 Friday',
           t1: '8:00am - 12:00pm',
           kp1: 'Pradhana Homam for all Devatas, Navaratna Nyasam and Yantra Sthapanam',
           note1: ['Devotees will be able to offer Navaratnam until 8:30am', 'Sthapathi will start installing Deities inside Sanctum Sanctorum'],

           t2: '4:00pm - 6:30pm',
           kp2: 'Mahakumbha, Upakumbha Aaradhanam, Pradhana Homam for all Devatas, TatwaArchana & Visesha Dravya Homam',
           note2: [],

           t3: '7:00pm - 9:00pm',
           kp3: 'Cultural Program ',
           note3: []
         },
         {
           id: 3,
           date: 'Day 1:  6/3/2015 Saturday',
           t1: '8:00am - 12:00pm',
           kp1: 'Pradhana Homam for all devatas, Moorthi Homam, Nanavidha Anna Homam, Nanavidha Phala(Fruits) Homam & Grudhashirorpanam (Thailabhishekam) ',
           note1: ['Devotees will be able to apply Oil on all Deities feet between 12pm - 4pm' ],

           t2: '3:30pm - 7:00pm',
           kp2: 'Pradhana Homam for all Devatas, Moorthi Homam, JeevaAdhiTatva Homam Nyasam, Jeevakala Nyasam, Thrikandaparikalpanam & Shanti Homam',
           note2: ['Devotees will be able to offer flowers to all Deities'],

           t3: '7:00pm - 9:00pm',
           kp3: 'Cultural Program ',
           note3: []
         },
         {
           id: 4,
           date: 'Day 1:  6/3/2015 Sunday',
           t1: '7:00am - 2:00pm',
           kp1: ['Pradhana Homam, Maha Purnahuti, Raja Gopura, Vimana Gopura, Dwajastambha Kumbhabhishekam, Moorthi Kumbhabhishekam, Pranaprathistapanam,'+
                'Mahaneerikshanam, Panchamritha Abhishekam, Aalankaram, Prathama Archana, Mahanivedanam, Baliharanam, Mangala Aarati, Prasad, Acharya, Ritwik,'+
                ' Sthapathi & Shilpi Bhagumanam & Asheervadam '],

           note1: [ 'After Maha Purnahuthi all Kalashams will be taken in procession from Yagashala to perform Mahakumbhabhishekam',
                    'Appropriate Sponsors will be carrying various Kalashams',
                    'Kannikas (Girl Child in the age group of 5-9) will be selected from Donor\'s Family'
                  ],

           t2: '5:30pm - 7:30pm',
           kp2: 'Ayyappa Padi Pooja, Thalapoli & Harivarasanam, Shirdi Saibaba Shayanaarati',
           note2: ['Young Girls will be able to carry Oil Lamps to welcome the Lord during procession'],

           t3: '',
           kp3: '',
           note3: []
         },
        ];



return {
    all: function() {
      return events;
    },

    get: function(eventId) {
        return events[eventId]
      }
  }
});