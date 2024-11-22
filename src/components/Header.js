export function renderHeader() {
  return `
    <header class="bg-white shadow-md relative">
      <nav class="container mx-auto px-4 py-6">
        <div class="flex justify-between items-center">
          <h1 class="text-2xl font-bold">Madinga</h1>
          
          <div class="hidden md:flex space-x-6">
            <a href="#" class="hover:text-primary">Home</a>
            <a href="#" class="hover:text-primary">Inventory</a>
            <a href="#" class="hover:text-primary">Services</a>
            <a href="#" class="hover:text-primary">Contact</a>
          </div>

          <button id="mobile-menu-button" class="md:hidden p-2" aria-label="Menu">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>

          <button class="hidden md:block bg-primary text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-400">
            Sign In
          </button>
        </div>

        <div id="mobile-menu" class="hidden md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50">
          <div class="flex flex-col space-y-4 px-4 py-6">
            <a href="#" class="hover:text-primary">Home</a>
            <a href="#" class="hover:text-primary">Inventory</a>
            <a href="#" class="hover:text-primary">Services</a>
            <a href="#" class="hover:text-primary">Contact</a>
            <button class="bg-primary text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-400 w-full">
              Sign In
            </button>
          </div>
        </div>
      </nav>
    </header>
  `;
}