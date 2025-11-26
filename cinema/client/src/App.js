import React, { useState, useEffect } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [edit, setEdit] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/movies')
      .then((res) => res.json())
      .then((data) => setMovies(data.data));
  }, []);

  const selectMovie = (movie) => () => {
    onEdit(movie);
  }

  const MovieList = () => {
    return (
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <p>{movie.title}</p>
            <p>Genre: {movie.genres}</p>
            <button onClick={selectMovie(movie)}>Edit</button>
          </li>
        ))}
      </ul>
    );
  }

  const onEdit = (data) => {
    setEdit(data);
  }

  const onSubmitEdit = async (data) => {
    const response = await fetch(`http://localhost:3000/movies/${data.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        '_method': 'PATCH',
        'Authorization': ''
      },
      body: JSON.stringify(data),
    });
    console.log('response', response)
  }

  function onSearch(event) {
    console.log(event.target.value);
  }

  const editDetail = (name) => (event) => {
    setEdit({
      ...edit,
      [name]: event.target.value
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Seach</h1>
        <input type="text" placeholder="Search..." onChange={onSearch}/>
        { 
          edit && (
          <div>
            <p>Title:</p><input value={edit.title} onChange={editDetail('title')}/>
            <p>Genre:</p><input value={edit.genres} onChange={editDetail('genres')}/>
            <p><button onClick={() => onSubmitEdit(edit)}>Save</button></p>
          </div>
          )
        }
        <h1>Movies</h1>
        <MovieList />
      </header>
    </div>
  );
}

export default App;
