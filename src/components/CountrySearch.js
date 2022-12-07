import React from 'react'

export default function CountrySearch({filterdNames}) {
  
    const filterNameReturns = filterdNames.map((country, index)=>{
        return (
            <li key={index}>{country}</li>
        )
    })
  
return (

    <ul>{filterNameReturns}</ul>
  )
}





// import React, { useState, useEffect } from 'react';

// function Filter({handleChange})  {
//   const [searchTerm, setSearchTerm] = useState("");

//   const changeSearchTerm = (event) => {
//     event.preventDefault();
//     setSearchTerm(event.target.value);
//   }

//   useEffect(() => {
//     handleChange(searchTerm);
//   }, [searchTerm]);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         onChange={changeSearchTerm}
//         type="text"
//         name="searchTerm"
//         placeholder="Filter Stories"
//         value={searchTerm} />
//     </form>
//   );
// }

// export default Filter;
