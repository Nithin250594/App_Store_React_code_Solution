// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, clickOnTab, isActive} = props
  const {tabId, displayText} = tabDetails

  const tabClick = () => {
    clickOnTab(tabId)
  }

  const tabBorderColor = isActive ? 'blueBorder' : ''

  return (
    <li key={tabId} className="each-tab-list">
      <button
        type="button"
        onClick={tabClick}
        className={`button ${tabBorderColor}`}
      >
        <p className="tab-text"> {displayText}</p>
      </button>
    </li>
  )
}

export default TabItem
