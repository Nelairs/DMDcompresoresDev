import dotenv from 'dotenv'
import {createTransport}    from 'nodemailer'

dotenv.config()

const transporter = createTransport({
    host:   'mail.dmdcompresores.com',
    port: 25,
    secure: false,
    ignoreTLS:  true,
    auth:   {
        user:   'soporte@dmdcompresores.com',
        pass:   'Sop2021Ab'
    }, 
})

const mailOptions   =   {
    from: 'soporte@dmdcompresores.com',
    subject:    'NOTIFICACIONES DMD',
}


export  async   function sendMail(addOpts){
    try{
        mailOptions.to =    addOpts.to;
        mailOptions.html    =   
        `<h1>VARIADOR Nro. ${addOpts.text.numero_equipo} DE ${addOpts.text.nombre_cliente}</h1>
            <br>
            <ul>
            <li><p>MARCA: ${addOpts.text.marca_equipo}</p></li><br>
            <li><p>S/N: ${addOpts.text.numero_serie_equipo}</p></li><br>
            <li><p>POTENCIA: ${addOpts.text.potencia_equipo}kW</p></li><br>
            </ul>
        `
        console.log(mailOptions);
        const response  =   await   transporter.sendMail(mailOptions)
        console.log(response);
    }catch(error){
        console.log(error);
    }
}



//sendMail()