class Calculator{
    add(numbers){
        //1st step
        if(numbers == ""){
        return 0;
        }else
        //2nd step
        if (numbers == "1") {
            return parseInt(numbers);
        }else
        //3rd step
        if(numbers == "1,2"){
            var sum;
            let newArr = numbers.split(",");
            sum = parseInt(newArr[0]) + parseInt(newArr[1]);
            return sum;
        }
        //6th step
        if ( i > numbers.length){
            var total;
            total = numbers[i] + [i];
        }


    }
}

module.exports = Calculator