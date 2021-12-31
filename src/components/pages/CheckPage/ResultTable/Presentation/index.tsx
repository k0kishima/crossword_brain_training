import React from 'react';
import styled from 'styled-components';
import { CHECK_RESULT } from 'types';

type Props = {
  results: CHECK_RESULT[][];
};

export const ResultTable: React.FC<Props> = ({ results }: Props) => {
  const BORDER_COLOR = 'black';
  const TABLE_VW = window.innerHeight / window.innerWidth > 1 ? 90 : 48;
  const CELL_VW = TABLE_VW / results.length;
  const Styled = styled.div`
    table {
      border-collapse: collapse;
      margin: 20px auto;
      width: ${TABLE_VW}vw;
      td {
        border: 2px solid ${BORDER_COLOR};
        width: ${CELL_VW}vw;
        height: ${CELL_VW}vw;
      }
    }
  `;

  return (
    <Styled>
      <table>
        <tbody>
          {results.map((row, i) => (
            <tr key={i}>
              {row.map((result, j) => (
                <td
                  key={j}
                  data-index={`${i}-${j}`}
                  style={{ backgroundColor: result }}
                ></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Styled>
  );
};
