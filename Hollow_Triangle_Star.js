let n = 6;

let str="";

for(var i=1;i<=n;i++){
    for(var j=1;j<=i;j++){
        if(i==1 || j==1 || j==i || i==n)
            str+='*';
        else
            str+=' ';
    }
    str+='\n';
}

console.log(str);