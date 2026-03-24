/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const footerContainer = css`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
  border-top: 1px solid #ddd;
`;
const textStyle = css`
  font-size: 14px;
  color: #666;
`;

export default function Footer() {
  return (
    <footer css={footerContainer}>
      <p css={textStyle}>관리용 프로젝트. All right reserved.</p>
    </footer>
  )
}
