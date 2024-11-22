import './style.css';
import { renderHeader } from './components/Header.js';
import { renderHero } from './components/Hero.js';
import { renderVehicleGrid } from './components/VehicleGrid.js';
import { renderStats } from './components/Stats.js';
import { renderNews } from './components/News.js';

document.querySelector('#app').innerHTML = `
  <div class="min-h-screen bg-gray-100">
    ${renderHeader()}
    ${renderHero()}
    ${renderVehicleGrid()}
    ${renderStats()}
    ${renderNews()}
  </div>
`;

// Mobile menu toggle functionality
function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  const isHidden = mobileMenu.classList.contains('hidden');
  mobileMenu.classList.toggle('hidden', !isHidden);
  mobileMenu.classList.toggle('flex', isHidden);
}

document.getElementById('mobile-menu-button').addEventListener('click', toggleMobileMenu);