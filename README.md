# 📦 Supermercado Haru – Sistema para Empacotamento de Entregas

Este projeto em Java simula um sistema rápido de registro usado por empacotadores no momento da preparação de compras para entrega.  
O objetivo é substituir o preenchimento manual de informações por uma entrada simples no computador, celular ou tablet — agilizando o processo e garantindo mais precisão e organização.

---

## 🚀 Finalidade

No Supermercado Haru, após o fechamento da compra, os empacotadores precisam informar manualmente dados como nome do cliente, volumes refrigerados e endereço de entrega.

Com este sistema:

- ✍️ Digitam rapidamente as informações
- 🧾 O sistema gera um resumo com tudo organizado
- 🖨️ *(Futuramente)* O papel é impresso automaticamente em uma térmica, colado nas sacolas e pronto para o entregador

---

## ✅ Funcionalidades atuais

- 🧑‍💼 Cadastro do nome do cliente
- ❄️ Indicação de presença de volumes para refrigeradores
- 📦 Registro da quantidade de volumes, se houver
- 📍 Registro do endereço de entrega
- 🕒 Impressão da data e hora atual
- 📃 Exibição de um resumo completo e direto para impressão ou consulta

---

## 🔧 Tecnologias utilizadas

- ☕ Java 17+
- 🔠 `Scanner` para entrada de dados via console
- 🗓️ `SimpleDateFormat` para formatação de data e hora
- ⚙️ Estrutura simples com `if/else` e operador ternário
- ⚡ Sistema direto, leve e ideal para uso em campo

---

## 📈 Melhorias futuras (sugestões)

- 🖨️ Integração com impressora térmica para gerar etiqueta automaticamente
- 📱 Interface gráfica ou web leve para uso em celulares e tablets

---

## 💻 Como executar

1. Clone o projeto:

```bash
git clone https://github.com/Marian97a/supermercado-haru.git
```

2. Abra no seu editor preferido (IntelliJ, Eclipse, VS Code...)
3. Execute a classe `Main.java`
4. Siga as instruções no console

---

## 📌 Exemplo de uso

```yaml
--- Supermercado Haru ---
Digite o nome do cliente:
Lilian Gomes
Tem volumes para os refrigeradore(s)? 
true
Digite quantidade de volume no(s) refrigerador(es):
2
Digite o endereço do cliente: 
Av. Flores da Haru, 567

Nome cliente: Lilian Gomes
Volumes Gelados: 2
Endereço: Av. Flores da Haru, 567
Data e hora: 29/04/2025 15:10:22
```

---

## 📁 Estrutura do projeto

```plaintext
supermercado-haru/
├── Main.java
├── README.md
└── .gitignore
```

---

## 👩‍💻 Autoria

Desenvolvido com carinho por **[Maria Viana]**  
🎓 Projeto de estudo em Java voltado para resolver problemas reais com soluções simples.