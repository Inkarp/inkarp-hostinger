import React, { useState, useEffect, useRef } from 'react';
import { X, Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const SearchDialog = ({ isOpen, onClose, onSearch, onSelect }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // NEW: focus ref for reliable focus-on-open (better than plain autoFocus in portals)
  const inputRef = useRef(null);
  useEffect(() => {
    if (isOpen) {
      // next frame ensures the element is mounted
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [isOpen]);

  // Handle search input change
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length > 1) {
      setIsLoading(true);
      if (onSearch) {
        onSearch(query, (results) => {
          setSearchResults(results);
          setIsLoading(false);
        });
      }
    } else {
      setSearchResults([]);
    }
  };

  // Close dialog when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.search-dialog-content')) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  // Close dialog when pressing Escape
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') onClose();
    };
    if (isOpen) document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Helper: build href with sensible fallbacks
  const buildRoute = (result, product) => {
    const verticalSlug = (result.vertical || 'unknown-vertical')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    // try product-provided slug, then derive from name
    const fallbackProductSlug = (product.parentProduct?.slug) ||
      product.slug ||
      (product.name || '')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');

    const productSlug = product.productSlug || fallbackProductSlug;
    const modelSlug = product.modelSlug || (product.parentProduct ? product.slug : '');

    let to = `/verticals/${verticalSlug}`;
    if (productSlug) to += `/${productSlug}`;
    if (modelSlug) to += `/${modelSlug}`;
    return to;
  };

  // NEW: when a product is clicked, close dialog (and optionally notify parent)
  const handleProductClick = (e, to, product) => {
    // Let the <Link> navigate; also close immediately
    onClose?.();
    onSelect?.(product); // optional: if parent wants to react (e.g., close sidebar)
    // no preventDefault — we want the Link navigation to proceed
  };

  return (
    <div className="fixed inset-0 z-50 bg-white/90 flex flex-col items-center justify-start p-6">
      <div className="search-dialog-content w-full max-w-3xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-[MaxOT] text-[#E63946] font-bold">Search for the Products</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-black transition-colors">
            <X size={28} />
          </button>
        </div>

        {/* Search Input */}
        <div className="relative mb-6">
          <div className="relative">
            <input
              ref={inputRef}                 // 👈 focus managed by useEffect
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Start typing to search..."
              className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 ring-red-400 placeholder:text-black placeholder:font-medium"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* Search Results */}
        <div className="mt-4 max-h-[300px] overflow-y-auto">
          {isLoading ? (
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-500"></div>
            </div>
          ) : searchResults.length > 0 ? (
            <div className="space-y-4">
              {searchResults.map((result, index) => (
                <div key={index} className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-lg text-gray-900">{result.title}</h3>

                  {Array.isArray(result.products) && result.products.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {result.products.map((product, i) => {
                        const toRoute = buildRoute(result, product);
                        return (
                          <Link
                            key={`${toRoute}-${i}`}
                            to={toRoute}
                            onClick={(e) => handleProductClick(e, toRoute, product)}  // 👈 close + navigate
                            className="block px-3 py-2 bg-[#F5F5F5] hover:bg-red-200 text-red-700 rounded-lg shadow text-sm font-medium transition-colors min-w-[180px] text-center flex flex-col items-center"
                          >
                            {product.image && (
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-16 h-16 object-contain mb-1 rounded"
                              />
                            )}
                            <span className="font-semibold text-gray-900">{product.name}</span>
                            {product.principal && (
                              <span className="text-xs text-gray-500">{product.principal}</span>
                            )}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : searchQuery.length > 2 ? (
            <div className="text-center py-8 text-gray-500">
              No results found for "{searchQuery}"
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default SearchDialog;
