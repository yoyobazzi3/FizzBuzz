function fizzbuzz(num){
    for(let i = 0; i< num; i++){
        if(i%5 == 0 && i%3 == 0){
            console.log("FizzBuzz")
        }
        else if(i%3==0){
            console.log("Fizz");
        }else if(i%5== 0){
            console.log("Buzz");

        }else{
            console.log(i);
        }

    }
}

fizzbuzz(31);

/*
output:
FizzBuzz
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz
Fizz
22
23
Fizz
Buzz
26
Fizz
28
29
FizzBuzz


 */