# 🛒 Supermercado Haru - Sistema de Empacotamento e Etiquetagem

Este é um sistema simples e funcional desenvolvido para auxiliar o processo de **empacotamento de produtos** e **impressão de etiquetas** no Supermercado Haru.

---

## 📋 Descrição

O projeto permite que funcionários do supermercado:

- Registrem os **dados do cliente**, incluindo volumes refrigerados e endereço.
- Gerem um **resumo automático** para organização logística.
- Criem **etiquetas personalizadas** com o nome do cliente e quantidade de volumes.
- Imprimam facilmente essas informações de maneira formatada.

É uma solução prática para organizar o despacho e a separação de pedidos.

---

## 🧰 Tecnologias Utilizadas

- **HTML5** – Estruturação da interface.
- **CSS3** – Estilização visual e suporte à impressão.
- **JavaScript (Vanilla)** – Lógica de exibição, geração de dados e interações.

---

## ✅ Funcionalidades

| Funcionalidade | Descrição |
|----------------|-----------|
| 📄 Formulário de cliente | Coleta nome, volumes frios, endereço e observações |
| 📦 Resumo automático | Exibe um resumo dos dados informados para conferência |
| 🏷️ Impressão de etiquetas | Permite gerar etiquetas com cópias configuráveis |
| 🖨️ Impressão seletiva | Imprime apenas a seção desejada (resumo ou etiquetas) |

---

## 🔗 Como Funciona

1. **Preencha o Formulário 1:**
   - Informe o nome do cliente.
   - Escolha se há volumes frios.
     - Se sim, informe a quantidade.
   - Digite o endereço e observações.
   - Clique em **"Gerar Resumo"**.

2. **Visualize o Resumo:**
   - Os dados aparecem formatados abaixo do formulário.
   - Clique em 🖨️ **Imprimir Resumo** se desejar.

3. **Gere as Etiquetas:**
   - O segundo formulário será exibido automaticamente.
   - Informe o número de volumes e cópias desejadas.
   - Clique em **"Gerar Etiquetas"**.
   - Clique em 🖨️ **Imprimir Etiquetas** para impressão.

---

## 🗂️ Estrutura de Arquivos

```bash
├── index.html          # Estrutura da página e formulários
├── style.css           # Estilização visual e regras de impressão
├── script.js           # Lógica dos formulários, resumos e etiquetas
