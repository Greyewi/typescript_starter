// type Number
var integerNumber = 0.212;
var doubleNumber = 2120;
//console.log(integerNumber, doubleNumber)
// type String
var str = 'Hello World!';
//str = 12
//console.log(str)
//type Boolean
var isQuery = true;
var isData = false;
//console.log(isQuery + isData) is error
//console.log(isQuery, isData)
//type array
var numberArray = [1, 2, 3, 4, 5, 6, 7];
var numberGenericArray = [7, 6, 5, 4, 3, 2, 1];
var stringArray = ['q', 'w', 'e', 'r', 't', 'y'];
var matrixArray = [[1, 2, 3, 4, 5, 6, 7], [7, 6, 5, 4, 3, 2, 1]];
// Кортеж
var tupleArray = ['', true, { name: "vasya", age: 22 }];
//multi types
var mixVar = true;
var mixVar2 = 1;
var mixArray = [false, 'w', 'e', true, 't', true];
// Enums перечисления
var Keys;
(function (Keys) {
    Keys[Keys["Q"] = 0] = "Q";
    Keys[Keys["W"] = 1] = "W";
    Keys[Keys["E"] = 2] = "E";
    Keys[Keys["R"] = 3] = "R";
    Keys[Keys["T"] = 4] = "T";
    Keys[Keys["Y"] = 5] = "Y";
})(Keys || (Keys = {}));
var Actions;
(function (Actions) {
    Actions["RUN"] = "RUN";
    Actions["HIDE"] = "HIDE";
    Actions["STAND"] = "STAND";
    Actions["SIT"] = "SIT";
})(Actions || (Actions = {}));
var State;
(function (State) {
    //isMarried = true, перечисления могут быть только текстовыми и числовыми
    State[State["age"] = 33] = "age";
    State[State["isMarried"] = 0] = "isMarried";
    State[State["Data"] = 1] = "Data";
})(State || (State = {}));
console.log(Keys, State, Actions);
// null, undefined and any
var something = (0 + "") || 456;
var isNoAbsent = undefined;
var isNull = null;
console.log(something, isNoAbsent, isNull);
// functions
function printText(name, age) {
    console.log(name + age);
}
function getText(name, age) {
    if (age) {
        return age + name; // return age is incorrect
    }
    return name;
}
function getError(err) {
    throw new Error(err);
    // if there loop (with limit) then never isn't correct
}
console.log(getText("Hello!"));
var login = 'root'; // кастование, или преобразование
var id = 123345432; // кастование, или преобразование
console.log(login, id);
var man = {
    id: 42342,
    age: 22,
    name: "Jack",
    surname: "Veilin"
};
console.log(man);
var man2 = {
    id: 42342,
    age: 22,
    name: "Jack",
    surname: "Veilin",
    gender: 'fermale',
    setData: function (age, name, surname, gender, middleName) {
        this.age = age;
        this.name = name;
        this.surname = surname;
        this.gender = gender;
        this.middleName = middleName;
    }
};
console.log(man2);
man2.setData(34, 'Mike', "NEEE", 'male');
console.log(man2);
var blockStyle = {
    margin: '5px',
    width: '20px'
};
function getSelectors(property, value) {
    if (property && value) {
        blockStyle[property] = value;
        return blockStyle;
    }
    else {
        return blockStyle;
    }
}
console.log(getSelectors('color', 'blue'));
console.log(getSelectors());
// Generics
var genericArray = ['hello', 'hell!'];
function arrReverse(array) {
    return array.reverse();
}
function arrJoin(array, modify) {
    return array.join(modify);
}
console.log(arrJoin(genericArray, ', '));
