import './index.css'

const PasswordView = props => {
  const {each, isShowingPassword, deletingPasswordInList} = props
  const {id, websiteName, userName, password} = each
  console.log(websiteName[0].toUpperCase())
  const handleOnclick = () => {
    deletingPasswordInList(id)
  }
  const starsImg =
    'https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png'
  return (
    <li className="password-view-card">
      <div className="password-view-details-card">
        <h1 className="first-letter">{websiteName[0].toUpperCase()}</h1>
        <div className="website-details-card">
          <p className="website-website-text">{websiteName}</p>
          <p className="website-name-text">{userName}</p>
          {isShowingPassword ? (
            <p className="website-name-text">{password}</p>
          ) : (
            <img className="stars-img" src={starsImg} alt="stars" />
          )}
        </div>
      </div>
      <button
        className="del-btn"
        data-testid="delete"
        onClick={handleOnclick}
        type="button"
      >
        <img
          className="delete-img"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default PasswordView
