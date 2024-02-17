function DessertsList(props) {
  // Implement the component here.
  const lowCaloDessertsList = props.data
    .filter((dessert) => {
      /* Get all the low calories desserts */
      return dessert.calories < 500;
    })
    .sort((a, b) => {
      /* Sort the above desserts by calories in ascending manner */
      return a.calories - b.calories;
    })
    .map((dessert) => {
      /* Transform the list */
      return (
        <li>
          {dessert.name} - {dessert.calories} cal
        </li>
      );
    });

  return (
    <ul>
      {lowCaloDessertsList}
    </ul>
  );
}

export default DessertsList;




function DessertsList(props) {
  // Implement the component here.
  const lowCaloriesDesserts = props.data
    
    // Filtering
    // The filter method creates a copy of the array, filtered down to just the elements from the original array that pass the test.
    // In order words, it will return a new list with just the elements that fulfil the condition.
    .filter((dessert) => {
      return dessert.calories < 500;
    })

    // Sorting
    // JavaScript offer the sort() method, which sorts the elements of an array based on a comparison function provided

    .sort((a, b) => { 
     return a.calories - b.calories; 
    })

    // Mapping
    // , to apply the desired projection and display the information as requested, 
    // you can chain the map operator at the end and return a < li > item with the dessert name and its calories,
    .map((dessert) => { 
     return ( 
       <li>
         {dessert.name} - {dessert.calories} cal
       </li> 
     ); 
    
    });
 
   
  //return null;
  return <ul>{lowCaloriesDesserts}</ul>;
  
}

export default DessertsList;
