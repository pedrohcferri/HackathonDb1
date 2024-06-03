import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';
import calcularParcelas from '../Calculo/indeeex';

const ParcelamentoSelect = ({ valor }) => {

  const [options, setOptions] = useState([]);

  useEffect(() => {
    const parcelas = calcularParcelas(valor);
    setOptions(parcelas);
  }, [valor]);

  const handleChange = (value) => {
   console.log("oi")
  };

  return (
    <Select
    defaultValue="Escolha quantas parcelas"
    style={{ width: '300px'}}
    onChange={handleChange}
    options={options}
  />
  );
};

ParcelamentoSelect.propTypes = {
  valor: PropTypes.number.isRequired // Espera-se que a prop 'valor' seja um número e seja obrigatória
};

export default ParcelamentoSelect;