import "./assets/infoLibro.css";
import Footer from "./components/Footer.js";
import Headerbar from "./components/Headerbar.js";
import port from "./assets/libro2.jpg";
import libro from "./assets/juegos2.pdf";

export const InfoLlamas = () => {
  return (
    <>
      <Headerbar />
      <div className="infoLibro-body">
        <div className="container" style={{ marginLeft: 80, marginRight: 80 }}>
          <p style={{ fontSize: "large" }}>
            <a className="link" href="home">
              Libros
            </a>{" "}
            &gt; Los Juegos del Hambre: En Llamas
          </p>
        </div>
        <div className="row">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading fw-normal lh-1">
              Los Juegos del Hambre: En Llamas{" "}
            </h2>
            <h4>
              <a className="link" href="biography">
                Suzanne Collins
              </a>
            </h4>
            <h5>Sinopsis:</h5>
            <p className="lead">
              "Los Juegos del Hambre: En Llamas" es la segunda entrega de la
              trilogía de Suzanne Collins, que continúa la historia de Katniss
              Everdeen después de su victoria en los Juegos del Hambre. Ahora,
              Katniss y Peeta Mellark deben embarcarse en una gira de la
              victoria por los distritos, pero se enfrentan a la creciente ira
              de la gente hacia el Capitolio y a la amenaza de una posible
              rebelión. Mientras tanto, el presidente Snow está decidido a
              acabar con cualquier forma de rebelión y, para ello, organiza la
              edición número 75 de los Juegos del Hambre, conocidos como los
              "Juegos del Hambre de los Vasallajes". En este juego, los
              ganadores de los juegos anteriores son enviados de vuelta a la
              arena para luchar hasta la muerte en un nuevo desafío. Katniss se
              da cuenta de que su victoria en los juegos anteriores la ha
              convertido en un símbolo de esperanza para los rebeldes, pero
              también la ha convertido en un objetivo para el Capitolio. Para
              sobrevivir a los juegos y ayudar a la rebelión, Katniss debe
              aprender a confiar en sus instintos y en sus aliados, incluyendo a
              Peeta y a su amigo de la infancia, Gale. Con giros emocionantes,
              suspenso y acción, "Los Juegos del Hambre: En Llamas" es una
              continuación emocionante e intensa de la historia de Katniss y su
              lucha por la supervivencia y la libertad.
            </p>
          </div>
          <div className="col-md-5 order-md-1">
            <img id="portada" src={port} alt="Not found" />
            <div style={{ marginTop: 20 }}>
              <button
                className="btn btn-primary bg-success border-success"
                style={{
                  width: 353,
                  height: 70,
                  fontSize: 30,
                  fontWeight: "bold",
                }}
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                LEER ESTE LIBRO
              </button>
              {/* Modal */}
              <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-xl">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">
                        ¡Disfrute de su lectura!
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body">
                      <embed
                        src={libro}
                        width={1100}
                        height={800}
                        type="application/pdf"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InfoLlamas;
