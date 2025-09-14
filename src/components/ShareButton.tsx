'use client';

interface ShareButtonProps {
  title: string;
  url: string;
  className?: string;
  children: React.ReactNode;
}

export function ShareButton({ title, url, className, children }: ShareButtonProps) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url
        });
      } catch (error) {
        // User cancelled sharing or sharing failed
        console.log('Sharing cancelled or failed');
      }
    } else {
      // Fallback - copy to clipboard
      try {
        await navigator.clipboard.writeText(url);
        alert('链接已复制到剪贴板！');
      } catch (error) {
        // Fallback fallback - show alert with URL
        alert(`请复制链接: ${url}`);
      }
    }
  };

  return (
    <button
      onClick={handleShare}
      className={className}
    >
      {children}
    </button>
  );
}