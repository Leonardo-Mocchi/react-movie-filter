import { useState, useEffect } from 'react';
import movies from './data/movies';

function App() {
  const [filteredMovies, setFilteredMovies] = useState(movies); // Movies to display
  const [selectedGenre, setSelectedGenre] = useState(''); // Selected genre

  // Filter movies dynamically based on genre and search query
  useEffect(() => {
    let filtered = movies;

    if (selectedGenre) {
      filtered = filtered.filter((movie) => movie.genre === selectedGenre);
    }

    setFilteredMovies(filtered);
  }, [selectedGenre]);

  return (
    <>
      <header className='row'>
        <div className='col-4' style={{ backgroundColor: 'darkviolet' }}>
          <div className="mx-5 py-3">
            <h1 className="fst-italic">&gt;MOVIES NOW</h1>
            <p>The biggest movies' online database</p>
          </div>
        </div>

        <div className='col-4' style={{ backgroundColor: "#8a2be2" }}></div>

        <div className='col-4' style={{ backgroundColor: "#9B30FF" }}></div>
      </header>

      <main className="m-5">
        <h3>
          Pick your <span className="fst-italic" style={{ color: 'darkviolet' }}>poison</span>
        </h3>

        {/* movies' filter */}
        <form className="mb-4 d-flex justify-content-center align-items-center gap-3">
          <div className="dropdown w-25">
            {/* Filter style button */}
            <button
              className="btn btn-dark dropdown-toggle border-3 w-100"
              style={{ borderColor: 'darkviolet' }}
              type="button"
              id="genreDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {selectedGenre || 'Tutti i Generi'}
            </button>

            {/* Genre list select */}
            <ul className="dropdown-menu w-100 bg-dark text-light" aria-labelledby="genreDropdown">
              <li className="w-100">
                <button
                  className="dropdown-item w-100 text-light"
                  type="button"
                  onClick={() => setSelectedGenre('')}
                >
                  Tutti i Generi
                </button>
              </li>
              <li className="w-100">
                <button
                  className="dropdown-item w-100 text-light"
                  type="button"
                  onClick={() => setSelectedGenre('Fantascienza')}
                >
                  Fantascienza
                </button>
              </li>
              <li className="w-100">
                <button
                  className="dropdown-item w-100 text-light"
                  type="button"
                  onClick={() => setSelectedGenre('Thriller')}
                >
                  Thriller
                </button>
              </li>
              <li className="w-100">
                <button
                  className="dropdown-item w-100 text-light"
                  type="button"
                  onClick={() => setSelectedGenre('Romantico')}
                >
                  Romantico
                </button>
              </li>
              <li className="w-100">
                <button
                  className="dropdown-item w-100 text-light"
                  type="button"
                  onClick={() => setSelectedGenre('Azione')}
                >
                  Azione
                </button>
              </li>
            </ul>
          </div>
        </form>

        {/* Movies List */}
        <div className="m-5">
          <div className="row row-cols-1 row-cols-lg-2 row-cols-lg-3 g-4">
            {filteredMovies.map((movie) => (
              <div className="col" key={movie.id}>
                <div className="card h-100 bg-dark border-3 rounded"
                  style={{ borderColor: 'darkviolet' }}>
                  <div className="card-body">
                    <h4 className="card-title text-light"> {movie.title}</h4>
                    <p className="card-text text-secondary fs-6">{movie.genre}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* footer */}
      <footer className="bg-dark text-light py-3">
        <div className="container text-center">
          <p className="m-0">© {new Date().getFullYear()} &gt;MOVIES NOW. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App
