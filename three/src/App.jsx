import styles from "./app.module.css"
import { Card } from "./components/card/card.jsx";
import { One } from "./components/one/one.jsx";

const cardData = [
    { id: 1, title: "Карточка 1", date: "10.01.2025", complete: true },
    { id: 2, title: "Карточка 2", date: "10.01.2025", complete: false },
    { id: 3, title: "Карточка 3", date: "10.01.2025", complete: true },
    { id: 4, title: "Карточка 4", date: "10.01.2025", complete: false },
    { id: 5, title: "Карточка 5", date: "10.01.2025", complete: true},
    { id: 6, title: "Карточка 6", date: "10.01.2025", complete: false},
    { id: 7, title: "Карточка 7", date: "10.01.2025", complete: false},
    { id: 8, title: "Карточка 8", date: "10.01.2025", complete: false},
    { id: 9, title: "Карточка 9", date: "10.01.2025", complete: false},
    { id: 10, title: "Карточка 10", date: "10.01.2025", complete: true},
    { id: 11, title: "Карточка 11", date: "10.01.2025", complete: true},
    { id: 12, title: "Карточка 12", date: "10.01.2025", complete: false},
    { id: 13, title: "Карточка 13", date: "10.01.2025", complete: true},
    { id: 14, title: "Карточка 14", date: "10.01.2025", complete: true},
    { id: 15, title: "Карточка 15", date: "10.01.2025", complete: false},
    { id: 16, title: "Карточка 16", date: "10.01.2025", complete: true},
];

function App() {
  return (
      <div className={styles.wrapper}>
          <One />
          <div className={styles.main}>
              {cardData.map(({ id, title, date, complete}) => (
                  <Card
                      key={id}
                      title={title}
                      date={date}
                      complete={complete}
                  />
              ))}
          </div>
      </div>
  )
}

export default App
