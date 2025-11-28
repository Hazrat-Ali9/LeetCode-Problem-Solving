var checkIfInstanceOf = function(obj, classFunction) {
    if (obj === null || obj === undefined) return false;
    if (typeof classFunction !== "function") return false;

  
    if (typeof obj !== "object") {
        return obj instanceof classFunction || classFunction === Number && typeof obj === "number"
            || classFunction === String && typeof obj === "string"
            || classFunction === Boolean && typeof obj === "boolean";
    }

 
    let proto = Object.getPrototypeOf(obj);

    while (proto !== null) {
        if (proto.constructor === classFunction) return true;
        proto = Object.getPrototypeOf(proto);
    }

    return false;
};
