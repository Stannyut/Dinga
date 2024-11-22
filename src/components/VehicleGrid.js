import { vehicles } from '../data/vehicles.js';

export function renderVehicleGrid() {
  return `
    <div class="container mx-auto px-4 py-16">
      <h3 class="text-3xl font-bold mb-8">Featured Vehicles</h3>
      <div class="car-grid">
        ${vehicles.map(vehicle => `
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="${vehicle.image}" alt="${vehicle.name}" class="w-full h-48 object-cover">
            <div class="p-4">
              <h4 class="text-xl font-semibold mb-2">${vehicle.name}</h4>
              <p class="text-gray-600">Starting from</p>
              <p class="text-2xl font-bold text-primary">$${vehicle.price}</p>
              <button class="mt-4 w-full bg-primary text-black py-2 rounded font-semibold hover:bg-yellow-400">
                View Details
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}