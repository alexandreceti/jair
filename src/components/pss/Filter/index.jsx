import React, { useState } from 'react';
import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'


dayjs.locale('pt-BR')
dayjs.extend(isBetween)

export default function FilterPPS({ dados, setDados }) {

  const [filter, setFilter] = useState({})
  function handlerFilter() {
    

    const newdados = dados.filter((item) => {
      const dataAtual = dayjs(item.dataIni).isBetween(filter.inicio, filter.fim, null, "[")
      if (dataAtual) return item;
    })
    
    setDados(newdados)
  }


  return (
    <div className="columns pb-3">
      <div className="seach-container column is-one-third" >
        <div className="field is-grouped">
          <p className="control is-expanded">
            <input className="input is-small"
              type="date" placeholder="Data Inicio"
              min="2022-05-09" max="2022-05-15"
              onChange={(e) => setFilter({ ...filter, inicio: e.target.value })} />
          </p>
          <p className="control is-expanded">
            <input className="input is-small" type="date" placeholder="Data Fim"
              min="2022-05-09" max="2022-05-15"
              onChange={(e) => setFilter({ ...filter, fim: e.target.value })} />
          </p>
          <p className="control">
            <button onClick={handlerFilter} className="button is-info is-small">
              Filtro
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
