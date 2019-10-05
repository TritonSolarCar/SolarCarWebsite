import React from 'react'

const PayPalButtonStyle = {
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto'
}

const FormStyle = {
  marginBottom: '2em'
}

const DonateStyle = {
  border: '1px solid black',
  borderRadius: '5px',
  width: '50%',
  margin: 'auto'
}

export default  function PayPalButton() {
  return (
    <div className="my-5" style={ DonateStyle }>
      <h1 className="text-center">Donate Here</h1>
      <form
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
        target="_top"
        style={ FormStyle }
      >
        <input type="hidden" name="cmd" value="_donations" />
        <input type="hidden" name="business" value="4GU59ZM4KEAWJ" />
        <input type="hidden" name="currency_code" value="USD" />
        <input 
          type="image"
          src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
          border="0"
          name="submit"
          title="PayPal - The safer, easier way to pay online!"
          alt="Donate with PayPal button"
          style={ PayPalButtonStyle }
        />
        <img
          alt=""
          border="0"
          src="https://www.paypal.com/en_US/i/scr/pixel.gif"
          width="1"
          height="1"
        />
      </form>
    </div>
  )
};