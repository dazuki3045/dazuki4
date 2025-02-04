import image from "./assets/images.webp"

export const Card = () => {
    return (
        <div className="card">
            <img src={image} alt="image"/>
            <h2>Карточка</h2>
            <p>Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Aliquid aut consequatur
                id incidunt magnam quibusdam sit
                ullam. Ab alias culpa iure quod rem?
            </p>
        </div>
    )
}