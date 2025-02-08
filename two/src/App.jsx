import styles from "./app.module.css"
import image from "./assets/images.webp"
import image1 from "./assets/image1.webp"
import image2 from "./assets/image2.webp"
import image3 from "./assets/image3.webp"
import { Card } from "./components/card/card.jsx";
import { One } from "./components/one/one.jsx";

const cardData = [
    { id: 1, title: "Карточка 1", dsc: "Описание карточки 1", image: image },
    { id: 2, title: "Карточка 2", dsc: "Описание карточки 2", image: image },
    { id: 3, title: "Карточка 3", dsc: "Описание карточки 3", image: image },
    { id: 4, title: "Карточка 4", dsc: "Описание карточки 4", image: image },
    { id: 5, title: "Карточка 5", dsc: "Описание карточки 5", image: image1 },
    { id: 6, title: "Карточка 6", dsc: "Описание карточки 6", image: image1 },
    { id: 7, title: "Карточка 7", dsc: "Описание карточки 7", image: image1 },
    { id: 8, title: "Карточка 8", dsc: "Описание карточки 8", image: image1 },
    { id: 9, title: "Карточка 9", dsc: "Описание карточки 9", image: image2 },
    { id: 10, title: "Карточка 10", dsc: "Описание карточки 10", image: image2 },
    { id: 11, title: "Карточка 11", dsc: "Описание карточки 11", image: image2 },
    { id: 12, title: "Карточка 12", dsc: "Описание карточки 12", image: image2 },
    { id: 13, title: "Карточка 13", dsc: "Описание карточки 13", image: image3 },
    { id: 14, title: "Карточка 14", dsc: "Описание карточки 14", image: image3 },
    { id: 15, title: "Карточка 15", dsc: "Описание карточки 15", image: image3 },
    { id: 16, title: "Карточка 16", dsc: "Описание карточки 16", image: image3 },
];

function App() {
  return (
      <div className={styles.wrapper}>
          <One />
          <div className={styles.main}>
              {cardData.map(({ id, title, dsc, image }) => (
                  <Card
                      key={id}
                      title={title}
                      dsc={dsc}
                      image={image}
                  />
              ))}
          </div>
      </div>
  )
}

export default App
