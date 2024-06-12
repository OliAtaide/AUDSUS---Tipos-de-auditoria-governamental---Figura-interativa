var rows = [
  "Necessidades",
  "Objetivos",
  "Insumos",
  "Atividades",
  "Produtos",
  "Resultados",
  "Impactos",
  "Efeito",
];

var labels = [
  "São os problemas, as dificuldades ou as demandas do conjunto da sociedade ou de alguns grupos específicos reconhecidos como destinatários legítimos de bens e serviços públicos, que a intervenção pública procura resolver ou superar.",
  "São as enunciações iniciais dos efeitos que se pretendem obter com a intervenção.",
  "São os bens e serviços empregados na produção de outros bens e serviços que serão entregues a outras organizações ou diretamente ao público alvo de uma intervenção.",
  "São procedimentos utilizados para converter recursos em produtos. O conceito abrange igualmente a comunicação de informações de gestão e a respectiva utilização pelos gestores.",
  "São bens ou serviços obtidos por meio da conversão de insumos e que serão entregues como realização da intervenção pública.",
  "São alterações ou efeitos imediatos experimentados pelos destinatários diretos da intervenção pública.",
  "São consequências socioeconômicas de longo prazo que podem ser observadas após um determinado período posterior à participação na intervenção e que podem afetar os destinatários diretos da intervenção ou os destinatários indiretos não inseridos na intervenção, que tenham sido por ela beneficiados ou prejudicados.",
  "É a alteração que resulta da execução da intervenção e que está normalmente relacionada com os seus objetivos. Os efeitos incluem os resultados e os impactos. Podem ser esperados ou não, positivos ou negativos (por exemplo, uma nova estrada que atrai investidores para uma região, mas que causa níveis de poluição inaceitáveis nas zonas que atravessa).",
];

function printRows() {
  let btns = [];
  let tr = [];

  labels.forEach(function (v, i) {
    btns.push(
      `
        <div class="btn-slot">
          <div id="btn${i}" class="btn btn-dimension position-absolute" data-index="${i}">
            ${rows[i]}
          </div>
        </div>
      `
    );
    tr.push(
      `
        <tr>
          <th scope="row">
            <div id="slot${i}" class="dimension-slot" data-button="none" data-label="#label${i}" data-index="${i}">
            </div>
          </th>
          <td>
            <div class="meaning-label" id="label${i}">
              ${v}
            </div>
          </td>
        </tr>
      `
    );
  });

  btns = btns.sort(() => Math.random() - 0.5);
  console.log(btns);

  $(".dimensions").html(btns);
  $(".dimensions").prepend('<div class="label">Dimensões: </div>');

  $("tbody").html(tr);
  $(".btn-dimension").draggable();

  $(".dimension-slot").droppable({
    accept: ".btn-dimension",
    tolerance: "pointer",
    drop: function (event, ui) {
      if (!$(this).hasClass("dimension-slot-filled")) {
        $(this).addClass("dimension-slot-filled");
        ui.draggable.addClass("btn-dimension-filled");
      }
      let pos = $(this).offset();

      let id = ui.draggable.attr("id");

      $(this).attr("data-button", "#" + id);

      ui.draggable.css({
        top: pos.top + "px",
        left: pos.left + "px",
      });
    },
    out: function (event, ui) {
      if ($(this).hasClass("dimension-slot-filled")) {
        let drag_id = "#" + ui.draggable.attr("id");
        let btn_id = $(this).data("button");
        console.log(drag_id, btn_id);
        if (drag_id == btn_id) {
          $(this).removeClass("dimension-slot-filled");
          ui.draggable.removeClass("btn-dimension-filled");
        }
      }
    },
  });

  $("#verificar").click(function () {
    let isComplete = $(".dimension-slot-filled").length == rows.length;

    if (isComplete) {
      let acertos = 0;

      $(".dimension-slot-filled").each(function (i) {
        let btn_id = $(this).data("button");

        let btn_index = $(btn_id).data("index");
        let slot_index = $(this).data("index");

        let isCorrect = btn_index == slot_index;

        console.log(btn_index, slot_index, isCorrect);

        let slot_label = $($(this).data("label"));
        if (isCorrect) {
          slot_label.addClass("right");
          acertos += 1;
        } else {
          slot_label.addClass("wrong");
        }
      });

      
      if (acertos == rows.length) {
        $("#rightModal").modal("show");
      } else {
        $("#wrongModal").modal("show");
      }
    }
  });
}

printRows();
