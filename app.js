<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>replit</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>
  <h1>Capitalize Words Program</h1>
  <form id="textForm">
    <label for="sentence">Enter a sentence:</label>
    <input type="text" id="sentence" />
    <button type="submit">Capitalize Words</button>
  </form>
  <div id="result"></div>


  <script>

    const textForm = document.querySelector('#textForm')
    const result = document.querySelector('#result')
    const sentence = document.querySelector('#sentence')

    textForm.addEventListener('submit', function(e){
      e.preventDefault();

      const text = sentence.value;
      const words = text.split(" ");

      if(words.length < 4){
        for(let i=0; i<words.length; i++){
          words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
      }
      else{
        words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
      }

      result.textContent = words.join(' ');
      
    })

  </script>
</body>

</html>
