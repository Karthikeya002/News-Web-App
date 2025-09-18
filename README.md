
# 📰 Infinite News Scroll

Infinite News Scroll is a modern, responsive web application that delivers the latest news headlines with infinite scrolling functionality. Users can browse news by category and enjoy a seamless reading experience.

## 🚀 Features

- **Infinite Scrolling**: Automatically loads more news articles as you scroll.
- **Category Filtering**: Browse news by categories (General, Business, Entertainment, Health, Science, Sports, Technology).
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices.
- **Clean UI**: Modern card-based layout with hover effects.
- **Real-time News**: Fetches the latest headlines using [NewsAPI](https://newsapi.org).

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **API**: [NewsAPI](https://newsapi.org)
- **Icons**: Font Awesome
- **Deployment**: Compatible with any static hosting service

## 📦 Setup Instructions

### Prerequisites

- A modern web browser
- A NewsAPI key (free tier available)

### Installation

1. Clone or download the project files.
2. Obtain a free API key from [NewsAPI](https://newsapi.org/register).
3. Replace the `API_KEY` variable in `script.js` with your actual key:

```javascript
const API_KEY = 'your_actual_api_key_here';


- Open index.html in your browser or deploy to a static web server.
📁 File Structure
news-web-app/
├── index.html
├── styles.css
├── script.js
└── README.md


📖 Usage
- Open the application in your browser.
- Scroll down to load more articles automatically.
- Use the category dropdown to filter news by topic.
- Click "Read more" on any article to view the full story on the source website.
🔌 API Integration
This app uses the NewsAPI to fetch news data.
Endpoint Used: /v2/top-headlines
Example API Call:
fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${currentCategory}&page=${currentPage}&apiKey=${API_KEY}`)


🎨 Customization
- Modify the color scheme using CSS variables.
- Add new categories by updating the HTML dropdown.
- Adjust the number of articles per page in the API request.
- Change the country parameter to fetch news from different regions.
🌐 Browser Support
- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
⚠️ Limitations
- Free NewsAPI tier has limited requests per day.
- Some articles may require a subscription to read the full content.
- Image availability depends on the news source.
🤝 Contributing
Feel free to fork this project and submit pull requests for any improvements or new features!
📄 License
This project is open source and available under the MIT License.
🙏 Acknowledgments
- NewsAPI for providing news data
- Font Awesome for icons
- Placeholder.com for default images
🧰 Support
If you encounter any issues:
- Ensure your API key is valid and correctly inserted.
- Confirm you have an active internet connection.
- Verify that your browser supports JavaScript.
For more help, refer to the NewsAPI documentation.

Let me know if you want me to generate a sample `index.html`, `script.js`, or `styles.css` to go with this. I can help you build the whole thing out!


