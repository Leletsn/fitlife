// configuração do Tailwind (CDN) compartilhada por todas as páginas
tailwind.config = {
    theme: {
        extend: {
            fontFamily: { sans: ["Poppins", "sans-serif"] },
            colors: {
                primary: { DEFAULT: "#00b894", dark: "#019477" },
                secondary: "#2d3436",
                page: "#f0f2f5",
                ink: "#333333",
                muted: "#636e72",
                line: "#dfe6e9",
                water: { DEFAULT: "#0984e3", dark: "#076ebc" },
                danger: { DEFAULT: "#d63031", dark: "#b71c1c" },
            },
        },
    },
};
