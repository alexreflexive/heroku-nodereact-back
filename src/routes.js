export default async function listBook(app) {
  app.get("/documents", async () => {
    return documents;
  });
}

const documents = [
  {
    id: 1,
    header: "Front-end",
    title: "React",
    text: "Bibliothèque frontend par Facebook.",
  },
  {
    id: 2,
    header: "Back-end",
    title: "Node",
    text: "Javascript coté serveur, développée par un certain Ryan Lienhart Dahl.",
  },
];
