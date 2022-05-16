import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'

dayjs.locale('pt-BR')
dayjs.extend(isBetween)

function DataViewPSS(props) {
  const [datas, setDatas] = useState([])
  const { dados } = props



  useEffect(() => {
    let datasSet = new Set()
    dados.forEach((item) => {
      const ini = dayjs(item.dataIni).format('YYYY/MM/DD')
      const fim = dayjs(item.dataFim).format('YYYY/MM/DD')
      datasSet.add(ini)
      datasSet.add(fim)
    });
    const newDates = [...datasSet];
    setDatas(newDates)
    return () => setDatas([])
  }, [])


  return (
    <div className='table-container'>
      {/* {JSON.stringify(datas.sort())} */}
      <table className="table is-bordered is-striped is-narrow is-hoverable">
        <thead>
          <tr>
            <th>Nome:</th>
            {datas?.map((data) => (<th key={data}>{data}</th>))}
          </tr>
        </thead>
        <tbody>
          {dados?.map((itemPPS, index) => {
            // dayjs('2016-10-30').isBetween('2016-01-01', '2016-10-30')
            // console.log(teste);
            return (
              <tr key={`tr-${itemPPS.id}`} id={`tr-${itemPPS.dataIni}`} >
                <td>{itemPPS.atividade}</td>
                {
                  datas?.map((data, index) => {
                    const dataAtual = dayjs(data).isBetween(itemPPS.dataIni, itemPPS.dataFim, null, '[')
                    // console.log(dataAtual)
                    if (dataAtual) {
                      console.log(`ini: ${itemPPS.dataIni} fim: ${itemPPS.dataFim} `)
                      console.log(`data: ${data} `)
                      return (<td key={`td-${index}`} className="is-selected">{+itemPPS.qtde / +itemPPS.duracao} {itemPPS.unidade}</td>)
                    } else {
                      return (<td key={`td-${index}`}></td>)
                    }
                  })
                }
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DataViewPSS;