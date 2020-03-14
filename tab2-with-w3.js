<!DOCTYPE html>
<html>
<title>W3.CSS</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<script src="https://www.w3schools.com/lib/w3.js"></script>
<body>

<div class="w3-container">
  <h2>Closable Tabs</h2>
  <p>To close a tab, add onclick="this.parentElement.style.display='none'" to an element inside the tab container.</p>
  <p><strong>Tip:</strong> The w3-button class can be used to style the close button (x):</p>
</div>

<div class="w3-bar w3-black">
  <button id="tab1" class="w3-bar-item w3-button renk" onclick="(w3.show('#London'),w3.hide('#Paris'),w3.hide('#Tokyo'),w3.addClass('#tab1','w3-red'),w3.removeClass('#tab2,#tab3','w3-red'))">London</button>
  <button id="tab2" class="w3-bar-item w3-button" onclick="(w3.show('#Paris'),w3.hide('#Tokyo'),w3.hide('#London'),w3.addClass('#tab2','w3-red'),w3.removeClass('#tab1,#tab3','w3-red'))">Paris</button>
  <button id="tab3" class="w3-bar-item w3-button" onclick="(w3.show('#Tokyo'),w3.hide('#Paris'),w3.hide('#London'),w3.addClass('#tab3','w3-red'),w3.removeClass('#tab2,#tab1','w3-red'))">Tokyo</button>
</div>


<div id="London" class="w3-container w3-display-container city">
  <span onclick="this.parentElement.style.display='none'"
  class="w3-button w3-large w3-display-topright">&times;</span>
  <h2>London</h2>
  <p>London is the capital city of England.</p>
</div>

<div id="Paris" class="w3-container w3-display-container city" style="display:none">
  <span onclick="this.parentElement.style.display='none'"
  class="w3-button w3-large w3-display-topright">&times;</span>
  <h2>Paris</h2>
  <p>Paris is the capital of France.</p> 
</div>

<div id="Tokyo" class="w3-container w3-display-container city" style="display:none">
  <span onclick="this.parentElement.style.display='none'"
  class="w3-button w3-large w3-display-topright">&times;</span>
  <h2>Tokyo</h2>
  <p>Tokyo is the capital of Japan.</p>
</div>



</body>
</html>
