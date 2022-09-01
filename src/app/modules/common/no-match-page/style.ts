import { css } from "styled-components/macro";

export const noMatchContainerCss = css`
  height: 100%;
  padding: 50px;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  min-height: calc(100vh - 64px - 8rem - 350px);
  background: linear-gradient(180deg, #ffffff 0%, #f2f7fd 100%);
`;

export const oppsCss = css`
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.71;
  letter-spacing: 0.1px;
  color: #000;
`;

export const fourOfourCss = css`
  font-family: Inter, sans-serif;
  font-size: 120px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 2.15px;
  color: #6061e5;
`;

export const notFoundText = css`
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.71;
  letter-spacing: 1.25px;
  text-align: center;
  color: #000;
  margin-bottom: 50px;
`;

export const backToHomeCss = css`
  height: 4.4rem;
  width: 20.2rem;
  border-radius: 26px;
  cursor: pointer;
  color: #fff;
  background: #6061e5;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.9rem;
`;

export const backToHomeText = css`
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: 0.15px;
  color: white;
`;
