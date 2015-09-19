<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/style.css">
    <script src="js/scripts.js"></script>

    <title>Order a Pizza!</title>
  </head>
  <body>
    <div class="container">
      <div class="title">
        <h2>Welcome to Blah's Pizza</h2>
      </div>

      <div class="row">
          <div class="col-sm-3">
            <div class="size">
              <p>Select a Size:</p>
              <select id="selectSize">
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
              </select>
            </div>
            <div class="num">
              <p>Select how many:</p>
              <select id="selectNum">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div class="cost">
              <span class="calculate">Calculate the price:</span>
              <span class="the-cost"></span>
            </div>
            <div class="the-order">
              <span class="order"></span>
            </div>
          </div>


          <div class="col-sm-9">
            <div class="row">
              <div class="availableToppings col-md-6">
                <ul class="available toppingUl list-group">Choose your toppings!
                </ul>
              </div>
              <div class="selectedToppings col-md-6 list-group">
                <ul class="selected toppingUl">The toppings you selected!
                </ul>
              </div>
            </div>
          </div>
      </div>



      <div class="row">

      </div>
    </div>
  </body>
</html>
