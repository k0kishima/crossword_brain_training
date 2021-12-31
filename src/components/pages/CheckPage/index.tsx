import React from 'react';
import styled from 'styled-components';
import { store } from 'store';
import { Box } from '@material-ui/core';
import { ResultTable } from './ResultTable/Presentation';
import { NextButtonContainer } from './NextButton/Container';
import { CHECK_RESULT } from 'types';

const { question, answer } = store.getState();

const results = question.cells.map((questionCellRow, i) => {
  return questionCellRow.map((questionCell, j) => {
    const answerCell = answer.cells[i][j];

    if (questionCell && answerCell) {
      return CHECK_RESULT.CORRECT_FILLED;
    }
    if (!questionCell && !answerCell) {
      return CHECK_RESULT.CORRECT_BLANK;
    }
    if (questionCell && !answerCell) {
      return CHECK_RESULT.NOT_FILLED;
    }
    if (!questionCell && answerCell) {
      return CHECK_RESULT.WRONG_FILLED;
    }

    return CHECK_RESULT.UNKNOWN;
  });
});

export const CheckPage: React.VFC = () => {
  const Styled = styled.div`
    button,
    a {
      margin: 10px 30px 30px 30px;
      cursor: pointer;
    }
  `;

  return (
    <Styled>
      <ResultTable results={results} />
      <Box textAlign="center">
        <NextButtonContainer />
      </Box>
    </Styled>
  );
};
