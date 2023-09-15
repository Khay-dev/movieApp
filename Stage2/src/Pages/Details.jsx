import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";

import axios from "axios";

import "../Styles/Details.css";


const Details = () => {
    const { id } = useParams();
    const [data, setData] = useState({});
    const [load, setload] = useState(true);
    const [error, setError] = useState(null);
    const imgLink = "https://image.tmdb.org/t/p/w500";
    async function movieDetails() {
        let API_KEY = "ac57941d1109bbb02f4f4d5995d4ab24";
        axios
            .get(
                `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
            )
            .then((res) => {
                if (res.success === false) {
                    setError(res.status_message);
                    setload(false);
                } else {
                    setData(res.data);
                    setload(false);
                }
            })
            .catch((err) => {
                setError(err.message);
            });
    }
    useEffect(() => {
        movieDetails();
    }, [id]);

    return (
        <div>
            {load ? (
                <h6 className="text-center">Loading...</h6>
            ) : error ? (
                <div> error message</div>
            ) : (
                <div className="containerr">
                    <div className="cont-a">
                        <img
                            src={`${imgLink}${data.backdrop_path}`}
                            alt={data.title}
                        />
                    </div>
                    <div className="cont-b">
                        <div
                            data-testid="movie-runtime"
                            className="b"
                        >{`Runtime: ${data.runtime}mins`}</div>
                        <div data-testid="movie-title" className="a">
                            {data.title}
                        </div>

                        <div
                            data-testid="movie-release-date"
                            className="c"
                        >{`Release Date: ${data.release_date}`}</div>
                    </div>
                    <div data-testid="movie-overview" className="cont-c">
                        {`${data.overview}`}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Details;
