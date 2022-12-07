import React, { useEffect, useState } from 'react';
import Quote from "./components/Quote"
import CommentCard from './components/CommentCard';
import CountrySearch from './components/CountrySearch';

function App() {

  const [comments, setComments] = useState([
    {
      imageUrl: "https://picsum.photos/100", 
      userName: "William Wise", 
      datePosted: new Date(2022, 7, 1), 
      comment: "This comment is the wisest thing you've ever read" 
    },
    {
      imageUrl: "https://picsum.photos/100/100", 
      userName: "Buddha", 
      datePosted: new Date(600, 6, 18), 
      comment: "As your focus transcends all types of objects, Unfixed on any mark of concreteness, Remain quiet, tranquil and awake!" 
    }
  ]);


  const cards = comments.map( (commentObj, i) => {
    return( 
      <CommentCard key={i}
        imageUrl={commentObj.imageUrl}
        userName={commentObj.userName} 
        datePosted={commentObj.datePosted} >
          {commentObj.comment}
      </CommentCard>
    )
  } );

  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState("")
  const [filterdNames, setFilterdNames] = useState([])


  useEffect(()=> {

    const url = "https://restcountries.com/v3.1/all";
    fetch(url).then(res => res.json()).then(data => {
      const countryNames = data.map((country) => {
        return country.name.common;
      })
      setFilterdNames(countryNames)
      setCountries(countryNames)
    })
  },[])


  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const handleChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
    filter(event.target.value);

  }

  const filter = (search) => {
    const lowerSearch = search.toLowerCase();
    const finalFiltered = countries.filter((name) => {
      return name.toLowerCase().indexOf(lowerSearch) != -1;
    });
    setFilterdNames(finalFiltered);
  }


  return (
    <div>
      <div>
      <form onSubmit={handleSubmit}>
        <input value={search} onChange={handleChange}></input>
      </form>
      <ul>
        <CountrySearch filterdNames={filterdNames} />
      </ul>
      </div>
      <div>
          <ul>
            {cards}
          </ul>
      </div>

      <div className="App">
        <Quote by="Bill Gates" source="https://www.microsoft.com">
          640kb of memory ought to be enough for anyone
        </Quote>
        <Quote by="Steve Jobs" source="https://www.apple.com">
          Don't let the noise of others' opinions drown out your own inner voice
        </Quote>
      </div>

    </div>
  );
}

export default App;