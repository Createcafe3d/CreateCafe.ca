<ul id="nav">
  <li><a href="/index.php">Home</a></li>
  <!--li><a href="#">YXE<b>3D</b></a></li-->
  <li><a href="/createforge.php">Create<b>Forge</b></a></li>
  <!--li><a href="#">Litho<b>panes</b></a></li-->
  <li><a href="/shop/"><b>Shop</b></a></li>
  <li><a href="/team.php">Contact<b>&nbsp;Us</b></a></li>
</ul>
<script type="text/javascript">
  function openNavi() {
    $("#nav").css('right', 0);
    event.stopPropagation();
    $(window).click(function() {
      $("#nav").css('right', -150);
    });
    $('#nav').click(function(event){
      event.stopPropagation();
    });
  }
</script>
<div class="nav-toggle" onclick="openNavi()">
  <span class="fa fa-bars"></span>
</div>
