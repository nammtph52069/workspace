window.onload = function(){
    var hr = document.querySelector("#hr");
	var mn = document.querySelector("#mn");
	var sc = document.querySelector("#sc");
	setInterval(() => {
		var day = new Date();
		var hh = day.getHours() * 30;
		var mm = day.getMinutes() * 6;
		var ss = day.getSeconds() * 6;
		hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
		mn.style.transform = `rotateZ(${mm}deg)`;
		sc.style.transform = `rotateZ(${ss}deg)`;


	// Digital Clock Code
		var hours = document.getElementById('hour');
		var minutes = document.getElementById('minutes');
		var seconds = document.getElementById('seconds');
		var ampm = document.getElementById('ampm');

		var h = new Date().getHours();
		var m = new Date().getMinutes();
		var s = new Date().getSeconds();

		var am = h >= 12 ? 'PM' : 'AM'; 
		
		//Convert 24 Hour Time To 12 Hour with AM PM Indicator

		// Add zero before Single Numbers
		h = (h < 10) ? "0" + h : h
		m = (m < 10) ? "0" + m : m
		s = (s < 10) ? "0" + s : s


		hours.innerHTML = h;
		minutes.innerHTML = m;
		seconds.innerHTML = s;
		ampm.innerHTML = am
	})
}