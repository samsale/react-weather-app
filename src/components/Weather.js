import React from 'react';

class Weather extends React.Component {

  convertToUs = (temperature) => {
    let usTemp = (temperature * 2) +30
    return this.round(usTemp)
  }

  round = (number) =>{
    return Math.round(number)
  }



render(){

let ukTemp = this.round(this.props.temperature)
let usTemp = this.convertToUs(this.props.temperature)

return (
      <div className='weather__info'>
        {
          this.props.city && this.props.country &&  <p className="weather__key">Location:
          <span className="weather__value"> {this.props.city}, {this.props.country}</span>
          </p>
        }
        {
          this.props.temperature &&  <p className="weather__key">Temperature:
          <span className="weather__value"> {}
          {ukTemp}°C / {usTemp}°F</span>
          </p>
        }
        {
          this.props.humidity &&  <p className="weather__key">Humidity:
          <span className="weather__value"> {this.props.humidity}%</span>
          </p>
        }
        {
          this.props.description &&  <p className="weather__key capitalise">Conditions:
          <span className="weather__value"> {this.props.description}</span>
          </p>
        }
        {
          this.props.error && <p className="weather__error">{this.props.error}</p>
        }
      </div>
  )
}
}
export default Weather
