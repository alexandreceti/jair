import type { NextPage } from 'next'
import Link from 'next/link';
import React from 'react';

import dayjs from 'dayjs'

dayjs.locale('pt-BR')

function ItemPps(props) {
  const { pss } = props;
  return (
    <tr>
      <td>{pss?.atividade}</td>
      <td>{pss?.qtde}</td>
      <td>{pss?.un}</td>
      <td>{pss?.recursos}</td>
      <td>{pss?.jornada}</td>
      <td>{pss?.duracao}</td>
      <td>{pss?.horaprev}</td>
      <td>{pss?.indMediapre}</td>
      <td>{dayjs(pss?.dataIni).format('DD/MM/YYYY')}</td>
      <td>{dayjs(pss?.dataFim).format('DD/MM/YYYY')}</td>
      <td>
        <Link href={`/update/${pss?.id}`}>
          <a className="button is-success is-small">
            <span className="icon is-small">
              <i className="fa-solid fa-pen"></i>

            </span>
          </a>
        </Link>
        <Link href={`/remove/${pss?.id}`}>
          <a className="button is-danger is-small">
            <span className="icon is-small">
              <i className="fa-solid fa-trash"></i>
            </span>
          </a>
        </Link>
      </td>
    </tr>
  );
}

export default ItemPps;