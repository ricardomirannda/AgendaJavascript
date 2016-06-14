// FUNCAO ADICIONAR DADOS
function adicionarDados()
{

		// PEGA O NOME DO USUARIO
		var nomeUsuario = document.getElementById('nomeUsuarioInput').value;

		// PEGA O TELEFONE DO USUARIO
		var telefoneUsuario = document.getElementById('telefoneUsuarioInput').value;

	  var mensagemErro = "";


		// VERIFICAR SE OS CAMPOS NOME E TELEFONE ESTAO VAZIOS
		function verificaCamposVazios()
		{
			 for(var i=0; i<contatoForm.elements.length; i++)
			 {
		       if(contatoForm.elements[i].value === "")
					 {
						  document.querySelector("#contatoForm .messageUser p").style.display="block";
							mensagemErro += contatoForm.elements[i].name + " <br> ";
							contatoForm.elements[i].style.border="solid 1px red";
		       }

					 else
					 {
						 contatoForm.elements[i].style.border="none";
						 document.querySelector("#contatoForm .messageUser p").style.display="none";
					 }
		   }

		   document.querySelector("#contatoForm .messageUser p").innerHTML = "Preencha os campos: " +  "<br>" + mensagemErro;
		}
		verificaCamposVazios()


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


		// CRIACAO AUTOMATICA DAS ROWS e CHECKBOX
		function criaRowsAndCheck()
		{
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
		}

		criaRowsAndCheck()


		// CRIACAO AUTOMATICA DO CHECKBOX - SOLUCAO  2
		// var createCheckbox = document.createElement("input");
		// createCheckbox.setAttribute("type", "checkbox");
		// document.querySelector("#tabelaContatos tr > td").appendChild(createCheckbox);


		// LIMPA OS CAMPOS APOS O SUBMIT
		document.contatoForm.reset();
}



//////////////////////////////////////////////



// FUNCAO REMOVER DADOS
function apagarDados(tabelaContatos)
{
	var table = document.getElementById("tabelaContatos");
	var rowCount = table.rows.length;
	for(var i=0; i<rowCount; i++)
	{
		var row = table.rows[i];
		var createCheckbox = row.cells[0].childNodes[0];
		if(null != createCheckbox && true == createCheckbox.checked)
		{
			table.deleteRow(i);
			rowCount--;
			i--;
		}
	}
}
