
import { Header } from './components/Header'

import styled from './app.module.css'
import './global.css'
import Sidebar from './components/Sidebar'
import Post from './components/Post'

const posts = [
  {
    id: 1,
    author:{
      avatarUrl: 'https://github.com/willfjunior.png',
      name: 'Willians Junior',
      role: 'FullStack Developer'
    },
    content:[
      {type: 'paragraph', content: 'Fala Galera 👋'},
      {type: 'paragraph', content: 'Mais um Projeto no Ar'},
      {type: 'link', content: 'willfjr.github/ignite'}
    ],
    publishAt: new Date('2022-09-22 08:00' )  
  },
  {
    id: 2,
    author:{
      avatarUrl: 'https://github.com/wellingtonmoraiis.png',
      name: 'Wellington Morais',
      role: 'Front End Developer'
    },
    content:[
      {type: 'paragraph', content: 'Fala Galera 👋'},
      {type: 'paragraph', content: 'Mais um Projeto no Ar'},
      {type: 'link', content: 'willfjr.github/ignite'}
    ],
    publishAt: new Date('2022-09-22 08:00' )  
  }
  
]

function App() {

  return (
    <div className="App">
      < Header/>
      <div className={styled.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
              author={post.author}
              content={post.content}
              publishAt={post.publishAt}
              />
            )
          })}
        </main>

      </div>
    </div>
  )
}

export default App
