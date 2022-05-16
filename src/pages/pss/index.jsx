import React, { useEffect, useState } from 'react';
import DataPSS from '../../components/pss/DataTable';
import DataViewPSS from '../../components/pss/DataView';
import FilterPPS from '../../components/pss/Filter'
import dadosJson from '../../db/dados.json'

export default function HomePPS() {

  const [tabSelect, setTabSelect] = useState("dados");
  const [dados, setDados] = useState([]);

  function selectTab(tab) {
    setTabSelect(tab);
  }

  useEffect(() => {
    setDados([...dadosJson]);
  }, [])

  return (
    <div className='pt-5 is-size-7'>
      <div className="tabs is-boxed">
        <ul>
          <li className={(tabSelect === 'dados') ? 'is-active' : ""}>
            <a onClick={() => selectTab('dados')}>
              <span className="icon is-small">
                <i className="far fa-file-alt" aria-hidden="true"></i>
              </span>
              <span>Dados</span>
            </a>
          </li>
          <li className={(tabSelect === 'view') ? 'is-active' : ""}>
            <a onClick={() => selectTab('view')}>
              <span className="icon is-small">
                <i className="far fa-file-alt" aria-hidden="true"></i>
              </span>
              <span>view</span>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <FilterPPS dados={dados} setDados={setDados} />

      </div>
      {(tabSelect === 'dados') ? <DataPSS dados={dados} /> : <DataViewPSS dados={dados} />}
      {/* <DataPSS dados={dados} />
      <DataViewPSS dados={dados} /> */}
    </div >
  );
}
