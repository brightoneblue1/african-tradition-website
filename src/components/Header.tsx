import { Search, Menu } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  onSearch: (query: string) => void;
  onToggleSidebar: () => void;
}

export function Header({ onSearch, onToggleSidebar }: HeaderProps) {
  const [searchInput, setSearchInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchInput);
  };

  return (
    <header className="bg-[#2c3e50] text-white shadow-md sticky top-0 z-50">
      <div className="px-4 py-3">
        <div className="flex items-center gap-4">
          <button 
            onClick={onToggleSidebar}
            className="p-2 hover:bg-[#34495e] rounded-lg transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
          
          <h1 className="text-2xl font-bold">AfriPedia</h1>
          <p className="text-sm text-gray-300 hidden md:block">Encyclopedia of African Traditions</p>
          
          <form onSubmit={handleSubmit} className="ml-auto flex items-center gap-2 bg-white rounded-lg px-3 py-2 w-full max-w-md">
            <Search className="w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search traditions, plants, practices..."
              className="flex-1 outline-none text-gray-900 text-sm"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </form>
        </div>
      </div>
    </header>
  );
}
