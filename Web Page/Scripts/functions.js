if(!field.value.match(pattern))
	{
	alert(valimessage);do_blink(field);return false;
	}
	
	}
	else if(valiclass=="zip")
	{
	pattern="[0-9]{5}$";
	if(!field.value.match(pattern))
	{
	alert(valimessage);do_blink(field);return false;
	}
	
	}
	
	else if(valiclass=="code")
	{
	pattern="[0-9]{3}$";
	if(!field.value.match(pattern))
	{
	alert(valimessage);do_blink(field);return false;
	}
	
	}
	
	
	else if(valiclass=="select")
	{
	if(field.options[field.selectedIndex].text.toLowerCase()=="select")
	{
	alert(valimessage);
	field.focus();
	return false;
	}
		
	}
	
	
	else if(valiclass=="date")
	{
	pattern="[0-9]{4}\\-[1-9]{1,2}\\-[1-9]{1,2}$";
	if(!field.value.match(pattern))
	{
	alert(valimessage);do_blink(field);return false;
	}
}
else if(valiclass=="integer")
{
if(isNaN(field.value)||(field.value.indexOf(".")!=-1)||field.value<=0)
{
alert(valimessage);do_blink(field);return false;
}
}
else if(valiclass=="picture")
{
if(field.value.length<1)
return true;
values=field.value.toLowerCase();
if(!ends_with(values,".jpg"))
			  {
alert(values+" is not a valid jpg file");do_blink(field);return false;
}

}
return true;
}
catch(ex)
{
alert(ex.message);
return true;
}
}



function call_validate(form,from,to)
{
for(counter=from;counter<to;counter++)
{
bool=validate(form[counter]);
if(!bool)
{
return false;
break;
}
}
form.submit();
}





function call_validate_ajax(form,from,to)
{
for(counter=from;counter<to;counter++)
{
bool=validate(form[counter]);
if(!bool)
{
return false;
break;
}
}
return true;
}


/////////////////////
function getIndex(what,form) {
    for (var i=0;i<form.length;i++)
        if (what == form[i])
            return i;
    return -1;
}
////////////////////////////////////

function ends_with(hay,neddle)
{
hay=hay.replace(/^\s*|\s*$/g,"");
neddle_length=neddle.length;
hay_length=hay.length;
hay_part=hay.substring((hay_length-neddle_length),hay_length);
return (hay_part==neddle)
}


function  enable_form(form,bools)
{
	
for(counter=0;counter<form.length;counter++)
{
form[counter].disabled=!bools;	
}
}


function loading(bool)
{
try
{
comp=document.getElementById("loading");
if(bool)
{
comp.style.visibility="visible";
}
else
{
comp.style.visibility="hidden";
}
}
catch(d)
{
alert(d.message);	
}
}

function validate_range()
{
//alert(validate_range.arguments.length);	
for(counter=0;counter<validate_range.arguments.length;counter++)
{
bool=validate(validate_range.arguments[counter]);
if(!bool)
{
return false;
break;
}
}
validate_range.arguments[0].form.submit();
return true;
}

function delete_material(id,query)
{
	if(confirm("Are you sure you want to delete"))
	{
	location.replace("delete_material.php?id="+id+"&"+query);	
	}
	return false;
}

function delete_category(id,query)
{
if(confirm("Are you sure you want to delete"))
{
location.replace("delete_category.php?id="+id+"&"+query);	
}
return false;
}

function delete_end_category(id, query)
{
	if(confirm("Are you sure you want to delete"))
	{
		location.replace("delete_end_category.php?id="+id+"&"+query);	
	}
}

function delete_mid_category(id,query)
{
if(confirm("Are you sure you want to delete"))
{
location.replace("delete_mid_category.php?id="+id+"&"+query);	
}
return false;
}


function delete_product(id,query)
{
if(confirm("Are you sure you want to delete"))
{
location.replace("delete_product.php?id="+id+"&"+query);	
}
return false;	
}


function delete_image(id,query)
{
if(confirm("Are you sure you want to delete"))
{
location.replace("delete_image.php?id="+id+"&"+query);	
}
return false;	
}

function delete_image1(id,query)
{
if(confirm("Are you sure you want to delete"))
{
location.replace("delete_image1.php?id="+id+"&"+query);	
}
return false;	
}


function delete_attribute(id,query)
{
if(confirm("Are you sure you want to delete"))
{
	
location.replace("delete_attribute.php?att_id="+id+"&"+query);	
}
return false;	
}


function manage_payment(div)
{
	divdebit_card.style.visibility="hidden";
	divcheque.style.visibility="hidden";
	divmoney_order.style.visibility="hidden";
	div.style.visibility="visible";
}


function delete_confirm_sales(delte_where,delete_what,id,return_where,date1,date2)
{
	alert("Sales once deleted are not recoverable");
bool=confirm("Are you sure you want to delete " + delete_what+" ?");
if(bool)
{
	
location.replace("delete_sales.php?delete_where="+delte_where+"&id="+id+"&return_where="+return_where+"&datefrom="+date1+"&dateto="+date2);
//alert("delete.php?delete_where="+delte_where+"&id="+id+"&return_where="+return_where+"&"+extra);
}
else
{
return false;	
}
}













