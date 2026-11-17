var maskPII = function(s) {

    if (s.includes("@")) {
        let [name, domain] = s.toLowerCase().split("@");

        return name[0] + "*****" + name[name.length - 1] + "@" + domain;
    }

    let digits = s.replace(/\D/g, "");

    let local = digits.slice(-10);
    let countryCodeLength = digits.length - 10;

    let result = "***-***-" + local.slice(-4);

    if (countryCodeLength > 0) {
        result = "+" + "*".repeat(countryCodeLength) + "-" + result;
    }

    return result;
};

