export function renderHero() {
  return `
    <div class="relative h-[500px] bg-gray-600 flex items-center">
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-2xl text-white">
          <h2 class="text-5xl font-bold mb-4">Find Your Perfect Vehicle</h2>
          <p class="text-xl mb-8">15,000+ vehicles available</p>
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
              <select class="p-2 border rounded">
                <option>All Makes</option>
              </select>
              <select class="p-2 border rounded">
                <option>All Models</option>
              </select>
              <select class="p-2 border rounded">
                <option>Price Range</option>
              </select>
              <button class="bg-primary text-black py-2 px-4 rounded font-semibold hover:bg-yellow-400">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}