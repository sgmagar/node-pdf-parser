const fs = require("fs")
const PDFParser = require("pdf2json")

function getPDFData(filepath) {
  let pdfParser = new PDFParser()
  return new Promise((resolve, reject) => {
    pdfParser.on("pdfParser_dataError", (errData) => reject(`Parse Error: ${errData.parserError}`))
    pdfParser.on("pdfParser_dataReady", (pdfData) => resolve(JSON.stringify(pdfData)))
    pdfParser.loadPDF(filepath)
  })
}
(async () => console.log(await getPDFData("sample.pdf")))()
