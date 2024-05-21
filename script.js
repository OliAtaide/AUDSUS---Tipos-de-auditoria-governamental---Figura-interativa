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

var respotas = [
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
  let tr = [];

  rows.forEach(function (v, i) {
    tr.push(
      `
            <tr>
                <th scope="row">${v}</th>
                <td>
                    <textarea name="" id="" class="form-control" data-index="${i}"></textarea>
                </td>
            </tr>
            `
    );
  });

  $("tbody").html(tr);
}

printRows();

function allRight() {
  let isAlright = true;
  $("textarea").each(function (i, v) {
    if ($(v).val() == respotas[i]) {
      $(v).removeClass("wrong");
      $(v).addClass("right");
    } else {
      isAlright = false;
      $(v).removeClass("right");
      $(v).addClass("wrong");
    }
  });
  return isAlright;
}

$("#verificar").click(function () {
  let isAlright = allRight();
  if(isAlright){
    $('#rightModal').modal('show');
  }
  else{
    $('#wrongModal').modal('show');
  }
});
