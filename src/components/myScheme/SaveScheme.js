import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const SaveScheme = (title) => {
  const input = document.getElementById('capture');
  html2canvas(input).then((canvas) => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();
    pdf.addImage(imgData, 'JPEG', 10, 10);
    pdf.save(`${title}-saved.pdf`);
  });
};

export default SaveScheme;
