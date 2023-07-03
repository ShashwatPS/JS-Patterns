let n = 6

let ans="";
function generate_str(n){
    var str='';
    for(let i=1;i<=2*n-1;i++){
        str+='*';
    }
    return str;
}

for(var i=1;i<=n;i++){
    for(var j=1;j<=n-i;j++){
        ans+=' ';
    }
    ans+=generate_str(i);
    ans+='\n';
}

console.log(ans);