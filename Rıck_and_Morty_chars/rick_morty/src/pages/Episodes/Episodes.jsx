import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getEpisodes,
  episodeSelector,
  statusSelector,
  errorSelector,
} from "../../redux/episodesSlice";
import Loading from "../../components/Loading";
import EpisodeCard from "./EpisodeCard";

function Episodes() {
  const data = useSelector(episodeSelector);
  const status = useSelector(statusSelector);
  const error = useSelector(errorSelector);
  console.log(data);

  const dispatch = useDispatch();
  useEffect(() => {
    if (data.length === 0 ) {
      dispatch(getEpisodes());
    }
  }, [dispatch, data]);

  if (data.length === 0) {
    return <h2>Char array is empty</h2>;
  }
  if (error) {
    return <h3>Error:{error}</h3>;
  }
  return (
    <div className="container">
      <h1>Episodes</h1>
      {status === "loading" && <Loading />}
      <div className="row">
        { status==="succeeded" && data.results.map((episode) => (
          <p>{episode.name}</p>
        ))}
      </div>
    </div>
  );
}

export default Episodes;
