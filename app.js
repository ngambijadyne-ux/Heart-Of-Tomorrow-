function donate() {
const name = document.getElementById('name').value;
const phone = document.getElementById('phone').value;
const amount = document.getElementById('amount').value;
fetch('http://localhost:3000/donate', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ name, phone, amount })
})
.then(res => res.json())
.then(data => {
document.getElementById('status').innerText = data.message;
})
.catch(() => {
document.getElementById('status').innerText = 'Error processing donation';
});
}  // Reserved for future interactivity
console.log("Heart of Tomorrow Foundation site loaded");



