import './index.css'

const NoPassword = () => {
  const image = 'https://assets.ccbp.in/frontend/react-js/no-passwords-img.png'
  return (
    <div className="no-password-img-card">
      <img className="no-password-img" src={image} alt="no passwords" />
      <p className="no-password-text">No Passwords</p>
    </div>
  )
}

export default NoPassword
