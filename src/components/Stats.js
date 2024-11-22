export function renderStats() {
  return `
    <div class="bg-gray-900 text-white py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h4 class="text-4xl font-bold text-primary">15,000+</h4>
            <p class="mt-2">Vehicles Available</p>
          </div>
          <div>
            <h4 class="text-4xl font-bold text-primary">1500+</h4>
            <p class="mt-2">Happy Customers</p>
          </div>
          <div>
            <h4 class="text-4xl font-bold text-primary">500+</h4>
            <p class="mt-2">Dealerships</p>
          </div>
          <div>
            <h4 class="text-4xl font-bold text-primary">24/7</h4>
            <p class="mt-2">Customer Support</p>
          </div>
        </div>
      </div>
    </div>
  `;
}