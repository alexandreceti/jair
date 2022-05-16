import React from 'react';
import ItemPps from './ItemTable';


function DataPSS(props) {
  const { dados } = props
  return (
    <div className='table-container'>
      <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>atividade</th>
            <th>qtde</th>
            <th>un</th>
            <th>recursos</th>
            <th>jornada</th>
            <th>DURACAO</th>
            <th>horaprev</th>
            <th>indMediapre</th>
            <th>dataIni</th>
            <th>dataFim</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item, index) => (<ItemPps pss={item} key={index} />))}
        </tbody>
      </table>
    </div>
  );
}

export default DataPSS;