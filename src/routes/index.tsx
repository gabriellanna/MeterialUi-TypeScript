import { Routes, Route, useNavigate } from "react-router-dom";
import { useDrawerContext } from "../shared/contexts";
import { useEffect } from "react";
import { 
    Dashboard,
    DetalheDePessoas,
    ListagemDePessoas,
    DetalheDeCidades,
    ListagemDeCidades
} from "../pages";

export const AppRouters = () => {

    const { setDrawerOptions } = useDrawerContext();
    const Nav = useNavigate();

    useEffect(() => {
        setDrawerOptions([
            {
                icon: 'home',
                path: '/pagina-inicial',
                label: 'Página Inicial'
            },
            {
                icon: 'location_city',
                path: '/cidades',
                label: 'Cidades'
            },
            {
                icon: 'people',
                path: '/pessoas',
                label: 'Pessoas'
            },
            {
                icon: 'start',
                path: '/pagina-inicial2',
                label: 'Sair'
            }
        ])
    }, [setDrawerOptions]);

    return(
        <Routes>
            <Route path="/pagina-inicial" element={<Dashboard />} />

            <Route path="/pessoas" element={<ListagemDePessoas />} />
            <Route path="/pessoas/detalhe/:id" element={<DetalheDePessoas />} />

            <Route path="/cidades" element={<ListagemDeCidades />} />
            <Route path="/cidades/detalhe/:id" element={<DetalheDeCidades />} />

            <Route path="*" element={<button onClick={() => Nav("/pagina-inicial")}>Ir para Página inicial</button>} />
        </Routes>
    );
};