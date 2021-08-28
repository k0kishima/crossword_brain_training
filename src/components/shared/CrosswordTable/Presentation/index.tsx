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

  let i = 0;
  let j = 0;
  return (
    <Styled>
      <table>
        <tbody>
          {cells.map((row) => (
            <tr key={i++}>
              {row.map((cell) => (
                <td
                  key={j++}
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
