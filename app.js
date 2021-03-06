$(document).ready(function () {
  $(".chat-bot").click(function () {
    var f = $('.user').next();
    var c = $('.user').children();
    f.append(c);

    var firstStep = new cf.ConversationalForm({
      formEl: document.getElementById('request-form'),
      userImage: 'http://via.placeholder.com/24x24',
      robotImage: 'ninja_avatar.png',
      preventAutoStart: true,
      dictionaryData: {
        "input-placeholder": "Digite sua resposta ...",
        "input-no-filter": "Nenhum resultado encontrado com <strong>{input-value}</strong>",
        "user-reponse-and": " e "
      },
      submitCallback: function (e) {
        var formData = firstStep.getFormData();
        var formDataSerialized = firstStep.getFormData(true);
        console.log("Formdata:", formData);
        console.log("Formdata, serialized:", formDataSerialized);
      }
    });
    $('.conversational-form--show').show();
    firstStep.start();
    $("html, body").animate({ scrollTop: $(document).height() }, 0);
  });
});