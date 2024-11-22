import { newsArticles } from '../data/news.js';

export function renderNews() {
  return `
    <div class="container mx-auto px-4 py-16">
      <div class="mb-8">
        <h3 class="text-3xl font-bold mb-2">News & Reviews</h3>
        <p class="text-gray-600">Stay updated with the latest automotive news and expert reviews</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        ${newsArticles.map(article => `
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="${article.image}" alt="${article.title}" class="w-full h-48 object-cover">
            <div class="p-6">
              <h4 class="text-xl font-semibold mb-2">${article.title}</h4>
              <p class="text-gray-600 mb-4">${article.description}</p>
              <button class="text-primary font-semibold hover:text-yellow-400">
                Read More →
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}