import React from "react";

const PayPalButtonStyle = {
  display: "block",
  marginLeft: "auto",
  marginRight: "auto"
};

const FormStyle = {
  marginBottom: "2em"
};

const DonateStyle = {
  border: "1px solid black",
  borderRadius: "5px",
  width: "50%",
  margin: "auto"
};

const donateTextStyle = {
  fontFamily: "Acme",
  color: "#244e91"
};

export default function PayPalButton() {
  return (
    <div className="my-5">
      <h1 className="text-center" style={donateTextStyle}>
        Donate Here
      </h1>
      <form
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
        target="_top"
        style={FormStyle}
      >
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="RF8PH253QA82U" />
        <input
          type="image"
          src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
          border="0"
          name="submit"
          title="PayPal - The safer, easier way to pay online!"
          alt="Donate with PayPal button"
          style={PayPalButtonStyle}
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
  );
}
