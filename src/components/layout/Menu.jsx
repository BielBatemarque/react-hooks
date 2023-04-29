import './Menu.css';
import { Link } from 'react-router-dom';

export const Menu = () => {
  return (
    <aside className="Menu">
        <nav>
          <ul>
            <li>
              <Link to='/'>Início</Link>
            </li>
            <li>
              <Link to='/UseState'>useState</Link>
            </li>
            <li>
              <Link to='/UseEffect'>useEffect</Link>
            </li>
            <li>
              <Link to='/UseRef'>useRef</Link>
            </li>
            <li>
              <Link to='/UseMemo'>useMemo</Link>
            </li>
            <li>
              <Link to='/UseCallback'>useCallback</Link>
            </li>
            <li>
              <Link to='/UseContext'>useContext</Link>
            </li>
            <li>
              <Link to='/UseReducer'>useReducer</Link>
            </li>
            <li>
              <Link to='/useMyHook'>useMyHook</Link>
            </li>
          </ul>
        </nav>
    </aside>
  );
}


