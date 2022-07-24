import React from "react";
import Article from "../components/Article";
const articles = [
    
    {
    id: 1,
    title: "JavaScript",
    author: "Kacper L",
    text: " JavaScript to język programowania, który umożliwia wdrożenie na stronie internetowej skomplikowanych elementów, dzięki którym strona ta może nie tylko wyświetlać statyczne informacje, ale również obsługiwać zmianę treść odpowiednio do sytuacji, wyświetlać interaktywne mapy i animacje grafiki 2D/3D , wyświetlać video itd. Jest to trzecia warstwa standardowych technologii internetowych, z których dwie (HTML i CSS) omówiliśmy w innych częściach Strefy nauki."
    },
          
    {
    id: 2,
    title: "Czym jest React",
    author: "Kacper Nowak",
    text: "javascriptowa biblioteka służąca do tworzenia interfejsów użytkownika"
    },

    {
    id: 3,
    title: "Dlaczego się ucze programowania",
    author: "Kacper L",
    text: "Bo lubię ;D"
    }

]


 const HomePage = () => {

    const artList = articles.map(article => (
        <Article key={article.id} {...article} />
    ))
     return(
         <div className="home">
             {artList}
             </div>
     );
 }
 export default HomePage;