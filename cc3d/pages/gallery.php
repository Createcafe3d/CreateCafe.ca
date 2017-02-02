<div id="section">
  <?php

    include 'instatoken.php';
    $api_base = "https://api.instagram.com/v1";
    $api_path = "/users/2558029400/media/recent/";
    $api_url = $api_base . $api_path . "?access_token=" . $access_token . "&count=6";

  ?>
  <script type="text/javascript">
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    $.ajax({
      url: "<?php echo $api_url ?>",
      type: 'GET',
      dataType: 'jsonp'
    }).done(function(data) {
      $("#insta_loading_icon").hide();
      $.each(data.data, function(idx, ig_post) {
        var img_url = ig_post.images.standard_resolution.url;
        var img_link = ig_post.link;
        var img_caption = ig_post.caption.text;
        var dt = new Date(parseInt(ig_post.created_time * 1000));
        var img_time = months[dt.getMonth()] + " " + dt.getDate() + ", " + dt.getFullYear();
        $("#instafeed").append(
          "<div class='ig_post'><a href='" + img_link + "' target='_blank'><img src='" + img_url + "' alt='Instagram Image' /></a><span><span><a href='" + img_link + "' target='_blank'>" + img_time + "</a></span>" + img_caption + "</span></div>"
        );
      });
    });
  </script>
  <div class="social_media">

    <div class="social_icons">
      <h2>Follow us on social media:</h2>
      <a class="facebook" href="https://www.facebook.com/CreateCafe3D" target="_blank"><i class="fa fa-facebook-square fa-3x" aria-hidden="true"></i><span>CreateCafe3D</span></a>
      <a class="twitter" href="https://twitter.com/createcafe3d" target="_blank"><i class="fa fa-twitter-square fa-3x" aria-hidden="true"></i><span>@createcafe3d</span></a>
      <a class="instagram" href="https://www.instagram.com/createcafe3d/" _target="blank"><i class="fa fa-instagram fa-3x" aria-hidden="true"></i><span>@createcafe3d</span></a>
    </div>

    <h2><a href="http://www.instagram.com/createcafe3d" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a>&nbsp; Feed</h2>
    <div id="instafeed">
      <i class="fa fa-spinner fa-pulse fa-fw" id="insta_loading_icon"></i>
    </div>
  </div>
</div>
