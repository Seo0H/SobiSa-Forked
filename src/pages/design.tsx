import React, { Component } from 'react';

import styled from 'styled-components';

import { GrayRange } from '../../style';
import { ItemImage, LineImage, MainImage } from '@/assets';
import SearchInput from '@/components/SearchInput';
import {
  BottomButton,
  ModalButton,
  ModalLongButton,
  ModalSubButton,
  ShareButton,
} from '@/components/common/buttons';
import FrameName from '@/components/common/frameName';
import {
  FaceBookIcon,
  KakaoIcon,
  LinkIcon,
  LoadingIcon,
  NoticeIcon,
  TopIcon,
  TwitterIcon,
} from '@/styles/icons';
import theme from '@/styles/theme';
import { NumericRange } from '@/types/rangeTypeGenerater';

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 5fr;
  counter-reset: sec-counter;
  scroll-behavior: smooth;
`;

const Section = styled.section``;

const Aside = styled.div`
  position: sticky;
  height: 100vh;
  font-size: 20px;
  border-right: 1px solid #949494;
  top: 0;
  color: #949494;

  h1 {
    color: black;
    font-size: 24px;
    margin: 20px 0px;
    padding: 20px;
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-items: center;
    position: -webkit-sticky;
    position: sticky;

    li {
      line-height: 40px;
      padding-left: 20px;
      cursor: pointer;
    }
    li:hover {
      background-color: rgba(0, 0, 0, 0.02);
    }

    a,
    a:link,
    a:hover,
    a:active,
    a:visited {
      display: block;
      text-decoration: none;
      outline: none;
      color: #949494;
      text-decoration: none;
    }
  }
`;

const Article = styled.article`
  width: 70vw;
  display: inline-flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  border: 1px solid darkgray;
  border-radius: 5px;
  margin: 10px;
  background-color: #ffffe8;
  h2 {
    font-size: 20px;
    font-weight: bold;
  }
  h2::before {
    counter-increment: sec-counter;
    content: counter(sec-counter) '. ';
  }
`;

const ItemContent = styled.article`
  background-color: white;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 25px;
  border: 1px solid darkgray;
  padding: 10px;
  border-radius: 5px;
  h3 {
    font-weight: bold;
  }
`;

const MiniItemContentsWrapper = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, auto));
  gap: 10px;
  ${ItemContent} {
    align-items: center;
    justify-items: center;
  }
`;

const Item = styled.div`
  display: flex;
`;

const Code = styled.code`
  box-sizing: border-box;
  background-color: #eee;
  border-radius: 3px;
  font-family: courier, monospace;
  font-size: 0.9rem;
`;

const CodeRows = styled.pre`
  background-color: #eee;
  padding: 15px;
  border-radius: 8px;
  gap: 25px;
  overflow: auto;
  width: 100%;
  code: {
    background-color: #eee;
  }
`;

const ColorContainer = styled.div`
  display: inline-block;
  width: 100%;
  line-height: 100px;
  vertical-align: center;
  text-align: center;
  background-color: ${props => props.color};
  color: white;
`;

