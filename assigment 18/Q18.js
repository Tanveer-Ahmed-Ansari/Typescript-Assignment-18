"use strict";
// 18.Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
let worldTour = ["Saudiarab", "Iraq", "Turkey", "Dubai", "Bharin"];
// • Print your array in its original order.
console.log("Original order:", worldTour);
// • Print your array in alphabetical order without modifying the actual list.
console.log("Alphabedical Order:", [...worldTour].sort());
// • Show that your array is still in its original order by printing it.
console.log("Orignal order after sorting:", worldTour);
// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse Alphabedical whitout changing the order:", [...worldTour].reverse());
// • Show that your array is still in its original order by printing it again.
console.log("Again original order printing:", worldTour);
// • Reverse the order of your list. Print the array to show that its order has changed.
worldTour.reverse();
console.log("Reverse Order:", worldTour);
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
worldTour.reverse();
console.log("Again Original Order:", worldTour);
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
worldTour.sort();
console.log("Sort Array Alphabetical Order:", worldTour);
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
worldTour.sort((a, b) => b.localeCompare(a));
console.log("Stored reverse Alphabetical Order:", worldTour);
