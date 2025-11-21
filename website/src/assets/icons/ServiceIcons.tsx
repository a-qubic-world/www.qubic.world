import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
}

// QNS Domain Service Icon - Stacked cards/rectangles
export const QNSIcon: React.FC<IconProps> = ({ size = 60, className }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="qns-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#ff0080', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#7c3aed', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <circle cx="30" cy="30" r="22" fill="none" stroke="url(#qns-grad)" strokeWidth="2.5" opacity="0.4" />
      {/* Top card - rotated */}
      <rect x="15" y="15" width="20" height="12" rx="2" fill="#ff0080" opacity="0.8" transform="rotate(15 25 21)" />
      {/* Middle card */}
      <rect x="18" y="24" width="24" height="12" rx="2" fill="url(#qns-grad)" opacity="1" />
      {/* Bottom card - rotated */}
      <rect x="20" y="33" width="20" height="12" rx="2" fill="#7c3aed" opacity="0.8" transform="rotate(-15 30 39)" />
    </svg>
  );
};

// NFT Gallery Icon - Frames
export const NFTIcon: React.FC<IconProps> = ({ size = 60, className }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="nft-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#ff0080', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#7c3aed', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <circle cx="30" cy="30" r="22" fill="none" stroke="url(#nft-grad)" strokeWidth="2.5" opacity="0.4" />
      {/* Top frame - rotated */}
      <rect x="16" y="14" width="16" height="16" rx="2" fill="none" stroke="#ff0080" strokeWidth="2" opacity="0.8" transform="rotate(15 24 22)" />
      {/* Middle frame */}
      <rect x="22" y="22" width="16" height="16" rx="2" fill="none" stroke="url(#nft-grad)" strokeWidth="2.5" opacity="1" />
      {/* Bottom frame - rotated */}
      <rect x="28" y="28" width="16" height="16" rx="2" fill="none" stroke="#7c3aed" strokeWidth="2" opacity="0.8" transform="rotate(-15 36 36)" />
    </svg>
  );
};

// Statistics Icon - Vertical bars (chart)
export const StatsIcon: React.FC<IconProps> = ({ size = 60, className }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="stats-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#ff0080', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#7c3aed', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <circle cx="30" cy="30" r="22" fill="none" stroke="url(#stats-grad)" strokeWidth="2.5" opacity="0.4" />
      {/* Left bar - short, rotated */}
      <rect x="16" y="28" width="6" height="14" rx="2" fill="#ff0080" opacity="0.8" transform="rotate(15 19 35)" />
      {/* Middle bar - tall */}
      <rect x="27" y="20" width="6" height="22" rx="2" fill="url(#stats-grad)" opacity="1" />
      {/* Right bar - medium, rotated */}
      <rect x="38" y="24" width="6" height="18" rx="2" fill="#7c3aed" opacity="0.8" transform="rotate(-15 41 33)" />
    </svg>
  );
};

// Developer/Docs Icon - Code brackets
export const DevIcon: React.FC<IconProps> = ({ size = 60, className }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="dev-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#ff0080', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#7c3aed', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <circle cx="30" cy="30" r="22" fill="none" stroke="url(#dev-grad)" strokeWidth="2.5" opacity="0.4" />
      {/* Left bracket */}
      <path d="M 20 18 L 16 22 L 16 38 L 20 42" stroke="#ff0080" strokeWidth="3" fill="none" opacity="0.8" transform="rotate(15 18 30)" />
      {/* Middle line */}
      <line x1="28" y1="20" x2="32" y2="40" stroke="url(#dev-grad)" strokeWidth="3" opacity="1" />
      {/* Right bracket */}
      <path d="M 40 18 L 44 22 L 44 38 L 40 42" stroke="#7c3aed" strokeWidth="3" fill="none" opacity="0.8" transform="rotate(-15 42 30)" />
    </svg>
  );
};
