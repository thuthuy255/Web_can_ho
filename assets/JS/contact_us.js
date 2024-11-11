 // Xử lý sự kiện click trên các câu hỏi để mở rộng/collapse nội dung của câu hỏi
 let questions = document.querySelectorAll(".question");
 console.log(questions);
 questions.forEach((question) => {
     question.addEventListener("click", () => {
         question.classList.toggle("active");
     });
 });

 document.querySelector('.btn-submit').addEventListener('click', function(event) {
     
     event.preventDefault();
     let isValid = true;

     const name = document.getElementById('name').value;
     const email = document.getElementById('email').value;
     const tel = document.getElementById('tel').value;
     const message = document.getElementById('message').value;

     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     const phonePattern = /^\d{10,11}$/; // Pattern for 10 or 11 digits

     // Reset all error messages
     document.querySelectorAll('.form-message').forEach(function(element) {
         element.classList.remove('active');
     });

     if (!name) {
         isValid = false;
         document.getElementById('name-message').classList.add('active');
     }

     if (!emailPattern.test(email)) {
         isValid = false;
         document.getElementById('email-message').classList.add('active');
     }

     if (!phonePattern.test(tel) || isNaN(tel)) { // Check if tel contains non-digit characters
         isValid = false;
         document.getElementById('tel-message').classList.add('active');
     }

     if (isValid) {
         // Form is valid, you can submit it or perform any other actions here
         alert('Form submitted successfully!');
         // document.getElementById('form-contact_us').submit();
     }
 });