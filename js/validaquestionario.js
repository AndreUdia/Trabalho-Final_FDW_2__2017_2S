// <script language="javascript" type="text/javascript">
function validar(acertos){
	var pontos = 0;
	var q1 = form1.QAOC1.value;
	var q2 = form1.QAOC2.value;
	var q3 = form1.QAOC3.value;
	var q4 = form1.QAOC4.value;
	var q5 = form1.QAOC5.value;
	if(q1=="b"){
		pontos++;
	}
	if(q2=="a"){
		pontos++;
	}
	if(q3=="c"){
		pontos++;
	}
	if(q4=="d"){
		pontos++;
	}
	if(q5=="b"){
		pontos++;
	}
	acertos = pontos;
	return acertos;
}	

