import Nav from "./Nav";
import "../Assets/Landing.css";
import Shine from "./Shine";

const App = () => {
  return (
    <body className="h">
      <section>
        <sidebar />
        <Nav />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        ></link>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossorigin="anonymous"
        ></link>
        <div class="contentab">
          <div class="cardab">{/* <img class="card-img-top" /> */}</div>
          <div class="infoab">
            <h1 class="c">
              Adopt <br></br>Me !
            </h1>
            <br></br>
            <h3>
              <p style={{ color: "white", fontWeight: "40px" }}>
                Abandoned pets and stray dogs do not ask for much. All they need
                is another chance.Abused or neglected on Indian streets, Desi
                dogs are finding longing to find homes ! These dogs are known to
                have a calm and gentle around .
              </p>
            </h3>
          </div>
        </div>

        <div class="media-icons">
          <a
            href="https://en-gb.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-x-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-instagram"></i>
          </a>
        </div>
      </section>
    </body>
  );
};

export default App;
