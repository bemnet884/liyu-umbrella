import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { orderType, name, email, phone, model, quantity, shopName, zones } = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.OWNER_EMAIL,
      subject: `New ${orderType === 'single' ? 'Single' : 'Bulk'} Order Received`,
      text: `
        Order Type: ${orderType === 'single' ? 'Single User' : 'Bulk Order'}
        Name: ${name || shopName}
        Email: ${email}
        Phone: ${phone}
        Umbrella Model: ${model}
        Quantity: ${quantity || ''}
        ${orderType === 'bulk' ? `Quantity by Zone:\n${Object.entries(zones).map(([zone, qty]) => `${zone}: ${qty}`).join('\n')}` : ''}
      `,
    };

    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: 'Order sent successfully!' }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error); // Log the specific error
    return new Response(JSON.stringify({ message: 'Error sending order', error: error.message }), { status: 500 });
  }
}

