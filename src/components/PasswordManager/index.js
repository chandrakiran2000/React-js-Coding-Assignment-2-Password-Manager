import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoPassword from '../NoPassword'
import PasswordView from '../PasswordView'
import './index.css'

class PasswordManager extends Component {
  state = {
    isShowingPassword: false,
    search: '',
    websiteName: '',
    userName: '',
    password: '',
    passwordList: [],
  }

  onSubmitHandle = event => {
    event.preventDefault()
    const {websiteName, userName, password} = this.state
    const newList = {
      id: uuidv4(),
      websiteName,
      userName,
      password,
    }
    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, newList],
      websiteName: '',
      userName: '',
      password: '',
    }))
  }

  enterWebsiteName = event => {
    //  console.log(event.target.value)
    this.setState({websiteName: event.target.value})
  }

  enterUserName = event => {
    //  console.log(event.target.value)
    this.setState({userName: event.target.value})
  }

  enterPassword = event => {
    //  console.log(event.target.value)
    this.setState({password: event.target.value})
  }

  handleSearch = event => {
    console.log(event.target.value)
    this.setState({search: event.target.value})
  }

  handleShowPassword = () => {
    this.setState(prevState => ({
      isShowingPassword: !prevState.isShowingPassword,
    }))
  }

  deletingPasswordInList = id => {
    console.log(id)
    this.setState(prevState => ({
      passwordList: prevState.passwordList.filter(each => each.id !== id),
    }))
  }

  render() {
    const {
      isShowingPassword,
      search,
      passwordList,
      websiteName,
      userName,
      password,
    } = this.state
    const passwordsL = passwordList.filter(each =>
      each.websiteName.toLowerCase().includes(search.toLowerCase()),
    )

    console.log(window.innerWidth)
    const imgUrl =
      window.innerWidth < 768
        ? 'https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png'
    return (
      <div className="bg-card">
        <div className="password-manager-card">
          <div className="logo-card">
            <img
              className="logo-img"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
              alt="app logo"
            />
          </div>
          <div className="add-new-password-card">
            <div className="input-password-card">
              <h1 className="add-new-password-heading">Add New Password</h1>
              <form className="input-form-card" onSubmit={this.onSubmitHandle}>
                <div className="enter-website-card">
                  <img
                    className="enter-website-img"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                  />
                  <input
                    type="text"
                    className="enter-website-name"
                    value={websiteName}
                    placeholder="Enter Website"
                    onChange={this.enterWebsiteName}
                  />
                </div>
                <div className="enter-username-card">
                  <img
                    className="enter-username-img"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                  />
                  <input
                    type="text"
                    className="enter-username-name"
                    value={userName}
                    onChange={this.enterUserName}
                    placeholder="Enter Username"
                  />
                </div>
                <div className="enter-password-card">
                  <img
                    className="enter-password-img"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                  />
                  <input
                    type="password"
                    className="enter-password-name"
                    value={password}
                    onChange={this.enterPassword}
                    placeholder="Enter Password"
                  />
                </div>
                <button className="add-btn" type="submit">
                  Add
                </button>
              </form>
            </div>

            <img
              className="password-manager-img"
              src={imgUrl}
              alt="password manager"
            />
          </div>

          <div className="your-password-card">
            <div className="your-password-search-card">
              <div className="counts-card">
                <h1 className="your-password-text">Your Passwords</h1>
                <p className="counts">{passwordsL.length}</p>
              </div>
              <div className="search-card">
                <img
                  className="search-img"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                />
                <input
                  type="search"
                  className="search-input"
                  onChange={this.handleSearch}
                  placeholder="search"
                />
              </div>
            </div>
            <div className="show-password-card">
              <div className="show-password-cards">
                <input
                  type="checkbox"
                  value={isShowingPassword}
                  onChange={this.handleShowPassword}
                  className="show-password-tick"
                  id="check"
                />
                <label htmlFor="check" className="show-password-text">
                  Show passwords
                </label>
              </div>
            </div>
            {passwordsL.length === 0 ? (
              <NoPassword />
            ) : (
              <ul className="password-list-card">
                {passwordsL.map(each => (
                  <PasswordView
                    each={each}
                    isShowingPassword={isShowingPassword}
                    deletingPasswordInList={this.deletingPasswordInList}
                    key={each.id}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
