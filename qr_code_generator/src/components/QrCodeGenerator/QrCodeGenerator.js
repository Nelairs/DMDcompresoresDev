import React from 'react';
import QRCode from 'easyqrcodejs';
import './QrCodeGenerator.css'
class QrClass extends React.Component {

    constructor(props) {
        super(props);
        this.qrcode = React.createRef();
    }

    componentDidMount() {
        // Options
        var options = {
            text: "https://youtu.be/5lZtafp1QKw",
            // ====== Backgroud Image
            backgroundImage: './DMDLOGO.png', // Background Image
            backgroundImageAlpha: 1, // Background image transparency, value between 0 and 1. default is 1. 
            autoColor: false, // Automatic color adjustment(for data block)
            autoColorDark: "rgba(0, 0, 0, .6)", // Automatic color: dark CSS color
            autoColorLight: "rgba(255, 255, 255, .7)", // Automatic color: light CSS color
        }
        // Create new QRCode Object
        new QRCode( this.qrcode.current, options);
    }
    render() {
        return ( 
        <div className = "qr-class">
            <div ref={this.qrcode}  className='canvas-qr'></div> 
        </div>
        );
    }
}

export default QrClass;