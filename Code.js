function test() {
    
}
const test2 = test
test.prop = ""
console.dir(test)
test.prop = ""

document.addEventListener("", test)

document.readyState
