<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>replit</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>
  <h1>Number Classification</h1>
  <div>
  <h2>Classified Array:</h2>
    <ul id="result"></ul>
  </div>

  <script>
    const result = document.querySelector('#result');

    const numbersList = [2, -5, 6, 7, -8, 0, 10, 23, -13, 14, 18, -32]

   for(let val of numbersList){
     const liElement = document.createElement('li')
     liElement.textContent = val ; 
     const numStr = String(Math.abs(val));
     
     if(val === 0){
        liElement.textContent = `${val} - zero`;
     }
     else if(numStr.length === 1 && val > 0){
        liElement.textContent = `${val} - Single Digit Positive Number`;
     } 
     else if(numStr.length === 2 && val > 0){
         liElement.textContent = `${val} - Double Digit Positive Number`;
      } 
     else if(numStr.length === 1 && val < 0){
         liElement.textContent = `${val} - Single Digit Negative Number`;
      }
     else if(numStr.length === 2 && val < 0){
         liElement.textContent = `${val} - Double Digit Negative Number`;
      }
     else{
       liElement.textContent = `Not a Number.`
     }
     
     result.appendChild(liElement)
   }

  </script>
</body>

</html>
