/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    "pale-yellow": "#fbffa7",
                    "pale-blue": "#b1c5ff",
                    "pale-green": "#b6ffc0",
                    "orange-red": "#ff764d",
                    "light-lilac": "#d5b3ff",
                    "blue":"#0000ff",
                },
            }
        },
    },
    plugins: [],
}
