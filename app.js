let select = document.querySelectorAll('.currency')
let btn = document.getElementById('btn')
let input = document.getElementById('input')

    //  Api from frankfurter website 
    fetch('https://api.frankfurter.app/currencies')

    .then(res =>res.json())
    // convert the data into json format

    .then(res => displayDropDown(res))
    //passing the convert result to the displayDropDown function

    //convert the object into array 
    function displayDropDown(res){

    // console.log(Object.entries(res)[0][0]) getting by index [0] is first [0] first first

    let curr = Object.entries(res)
    for(let i=0; i<curr.length; i++){

        let opt = `<option value="${curr[i][0]}">${curr[i][0]}</option>`

        select[0].innerHTML += opt
        select[1].innerHTML += opt

        // += is used for show all countries other show only last countriea because its override the output

      }

  }

     // this function for  convert button for convert the currency using onclick event
     btn.addEventListener('click',() => {

      let curr1 = select[0].value
      let curr2 = select[1].value
      let inputVal = input.value
      // condition for when user enter the same countries 
      if( curr1===curr2){

        alert("Choose different currencies")  
      }
      else
       
       convert(curr1,curr2,inputVal)

      });

    // this function for convert the currency with api call

    function convert(curr1,curr2,inputVal ){
    
    //  Api from frankfurter website 
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${inputVal}&from=${curr1}&to=${curr2}`)
      
      // convert the data into json format 
     .then(resp => resp.json())

     .then((data) => {
      document.getElementById('result'). value = Object.values(data.rates)[0]
   
      });

    }
