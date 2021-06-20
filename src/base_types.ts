// type Number
const integerNumber: number = 0.212
const doubleNumber: number = 2120
//console.log(integerNumber, doubleNumber)

// type String
let str: string = 'Hello World!'
//str = 12
//console.log(str)

//type Boolean
const isQuery: boolean = true
const isData: boolean = false

//console.log(isQuery + isData) is error
//console.log(isQuery, isData)

//type array

const numberArray: number[] = [1,2,3,4,5,6,7]
const numberGenericArray: Array<number> = [7,6,5,4,3,2,1]

const stringArray: string[] = ['q', 'w', 'e', 'r', 't', 'y']
const matrixArray: number[][] = [[1,2,3,4,5,6,7], [7,6,5,4,3,2,1]]

// Кортеж
const tupleArray: [string, boolean, object] = ['', true, {name: "vasya", age: 22}]

//multi types
const mixVar: (boolean | number) = true
const mixVar2: (boolean | number) = 1

const mixArray: (string | boolean)[] = [false, 'w', 'e', true, 't', true]

// Enums перечисления
enum Keys {
    Q,
    W,
    E,
    R,
    T,
    Y
}

enum Actions {
    RUN = "RUN",
    HIDE = "HIDE",
    STAND = "STAND",
    SIT = "SIT"
}

enum State {
    //isMarried = true, перечисления могут быть только текстовыми и числовыми
    age = 33,
    isMarried = 0,
    Data = Keys.Q + Keys.W
}

console.log(Keys, State, Actions)

// null, undefined and any

const something: any = (0 + "") || 456
const isNoAbsent: undefined = undefined
const isNull: null = null
console.log(something, isNoAbsent, isNull)

// functions

function printText(name: string, age?: number): void {
    console.log(name + age)
}

function getText(name: string, age?: number): string {
    if(age) {
        return age + name // return age is incorrect
    }
    return name
}

function getError(err: string): never {
    throw new Error(err)
    // if there loop (with limit) then never isn't correct
}

console.log(getText("Hello!"))

// Type, <>, as

type Login = string
type Ids = (string | number)
let login = 'root' as Login // кастование, или преобразование
const id = <Ids>123345432 // кастование, или преобразование

console.log(login, id)


// objects, Interfaces

interface IHuman {
    readonly id: Ids
    age: number,
    name: string,
    surname: string,
    middleName?: string,
    family?: {
        son: {
            name: string,
            age: number
        }
    }
}

const man: IHuman = {
    id: 42342,
    age: 22,
    name: "Jack",
    surname: "Veilin",
}

console.log(man)

interface IPerson extends IHuman {
    gender?: string,
    setData?: (age: number,name:string, surname: string, gender: string, middleName?: string) => void
}

const man2: IPerson = {
    id: 42342,
    age: 22,
    name: "Jack",
    surname: "Veilin",
    gender: 'fermale',
    setData(age,name, surname,gender,middleName ): void {
        this.age = age
        this.name = name
        this.surname = surname
        this.gender = gender
        this.middleName = middleName
    }
}

console.log(man2)
man2.setData(34, 'Mike', "NEEE", 'male')
console.log(man2)

// overload functions
interface IStyles {
    [property: string]: string
}

const blockStyle: IStyles = {
    margin: '5px',
    width: '20px',
}

function getSelectors(property: string, value: string): IStyles
function getSelectors(): object

function getSelectors(property?: string, value?: string) {
    if(property && value){
        blockStyle[property] = value
        return blockStyle
    } else {
        return blockStyle
    }
}

console.log(getSelectors('color', 'blue'))
console.log(getSelectors())

// Generics

const genericArray: Array<string> = ['hello', 'hell!']

function arrReverse<T>(array: T[]): T[] {
    return array.reverse()
}
function arrJoin<T>(array: T[], modify?: string): string {
    return array.join(modify)
}

console.log(arrJoin(genericArray, ', '))

interface ICar<T, A> {
    cost: T,
    price: T,
    weight: A,
    height: A
}

