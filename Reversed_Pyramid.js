let n = 6

let ans="";
function generate_str(j,n){
    var str='';
    for(let i=1;i<=2*(n-j)-1;i++){
        str+='*';
    }
    return str;
}

for(var i=1;i<=n;i++){
    for(var j=1;j<=i-1;j++){
        ans+=' ';
    }
    ans+=generate_str(i,n);
    ans+='\n';
}

console.log(ans);