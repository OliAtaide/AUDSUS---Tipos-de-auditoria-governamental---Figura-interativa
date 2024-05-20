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

function printRows() {
  let tr = [];

  rows.forEach(function (v, i) {
    tr.push(
      `
            <tr>
                <th scope="row">${v}</th>
                <td>
                    <textarea name="" id="" class="form-control"></textarea>
                </td>
            </tr>
            `
    );
  });

  $("tbody").html(tr);
}

printRows();
