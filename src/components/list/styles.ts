import styled, { css } from 'styled-components';

import * as Font from '@/styles/font';

export const ListBoxSizeCss = css`
  display: flex;
  align-items: center;
  padding: 20px 15px;
  gap: 16px;
  margin: 0;

  width: 310px;
  height: 151px;
`;

export const ListBoxSize = styled.div`
  ${ListBoxSizeCss}
  justify-content: center;
`;

export const StyledListContainer = styled.div<{ select?: boolean }>`
  ${ListBoxSizeCss}

  cursor: pointer;
  &:hover {
    background: #fff5e6;
  }

  border-width: 1px 0px 0px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.mainColor};
`;

export const Scroll = styled.div`
  flex: auto;
  height: 100%;
  overflow-y: auto;
  padding-bottom: 50px;
  padding: 15px 15px;

  &::-webkit-scrollbar,
  &::-webkit-scrollbar-thumb {
    width: 4px;
    border-radius: 2px;
    background-clip: padding-box;
    border: 10px solid transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.gray[2]};
  }
`;

export const Fixed = styled.div`
  position: fixed;
  bottom: 26px;
`;

export const TopBtn = styled.button`
  cursor: pointer;
  position: absolute;
  display: flex;
  transform: translate(-50%, -100%);

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  background: inherit;
  justify-content: flex-end;
  min-width: 310px;
`;

/* LIST-BOX */
export const TextItem = styled.div`
  flex: 1;
  display: grid;
  flex-direction: column;
  gap: 8px 0px;
  width: 183px;

  text-align: initial;
  white-space: nowrap;
`;

export const Title = styled(Font.Medium)`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ItemClass = styled(Font.Small)`
  margin-top: 8px;
`;

/* Layout */
export const FlexDefultCentering = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const JustifyFlexStart = styled(FlexDefultCentering)`
  justify-content: flex-start;
`;

export const JustifyCenter = styled(FlexDefultCentering)`
  justify-content: center;
`;
