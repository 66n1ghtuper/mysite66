import React from 'react';
import './sled.css';

function Sled() {
  return (
    <div className="container">
      <div className="image-container">
        <img src="./88.png" alt="Описание изображения" className="my-image" />
      </div>
      <div className="sidebar">
        <h2>
      Вы можете связаться со мной через <a href="https://t.me/nightuper_bot" className="link" target="_blank" rel="noopener noreferrer">Telegram</a>, и мы обсудим ваши требования.Также я могу работать над вашим проектом, используя макет из Figma или создать визуальный дизайн самостоятельно, исходя из ваших предпочтений. В конце работы вы можете поблагодарить скинув донат,принимаю донаты на карту или  в виде USDT на кошелек.


        </h2>
        <button className="contact-button"></button>
      </div>
    </div>
  );
}

export default Sled;
