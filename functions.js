// First way
// currentMonth()
//
// function currentMonth() {
//     var months = new Date();
//     var monthsNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//     var result = monthsNames[months.getMonth()];
//     console.log(result);
// }

// Second way
/**
 * @returns {string}
 * @description Returns the current month.
 */

    currentMonth()

    function currentMonth() {
        var months = new Date();
        var options = { month: "long" }
        var result = new Intl.DateTimeFormat("en-US", options).format(months);

        console.log(result);
    }

/**
 * @returns {string}
 * @description Returns the current year.
 */

    currentYear()

    function currentYear() {
        var years = new Date();
        var options = { year: "numeric" }
        var result = new Intl.DateTimeFormat("en-US", options).format(years);

        console.log(result);
    }

/**
 * @returns {string}
 * @description Returns the url of the current web page.
 */

    getUrl()

    function getUrl() {
        const url = new URL(document.URL);

        console.log(url.href);
    }

/**
 * @returns {boolean}
 * @description Returns true if the given string begins with "Java", false otherwise.
 */

    checkWord()

    function checkWord() {
        var str = "Java is a high-level, class-based, object-oriented programming language."
        console.log(starts(str));
    }

    function  starts(prop) {
        return prop.startsWith('Java');
    }

    // Second way
    // function startsWith(prop) {
    //     var arr = prop.split('');
    //     return arr[0] === 'J' && arr[1] === 'a' && arr[2] === 'v' && arr[3] === 'a' && arr[4] === ' ' ? true : false;
    //  }

/**
 * @returns {array}
 * @returns {number}
 * @description Prints the array and the length passed as an arguments.
 */

    var array1 = [734,234,5086,14];
    var length = array1.length;
    print(array1,length);

    function print(a,l){
            console.log(a,l);
    }

/**
 * @returns {number}
 * @description Returns the biggest number in the array.
 */

    maxNumber()

    function maxNumber() {
        var array2 = [2,4,0,657,902,24678,2776,7057490,3145];
        console.log(numberFinder(array2));
    }

    function numberFinder(arr) {
        var result = arr[0];
        var i;
        for(i = 1; i< arr.length; i++) {
            if(result < arr[i]) {
                result = arr[i];
            }
        }
         return result;
    }

/**
 * @returns {number}
 * @description Prints the highest of the 3 numbers passed as an arguments.
 */

    var a = 5;
    var b = 3;
    var c = 20;
    highestNumber(a,b,c)

    function highestNumber(a,b,c) {
            if(a > b && a > c){
                var result = a;
            }
            if(b > a && b > c){
                result = b;
            }
            if(c > a && c > b){
                result = c;
            }
            console.log(result);
    }

/**
 * @returns {boolean}
 * @description Checks whether the given number is between 40 and 100.
 */

    var num1 = 58;
    checkNumber(num1)
    function checkNumber(item) {
        var result = item >= 40 && item <= 100 ? true : false;
        console.log(result);
    }

/**
 * @returns {string}
 * @description Receives a number and prints so many "*".
 */
    var num2 = 22;
    asterisk(num2);

    function asterisk(num){
        var i;
        for(i= 0; i< num; i++){
            console.log('*');
        }
    }

/**
 * @returns {string}
 * @description Prints the line passed as an argument in reverse.
 */
    var str = 'enif si gnihtyreve';
    reversed(str);

    function reversed(arg){
        var result = arg.split('').reverse().join('');
        console.log(result);
    }

/**
 * @returns {string}
 * @description Create an object 'car' that has 5 properties and prints.
 */

    let Car = {
        brand: "Hyundai",
        model: "Elantra",
        year: "2019",
        color: "white",
        seats: "4"
    }
    for (const key in Car) {
        console.log(key);
    }

/**
 * @returns {string}
 * @description Prints 'Car' object keys and values.
 */
    var car = [Car];

    for (var i = 0; i < car.length; i++) {
        var obj = car[i];
        for (var key in obj) {
            console.log(key + ":", obj[key]);
        }
    }

/**
 * @returns {object}
 * @description Change first property.
 */
    Car.brand = "Honda"
    console.log(Car);

/**
 * @returns {array}
 * @description Fills the empty array with the given numbers starting from 1 and prints the array.
 */
    printsNumbers(1,10)

    function printsNumbers(start,end){
        var i;
        var fillarray = [];
        for(i = start; i <= end; i++) {
            fillarray.push(i);
        }
        console.log(fillarray);
    }


    var arr = [2,3,5,7,98,560,21,56]

/**
 * @returns {number}
 * @returns {array}
 * @description Prints the first element of the array and the array.
 */
    printFirst(arr);
    function printFirst(arr) {
        console.log(arr[0]);
    }
    console.log(arr);

/**
 * @returns {number}
 * @returns {array}
 * @description Prints the last element of the array and the array.
 */
    printLast(arr);
    function printLast(arr){
        console.log(arr[arr.length-1]);
    }
    console.log(arr);

/**
 * @returns {array}
 * @description Removes the first element from an array and prints the array.
 */
    removeFirst(arr);
    function removeFirst(arr){
        arr.shift()
        console.log(arr)
    }

/**
 * @returns {array}
 * @description Removes the last element from an array and prints the array.
 */
    removeLast(arr);
    function removeLast(arr){
        arr.pop();
        console.log(arr);
    }

/**
 * @returns {array}
 * @description Adds two elements from the beginning of the array.
 */
    twoItems(arr);
    function twoItems(arr){
        arr.unshift(69, 30)
        console.log(arr)
    }
/**
 * @returns {number}
 * @description Performs the basic 4 +,-, /,* calculations of the calculator.
 */
    calculaTor(35,-5)

    function calculaTor(number1,number2){
        console.log(calcSum(number1,number2));
        console.log(calcDifference(number1,number2));
        console.log(calcProduct(number1,number2));
        console.log(calcQuotient(number1,number2));
    }

    function calcSum(number1,number2){
        return number1 + number2;
    }

    function calcDifference(number1,number2){
        return number1 - number2;
    }

    function calcProduct(number1,number2){
        return number1 * number2;
    }

    function calcQuotient(number1,number2){
        return number1 / number2;
    }