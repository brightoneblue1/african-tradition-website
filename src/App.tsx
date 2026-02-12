import { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { ArticleContent } from './components/ArticleContent';
import { articles } from './data/articles';

export default function App() {
  const [currentArticle, setCurrentArticle] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      // Simple search - find first matching article
      const matchingArticle = Object.keys(articles).find(key => 
        articles[key].title.toLowerCase().includes(query.toLowerCase()) ||
        articles[key].content.toLowerCase().includes(query.toLowerCase())
      );
      if (matchingArticle) {
        setCurrentArticle(matchingArticle);
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        onSearch={handleSearch} 
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      
      <div className="flex">
        <Sidebar 
          currentArticle={currentArticle}
          onArticleSelect={setCurrentArticle}
          isOpen={isSidebarOpen}
        />
        
        <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
          <ArticleContent article={articles[currentArticle]} />
        </main>
      </div>
    </div>
  );
}
