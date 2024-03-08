import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import "./Main.css";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Merhaba, Durmuş</span>
              </p>
              <p>Bugün nasıl yardımcı olabilirim?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Bitki bakımıyla ilgili ipuçları</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Ögün Planı</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Pişirme trendleri</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Nasıl yazılımcı olabilirsin</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Buraya bir istem girin"
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input ? (
                <img onClick={() => onSent()} src={assets.send_icon} />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">
            Gemini, kişiler de dahil olmak üzere farklı konular hakkında yanlış
            bilgiler gösterebilir. Bu nedenle, verdiği yanıtların doğru olup
            olmadığını kontrol edin.{" "}
            <span>Gizliliğiniz ve Gemini Uygulamaları</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
