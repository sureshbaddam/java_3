function fibonacci() {
    
    let a = document.getElementById("fib").value;

    if (a <= 0) {
        alert("Please enter a valid number.");
        
    }

    let fib = [0, 1];
    for (let i = 2; i < a; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    const result = fib.slice(0, a);
    

    document.getElementById("result").innerHTML=result
}



    function palindrome(){

    let a = document.getElementById('palin').value;
    
    const aRev = a.split('').reverse('').join('');

    if(a===aRev){
       result1 = (`"${a}" is a palindrome.`)
    }
    else{
        result1 = (`"${a}" is not a palindrome.`)
    }

      document.getElementById('result1').innerHTML= result1 ;

    }



setInterval(()=>{

    let a = new Date().getHours()
    let b = new Date().getMinutes()
    let c = new Date().getSeconds()

    document.getElementById('time').innerHTML=`${a}:${b}:${c}`

},1000)







