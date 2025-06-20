const steps = document.querySelectorAll('.step');
const formSteps = document.querySelectorAll('.form-step');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
let currentStep = 0;

function showStep(step) {
  formSteps.forEach((f, index) => f.classList.toggle('active', index === step));
  steps.forEach((s, index) => s.classList.toggle('active', index === step));
  prevBtn.style.display = step === 0 ? 'none' : 'inline-block';
  nextBtn.textContent = step === formSteps.length - 1 ? 'Submit' : 'Next';
}

nextBtn.addEventListener('click', () => {
  if (currentStep < formSteps.length - 1) {
    currentStep++;
    showStep(currentStep);
  } else {
    alert('Form submitted!');
  }
});

prevBtn.addEventListener('click', () => {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
  }
});

steps.forEach(step => {
  step.addEventListener('click', () => {
    const stepIndex = parseInt(step.dataset.step);
    currentStep = stepIndex;
    showStep(currentStep);
  });
});

showStep(currentStep);
