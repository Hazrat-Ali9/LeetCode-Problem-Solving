var GetImportance = function(employees, id) {
    const map = new Map();

    for (const employee of employees) {
        map.set(employee.id, employee);
    }

    function dfs(employeeId) {
        const employee = map.get(employeeId);

        let total = employee.importance;

        for (const subordinateId of employee.subordinates) {
            total += dfs(subordinateId);
        }

        return total;
    }

    return dfs(id);
};
