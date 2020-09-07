import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <div className="home_button">
            <div style={{ color: "blue", display: "inline" }}>법규</div>서비스
          </div>
          <div className="top_buttons">
            <div className="top_button">
              <div style={{ color: "blue", display: "inline" }}>법령</div>검색
            </div>
            <div className="top_button">
              <div style={{ color: "blue", display: "inline" }}>토지규제</div>
              정보열람
            </div>
          </div>
        </nav>
        <div className="main_title">법령검색</div>
      </header>
      <div className="container">
        <div>
          <div>법률검색</div>
          <div>조례검색</div>
        </div>
        <div>
          <div>검색창</div>
          <div>목록</div>
        </div>
      </div>
      <footer>
        <span
          style={{
            marginLeft: "20vw",
            outline: "2px solid grey",
            padding: "0.5vw 2vw",
            backgroundColor: "grey",
            fontWeight: "bold"
          }}
        >
          LOGO
        </span>
        <span
          style={{
            marginLeft: "5vw",
            fontSize: "1vh",
            color: "grey"
          }}
        >
          주소, 사업자등록번호, copyright, 주소, 사업자등록번호, copyright
        </span>
      </footer>
    </div>
  );
}
