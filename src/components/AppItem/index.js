// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, appId, imageUrl} = appDetails

  return (
    <li key={appId} className="app-container">
      <img src={imageUrl} alt={appName} className="app-image-size" />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
