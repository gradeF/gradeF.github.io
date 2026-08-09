// Mermaid init (only runs meaningfully if mermaid.js was loaded on this page)
if (window.mermaid) {
  mermaid.initialize({
    startOnLoad: true,
    theme: 'dark',
    themeVariables: {
      background: '#131822',
      primaryColor: '#1b2233',
      primaryTextColor: '#e8ebf1',
      primaryBorderColor: '#8b5cf6',
      lineColor: '#22d3ee',
      secondaryColor: '#131822',
      tertiaryColor: '#131822',
      fontFamily: 'Inter, Noto Sans KR, sans-serif',
      fontSize: '14px'
    },
    flowchart: { curve: 'basis' }
  });
}

// mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
}

// scroll reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-in').forEach(el => io.observe(el));

// PDF export: print current page (browser "저장/PDF" 옵션으로 저장 가능)
const printBtn = document.getElementById('printPdfBtn');
if (printBtn) printBtn.addEventListener('click', () => window.print());

// 스크롤 전에 인쇄해도 모든 섹션이 보이도록 강제 표시
window.addEventListener('beforeprint', () => {
  document.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
});
