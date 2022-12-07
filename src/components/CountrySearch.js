import React from 'react'

export default function CountrySearch({countries}) {
  
    const countryNames = countries.map((country, index)=>{
        return (
            <li key={index}>{country.name.common}</li>
        )
    })
  
return (
    <ul>{countryNames}</ul>
  )
}
