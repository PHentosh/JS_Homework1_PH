function foo(a){
    let b = '';
    for (let i = 0; i < a.length; i++){
        b += a[a.length - i -1];
    }
    return b
}

function foo1(a){
    var b = a.split(""); 
    var b = b.reverse();
    var b = b.join("");
    return b;

}

function foo2(a){
    let b = '';
    for (var i = a.length - 1; i >= 0; i--){
        b += a[i];
    }
    return b
}

function foo3(a){
    if (a === "") 
        return "";
    else
        return foo3(a.substr(1)) + a.charAt(0);
}

console.log(foo3("abc"));
