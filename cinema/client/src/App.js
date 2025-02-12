import React, { useState, useEffect } from "react";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data.data));
  }, []);

  const MovieList = () => {
    return (
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    );
  }

  function onSearch(event) {
    console.log(event.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Seach</h1>
        <input type="text" placeholder="Search..." onChange={onSearch}/>
        <h1>Movies</h1>
        <MovieList />
      </header>
    </div>
  );
}

export default App;
