// // Get form element
// const form = document.getElementById('myForm');
    
// // Add event listener for form submission
// form.addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent form submission
    
//     // Validate each input field
//     const name = document.getElementById('name').value;
//     if (name === '') {
//         alert('name', 'Name is required');
//     }
    
//     const email = document.getElementById('email').value;
//     if (email === '') {
//         showError('email', 'Email is required');
// } else if (!validateEmail(email)) {
//     showError('email', 'Invalid email format');
// }

// const phone = document.getElementById('phone').value;
//   if (phone === '') {
//       showError('phone', 'Phone is required');
//     } else if (!validatePhone(phone)) {
//         showError('phone', 'Invalid phone number');
//     }

//     const number = document.getElementById('number').value;
//     if (number === '') {
//         showError('number', 'Number is required');
//     }
    
//     const password = document.getElementById('password').value;
//     if (password === '') {
//         showError('password', 'Password is required');
//     }
    
//     const age = document.getElementById('age').value;
//     if (age === '') {
//         showError('age', 'Age is required');
//     }
    
//     const gender = document.getElementById('gender').value;
//     if (gender === '') {
//         showError('gender', 'Gender is required');
//     }
    
//     const date = document.getElementById('date').value;
//     if (date === '') {
//         showError('date', 'Date is required');
//     }
    
//     const color = document.getElementById('color').value;
//     if( color === '') {
//         showError('color', 'Color is required');
//     }
// })

const form = document.getElementById("myForm");

    form.addEventListener("submit", function(event) {
      event.preventDefault();
      if (validateForm()) {
        form.reset();
        alert("Form submitted successfully!");
      }
    });

    function validateForm() {
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const number = document.getElementById("number").value;
      const password = document.getElementById("password").value;
      const age = document.getElementById("age").value;
      const gender = document.getElementById("gender").value;
      const date = document.getElementById("date").value;
      const color = document.getElementById("color").value;

      if (name === "" || email === "" || phone === "" || number === "" || password === "" || age === "" || gender === "" || date === "" || color === "") {
        alert("Please fill in all fields.");
        return false;
      }

      

      return true;
    }
  