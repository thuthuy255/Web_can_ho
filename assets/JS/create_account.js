// Function to toggle password visibility
// Hàm để chuyển đổi hiển thị mật khẩu
function togglePasswordVisibility(inputFieldId) {
  // Lấy thẻ input tương ứng với id được truyền vào
  const passwordInput = document.getElementById(inputFieldId);
  // Xác định kiểu hiển thị của mật khẩu (ẩn hoặc hiện)
  const type = passwordInput.type === 'password' ? 'text' : 'password';
  // Thiết lập kiểu hiển thị mới cho thẻ input
  passwordInput.setAttribute('type', type);
}

// Event listener for toggling password visibility in password field
// Bộ lắng nghe sự kiện để chuyển đổi hiển thị mật khẩu ở ô password
const togglePasswordIcon = document.getElementById('togglePassword');
togglePasswordIcon.addEventListener('click', function() {
  // Gọi hàm togglePasswordVisibility khi người dùng click vào icon mắt ở ô password
  togglePasswordVisibility('passwordInput');
});

// Event listener for toggling password visibility in confirm password field
// Bộ lắng nghe sự kiện để chuyển đổi hiển thị mật khẩu ở ô confirm password
const toggleConfirmPasswordIcon = document.getElementById('toggleConfirmPassword');
toggleConfirmPasswordIcon.addEventListener('click', function() {
  // Gọi hàm togglePasswordVisibility khi người dùng click vào icon mắt ở ô confirm password
  togglePasswordVisibility('confirmPasswordInput');
});

// Your existing login function (without modifications for event handling)
// Hàm đăng nhập hiện tại của bạn (không có sửa đổi cho xử lý sự kiện)
function login() {
  // Ngăn chặn hành vi mặc định của việc gửi biểu mẫu
  event.preventDefault();

  // Lấy giá trị của các trường email và mật khẩu
  const email = document.getElementById('emailInput').value.trim();
  const password = document.getElementById('passwordInput').value;
  const confirmPassword = document.getElementById('confirmPasswordInput').value;
  const emailMessage = document.getElementById('emailMessage');
  const passwordMessage = document.getElementById('passwordMessage');
  // Xóa bỏ bất kỳ thông báo lỗi trước đó nào
  emailMessage.innerHTML = '';

  // Kiểm tra xem các trường có trống không
  let isEmpty = false;
  const inputFields = document.querySelectorAll('.input_login_password input');
  inputFields.forEach(input => {
    if (input.value.trim() === '') {
      isEmpty = true;
      emailMessage.innerHTML = 'Vui lòng điền vào tất cả các trường bắt buộc.';
      return false; // Thoát khỏi vòng lặp nếu bất kỳ trường nào cũng trống
    }
  });

  if (isEmpty) {
    return; // Không cần kiểm tra tiếp nếu có trường trống
  }

  // Xác thực định dạng email bằng biểu thức chính quy
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    emailMessage.innerHTML = 'Vui lòng nhập địa chỉ email hợp lệ.';
    return;
  }

  // Kiểm tra xem mật khẩu có khớp không
  if (password !== confirmPassword) {
    emailMessage.innerHTML = 'Mật khẩu không khớp.';
    return;
  }
 // Check if password meets the criteria (starts with uppercase letter, at least 8 characters including letters and numbers)
  // Kiểm tra xem mật khẩu đáp ứng các yêu cầu (bắt đầu bằng chữ cái viết hoa, ít nhất 8 ký tự bao gồm chữ và số)
  

  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  if (!passwordRegex.test(password)) {
    passwordMessage.innerHTML = 'Mật khẩu phải bắt đầu bằng chữ cái viết hoa, có ít nhất 8 ký tự bao gồm cả chữ và số.';
    return;
  }
  // Kiểm tra xem hộp kiểm điều kiện và điều khoản đã được chọn chưa
  const termsCheckbox = document.getElementById('termsCheckbox');
  if (!termsCheckbox.checked) {
    // Hiển thị thông báo cảnh báo nếu hộp kiểm không được chọn
    alert("Vui lòng chấp nhận các điều khoản và điều kiện trước khi tiếp tục.");
    return; // Ngăn chặn xử lý đăng nhập tiếp theo
  }

  // Nếu tất cả các điều kiện được đáp ứng, thực hiện logic đăng nhập thành công (thay thế bằng logic thực tế của bạn)
  console.log('Đăng nhập thành công!'); // Thay thế bằng cảnh báo hoặc chuyển hướng
  // Chuyển hướng đến trang chủ sau khi đăng nhập thành công (giả sử homepage.html tồn tại)
  window.location.href = 'homepage.html';
}





