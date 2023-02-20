import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCharacters, getAllCharacters } from "../../redux/rickandmortySlice";
import { incPage, decPage, searchChange } from "../../redux/rickandmortySlice";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);
function Home() {
  const allCharacters = useSelector((state) => state.characters.allChars); // Api'den cekılen butun verıler
  //page on the character
  const characters = useSelector((state) => state.characters.chars); // page
  const loading = useSelector((state) => state.characters.loading);
  const error = useSelector((state) => state.characters.error);
  const page = useSelector((state) => state.characters.page);
  // ınput value
  const searchValue = useSelector((state) => state.characters.searchValue);

  const handleChange = (e) => {
    dispatch(searchChange(e.target.value));
  };

  const [activeBtn, setActiveBtn] = useState("pageChar");
  const dispatch = useDispatch();
  console.log(allCharacters);

  const nextPagee = (page) => {
    dispatch(incPage());
    dispatch(getCharacters(page));
  };
  const prevPage = (page) => {
    if (page > 1) {
      dispatch(decPage());
      dispatch(getCharacters(page));
    }
  };

  // filter buttons (butona gore karakterlerı fıltreledık... )
  const handleAllCharClick = (e) => {
    e.preventDefault();
    setActiveBtn("allChar");
  };
  const handlePageCharClick = (e) => {
    e.preventDefault();
    setActiveBtn("pageChar");
  };

  const filteredCharacter =
    activeBtn === "allChar"
      ? allCharacters &&
        allCharacters.filter((char) =>
          char.name.toLowerCase().includes(searchValue.toLowerCase())
        )
      : characters &&
        characters.results.filter((char) =>
          char.name.toLowerCase().includes(searchValue.toLowerCase())
        );

  // filter buttons

  useEffect(() => {
    if (characters.length === 0 && allCharacters.length === 0) {
      dispatch(getCharacters());
      dispatch(getAllCharacters());
    }
  }, [dispatch, characters, allCharacters]);

  if (error) {
    return <h3>Error:{error}</h3>;
  }
  if (characters.length === 0) {
    return <h2>Char array is empty</h2>;
  }
  return (
    <div className="container">
      <h1 className="title col-12">Characters</h1>
      {/* search kısmı */}
      <div className="search_form d-flex flex-sm-row gap-5 ">
        <input
          className="col-lg-6 form-control"
          type="text"
          placeholder="Search character"
          value={searchValue}
          onChange={handleChange}
        />
        <div className="search_buttons">
        <button className="btn ">
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        </button>
        <button onClick={handleAllCharClick} className="btn">
          All
        </button>
        <button onClick={handlePageCharClick} className="btn">
          Page
        </button>
        </div>
       
      </div>
      {/* search kısmı */}
      {/* page body */}
      <div className="row">
        <div className="col-lg-3 col-12 mb-5">
          <div className="left_panel">
            <h2 className="left_title">Filter Character</h2>
            <div className="accordion" id="accordionPanelsStayOpenExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    Status
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="panelsStayOpen-headingOne"
                >
                  <div className="accordion-body">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option defaultValue>Choose Status</option>
                      <option value="Alive">Alive</option>
                      <option value="Dead">Dead</option>
                      <option value="unknown">unknown</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwo"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseTwo"
                  >
                    Species
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingTwo"
                >
                  <div className="accordion-body">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option defaultValue>Choose Species</option>
                      <option value="Human">Human</option>
                      <option value="Alien">Alien</option>
                      <option value="Animal">Animal</option>
                      <option value="Robot">Robot</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-8 col-12 p-5">
          <div className="row">
            {filteredCharacter.map((character) => (
              <div
                key={character.id}
                className=" col-sm-6 col-md-4 col-lg-3 card p-3 "
              >
                <Link to={`/detail/${character.id}`}>
                  <img
                    class="card-img-top"
                    src={character.image}
                    alt={character.name}
                  />
                  <div className="card-body">
                    <h3 className="card-title">{character.name}</h3>
                    <p className="card-text">Status: {character.status}</p>
                    <p className="card-text">Species: {character.species}</p>
                    <p className="card-text">
                      Location: {character.location.name}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* page body */}

      {/* pages buttons start */}
      <div className="button_div">
        {loading && loading}
        <div className="buttons">
          <button
            onClick={() => {
              prevPage(page);
            }}
            className="btn bg-secondary"
          >
            Prev Page {`${page - 1}`}
          </button>
          <button
            onClick={() => {
              nextPagee(page);
            }}
            className="btn bg-primary"
          >
            Next Page {`${page + 1}`}
          </button>
        </div>
      </div>
      {/* pages buttons start */}
    </div>
  );
}

export default Home;
