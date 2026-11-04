var validIPAddress = function(queryIP) {
    if (queryIP.includes(".")) {
        const parts = queryIP.split(".");

        if (parts.length !== 4) return "Neither";

        for (const part of parts) {
            if (
                part.length === 0 ||
                part.length > 3 ||
                (part.length > 1 && part[0] === '0') ||
                !/^\d+$/.test(part)
            ) {
                return "Neither";
            }

            const num = Number(part);

            if (num < 0 || num > 255) {
                return "Neither";
            }
        }

        return "IPv4";
    }

    if (queryIP.includes(":")) {
        const parts = queryIP.split(":");

        if (parts.length !== 8) return "Neither";

        for (const part of parts) {
            if (
                part.length < 1 ||
                part.length > 4 ||
                !/^[0-9a-fA-F]+$/.test(part)
            ) {
                return "Neither";
            }
        }

        return "IPv6";
    }

    return "Neither";
};
