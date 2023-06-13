/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  var categoryToListIndexMappings = {};
  var output = [];

  transactions.forEach(transaction => {
    if(!(transaction.category in categoryToListIndexMappings)){
      var outputObj = {}

      //Since mapping for this category doesn't exist yet, add a mapping with the currentIndex
      categoryToListIndexMappings[transaction.category] = output.length;

      //Add new category object to output list
      outputObj["category"] = transaction.category;
      outputObj["totalSpent"] = transaction.price;

      output.push(outputObj);
    }
    else{
      //If category already exists then get the index of the category and add to the totalSpent amount
      var categoryIndex = categoryToListIndexMappings[transaction.category];
      output[categoryIndex]["totalSpent"] += transaction.price;
    }

  });

  return output;
}

module.exports = calculateTotalSpentByCategory;
