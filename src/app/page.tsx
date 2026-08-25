'use client'

import { ArrowRight, Check, Eye, MapPin, Users } from 'lucide-react'

const appStoreUrl = 'https://apps.apple.com/kr/app/%EB%9F%B0%EB%A7%88%EC%BC%93/id6779493827'
const appStoreIcon = 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/apple/default.svg'
const playStoreIcon = 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/google-play/default.svg'
const screenshots = [
  'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/c4/c0/9c/c4c09cc3-1063-c639-1849-d8fd4c87ef2c/IMG_9881.png/320x480bb.jpg',
  'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/6d/2e/a4/6d2ea4de-bde1-deee-d63b-618e1c68e430/IMG_9882.png/320x480bb.jpg',
  'https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/98/6e/56/986e5620-342e-2487-47bd-112e06cc4a2d/IMG_9883.png/320x480bb.jpg',
]

export default function Page() {
  return <main>
    <header className="site-header"><a className="brand" href="#top">RUNMARKET<span>●</span></a><nav><a href="#how">사용 방법</a><a href="#features">기능</a><a href="#download">앱 다운로드</a></nav><a className="header-cta" href={appStoreUrl}>App Store <ArrowRight size={15} /></a></header>

    <section id="top" className="editorial-hero"><div className="hero-copy"><p className="eyebrow">RUN WITH YOUR PEOPLE</p><h1>달리는 사람과<br /><em>함께 달리는 방법.</em></h1><p className="hero-lede">런마켓은 러너와 관전자 모두를 위한 러닝 동행 앱입니다. 같은 그룹 코드로 연결하고, 달리는 순간을 지도 위에서 함께하세요.</p><div className="hero-downloads"><a className="store-button" href={appStoreUrl} aria-label="App Store에서 런마켓 다운로드"><img src={appStoreIcon} alt="Apple 로고" /><span><small>Download on the</small><strong>App Store</strong></span></a><div className="store-button store-button-disabled" tabIndex={0} aria-label="Google Play 준비중"><img src={playStoreIcon} alt="Google Play 로고" /><span><small>GET IT ON</small><strong>Google Play</strong></span><b className="store-tooltip" role="status">준비중</b></div></div></div><div className="hero-visual"><div className="route-line" /><div className="phone phone-back"><img src={screenshots[1]} alt="런마켓 실시간 러닝 화면" /></div><div className="phone phone-front"><img src={screenshots[0]} alt="런마켓 앱 화면" /></div><div className="float-card"><MapPin size={16} /><div><b>RUNNING NOW</b><span>친구가 달리고 있어요</span></div></div></div></section>

    <section className="intro"><p className="eyebrow">A SMALL PROMISE</p><h2>혼자 달리지만,<br /><span>혼자일 필요는 없으니까.</span></h2><p>마라톤을 준비하는 러너, 안전하게 지켜보고 싶은 가족, 같은 목표를 가진 친구들. 런마켓은 각자의 자리에서 함께 달릴 수 있도록 만들었습니다.</p></section>

    <section id="how" className="how-section"><div className="section-heading"><p className="eyebrow">HOW IT WORKS</p><h2>사용 방법</h2><p>러너와 관전자가 같은 그룹 코드로 연결되면 준비가 끝납니다.</p></div><div className="mode-grid"><article className="mode-card runner"><div className="mode-icon"><MapPin size={23} /></div><p className="step">01 · RUNNER</p><h3>러너로 달리기</h3><p>달리기 모드를 선택하고, 서로 정한 그룹 코드를 입력하세요. 내 위치가 지도에 표시되고 관전자에게 공유됩니다.</p><div className="mode-rule"><Check size={15} /> 내 위치가 표시돼요</div></article><div className="connector"><span>같은 그룹 코드</span><ArrowRight size={20} /></div><article className="mode-card watcher"><div className="mode-icon"><Eye size={23} /></div><p className="step">02 · WATCHER</p><h3>관전하기</h3><p>관전하기를 선택하고 같은 그룹 코드를 입력하세요. 러너의 위치만 보며 안전하게 응원할 수 있습니다.</p><div className="mode-rule"><Check size={15} /> 내 위치는 표시되지 않아요</div></article></div><div className="code-note"><Users size={18} /><span>러너와 관전자 모두 동일한 그룹 코드를 입력해야 연결됩니다.</span></div></section>

    <section id="features" className="feature-section"><div className="feature-copy"><p className="eyebrow">MADE FOR THE MOMENT</p><h2>지금 달리는 사람을<br /><em>지도에서 만나보세요.</em></h2><p>러닝 중인 러너의 위치를 실시간으로 확인하고, 같은 그룹 안에서 응원하세요. 달리기가 끝나면 나의 기록도 다시 살펴볼 수 있습니다.</p><a className="text-link" href={appStoreUrl}>앱에서 더 알아보기 <ArrowRight size={16} /></a></div><div className="map-panel"><div className="map-top"><span><i /> LIVE RUN</span><b>그룹 RUN-042</b></div><div className="map-graphic"><div className="map-road road-a" /><div className="map-road road-b" /><div className="map-road road-c" /><div className="map-pin pin-a">●</div><div className="map-label"><b>러너</b><span>현재 위치 · 5:42/km</span></div></div></div></section>

    <section id="download" className="download"><div><p className="eyebrow">RUNMARKET APP</p><h2>다음 러닝은<br />함께 시작해요.</h2><p>공식 스토어에서 런마켓을 무료로 다운로드하세요.</p></div><div className="download-actions"><a className="store-button" href={appStoreUrl} aria-label="App Store에서 런마켓 다운로드"><img src={appStoreIcon} alt="Apple 로고" /><span><small>Download on the</small><strong>App Store</strong></span></a><div className="store-button store-button-disabled" tabIndex={0} aria-label="Google Play 준비중"><img src={playStoreIcon} alt="Google Play 로고" /><span><small>GET IT ON</small><strong>Google Play</strong></span><b className="store-tooltip" role="status">준비중</b></div></div></section>
    <footer><a className="brand" href="#top">RUNMARKET<span>●</span></a><span>© 2026 RUNMARKET · HYUNGGYU KO</span><a href="https://www.runmarket.cc">runmarket.cc</a></footer>
  </main>
}
