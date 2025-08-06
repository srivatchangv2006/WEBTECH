document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();
    let valid = true;
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const age = document.getElementById('age');
    const gender = document.getElementById('gender');
    const checkboxes = document.querySelectorAll('input[name="eventType"]:checked');
    const comments = document.getElementById('comments');
    const errorDiv = document.getElementById('errors');
    errorDiv.innerHTML = "";
  
    [name, email, phone, age, gender, comments].forEach(field => {
      field.classList.remove('error', 'valid');
    });
  
    if (!/^[a-zA-Z\s]+$/.test(name.value.trim())) {
      valid = false;
      name.classList.add('error');
      errorDiv.innerHTML += "<p>Name must contain only letters and spaces.</p>";
    } else {
      name.classList.add('valid');
    }
  
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
      valid = false;
      email.classList.add('error');
      errorDiv.innerHTML += "<p>Invalid email format.</p>";
    } else {
      email.classList.add('valid');
    }
  
    if (!/^\d{10}$/.test(phone.value.trim())) {
      valid = false;
      phone.classList.add('error');
      errorDiv.innerHTML += "<p>Phone number must be 10 digits.</p>";
    } else {
      phone.classList.add('valid');
    }
  
    if (Number(age.value) < 18) {
      valid = false;
      age.classList.add('error');
      errorDiv.innerHTML += "<p>You must be at least 18 years old.</p>";
    } else {
      age.classList.add('valid');
    }
  
    if (gender.value === "") {
      valid = false;
      gender.classList.add('error');
      errorDiv.innerHTML += "<p>Please select your gender.</p>";
    } else {
      gender.classList.add('valid');
    }
  
    if (checkboxes.length === 0) {
      valid = false;
      errorDiv.innerHTML += "<p>Select at least one event type.</p>";
    }
  
    if (valid) {
      alert("Registration Successful!");
      this.reset();
      document.querySelectorAll('input, select, textarea').forEach(el => {
        el.classList.remove('valid');
      });
    }
  });
