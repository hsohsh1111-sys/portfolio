document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle'); const nav = document.querySelector('.nav');
  toggle?.addEventListener('click', () => { const open = nav.classList.toggle('open'); toggle.setAttribute('aria-expanded', String(open)); });
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
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
