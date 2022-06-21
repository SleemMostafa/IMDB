import { useState, useEffect } from "react";
import axiosInstance from "../axiosconfig/axiosInstance";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
const MoviesDetails = () => {
  const spinner = useSelector((state) => state.Spinner.isLoading);
  const params = useParams();
  const [movie, setmovie] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("/" + params.id + "?api_key=51ab5fc21cf88acbb7fa66b560c3a335")
      .then((res) => {
        console.log(res.data);
        setmovie(res.data);
      })
      .catch((err) => {});
  }, []);
  return (
    <>
      {spinner && (
        <div
          className="d-flex justify-content-center "
          style={{ paddingTop: "300px" }}
        >
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <h4 className="mt-4 text-center">
        <b>{movie.title}</b>
      </h4>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-4"></div>
          <div>
            <img
              src={"https://image.tmdb.org/t/p/original/" + movie.backdrop_path}
              id="logoimg"
              className="img-fluid"
            />
            <h2 className="mx-3 text-danger text-center">
              <b>{movie.status}</b>
            </h2>
          </div>
        </div>
      </div>
      <h5 className="mx-3 bg-light">
        {movie.overview} <br />
        <br />
      </h5>
      <div className="container-fluid">
        <footer class="footer">
          <div class="footer__addr">
            <h1 class="footer__logo">Something</h1>

            <h2>Contact</h2>

            <address>
              5534 Somewhere In. The World 22193-10212
              <br />
              <a class="footer__btn" href="mailto:example@gmail.com">
                Email Us
              </a>
            </address>
          </div>

          <ul class="footer__nav">
            <li class="nav__item">
              <h2 class="nav__title">Media</h2>

              <ul class="nav__ul">
                <li>
                  <a href="#">Online</a>
                </li>

                <li>
                  <a href="#">Print</a>
                </li>

                <li>
                  <a href="#">Alternative Ads</a>
                </li>
              </ul>
            </li>

            <li class="nav__item nav__item--extra">
              <h2 class="nav__title">Technology</h2>

              <ul class="nav__ul nav__ul--extra">
                <li>
                  <a href="#">Hardware Design</a>
                </li>

                <li>
                  <a href="#">Software Design</a>
                </li>

                <li>
                  <a href="#">Digital Signage</a>
                </li>

                <li>
                  <a href="#">Automation</a>
                </li>

                <li>
                  <a href="#">Artificial Intelligence</a>
                </li>

                <li>
                  <a href="#">IoT</a>
                </li>
              </ul>
            </li>

            <li class="nav__item">
              <h2 class="nav__title">Legal</h2>

              <ul class="nav__ul">
                <li>
                  <a href="#">Privacy Policy</a>
                </li>

                <li>
                  <a href="#">Terms of Use</a>
                </li>

                <li>
                  <a href="#">Sitemap</a>
                </li>
              </ul>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
};

export default MoviesDetails;
