function generateOTP(){
    var d = '0123456789';
    let OTP = '';
    for(let i=0;i<4;i++){
        OTP += d[Math.floor(Math.random()*10)];
    }
    let spanElement = document.querySelector('.wrapper span');
    spanElement.innerHTML = OTP;
}
