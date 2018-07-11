/* Written By: Anthony Masullo */

/* Any numbered button is clicked at least once */
var cur_disp_val = "";

$('#button1').click(function() {
	/* note that $(this).val() is automatically converted to a string during the concatenation since cur_disp_val already is a string */
	cur_disp_val += $(this).val();
	$('#display').val(Number(cur_disp_val));
	})
$('#button2').click(function() {
	cur_disp_val += $(this).val();
	$('#display').val(Number(cur_disp_val));
	})
$('#button3').click(function() {
	cur_disp_val += $(this).val();
	$('#display').val(Number(cur_disp_val));
	})
$('#button4').click(function() {
	cur_disp_val += $(this).val();
	$('#display').val(Number(cur_disp_val));
	})
$('#button5').click(function() {
	cur_disp_val += $(this).val();
	$('#display').val(Number(cur_disp_val));
	})
$('#button6').click(function() {
	cur_disp_val += $(this).val();
	$('#display').val(Number(cur_disp_val));
	})
$('#button7').click(function() {
	cur_disp_val += $(this).val();
	$('#display').val(Number(cur_disp_val));
	})
$('#button8').click(function() {
	cur_disp_val += $(this).val();
	$('#display').val(Number(cur_disp_val));
	})
$('#button9').click(function() {
	cur_disp_val += $(this).val();
	$('#display').val(Number(cur_disp_val));
	})
$('#button0').click(function() {
	cur_disp_val += $(this).val();
	$('#display').val(Number(cur_disp_val));
	})
	
/* Any operater is clicked at least once */
var cur_operator = '';
var tot_calculated = 0;

/* Addition operator is clicked */
$('#addButton').click(function() {
	if (cur_operator == '-') {
		tot_calculated -= Number(cur_disp_val);
	}
	else if (cur_operator == '*') {
		tot_calculated *= Number(cur_disp_val);
	}
	else if (cur_operator == '/') {
		tot_calculated /= Number(cur_disp_val);
	}
	else {
		if (cur_disp_val != "" && cur_operator != '+'){
			/* This means that a number was clicked right after the equals button was clicked, so a a new operation has started. */
			tot_calculated = 0;
			tot_calculated += Number(cur_disp_val);
		}
		else {
			/* This means one of two things: the addition operator was clicked right after the equals button was clicked, 
			   or a series of addition operators is being calculated. */
			tot_calculated += Number(cur_disp_val);
		}
	} 
	cur_disp_val = "";
	cur_operator = '+';
	$('#display').val(Number(tot_calculated));
 })

/* Subtraction operator is clicked */
$('#subtractButton').click(function() {
	if (cur_operator == '+'){
		tot_calculated += Number(cur_disp_val);
	}
	else if (cur_operator == '*') {
		tot_calculated *= Number(cur_disp_val);
	}
	else if (cur_operator == '/') {
		tot_calculated /= Number(cur_disp_val);
	}
	else {
		if (cur_disp_val != "" && cur_operator != '-'){
			/* This means that a number was clicked right after the equals button was clicked, so a a new operation has started. */
			tot_calculated = 0;
			tot_calculated += Number(cur_disp_val);
		}
		else {
			/* This means one of two things: the subtraction operator was clicked right after the equals button was clicked, 
			   or a series of subtraction operators is being calculated. */
			tot_calculated -= Number(cur_disp_val);
	  }
	}
	cur_disp_val = "";
	cur_operator = '-';
	$('#display').val(Number(tot_calculated));
 })
 
/* Multiplication operator is clicked */
$('#multiplyButton').click(function() {
	if (cur_operator == '-') {
		tot_calculated -= Number(cur_disp_val);
	}
	else if (cur_operator == '/') {
		tot_calculated /= Number(cur_disp_val);
	}
	else if (cur_operator == '*'){
		tot_calculated *= Number(cur_disp_val);
	}
	else {
		if (cur_disp_val != "" && cur_operator != '+'){
			/* A number was clicked right after the equals button was clicked. 
		     This means a new operation has started */
			tot_calculated = 0;
			tot_calculated += Number(cur_disp_val);
		}
		else {
			/* This means that the multiplication operator was clicked right after either the equals button or the addition button */
			tot_calculated += Number(cur_disp_val);
		}	
	}
	cur_disp_val = "";
	cur_operator = '*';
	$('#display').val(Number(tot_calculated));
 })

/* Division operator is clicked */
$('#divideButton').click(function() {
	if (cur_operator == '-'){
		tot_calculated -= Number(cur_disp_val);
	}
	else if (cur_operator == '*') {
		tot_calculated *= Number(cur_disp_val);
	}
	else if (cur_operator == '/') {
		tot_calculated /= Number(cur_disp_val);
	}
	else {
		if (cur_disp_val != "" && cur_operator != '+'){
			/* A number was clicked right after the equals button was clicked. 
		     This means a new operation has started */
			tot_calculated = 0;
			tot_calculated += Number(cur_disp_val);
		}
		else {
			/* This means that the division operator was clicked right after either the equals button or the addition button */
			tot_calculated += Number(cur_disp_val);
		}
	}
	cur_disp_val = "";
	cur_operator = '/';
	$('#display').val(Number(tot_calculated));
 })
 
/* Equals button is clicked */
$('#equalsButton').click(function() {
	if (cur_operator == '+'){
		tot_calculated += Number(cur_disp_val);
	}
	if (cur_operator == '-'){
		tot_calculated -= Number(cur_disp_val);
	}
	if (cur_operator == '*'){
		tot_calculated *= Number(cur_disp_val);
	}
	if (cur_operator == '/'){
		tot_calculated /= Number(cur_disp_val);
	}
	cur_disp_val = "";
	$('#display').val(Number(tot_calculated));
	cur_operator = '=';
})	

/* Clear button is clicked */
$('#clearButton').click(function() {
	cur_operator = '=';
	cur_disp_val = "";
	tot_calculated = 0; 
	$('#display').val(cur_disp_val);
})
