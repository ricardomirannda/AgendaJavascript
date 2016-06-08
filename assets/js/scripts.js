// FUNCAO ADICIONAR DADOS
function adicionarDados(){

	// PEGA O NOME DO USUARIO
	var nomeUsuario = document.getElementById('nomeUsuarioInput').value;

	// PEGA O TELEFONE DO USUARIO
	var telefoneUsuario = document.getElementById('telefoneUsuarioInput').value;
  var mensagem_erro = "";


	// VERIFICAR SE OS CAMPOS NOME E TELEFONE ESTAO VAZIOS
   for(var i=0; i<contatoForm.elements.length; i++)
	 {
       if(contatoForm.elements[i].value === "")
			 {
				  document.querySelector("#contatoForm .messageUser p").style.display="block";
					mensagem_erro += contatoForm.elements[i].name + " <br> ";
					contatoForm.elements[i].style.border="solid 1px red";
       }

			 else
			 {
				 contatoForm.elements[i].style.border="none";
				 document.querySelector("#contatoForm .messageUser p").style.display="none";
			 }
   }

   document.querySelector("#contatoForm .messageUser p").innerHTML = "Preencha os campos: " +  "<br>" + mensagem_erro;



	 // LIMPA OS CAMPOS, APOS OS DADOS SEREM INSERIDOS  e  AJUSTA O FOCO NO NOME e TELEFONE
		if (nomeUsuario === "")
		{
			document.getElementById("nomeUsuarioInput").focus();
			document.getElementById("nomeUsuarioInput").value = "";
			return false
		}


		if (telefoneUsuario === "")
		{
			document.getElementById("telefoneUsuarioInput").focus();
			document.getElementById("telefoneUsuarioInput").value = "";
			return false
	 	}



		// LIMPA OS CAMPOS APOS O SUBMIT
		document.contatoForm.reset();


		// CRIACAO AUTOMATICA DAS ROWS
		var table = document.getElementById("tabelaContatos");
		var row = table.insertRow(1);
		var colunaCheckBox = row.insertCell(0);
		var colunaNome = row.insertCell(1);
		var colunaTelefone = row.insertCell(2);
		colunaNome.innerHTML = nomeUsuario;
		colunaTelefone.innerHTML = telefoneUsuario;



		// CRIACAO AUTOMATICA DO CHECKBOX - SOLUCAO  1
		var createCheckbox = document.createElement("input");
		createCheckbox.setAttribute("type", "checkbox");
		colunaCheckBox.appendChild(createCheckbox);

		// CRIACAO AUTOMATICA DO CHECKBOX - SOLUCAO  2
		// var createCheckbox = document.createElement("input");
		// createCheckbox.setAttribute("type", "checkbox");
		// document.querySelector("#tabelaContatos tr > td").appendChild(createCheckbox);

}
