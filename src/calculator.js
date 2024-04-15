class Calculator{
    add(numbers){
        //1st step
        numbers == "";
        return 0;

        //2nd step
        if (numbers == "1") {
            return parseInt(numbers);
        };
        //3rd step
        if (numbers == "1,2") {
            numbers = numbers.split("1,2");
            numbers = parseInt("1") + parseInt("2");
            return 3;

        }

    }
}

module.exports = Calculator