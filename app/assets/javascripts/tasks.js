// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).on("ready page:load", ready);

$('#tasks').append(data);
$('#task_name').val('');

function ready() {
  $('#new_task').on('ajax:success', newTask);

  function newTask(event, data) {
    $('body').append(data);
    //  window.location.reload();
  }
}
