<template>
  <div class="carousel-container mt-6 pt-6">
    <!-- Navigation Arrows -->
    <button 
      @click="previousSlide"
      class="button is-dark is-rounded carousel-nav carousel-nav-left"
    >
      <span class="nav-arrow">&lt;</span>
    </button>
    
    <button 
      @click="nextSlide"
      class="button is-dark is-rounded carousel-nav carousel-nav-right"
    >
      <span class="nav-arrow">&gt;</span>
    </button>

    <!-- Carousel Container -->
    <div class="hero-body">
      <div class="container">
        <div class="carousel-wrapper">
          <div 
            class="carousel-track"
            :style="{ transform: `translateX(${-currentIndex * 320}px)` }"
          >
            <div
              v-for="(slide, index) in slides"
              :key="index"
              class="carousel-slide"
              :class="getSlideClasses(index)"
            >
              <!-- Rugged Card -->
              <div class="rugged-card has-background-warning-light">
                <!-- Image Container -->
                <div class="card-image-container">
                  <img 
                    :src="slide.image" 
                    :alt="slide.title"
                    class="card-image"
                  />
                </div>
                
                <!-- Text Content -->
                <div class="card-title">
                  <h3 class="title is-4 c-noir has-text-weight-bold">
                    {{ slide.title }}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Discover Button -->
        <div class="has-text-centered discover-button">
          <NuxtLink to="/reservation" class="button is-primary is-medium has-text-weight-semibold">
            Découvrir la culture
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const currentIndex = ref(0)

const slides = [
  {
    title: 'MAROC',
    image: '/images/maroco.avif',
  },
  {
    title: 'MEXIQUE ANCIEN',
    image: '/images/hands-clayering.avif',
  },
  {
    title: 'ÉGYPTE ANCIENNE',
    image: '/images/egypte.avif',
  },
  {
    title: 'GRÈCE ANTIQUE',
    image: '/images/grece.avif',
  },
  {
    title: 'CHINE ANCIENNE',
    image: '/images/china.avif',
  }
]

const rotations = [-8, 3, -5, 7, -3]

const getSlideClasses = (index) => {
  const rotation = rotations[index % rotations.length]
  const isActive = index === currentIndex.value
  const isAdjacent = Math.abs(index - currentIndex.value) === 1
  
  return {
    'is-active': isActive,
    'is-adjacent': isAdjacent,
    'is-inactive': !isActive && !isAdjacent,
    [`rotate-${Math.abs(rotation)}`]: true,
    [`rotate-${rotation < 0 ? 'negative' : 'positive'}`]: true
  }
}

const nextSlide = () => {
  // For 5 slides showing 3 at a time, max currentIndex should be 2
  const maxIndex = slides.length - 3
  if (currentIndex.value < maxIndex) {
    currentIndex.value = currentIndex.value + 1
  }
}

const previousSlide = () => {
  // Allow going into negative indices with minimum of -(slides.length - 2)
  const minIndex = -(slides.length - 3)
  if (currentIndex.value > minIndex) {
    currentIndex.value = currentIndex.value - 1
  }
}

const goToSlide = (index) => {
  const minIndex = -(slides.length - 2)
  const maxIndex = slides.length - 3
  
  // Clamp the index to the valid range
  if (index >= minIndex && index <= maxIndex) {
    currentIndex.value = index
  }
}
</script>

<style scoped>
.carousel-container {
  position: relative;
  overflow: hidden;
}

.carousel-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 20;
  width: 3rem;
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.5) !important;
  border: none;
  transition: all 0.3s ease;
}

.carousel-nav:hover {
  background-color: rgba(0, 0, 0, 0.7) !important;
  transform: translateY(-50%) scale(1.1);
}

.carousel-nav-left {
  left: 2rem;
}

.carousel-nav-right {
  right: 2rem;
}

.nav-arrow {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
}

.carousel-wrapper {
  position: relative;
  width: 100%;
  max-width: 1200px;
  height: 400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-track {
  display: flex;
  transition: transform 0.7s ease-in-out;
}

.carousel-slide {
  flex-shrink: 0;
  width: 320px;
  height: 400px;
  margin: 0 1rem;
  transition: all 0.7s ease-in-out;
}

.carousel-slide.is-active {
  transform: scale(1.1);
  z-index: 10;
}

.carousel-slide.is-adjacent {
  transform: scale(1);
  opacity: 0.9;
}

.carousel-slide.is-inactive {
  transform: scale(0.95);
  opacity: 0.8;
}

.rugged-card {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  clip-path: polygon(
    5% 0%, 
    95% 2%, 
    98% 8%, 
    100% 15%, 
    99% 25%, 
    100% 35%, 
    98% 45%, 
    100% 55%, 
    99% 65%, 
    100% 75%, 
    98% 85%, 
    95% 92%, 
    90% 98%, 
    80% 100%, 
    70% 99%, 
    60% 100%, 
    50% 98%, 
    40% 100%, 
    30% 99%, 
    20% 100%, 
    10% 98%, 
    5% 95%, 
    2% 90%, 
    0% 80%, 
    1% 70%, 
    0% 60%, 
    2% 50%, 
    0% 40%, 
    1% 30%, 
    0% 20%, 
    2% 10%, 
    5% 5%
  );
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
}

.rugged-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
}

.card-image-container {
  width: 100%;
  height: 280px;
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-title {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
}

.discover-button {
  margin-top: 3rem;
}

.dots-container {
  margin-top: 2rem;
}

.dots-wrapper {
  display: inline-flex;
  gap: 0.5rem;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot.is-active {
  background-color: white;
  transform: scale(1.2);
}

.dot:hover {
  background-color: rgba(255, 255, 255, 0.8);
}

/* Rotation classes */
.rotate-3.rotate-positive {
  transform: rotate(3deg);
}

.rotate-3.rotate-negative {
  transform: rotate(-3deg);
}

.rotate-5.rotate-positive {
  transform: rotate(5deg);
}

.rotate-5.rotate-negative {
  transform: rotate(-5deg);
}

.rotate-7.rotate-positive {
  transform: rotate(7deg);
}

.rotate-7.rotate-negative {
  transform: rotate(-7deg);
}

.rotate-8.rotate-positive {
  transform: rotate(8deg);
}

.rotate-8.rotate-negative {
  transform: rotate(-8deg);
}

/* Responsive design */
@media screen and (max-width: 768px) {
  .carousel-slide {
    width: 280px;
    height: 320px;
  }
  
  .carousel-nav-left {
    left: 1rem;
  }
  
  .carousel-nav-right {
    right: 1rem;
  }
  
  .card-image-container {
    height: 220px;
  }
}

@media screen and (max-width: 480px) {
  .carousel-slide {
    width: 240px;
    height: 280px;
  }
  
  .card-image-container {
    height: 180px;
  }
  
  .carousel-nav {
    width: 2.5rem;
    height: 2.5rem;
  }
  
  .nav-arrow {
    font-size: 1.2rem;
  }
}
</style>
