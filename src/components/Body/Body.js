const Body = (props) =>
  `
    <div class="main__body">
      <div class="main__body__instruction">
        <iframe
          width="560"
          height="315"
          src=${props.url}
          frameborder="0"
          allowfullscreen
        >
        </iframe>
      </div>
    </div>
  `