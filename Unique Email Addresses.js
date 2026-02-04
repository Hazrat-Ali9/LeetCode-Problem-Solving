var numUniqueEmails = function(emails) {
    const set = new Set();

    for (let email of emails) {
        let [local, domain] = email.split('@');

     
        local = local.split('+')[0];

  
        local = local.replace(/\./g, '');

  
        let normalizedEmail = local + '@' + domain;
        set.add(normalizedEmail);
    }

    return set.size;
};

