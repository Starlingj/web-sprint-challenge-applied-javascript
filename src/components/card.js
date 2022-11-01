import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const newCard = document.createElement('div');
  const divHeadline = document.createElement('div');
  const divAuthor = document.createElement('div');
  const divImgContainer = document.createElement('div');
  const image = document.createElement('img');
  const name = document.createElement('span');

  newCard.classList.add('card');
  divHeadline.classList.add('headline');
  divAuthor.classList.add('author');
  divImgContainer.classList.add('img-container');
  
  newCard.appendChild(divHeadline);
  newCard.appendChild(divAuthor);
  divAuthor.appendChild(divImgContainer);
  divImgContainer.appendChild(image);
  divAuthor.appendChild(name);

  divHeadline.textContent = `${article.headline}`
  image.src = `${article.authorPhoto}`
  name.textContent = `By ${article.authorName}`

  newCard.addEventListener('click', ()=>{
    console.log(divHeadline)
  })

  return newCard
}

  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  
  
const cardAppender = (selector) => {
  const array = ['javascript', 'bootstrap', 'technology', 'jquery', 'node']
  axios.get(`https://lambda-times-api.herokuapp.com/articles`)
  .then((res) => {
    array.forEach(topic => {
      res.data.articles[topic].forEach(el => {
        const newDiv = Card(el)
        document.querySelector(selector).appendChild(newDiv)
      })
    })
  })
  .catch((err) => {
    console.log(err)
  })

}

export { Card, cardAppender }