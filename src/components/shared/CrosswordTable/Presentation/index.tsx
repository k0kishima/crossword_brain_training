import React from 'react';
import styled from 'styled-components';

type Props = {
  cells: boolean[][];
  handleClick: (event: React.MouseEvent<HTMLTableCellElement>) => void;
};

export const CrosswordTable: React.FC<Props> = ({
  cells,
  handleClick,
}: Props) => {
  const BORDER_COLOR = 'black';
  const TABLE_VW = window.innerHeight / window.innerWidth > 1 ? 90 : 48;
  const CELL_VW = TABLE_VW / cells.length;
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
      td.filled {
        background-color: ${BORDER_COLOR};
      }
    }
  `;

  return (
    <Styled>
      <table>
        <tbody>
          {cells.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td
                  key={j}
                  data-index={`${i}-${j}`}
                  className={cell ? 'filled' : ''}
                  onClick={handleClick}
                ></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Styled>
  );
};
