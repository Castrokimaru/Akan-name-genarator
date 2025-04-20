document.getElementById("akanForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const birthdate = document.getElementById("birthdate").value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const result = document.getElementById("result");
  
    if (!birthdate || !gender) {
      alert("Please fill out both your birthdate and gender.");
      return;
    }
  
    const date = new Date(birthdate);
    const dayOfWeek = date.getDay(); // 0 = Sunday, 6 = Saturday
  
    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  
    const akanName = gender === "male" ? maleNames[dayOfWeek] : femaleNames[dayOfWeek];
  
    result.textContent = `You were born on a ${date.toLocaleDateString('en-US', { weekday: 'long' })}. Your Akan name is ${akanName}.`;
  });
  