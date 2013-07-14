// JavaScript Document

//VALIDATION FUNCTIONS

//REQUIRED FIELDS VALDATION (C) W3CSCHOOLS

function validateForm()
{
var x=document.forms["ordnum"]["orderno"].value;
var x=document.forms[""]["orderno"].value;
if (x==null || x=="")
  {
  alert("Order Number must be filled.");
  return false;
  }
}

