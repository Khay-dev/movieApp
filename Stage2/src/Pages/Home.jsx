import Nav from "../Component/Nav";
import "../Styles/Home.css";

import image1 from "../img/rt.png";
import image2 from "../img/Poster1.png";
import image3 from "../img/Poster2.png";
import image4 from "../img/Poster3.png";
import image5 from "../img/Poster4.png";

import { Link } from "react-router-dom";

import {
    BiChevronsRight,
    BiLogoFacebookSquare,
    BiLogoInstagramAlt,
    BiLogoYoutube,
    BiLogoTwitter,
} from "react-icons/bi";
import { AiFillPlayCircle } from "react-icons/ai";

const Home = () => {
    let movies = [
        {
            name: "Movie1",
            img: image1,
            ratings: "75%",
            image: image2,
            genre: "Action",
            id: crypto.randomUUID(),
        },
        {
            name: "Movie2",
            img: image1,
            ratings: "75%",
            image: image3,
            genre: "Action",
            id: crypto.randomUUID(),
        },
        {
            name: "Movie3",
            img: image1,
            ratings: "75%",
            image: image4,
            genre: "Action",
            id: crypto.randomUUID(),
        },
        {
            name: "Movie4",
            img: image1,
            ratings: "75%",
            image: image5,
            genre: "Action",
            id: crypto.randomUUID(),
        },
        {
            name: "Movie5",
            img: image1,
            ratings: "75%",
            image: image2,
            genre: "Action",
            id: crypto.randomUUID(),
        },
        {
            name: "Movie6",
            img: image1,
            ratings: "75%",
            image: image3,
            genre: "Action",
            id: crypto.randomUUID(),
        },
        {
            name: "Movie7",
            img: image1,
            ratings: "75%",
            image: image4,
            genre: "Action",
            id: crypto.randomUUID(),
        },
        {
            name: "Movie8",
            img: image1,
            ratings: "75%",
            image: image5,
            genre: "Action",
            id: crypto.randomUUID(),
        },
        {
            name: "Movie9",
            img: image1,
            ratings: "75%",
            image: image2,
            genre: "Action",
            id: crypto.randomUUID(),
        },
        {
            name: "Movie10",
            img: image1,
            ratings: "75%",
            image: image3,
            genre: "Action",
            id: crypto.randomUUID(),
        },
        {
            name: "Movie11",
            img: image1,
            ratings: "75%",
            image: image4,
            genre: "Action",
            id: crypto.randomUUID(),
        },
        {
            name: "Movie12",
            img: image1,
            ratings: "75%",
            image: image5,
            genre: "Action",
            id: crypto.randomUUID(),
        },
    ];

    return (
        <div>
            <div className="home-hero">
                <Nav />
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
                            <img src={image1} alt="tomatoes" />
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
                    {movies.map((movie) => (
                        <Link className="container" key={movie.id}>
                            <img src={movie.image} alt="pics" />
                            <div className="text">
                                <h4 className="main-text">{movie.name}</h4>
                                <div className="ratings">
                                    <img src={movie.img} alt="" />
                                    <span>{movie.ratings}</span>
                                </div>
                                <p>{movie.genre}</p>
                            </div>
                        </Link>
                    ))}
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
