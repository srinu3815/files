/* browse button */
$(document).ready(function() {
    $('.btn').on('click', function() {
      $('.file').trigger('click');
    });
    $('.file').on('change', function() {
      var fileName = $(this)[0].files[0].name;    
      $('#file-name').val(fileName);
    });
  })
  /* browse button */