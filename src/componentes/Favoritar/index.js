import React, { useState, useEffect } from 'react';
import {Input, Button} from'antd'
import {HeartTwoTone} from '@ant-design/icons'
import {postFavorito} from '../../servicos/favoritos'
import {getFavoritos} from'../../servicos/favoritos'

const InsertFavorito = ({ id }) => {
    const [favoritos, setFavoritos] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const favoritosData = await getFavoritos(); // Supondo que getFavoritos() seja uma função que retorna a lista de favoritos
            setFavoritos(favoritosData);
        }

        fetchData();
    }, []);

    const insertFavorito = async () => {
        if (!favoritos.some(item => item.id === id)) {
            await postFavorito(id);
        } else {
            console.log("O item já está nos favoritos.");
        }
    };

    return (
        <Button onClick={insertFavorito}><HeartTwoTone/></Button>
        
    );
};

export default InsertFavorito;