export const PHONE_DISPLAY = "85548 75216";
export const PHONE_HREF = "tel:+918554875216";

export const QUOTE_MESSAGE = "Hello Bawaskar Fiber Arts, I would like a quotation for an idol.";

export const whatsappLink = (message = QUOTE_MESSAGE) =>
    `https://wa.me/918554875216?text=${encodeURIComponent(message)}`;
