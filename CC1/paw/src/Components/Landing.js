import Nav from "./Nav";
import "../Assets/Landing.css";
import Shine from "./Shine";
// import { Side } from "./Side";

const App = () => {
  return (
    <body className="h">
      <section>
        <Shine />
        {/* <Side /> */}
        {/* <Nav /> */}
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
        <div class="content">
          <div class="card">
            <img class="card-img-top" />
          </div>
          <div class="info">
            <h1 class="c">
              Adopt <br></br>Me !
            </h1>
            <br></br>
            <h3>
              <p>
                Abandoned pets and stray dogs do not ask for much. All they need
                is another chance.Abused or neglected on Indian streets, Desi
                dogs are finding loving homes in the West! These dogs are known
                to have a calm and gentle demeanor around them. They bond
                strongly with their people and make an excellent family pet that
                is very loving, loyal and intelligent.
              </p>
            </h3>
          </div>
        </div>

        <div class="media-icons">
          <a href="#">
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-x-twitter"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-instagram"></i>
          </a>
        </div>
      </section>
    </body>
  );
};

export default App;
