import {Containter} from './style'
import Sidebar from '../../components/Sidebar'
import { Outlet } from 'react-router-dom'

import logo from '../../assets/logo.svg'
import { ButtonMyOrder } from '../../components/ButtonMyOrder'

const Main = () => {
  return (
    <Containter>
      <Sidebar></Sidebar>
      <section>
        <header>
          <img src={logo} alt="Logo" />
        </header>
        <Outlet />
        <ButtonMyOrder />
      </section>
    </Containter>
  );
}

export default Main;
