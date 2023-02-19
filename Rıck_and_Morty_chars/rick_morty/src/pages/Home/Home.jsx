import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCharacters } from "../../redux/rickandmortySlice";
import { incPage,decPage } from "../../redux/rickandmortySlice";
import { Link } from "react-router-dom";

function Home() {
  const characters = useSelector((state) => state.characters.chars);
  const loading = useSelector((state) => state.characters.loading);
  const error = useSelector((state) => state.characters.error);
  const page = useSelector((state)=>state.characters.page)
  const dispatch = useDispatch();

  const nextPagee = (page) =>{
    dispatch(incPage());
    dispatch(getCharacters(page))
    
  }
  const prevPage = (page)=>{
    if(page > 1){
      dispatch(decPage())
    dispatch(getCharacters(page))
    }
  }

  useEffect(() => {
    if (characters.length === 0) {
      dispatch(getCharacters());
    }
  }, [dispatch, characters]);

  if (error) {
    return <h3>Error:{error}</h3>;
  }
  if (characters.length === 0) {
    return <h2>Char array is empty</h2>;
  }
  return (
    <div className="container">
      <div className="row">
        {characters.results.map((character) => (
          <div key={character.id} className="col-sm-6 col-md-3 card p-3">
            <Link to={`/detail/${character.id}`}>
            <img class="card-img-top" src={character.image} alt={character.name} />
            <div className="card-body">
              <h3 className="card-title">{character.name}</h3>
              <p className="card-text">Status: {character.status}</p>
              <p className="card-text">Species: {character.species}</p>
              <p className="card-text">Location: {character.location.name}</p>
            </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="button_div">
          {loading && loading}
          <div className="buttons">
          <button onClick={()=>{prevPage(page)}} className="btn bg-secondary">Prev Page {`${page -1}`}</button>
          <button onClick={()=>{nextPagee(page)}} className="btn bg-primary">Next Page {`${page +1}`}</button>
          </div>
      </div>
    </div>
  );
}

export default Home;
