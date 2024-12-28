import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../styles/style.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to={``}>
          <Navbar.Brand href="">
            <img
              alt="puryap logo"
              src="images/logo.png"
              width="183"
              height="45"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              as={Link}
              to="/"
              style={{ marginRight: "10px", textDecoration: "none" }}
            >
              За нас
            </Nav.Link>
            <NavDropdown
              title="Категория"
              id="basic-nav-dropdown"
              style={{ marginRight: "10px" }}
            >
              <NavDropdown.Item>
                <div className="dropdownButton">
                  <span>
                    <Nav.Link
                      as={Link}
                      to="/products"
                      style={{ marginRight: "10px", textDecoration: "none" }}
                    >
                      Продукти за хоби <b>&gt;</b>
                    </Nav.Link>
                  </span>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="#">
                      Прозрачни епоксидни смоли
                    </a>
                    <a className="dropdown-item" href="#">
                      Полиуретанови пени
                    </a>
                    <a className="dropdown-item" href="#">
                      Гъвкава полиуретанова пластмаса
                    </a>
                    <a className="dropdown-item" href="#">
                      Течни полиуретанови смоли
                    </a>
                    <a className="dropdown-item" href="#">
                      Течна пластмаса
                    </a>
                    <a className="dropdown-item" href="#">
                      Силиконови форми
                    </a>
                    <a className="dropdown-item" href="#">
                      Пигмент
                    </a>
                  </div>
                </div>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <div className="dropdownButton">
                  <span>
                    Подови бои <b>&gt;</b>
                  </span>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="#">
                      Акрилни бои
                    </a>
                    <a className="dropdown-item" href="#">
                      Епоксидни бои
                    </a>
                  </div>
                </div>
              </NavDropdown.Item>
              <NavDropdown.Item>Грундове</NavDropdown.Item>
              <NavDropdown.Item>
                <div className="dropdownButton">
                  <span>
                    Хидролационни продукти <b>&gt;</b>
                  </span>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="#">
                      Течна изолация
                    </a>
                    <a className="dropdown-item" href="#">
                      Спрей изолация
                    </a>
                    <a className="dropdown-item" href="#">
                      Инжекционни химикали
                    </a>
                  </div>
                </div>
              </NavDropdown.Item>
              <NavDropdown.Item>Епоксидни смоли</NavDropdown.Item>
              <NavDropdown.Item>
                <div className="dropdownButton">
                  <span>
                    Инжекционни смоли <b>&gt;</b>
                  </span>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="#">
                      Инжекционни химикали
                    </a>
                    <a className="dropdown-item" href="#">
                      Инжекционни машини
                    </a>
                    <a className="dropdown-item" href="#">
                      Опаковка за инжектиране
                    </a>
                  </div>
                </div>
              </NavDropdown.Item>
              <NavDropdown.Item>Продукти за ремонт на бетон</NavDropdown.Item>
              <NavDropdown.Item>Машини за ремонт на бетон</NavDropdown.Item>
              <NavDropdown.Item>Лепила и мастики</NavDropdown.Item>
              <NavDropdown.Item>Покриване</NavDropdown.Item>
              <NavDropdown.Item>Мебелни продукти</NavDropdown.Item>
              <NavDropdown.Item>Добавки за бетон</NavDropdown.Item>
              <NavDropdown.Item>Укрепване</NavDropdown.Item>
              <NavDropdown.Item>Топлоизолация</NavDropdown.Item>
              <NavDropdown.Item>Морски продукти</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Документи"
              id="basic-nav-dropdown"
              style={{ marginRight: "10px" }}
            >
              <NavDropdown.Item>За нас</NavDropdown.Item>
              <NavDropdown.Item>
                Цветове на боята <b>Ral</b>
              </NavDropdown.Item>
              <NavDropdown.Item>Спецификации</NavDropdown.Item>
              <NavDropdown.Item>Тестови документи</NavDropdown.Item>
              <NavDropdown.Item>
                <b>MSDS</b> формуляри
              </NavDropdown.Item>
              <NavDropdown.Item>
                <b>TDS</b> документи
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="По приложения"
              id="basic-nav-dropdown"
              style={{ marginRight: "10px" }}
            >
              <NavDropdown.Item>Водоизолация</NavDropdown.Item>
              <NavDropdown.Item>Подова настилка</NavDropdown.Item>
              <NavDropdown.Item>Ремонт на подове</NavDropdown.Item>
              <NavDropdown.Item>Добавки за бетон</NavDropdown.Item>
              <NavDropdown.Item>Боядисвайте</NavDropdown.Item>
              <NavDropdown.Item>Лепила</NavDropdown.Item>
              <NavDropdown.Item>Мебели</NavDropdown.Item>
              <NavDropdown.Item>Хоби продукции</NavDropdown.Item>
              <NavDropdown.Item>Укрепване</NavDropdown.Item>
              <NavDropdown.Item>Инжектиране</NavDropdown.Item>
              <NavDropdown.Item>Топлоизолация</NavDropdown.Item>
              <NavDropdown.Item>Покриване</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="По продукти"
              id="basic-nav-dropdown"
              style={{ marginRight: "10px" }}
            >
              <NavDropdown.Item>Полиурея</NavDropdown.Item>
              <NavDropdown.Item>Полиуретанови смоли</NavDropdown.Item>
              <NavDropdown.Item>Епоксидни смоли</NavDropdown.Item>
              <NavDropdown.Item>Полиуретанови пени</NavDropdown.Item>
              <NavDropdown.Item>Акрилни бои</NavDropdown.Item>
              <NavDropdown.Item>Грундове</NavDropdown.Item>
              <NavDropdown.Item>Оцветители</NavDropdown.Item>
              <NavDropdown.Item>Хидрофобни продукти</NavDropdown.Item>
              <NavDropdown.Item>Течна пластмаса</NavDropdown.Item>
              <NavDropdown.Item>Машини</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
