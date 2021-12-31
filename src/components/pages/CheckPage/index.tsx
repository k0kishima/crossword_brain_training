import React from 'react';
import styled from 'styled-components';
import { store } from 'store';
import { Box } from '@material-ui/core';
import { CrosswordTable } from 'components/shared/CrosswordTable';
import { NextButtonContainer } from './NextButton/Container';

const { question, answer } = store.getState();

export const CheckPage: React.VFC = () => {
  const handleClick = () => null;

  // TODO: 定義が汚くてとりあえず動けばいいというレベルなので書き直す
  const Styled = styled.div`
    .box {
      position: relative;
      width: 50%;
      height: auto;
      margin: 0px auto 55px;
    }
    .ratio-1_1:before {
      content: '';
      display: block;
      padding-top: 100%; /* 1:1 */
    }
    .inner {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .question {
      position: absolute;
      left: 0;
      right: 0;
      z-index: 0;
      margin: auto;
      td.filled {
        background-color: red;
      }
    }

    .answer {
      position: absolute;
      left: 0;
      right: 0;
      z-index: 1;
      margin: auto;
      td.filled {
        background-color: green;
      }
    }
  `;

  return (
    <Styled>
      <div className="box ratio-1_1">
        <div className="inner">
          <div className="question">
            <CrosswordTable cells={question.cells} handleClick={handleClick} />
          </div>
          <div className="answer">
            <CrosswordTable cells={answer.cells} handleClick={handleClick} />
          </div>
        </div>
      </div>

      <Box textAlign="center">
        <NextButtonContainer />
      </Box>
    </Styled>
  );
};
