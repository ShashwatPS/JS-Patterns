let n = 6;

let str="";

for(var i=1;i<=n;i++){
    for(var j=1;j<=n-(i-1);j++){
            str+='*'
    }
    str+='\n';
}

console.log(str);