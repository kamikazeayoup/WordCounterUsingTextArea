document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('clearbtn').addEventListener('click', function() {
        location.reload();
    });
});


function CountWords(event){
    event.preventDefault();

    var text = document.getElementById('textar').value
    const words = text.split(/\s+/).filter(function (word) {
        return word.length > 0;
      });


      let longestWord = '';
      words.forEach(function (word) {
        if (word.length > longestWord.length) {
          longestWord = word;
        }
      });

      $('#textar').highlightWithinTextarea({
        highlight: longestWord
        });

        document.getElementById('textar').value = ''; // Set textarea value to an empty string

      console.log(longestWord)

      document.getElementById('result').innerHTML = `Total Words : <span style="color: red;">${words.length}</span>`;
    }