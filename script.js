const form1 = document.getElementById("formulario1");
    const form2 = document.getElementById("formulario2");
    const selectFrios = document.getElementById("frios");
    const campoQuantidade = document.getElementById("qtd-frios");

    selectFrios.addEventListener("change", () => {
      campoQuantidade.style.display = selectFrios.value === "sim" ? "block" : "none";
    });

    form1.addEventListener("submit", (e) => {
      e.preventDefault();

      const nome = document.getElementById("nome").value;
      const frios = document.getElementById("frios").value === "sim";
      const quantidade = parseInt(document.getElementById("quantidade").value) || 0;
      const endereco = document.getElementById("endereco").value;
      const observacoes = document.getElementById("observacoes").value;
      const dataHora = new Date().toLocaleString("pt-BR");

      const resumo = `
        <strong>--- Supermercado Haru ---</strong><br>
        Nome cliente: ${nome}<br>
        VolumesFrios: ${frios && quantidade ? quantidade : "NÃO TEM"}<br>
        Endereço: ${endereco}<br>
        Data/Hora: ${dataHora}<br>
        Observações: ${observacoes}
      `;

      document.getElementById("resumo1").innerHTML = resumo;
      document.getElementById("resumo1").style.display = "block";
      document.getElementById("print1").style.display = "inline-block";

      // Exibir segundo formulário
      form2.style.display = "block";
      document.getElementById("nome2").value = nome; // Preenche nome no segundo form
    });

    form2.addEventListener("submit", (e) => {
      e.preventDefault();

      const nome = document.getElementById("nome2").value;
      const volumesFrios = parseInt(document.getElementById("volumesFrios").value) || 0;
      const volumesEmbalados = parseInt(document.getElementById("volumesEmbalados").value) || 0;
      const qtdCopias = parseInt(document.getElementById("qtdCopias").value) || 1;
      const total = volumesFrios + volumesEmbalados;

      let etiquetas = "";
      for (let i = 1; i <= qtdCopias; i++) {
        etiquetas += `
          <strong>--- Supermercado Haru ---</strong><br>
          Nome cliente: ${nome}<br>
          Total de volumes: ${total}<br><hr>`;
      }

      document.getElementById("etiquetas").innerHTML = etiquetas;
      document.getElementById("etiquetas").style.display = "block";
      document.getElementById("print2").style.display = "inline-block";
    });

    function printSection(sectionId) {
      const printSection = document.getElementById(sectionId);

      // Remove classe visível de outras seções
      document.querySelectorAll('.print-section').forEach(el => {
        el.classList.remove('print-visible');
      });

      // Adiciona apenas à seção desejada
      printSection.classList.add('print-visible');

      window.print();

      setTimeout(() => {
        printSection.classList.remove('print-visible');
      }, 1000);
    }