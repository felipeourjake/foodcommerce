import { Aside } from "./style";
import menuimg from '../../assets/menu.svg'
import {ReactComponent as Burgerimg} from '../../assets/burger.svg'
import {ReactComponent as Pizzaimg} from '../../assets/pizza.svg'
import {ReactComponent as Sodaimg} from '../../assets/soda.svg'
import {ReactComponent as Icecreamimg} from '../../assets/ice-cream.svg'
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <Aside isMenuOpen={menuOpen}>
            <button type="button" onClick={() => setMenuOpen(!menuOpen)}>
                <img src={menuimg} alt="Menu" />
            </button>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">
                            <Burgerimg />
                            <span>Hamburguers</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="pizzas">
                            <Pizzaimg />
                            <span>Pizzas</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/bebidas">
                            <Sodaimg />
                            <span>Bebidas</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/sobremesas">
                            <Icecreamimg />
                            <span>Sobremesas</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </Aside>
    )
}

export default Sidebar;