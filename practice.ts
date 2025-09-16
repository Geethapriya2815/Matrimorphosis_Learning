let data: any = "Geethapriya"
console.log(typeof data)
let age: number = (data as number) - 90
let newnum: number = Number(data) - 5
console.log(newnum)
console.log(age)
console.log(typeof data)

function displayUser(fname: string, lastname?: string) {
    if (lastname) console.log("User name is", fname + lastname);
    else console.log("User name is", fname);

}
displayUser("Geethapriya");
displayUser("Geetha", "priya")

function displayUserName(msg: string, names: string = "guest") {
    console.log(msg,names)


}
displayUserName("Welcome","geetha")
