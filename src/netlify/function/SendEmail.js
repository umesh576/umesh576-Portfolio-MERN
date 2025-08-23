import emailjs from "emailjs-com";

export async function handler(event) {
  try {
    const { name, email, subject, message, purpose } = JSON.parse(event.body);

    const result = await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID,
      {
        name,
        email,
        subject,
        message,
        purpose,
        time: new Date().toLocaleString(),
        to_name: "Umesh Joshi",
      },
      process.env.EMAILJS_USER_ID
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, result }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: error.message }),
    };
  }
}
