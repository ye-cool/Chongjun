export function DownloadPdf(data) {
  let url = window.URL.createObjectURL(data);
  let link = document.createElement("a");
  link.style.display = "none";
  link.href = url;
  link.download = "简历.pdf";
  document.body.appendChild(link);
  link.click();
  window.URL.revokeObjectURL(link.href);
}
