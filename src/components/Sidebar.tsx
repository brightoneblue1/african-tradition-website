import { Book, Leaf, Heart, Users, Home, ChevronRight } from 'lucide-react';

interface SidebarProps {
  currentArticle: string;
  onArticleSelect: (articleId: string) => void;
  isOpen: boolean;
}

const categories = [
  {
    name: 'Overview',
    icon: Home,
    articles: [
      { id: 'home', title: 'Home' },
      { id: 'kikuyu-people', title: 'Kikuyu People' }
    ]
  },
  {
    name: 'Traditional Medicine',
    icon: Heart,
    articles: [
      { id: 'traditional-medicine', title: 'Overview' },
      { id: 'healing-practices', title: 'Healing Practices' },
      { id: 'spiritual-healing', title: 'Spiritual Healing' }
    ]
  },
  {
    name: 'Medicinal Trees & Plants',
    icon: Leaf,
    articles: [
      { id: 'mugumo-tree', title: 'Mugumo Tree (Sacred Fig)' },
      { id: 'muthiga-tree', title: 'Mũthiga Tree' },
      { id: 'mukeu-tree', title: 'Mũkeu Tree' },
      { id: 'muiri-tree', title: 'Mũiri Tree' },
      { id: 'muthithi-plant', title: 'Mũthithi Plant' }
    ]
  },
  {
    name: 'Cultural Practices',
    icon: Users,
    articles: [
      { id: 'age-sets', title: 'Age Sets (Riika)' },
      { id: 'marriage-customs', title: 'Marriage Customs' }
    ]
  },
  {
    name: 'Ancient Knowledge',
    icon: Book,
    articles: [
      { id: 'oral-traditions', title: 'Oral Traditions' },
      { id: 'astronomy', title: 'Traditional Astronomy' }
    ]
  }
];

export function Sidebar({ currentArticle, onArticleSelect, isOpen }: SidebarProps) {
  if (!isOpen) return null;

  return (
    <aside className="w-64 bg-[#f8f9fa] border-r border-gray-200 fixed h-[calc(100vh-56px)] overflow-y-auto">
      <nav className="p-4">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <div key={category.name} className="mb-6">
              <div className="flex items-center gap-2 mb-2 text-gray-700">
                <Icon className="w-4 h-4" />
                <h3 className="font-semibold text-sm uppercase tracking-wide">{category.name}</h3>
              </div>
              <ul className="space-y-1">
                {category.articles.map((article) => (
                  <li key={article.id}>
                    <button
                      onClick={() => onArticleSelect(article.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center gap-2 ${
                        currentArticle === article.id
                          ? 'bg-[#2c3e50] text-white'
                          : 'hover:bg-gray-200 text-gray-700'
                      }`}
                    >
                      <ChevronRight className="w-3 h-3" />
                      {article.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
