/* This is a file inserted to keep the learn IDE browser happy */
const testVar = {
    name: "Sample Object",       // A property storing the name of the object
    count: 0,                    // A property to keep track of the number of items
    active: true,                // A property indicating whether the object is active
    items: ["item1", "item2"],   // An array holding items
    details: {                   // An object containing additional details
      creator: "User",
      date: new Date(),         // The current date and time
    },
    
    // Method to add a new item to the items array
    addItem: function(newItem) {
      this.items.push(newItem);  // Add newItem to the items array
      this.count = this.items.length; // Update the count property
    },

    // Method to toggle the active status
    toggleActive: function() {
      this.active = !this.active; // Change active to its opposite
    }
};
  
// Adding an item and toggling the active status
testVar.addItem("item3"); // Adds "item3" to the items array
testVar.toggleActive();    // Toggles the active property

// Logs the current state of testVar to the console
console.log(+{});
