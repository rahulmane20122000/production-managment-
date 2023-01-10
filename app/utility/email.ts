import { createTransport } from 'nodemailer';

const { EMAIL_PASSWORD } = process.env;



export const sendEmail = async (
    to: string | string[],
    subject: string,
    message: string
) => {
    try {
        const transport = createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'miles.rodriguez@ethereal.email',
                pass: EMAIL_PASSWORD
            },
            tls:{
                rejectUnauthorized:false
            }
        });
        await transport.sendMail({
            to,
            subject,
            text: message,
            from: "aniruddha.gohad@coditas.com"
        });

        return true;
    } catch (e) {
        throw e;
    }
}