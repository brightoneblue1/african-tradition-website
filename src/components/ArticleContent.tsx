import { Calendar, User } from 'lucide-react';

interface Article {
  title: string;
  subtitle?: string;
  content: string;
  lastUpdated?: string;
  contributors?: string[];
  image?: string;
  sections?: { heading: string; content: string }[];
}

interface ArticleContentProps {
  article: Article;
}

export function ArticleContent({ article }: ArticleContentProps) {
  return (
    <article className="max-w-4xl mx-auto p-8">
      {/* Article Header */}
      <div className="border-b border-gray-300 pb-4 mb-6">
        <h1 className="text-4xl mb-2">{article.title}</h1>
        {article.subtitle && (
          <p className="text-lg text-gray-600 italic">{article.subtitle}</p>
        )}
        
        <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
          {article.lastUpdated && (
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>Last updated: {article.lastUpdated}</span>
            </div>
          )}
          {article.contributors && (
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>{article.contributors.length} contributors</span>
            </div>
          )}
        </div>
      </div>

      {/* Article Image */}
      {article.image && (
        <div className="mb-8">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full max-h-96 object-cover rounded-lg shadow-md"
          />
        </div>
      )}

      {/* Main Content */}
      <div className="prose prose-lg max-w-none">
        <div className="text-gray-800 leading-relaxed whitespace-pre-line mb-8">
          {article.content}
        </div>

        {/* Additional Sections */}
        {article.sections && article.sections.map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl border-b border-gray-300 pb-2 mb-4">
              {section.heading}
            </h2>
            <div className="text-gray-800 leading-relaxed whitespace-pre-line">
              {section.content}
            </div>
          </div>
        ))}
      </div>

      {/* Article Footer */}
      <div className="mt-12 pt-6 border-t border-gray-200">
        <div className="bg-[#f8f9fa] p-4 rounded-lg">
          <p className="text-sm text-gray-600">
            This article is part of the AfriPedia project to preserve and share African traditional knowledge.
            Content is based on oral traditions, historical records, and cultural practices of the Kikuyu people.
          </p>
        </div>
      </div>
    </article>
  );
}
