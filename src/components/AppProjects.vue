/* AppProjects.css - Estilos futuristas para carousel de proyectos */

/* Contenedor principal - mantiene tus estilos originales */
.futuristic-projects-section {
  padding: 40px 0;
  min-height: calc(100vh - 200px);
}

.futuristic-projects-container {
  max-width: 1200px;
  margin: 60px auto 100px;
  padding: 30px;
  background: rgba(26, 26, 46, 0.6);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid rgba(0, 255, 255, 0.2);
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3),
              0 0 20px rgba(0, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.futuristic-projects-container:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.4),
              0 0 30px rgba(0, 255, 255, 0.15);
}

.futuristic-section-title {
  color: #00d4aa;
  text-shadow: 0 0 10px rgba(0, 212, 170, 0.5),
               0 0 20px rgba(0, 212, 170, 0.3);
  text-align: center;
  margin-bottom: 40px;
  font-size: 2rem;
  font-weight: 600;
  padding-bottom: 15px;
  border-bottom: 2px solid rgba(0, 255, 255, 0.3);
}

/* === CAROUSEL CONTAINER === */
.futuristic-carousel-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 15px;
}

.futuristic-carousel-wrapper {
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 100%;
}

/* === PROJECT SLIDES === */
.futuristic-project-slide {
  min-width: 100%;
  opacity: 0;
  visibility: hidden;
  transform: translateX(50px);
  transition: all 0.5s ease;
  cursor: pointer;
  background: rgba(26, 26, 46, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(0, 255, 255, 0.15);
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3),
              0 0 15px rgba(0, 212, 170, 0.1);
  position: relative;
  overflow: hidden;
}

.futuristic-project-slide.futuristic-active {
  opacity: 1;
  visibility: visible;
  transform: translateX(0);
}

.futuristic-project-slide::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #00d4aa, transparent);
  animation: projectGlow 4s linear infinite;
}

@keyframes projectGlow {
  0% { left: -100%; }
  100% { left: 100%; }
}

.futuristic-project-slide:hover {
  transform: translateY(-5px);
  border-color: rgba(0, 255, 255, 0.4);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4),
              0 0 25px rgba(0, 212, 170, 0.2);
}

/* === PROJECT IMAGES === */
.futuristic-project-images {
  margin-bottom: 20px;
}

.futuristic-image-container {
  position: relative;
  width: 100%;
  height: 300px;
  border-radius: 12px;
  overflow: hidden;
  border: 2px solid rgba(0, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.futuristic-image-container:hover {
  border-color: rgba(0, 255, 255, 0.5);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
}

.futuristic-images-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.futuristic-project-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.5s ease;
  border-radius: 10px;
}

.futuristic-project-image.active {
  opacity: 1;
}

/* === IMAGE INDICATORS === */
.futuristic-image-indicators {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
  z-index: 10;
}

.futuristic-image-indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.3s ease;
}

.futuristic-image-indicator.active,
.futuristic-image-indicator:hover {
  background: #00d4aa;
  box-shadow: 0 0 10px rgba(0, 212, 170, 0.5);
}

/* === OVERLAY === */
.futuristic-iframe-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}

.futuristic-image-container:hover .futuristic-iframe-overlay {
  opacity: 1;
}

.futuristic-visit-link {
  background: linear-gradient(135deg,
              rgba(0, 212, 170, 0.9),
              rgba(0, 255, 255, 0.9));
  color: white;
  padding: 12px 25px;
  border-radius: 25px;
  font-weight: 600;
  border: 2px solid rgba(0, 255, 255, 0.3);
  transition: all 0.3s ease;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  box-shadow: 0 5px 15px rgba(0, 212, 170, 0.4);
  cursor: pointer;
}

.futuristic-visit-link:hover {
  background: linear-gradient(135deg,
              rgba(0, 255, 255, 0.9),
              rgba(0, 212, 170, 0.9));
  transform: scale(1.05);
  box-shadow: 0 8px 25px rgba(0, 255, 255, 0.5);
  border-color: #00d4aa;
}

/* === CAROUSEL NAVIGATION === */
.futuristic-navigation {
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  pointer-events: none;
  z-index: 10;
  transform: translateY(-50%);
}

.futuristic-nav-button {
  background: rgba(0, 212, 170, 0.2);
  border: 2px solid rgba(0, 212, 170, 0.4);
  color: #00d4aa;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  pointer-events: auto;
}

