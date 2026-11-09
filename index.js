document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle'); const nav = document.querySelector('.nav');
  toggle?.addEventListener('click', () => { const open = nav.classList.toggle('open'); toggle.setAttribute('aria-expanded', String(open)); });
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));

  const en = {
    'meta[name="description"]': 'Hwang Sang Ok | Powder Coating R&D and Technical Service Portfolio',
    'title': 'Hwang Sang Ok | Powder Coating R&D',
    '.menu-toggle': { ariaLabel: 'Open menu' }, '.nav': { ariaLabel: 'Main navigation' },
    '.nav a': ['Profile', 'Credentials', 'Expertise', 'Selected Work', 'Contact'],
    '.hero .eyebrow': 'POWDER COATING R&D · TECHNICAL SERVICE',
    '.hero h1': 'Turning material potential<br>into <em>trusted products.</em>',
    '.hero-text': 'With extensive experience in powder coating R&D and technical service, I turn the potential of new formulations into reliable results on the production floor.',
    '.hero-actions .button-primary': 'SELECTED RESULTS <span>↘</span>', '.hero-actions .text-link': 'CONTACT <span>→</span>',
    '.hero-photo img': { alt: 'Pigments in a range of powder coating colors' },
    '.hero-mark': { ariaLabel: 'More than 20 years of R&D and technical service experience' },
    '.about .section-label': '<span>01</span> PROFILE', '.about h2': 'A powder coating<br><em>specialist</em> close to the process',
    '.portrait img': { alt: 'Portrait of Hwang Sang Ok' },
    '.about-copy > p': [
      'Hwang Sang Ok is an R&D professional with end-to-end experience in powder coating development, qualification, and production scale-up across home appliances, automotive, heavy equipment, and agricultural machinery.',
      'I translate new technologies and customer requirements into measurable properties, clear quality criteria, and practical process guidance to build lasting product competitiveness.'
    ],
    '.fact-grid strong': ['EXPERIENCE', 'SPECIALTY', 'EDUCATION', 'LICENSES'],
    '.fact-grid div:nth-child(1) span': 'KCC Central R&D<br>AKZONOBEL Powder Coatings',
    '.fact-grid div:nth-child(2) span': 'Powder coating development<br>&amp; technical service',
    '.fact-grid div:nth-child(3) span': 'Environmental Chemical Engineering',
    '.fact-grid div:nth-child(4) span': 'Engineer licenses: Chemical, Gas &amp; Water Quality',
    '#certification .section-label': '<span>02</span> CREDENTIALS',
    '#certification .section-heading h2': 'Experience built<br>on <em>trust.</em>',
    '#certification .section-heading > p': 'Review my employment certificate for a record of more than 20 years of hands-on experience.',
    '.pdf-placeholder h3': 'Employment Certificate', '.pdf-placeholder p': 'The original certificate is in Korean. Download the PDF to view it.',
    '.cert-item h4': ['Professional Experience', 'Professional Licenses', 'International Projects'],
    '.cert-item p': [
      'More than 20 years of R&D experience at KCC, AKZONOBEL, and HANDS CORPORATION.',
      'National technical licenses in chemical engineering, gas, and water quality management.',
      'Project experience with Japanese water treatment companies and HD Hyundai.'
    ],
    '.pdf-download .button': '📥 DOWNLOAD EMPLOYMENT CERTIFICATE (KOREAN PDF)',
    '#expertise .section-label': '<span>03</span> EXPERTISE',
    '#expertise .section-heading h2': 'Deep in development.<br><em>Grounded in production.</em>',
    '#expertise .section-heading > p': 'I manage the full path from product design and qualification to stable performance on the customer production line.',
    '.capability h3': ['New Product Development', 'Formulation &amp; Materials', 'Qualification &amp; Testing', 'Technical Service', 'AI &amp; Data Analytics'],
    '.capability p': [
      'Develop and commercialize heat-dissipating, heat-shielding, easy-cleaning, bonding metallic, and high-weatherability powder coatings.',
      'Formulation expertise across epoxy, hybrid, polyester, polyurethane, and acrylic systems, with experience applying SMP, bio-based, and silicone resins.',
      'Plan and execute standards-based testing and qualification, including Qualicoat Class 2, GMW14664 Type A, WOM, QUV, and ISO 12944.',
      'Resolve customer quality issues through defect analysis, line audits, product launches, and production process stabilization.',
      'Completed an eight-month generative AI platform development program. Applied Python for data analysis and visualization, and learned server integration to build and deploy portfolio projects.'
    ],
    '.process-gallery figure img': { alt: ['Powder coating application on a heavy equipment frame', 'Powder coating technical presentation', 'Chromate quality comparison', 'Coating test equipment'] },
    '#work .section-label': '<span>04</span> SELECTED WORK', '.work-head h2': 'Performance proven<br>in <em>three case studies.</em>',
    '.work-head > p': 'Development cases validated in demanding industrial environments.',
    '.project-visual img': { alt: ['Hino truck chassis frame coating process', 'HD Hyundai Infracore heavy equipment', 'Trunk lid cylinder application'] },
    '.project-featured .project-content > p:not(.project-type)': 'Applied high-Tg, TGIC-free polyester to achieve 1,500 hours of corrosion resistance and sag-free performance at an edge film thickness of 50 µm.',
    '.project-featured li': ['Clamping force test: above 80°C', 'Corner film thickness: approx. 50 µm'],
    '.project:nth-child(2) .project-content > p:not(.project-type)': 'Qualified heavy equipment products with high-weatherability, TGIC-free IPA polyester, delivering consistent color and appearance.',
    '.project:nth-child(2) li': ['WOM 2,000 h: ΔE &lt; 4.0', 'DOI &gt; 40 · ΔE &lt; 2.0'],
    '.project:nth-child(3) .project-content > p:not(.project-type)': 'Applied phenolic epoxy and an NIR oven process to achieve the required appearance under a fast-cure schedule.',
    '.project:nth-child(3) li': ['Upper: 205°C × 45 sec', 'Lower: 135°C × 45 sec'],
    '.principles .section-label': '<span>05</span> PRINCIPLES', '.principle-intro': 'Four principles guide the way<br>I approach every new challenge.',
    '.contact-left .eyebrow': 'LET’S START A CONVERSATION', '.contact h2': 'Ready for the next<br><em>opportunity.</em>',
    '.contact-sub': 'Please get in touch about a role or share your feedback on my portfolio.',
    '[name="subject"]': { value: 'Portfolio inquiry' }, '[name="from_name"]': { value: 'Hwang Sang Ok Portfolio' },
    '#formName': { placeholder: 'First name' }, '#formLastName': { placeholder: 'Last name' },
    '#formEmail': { placeholder: 'Email address' }, '#formTitle': { placeholder: 'Subject' },
    '#formMessage': { placeholder: 'Write your message' }, '.btn-label': 'SEND MESSAGE',
    '.contact-mini:nth-child(2)': '<span>📱</span> +82 10 2678 2889'
  };
  const languageButton = document.querySelector('.language-toggle');
  const originals = new Map();
  Object.keys(en).forEach(selector => originals.set(selector, [...document.querySelectorAll(selector)].map(node => {
    if (selector.startsWith('meta[')) return { content: node.content };
    if (selector === 'title') return { text: node.textContent };
    if (node instanceof HTMLInputElement || node instanceof HTMLTextAreaElement) return { placeholder: node.placeholder, ...(node.type === 'hidden' ? { value: node.value } : {}) };
    if (node.tagName === 'IMG' || ['.menu-toggle', '.nav', '.hero-mark'].includes(selector)) return { alt: node.getAttribute('alt'), ariaLabel: node.getAttribute('aria-label') };
    return { html: node.innerHTML };
  })));
  const applyLanguage = language => {
    const english = language === 'en';
    Object.entries(en).forEach(([selector, translation]) => document.querySelectorAll(selector).forEach((node, index) => {
      const value = english ? translation : originals.get(selector)?.[index];
      if (value == null) return;
      if (Array.isArray(value)) { if (value[index] != null) node.innerHTML = value[index]; }
      else if (typeof value === 'object') Object.entries(value).forEach(([key, item]) => {
        if (key === 'ariaLabel') node.setAttribute('aria-label', item ?? '');
        else if (key === 'alt') { const alt = Array.isArray(item) ? item[index] : item; if (alt == null) node.removeAttribute('alt'); else node.setAttribute('alt', alt); }
        else if (key === 'placeholder') node.placeholder = item;
        else if (key === 'value') node.value = item;
        else if (key === 'content') node.content = item;
        else if (key === 'text') node.textContent = item;
        else if (key === 'html') node.innerHTML = item;
      });
      else node.innerHTML = value;
    }));
    document.documentElement.lang = english ? 'en' : 'ko';
    languageButton?.classList.toggle('is-english', english);
    languageButton?.setAttribute('aria-pressed', String(english));
    languageButton?.setAttribute('aria-label', english ? '한국어로 전환' : 'Switch language to English');
    languageButton?.querySelector('.language-current').textContent = english ? 'EN' : 'KR';
    languageButton?.querySelector('.language-next').textContent = english ? 'KR' : 'EN';
    try { localStorage.setItem('portfolio-language', language); } catch (_) { /* Storage may be disabled. */ }
  };
  let savedLanguage = 'ko';
  try { savedLanguage = localStorage.getItem('portfolio-language') || 'ko'; } catch (_) { /* Korean is the default. */ }
  applyLanguage(savedLanguage === 'en' ? 'en' : 'ko');
  languageButton?.addEventListener('click', () => applyLanguage(document.documentElement.lang === 'ko' ? 'en' : 'ko'));
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: .12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  const form = document.getElementById('contactForm');
  const resultEl = document.getElementById('formResult');
  const submitBtn = form?.querySelector('.form-submit');
  const btnLabel = submitBtn?.querySelector('.btn-label');

  form?.addEventListener('submit', async (e) => {
    e.preventDefault();

    const accessKey = form.querySelector('[name="access_key"]')?.value;
    if (!accessKey || accessKey === 'YOUR_WEB3FORMS_ACCESS_KEY') {
      resultEl.textContent = 'Web3Forms access key가 설정되지 않았습니다. index.html의 access_key 값을 확인해주세요.';
      resultEl.className = 'form-result error';
      return;
    }

    submitBtn.disabled = true;
    const originalLabel = btnLabel.textContent;
    btnLabel.textContent = '전송 중...';
    resultEl.textContent = '';
    resultEl.className = 'form-result';

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await response.json();

      if (data.success) {
        resultEl.textContent = '문의가 성공적으로 전송되었습니다. 감사합니다!';
        resultEl.className = 'form-result success';
        form.reset();
      } else {
        resultEl.textContent = data.message || '전송에 실패했습니다. 잠시 후 다시 시도해주세요.';
        resultEl.className = 'form-result error';
      }
    } catch (error) {
      resultEl.textContent = '네트워크 오류로 전송에 실패했습니다. 잠시 후 다시 시도해주세요.';
      resultEl.className = 'form-result error';
    } finally {
      submitBtn.disabled = false;
      btnLabel.textContent = originalLabel;
    }
  });
});