const design = () => {
  return (
    <Main>
      <Aside>
        <h1>스타일 가이드</h1>
        <ul>
          <li>
            <a href='#frame-name-container'>Frame Name</a>
          </li>
          <li>
            <a href='#buttons-container'>Buttons</a>
          </li>
          <li>
            <a href='#image-container'>Images</a>
          </li>
          <li>
            <a href='#icons-container'>Icons</a>
          </li>
          <li>
            <a href='#colors-container'>Colors</a>
          </li>
        </ul>
      </Aside>
      <Section>
        <Article id='frame-name-container'>
          <h2>frame name</h2>
          <FrameName>소비사 프로덕트</FrameName>
          <FrameName>Apple 2022 맥북 에어</FrameName>
          <FrameName>Sobisa! some product Sobisa! some product </FrameName>
        </Article>
        <Article id='buttons-container'>
          <h2>buttons</h2>
          <MiniItemContentsWrapper>
            <ItemContent>
              <h3>ModalButton</h3>
              <Item>
                <ModalButton>STATIC</ModalButton>
                <ModalSubButton>STATIC</ModalSubButton>
              </Item>
              <CodeRows>
                <Code>
                  &lt;ModalButton&gt;STATIC&lt;/ModalButton&gt;
                  &lt;ModalSubButton&gt;STATIC&lt;/ModalSubButton&gt;
                </Code>
              </CodeRows>
            </ItemContent>
            <ItemContent>
              <h3>ModalLongButton</h3>
              <Item>
                <ModalLongButton>STATIC</ModalLongButton>
              </Item>
              <CodeRows>
                <Code>&lt;ModalLongButton&gt;STATIC&lt;/ModalLongButton&gt;</Code>
              </CodeRows>
            </ItemContent>
            <ItemContent>
              <h3>BottomButton</h3>
              <Item>
                <BottomButton>STATIC</BottomButton>
              </Item>
              <CodeRows>
                <Code>&lt;BottomButton&gt;STATIC&lt;/BottomButton&gt;</Code>
              </CodeRows>
            </ItemContent>
            <ItemContent>
              <h3>ShareButton</h3>
              <Item>
                <ShareButton>STATIC</ShareButton>
              </Item>
              <CodeRows>
                <Code>&lt;ShareButton&gt;STATIC&lt;/ShareButton&gt;</Code>
              </CodeRows>
            </ItemContent>
          </MiniItemContentsWrapper>
        </Article>
        <Article id='image-container'>
          <h2>Image</h2>
          <MiniItemContentsWrapper>
            <ItemContent>
              <h3>MainImage</h3>
              <Item>
                <MainImage />
              </Item>
              <CodeRows>
                <Code>&lt;MainImage/&gt;</Code>
              </CodeRows>
            </ItemContent>
            <ItemContent>
              <h3>LineImage</h3>
              <Item>
                <LineImage />
              </Item>
              <CodeRows>
                <Code>&lt;LineImage/&gt;</Code>
              </CodeRows>
            </ItemContent>
            <ItemContent>
              <h3>ItemImage</h3>
              <Item>
                <ItemImage />
              </Item>
              <CodeRows>
                <Code>&lt;ItemImage/&gt;</Code>
              </CodeRows>
            </ItemContent>
          </MiniItemContentsWrapper>
        </Article>
        <Article id='icons-container'>
          <h2>Icon</h2>
          <MiniItemContentsWrapper>
            <ItemContent>
              <h3>NoticeIcon</h3>
              <Item>
                <NoticeIcon />
              </Item>
            </ItemContent>
            <ItemContent>
              <h3>TopIcon</h3>
              <Item>
                <TopIcon />
              </Item>
            </ItemContent>
            <ItemContent>
              <h3>LoadingIcon</h3>
              <LoadingIcon />
            </ItemContent>
            <ItemContent>
              <h3>FaceBookIcon</h3>
              <FaceBookIcon />
            </ItemContent>
            <ItemContent>
              <h3>TopIcon</h3>
              <TwitterIcon />
            </ItemContent>
            <ItemContent>
              <h3>KakaoIcon</h3>
              <KakaoIcon />
            </ItemContent>
            <ItemContent>
              <h3>LinkIcon</h3>
              <LinkIcon />
            </ItemContent>
          </MiniItemContentsWrapper>
        </Article>
        <Article id='colors-container'>
          <h2>Colors</h2>
          <MiniItemContentsWrapper>
            <ColorContainer color={theme.colors.mainColor}>mainColor</ColorContainer>
            <ColorContainer color={theme.colors.subColor}>subColor</ColorContainer>
            {Object.keys(theme.colors.gray).map(value => {
              return (
                <ColorContainer
                  key={`gray_${value}`}
                  color={theme.colors.gray[Number(value) as GrayRange]}
                >
                  gray[{value}]
                </ColorContainer>
              );
            })}
          </MiniItemContentsWrapper>
        </Article>
        <Article>
          <h2>Input</h2>
          <SearchInput />
        </Article>
      </Section>
    </Main>
  );
};

export default design;
