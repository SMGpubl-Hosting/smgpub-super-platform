// ================================
// Marketplace Tracks
// ================================
const trackList = document.getElementById('trackList');

const tracks = [
  { title: 'Track 1', src: 'audio/track1.mp3' },
  { title: 'Track 2', src: 'audio/track2.mp3' },
  { title: 'Track 3', src: 'audio/track3.mp3' }
];

tracks.forEach(track => {
  const div = document.createElement('div');
  div.className = 'track';
  div.innerHTML = `
    <h3>${track.title}</h3>
    <audio controls>
      <source src="${track.src}" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
  `;
  trackList.appendChild(div);
});

// ================================
// Signup Form
// ================================
const signupForm = document.getElementById('signupForm');
signupForm.addEventListener('submit', e => {
  e.preventDefault();
  const email = signupForm.email.value;
  const password = signupForm.password.value;
  alert(`Signed up with ${email}`);
  signupForm.reset();
});

// ================================
// Licensing Form
// ================================
const licensingForm = document.getElementById('licensingForm');
licensingForm.addEventListener('submit', e => {
  e.preventDefault();
  const name = licensingForm.name.value;
  const email = licensingForm.email.value;
  const track = licensingForm.track.value;
  alert(`License requested for ${track} by ${name} (${email})`);
  licensingForm.reset();
});

// ================================
// Royalty Calculator
// ================================
const trackSelect = document.getElementById('trackSelect');
const streamsInput = document.getElementById('streamsInput');
const calculateBtn = document.getElementById('calculateBtn');
const royaltyOutput = document.getElementById('royaltyOutput');

// Populate dropdown
tracks.forEach((track, i) => {
  const option = document.createElement('option');
  option.value = i;
  option.text = track.title;
  trackSelect.appendChild(option);
});

calculateBtn.addEventListener('click', () => {
  const rate = 0.005; // example per-stream rate
  const streams = parseInt(streamsInput.value);
  const royalty = (streams * rate).toFixed(2);
  royaltyOutput.textContent = `Estimated royalty: $${royalty}`;
});

// ================================
// Split Calculator
// ================================
const contributorsInput = document.getElementById('contributors');
const totalRoyaltyInput = document.getElementById('totalRoyalty');
const calculateSplitBtn = document.getElementById('calculateSplitBtn');
const splitOutput = document.getElementById('splitOutput');
const splitInputsDiv = document.getElementById('splitInputs');

// Generate split % inputs dynamically
function renderSplitInputs() {
  splitInputsDiv.innerHTML = '';
  const count = parseInt(contributorsInput.value);
  for (let i = 0; i < count; i++) {
    const input = document.createElement('input');
    input.type = 'number';
    input.placeholder = `Contributor ${i+1} %`;
    input.value = Math.floor(100/count);
    splitInputsDiv.appendChild(input);
    splitInputsDiv.appendChild(document.createElement('br'));
  }
}
contributorsInput.addEventListener('change', renderSplitInputs);
renderSplitInputs();

calculateSplitBtn.addEventListener('click', () => {
  const total = parseFloat(totalRoyaltyInput.value);
  const inputs = splitInputsDiv.querySelectorAll('input');
  let result = 'Splits:\n';
  inputs.forEach((inp, idx) => {
    const pct = parseFloat(inp.value);
    result += `Contributor ${idx+1}: $${((pct/100)*total).toFixed(2)}\n`;
  });
  splitOutput.textContent = result;
});

// ================================
// Media Licensing Buttons
// ================================
function purchaseLicense(plan) {
  if(plan==='Enterprise') {
    alert('Please contact our sales team.');
  } else {
    alert(`You purchased the ${plan} license successfully!`);
  }
}
