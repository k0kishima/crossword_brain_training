import React from 'react';
import styled from 'styled-components';
import { store } from 'store';
import { Button, Box } from '@material-ui/core';
import { CrosswordTable } from 'components/shared/CrosswordTable';

// NOTE:
// selecotor 使うと関数のトップレベルで宣言しているにもかかわらず `Invalid hook call` になるのでバイパス手段として `getState` を使用
const { question, answer } = store.getState();

export const CheckPage: React.VFC = () => {
  const handleClick = (event: React.MouseEvent<HTMLTableCellElement>) => {
    return;
  };

  const vw = window.innerHeight / window.innerWidth > 1 ? 90 : 48;

  // TODO: 定義が汚くてとりあえず動けばいいというレベルなので書き直す
  const Styled = styled.div`
    .tables {
      width: ${vw}vw;
      height: ${vw + 5}vw;
      margin: 20px auto;
      position: relative;
    }

    .question {
      position: absolute;
      z-index: 0;
      td.filled {
        background-color: red;
      }
    }

    .answer {
      position: absolute;
      z-index: 1;
      td.filled {
        background-color: green;
      }
    }

    .next-button {
      margin: 20px;
    }
  `;

  return (
    <>
      <Styled>
        <div className="tables">
          <div className="question">
            <CrosswordTable cells={question.cells} handleClick={handleClick} />
          </div>
          <div className="answer">
            <CrosswordTable cells={answer.cells} handleClick={handleClick} />
          </div>
        </div>
      </Styled>
      <div className="next-button">
        <Box textAlign="center">
          <Button variant="contained" href="./">
            Next
          </Button>
        </Box>
      </div>
    </>
  );
};
