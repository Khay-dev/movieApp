import "../Styles/Home.css";

import Image1 from "../img/rt.png";

import axios from "axios";

import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

import {
    BiChevronsRight,
    BiLogoFacebookSquare,
    BiLogoInstagramAlt,
    BiLogoYoutube,
    BiLogoTwitter,
} from "react-icons/bi";
import { AiFillPlayCircle, AiFillHeart } from "react-icons/ai";


const Home = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    async function FetchMovie() {
        let API_KEY = "ac57941d1109bbb02f4f4d5995d4ab24";
        axios
            .get(
                `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`
            )
            .then((res) => {
                setData(res.data.results);
                setError(null);
                console.log(res.data.results);
            })
            .catch((err) => {
                setError(err.message);
                setData([]);
            });
    }

    useEffect(() => {
        FetchMovie();
    }, []);

    const moviesData = data.slice(0, 10);

    return (
        <div>
            <div className="home-hero">
                <div className="home-main-hero">
                    <h2>
                        John Wick 3 : <br /> Parabellum
                    </h2>
                    <div className="home-2">
                        <div className="first">
                            <h3>IMDb</h3>
                            <p>86.0/100</p>
                        </div>
                        <div className="second">
                            <img src={Image1} alt="tomatoes" />
                            <p>97%</p>
                        </div>
                    </div>
                    <div className="home-3">
                        John Wick is on the run after killing a member of the
                        international assassins guild, and with a $14 million
                        price tag on his head, he is the target of hit men and
                        women everywhere.
                    </div>
                    <div className="home-4">
                        <AiFillPlayCircle />
                        <p>WATCH TRAILER</p>
                    </div>
                </div>
            </div>

            <section className="section-1">
                <div className="section-a">
                    <div className="section-aa">Featured Movies</div>
                    <div className="section-ab">
                        <p>See More</p>
                        <BiChevronsRight />
                    </div>
                </div>
                <div className="section-b">
                    {moviesData.map((movie) => (
                        <Link
                            to={`/details/${movie.id}`}
                            className="container"
                            key={movie.id}
                            data-testid="movie-card"
                        >
                            <img
                                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                alt="picture"
                                data-testid="movie-poster"
                            />
                            <div className="text">
                                <h4
                                    className="main-text"
                                    data-testid="movie-title"
                                >
                                    {movie.title}
                                    <AiFillHeart className="heart" />
                                </h4>

                                <div
                                    className="release"
                                    data-testid="movie-release-date"
                                >
                                    Date: {movie.release_date}
                                </div>
                            </div>
                        </Link>
                    ))}
                    {error && <div>Error: {error}</div>}
                </div>
            </section>
            <section className="section-2">
                <div className="socials">
                    <BiLogoFacebookSquare />
                    <BiLogoInstagramAlt />
                    <BiLogoYoutube />
                    <BiLogoTwitter />
                </div>
                <div className="legal">
                    <p>Conditions of Use</p>
                    <p>Privacy & Policy</p>
                    <p>Press Room</p>
                </div>
                <div className="copyright">
                    © 2021 MovieBox by Adriana Eka Prayudha{" "}
                </div>
            </section>
        </div>
    );
};

export default Home;
