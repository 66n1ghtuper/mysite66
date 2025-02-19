import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';
import { Link } from 'react-router-dom'; 
import './style.css';

function RotatedModel({ modelPath }) {
  const { scene } = useGLTF(modelPath);
  scene.rotation.y = Math.PI / 2; // Повернуть модель на 90 градусов вокруг оси Y
  return <primitive object={scene} />;
}

function Sayk() {
  return (
    <div className="cont">
      <Canvas className="canvas" camera={{ position: [0, 0, 15] }} shadows>
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} intensity={1} castShadow />
        <Environment preset="city" />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2.1}
          minPolarAngle={Math.PI / 2.1}
        />
        <RotatedModel modelPath="./models/00.glb" />
      </Canvas>
      <div className="sid">
        <h1>Добро пожаловать на мой сайт-портфолио !</h1>
        <p>
        Я фронтенд разработчик, создающий интерактивные и функциональные веб-сайты. Если вы хотите <Link to="/sled" className="link">заказать сайт</Link> или проект, я буду рад сотрудничеству и сделаю это бесплатно! Для постоянного сотрудничества или оффера свяжитесь со мной через бота — нажмите на кнопку самолетика в правом верхнем углу, чтобы перейти в <a href="https://t.me/nightuper_bot" className="link" target="_blank" rel="noopener noreferrer">Telegram</a>. Я открыт для новых идей и совместных проектов. Спасибо за посещение моего сайта!
        </p>
        <button className="button"></button>
      </div>
    </div>
  );
}

export default Sayk;
