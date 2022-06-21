import "./Movies.css";
import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";
import axiosInstance from "../axiosconfig/axiosInstance";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Movies = () => {
  const spinner = useSelector((state) => state.Spinner.isLoading);
  const [movies, setmovies] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("/popular?api_key=51ab5fc21cf88acbb7fa66b560c3a335")
      .then((res) => {
        console.log(res.data.results);
        setmovies(res.data.results);
      })
      .catch((err) => {});
  }, []);

  const [page, setPage] = useState(1);
  const moviesPerPage = 4;
  const numberOfRecordsVistited = page * moviesPerPage;
  const totalPages = Math.ceil(movies.length / moviesPerPage);
  const changePage = ({ selected }) => {
    setPage(selected);
  };

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
      <div className="row row-cols-1 row-cols-md-2 g-4 mx-3 mt-3">
        {movies
          .slice(
            numberOfRecordsVistited,
            numberOfRecordsVistited + moviesPerPage
          )
          .map((m) => {
            return (
              <div className="col" key={m.id}>
                <div className="card" style={{ height: "500px" }}>
                  <img
                    src={
                      "https://image.tmdb.org/t/p/original/" + m.backdrop_path
                    }
                    style={{ height: "200px" }}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title bg-light text-center">{m.title}</h5>
                    <p className="card-text">{m.overview}</p>
                    <button
                      className="p-2 btn btn-primary"
                    >
                      <Link
                        style={{ textDecoration: "none", color: "white" }}
                        to={`/Movies/${m.id}`}
                      >
                        Details
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={totalPages}
        onPageChange={changePage}
        containerClassName={"navigationButtons"}
        previousLinkClassName={"previousButton"}
        nextLinkClassName={"nextButton"}
        disabledClassName={"navigationDisabled"}
        activeClassName={"navigationActive"}
      />
      </div>
      <br></br>
      <div className="container-fluid mt-4">
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

export default Movies;
