// FUNCAO ADICIONAR DADOS
function adicionarDados(){

	// PEGA O NOME DO USUARIO
	var nomeUsuario = document.getElementById('nomeUsuarioInput').value;

	// PEGA O TELEFONE DO USUARIO
	var telefoneUsuario = document.getElementById('telefoneUsuarioInput').value;


	// VERIFICAR SE OS CAMPOS NOME E TELEFONE ESTAO VAZIOS


   for(var i=0; i<contatoForm.elements.length; i++)
	 {
       if(contatoForm.elements[i].value.length == 0)
			 {
				 alert ('Preencha o campo ' + contatoForm.elements[i].name);
				//  document.querySelector("#contatoForm .messageUser p").style.display="block";;
	 		 	 contatoForm.elements[i].style.border="solid 1px red";
       }

			 else
			 {
				 contatoForm.elements[i].style.border="none";
			 }
   }



	 // LIMPA OS CAMPOS, APOS OS DADOS SEREM INSERIDOS, REMOVE AS BORDAS e INSERE FOCO NO NOME

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
