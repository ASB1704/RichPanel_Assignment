import './Selected_plan.css'

export const Selected_plan = () => {
  return (
    <div className='CurrentMain'>
      <div className="CurretnContainer">
        <div className="CurretnContainer_item1">
          <div className="CurretnContainer_item_in1">
            <div className='CurretnContainer_item_in11'>
              Current Plan Details
            </div>
            <div className='CurretnContainer_item_in12'>
              Active
            </div>
            <div className='CurretnContainer_item_in13'>

            </div>
          </div >
          <div className="CurretnContainer_item_in2">
            Cancel
          </div>
        </div>
        <div className="CurretnContainer_item2">
          <div className='CurretnContainer_item2_in'>
            Basic
          </div>
          <div className="CurretnContainer_item2_in">
            Phone+Tablet
          </div>
        </div>
        <div className="CurretnContainer_item3">
          2000
        </div>
        <div className="CurretnContainer_item4">
          <button className="CurretnContainer_item4_button">
            Change Plan
          </button>
        </div>
        <div className="CurretnContainer_item5">
          Your subsciption has started from Jul 11th, 2022 and will auto renew on Jul 12th, 2023.
        </div>
      </div>
    </div>
  )
}

