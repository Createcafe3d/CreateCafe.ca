<script>
      $(function () {

        $('#contact_form_form').on('submit', function (e) {

          e.preventDefault();

          $.ajax({
            type: 'post',
            url: 'process_form.php',
            data: $('#contact_form_form').serialize(),
            success: function () {
              console.log("Form submitted!");
            }
          });

        });

      });
    </script>
<h1>Contact <b>Us</b></h1>
<div id="contact_form">
  <form "enctype="multipart/form-data" id="contact_form_form">
    <input type="text" placeholder="Name" name="name" />
    <input type="email" placeholder="Email" name="email" />
    <textarea placeholder="Message" name="message"></textarea>
    <input type="file" name="attachment" />
    <input type="submit" value="Submit" name="submit" />
  </form>
</div>
