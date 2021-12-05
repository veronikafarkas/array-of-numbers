const txtNumbers = document.querySelector('#numbers')
const task1 = document.querySelector('#task1')
const task2 = document.querySelector('#task2')
const task3 = document.querySelector('#task3')
const task4 = document.querySelector('#task4')
const task5 = document.querySelector('#task5')

let numArr = [];
let array = [];
let arr1=[];
let task1A = [];
let cnt=0;
let negative = 0;
let cntN = 0;
let paros=0;

function inputToArray() {
  nums = document.getElementById('numbers').value;
  numArr.push(nums);  
  arr1 = numArr[0].split(',');
  console.log(arr1);

  for(let i=0; i<arr1.length; ++i)
  {
      arr1[i] = parseInt(arr1[i]);
  }

  let array = arr1.filter(function (el) {
    return el != null && !isNaN(el);
  });

  console.log(array);

  numArr = [];

  for(let i=0; i<array.length; ++i)
    {
        
        if(array[i]%3===0)
        {
            cnt++;
        }

        if(array[i]<0)
        {
            negative = array[i];
            cntN++;
        }
        
    }

    task1.innerHTML = cnt;
    cnt=0;
    if(cntN>0)
    {
        task2.innerHTML = negative;
    }else{
        task2.innerHTML = "Nincs negatív";
    }
    negative = 0;
    cntN = 0;


    let arr2 = array;

    for(let i=0; i<arr2.length; ++i)
    {
        if(arr2[i]%2===0)
        {
            paros++;
        }
    }

    if(paros>0)
    {
        task3.innerHTML = "Van páros szám is";
    }else{
        task3.innerHTML="Mindegyik páratlan";
    }
    arr2 = [];
    paros=0;

    let result = array.reduce(function(a, b) {
        return Math.max(a, b);
    });

    task4.innerHTML = result;

    result=0;

    for(let i=0; i<array.length; ++i)
    {
        if(isNaN(array[i]))
        {
            txtNumbers.classList.add('error');
        }else{
            txtNumbers.classList.remove('error');
        }
    }

    let cUniq=0;
    let uniqNum=[];
    let cInd=0;
    let resArr=[];
    let ind2=0;

    for(let i=0; i<array.length; ++i)
    {
        for(let j=0; j<array.length; ++j)
        {
            if(array[i]==array[j])
            {
                cUniq++;
            }
        }
        uniqNum[cInd]=cUniq;
        cInd++;
        cUniq=0;
    }

    for(let i=0; i<uniqNum.length; ++i)
    {
        if(uniqNum[i]==1)
        {
            resArr[ind2]=array[i];
            ind2++;
        }
    }

    task5.innerHTML= resArr;
    console.log(uniqNum);

}


