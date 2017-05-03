function html2pdf(){

  var doc = new jsPDF({
    orientation: 'landscape'
  });

  source = $('body').get(0);

  // We'll make our own renderer to skip this editor
  var specialElementHandlers = {
  	'#editor': function(element, renderer){
  		return true;
  	}
  };

  // All units are in the set measurement for the document
  // This can be changed to "pt" (points), "mm" (Default), "cm", "in"
  doc.fromHTML(source, 15, 15, {
  	'width': 180,
  	'elementHandlers': specialElementHandlers
  });
    doc.save("inventario.pdf");
}
