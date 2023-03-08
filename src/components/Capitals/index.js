import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {
    nowSelectedId: countryAndCapitalsList[0].id,
  }

  onChangeOption = event => this.setState({nowSelectedId: event.target.value})

  getCountry = () => {
    const {nowSelectedId} = this.state
    const resultItems = countryAndCapitalsList.find(
      each => each.id === nowSelectedId,
    )
    return resultItems
  }

  render() {
    const {nowSelectedId} = this.state

    const country = this.getCountry(nowSelectedId)

    return (
      <div className="app-container">
        <div className="white-con">
          <h1 className="head">Countries And Capitals</h1>
          <form className="sel">
            <select id="inp" onChange={this.onChangeOption}>
              {countryAndCapitalsList.map(eachCountry => (
                <option value={eachCountry.id} key={eachCountry.id}>
                  {eachCountry.capitalDisplayText}
                </option>
              ))}
            </select>
            <label className="span" htmlFor="inp">
              is capital of which country?
            </label>
          </form>
          <p className="result">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
