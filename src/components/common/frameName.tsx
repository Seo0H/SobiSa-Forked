import styled from 'styled-components';

import { Medium } from '@/styles/font';

const FrameName = ({ children }: { children: string }) => {
  return (
    <FrameNameWrapper>
      <EllipsisText>{children}</EllipsisText>
    </FrameNameWrapper>
  );
};

export default FrameName;

const FrameNameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 5px 20px;

  height: 28px;
  width: 200px;

  background: ${({ theme }) => theme.colors.gray[1]};
  border-radius: 6px;
`;

const EllipsisText = styled(Medium)`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