.futuristic-nav-button:hover {
  background: rgba(0, 212, 170, 0.3);
  border-color: rgba(0, 212, 170, 0.6);
  transform: scale(1.1);
  box-shadow: 0 0 15px rgba(0, 212, 170, 0.4);
}

.futuristic-nav-button:active {
  transform: scale(0.95);
}

/* === CAROUSEL INDICATORS === */
.futuristic-indicators {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
}

.futuristic-indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
}

.futuristic-indicator.futuristic-active,
.futuristic-indicator:hover {
  background: #00d4aa;
  box-shadow: 0 0 10px rgba(0, 212, 170, 0.5);
  transform: scale(1.2);
}

/* === PROJECT INFO === */
.futuristic-project-info {
  text-align: left;
}

.futuristic-project-title {
  color: #00d4aa;
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 15px;
  text-shadow: 0 0 10px rgba(0, 212, 170, 0.5);
  transition: all 0.3s ease;
}

.futuristic-project-slide:hover .futuristic-project-title {
  color: #00ffff;
  text-shadow: 0 0 15px rgba(0, 255, 255, 0.7);
}

.futuristic-project-description {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 20px;
  text-shadow: 0 0 3px rgba(255, 255, 255, 0.1);
}

.futuristic-project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 15px;
}

.futuristic-tech-tag {
  background: rgba(0, 212, 170, 0.2);
  border: 1px solid rgba(0, 212, 170, 0.4);
  color: #00d4aa;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  text-shadow: 0 0 5px rgba(0, 212, 170, 0.3);
}

.futuristic-tech-tag:hover {
  background: rgba(0, 212, 170, 0.3);
  border-color: rgba(0, 212, 170, 0.6);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 212, 170, 0.3);
}

/* === RESPONSIVE DESIGN === */
@media (max-width: 1024px) {
  .futuristic-projects-container {
    margin: 40px auto 80px;
    padding: 25px;
  }

  .futuristic-image-container {
    height: 280px;
  }
}

@media (max-width: 768px) {
  .futuristic-projects-container {
    padding: 20px;
    margin: 30px auto 60px;
  }

  .futuristic-section-title {
    font-size: 1.6rem;
  }

  .futuristic-project-slide {
    padding: 15px;
  }

  .futuristic-image-container {
    height: 250px;
  }

  .futuristic-project-title {
    font-size: 1.4rem;
  }

  .futuristic-project-description {
    font-size: 1rem;
  }

  .futuristic-nav-button {
    width: 40px;
    height: 40px;
    font-size: 16px;
  }

  .futuristic-tech-tag {
    font-size: 0.8rem;
    padding: 6px 12px;
  }
}

@media (max-width: 480px) {
  .futuristic-projects-container {
    margin: 20px auto 40px;
    padding: 15px;
  }

  .futuristic-image-container {
    height: 200px;
  }

  .futuristic-project-slide {
    padding: 12px;
  }

  .futuristic-project-title {
    font-size: 1.2rem;
  }

  .futuristic-project-description {
    font-size: 0.9rem;
  }

  .futuristic-visit-link {
    padding: 10px 20px;
    font-size: 0.9rem;
  }

  .futuristic-nav-button {
    width: 35px;
    height: 35px;
    font-size: 14px;
  }

  .futuristic-tech-tag {
    font-size: 0.75rem;
    padding: 5px 10px;
  }

  .futuristic-navigation {
    padding: 0 10px;
  }
}

/* === ANIMACIONES DE ENTRADA === */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.futuristic-project-slide {
  animation: fadeInUp 0.6s ease forwards;
}

/* Animación suave para cambio de slides */
.futuristic-project-slide:not(.futuristic-active) {
  animation: none;
}

/* === EFECTOS ADICIONALES === */
.futuristic-project-slide.futuristic-active {
  animation: slideInActive 0.5s ease forwards;
}

@keyframes slideInActive {
  from {
    opacity: 0;
    transform: translateX(30px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}

/* Efecto de pulso en indicadores activos */
.futuristic-indicator.futuristic-active {
  animation: indicatorPulse 2s ease-in-out infinite;
}

@keyframes indicatorPulse {
  0%, 100% { 
    box-shadow: 0 0 10px rgba(0, 212, 170, 0.5); 
  }
  50% { 
    box-shadow: 0 0 20px rgba(0, 212, 170, 0.8); 
  }
}

/* Mejora en la interacción táctil */
@media (hover: none) and (pointer: coarse) {
  .futuristic-project-slide:active {
    transform: scale(0.98);
  }
  
  .futuristic-nav-button:active {
    transform: scale(0.9);
  }
}
