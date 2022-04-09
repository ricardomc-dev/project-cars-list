import React from "react";

function About() {
  return (
    <>
      <main className="flex-shrink-0">
          {/* <!-- Header--> */}
          <header className="bg-dark py-5">
            <div className="container px-5">
              <div className="row justify-content-center">
                <div className="col-lg-12 col-xxl-12">
                  <div className="my-5">
                    <h1 className="text-warning fw-bolder mb-3">About us</h1>
                    <p className="lead fw-normal text-muted mb-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ut inventore magni repellendus ab ad itaque facere. A tenetur quam, nobis tempore illum laborum ipsa fuga, itaque possimus repellat ad perspiciatis, velit reiciendis eos facilis sapiente blanditiis quas officia hic beatae quibusdam! Quod eligendi porro possimus voluptatum ad ipsum sapiente soluta, maiores nobis tenetur adipisci officiis nisi illum quae natus nostrum tempora accusantium blanditiis?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </header>
          {/* <!-- About section one--> */}
          <section className="py-5 bg-warning" id="scroll-target">
            <div className="container px-5 my-5">
              <div className="row gx-5 align-items-center">
                <div className="col-lg-6">
                  <img
                    className="img-fluid rounded mb-5 mb-lg-0"
                    src="https://www.infosistemas.com.br/wp-content/uploads/2021/01/group-img.png"
                    alt="icons"
                  />
                </div>
                <div className="col-lg-6">
                  <h2 className="fw-bolder">Join technology and mobility</h2>
                  <p className="lead fw-normal text-muted mb-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto est, ut esse a labore aliquam beatae expedita.
                    Blanditiis impedit numquam libero molestiae et fugit
                    cupiditate, quibusdam expedita, maiores eaque quisquam.
                  </p>
                </div>
              </div>
            </div>
          </section>
      </main>
    </>
  )
}

export default About;