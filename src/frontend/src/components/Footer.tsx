import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'madhumita-moon-restaurant';

  return (
    <footer className="bg-navy-dark border-t border-golden/20 py-8 px-4">
      <div className="container mx-auto">
        <div className="text-center space-y-4">
          <div className="text-cream/60 text-sm">
            © {currentYear} Madhumita Moon Restaurant. All rights reserved.
          </div>
          
          <div className="flex items-center justify-center gap-2 text-cream/60 text-sm">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-crimson fill-crimson animate-pulse" />
            <span>using</span>
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-golden hover:text-golden-light transition-colors font-medium"
            >
              caffeine.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
