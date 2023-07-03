let n = 5;

let str="";

for(var i=1;i<=n;i++){
    for(var j=1;j<=n;j++){
        if(j<=(n-i))
            str+=' ';
        else
            str+='*';
    }
    str+='\n';
}

console.log(str);