export const fileSystem = {
  id: 1,
  name: "root",
  type: "folder",
  children: [
    {
      id: 2,
      name: "Dokumentos",
      type: "folder",
      children: [
        { id: 3, name: "CV do zabki.pdf", type: "file", size: "245 KB" },
        { id: 4, name: "Wiersz dla tobiasza.docx", type: "file", size: "128 KB" }
      ]
    },
    {
      id: 5,
      name: "Zdjęcia",
      type: "folder",
      children: [
        { id: 6, name: "selfiaczki z biedronki.jpg", type: "file", size: "2.1 MB" },
        { id: 7, name: "tata.png", type: "file", size: "1.8 MB" }
      ]
    },
    {
      id: 8,
      name: "readme.txt",
      type: "file",
      size: "1 KB"
    }
  ]
};