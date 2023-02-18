let form = document.querySelector("form");
form.addEventListener("submit", function(e){
     e.preventDefault();

	 let a = Number(document.querySelector("#num1").value);
	 let b = Number(document.querySelector("#num2").value);
	 let c = Number(document.querySelector("#num3").value);
	 let d = Number(document.querySelector("#num4").value);
	 
	 let result1 = document.querySelector("#result");
	 let result2 = document.querySelector("#result1");
	 let result3 = document.querySelector("#result2");
	 let result4 = document.querySelector('#result3');

let largest, smallest, secondLarge, secondSmallest;

if((a>b) && (a>c) && (a>d)){
     if((b>c) && (b>d)){
	      if(c>d){
	     largest = a;
		 secondLarge = b;
		 smallest = d;
		 secondSmallest = c;
		 }
	   else{
	     large = a;
		 secondLarge = b;
		 smallest = c;
		 secondSmallest = d;
		 }
	 }
	 else if((c>b) && (c>d)){
	     if(b>d){
		     largest = a;
		 secondLarge = c;
		 smallest = d;
		 secondSmallest = b;
	 }
	 else{
	     largest = a;
		 secondLarge = c;
		 smallest = b;
		 secondSmallest = d;
	   }
	 }
	 else{
	     if(b>c){
		     largest = a;
		 secondLarge = d;
		 smallest = c;
		 secondSmallest = b;
		 }
		 else{
		     largest = a;
		 secondLarge = d;
		 smallest = b;
		 secondSmallest = c;
		 }
	}
		     
}
else if((b>a) && (b>c) && (b>d)){
     if((a>c) && (a>d)){
          if(c>d){
	     largest = b;
		 secondLarge = a;
		 smallest = d;
		 secondSmallest = c;
		 }
	 else{
	     largest = b;
		 secondLarge = a;
		 smallest = c;
		 secondSmallest = d;
		 }
	 }
	 else if((c>d) && (c>a)){
	     if(d>a){
		     largest = b;
		 secondLarge = c;
		 smallest = a;
		 secondSmallest = d;
		}
		else{
		     largest = b;
		 secondLarge = c;
		 smallest = d;
		 secondSmallest = a;
		 }
	 }
	else{
	     if(a>c){
		     largest = b;
		 secondLarge = d;
		 smallest = c;
		 secondSmallest = a;
		}
		else{
		     largest = b;
		 secondLarge = d;
		 smallest = a;
		 secondSmallest = c;
		}
}
}
else if((c>a) && (c>b) && (c>d)){
        if((a>b) && (a>d)){
          if(b>d){
	     largest = c;
		 secondLarge = a;
		 smallest = d;
		 secondSmallest = b;
		 }
	 else{
	     largest = c;
		 secondLarge = a;
		 smallest = b;
		 secondSmallest = d;
		 }
	 }
	 else if((b>d) && (b>a)){
	     if(d>a){
		     largest = c;
		 secondLarge = b;
		 smallest = a;
		 secondSmallest = d;
		}
		else{
		     largest = c;
		 secondLarge = b;
		 smallest = d;
		 secondSmallest = a;
		 }
	}
	else{
	     if(a>b){
		     largest = c;
		 secondLarge = d;
		 smallest = b;
		 secondSmallest = a;
		}
		else{
		     largest = c;
		 secondLarge = d;
		 smallest = a;
		 secondSmallest = b;
		}
}
}
else{
      if((a>c) && (a>b)){
          if(b>c){
	     largest = d;
		 secondLarge = a;
		 smallest = c;
		 secondSmallest = b;
		 }
	 else{
	     largest = d;
		 secondLarge = a;
		 smallest = b;
		 secondSmallest = c;
		 }
	 }
	 else if((b>d) && (b>c)){
	     if(d>c){
		     largest = d;
		 secondLarge = b;
		 smallest = c;
		 secondSmallest = d;
		}
		else{
		     largest = d;
		 secondLarge = b;
		 smallest = d;
		 secondSmallest = c;
		 }
	}
	else{
	     if(a>b){
		     largest = d;
		 secondLarge = c;
		 smallest = b;
		 secondSmallest = a;
		}
		else{
		     largest = d;
		 secondLarge = c;
		 smallest = a;
		 secondSmallest = b;
		}
}
}

    result1.value = largest;
   result2.value = secondLarge;
   result3.value = secondSmallest;
   result4.value = smallest;

	 

});

