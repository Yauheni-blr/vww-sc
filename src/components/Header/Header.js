const Header = (props) =>
  `
    <div class="main__header">
      <div class="main__header__logo">
        <span class="main__header__logo-item">
          ${props.projectName}
        </span>
      </div>

      <div class="main__header__auth">
        <button class="main__header__auth-item" onClick="handleClick()">
          Log in
        </button>
      </div>
    </div>
  `


function handleClick() {
  initModal()
}