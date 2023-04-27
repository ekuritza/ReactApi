import "./menu.css";

import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <div class="container">
            <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                    <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
                </a>

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li> <Link className="nav-link" to='/'>Home</Link> </li>
                    <li> <Link className="nav-link" to='/detalhes'>Detalhes</Link> </li>
                    <li> <Link className="nav-link" to='/cadastro'>Cadastro</Link> </li>
                     
                </ul>
                
                <div class="col-md-3 text-end">
                    <button type="button" class="btn btn-primary">Cadastrar</button>
                </div>
            </header>
        </div>
    )
}
/* TODO: esse link do cadastro so precisa ser movido para o botao de cadastrar.*/