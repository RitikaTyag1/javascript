let check={};
function isRepeatWord(sentence)
{   let c=0;
    const splitSentence=sentence.split(" ");
   
    for(let i=0; i<splitSentence.length;i++)
    {
        if(check[splitSentence[i]]===undefined)
        check[splitSentence[i]]=1;
        else
        check[splitSentence[i]]++;
    }
}
isRepeatWord('Hi my Ritika name name is my Ritika');
console.log(check)
