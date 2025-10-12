import html2pdf from "html2pdf.js";

export const downloadResume = () => {
  const element = document.querySelector(".resume-container");

  const opt = {
    margin: 0.5,
    filename: "Sayyed_Abdul_Rahim_Resume.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };

  html2pdf().set(opt).from(element).save();
};
