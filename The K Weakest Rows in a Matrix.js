var kWeakestRows = function(mat, k) {

    let rows = [];

    for (let i = 0; i < mat.length; i++) {
        let soldiers = 0;

        for (let j = 0; j < mat[i].length; j++) {
            soldiers += mat[i][j];
        }

        rows.push([soldiers, i]);
    }

    rows.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1]; 
        }
        return a[0] - b[0]; 
    });

    return rows.slice(0, k).map(row => row[1]);
};
