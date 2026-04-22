const rateContainer = document.querySelector('.rate-container');
const footer = document.querySelector('footer');
let rateValue;
document.addEventListener('click', function (event) {
  const isRateBtn = event.target.closest('.rate');

  if (isRateBtn) {
    const value = isRateBtn.dataset.rate;
    if (rateValue === value) {
      isRateBtn.classList.remove('active');
      rateValue = null;
      return;
    }

    document
      .querySelectorAll('.rate')
      .forEach((r) => r.classList.remove('active'));
    isRateBtn.classList.add('active');
    rateValue = value;
  }

  const isSubmitBtn = event.target.closest('.submit-btn');
  if (isSubmitBtn) {
    if (!rateValue) {
      alert('Please select the number!');
      return;
    }

    rateContainer.classList.add('hidden');

    // rateContainer.classList.add('hidden');
    const modal = document.createElement('div');
    modal.classList.add(
      'modal',
      'opacity-0',
      'transition-transform',
      'scale-95',
      'max-w-82.5',
      'py-8',
      'px-5',
      'flex',
      'flex-col',
      'items-center',
      'gap-5',
      'rounded-2xl',
      'bg-[#222831]'
    );
    modal.innerHTML = `
    <div class="ilutration">
      <img
      src="./images/illustration-thank-you.svg"
      alt="card, bill, orange dot floating around a phone"
      />
    </div>

    <div class="logo rounded-full bg-[#292f38] shadow-[0_0_2px_rgba(0,0,0,0.7)] py-2 px-5 text-[#eb7e35] mb-1"
    >
        You selected ${rateValue} out of 5
    </div>

    <!-- title -->
    <h1 class="text-2xl">Thank you</h1>

    <!-- text -->
    <p class="text-xs text-[#949aa3] text-center">
      Thank you! We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
    </p>   
    `;

    document.body.insertBefore(modal, footer);

    setTimeout(() => {
      modal.classList.add('scale-100', 'opacity-100');
    }, 10);
  }
});
