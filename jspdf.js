function generatePDF(){

  var pdf = new jsPDF('landscape');
  pdf.addHTML($('#table')[0], function () {
  pdf.save('inventario.pdf');
  });
}
