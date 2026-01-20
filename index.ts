// let namee:string ="Diya Sharma";
// console.log("HELLO" + " "+ namee);

// //practice ----------------------start {easy}
// //1-7
// //Reverse a String
let str:string="hello diya"
let rev:string=str.split("").reverse().join("");
console.log(rev)

// // Check Palindrome
let stri:string="amar"
let r:string=stri.split("").reverse().join("")
if(stri===r)
{
    console.log("yes it is a palindrom");
    
}
else{
    console.log("not a palindrom");
    
}
// // Find Factorial (loop + recursion)
function fact(n:number): number{
    if(n===0||n===1) return 1;
    else{
return n* fact(n-1)
    }
    

}
console.log(fact(5));

// // Fibonacci Series
function fab(n:number):number[]
{
    let a=0,b=1;
    let ans:number[]=[];
    for(let i=0;i<n;i++)
    {
        ans.push(a);
        let next=a+b;
        a=b;
        b=next;
    }
    return ans
}
console.log(fab(7));

// // Count Vowels in a String
let strr:string="helloo"
let vowel:string="aeiou"
let count :number=0;
for(let ch of strr.toLowerCase())
{
    if(vowel.indexOf(ch) !== -1)
    {
        count++;
    }
}
console.log(count);

// // // Find Largest Number in Array
let arr:number[]=[1,25,7]
let max:number=Math.max(...arr);
console.log(max);

// // Remove Duplicates from Array
function removedup(n:number[]):number[]{
    return [...new Set(n)]
}
console.log(removedup([1,3,8,7,8,3,2,1]));

// ✅ Medium (8–15)

// Find Second Largest Number
let arr1:number[]=[1,25,7]
let sorted =[...arr1].sort((a,b)=>b-a)
console.log(sorted[1]);
// Check Anagram
function anagram(a:string ,b:string):boolean{
    let s1=a.toLowerCase().split("").sort().join("");
    let s2=b.toLowerCase().split("").sort().join("");

    return s1===s2;
}
console.log(anagram("diya","aiya"));
console.log(anagram("silent","listen"));

// Count Frequency of Elements
let array:number[]=[1,3,4,1,5]
let freq=array.reduce((acc:any,curr:any)=>
{
    acc[curr]=(acc[curr]||0)+1
    return acc;
},{})
console.log(freq);



// Find Missing Number (1..n)

// Sort Array Without Built-in

// Two Sum Problem

// Merge Two Sorted Arrays

// Find Intersection of Two Arrays

// ✅ Hard (16–20)

// Longest Word in Sentence

// Flatten Nested Array

// Deep Clone Object (basic level)

// Group By Property (objects array)

// Debounce Function (TS version)

