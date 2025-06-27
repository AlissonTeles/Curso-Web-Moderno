(function ($) {
  $.fn.temporizador = function (opcoes) {
    var settings = $.extend(
      {
        mensagem: "Em breve",
        horario: "23:59:59",
      },
      opcoes
    );

    const horaDezena = $("<span class='digito'>").html(0);
    const horaUnidade = $("<span class='digito'>").html(0);
    const horaSeparador = $("<span class='separador'>").html(":");
    const minutoDezena = $("<span class='digito'>").html(0);
    const minutoUnidade = $("<span class='digito'>").html(0);
    const minutoSeparador = $("<span class='separador'>").html(":");
    const segundoDezena = $("<span class='digito'>").html(0);
    const segundoUnidade = $("<span class='digito'>").html(0);

    const mensagem = $("<div class='mensagem'>").html(settings.mensagem);

    $(this).addClass("temporizador");

    $(this).append(
      horaDezena,
      horaUnidade,
      horaSeparador,
      minutoDezena,
      minutoUnidade,
      minutoSeparador,
      segundoDezena,
      segundoUnidade,
      mensagem
    );

    const getTimeRegex = new RegExp(/(\d\d):(\d\d):(\d\d)/);
    const horario = getTimeRegex.exec(settings.horario);
    console.log(horario);

    const temporizador = setInterval(() => {
      const dataAtual = new Date();
      const alvo = new Date();

      alvo.setHours(horario[1], horario[2], horario[3]);

      const diferencaTempo = alvo.getTime() - dataAtual.getTime();
      console.log(diferencaTempo);
      if (diferencaTempo >= 0) {
        const novoHorario = getTimeRegex.exec(
          new Date(diferencaTempo).toISOString()
        );

        console.log(novoHorario);
        $(horaDezena).html(novoHorario[1][0]);
        $(horaUnidade).html(novoHorario[1][1]);
        $(minutoDezena).html(novoHorario[2][0]);
        $(minutoUnidade).html(novoHorario[2][1]);
        $(segundoDezena).html(novoHorario[3][0]);
        $(segundoUnidade).html(novoHorario[3][1]);
      } else clearInterval(temporizador);
    }, 1000);

    return this;
  };
})(jQuery);
