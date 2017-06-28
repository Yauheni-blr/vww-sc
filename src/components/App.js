const App = () =>
  `
    <div class="app">
      ${
        Header({ projectName: 'Cool Project' })
        + Body({ url: 'https://www.youtube.com/embed/gCcx85zbxz4' })
        + Footer({ copyBy: 'Vistula Web Warsaw' })
      }
    </div>
  
  `
  

