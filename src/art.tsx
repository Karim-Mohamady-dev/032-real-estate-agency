export default function HeroArt({ alt }: { alt: string }) {
  return (
    <svg viewBox="0 0 640 420" role="img" aria-label={alt} className="h-auto w-full" preserveAspectRatio="xMidYMid slice">
      <rect width="640" height="420" fill="#EAF2EC" />
      <circle cx="520" cy="80" r="44" fill="#E8C86A" />
      <rect x="40" y="180" width="110" height="240" fill="#1E4D3B" />
      <rect x="170" y="120" width="130" height="300" fill="#2E6B4F" />
      <rect x="320" y="200" width="100" height="220" fill="#1E4D3B" />
      <rect x="440" y="90" width="150" height="330" fill="#3A7D5C" />
      <g fill="#FAF6EF"><rect x="60" y="200" width="18" height="18" /><rect x="92" y="200" width="18" height="18" /><rect x="124" y="200" width="18" height="18" /><rect x="60" y="240" width="18" height="18" /><rect x="92" y="240" width="18" height="18" /><rect x="190" y="140" width="20" height="20" /><rect x="226" y="140" width="20" height="20" /><rect x="262" y="140" width="20" height="20" /><rect x="190" y="180" width="20" height="20" /><rect x="226" y="180" width="20" height="20" /><rect x="340" y="220" width="18" height="18" /><rect x="372" y="220" width="18" height="18" /><rect x="470" y="120" width="20" height="20" /><rect x="506" y="120" width="20" height="20" /><rect x="542" y="120" width="20" height="20" /><rect x="470" y="160" width="20" height="20" /><rect x="506" y="160" width="20" height="20" /></g>
      <rect y="380" width="640" height="40" fill="#C9D8CC" />
      <rect x="60" y="340" width="40" height="40" rx="4" fill="#8A5A2B" />
      <rect x="500" y="330" width="60" height="50" rx="4" fill="#8A5A2B" />
    </svg>
  )
}
