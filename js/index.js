window.onload = function(){
	var username = document.getElementById('username');
	var userWarn = document.getElementsByClassName('user-warn')[0];
	var password = document.getElementById('password');
	var pwdWarn = document.getElementsByClassName('pwd-warn')[0];
	var security = document.getElementsByClassName('security')[0].getElementsByTagName('li');
	var rePwd = document.getElementById('re-password');
	var rePwdWarn = document.getElementsByClassName('repwd-warn')[0];

	// user
	username.onfocus =function(){
		 userWarn.style.display="inline-block";
	}
	username.onkeyup=function(){
		var userdetail = username.value;
		var length = userdetail.length;
		var byteCount=document.createElement('div');
		byteCount.className="byte-count";
		byteCount.innerHTML=length+'个字符';
		if (document.getElementsByClassName('username')[0].getElementsByClassName('byte-count').length >0) {
			var deleteEle=document.getElementsByClassName('username')[0].getElementsByClassName('byte-count')[0];
			document.getElementsByClassName('username')[0].removeChild(deleteEle);
		}
		document.getElementsByClassName('username')[0].appendChild(byteCount);
		if (document.getElementsByClassName('username')[0].getElementsByClassName('byte-count').length >0) {
			var deleteEle=document.getElementsByClassName('username')[0].getElementsByClassName('byte-count')[0];
			document.getElementsByClassName('username')[0].removeChild(deleteEle);
		}

		// 用户名超出限制
		// 1.数字、字母、汉子、下划线
		var re=/[^\w\u4e00-\u9fa5]/g;
		if (re.test(userdetail)) {
			 userWarn.innerHTML='含有非法字符';
			userWarn.style.background= 'url(images/false.png) left center no-repeat';
		}else{
			if (userdetail=="123456") {
				userWarn.innerHTML='用户名已存在';
				userWarn.style.background='url(images/false.png) left center no-repeat';
			}else{
				userWarn.innerHTML='用户名可用';
				userWarn.style.background='url(images/correct.png) left center no-repeat';
			}
		}

		// 长度不够
		if (length<3) {
			userWarn.innerHTML='用户名过短';
			userWarn.style.background= 'url(images/false.png) left center no-repeat';
		}
		if (length == 0) {
			userWarn.innerHTML='用户名不能为空';
			userWarn.style.background= 'url(images/false.png) left center no-repeat';
		}
		// 用户名过长
		if (length>20) {
			userWarn.innerHTML='用户名过长';
			userWarn.style.background= 'url(images/false.png) left center no-repeat';
		}
	}
	username.onblur=function(){
		if (document.getElementsByClassName('username')[0].getElementsByClassName('byte-count').length >0) {
			var deleteEle=document.getElementsByClassName('username')[0].getElementsByClassName('byte-count')[0];
			document.getElementsByClassName('username')[0].removeChild(deleteEle);
		}
		var userdetail = username.value;
		var length = userdetail.length;

		// 用户名超出限制
		// 1.数字、字母、汉子、下划线
		var re=/[^\w\u4e00-\u9fa5]/g;
		if (re.test(userdetail)) {
			 userWarn.innerHTML='含有非法字符';
			userWarn.style.background= 'url(images/false.png) left center no-repeat';
		}else{
			if (userdetail=="123456") {
				userWarn.innerHTML='用户名已存在';
				userWarn.style.background='url(images/false.png) left center no-repeat';
			}else{
				userWarn.innerHTML='用户名可用';
				userWarn.style.background='url(images/correct.png) left center no-repeat';
			}
		}

		// 长度不够
		if (length<3) {
			userWarn.innerHTML='用户名过短';
			userWarn.style.background= 'url(images/false.png) left center no-repeat';
		}
		if (length == 0) {
			userWarn.innerHTML='用户名不能为空';
			userWarn.style.background= 'url(images/false.png) left center no-repeat';
		}
		// 用户名过长
		if (length>20) {
			userWarn.innerHTML='用户名过长';
			userWarn.style.background= 'url(images/false.png) left center no-repeat';
		}
		}
	//pwd
	password.onfocus =function(){
		pwdWarn.style.display= 'inline-block';
	}
	password.onkeyup = function(){
		var length= password.value.length;
		var pwddetail=password.value;
		if (length<10) {
			security[0].className = 'selected';
			security[1].className ='';
			security[2].className= '';
		}else if (length<15) {
			security[0].className = 'selected';
			security[1].className ='selected';
			security[2].className= '';
		}else{
			security[0].className = 'selected';
			security[1].className ='selected';
			security[2].className= 'selected';
		}
		// 密码为空
		if (length==0) {
			pwdWarn.style.background='url(images/false.png) left center no-repeat';
			pwdWarn.innerHTML = '密码不能为空';
			rePwd.setAttribute('disabled',true);
		}else if (length<6) {
			rePwd.setAttribute('disabled',true);
			pwdWarn.style.background='url(images/false.png) left center no-repeat';
			pwdWarn.innerHTML = '密码长度太短';
		}else if (length>22) {
			pwdWarn.style.background='url(images/false.png) left center no-repeat';
			pwdWarn.innerHTML = '密码长度太长';
			rePwd.setAttribute('disabled',true);
		}else{
			pwdWarn.style.background='url(images/correct.png) left center no-repeat';
			pwdWarn.innerHTML = '密码可用';
			rePwd.removeAttribute('disabled');
			rePwd.value='';
		}
	}
	password.onblur =function(){
		var length= password.value.length;
		if (length==0) {
			pwdWarn.style.background='url(images/false.png) left center no-repeat';
			pwdWarn.innerHTML = '密码不能为空';
		}else if (length>=6 && length<=22) {
			rePwd.removeAttribute('disabled');
			rePwd.value='';
		}
	}
	// re-pwd
	rePwd.onblur = function(){
		rePwdWarn.style.display="inline-block";
		if (rePwd.value == password.value) {
			rePwdWarn.style.background='url(images/correct.png) left center no-repeat';
			rePwdWarn.innerHTML = '密码正确';
		}else{
			rePwdWarn.style.background='url(images/false.png) left center no-repeat';
			rePwdWarn.innerHTML = '请输入正确密码';
		}
	}

}