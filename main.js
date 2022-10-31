let lab1=[5,5,0,5,5,10,10]
let lab2=[5,5,5,5,5,5,10]
let lab3=[5,10,10,15]
let lab4_5=[5,5,3,5,5,5,10,10,10,10,5]
let lab6=[5,5,9,0,5,10]
let lab8=[5,10,10,10,2]
let quiz1=40
function get_sum (lab)
{
let  sum = 0
for (let i = 0; i < lab.length; i++) 
{sum += lab[i]}
return sum
}
function main (array1, array2, array3, array4, array5, array6)
{let sum1=get_sum(array1)
let sum2=get_sum(array2)
let sum3=get_sum(array3)
let sum4_5=get_sum(array4)
let sum6=get_sum(array5)
let sum8=get_sum(array6)
sums=[sum1,sum2, sum3,sum4_5,sum6,sum8]
let  sum_of_sums = 0
for (let i = 0; i < sums.length; i++) 
{sum_of_sums += sums[i]}
let final = (sum_of_sums/280*0.6 + (quiz1/40*0.4))*100
const results = {
lab1: lab1, 
lab2: lab2, 
lab3: lab3, 
lab4_5: lab4_5, 
lab6: lab6,
lab8: lab8, 
quiz1: quiz1,
sums:sums, 
total_score: final,
}
return results
}
console.log (main(lab1, lab2, lab3, lab4_5, lab6, lab8))