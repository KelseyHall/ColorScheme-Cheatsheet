import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const SaveScheme = (title) => {
  const input = document.getElementById('capture');
  html2canvas(input).then((canvas) => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'p',
      unit: 'pt',
      format: [canvas.width, canvas.height],
    });

    pdf.addImage(imgData, 'JPEG', 0, 0, canvas.width, canvas.height);
    pdf.save(`${title}-saved.pdf`);
  });
};

export default SaveScheme;
