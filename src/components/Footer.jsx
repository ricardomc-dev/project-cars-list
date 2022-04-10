import React from 'react';
import "./footer.css";


function Footer() {
  return (
    <footer className="bg-light py-4">
      <div class="container">
        <div class="row align-items-start">
          <div class="col-md-4 mb-3 social-media">
            <a href="https://twitter.com/infosistemas_br" target="blank">
              <img src="https://www.infosistemas.com.br/wp-content/uploads/2021/12/slink-twitter.png" alt="" data-src="https://www.infosistemas.com.br/wp-content/uploads/2021/12/slink-twitter.png"/>
            </a>
            <a href="https://www.instagram.com/info.sistemas/" target="blank">
              <img src="https://www.infosistemas.com.br/wp-content/uploads/2021/03/sinsta.png" alt="" data-src="https://www.infosistemas.com.br/wp-content/uploads/2021/03/sinsta.png"/>
            </a>
            <a href="https://www.linkedin.com/company/info15anos/" target="blank">
              <img src="https://www.infosistemas.com.br/wp-content/uploads/2021/03/slink.png" alt="" data-src="https://www.infosistemas.com.br/wp-content/uploads/2021/03/slink.png"/>
            </a>
          </div>
          <div class="col-md-4 mb-3">
            <div class="box-endereco">
              <h6>SEDE</h6>
              <p>Rua Desembargador Jorge Fontana, nº 428 – 11º andar</p>
              <p>Belvedere – Belo Horizonte – MG – CEP: 30.320-670</p>
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <div class="box-endereco">
              <h6>REGIONAL SUL</h6>
              <p>Rua Sena Martins, 352 – Jardim Higienópolis</p>
              <p>Londrina/PR – CEP: 86.015-060</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
