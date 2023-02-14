let text1 = "Hej! Marcia. \n Dzisiaj jest nasz wspólny wielki dzień.";
let text2 = "Z tego powodu chciałem żebyś wiedziała jak bardzo Cię kocham."
let i = 0;
let ok = 0;
let speed = 150;

function typeWriter(text, para){
	if(ok == 2){
		clearInterval(typeInterval);
	}
	if(i < text.length){
		document.getElementById(para).innerHTML += text.charAt(i);
		i++;
		speed = Math.random() * 50 + 100;
	}
	else{
		if(ok == 0){
			i = 0;
		}
		ok += 1;
	}
}

let typeInterval;

   	typeInterval = setInterval(function(){
		if(ok == 0){
			typeWriter(text1, "text1");
		}
		else if(ok == 1){
			typeWriter(text2, "text2");
		}
	}, 100);