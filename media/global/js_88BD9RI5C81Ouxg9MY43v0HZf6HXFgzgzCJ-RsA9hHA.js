// Disney Forced Timestamp

(function ($) {

  Drupal.behaviors.timeWarp = {
    attach: function(context, settings) {
      $('#edit-forced-timestamp').change(function() {
        if (!isNaN($(this).val())) {
          $('#timewarp-submit').click();
        } 
        else if ($(this).val() == 'C') {
          $('#block-dimg-forced-timestamp-dimg-timewarp-popup').show();
        }
      });
      $('#timewarp_popup_close').click(function() {
        $('#block-dimg-forced-timestamp-dimg-timewarp-popup').hide();
      });
    }
  };

})(jQuery);
;
// $Id:

(function ($) {

  Drupal.behaviors.user_alert_get_message = {
    attach: function(context) {
      $.ajax({
        type: 'GET',
        url: Drupal.settings.basePath + Drupal.settings.user_alert.url_prefix + 'js/user-alert/get-message',
        success: function(response) {
          var id = $('.block-user-alert').attr('id');
          $('#' + id).html(response[1].data);
        }
      });
    	
      $('body').delegate('div.user-alert-close a', 'click', function() {
        id = $(this).attr('rel');
        $.ajax({
          type: 'GET',
          data: 'message=' + id,
          url: Drupal.settings.basePath + Drupal.settings.user_alert.url_prefix + 'js/user-alert/close-message',
          success: function(response) {
            $('#user-alert-' + id).fadeOut('slow');
          }
        });
      });
  	}
  };
}(jQuery));;