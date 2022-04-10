import React from "react";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="bg-dark py-5">
      <div className="container px-5">
        <div className="row gx-5 align-items-center justify-content-center">
          <div className="col-lg-8 col-xl-7 col-xxl-6">
            <div className="my-5 text-center text-xl-start">
              <h1 className="display-5 fw-bolder text-white mb-2">
                Infosistemas | Locavia
              </h1>
              <p className="lead fw-normal text-white-50 mb-4">
                The perfect car for you!
              </p>
              <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                <Link
                  className="btn btn-warning btn-lg px-4 me-sm-3"
                  to="/catalog"
                >
                  Catalog
                </Link>
                <Link className="btn btn-outline-light btn-lg px-4" to="/about">
                  About
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
            <img
              className="img-fluid rounded-4 my-4"
              src= "https://www.infosistemas.com.br/wp-content/uploads/2021/01/img-paglocavia2_alta.png"
              alt="car"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home;
