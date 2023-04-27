import { BrowserRouter as Router } from 'react-router-dom';

import Menu from './components/Menu/index';
import Footer from './components/Footer/index';
import RoutesConfig from './RoutesConfig';

export default function App() {
  return (
    <Router>
        <Menu />
        <RoutesConfig />
        <Footer />
    </Router>
  )
}
