const urlParams = new URLSearchParams(window.location.search)

// Function to decode parameters
const decode = (value) => decodeURIComponent(value.replace(/\+/g, ' '))

// Assign parameters to elements
document.getElementById('firstName').innerText = decode(urlParams.get('f_name'))
document.getElementById('lastName').innerText = decode(urlParams.get('l_name'))
document.getElementById('email').innerText = decode(urlParams.get('email'))
document.getElementById('password').innerText = decode(
  urlParams.get('password')
)
