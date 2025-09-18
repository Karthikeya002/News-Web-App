const API_KEY = 'bf199850df1c4aefa8a526f620bb98e5'; // Replace with your NewsAPI key
let currentPage = 1;
let currentCategory = 'general';
let isLoading = false;
let totalResults = 0;
let loadedResults = 0;

const newsContainer = document.getElementById('news-container');
const loadingElement = document.getElementById('loading');
const categorySelect = document.getElementById('category-select');

document.addEventListener('DOMContentLoaded', () => {
    loadNews();
    
    window.addEventListener('scroll', handleScroll);
    
    categorySelect.addEventListener('change', (e) => {
        currentCategory = e.target.value;
        resetNews();
        loadNews();
    });
});

function handleScroll() {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    
    if (scrollTop + clientHeight >= scrollHeight - 100 && !isLoading && loadedResults < totalResults) {
        loadNews();
    }
}

function resetNews() {
    currentPage = 1;
    newsContainer.innerHTML = '';
    loadedResults = 0;
}

async function loadNews() {
    if (isLoading) return;
    
    isLoading = true;
    showLoading();
    
    try {
        const response = await fetch(
            `https://newsapi.org/v2/top-headlines?country=us&category=${currentCategory}&page=${currentPage}&pageSize=10&apiKey=${API_KEY}`
        );
        
        if (!response.ok) {
            throw new Error('Failed to fetch news');
        }
        
        const data = await response.json();
        
        if (data.status === 'ok') {
            totalResults = data.totalResults;
            displayNews(data.articles);
            currentPage++;
            loadedResults += data.articles.length;
        }
    } catch (error) {
        console.error('Error fetching news:', error);
        showError('Failed to load news. Please try again later.');
    } finally {
        isLoading = false;
        hideLoading();
    }
}

function displayNews(articles) {
    if (!articles || articles.length === 0) {
        showError('No more news articles available.');
        return;
    }
    
    articles.forEach(article => {
        const newsCard = document.createElement('article');
        newsCard.className = 'news-card';
        
        const imageUrl = article.urlToImage || 'https://via.placeholder.com/300x200?text=No+Image';
        const publishedDate = new Date(article.publishedAt).toLocaleDateString();
        
        newsCard.innerHTML = `
            <img src="${imageUrl}" alt="${article.title}" class="news-image">
            <div class="news-content">
                <h3 class="news-title">${article.title}</h3>
                <p class="news-description">${article.description || 'No description available'}</p>
                <div class="news-meta">
                    <span>${article.source.name}</span>
                    <span>${publishedDate}</span>
                </div>
                <a href="${article.url}" target="_blank" class="read-more">Read more</a>
            </div>
        `;
        
        newsContainer.appendChild(newsCard);
    });
}

function showLoading() {
    loadingElement.style.display = 'flex';
}

function hideLoading() {
    loadingElement.style.display = 'none';
}

function showError(message) {
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.textContent = message;
    newsContainer.appendChild(errorElement);
}